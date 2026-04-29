import React from 'react';
import styles from './Marquee.module.css';

interface Props { logos: string[] }

const Marquee: React.FC<Props> = ({ logos }) => {
  // Repeat items enough times so each half fills wide viewports (handles short item lists)
  const group = Array.from({ length: 6 }, () => logos).flat();
  return (
    <div className={styles.marquee}>
      <div className={styles.marqueeTrack} aria-label="marquee">
        {group.map((l, idx) => (
          <span key={idx}>{l}<em className={styles.mqSep}>✦</em></span>
        ))}
        {group.map((l, idx) => (
          <span key={`r-${idx}`}>{l}<em className={styles.mqSep}>✦</em></span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
