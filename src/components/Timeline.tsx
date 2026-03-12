'use client';

import React, { useEffect, useRef } from 'react';
import { useLanguage } from './LanguageProvider';
import styles from './Timeline.module.css';

const Timeline = () => {
  const { t } = useLanguage();
  const observerRef = useRef<IntersectionObserver | null>(null);

  const events = [
    { year: t('timeline_1946'), title: t('timeline_1946_title'), desc: t('timeline_1946_desc') },
    { year: t('timeline_1948'), title: t('timeline_1948_title'), desc: t('timeline_1948_desc') },
    { year: t('timeline_1992'), title: t('timeline_1992_title'), desc: t('timeline_1992_desc') },
    { year: t('timeline_1998'), title: t('timeline_1998_title'), desc: t('timeline_1998_desc') },
    { year: t('timeline_2003'), title: t('timeline_2003_title'), desc: t('timeline_2003_desc') },
    { year: t('timeline_2009'), title: t('timeline_2009_title'), desc: t('timeline_2009_desc') },
    { year: t('timeline_today'), title: t('timeline_today_title'), desc: t('timeline_today_desc') },
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.isVisible);
        }
      });
    }, { threshold: 0.1 });

    const items = document.querySelectorAll(`.${styles.item}`);
    items.forEach(item => observerRef.current?.observe(item));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className={styles.timelineWrapper}>
      <div className={styles.line}></div>
      {events.map((event, index) => (
        <div key={index} className={styles.item}>
          <div className={styles.dot}></div>
          <div className={styles.content}>
            <span className={styles.year}>{event.year}</span>
            <h3 className={styles.title}>{event.title}</h3>
            <p className={styles.desc}>{event.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
