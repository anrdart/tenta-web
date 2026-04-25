import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroLeft}>
        <div className={styles.badge}>
          <span className={styles.badgeDot}>●</span> Premium
        </div>
        <h1>Introducing TENTA V3</h1>
        <div className={styles.hWrap}>
          <span className={styles.hTag}>V3</span>
        </div>
        <p>Experience the next generation of digital services with a design-forward, performance-driven frontend.</p>
        <div className={styles.cta}>
          <button className={styles.btn}>Get Started</button>
          <div className={styles.ctaSide}>
            <span>Trusted by</span>
            <span className={styles.avs}>
              <span className={styles.av}>K</span>
              <span className={styles.av}>B</span>
              <span className={styles.av}>N</span>
              <span className={styles.av}>A</span>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.heroRight}>
        <div className={styles.mark} />
        <div className={styles.ring} />
        <div className={styles.markCore} />
        <div className={styles.sticker} />
      </div>
    </section>
  );
};

export default Hero;
