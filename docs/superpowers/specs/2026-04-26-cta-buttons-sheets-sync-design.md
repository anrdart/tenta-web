# Design: CTA Buttons Fungsional + Google Sheets Lead Sync

**Date:** 2026-04-26  
**Status:** Approved  

---

## Overview

Two goals:
1. All CTA buttons on the landing page become functional WhatsApp links with context-aware pre-filled messages.
2. Contact form submissions at `/contact` are synced to the client's Google Sheet via a Google Apps Script webhook — so every lead is tracked in their existing CRM sheet automatically.

WhatsApp number: `6285177111104`  
Google Sheet: `177Ms9ZFhvoSWlXQNEYJOni6-BUO5RjgRtYbPXHraxMo`

---

## Part 1 — CTA Buttons → WhatsApp

All CTA buttons become `<a>` tags (or `onClick` + `window.open`) pointing to `https://wa.me/6285177111104?text=<encoded-message>`.

### Button Map

| Location | Button Label | Pre-filled Message |
|---|---|---|
| Nav `.chip` | 💬 WhatsApp | "Halo TENTA! Saya ingin bertanya mengenai layanan kalian." |
| Nav `.btn` | Konsultasi Gratis | "Halo TENTA! Saya ingin konsultasi gratis 30 menit untuk bisnis saya. Bisa diatur jadwalnya?" |
| Hero | Konsultasi Gratis 30 mnt → | sama dengan Nav Konsultasi Gratis |
| CtaStrip | Booking sekarang → | "Halo TENTA! Saya ingin booking sesi konsultasi gratis. Kapan bisa?" |
| Pricing: Pilih Starter | Pilih Starter | "Halo TENTA! Saya tertarik dengan paket *Starter* (Rp 6jt/bln). Bisa dijelaskan lebih lanjut?" |
| Pricing: Pilih Growth | Pilih Growth | "Halo TENTA! Saya tertarik dengan paket *Growth* (Rp 15jt/bln). Bisa dijelaskan lebih lanjut?" |
| Pricing: Hubungi Sales | Hubungi Sales | "Halo TENTA! Saya ingin mendiskusikan kebutuhan custom untuk paket Scale. Bisa dihubungi?" |
| Services: setiap card | Detail / icon button | "Halo TENTA! Saya ingin tahu lebih lanjut soal layanan *[nama layanan]*." |

### Implementation Notes

- Nav buttons: ubah `<button>` jadi `<a>` dengan `target="_blank" rel="noopener noreferrer"`.
- Pricing & Services: tiap item punya pesan berbeda — message di-generate dari prop data (`name`, `price`, `title`).
- `wa.me` URL: `https://wa.me/6285177111104?text=${encodeURIComponent(message)}`.
- Buat helper function `waLink(message: string): string` di `lib/wa.ts` untuk reuse.

---

## Part 2 — Google Sheets Lead Sync via Apps Script Webhook

### Architecture

```
User submits /contact form
        ↓
POST /api/contact
        ↓
Save to MySQL DB (existing)
        ↓
POST to Apps Script Webhook URL  ← fire-and-forget, tidak block response
        ↓
Apps Script appends row ke Google Sheet
```

Webhook call adalah **fire-and-forget**: jika Google gagal, form submission tetap berhasil dan tersimpan di DB. Error sync dicatat di server console tapi tidak dikembalikan ke user.

### Google Sheet Target

Row format yang ditulis ke sheet (tab baru bernama **"Leads"**):

| A: Timestamp | B: Nama | C: Email | D: Telepon | E: Pesan | F: Source |
|---|---|---|---|---|---|
| 2026-04-26 10:30 | Budi Santoso | budi@example.com | 0812xxx | "Ingin konsultasi SEO" | website-form |

### Apps Script Webhook (yang user setup manual)

User perlu:
1. Buka Google Sheet → Extensions → Apps Script
2. Paste script berikut (disediakan di spec):

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName('Leads') || 
    SpreadsheetApp.getActiveSpreadsheet().insertSheet('Leads');
  
  const data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    new Date().toLocaleString('id-ID'),
    data.name || '',
    data.email || '',
    data.phone || '',
    data.message || '',
    data.source || 'website-form'
  ]);
  
  return ContentService
    .createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Deploy → New deployment → Web app → Execute as: Me, Access: Anyone
4. Copy URL → paste ke `.env` sebagai `GOOGLE_SHEET_WEBHOOK_URL`

### Code Changes

**`/lib/sheets.ts`** (new file):
```ts
export async function syncLeadToSheet(data: {
  name: string; email: string; phone?: string; message: string; source?: string;
}) {
  const url = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!url) return; // silently skip if not configured
  try {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, source: data.source ?? 'website-form' }),
    });
  } catch {
    console.error('[sheets] Failed to sync lead to Google Sheet');
  }
}
```

**`/app/api/contact/route.ts`**: setelah `prisma.contactSubmission.create(...)`, tambahkan `syncLeadToSheet(...)` call (non-awaited, fire-and-forget).

### Environment Variable

Tambahkan ke `.env.local` (dan `.env.example` untuk dokumentasi):
```
GOOGLE_SHEET_WEBHOOK_URL=https://script.google.com/macros/s/.../exec
```

---

## Out of Scope

- Newsletter form sync ke Google Sheet (footer) — tidak diminta.
- Tracking klik WhatsApp button ke sheet — tidak ada form, jadi tidak ada data nama/email yang bisa dikumpulkan.
- Admin panel sheet view — sudah ada `/admin/contacts` di app.

---

## Files Changed

| File | Action |
|---|---|
| `lib/wa.ts` | Create — helper `waLink()` |
| `lib/sheets.ts` | Create — helper `syncLeadToSheet()` |
| `components/landing/Nav.tsx` | Edit — buttons → WhatsApp links |
| `components/landing/Nav.module.css` | Edit — `<a>` display styling |
| `components/landing/Hero.tsx` | Edit — CTA button → WhatsApp link |
| `components/landing/CtaStrip.tsx` | Edit — button → WhatsApp link |
| `components/landing/Pricing.tsx` | Edit — tier CTAs → WhatsApp links with plan-specific message |
| `components/landing/Services.tsx` | Edit — card CTAs → WhatsApp links |
| `app/api/contact/route.ts` | Edit — add `syncLeadToSheet()` call |
| `.env.local` | Edit — add `GOOGLE_SHEET_WEBHOOK_URL` |
