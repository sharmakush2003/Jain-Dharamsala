'use client';

import React from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import Timeline from '@/components/Timeline';
import DharmicCalendar from '@/components/DharmicCalendar';
import styles from './page.module.css';

const TemplePage = () => {
  const { t } = useLanguage();

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className={styles.heroVideo}
        >
          <source src="/temple-video.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroOverlay}></div>
      </section>

      {/* Quick Facts Section */}
      <section className={styles.factsSection}>
        <div className={styles.container}>
          <div className={styles.factsGrid}>
            <div className={styles.factCard}>
              <div className={styles.factIcon}>🏛️</div>
              <h3>{t('temple_fact_1_title')}</h3>
              <p>{t('temple_fact_1_text')}</p>
            </div>
            <div className={styles.factCard}>
              <div className={styles.factIcon}>☸️</div>
              <h3>{t('temple_fact_2_title')}</h3>
              <p>{t('temple_fact_2_text')}</p>
            </div>
            <div className={styles.factCard}>
              <div className={styles.factIcon}>💎</div>
              <h3>{t('temple_fact_3_title')}</h3>
              <p>{t('temple_fact_3_text')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* History & Heritage - High End Narrative */}
      <section className={styles.historySection}>
        <div className={styles.container}>
          <div className={styles.narrativeWrapper}>
            <div className={styles.historyText}>
              <span className={styles.badge}>{t('about_history')}</span>
              <h2 className={styles.premiumTitle}>History & Heritage</h2>
              <div className={styles.richText}>
                <p><span className={styles.dropcap}>T</span>{t('temple_hist_1').substring(1)}</p>
                <p>{t('temple_hist_2')}</p>
              </div>
            </div>
            <div className={styles.timelineContainer}>
              <Timeline />
            </div>
          </div>
        </div>
      </section>

      {/* Digitized Dharmic Calendar */}
      <section className={styles.centeredSection}>
        <div className={styles.container}>
          <DharmicCalendar />
        </div>
      </section>

      {/* Divine Architecture - Text then Image */}
      <section className={styles.archSection}>
        <div className={styles.container}>
          <div className={styles.archContentCentered}>
            <div className={styles.luxuryBoxCentered}>
              <h2 className={styles.archTitle}>{t('temple_arch_title')}</h2>
              <div className={styles.boxDivider}></div>
              <p>{t('temple_arch_text')}</p>
            </div>
          </div>
          <div className={styles.archImageFull}>
            <img src="/temple-jali.png" alt="Intricate Jali Work" className={styles.widePhoto} />
          </div>
        </div>
      </section>

      {/* Sacred Stories - Centered Text then Image */}
      <section className={styles.legendSection}>
        <div className={styles.container}>
          <div className={styles.centeredBox}>
            <div className={styles.legendHeader}>
              <span className={styles.quoteMark}>“</span>
              <h2 className={styles.legendTitle}>{t('temple_legend_title')}</h2>
            </div>
            <p className={styles.legendBodyCentered}>{t('temple_legend_text')}</p>
          </div>
          <div className={styles.archImageFull}>
            <img src="/temple-nakshatra.png" alt="Nakshatras Shrines" className={styles.widePhoto} />
          </div>
        </div>
      </section>

      {/* Preservation Section */}
      <section className={styles.restorationSection}>
        <div className={styles.container}>
          <div className={styles.restorationBox}>
            <div className={styles.restorationOrnament}>🔱</div>
            <h2>{t('temple_restoration_title')}</h2>
            <p>{t('temple_restoration_text')}</p>
            <div className={styles.finalDivider}></div>
            <p className={styles.guardianText}>Guardian: Shri Shwetambar Saat Bees Devari Fort Tirtha Trust</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TemplePage;
