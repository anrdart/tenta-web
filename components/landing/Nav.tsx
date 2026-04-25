"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Nav.module.css';

const TentaLogo = () => (
  <svg viewBox="0 0 40 40" width="36" height="36" aria-hidden>
    <circle cx="20" cy="20" r="18" fill="var(--tenta-500)"/>
    <path d="M8 28 L20 10 L32 28 Z" fill="var(--paper)"/>
    <circle cx="20" cy="20" r="3" fill="var(--ink-950)"/>
  </svg>
);

const Nav: React.FC = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.brand}>
          <TentaLogo />
          TENTA
        </div>
        <div className={styles.navLeft}>
          <Link href="#home" className={styles.active}>Beranda</Link>
          <Link href="#services">Layanan</Link>
          <Link href="#case-studies">Case Study</Link>
          <Link href="#pricing">Harga</Link>
          <Link href="#contact">Tentang</Link>
        </div>
        <div className={styles.navRight}>
          <span className={styles.chip}>💬 WhatsApp</span>
          <button className={styles.btn}>Konsultasi Gratis</button>
          <button
            className={`${styles.hamburger} ${open ? styles.hamburgerOpen : ''}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>
      {open && (
        <div className={styles.mobileMenu}>
          <Link href="#home" onClick={close}>Beranda</Link>
          <Link href="#services" onClick={close}>Layanan</Link>
          <Link href="#case-studies" onClick={close}>Case Study</Link>
          <Link href="#pricing" onClick={close}>Harga</Link>
          <Link href="#contact" onClick={close}>Tentang</Link>
          <span className={styles.mobileChip}>Konsultasi Gratis</span>
        </div>
      )}
    </>
  );
};

export default Nav;
