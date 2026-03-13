'use client';

import React from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import Navbar from '@/components/Navbar';
import Timeline from '@/components/Timeline';
import DharmicCalendar from '@/components/DharmicCalendar';
import Footer from '@/components/Footer';
import styles from './page.module.css';

const TemplePage = () => {
  const { t } = useLanguage();

  return (
    <main className={styles.main}>
      <Navbar forceDark={true} />
      {/* Top Section: Split Layout (Centered Container) */}
      <section className={styles.splitSection}>
        <div className={styles.container}>
          <div className={styles.splitWrapper}>
            <div className={styles.videoSide}>
              <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                poster="/images/temple/hero.png"
                preload="auto"
                className={styles.splitVideo}
              >
                <source src="/temple-video.mp4" type="video/mp4" />
              </video>
            </div>
            <div className={styles.contentSide}>
              <div className={styles.heritageBrief}>
                <h1 className={styles.mainTitle}>{t('temple_new_heritage_title')}</h1>
                <div className={styles.accentLine}></div>
                
                <div className={styles.quoteWrapper}>
                  <p className={styles.heritageQuote}>{t('temple_new_quote')}</p>
                </div>

                <div className={styles.narrativeBrief}>
                  <p>{t('temple_new_p1')}</p>
                  <p>{t('temple_new_p2')}</p>
                  <p>{t('temple_new_p3')}</p>
                  <p>{t('temple_new_p4')}</p>
                  <p>{t('temple_new_p5')}</p>
                  <p>{t('temple_new_p6')}</p>
                </div>

                <div className={styles.shortMeta}>
                  <div className={styles.metaBox}>
                    <span className={styles.label}>{t('temple_new_loc_label')}</span>
                    <span className={styles.value}>{t('temple_new_loc_val')}</span>
                  </div>
                  <div className={styles.metaBox}>
                    <span className={styles.label}>{t('temple_new_her_label')}</span>
                    <span className={styles.value}>{t('temple_new_her_val')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Narrative Section: Centered Heading & Grid */}
      <section className={styles.detailsSection}>
        <div className={styles.container}>
          <div className={styles.sectionTitleCenter}>
            <span className={styles.preTitle}>{t('temple_heritage_subtitle')}</span>
            <h2 className={styles.centeredTitle}>{t('about_history')}</h2>
            <div className={styles.accentLineCenter}></div>
          </div>
          
          <div className={styles.heritageGrid}>
            {/* Card 1 */}
            <div className={styles.heritageCard}>
              <div className={styles.cardImageWrapper}>
                <img src="/images/temple/heritage.png" alt={t('temple_sec1_title')} className={styles.cardImage} />
                <span className={styles.cardBadge}>{t('temple_sec1_badge')}</span>
              </div>
              <div className={styles.cardContent}>
                <h3>{t('temple_sec1_title')}</h3>
                <p>{t('temple_sec1_text')}</p>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className={styles.heritageCard}>
              <div className={styles.cardImageWrapper}>
                <img src="/images/temple/arch.png" alt={t('temple_sec2_title')} className={styles.cardImage} />
                <span className={styles.cardBadge}>{t('temple_sec2_badge')}</span>
              </div>
              <div className={styles.cardContent}>
                <h3>{t('temple_sec2_title')}</h3>
                <p>{t('temple_sec2_text')}</p>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className={styles.heritageCard}>
              <div className={styles.cardImageWrapper}>
                <img src="/temple-jali.png" alt={t('temple_sec3_title')} className={styles.cardImage} />
                <span className={styles.cardBadge}>{t('temple_sec3_badge')}</span>
              </div>
              <div className={styles.cardContent}>
                <h3>{t('temple_sec3_title')}</h3>
                <p>{t('temple_sec3_text')}</p>
              </div>
            </div>
            
            {/* Card 4 */}
            <div className={styles.heritageCard}>
              <div className={styles.cardImageWrapper}>
                <img src="/temple-nakshatra.png" alt={t('temple_sec4_title')} className={styles.cardImage} />
                <span className={styles.cardBadge}>{t('temple_sec4_badge')}</span>
              </div>
              <div className={styles.cardContent}>
                <h3>{t('temple_sec4_title')}</h3>
                <p>{t('temple_sec4_text')}</p>
              </div>
            </div>
            
            {/* Card 5 */}
            <div className={styles.heritageCard}>
              <div className={styles.cardImageWrapper}>
                <img src="/images/temple/hero.png" alt={t('temple_sec5_title')} className={styles.cardImage} />
                <span className={styles.cardBadge}>{t('temple_sec5_badge')}</span>
              </div>
              <div className={styles.cardContent}>
                <h3>{t('temple_sec5_title')}</h3>
                <p>{t('temple_sec5_text')}</p>
              </div>
            </div>
            
            {/* Card 6 */}
            <div className={styles.heritageCard}>
              <div className={styles.cardImageWrapper}>
                <img src="/welcome-bg.png" alt={t('temple_sec6_title')} className={styles.cardImage} />
                <span className={styles.cardBadge}>{t('temple_sec6_badge')}</span>
              </div>
              <div className={styles.cardContent}>
                <h3>{t('temple_sec6_title')}</h3>
                <p>{t('temple_sec6_text')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digitized Dharmic Calendar */}
      <section className={styles.calendarSection}>
        <div className={styles.container}>
          <DharmicCalendar />
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default TemplePage;
