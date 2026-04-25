'use client';

import { useState } from 'react';
import Nav from '@/components/landing/Nav';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to send');
      }
      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err: any) {
      setStatus('error');
      setErrorMsg(err.message);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '12px 16px', border: '2px solid var(--ink-950, #1A130C)',
    borderRadius: 12, fontSize: 14, outline: 0, fontFamily: 'inherit',
    background: 'var(--paper, #FFFDF9)',
  };

  return (
    <>
      <Nav />
      <div style={{ maxWidth: 600, margin: '60px auto', padding: '0 40px' }}>
        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 48, fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 12 }}>Kontak <em style={{ fontFamily: "'Space Grotesk', sans-serif", fontStyle: 'italic', color: 'var(--tenta-600, #F06200)' }}>Kami</em></h1>
        <p style={{ color: 'var(--ink-700)', marginBottom: 32, fontSize: 16 }}>Ada proyek atau pertanyaan? Isi form di bawah.</p>

        {status === 'success' ? (
          <div style={{ background: '#D1FAE5', border: '2px solid #10B981', borderRadius: 12, padding: 20, color: '#065F46', fontWeight: 600 }}>
            Pesan terkirim! Kami akan segera merespons.
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 700, marginBottom: 6, fontFamily: "'Space Grotesk', sans-serif" }}>Nama *</label>
              <input style={inputStyle} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required placeholder="Nama lengkap" />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 700, marginBottom: 6, fontFamily: "'Space Grotesk', sans-serif" }}>Email *</label>
              <input style={inputStyle} type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required placeholder="email@kamu.com" />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 700, marginBottom: 6, fontFamily: "'Space Grotesk', sans-serif" }}>Nomor Telepon</label>
              <input style={inputStyle} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+62..." />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 700, marginBottom: 6, fontFamily: "'Space Grotesk', sans-serif" }}>Pesan *</label>
              <textarea style={{ ...inputStyle, minHeight: 120, resize: 'vertical' }} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required placeholder="Ceritakan proyek kamu..." />
            </div>
            {status === 'error' && <div style={{ color: '#991B1B', fontSize: 13, fontWeight: 600 }}>{errorMsg}</div>}
            <button type="submit" disabled={status === 'sending'} style={{
              padding: '14px 24px', background: 'var(--tenta-500, #FF7A1A)', color: 'var(--paper)',
              border: '2px solid var(--ink-950)', borderRadius: 12, fontSize: 15, fontWeight: 700,
              fontFamily: "'Space Grotesk', sans-serif", cursor: status === 'sending' ? 'not-allowed' : 'pointer',
              boxShadow: '3px 3px 0 var(--ink-950)', opacity: status === 'sending' ? 0.7 : 1, alignSelf: 'flex-start',
            }}>
              {status === 'sending' ? 'Mengirim...' : 'Kirim Pesan →'}
            </button>
          </form>
        )}
      </div>
    </>
  );
}
