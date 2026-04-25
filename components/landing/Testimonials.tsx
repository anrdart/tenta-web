import React from 'react';
import styles from './Testimonials.module.css';

type Item = { name: string; role: string; text: string; tint?: string };
interface Props { items: Item[] }

const tintClass = [styles.orange, styles.dark, styles.cream];

const Testimonials: React.FC<Props> = ({ items }) => {
  return (
    <section className={styles.testiSection}>
      <div className={styles.secHead}>
        <div>
          <div className={styles.kickerInline}>KATA KLIEN</div>
          <h2>Yang mereka <em>bilang</em> ✨</h2>
        </div>
        <div className={styles.stars}>★★★★★ <span>4.9 / 5.0</span></div>
      </div>
      <div className={styles.testiGrid}>
        {items.map((it, idx) => (
          <div key={idx} className={`${styles.testi} ${tintClass[idx] ?? styles.cream}`}>
            <div className={styles.testiStars}>★★★★★</div>
            <p>"{it.text}"</p>
            <div className={styles.testiFt}>
              <span className={styles.testiAvatar}>{it.name.charAt(0)}</span>
              <div>
                <strong>{it.name}</strong>
                <small>{it.role}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
