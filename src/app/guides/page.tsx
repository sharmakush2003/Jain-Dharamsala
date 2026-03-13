'use client';

import React from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';
import { motion } from 'framer-motion';

const GuidesPage = () => {
  const { t, language } = useLanguage();

  const guides = [
    {
      id: 'heritage-trail',
      titleKey: 'guide_heritage_trail',
      icon: '🗺️',
      files: {
        en: '/resources/jain-heritage-trail-en.pdf',
        hi: '/resources/jain-heritage-trail-hi.pdf',
      }
    },
    {
      id: 'dharamsala-guide',
      titleKey: 'guide_dharamsala',
      icon: '🏛️',
      files: {
        en: '/resources/dharamsala-guide-en.pdf',
        hi: '/resources/dharamsala-guide-hi.pdf',
      }
    }
  ];

  return (
    <>
      <Navbar forceDark={true} />
      <main className={styles.guidesContainer}>
        <div className={styles.header}>
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t('guides_title')}
          </motion.h1>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('guides_subtitle')}
          </motion.p>
        </div>

        <div className={styles.grid}>
          {guides.map((guide, index) => (
            <motion.div 
              key={guide.id}
              className={styles.card}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.iconWrapper}>{guide.icon}</div>
              <h2 className={styles.guideTitle}>{t(guide.titleKey)}</h2>
              
              <div className={styles.downloadSection}>
                <a 
                  href={guide.files.en} 
                  download 
                  className={styles.downloadButton}
                >
                  <span>{t('guide_download_en')}</span>
                  <span className={styles.downloadIcon}>⬇️</span>
                </a>
                <a 
                  href={guide.files.hi} 
                  download 
                  className={styles.downloadButton}
                >
                  <span>{t('guide_download_hi')}</span>
                  <span className={styles.downloadIcon}>⬇️</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default GuidesPage;
