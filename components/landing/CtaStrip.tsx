import React from 'react';
import styles from './CtaStrip.module.css';

const CtaStrip: React.FC = () => {
  return (
    <section className={styles.ctaStrip}>
      <div className={styles.ctaBig}>
        <h2>Siap tumbuh <em>bareng&nbsp;kami?</em></h2>
        <p>Konsultasi 30 menit, tanpa biaya, tanpa komitmen.</p>
        <button className={styles.v3Btn}>Booking sekarang →</button>
      </div>
    </section>
  );
};

export default CtaStrip;
