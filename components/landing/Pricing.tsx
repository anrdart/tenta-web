import React from 'react';
import styles from './Pricing.module.css';

type Item = { name: string; price: string; tag?: string; features: string[]; cta: string };
interface Props { items: Item[] }

const Pricing: React.FC<Props> = ({ items }) => {
  return (
    <section className={styles.priceSection} id="pricing">
      <div className={styles.secHeadC}>
        <div className={styles.kickerInline}>PAKET HARGA</div>
        <h2>Mulai dari <em>6jt/bulan</em></h2>
        <p className={styles.secSub}>Semua paket bisa custom. Angka di bawah adalah management fee — belum termasuk budget ads.</p>
      </div>
      <div className={styles.priceGrid}>
        {items.map((it, idx) => (
          <div key={idx} className={`${styles.tier} ${it.tag ? styles.featured : ''}`}>
            {it.tag && <div className={styles.tierTag}>{it.tag}</div>}
            <div className={styles.tierName}>{it.name}</div>
            <div className={styles.tierPrice}>
              <small>Rp</small>
              <strong>{it.price}</strong>
              <span>jt/bln</span>
            </div>
            <ul className={styles.tierList}>
              {it.features.map((f, i) => (
                <li key={i}><span className={styles.check}>✓</span> {f}</li>
              ))}
            </ul>
            <button className={`${styles.tierCta} ${it.tag ? '' : styles.tierCtaOutline}`}>{it.cta}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
