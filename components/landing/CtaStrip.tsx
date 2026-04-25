import React from 'react';
import styles from './CtaStrip.module.css';

const CtaStrip: React.FC = () => {
  return (
    <section className={styles.ctaStrip}>
      <div className={styles.ctaBig}>
        <h2 className={styles.ctaHeading}>Ready to elevate your brand?</h2>
      </div>
      <p className={styles.ctaP}>Let’s craft something remarkable together.</p>
      <button className={styles.v3Btn}>Talk to us</button>
    </section>
  );
};
export default CtaStrip;
