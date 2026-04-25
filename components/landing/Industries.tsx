import React from 'react';
import styles from './Industries.module.css';

type Item = { emoji: string; name: string };
interface Props { items: Item[] }

const Industries: React.FC<Props> = ({ items }) => {
  return (
    <section className={styles.indSec}>
      <div className={styles.indHead}>
        <h2>Berpengalaman di <em>5 industri</em></h2>
        <p>Tim kami paham nuansa market Indonesia per vertikal.</p>
      </div>
      <div className={styles.industries}>
        {items.map((it, idx) => (
          <div key={idx} className={styles.ind}>
            <div className={styles.indEmoji}>{it.emoji}</div>
            <div className={styles.indName}>{it.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Industries;
