import Link from 'next/link';

// Simple server component that renders placeholder dashboard cards
export default function AdminDashboard() {
  const cards = [
    { label: 'New Contacts', value: '—', href: '/admin/contacts' },
    { label: 'Subscribers', value: '—', href: '/admin/subscribers' },
    { label: 'Services', value: '—', href: '/admin/services' },
    { label: 'Testimonials', value: '—', href: '/admin/testimonials' },
  ];
  return (
    <div>
      <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 32, fontWeight: 700, marginBottom: 24, letterSpacing: '-0.03em' }}>Dashboard</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
        {cards.map((c) => (
          <Link key={c.href} href={c.href} style={{ background: '#FFFDF9', border: '2px solid #1A130C', borderRadius: 16, padding: 20, textDecoration: 'none', boxShadow: '3px 3px 0 #1A130C' }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#6B5A47', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{c.label}</div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 36, fontWeight: 700, marginTop: 8, color: '#1A130C' }}>{c.value}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
