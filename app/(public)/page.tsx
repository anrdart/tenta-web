import Hero from '@/components/landing/Hero';
import Stats from '@/components/landing/Stats';
import Marquee from '@/components/landing/Marquee';
import Services from '@/components/landing/Services';
import Process from '@/components/landing/Process';
import CaseStudies from '@/components/landing/CaseStudies';
import Testimonials from '@/components/landing/Testimonials';
import Faq from '@/components/landing/Faq';
import CtaStrip from '@/components/landing/CtaStrip';

const services = [
  { icon: 'web',    title: 'Web Development',  tag: 'Digital',   price: '8,5jt',    color: 'dark',    description: 'Landing, company profile, e-commerce.' },
  { icon: 'ads',    title: 'Google Ads',        tag: 'Paid',      price: '8jt/bln',  color: 'orange',  description: 'ROAS fokus, budget efisien, tracking bersih.' },
  { icon: 'meta',   title: 'Meta Ads',          tag: 'Paid',      price: '7jt/bln',  color: 'cream',   description: 'Creative + targeting + A/B testing.' },
  { icon: 'social', title: 'Meta Account',      tag: 'Social',    price: '5jt/bln',  color: 'orange2', description: 'Setup, management & grow akun Meta.' },
  { icon: 'data',   title: 'Google Account',    tag: 'Search',    price: '4jt/bln',  color: 'dark',    description: 'Google My Business, Search Console, GA4.' },
  { icon: 'brand',  title: 'Consulting',        tag: 'Strategy',  price: 'Custom',   color: 'orange',  description: 'Strategi, audit, dan roadmap pertumbuhan.' },
];

const stats = [
  { number: '142+', label: 'Klien Aktif', subtitle: 'Sejak 2019' },
  { number: '4.2x', label: 'Rata-rata ROAS', subtitle: 'Seluruh kampanye' },
  { number: '38M', label: 'Impressions/bln', subtitle: 'Diolah tim kami' },
  { number: '98%', label: 'Klien Repeat', subtitle: 'Retensi 12 bulan' },
];

const logos = ['Slide', 'Copy Writing', 'SEO', 'Service'];

const processItems = [
  { stepNumber: '01', title: 'Discover', description: 'Audit kondisi saat ini — website, ads, data, kompetitor. Kami cari ruang tumbuh.' },
  { stepNumber: '02', title: 'Strategy', description: 'Roadmap 90 hari dengan KPI jelas. Kamu tahu apa yang dikerjakan dan kenapa.' },
  { stepNumber: '03', title: 'Execute', description: 'Tim kami jalan — creative, ads ops, SEO, content. Laporan mingguan.' },
  { stepNumber: '04', title: 'Optimize', description: 'Review bulanan. Skala yang menang, matikan yang rugi. Iterasi terus.' },
];

const caseItems = [
  { client: 'Kulaku F&B', industry: 'F&B', metric: '+240%', metricLabel: 'Website traffic', period: '6 bulan', color: 'orange' },
  { client: 'Teras Kopi', industry: 'Coffee Chain', metric: '5.8x', metricLabel: 'ROAS Meta Ads', period: '3 bulan', color: 'dark' },
  { client: 'Kanaya Fashion', industry: 'Lifestyle', metric: '+180K', metricLabel: 'Followers organik', period: '12 bulan', color: 'cream' },
];

const testimonials = [
  { name: 'Kirana Ayu', role: 'Founder · Kanaya', text: 'Konversi Instagram ads kami naik 3x dalam 2 bulan. Tim TENTA paham audiens fashion Indonesia.', tint: 'orange' },
  { name: 'Bagas Prawira', role: 'CMO · Kulaku F&B', text: '6 bulan, organic traffic naik 240%. Reporting-nya jelas, tidak ada angka aneh.', tint: 'dark' },
  { name: 'Nadira Salsa', role: 'CEO · Teras Kopi', text: 'ROAS 5.8x di Meta Ads. Yang bikin beda: mereka ngerti bisnis kopi, bukan cuma jalanin ads.', tint: 'cream' },
];

const faqs = [
  { question: 'Minimum kontrak berapa lama?', answer: 'Minimal 3 bulan untuk paket retainer — karena butuh waktu untuk data learning & optimasi. Proyek branding bisa one-time.' },
  { question: 'Apakah budget ads sudah termasuk?', answer: 'Belum — budget ads terpisah, dikelola dari akun kamu. Kami hanya charge management fee + jasa.' },
  { question: 'Bagaimana sistem reportingnya?', answer: 'Dashboard real-time (Looker Studio) + laporan bulanan PDF. Review call tiap akhir bulan.' },
  { question: 'Bisa white-label untuk agency lain?', answer: 'Bisa. Kami sering jadi production partner untuk agency yang butuh scale tim.' },
  { question: 'Ada garansi hasil?', answer: 'Kami tidak janji angka spesifik karena digital marketing banyak variabel. Tapi kami transparan — kalau nggak cocok di 60 hari, bisa stop tanpa penalty.' },
];

export default function PublicPage() {
  return (
    <div>
      <Hero />
      <Stats items={stats} />
      <Marquee logos={logos} />
      <Services items={services} />
      <Process items={processItems} />
      <CaseStudies items={caseItems} />
      <Testimonials items={testimonials} />
      <Faq items={faqs} />
      <CtaStrip />
    </div>
  );
}
