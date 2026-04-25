import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export default async function AdminTestimonialsPage() {
  const testimonials = await prisma.testimonial.findMany({ orderBy: { orderIndex: 'asc' } });
  return (
    <div>
      <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 32, fontWeight: 700, marginBottom: 24 }}>Testimonials</h1>
      <div style={{ overflowX: 'auto', border: '2px solid #E8DFD0', borderRadius: 12 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
          <thead>
            <tr style={{ background: '#F3EDE2' }}>
              {['Name', 'Role', 'Text', 'Tint', 'Order'].map((h) => (
                <th key={h} style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700, fontSize: 12, color: '#4A3D2E', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '2px solid #D8CABA' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {testimonials.map((t, i) => (
              <tr key={t.id} style={{ borderBottom: '1px solid #E8DFD0', background: i % 2 === 0 ? '#FFFDF9' : '#FAF7F1' }}>
                <td style={{ padding: '10px 14px' }}>{t.name}</td>
                <td style={{ padding: '10px 14px' }}>{t.role}</td>
                <td style={{ padding: '10px 14px' }}>{t.text?.length > 50 ? t.text.substring(0, 50) + '...' : t.text}</td>
                <td style={{ padding: '10px 14px' }}>{t.tint}</td>
                <td style={{ padding: '10px 14px' }}>{t.orderIndex}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {testimonials.length === 0 && <p style={{ color: '#6B5A47', padding: 20 }}>No testimonials yet.</p>}
    </div>
  );
}
