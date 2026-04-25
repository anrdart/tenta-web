"use client";
import React from 'react';
import styles from './Faq.module.css';

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
        <p>Pertanyaan yang sering muncul.</p>
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
