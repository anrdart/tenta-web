"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Nav.module.css';

const Nav: React.FC = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.brand}>
          <span className={styles.logo}>T</span>
          TENTA
        </div>
        <div className={styles.navLeft}>
          <Link href="#home" aria-label="Home">Home</Link>
          <Link href="#services" aria-label="Services">Services</Link>
          <Link href="#pricing" aria-label="Pricing">Pricing</Link>
          <Link href="#contact" aria-label="Contact">Contact</Link>
        </div>
        <div className={styles.navRight}>
          <span className={styles.chip}>Sign up</span>
          <button
            className={`${styles.hamburger} ${open ? styles.hamburgerOpen : ''}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
      {open && (
        <div className={styles.mobileMenu}>
          <Link href="#home" onClick={close}>Home</Link>
          <Link href="#services" onClick={close}>Services</Link>
          <Link href="#pricing" onClick={close}>Pricing</Link>
          <Link href="#contact" onClick={close}>Contact</Link>
          <span className={styles.mobileChip}>Sign up</span>
        </div>
      )}
    </>
  );
};

export default Nav;
