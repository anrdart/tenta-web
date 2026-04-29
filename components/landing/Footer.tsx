"use client";
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './Footer.module.css';

function Copyright() {
  const [year, setYear] = useState(2026);
  useEffect(() => { setYear(new Date().getFullYear()); }, []);
  return <>{year}</>;
}

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('idle');
    try {
      const res = await fetch('/api/newsletter', { method: 'POST', body: JSON.stringify({ email }), headers: { 'Content-Type': 'application/json' } });
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }, [email]);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerBrand}>
          <Image
            src="/logo-dark.png"
            alt="TENTA"
            width={418}
            height={137}
            style={{ height: '36px', width: 'auto' }}
            unoptimized
          />
          <p>Digital marketing agency berbasis di Jakarta, bantu brand Indonesia tumbuh dengan data.</p>
          <div className={styles.socials}>
            <a>IG</a><a>TW</a><a>LI</a><a>TT</a>
          </div>
        </div>
        <div className={styles.footerCol}>
          <h5>Layanan</h5>
          <a>SEO</a><a>Google Ads</a><a>Social Media</a><a>Content</a><a>Branding</a>
        </div>
        <div className={styles.footerCol}>
          <h5>Perusahaan</h5>
          <a>Tentang</a><a>Case Study</a><a>Blog</a><a>Karir</a><a>Kontak</a>
        </div>
        <div className={styles.footerNews}>
          <h5>Growth Letter 🟠</h5>
          <p>Insight digital marketing Indonesia, bulanan.</p>
          <form className={styles.news} onSubmit={onSubmit}>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@kamu.com" />
            <button type="submit">{status === 'success' ? '✓' : 'Gas →'}</button>
          </form>
        </div>
      </div>
      <div className={styles.footerBig}>TENTA</div>
      <div className={styles.footerBot}>
        <span>© <Copyright /> TENTA Digital Agency · Dibuat di Jakarta 🧡</span>
        <span>Privacy · Terms · Cookies</span>
      </div>
    </footer>
  );
};

export default Footer;
