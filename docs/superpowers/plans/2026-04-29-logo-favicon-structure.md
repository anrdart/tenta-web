# Logo, Favicon & Asset Structure Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Pindahkan assets ke `public/`, ganti inline SVG logo dengan gambar nyata, tambah icon metadata, dan buat mobile menu dark.

**Architecture:** Semua static assets dipindahkan ke `public/` sesuai konvensi Next.js. Logo di Nav diganti dengan `<Image>` dari `next/image`. Mobile menu diubah menjadi dark background dengan `logo-light.png`. Favicon dan icon sizes didaftarkan di `layout.tsx` metadata.

**Tech Stack:** Next.js App Router, `next/image`, CSS Modules, TypeScript

---

## File Map

| File | Aksi |
|------|------|
| `public/logo-dark.png` | Create (salin dari src/assets) |
| `public/logo-light.png` | Create (salin dari src/assets) |
| `public/favicon.ico` | Create (salin dari src/assets) |
| `public/icon-32.png` | Create (salin dari src/assets) |
| `public/icon-192.png` | Create (salin dari src/assets) |
| `public/icon-512.png` | Create (salin dari src/assets) |
| `public/apple-touch-icon.png` | Create (salin dari src/assets) |
| `public/file.svg` | Delete |
| `public/globe.svg` | Delete |
| `public/next.svg` | Delete |
| `public/vercel.svg` | Delete |
| `public/window.svg` | Delete |
| `src/assets/` | Delete (seluruh folder) |
| `app/favicon.ico` | Replace (salin dari src/assets) |
| `app/layout.tsx` | Modify — tambah `icons` ke metadata |
| `components/landing/Nav.tsx` | Modify — ganti TentaLogo SVG, tambah mobileBrand |
| `components/landing/Nav.module.css` | Modify — dark mobile menu + .mobileBrand |

---

### Task 1: Pindahkan assets ke `public/` dan hapus file tidak terpakai

**Files:**
- Create: `public/logo-dark.png`, `public/logo-light.png`, `public/favicon.ico`, `public/icon-32.png`, `public/icon-192.png`, `public/icon-512.png`, `public/apple-touch-icon.png`
- Delete: `public/file.svg`, `public/globe.svg`, `public/next.svg`, `public/vercel.svg`, `public/window.svg`
- Delete: `src/assets/` (seluruh folder), `src/` (folder kosong)

- [ ] **Step 1.1: Salin semua assets dari src/assets ke public/**

```bash
cp src/assets/logo-dark.png public/logo-dark.png
cp src/assets/logo-light.png public/logo-light.png
cp src/assets/favicon.ico public/favicon.ico
cp src/assets/icon-32.png public/icon-32.png
cp src/assets/icon-192.png public/icon-192.png
cp src/assets/icon-512.png public/icon-512.png
cp src/assets/apple-touch-icon.png public/apple-touch-icon.png
```

- [ ] **Step 1.2: Salin favicon ke app/ (menggantikan favicon default Next.js)**

```bash
cp src/assets/favicon.ico app/favicon.ico
```

- [ ] **Step 1.3: Hapus file SVG default Next.js dari public/**

```bash
rm public/file.svg public/globe.svg public/next.svg public/vercel.svg public/window.svg
```

- [ ] **Step 1.4: Hapus folder src/assets/ dan src/**

```bash
rm -rf src/assets
rmdir src
```

- [ ] **Step 1.5: Verifikasi struktur public/**

```bash
ls public/
```

Expected output (7 files):
```
apple-touch-icon.png
favicon.ico
icon-192.png
icon-32.png
icon-512.png
logo-dark.png
logo-light.png
```

- [ ] **Step 1.6: Commit**

```bash
git add public/logo-dark.png public/logo-light.png public/favicon.ico public/icon-32.png public/icon-192.png public/icon-512.png public/apple-touch-icon.png app/favicon.ico
git rm public/file.svg public/globe.svg public/next.svg public/vercel.svg public/window.svg
git rm -r src/assets src/
git commit -m "chore: move assets to public/ and remove unused Next.js defaults"
```

---

### Task 2: Tambah icon metadata ke layout.tsx

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 2.1: Buka `app/layout.tsx` dan update metadata**

Ganti seluruh `export const metadata` menjadi:

```ts
export const metadata: Metadata = {
  title: 'TENTA — Digital Marketing Agency Jakarta',
  description:
    'TENTA bantu brand Indonesia tumbuh lewat SEO, ads, social, dan content yang terukur. 4.2x rata-rata ROAS.',
  keywords: ['digital marketing', 'agency', 'SEO', 'Google Ads', 'social media', 'Jakarta', 'Indonesia'],
  openGraph: {
    title: 'TENTA — Digital Marketing Agency',
    description: 'Agency performance-driven buat brand yang mau tumbuh.',
    url: 'https://tenta.studio',
    siteName: 'TENTA',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
};
```

- [ ] **Step 2.2: Verifikasi TypeScript tidak error**

```bash
npx tsc --noEmit
```

Expected: tidak ada output (0 errors).

- [ ] **Step 2.3: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: add icon and apple-touch-icon metadata"
```

---

### Task 3: Update Nav.module.css — dark mobile menu + .mobileBrand

**Files:**
- Modify: `components/landing/Nav.module.css`

- [ ] **Step 3.1: Update blok `.mobileMenu` dan tambah `.mobileBrand`**

Temukan dan ganti blok `.mobileMenu` (baris 54–66 di Nav.module.css) dengan:

```css
/* Mobile menu dropdown */
.mobileMenu {
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  background: var(--ink-950);
  border-bottom: 2px solid var(--tenta-500);
  z-index: 99;
  display: flex;
  flex-direction: column;
  padding: 16px 24px 24px;
  gap: 4px;
}
.mobileBrand {
  display: flex;
  align-items: center;
  padding-bottom: 16px;
  margin-bottom: 8px;
  border-bottom: 1px solid rgba(255,255,255,0.12);
}
```

- [ ] **Step 3.2: Update warna teks link di dalam .mobileMenu**

Temukan dan ganti blok `.mobileMenu a` (baris 67–74) dengan:

```css
.mobileMenu a {
  padding: 14px 16px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  color: var(--ink-200);
  transition: background .15s;
}
.mobileMenu a:hover { background: rgba(255,255,255,0.08); }
```

- [ ] **Step 3.3: Update warna .active di dalam mobile menu**

Tambahkan rule berikut setelah `.mobileMenu a:hover`:

```css
.mobileMenu .active { background: var(--tenta-500) !important; color: var(--ink-950) !important; }
```

- [ ] **Step 3.4: Update warna .mobileChipOutline untuk kontras dark**

Temukan blok `.mobileChipOutline` (baris 76–90) dan ganti dengan:

```css
.mobileChipOutline {
  display: block;
  margin-top: 12px;
  background: transparent;
  color: var(--ink-100);
  padding: 14px 20px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  border: 2px solid rgba(255,255,255,0.25);
  transition: background .15s;
}
.mobileChipOutline:hover { background: rgba(255,255,255,0.08); }
```

- [ ] **Step 3.5: Verifikasi tidak ada CSS syntax error**

```bash
npx next build 2>&1 | grep -i "error\|css" | head -20
```

Atau cukup jalankan dev server sebentar:

```bash
npx next dev &
sleep 5
kill %1
```

Expected: tidak ada error merah di output.

- [ ] **Step 3.6: Commit**

```bash
git add components/landing/Nav.module.css
git commit -m "feat: dark mobile menu with tenta-500 accent"
```

---

### Task 4: Update Nav.tsx — ganti TentaLogo SVG dengan Image

**Files:**
- Modify: `components/landing/Nav.tsx`

- [ ] **Step 4.1: Tambah import Image di baris pertama setelah "use client"**

Temukan:
```tsx
"use client";
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
```

Ganti dengan:
```tsx
"use client";
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
```

- [ ] **Step 4.2: Hapus komponen TentaLogo**

Temukan dan hapus seluruh blok berikut (baris 18–24):

```tsx
const TentaLogo = () => (
  <svg viewBox="0 0 40 40" width="36" height="36" aria-hidden>
    <circle cx="20" cy="20" r="18" fill="var(--tenta-500)"/>
    <path d="M8 28 L20 10 L32 28 Z" fill="var(--paper)"/>
    <circle cx="20" cy="20" r="3" fill="var(--ink-950)"/>
  </svg>
);
```

- [ ] **Step 4.3: Ganti brand div di nav utama**

Temukan:
```tsx
        <div className={styles.brand}>
          <TentaLogo />
          TENTA
        </div>
```

Ganti dengan:
```tsx
        <div className={styles.brand}>
          <Image
            src="/logo-dark.png"
            alt="TENTA"
            width={140}
            height={36}
            style={{ height: '36px', width: 'auto' }}
            priority
          />
        </div>
```

- [ ] **Step 4.4: Tambah mobileBrand di atas daftar link dalam mobile menu**

Temukan:
```tsx
      {open && (
        <div className={styles.mobileMenu}>
          {NAV_ITEMS.map((item) => (
```

Ganti dengan:
```tsx
      {open && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileBrand}>
            <Image
              src="/logo-light.png"
              alt="TENTA"
              width={120}
              height={32}
              style={{ height: '32px', width: 'auto' }}
            />
          </div>
          {NAV_ITEMS.map((item) => (
```

- [ ] **Step 4.5: Verifikasi TypeScript tidak error**

```bash
npx tsc --noEmit
```

Expected: tidak ada output (0 errors).

- [ ] **Step 4.6: Jalankan dev server dan cek visual di browser**

```bash
npx next dev
```

Buka `http://localhost:3000` dan verifikasi:
- [ ] Logo `logo-dark.png` muncul di nav desktop (bukan SVG)
- [ ] Teks "TENTA" tidak muncul duplikat di samping logo
- [ ] Di mobile (resize browser < 768px), buka hamburger menu
- [ ] Mobile menu background hitam gelap (`--ink-950`)
- [ ] `logo-light.png` muncul di atas menu mobile
- [ ] Link nav mobile berwarna terang
- [ ] Tab browser menampilkan favicon baru

- [ ] **Step 4.7: Commit**

```bash
git add components/landing/Nav.tsx
git commit -m "feat: replace inline SVG logo with logo-dark/logo-light images"
```
