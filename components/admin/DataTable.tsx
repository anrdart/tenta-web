'use client';

interface Column<T> {
  key: string;
  label: string;
  render?: (value: any, row: T) => React.ReactNode;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  actions?: (row: T) => React.ReactNode;
  emptyMessage?: string;
}

export default function DataTable<T extends Record<string, any>>({ columns, data, actions, emptyMessage = 'No data.' }: DataTableProps<T>) {
  if (data.length === 0) {
    return <div style={{ padding: 32, textAlign: 'center', color: '#6B5A47', fontSize: 14 }}>{emptyMessage}</div>;
  }
  return (
    <div style={{ overflowX: 'auto', border: '2px solid #E8DFD0', borderRadius: 12 }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
        <thead>
          <tr style={{ background: '#F3EDE2' }}>
            {columns.map((col) => (
              <th key={col.key} style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700, fontSize: 12, color: '#4A3D2E', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '2px solid #D8CABA' }}>{col.label}</th>
            ))}
            {actions && <th style={{ padding: '10px 14px', borderBottom: '2px solid #D8CABA' }}></th>}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={row.id || i} style={{ borderBottom: '1px solid #E8DFD0', background: i % 2 === 0 ? '#FFFDF9' : '#FAF7F1' }}>
              {columns.map((col) => (
                <td key={col.key} style={{ padding: '10px 14px', color: '#231A10' }}>
                  {col.render ? col.render(row[col.key], row) : String(row[col.key] ?? '—')}
                </td>
              ))}
              {actions && <td style={{ padding: '10px 14px' }}>{actions(row)}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
