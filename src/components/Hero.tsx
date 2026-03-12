'use client';

import React from 'react';
import BookingWidget from '@/components/BookingWidget';
import { useLanguage } from './LanguageProvider';
import styles from './Hero.module.css';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h1 className="fade-in">{t('hero_title')}</h1>
          <p className="fade-in" style={{ animationDelay: '0.2s' }}>
            {t('hero_sub')}
          </p>
        </div>
        <div className="fade-in" style={{ animationDelay: '0.4s' }}>
          <BookingWidget />
        </div>
      </div>
    </section>
  );
};

export default Hero;
