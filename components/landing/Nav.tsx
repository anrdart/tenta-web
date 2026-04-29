"use client";
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Nav.module.css';
import { WA_WHATSAPP, WA_GENERAL } from '@/lib/wa';

const SECTIONS = ['home', 'services', 'case-studies', 'pricing', 'contact'] as const;
type SectionId = (typeof SECTIONS)[number];

const NAV_ITEMS: { id: SectionId; label: string }[] = [
  { id: 'home', label: 'Beranda' },
  { id: 'services', label: 'Layanan' },
  { id: 'case-studies', label: 'Case Study' },
  { id: 'pricing', label: 'Harga' },
  { id: 'contact', label: 'Tentang' },
];


const Nav: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.brand}>
          <Image
            src="/logo-light.png"
            alt="TENTA"
            width={918}
            height={262}
            style={{ height: '36px', width: 'auto' }}
            unoptimized
            priority
          />
        </div>
        <div className={styles.navLeft}>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? styles.active : ''}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className={styles.navRight}>
          <a href={WA_WHATSAPP} target="_blank" rel="noopener noreferrer" className={styles.chip}>
            💬 WhatsApp
          </a>
          <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer" className={styles.btn}>
            Konsultasi Gratis
          </a>
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
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? styles.active : ''}
              onClick={close}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={WA_WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileChipOutline}
            onClick={close}
          >
            💬 WhatsApp
          </a>
        </div>
      )}
    </>
  );
};

export default Nav;
