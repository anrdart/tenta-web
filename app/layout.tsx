import type { Metadata } from 'next';
import '@/styles/globals.css';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
