import React from 'react';
import styles from './Pricing.module.css';
import { waLink } from '@/lib/wa';

type Item = { name: string; price: string; tag?: string; features: string[]; cta: string };
interface Props { items: Item[] }

function pricingWaLink(item: Item): string {
  // "Hubungi Sales" CTA = enterprise/custom tier
  const isEnterprise = item.cta.toLowerCase().includes('hubungi');
  if (isEnterprise) {
    return waLink(
      `Halo TENTA! Saya ingin mendiskusikan kebutuhan custom untuk paket *${item.name}*. Bisa dihubungi?`
    );
  }
  return waLink(
    `Halo TENTA! Saya tertarik dengan paket *${item.name}* (Rp ${item.price}jt/bln). Bisa dijelaskan lebih lanjut?`
  );
}

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
            <a
              href={pricingWaLink(it)}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.tierCta} ${it.tag ? '' : styles.tierCtaOutline}`}
            >
              {it.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
