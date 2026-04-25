import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export default async function AdminIndustriesPage() {
  const industries = await prisma.industry.findMany({ orderBy: { orderIndex: 'asc' } });
  return (
    <div>
      <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 32, fontWeight: 700, marginBottom: 24 }}>Industries</h1>
      <div style={{ overflowX: 'auto', border: '2px solid #E8DFD0', borderRadius: 12 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
          <thead>
            <tr style={{ background: '#F3EDE2' }}>
              {['Emoji', 'Name', 'Order', 'Active'].map((h) => (
                <th key={h} style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700, fontSize: 12, color: '#4A3D2E', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '2px solid #D8CABA' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {industries.map((inx, i) => (
              <tr key={inx.id} style={{ borderBottom: '1px solid #E8DFD0', background: i % 2 === 0 ? '#FFFDF9' : '#FAF7F1' }}>
                <td style={{ padding: '10px 14px' }}>{inx.emoji}</td>
                <td style={{ padding: '10px 14px' }}>{inx.name}</td>
                <td style={{ padding: '10px 14px' }}>{inx.orderIndex}</td>
                <td style={{ padding: '10px 14px' }}>{inx.isActive ? '✅ Active' : '❌ Inactive'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {industries.length === 0 && <p style={{ color: '#6B5A47', padding: 20 }}>No industries yet.</p>}
    </div>
  );
}
