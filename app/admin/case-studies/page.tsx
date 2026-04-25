import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export default async function AdminCaseStudiesPage() {
  const cases = await prisma.caseStudy.findMany({ orderBy: { orderIndex: 'asc' } });
  return (
    <div>
      <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 32, fontWeight: 700, marginBottom: 24 }}>Case Studies</h1>
      <div style={{ overflowX: 'auto', border: '2px solid #E8DFD0', borderRadius: 12 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
          <thead>
            <tr style={{ background: '#F3EDE2' }}>
              {['Client', 'Industry', 'Metric', 'Period', 'Color', 'Order'].map((h) => (
                <th key={h} style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700, fontSize: 12, color: '#4A3D2E', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '2px solid #D8CABA' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {cases.map((c, i) => (
              <tr key={c.id} style={{ borderBottom: '1px solid #E8DFD0', background: i % 2 === 0 ? '#FFFDF9' : '#FAF7F1' }}>
                <td style={{ padding: '10px 14px' }}>{c.client}</td>
                <td style={{ padding: '10px 14px' }}>{c.industry}</td>
                <td style={{ padding: '10px 14px' }}>{c.metric}</td>
                <td style={{ padding: '10px 14px' }}>{c.period}</td>
                <td style={{ padding: '10px 14px' }}>{c.color}</td>
                <td style={{ padding: '10px 14px' }}>{c.orderIndex}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {cases.length === 0 && <p style={{ color: '#6B5A47', padding: 20 }}>No case studies yet.</p>}
    </div>
  );
}
