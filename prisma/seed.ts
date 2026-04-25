import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Services
  const services = [
    { icon: 'seo', title: 'SEO Organik', tag: 'Search', price: '6jt/bln', color: 'orange', description: 'Naik ke halaman 1, tanpa black-hat.' },
    { icon: 'ads', title: 'Google Ads', tag: 'Paid', price: '8jt/bln', color: 'dark', description: 'ROAS fokus, budget efisien, tracking bersih.' },
    { icon: 'social', title: 'Social Media', tag: 'Organic', price: '5jt/bln', color: 'cream', description: '30 post + engagement & community.' },
    { icon: 'meta', title: 'Meta & TikTok Ads', tag: 'Paid', price: '7jt/bln', color: 'orange2', description: 'Creative + targeting + A/B testing.' },
    { icon: 'content', title: 'Content Marketing', tag: 'Content', price: '4jt/bln', color: 'dark', description: 'Blog, copywriting, SEO-friendly.' },
    { icon: 'brand', title: 'Branding & Creative', tag: 'Brand', price: '4,9jt', color: 'orange', description: 'Logo, identitas, visual guideline.' },
    { icon: 'data', title: 'Analytics & Report', tag: 'Data', price: '2jt/bln', color: 'cream', description: 'Dashboard custom + insight bulanan.' },
    { icon: 'web', title: 'Web Development', tag: 'Digital', price: '8,5jt', color: 'orange2', description: 'Landing, company profile, e-commerce.' },
  ];

  for (const s of services) {
    await prisma.service.upsert({
      where: { id: services.indexOf(s) + 1 },
      update: s,
      create: s,
    });
  }
  console.log(`  ✅ ${services.length} services`);

  // Stats
  const stats = [
    { number: '142+', label: 'Klien Aktif', subtitle: 'Sejak 2019' },
    { number: '4.2x', label: 'Rata-rata ROAS', subtitle: 'Seluruh kampanye' },
    { number: '38M', label: 'Impressions/bln', subtitle: 'Diolah tim kami' },
    { number: '98%', label: 'Klien Repeat', subtitle: 'Retensi 12 bulan' },
  ];

  for (let i = 0; i < stats.length; i++) {
    await prisma.stat.upsert({
      where: { id: i + 1 },
      update: stats[i],
      create: stats[i],
    });
  }
  console.log(`  ✅ ${stats.length} stats`);

  // Process Steps
  const processSteps = [
    { stepNumber: '01', title: 'Discover', description: 'Audit kondisi saat ini — website, ads, data, kompetitor. Kami cari ruang tumbuh.' },
    { stepNumber: '02', title: 'Strategy', description: 'Roadmap 90 hari dengan KPI jelas. Kamu tahu apa yang dikerjakan dan kenapa.' },
    { stepNumber: '03', title: 'Execute', description: 'Tim kami jalan — creative, ads ops, SEO, content. Laporan mingguan.' },
    { stepNumber: '04', title: 'Optimize', description: 'Review bulanan. Skala yang menang, matikan yang rugi. Iterasi terus.' },
  ];

  for (let i = 0; i < processSteps.length; i++) {
    await prisma.processStep.upsert({
      where: { id: i + 1 },
      update: processSteps[i],
      create: processSteps[i],
    });
  }
  console.log(`  ✅ ${processSteps.length} process steps`);

  // Case Studies
  const cases = [
    { client: 'Kulaku F&B', industry: 'F&B', metric: '+240%', metricLabel: 'Website traffic', period: '6 bulan', color: 'orange' },
    { client: 'Teras Kopi', industry: 'Coffee Chain', metric: '5.8x', metricLabel: 'ROAS Meta Ads', period: '3 bulan', color: 'dark' },
    { client: 'Kanaya Fashion', industry: 'Lifestyle', metric: '+180K', metricLabel: 'Followers organik', period: '12 bulan', color: 'cream' },
  ];

  for (let i = 0; i < cases.length; i++) {
    await prisma.caseStudy.upsert({
      where: { id: i + 1 },
      update: cases[i],
      create: cases[i],
    });
  }
  console.log(`  ✅ ${cases.length} case studies`);

  // Industries
  const industries = [
    { emoji: '🍜', name: 'F&B & Kuliner' },
    { emoji: '👗', name: 'Fashion & Lifestyle' },
    { emoji: '💻', name: 'SaaS & Tech' },
    { emoji: '🛒', name: 'E-commerce & D2C' },
    { emoji: '🏪', name: 'UMKM Lokal' },
  ];

  for (let i = 0; i < industries.length; i++) {
    await prisma.industry.upsert({
      where: { id: i + 1 },
      update: industries[i],
      create: industries[i],
    });
  }
  console.log(`  ✅ ${industries.length} industries`);

  // Pricing Tiers
  const pricing = [
    { name: 'Starter', price: '6', tag: null, features: ['1-2 channel fokus', 'Laporan bulanan', 'Konsultasi 1x/bulan', 'Response 48 jam'], cta: 'Pilih Starter' },
    { name: 'Growth', price: '15', tag: 'Paling Populer', features: ['3-4 channel terintegrasi', 'Laporan mingguan', 'Dedicated PM', 'Creative 20 aset/bln', 'A/B testing'], cta: 'Pilih Growth' },
    { name: 'Scale', price: '30', tag: null, features: ['Omnichannel full-service', 'Dashboard real-time', 'Dedicated tim (3 org)', 'Creative unlimited', 'Priority support'], cta: 'Hubungi Sales' },
  ];

  for (let i = 0; i < pricing.length; i++) {
    await prisma.pricingTier.upsert({
      where: { id: i + 1 },
      update: { ...pricing[i], features: JSON.stringify(pricing[i].features) },
      create: { ...pricing[i], features: JSON.stringify(pricing[i].features) },
    });
  }
  console.log(`  ✅ ${pricing.length} pricing tiers`);

  // Client Logos
  const logos = ['Kulaku', 'Teras Kopi', 'Kanaya', 'Satwa', 'Ombak', 'Beranda', 'Langit Biru', 'Senja Co.', 'Kalimaya', 'Pinang'];

  for (let i = 0; i < logos.length; i++) {
    await prisma.clientLogo.upsert({
      where: { id: i + 1 },
      update: { name: logos[i] },
      create: { name: logos[i] },
    });
  }
  console.log(`  ✅ ${logos.length} client logos`);

  // Testimonials
  const testimonials = [
    { name: 'Kirana Ayu', role: 'Founder · Kanaya', text: 'Konversi Instagram ads kami naik 3x dalam 2 bulan. Tim TENTA paham audiens fashion Indonesia.', tint: 'orange' },
    { name: 'Bagas Prawira', role: 'CMO · Kulaku F&B', text: '6 bulan, organic traffic naik 240%. Reporting-nya jelas, tidak ada angka aneh.', tint: 'dark' },
    { name: 'Nadira Salsa', role: 'CEO · Teras Kopi', text: 'ROAS 5.8x di Meta Ads. Yang bikin beda: mereka ngerti bisnis kopi, bukan cuma jalanin ads.', tint: 'cream' },
  ];

  for (let i = 0; i < testimonials.length; i++) {
    await prisma.testimonial.upsert({
      where: { id: i + 1 },
      update: testimonials[i],
      create: testimonials[i],
    });
  }
  console.log(`  ✅ ${testimonials.length} testimonials`);

  // FAQs
  const faqs = [
    { question: 'Minimum kontrak berapa lama?', answer: 'Minimal 3 bulan untuk paket retainer — karena butuh waktu untuk data learning & optimasi. Proyek branding bisa one-time.' },
    { question: 'Apakah budget ads sudah termasuk?', answer: 'Belum — budget ads terpisah, dikelola dari akun kamu. Kami hanya charge management fee + jasa.' },
    { question: 'Bagaimana sistem reportingnya?', answer: 'Dashboard real-time (Looker Studio) + laporan bulanan PDF. Review call tiap akhir bulan.' },
    { question: 'Bisa white-label untuk agency lain?', answer: 'Bisa. Kami sering jadi production partner untuk agency yang butuh scale tim.' },
    { question: 'Ada garansi hasil?', answer: 'Kami tidak janji angka spesifik karena digital marketing banyak variabel. Tapi kami transparan — kalau nggak cocok di 60 hari, bisa stop tanpa penalty.' },
  ];

  for (let i = 0; i < faqs.length; i++) {
    await prisma.faq.upsert({
      where: { id: i + 1 },
      update: faqs[i],
      create: faqs[i],
    });
  }
  console.log(`  ✅ ${faqs.length} FAQs`);

  // Site Settings
  await prisma.siteSetting.upsert({
    where: { key: 'site_name' },
    update: { value: 'TENTA' },
    create: { key: 'site_name', value: 'TENTA' },
  });

  await prisma.siteSetting.upsert({
    where: { key: 'admin_email' },
    update: { value: process.env.ADMIN_EMAIL || 'admin@tenta.studio' },
    create: { key: 'admin_email', value: process.env.ADMIN_EMAIL || 'admin@tenta.studio' },
  });
  console.log('  ✅ Site settings');

  // Admin User
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@tenta.studio';
  const adminPassword = process.env.ADMIN_PASSWORD || 'changeme';
  const hashedPassword = await bcrypt.hash(adminPassword, 12);

  await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      name: 'Admin',
      email: adminEmail,
      password: hashedPassword,
      role: 'ADMIN',
    },
  });
  console.log(`  ✅ Admin user (${adminEmail})`);

  console.log('\n🎉 Seed complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
