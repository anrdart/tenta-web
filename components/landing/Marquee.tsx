import React from 'react';
import styles from './Marquee.module.css';

interface Props { logos: string[] }

const Marquee: React.FC<Props> = ({ logos }) => {
  return (
    <div className={styles.marquee}>
      <div className={styles.marqueeTrack} aria-label="marquee">
        {logos.map((l, idx) => (
          <span key={idx} style={{ marginRight: 32 }}>{l}</span>
        ))}
        {logos.map((l, idx) => (
          <span key={`repeat-${idx}`} style={{ marginRight: 32 }}>{l}</span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
