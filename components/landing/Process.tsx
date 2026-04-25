import React from 'react';
import styles from './Process.module.css';

type Step = { stepNumber: string; title: string; description: string };
interface Props { items: Step[] }
const Process: React.FC<Props> = ({ items }) => {
  return (
    <section className={styles.procSec} aria-label="process">
      <div className={styles.procGrid}>
        {items.map((it, idx) => (
          <div key={idx} className={styles.procStep}>
            <div className={styles.procNum}>{it.stepNumber}</div>
            <h4>{it.title}</h4>
            <p>{it.description}</p>
            <span className={styles.procArrow}>➤</span>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Process;
