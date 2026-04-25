import React from 'react';
import styles from './Pricing.module.css';

type Item = { name: string; price: string; tag?: string; features: string[]; cta: string };
interface Props { items: Item[] }
const Pricing: React.FC<Props> = ({ items }) => {
  return (
    <section className={styles.priceSection} id="pricing">
    <div className={styles.priceGrid}>
      {items.map((it, idx) => (
        <div key={idx} className={`${styles.tier} ${idx===1 ? styles.featured : ''}`}>
          {it.tag ? <div className={styles.tierTag}>{it.tag}</div> : null}
          <div className={styles.tierName}>{it.name}</div>
          <div className={styles.tierPrice}>
            <strong>{it.price}</strong><span>/bln</span>
          </div>
          <ul className={styles.tierList}>
            {it.features.map((f, i) => (
              <li key={i}><span className={styles.check}>✓</span> {f}</li>
            ))}
          </ul>
          <button className={styles.tierCta}>{it.cta}</button>
        </div>
      ))}
    </div>
    </section>
  );
};
export default Pricing;
