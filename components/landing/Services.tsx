import React from 'react';
import styles from './Services.module.css';
import ServiceIcon from './icons/ServiceIcon';
import { waLink } from '@/lib/wa';

type ServiceItem = {
  icon: string;
  title: string;
  tag: string;
  price: string;
  color?: string;
  description: string;
};

interface Props { items: ServiceItem[] }

const colorClass: Record<string, string> = {
  orange: styles.orange,
  dark: styles.dark,
  cream: styles.cream,
  orange2: styles.orange2,
};

const Services: React.FC<Props> = ({ items }) => {
  return (
    <section className={styles.srvSection} id="services">
      <div className={styles.secHead}>
        <div>
          <div className={styles.kickerInline}>LAYANAN</div>
          <h2>Full-stack <em>growth</em></h2>
        </div>
        <a className={styles.secLink}>Lihat semua layanan →</a>
      </div>
      <div className={styles.srvGrid}>
        {items.map((it, idx) => (
          <article key={idx} className={`${styles.card} ${it.color ? colorClass[it.color] ?? styles.cream : styles.cream}`}>
            <div className={styles.cardHead}>
              <div className={styles.tag}>{it.tag}</div>
              <span className={styles.icon}><ServiceIcon name={it.icon as any} /></span>
            </div>
            <div className={styles.cardFoot}>
              <div>
                <h3>{it.title}</h3>
                <p className={styles.desc}>{it.description}</p>
              </div>
              <div className={styles.cardMeta}>
                <span className={styles.price}>{it.price}</span>
                <a
                  href={waLink(`Halo TENTA! Saya ingin tahu lebih lanjut soal layanan *${it.title}* (${it.price}). Bisa diinfo?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardArrow}
                >
                  ↗
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
