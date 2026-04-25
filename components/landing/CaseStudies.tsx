import React from 'react';
import styles from './CaseStudies.module.css';

type Item = { client: string; industry: string; metric: string; metricLabel: string; period: string; color?: string };
interface Props { items: Item[] }

const caseColorClass = [styles.orange, styles.dark, styles.cream];

const CaseStudies: React.FC<Props> = ({ items }) => {
  return (
    <section className={styles.caseSection} id="case-studies">
      <div className={styles.secHead}>
        <div>
          <div className={styles.kickerInline}>CASE STUDY</div>
          <h2>Hasil <em>nyata</em>, angka nyata</h2>
        </div>
        <a className={styles.secLink}>Semua case →</a>
      </div>
      <div className={styles.caseGrid}>
        {items.map((it, idx) => (
          <article key={idx} className={`${styles.case} ${caseColorClass[idx % 3]}`}>
            <div className={styles.caseHead}>
              <span className={styles.caseClient}>{it.client}</span>
              <span className={styles.caseInd}>{it.industry}</span>
            </div>
            <div className={styles.caseMetric}>
              <div className={styles.caseNum}>{it.metric}</div>
              <div className={styles.caseLbl}>{it.metricLabel}</div>
            </div>
            <div className={styles.caseFoot}>
              <span>⏱ {it.period}</span>
              <button className={styles.caseArrow}>↗</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
