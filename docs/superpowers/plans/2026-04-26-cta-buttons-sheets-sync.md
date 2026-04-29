# CTA Buttons Fungsional + Google Sheets Lead Sync — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make all landing-page CTA buttons open WhatsApp with context-specific pre-filled messages, and sync contact form submissions to a Google Sheet via Apps Script webhook.

**Architecture:** A shared `lib/wa.ts` utility builds WhatsApp URLs; all CTA buttons become `<a>` tags consuming it. A `lib/sheets.ts` utility fires a fire-and-forget POST to an Apps Script webhook URL after DB save in `/api/contact`. No third-party SDK — just `fetch`.

**Tech Stack:** Next.js 16 App Router, TypeScript, Google Apps Script (webhook, user-configured)

---

## File Map

| File | Action | Responsibility |
|---|---|---|
| `lib/wa.ts` | Create | Builds `wa.me` URLs with encoded messages |
| `lib/sheets.ts` | Create | Fire-and-forget POST to Apps Script webhook |
| `components/landing/Nav.tsx` | Modify | WhatsApp + Konsultasi Gratis → `<a>` tags |
| `components/landing/Nav.module.css` | Modify | Ensure `<a>` tags render identically to buttons |
| `components/landing/Hero.tsx` | Modify | CTA button → `<a>` tag |
| `components/landing/CtaStrip.tsx` | Modify | "Booking sekarang" button → `<a>` tag |
| `components/landing/Pricing.tsx` | Modify | Tier CTAs → `<a>` tags with plan-specific messages |
| `components/landing/Services.tsx` | Modify | Card `↗` buttons → `<a>` tags |
| `app/api/contact/route.ts` | Modify | Add `syncLeadToSheet()` after DB save |
| `.env.local` | Modify | Add `GOOGLE_SHEET_WEBHOOK_URL` |

---

## Task 1: Create `lib/wa.ts`

**Files:**
- Create: `lib/wa.ts`

- [ ] **Step 1: Create the file**

```ts
const WA_NUMBER = '6285177111104';

export function waLink(message: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_GENERAL =
  waLink('Halo TENTA! Saya ingin konsultasi gratis 30 menit untuk bisnis saya. Bisa diatur jadwalnya?');

export const WA_WHATSAPP =
  waLink('Halo TENTA! Saya ingin bertanya mengenai layanan kalian.');

export const WA_BOOKING =
  waLink('Halo TENTA! Saya ingin booking sesi konsultasi gratis. Kapan bisa?');
```

- [ ] **Step 2: Verify it builds**

```bash
cd /home/ekalliptus/dev/tentaklik/tenta-web && npx tsc --noEmit 2>&1 | head -20
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add lib/wa.ts
git commit -m "feat: add waLink helper for WhatsApp CTAs"
```

---

## Task 2: Update `Nav.tsx` — buttons → WhatsApp links

**Files:**
- Modify: `components/landing/Nav.tsx`

Current state:
- `<span className={styles.chip}>💬 WhatsApp</span>` — dead span
- `<button className={styles.btn}>Konsultasi Gratis</button>` — dead button
- `<span className={styles.mobileChip}>Konsultasi Gratis</span>` — dead span in mobile menu

- [ ] **Step 1: Replace all three elements**

Replace the full file content:

```tsx
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Nav.module.css';
import { WA_WHATSAPP, WA_GENERAL } from '@/lib/wa';

const TentaLogo = () => (
  <svg viewBox="0 0 40 40" width="36" height="36" aria-hidden>
    <circle cx="20" cy="20" r="18" fill="var(--tenta-500)"/>
    <path d="M8 28 L20 10 L32 28 Z" fill="var(--paper)"/>
    <circle cx="20" cy="20" r="3" fill="var(--ink-950)"/>
  </svg>
);

const Nav: React.FC = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.brand}>
          <TentaLogo />
          TENTA
        </div>
        <div className={styles.navLeft}>
          <Link href="#home" className={styles.active}>Beranda</Link>
          <Link href="#services">Layanan</Link>
          <Link href="#case-studies">Case Study</Link>
          <Link href="#pricing">Harga</Link>
          <Link href="#contact">Tentang</Link>
        </div>
        <div className={styles.navRight}>
          <a href={WA_WHATSAPP} target="_blank" rel="noopener noreferrer" className={styles.chip}>
            💬 WhatsApp
          </a>
          <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer" className={styles.btn}>
            Konsultasi Gratis
          </a>
          <button
            className={`${styles.hamburger} ${open ? styles.hamburgerOpen : ''}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>
      {open && (
        <div className={styles.mobileMenu}>
          <Link href="#home" onClick={close}>Beranda</Link>
          <Link href="#services" onClick={close}>Layanan</Link>
          <Link href="#case-studies" onClick={close}>Case Study</Link>
          <Link href="#pricing" onClick={close}>Harga</Link>
          <Link href="#contact" onClick={close}>Tentang</Link>
          <a
            href={WA_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileChip}
            onClick={close}
          >
            Konsultasi Gratis
          </a>
        </div>
      )}
    </>
  );
};

export default Nav;
```

- [ ] **Step 2: Fix CSS — `<a>` tags need button-like display**

In `components/landing/Nav.module.css`, add `display: inline-flex; align-items: center;` to `.chip` and `.btn`:

```css
.chip { background: var(--paper); border: 2px solid var(--ink-950); padding: 10px 18px; border-radius: 999px; font-size: 13.5px; font-weight: 600; cursor: pointer; transition: background .15s; display: inline-flex; align-items: center; }
.chip:hover { background: var(--tenta-100); }
.btn { background: var(--tenta-500); color: var(--paper); padding: 10px 18px; border-radius: 999px; font-family: 'Montserrat', ui-sans-serif; font-weight: 700; font-size: 13.5px; cursor: pointer; border: 2px solid var(--ink-950); box-shadow: 3px 3px 0 var(--ink-950); transition: all .1s; display: inline-flex; align-items: center; }
```

- [ ] **Step 3: TypeScript check**

```bash
cd /home/ekalliptus/dev/tentaklik/tenta-web && npx tsc --noEmit 2>&1 | head -20
```

Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add components/landing/Nav.tsx components/landing/Nav.module.css
git commit -m "feat: nav WhatsApp and Konsultasi Gratis buttons now open WhatsApp"
```

---

## Task 3: Update `Hero.tsx` — CTA button → WhatsApp link

**Files:**
- Modify: `components/landing/Hero.tsx`

Current state: `<button className={styles.btn}>Konsultasi Gratis 30 mnt →</button>`

- [ ] **Step 1: Add import and replace button**

At top of file, add import after existing imports:
```tsx
import { WA_GENERAL } from '@/lib/wa';
```

Replace the button:
```tsx
// BEFORE:
<button className={styles.btn}>Konsultasi Gratis 30 mnt →</button>

// AFTER:
<a href={WA_GENERAL} target="_blank" rel="noopener noreferrer" className={styles.btn}>
  Konsultasi Gratis 30 mnt →
</a>
```

- [ ] **Step 2: Add `display: inline-flex` to Hero `.btn`**

In `components/landing/Hero.module.css`, find `.btn` rule and add `display: inline-flex; align-items: center;`:

```css
.btn { padding: 14px 26px; border-radius: 999px; background: var(--tenta-500); color: var(--paper); font-family: 'Montserrat', ui-sans-serif; font-weight: 700; font-size: 15.5px; border: 2px solid var(--ink-950); box-shadow: 4px 4px 0 var(--ink-950); cursor: pointer; transition: all .1s; display: inline-flex; align-items: center; }
```

- [ ] **Step 3: TypeScript check**

```bash
cd /home/ekalliptus/dev/tentaklik/tenta-web && npx tsc --noEmit 2>&1 | head -20
```

Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add components/landing/Hero.tsx components/landing/Hero.module.css
git commit -m "feat: hero CTA button opens WhatsApp"
```

---

## Task 4: Update `CtaStrip.tsx` — "Booking sekarang" → WhatsApp link

**Files:**
- Modify: `components/landing/CtaStrip.tsx`

Current state: `<button className={styles.v3Btn}>Booking sekarang →</button>`

- [ ] **Step 1: Replace with `<a>` tag**

Full file after change:

```tsx
import React from 'react';
import styles from './CtaStrip.module.css';
import { WA_BOOKING } from '@/lib/wa';

const CtaStrip: React.FC = () => {
  return (
    <section className={styles.ctaStrip}>
      <div className={styles.ctaBig}>
        <h2>Siap tumbuh <em>bareng&nbsp;kami?</em></h2>
        <p>Konsultasi 30 menit, tanpa biaya, tanpa komitmen.</p>
        <a href={WA_BOOKING} target="_blank" rel="noopener noreferrer" className={styles.v3Btn}>
          Booking sekarang →
        </a>
      </div>
    </section>
  );
};

export default CtaStrip;
```

- [ ] **Step 2: Add `display: inline-flex` to `.v3Btn` in CSS**

In `components/landing/CtaStrip.module.css`, update `.v3Btn`:

```css
.v3Btn { background: var(--ink-950); color: var(--paper); border: 2px solid var(--ink-950); padding: 14px 28px; border-radius: 999px; font-family: 'Montserrat'; font-weight: 700; font-size: 15.5px; cursor: pointer; box-shadow: 4px 4px 0 rgba(0,0,0,.3); transition: all .1s; display: inline-flex; align-items: center; }
```

- [ ] **Step 3: Commit**

```bash
git add components/landing/CtaStrip.tsx components/landing/CtaStrip.module.css
git commit -m "feat: CtaStrip booking button opens WhatsApp"
```

---

## Task 5: Update `Pricing.tsx` — tier CTAs → WhatsApp links

**Files:**
- Modify: `components/landing/Pricing.tsx`

Each tier sends a different message. The `it.name` and `it.price` are available from props.

- [ ] **Step 1: Replace full file**

```tsx
import React from 'react';
import styles from './Pricing.module.css';
import { waLink } from '@/lib/wa';

type Item = { name: string; price: string; tag?: string; features: string[]; cta: string };
interface Props { items: Item[] }

function pricingWaLink(item: Item): string {
  // "Hubungi Sales" CTA = enterprise/custom tier
  const isEnterprise = item.cta.toLowerCase().includes('hubungi');
  if (isEnterprise) {
    return waLink(
      `Halo TENTA! Saya ingin mendiskusikan kebutuhan custom untuk paket *${item.name}*. Bisa dihubungi?`
    );
  }
  return waLink(
    `Halo TENTA! Saya tertarik dengan paket *${item.name}* (Rp ${item.price}jt/bln). Bisa dijelaskan lebih lanjut?`
  );
}

const Pricing: React.FC<Props> = ({ items }) => {
  return (
    <section className={styles.priceSection} id="pricing">
      <div className={styles.secHeadC}>
        <div className={styles.kickerInline}>PAKET HARGA</div>
        <h2>Mulai dari <em>6jt/bulan</em></h2>
        <p className={styles.secSub}>Semua paket bisa custom. Angka di bawah adalah management fee — belum termasuk budget ads.</p>
      </div>
      <div className={styles.priceGrid}>
        {items.map((it, idx) => (
          <div key={idx} className={`${styles.tier} ${it.tag ? styles.featured : ''}`}>
            {it.tag && <div className={styles.tierTag}>{it.tag}</div>}
            <div className={styles.tierName}>{it.name}</div>
            <div className={styles.tierPrice}>
              <small>Rp</small>
              <strong>{it.price}</strong>
              <span>jt/bln</span>
            </div>
            <ul className={styles.tierList}>
              {it.features.map((f, i) => (
                <li key={i}><span className={styles.check}>✓</span> {f}</li>
              ))}
            </ul>
            <a
              href={pricingWaLink(it)}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.tierCta} ${it.tag ? '' : styles.tierCtaOutline}`}
            >
              {it.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
```

- [ ] **Step 2: Add `display: block` to `.tierCta` in CSS**

In `components/landing/Pricing.module.css`, update `.tierCta`:

```css
.tierCta { background: var(--tenta-500); color: var(--paper); border: 2px solid var(--ink-950); border-radius: 999px; padding: 14px 26px; font-family: 'Montserrat'; font-weight: 700; font-size: 15px; cursor: pointer; text-align: center; box-shadow: 4px 4px 0 var(--ink-950); transition: all .1s; display: block; }
```

- [ ] **Step 3: TypeScript check**

```bash
cd /home/ekalliptus/dev/tentaklik/tenta-web && npx tsc --noEmit 2>&1 | head -20
```

Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add components/landing/Pricing.tsx components/landing/Pricing.module.css
git commit -m "feat: pricing tier CTAs open WhatsApp with plan-specific messages"
```

---

## Task 6: Update `Services.tsx` — card `↗` → WhatsApp links

**Files:**
- Modify: `components/landing/Services.tsx`

Current state: `<button className={styles.cardArrow}>↗</button>` — dead button.

- [ ] **Step 1: Replace full file**

```tsx
import React from 'react';
import styles from './Services.module.css';
import ServiceIcon from './icons/ServiceIcon';
import { waLink } from '@/lib/wa';

type ServiceItem = {
  icon: string;
  title: string;
  tag: string;
  price: string;
  color?: string;
  description: string;
};

interface Props { items: ServiceItem[] }

const colorClass: Record<string, string> = {
  orange: styles.orange,
  dark: styles.dark,
  cream: styles.cream,
  orange2: styles.orange2,
};

const Services: React.FC<Props> = ({ items }) => {
  return (
    <section className={styles.srvSection} id="services">
      <div className={styles.secHead}>
        <div>
          <div className={styles.kickerInline}>LAYANAN</div>
          <h2>Full-stack <em>growth</em></h2>
        </div>
        <a className={styles.secLink}>Lihat semua layanan →</a>
      </div>
      <div className={styles.srvGrid}>
        {items.map((it, idx) => (
          <article key={idx} className={`${styles.card} ${it.color ? colorClass[it.color] ?? styles.cream : styles.cream}`}>
            <div className={styles.cardHead}>
              <div className={styles.tag}>{it.tag}</div>
              <span className={styles.icon}><ServiceIcon name={it.icon as any} /></span>
            </div>
            <div className={styles.cardFoot}>
              <div>
                <h3>{it.title}</h3>
                <p className={styles.desc}>{it.description}</p>
              </div>
              <div className={styles.cardMeta}>
                <span className={styles.price}>{it.price}</span>
                <a
                  href={waLink(`Halo TENTA! Saya ingin tahu lebih lanjut soal layanan *${it.title}* (${it.price}). Bisa diinfo?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardArrow}
                >
                  ↗
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
```

- [ ] **Step 2: TypeScript check**

```bash
cd /home/ekalliptus/dev/tentaklik/tenta-web && npx tsc --noEmit 2>&1 | head -20
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/landing/Services.tsx
git commit -m "feat: service card arrows open WhatsApp with service-specific messages"
```

---

## Task 7: Create `lib/sheets.ts`

**Files:**
- Create: `lib/sheets.ts`

- [ ] **Step 1: Create the file**

```ts
export async function syncLeadToSheet(data: {
  name: string;
  email: string;
  phone?: string | null;
  message: string;
  source?: string;
}): Promise<void> {
  const url = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!url) return;
  try {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone ?? '',
        message: data.message,
        source: data.source ?? 'website-form',
      }),
    });
  } catch {
    console.error('[sheets] Failed to sync lead to Google Sheet');
  }
}
```

- [ ] **Step 2: TypeScript check**

```bash
cd /home/ekalliptus/dev/tentaklik/tenta-web && npx tsc --noEmit 2>&1 | head -20
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add lib/sheets.ts
git commit -m "feat: add syncLeadToSheet helper for Google Sheets webhook"
```

---

## Task 8: Update `/api/contact/route.ts` — add Sheets sync

**Files:**
- Modify: `app/api/contact/route.ts`

The sync is fire-and-forget: do NOT `await` it — the response to the user must not wait for Google.

- [ ] **Step 1: Replace full file**

```ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { syncLeadToSheet } from '@/lib/sheets';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
    }
    if (name.length > 100 || email.length > 200 || message.length > 2000) {
      return NextResponse.json({ error: 'Field length exceeded.' }, { status: 400 });
    }
    if (phone && phone.length > 30) {
      return NextResponse.json({ error: 'Phone number too long.' }, { status: 400 });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    await prisma.contactSubmission.create({ data: { name, email, phone: phone || null, message } });

    // Fire-and-forget: do not await, never block the response
    syncLeadToSheet({ name, email, phone, message });

    return NextResponse.json({ success: true, message: 'Contact submission received.' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
```

- [ ] **Step 2: TypeScript check**

```bash
cd /home/ekalliptus/dev/tentaklik/tenta-web && npx tsc --noEmit 2>&1 | head -20
```

Expected: no errors.

- [ ] **Step 3: Full build check**

```bash
cd /home/ekalliptus/dev/tentaklik/tenta-web && npx next build 2>&1 | tail -15
```

Expected: `✓ Compiled successfully` and all routes listed.

- [ ] **Step 4: Commit**

```bash
git add app/api/contact/route.ts lib/sheets.ts
git commit -m "feat: contact form submissions sync to Google Sheet (fire-and-forget)"
```

---

## Task 9: Setup Google Apps Script Webhook + `.env.local`

This task is partially manual (user runs steps in browser), partially code.

- [ ] **Step 1: Add placeholder to `.env.local`**

Open `.env.local` and add this line at the bottom:

```
GOOGLE_SHEET_WEBHOOK_URL=
```

(Leave empty for now — will be filled after Apps Script deployment.)

- [ ] **Step 2: User opens Google Sheet and creates Apps Script**

Navigate to: `https://docs.google.com/spreadsheets/d/177Ms9ZFhvoSWlXQNEYJOni6-BUO5RjgRtYbPXHraxMo/edit`

Go to **Extensions → Apps Script**. Delete any existing code in the editor and paste:

```javascript
function doPost(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('Leads');
  if (!sheet) {
    sheet = ss.insertSheet('Leads');
    sheet.appendRow(['Timestamp', 'Nama', 'Email', 'Telepon', 'Pesan', 'Source']);
  }

  const data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    new Date().toLocaleString('id-ID'),
    data.name  || '',
    data.email || '',
    data.phone || '',
    data.message || '',
    data.source  || 'website-form',
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

- [ ] **Step 3: Deploy as Web App**

In Apps Script editor:
1. Click **Deploy → New deployment**
2. Click ⚙️ gear next to "Select type" → choose **Web app**
3. Description: `Leads webhook`
4. Execute as: **Me**
5. Who has access: **Anyone**
6. Click **Deploy**
7. Authorize when prompted (click "Review permissions" → select Google account → "Allow")
8. Copy the **Web app URL** (format: `https://script.google.com/macros/s/AKfycb.../exec`)

- [ ] **Step 4: Paste URL into `.env.local`**

```
GOOGLE_SHEET_WEBHOOK_URL=https://script.google.com/macros/s/AKfycb.../exec
```

(Replace with actual URL from Step 3.)

- [ ] **Step 5: Test the webhook manually**

```bash
curl -X POST "$(grep GOOGLE_SHEET_WEBHOOK_URL /home/ekalliptus/dev/tentaklik/tenta-web/.env.local | cut -d= -f2-)" \
  -H "Content-Type: application/json" \
  -d '{"name":"Test Lead","email":"test@test.com","phone":"08123456789","message":"Ini test dari curl","source":"manual-test"}'
```

Expected output: `{"success":true}`

Open the Google Sheet and confirm a new tab "Leads" appeared with the test row.

- [ ] **Step 6: Commit**

```bash
git add .env.local
git commit -m "chore: add GOOGLE_SHEET_WEBHOOK_URL env var placeholder"
```

---

## Task 10: Final verification

- [ ] **Step 1: Full build**

```bash
cd /home/ekalliptus/dev/tentaklik/tenta-web && npx next build 2>&1 | tail -20
```

Expected: `✓ Compiled successfully`, all 11 routes listed, no TypeScript errors.

- [ ] **Step 2: Dev server smoke test**

```bash
cd /home/ekalliptus/dev/tentaklik/tenta-web && npx next dev 2>&1 &
```

Open `http://localhost:3000` and verify:
- [ ] Nav "💬 WhatsApp" opens `wa.me/6285177111104` with correct message
- [ ] Nav "Konsultasi Gratis" opens WhatsApp with consultation message
- [ ] Hero "Konsultasi Gratis 30 mnt →" opens WhatsApp
- [ ] CtaStrip "Booking sekarang →" opens WhatsApp with booking message
- [ ] Pricing "Pilih Starter" opens WhatsApp mentioning Starter plan
- [ ] Pricing "Pilih Growth" opens WhatsApp mentioning Growth plan
- [ ] Pricing "Hubungi Sales" opens WhatsApp mentioning Scale/custom
- [ ] Services `↗` on each card opens WhatsApp mentioning that service name
- [ ] Mobile hamburger menu "Konsultasi Gratis" opens WhatsApp

- [ ] **Step 3: Test contact form → Google Sheet sync**

Go to `http://localhost:3000/contact`, fill in and submit the form. Verify a new row appears in the "Leads" tab of the Google Sheet within ~10 seconds.
