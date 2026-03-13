'use client';

import React from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';

const HistoryPage = () => {
  const { t } = useLanguage();

  const timelineItems = [
    { year: t('history_t1_year'), title: t('history_t1_title'), desc: t('history_t1_desc') },
    { year: t('history_t2_year'), title: t('history_t2_title'), desc: t('history_t2_desc') },
    { year: t('history_t3_year'), title: t('history_t3_title'), desc: t('history_t3_desc') },
    { year: t('history_t4_year'), title: t('history_t4_title'), desc: t('history_t4_desc') },
    { year: t('history_t5_year'), title: t('history_t5_title'), desc: t('history_t5_desc') },
    { year: t('history_t6_year'), title: t('history_t6_title'), desc: t('history_t6_desc') },
    { year: t('history_t7_year'), title: t('history_t7_title'), desc: t('history_t7_desc') },
    { year: t('history_t8_year'), title: t('history_t8_title'), desc: t('history_t8_desc') },
  ];

  const fortTemples = [
    { name: t('history_fort_t1_name'), badge: t('history_fort_t1_year'), desc: t('history_fort_t1_desc') },
    { name: t('history_fort_t2_name'), badge: t('history_fort_t2_year'), desc: t('history_fort_t2_desc') },
    { name: t('history_fort_t3_name'), badge: t('history_fort_t3_year'), desc: t('history_fort_t3_desc') },
    { name: t('history_fort_t4_name'), badge: t('history_fort_t4_year'), desc: t('history_fort_t4_desc') },
  ];

  const cityTemples = [
    { name: t('history_city_t1_name'), badge: t('history_city_t1_year'), desc: t('history_city_t1_desc') },
    { name: t('history_city_t2_name'), badge: t('history_city_t2_year'), desc: t('history_city_t2_desc') },
    { name: t('history_city_t3_name'), badge: t('history_city_t3_year'), desc: t('history_city_t3_desc') },
  ];

  const digambarTemples = [
    { name: t('history_digambar_t1_name'), badge: t('history_digambar_t1_year'), desc: t('history_digambar_t1_desc') },
    { name: t('history_digambar_t2_name'), badge: t('history_digambar_t2_year'), desc: t('history_digambar_t2_desc') },
  ];

  const monuments = [
    { name: t('history_mon_t1_name'), badge: t('history_mon_t1_year'), desc: t('history_mon_t1_desc') },
  ];

  return (
    <main className={styles.main}>
      <Navbar forceDark={true} />
      {/* Hero Header */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <span className={styles.preTitle}>{t('history_subtitle')}</span>
          <h1 className={styles.mainTitle}>{t('history_title')}</h1>
          <div className={styles.accentLine}></div>
          <p className={styles.introText}>{t('history_intro')}</p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className={styles.timelineSection}>
        <div className={styles.container}>
          <div className={styles.timelineGrid}>
            <div className={styles.timelineSidebar}>
              <h2>Timeline</h2>
              <div className={styles.quoteBox}>
                <p className={styles.quoteText}>{t('history_quote')}</p>
              </div>
            </div>
            
            <div className={styles.timelineItems}>
              {timelineItems.map((item, idx) => (
                <div key={idx} className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <span className={styles.year}>{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Temple Groups Section */}
      <section className={styles.templeGroups}>
        <div className={styles.container}>
          
          {/* Fort Temples */}
          <div className={styles.categorySection}>
            <div className={styles.groupHeader}>
              <h2>{t('history_cat_fort')}</h2>
              <div className={styles.accentLine}></div>
            </div>
            <div className={styles.templeGrid}>
              {fortTemples.map((temple, idx) => (
                <div key={idx} className={styles.card}>
                  <span className={styles.cardBadge}>{temple.badge}</span>
                  <h3>{temple.name}</h3>
                  <p>{temple.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* City Temples */}
          <div className={styles.categorySection}>
            <div className={styles.groupHeader}>
              <h2>{t('history_cat_city')}</h2>
              <div className={styles.accentLine}></div>
            </div>
            <div className={styles.templeGrid}>
              {cityTemples.map((temple, idx) => (
                <div key={idx} className={styles.card}>
                  <span className={styles.cardBadge}>{temple.badge}</span>
                  <h3>{temple.name}</h3>
                  <p>{temple.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Digambar Temples */}
          <div className={styles.categorySection}>
            <div className={styles.groupHeader}>
              <h2>{t('history_cat_digambar')}</h2>
              <div className={styles.accentLine}></div>
            </div>
            <div className={styles.templeGrid}>
              {digambarTemples.map((temple, idx) => (
                <div key={idx} className={styles.card}>
                  <span className={styles.cardBadge}>{temple.badge}</span>
                  <h3>{temple.name}</h3>
                  <p>{temple.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Monuments */}
          <div className={styles.categorySection}>
            <div className={styles.groupHeader}>
              <h2>{t('history_cat_monuments')}</h2>
              <div className={styles.accentLine}></div>
            </div>
            <div className={styles.templeGrid}>
              {monuments.map((temple, idx) => (
                <div key={idx} className={styles.card}>
                  <span className={styles.cardBadge}>{temple.badge}</span>
                  <h3>{temple.name}</h3>
                  <p>{temple.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Final Text */}
          <div className={styles.heritageFooter}>
            <p>{t('history_footer_text')}</p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
};

export default HistoryPage;
