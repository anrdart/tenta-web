import React from 'react';
import styles from './Services.module.css';
import ServiceIcon from './icons/ServiceIcon';

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
  orange: styles.orange, dark: styles.dark, cream: styles.cream, orange2: styles.orange2,
};

const Services: React.FC<Props> = ({ items }) => {
  return (
    <section className={styles.srvSection} id="services">
    <div className={styles.srvGrid}>
      {items.map((it, idx) => (
        <article key={idx} className={`${styles.card} ${it.color ? colorClass[it.color] ?? styles.cream : styles.cream}`}>
          <header className={styles.cardHead}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span className={styles.icon}><ServiceIcon name={it.icon as any} /></span>
              <h3 style={{ margin: 0 }}>{it.title}</h3>
            </div>
            <span className={styles.tag}>{it.tag}</span>
          </header>
          <p className={styles.desc}>{it.description}</p>
          <div className={styles.cardMeta}>
            <span className={styles.price}>{it.price}</span>
            <button className={styles.cardArrow}>›</button>
          </div>
        </article>
      ))}
    </div>
    </section>
  );
};

export default Services;
