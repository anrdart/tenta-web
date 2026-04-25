import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Space Grotesk', sans-serif",
    }}>
      <h1 style={{ fontSize: 72, fontWeight: 700, color: 'var(--ink-950)', marginBottom: 16 }}>
        404
      </h1>
      <p style={{ fontSize: 20, color: 'var(--ink-600)' }}>Halaman tidak ditemukan</p>
      <Link
        href="/"
        style={{
          marginTop: 24,
          display: 'inline-block',
          background: 'var(--tenta-500)',
          color: 'var(--paper)',
          padding: '14px 26px',
          borderRadius: 999,
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: 14,
          border: '2px solid var(--ink-950)',
          boxShadow: '4px 4px 0 var(--ink-950)',
          textDecoration: 'none',
        }}
      >
        ← Kembali ke Beranda
      </Link>
    </div>
  );
}
