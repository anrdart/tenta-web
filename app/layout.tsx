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
