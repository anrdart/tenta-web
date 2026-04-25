'use client';

import { useState, useEffect } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session) router.push('/admin');
  }, [session, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const result: any = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });
    setLoading(false);
    if (result?.error) {
      setError('Email atau password salah.');
    } else {
      router.push('/admin');
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--accent-cream, #FFF9EC)', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      <form onSubmit={handleSubmit} style={{ background: 'var(--paper, #FFFDF9)', border: '2px solid var(--ink-950, #1A130C)', borderRadius: 20, padding: 40, width: 380, boxShadow: '6px 6px 0 var(--ink-950)' }}>
        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 28, fontWeight: 700, marginBottom: 8, letterSpacing: '-0.03em' }}>Admin Login</h1>
        <p style={{ color: 'var(--ink-600)', fontSize: 14, marginBottom: 24 }}>Masuk ke panel TENTA</p>
        {error && (
          <div style={{ background: '#FEE2E2', color: '#991B1B', padding: '10px 14px', borderRadius: 10, fontSize: 13, fontWeight: 600, marginBottom: 16, border: '1.5px solid #FECACA' }}>{error}</div>
        )}
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: 'block', fontSize: 13, fontWeight: 700, marginBottom: 6, fontFamily: "'Space Grotesk', sans-serif" }}>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: '100%', padding: '10px 14px', border: '2px solid var(--ink-950)', borderRadius: 12, fontSize: 14, outline: 0, fontFamily: 'inherit', background: 'var(--paper)' }} placeholder="admin@tenta.studio" />
        </div>
        <div style={{ marginBottom: 24 }}>
          <label style={{ display: 'block', fontSize: 13, fontWeight: 700, marginBottom: 6, fontFamily: "'Space Grotesk', sans-serif" }}>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ width: '100%', padding: '10px 14px', border: '2px solid var(--ink-950)', borderRadius: 12, fontSize: 14, outline: 0, fontFamily: 'inherit', background: 'var(--paper)' }} />
        </div>
        <button type="submit" disabled={loading} style={{ width: '100%', padding: '12px 20px', background: 'var(--tenta-500, #FF7A1A)', color: 'var(--paper, #FFFDF9)', border: '2px solid var(--ink-950)', borderRadius: 12, fontSize: 15, fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif", cursor: loading ? 'not-allowed' : 'pointer', boxShadow: '3px 3px 0 var(--ink-950)', opacity: loading ? 0.7 : 1 }}>{loading ? 'Memproses...' : 'Masuk'}</button>
      </form>
    </div>
  );
}
