import React from 'react';
import styles from './Stats.module.css';

type StatItem = { number: string; label: string; subtitle?: string };

interface Props { items: StatItem[] }

const Stats: React.FC<Props> = ({ items }) => {
  return (
    <section className={styles.stats}>
      {items.map((it, idx) => (
        <div key={idx} className={styles.stat}>
          <div className={styles.statNum}>{it.number}</div>
          <div className={styles.statLbl}>{it.label}</div>
          {it.subtitle ? <div className={styles.statSub}>{it.subtitle}</div> : null}
        </div>
      ))}
    </section>
  );
};

export default Stats;
