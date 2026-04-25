import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

function truncate(s?: string, len: number = 60) {
  if (!s) return '';
  return s.length > len ? s.substring(0, len) + '...' : s;
}

export default async function AdminFaqsPage() {
  const faqs = await prisma.faq.findMany({ orderBy: { orderIndex: 'asc' } });
  return (
    <div>
      <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 32, fontWeight: 700, marginBottom: 24 }}>FAQs</h1>
      <div style={{ overflowX: 'auto', border: '2px solid #E8DFD0', borderRadius: 12 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
          <thead>
            <tr style={{ background: '#F3EDE2' }}>
              {['Question', 'Answer', 'Order', 'Active'].map((h) => (
                <th key={h} style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700, fontSize: 12, color: '#4A3D2E', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '2px solid #D8CABA' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {faqs.map((f, i) => (
              <tr key={f.id} style={{ borderBottom: '1px solid #E8DFD0', background: i % 2 === 0 ? '#FFFDF9' : '#FAF7F1' }}>
                <td style={{ padding: '10px 14px' }}>{truncate(f.question, 60)}</td>
                <td style={{ padding: '10px 14px' }}>{truncate(f.answer, 60)}</td>
                <td style={{ padding: '10px 14px' }}>{f.orderIndex}</td>
                <td style={{ padding: '10px 14px' }}>{f.isActive ? '✅ Active' : '❌ Inactive'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {faqs.length === 0 && <p style={{ color: '#6B5A47', padding: 20 }}>No FAQs yet.</p>}
    </div>
  );
}
