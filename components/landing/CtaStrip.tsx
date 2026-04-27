import React from 'react';
import styles from './CtaStrip.module.css';
import { WA_BOOKING } from '@/lib/wa';

const CtaStrip: React.FC = () => {
  return (
    <section className={styles.ctaStrip} id="contact">
      <div className={styles.ctaBig}>
        <h2>Siap tumbuh <em>bareng&nbsp;kami?</em></h2>
        <p>Konsultasi 30 menit, tanpa biaya, tanpa komitmen.</p>
        <a href={WA_BOOKING} target="_blank" rel="noopener noreferrer" className={styles.v3Btn}>
          Booking sekarang →
        </a>
      </div>
    </section>
  );
};

export default CtaStrip;
