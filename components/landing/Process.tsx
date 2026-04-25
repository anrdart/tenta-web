import React from 'react';
import styles from './Process.module.css';

type Step = { stepNumber: string; title: string; description: string };
interface Props { items: Step[] }

const Process: React.FC<Props> = ({ items }) => {
  return (
    <section className={styles.procSec} aria-label="process">
      <div className={styles.secHead}>
        <div>
          <div className={styles.kickerInline}>PROSES KERJA</div>
          <h2>Cara kami <em>jalanin</em> proyek</h2>
        </div>
        <div className={styles.procSub}>4 tahap. Tidak lebih, tidak kurang.</div>
      </div>
      <div className={styles.procGrid}>
        {items.map((it, idx) => (
          <div key={idx} className={styles.procStep}>
            <div className={styles.procNum}>{it.stepNumber}</div>
            <h4>{it.title}</h4>
            <p>{it.description}</p>
            {idx < items.length - 1 && <span className={styles.procArrow}>→</span>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
