import React from 'react';
import styles from './Hero.module.css';

const AvatarStack = () => (
  <div className={styles.avs}>
    {(['K','B','N','A'] as const).map((l, i) => (
      <div key={i} className={styles.av} style={{
        background: ['var(--tenta-400)','var(--ink-900)','var(--tenta-600)','var(--accent-cream)'][i],
        color: i === 3 ? 'var(--ink-900)' : 'var(--paper)',
      }}>{l}</div>
    ))}
  </div>
);

const Hero: React.FC = () => {
  return (
    <section className={styles.hero} id="home">
      {/* LEFT */}
      <div className={styles.heroLeft}>
        <div className={styles.badge}>
          <span className={styles.badgeDot}>●</span> Menerima klien baru — Mei 2026
        </div>
        <h1>
          Agency<br/>
          <span className={styles.hWrap}>
            <span className={styles.hTag}>performance-driven</span>
          </span>
          <span className={styles.hBig}>buat brand</span><br/>
          <span className={styles.hItalic}>yang&nbsp;mau&nbsp;tumbuh.</span>
        </h1>
        <p>
          TENTA bantu brand Indonesia tumbuh lewat SEO, ads, social, dan content yang terukur.{' '}
          <strong>4.2x rata-rata ROAS</strong> — bukan cuma impression kosong.
        </p>
        <div className={styles.cta}>
          <button className={styles.btn}>Konsultasi Gratis 30 mnt →</button>
          <div className={styles.ctaSide}>
            <AvatarStack />
            <div>
              <strong>4.9 ★</strong>
              <small>142+ klien aktif</small>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT — graphic */}
      <div className={styles.heroRight}>
        <div className={styles.heroMark}>
          {/* Outer dashed ring (orange, spinning) */}
          <div className={styles.markRing} />
          {/* Inner solid ring (dark, reverse) */}
          <div className={`${styles.markRing} ${styles.markRing2}`} />

          {/* Core: circle with triangle */}
          <div className={styles.markCore}>
            <svg viewBox="0 0 120 120" width="100%" height="100%">
              <defs>
                <clipPath id="v3-clip"><circle cx="60" cy="60" r="50"/></clipPath>
              </defs>
              <circle cx="60" cy="60" r="50" fill="var(--ink-950)"/>
              <g clipPath="url(#v3-clip)">
                <path d="M10 85 L60 20 L110 85 Z" fill="var(--tenta-500)"/>
                <circle cx="60" cy="55" r="12" fill="var(--paper)"/>
                <text x="60" y="59" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--tenta-600)" fontFamily="Montserrat">↗</text>
              </g>
            </svg>
          </div>

          {/* Sticker 1 — circular text badge (top right) */}
          <div className={`${styles.sticker} ${styles.st1}`}>
            <svg viewBox="0 0 100 100" width="100" height="100">
              <defs>
                <path id="v3-sp" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"/>
              </defs>
              <circle cx="50" cy="50" r="50" fill="var(--tenta-400)"/>
              <text fontSize="10" fontWeight="700" fill="var(--ink-950)" letterSpacing="1.5" fontFamily="Montserrat">
                <textPath href="#v3-sp">★ SEO · ADS · SOCIAL · CONTENT · </textPath>
              </text>
              <text x="50" y="55" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--ink-950)" fontFamily="Montserrat">4.2x</text>
            </svg>
          </div>

          {/* Sticker 2 — KPI card (bottom left) */}
          <div className={`${styles.sticker} ${styles.st2}`}>
            <div className={styles.kpi}>
              <div className={styles.kpiLbl}>ROAS</div>
              <div className={styles.kpiNum}>5.8<span>x</span></div>
              <div className={styles.kpiTrend}>↗ +142%</div>
            </div>
          </div>

          {/* Sticker 3 — chart card (bottom right) */}
          <div className={`${styles.sticker} ${styles.st3}`}>
            <div className={styles.chart}>
              <svg viewBox="0 0 100 60" width="100%" height="100%">
                <path d="M5 50 Q 25 40 40 30 T 70 15 L 95 8" fill="none" stroke="var(--tenta-500)" strokeWidth="3" strokeLinecap="round"/>
                <circle cx="95" cy="8" r="4" fill="var(--tenta-500)"/>
                <text x="5" y="12" fontSize="7" fill="var(--ink-600)" fontFamily="Montserrat" fontWeight="600">Growth</text>
              </svg>
            </div>
          </div>

          {/* Sparkles */}
          <div className={`${styles.sparkle} ${styles.sp1}`}>✦</div>
          <div className={`${styles.sparkle} ${styles.sp2}`}>✦</div>
          <div className={`${styles.sparkle} ${styles.sp3}`}>✦</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
