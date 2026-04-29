# Design: Logo, Favicon & Struktur Asset

**Tanggal:** 2026-04-29  
**Scope:** Struktur file, logo Nav, favicon/icon metadata, mobile menu dark redesign

---

## 1. Struktur File

**Hapus** dari `public/` (Next.js default tidak terpakai):
- `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`

**Salin** dari `src/assets/` ke `public/`:
- `logo-dark.png`
- `logo-light.png`
- `favicon.ico`
- `icon-32.png`
- `icon-192.png`
- `icon-512.png`
- `apple-touch-icon.png`

**Hapus** folder `src/assets/` dan `src/` setelah semua file dipindahkan.

---

## 2. Logo di Nav

File: `components/landing/Nav.tsx`

- Hapus komponen `TentaLogo` (inline SVG).
- Di `.brand` (nav utama, background cream): gunakan `<Image src="/logo-dark.png" width={0} height={0} style={{ height: '36px', width: 'auto' }} alt="TENTA" />`. Karena logo sudah include teks "TENTA", hapus teks literal `TENTA` dari `.brand`. Pattern `width={0} height={0}` + CSS `width: auto` adalah cara standar Next.js Image untuk logo dengan aspect ratio tidak diketahui di build time.
- Di `.mobileMenu`: tambah blok `.mobileBrand` di paling atas menu yang menampilkan `<Image src="/logo-light.png" width={0} height={0} style={{ height: '32px', width: 'auto' }} alt="TENTA" />`.

---

## 3. Favicon & Icon Metadata

File: `app/layout.tsx`

- Ganti `app/favicon.ico` dengan file dari `src/assets/favicon.ico` (salin binary).
- Tambah field `icons` ke dalam `metadata`:

```ts
icons: {
  icon: [
    { url: '/favicon.ico' },
    { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
    { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
  ],
  apple: '/apple-touch-icon.png',
}
```

---

## 4. Mobile Menu Dark Redesign

File: `components/landing/Nav.module.css`

- `.mobileMenu`:
  - `background: var(--ink-950)`
  - `border-color: var(--tenta-500)`
- `.mobileMenu a`:
  - `color: var(--ink-200)`
  - hover: `background: rgba(255,255,255,0.08)`
- `.mobileMenu .active`:
  - `background: var(--tenta-500)`
  - `color: var(--ink-950)`
- Tambah `.mobileBrand`: flex row, padding bawah, border-bottom tipis untuk separator sebelum nav links.

File: `components/landing/Nav.tsx`

- Di dalam block `{open && (...)}`, tambah `.mobileBrand` di atas daftar link yang berisi `<Image src="/logo-light.png" ... />`.

---

## 5. Color Palette

Tidak ada perubahan. `#FF7A1A` sudah ada sebagai `--tenta-500` dan dipakai konsisten di seluruh komponen sebagai primary brand color.

---

## File yang Diubah

| File | Aksi |
|------|------|
| `public/` | Hapus 5 SVG default, tambah 7 asset dari src/assets |
| `src/assets/` + `src/` | Hapus setelah dipindahkan |
| `app/favicon.ico` | Ganti dengan versi dari src/assets |
| `app/layout.tsx` | Tambah `icons` ke metadata |
| `components/landing/Nav.tsx` | Ganti TentaLogo SVG, tambah mobileBrand |
| `components/landing/Nav.module.css` | Dark mobile menu styles + .mobileBrand |
