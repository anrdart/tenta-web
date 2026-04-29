"use client";
import React from 'react';
import styles from './Faq.module.css';
import { WA_GENERAL } from '@/lib/wa';

type Item = { question: string; answer: string };
interface Props { items: Item[] }

const Faq: React.FC<Props> = ({ items }) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);
  const toggle = (idx: number) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <section className={styles.faqSec}>
      <div className={styles.faqHead}>
        <div className={styles.faqKicker}>FAQ ✦</div>
        <h2>Masih <em>ragu?</em></h2>
        <p>Pertanyaan yang sering muncul. Kalau masih penasaran, langsung tanya kami.</p>
        <a
          href={WA_GENERAL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.faqCta}
        >
          Konsultasi Gratis →
        </a>
      </div>
      <div className={styles.faqList}>
        {items.map((it, idx) => (
          <div key={idx} className={`${styles.faqTile} ${openIndex === idx ? styles.faqOpen : ''}`}>
            <button className={styles.faqBtn} onClick={() => toggle(idx)}>
              <span>{it.question}</span>
              <span className={styles.faqIcon}>{openIndex === idx ? '−' : '+'}</span>
            </button>
            {openIndex === idx && (
              <div className={styles.faqAns}>{it.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
