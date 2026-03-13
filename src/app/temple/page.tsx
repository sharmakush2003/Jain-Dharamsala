'use client';

import React from 'react';
import { motion } from 'framer-motion';
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
            <motion.div 
              className={styles.videoSide}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
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
            </motion.div>
            <motion.div 
              className={styles.contentSide}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
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
            </motion.div>
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
            {[
              { img: "/images/temple/heritage.png", title: t('temple_sec1_title'), text: t('temple_sec1_text'), badge: t('temple_sec1_badge') },
              { img: "/images/temple/arch.png", title: t('temple_sec2_title'), text: t('temple_sec2_text'), badge: t('temple_sec2_badge') },
              { img: "/temple-jali.png", title: t('temple_sec3_title'), text: t('temple_sec3_text'), badge: t('temple_sec3_badge') },
              { img: "/temple-nakshatra.png", title: t('temple_sec4_title'), text: t('temple_sec4_text'), badge: t('temple_sec4_badge') },
              { img: "/images/temple/hero.png", title: t('temple_sec5_title'), text: t('temple_sec5_text'), badge: t('temple_sec5_badge') },
              { img: "/welcome-bg.png", title: t('temple_sec6_title'), text: t('temple_sec6_text'), badge: t('temple_sec6_badge') },
            ].map((section, idx) => (
              <motion.div 
                key={idx} 
                className={styles.heritageCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className={styles.cardImageWrapper}>
                  <img src={section.img} alt={section.title} className={styles.cardImage} />
                  <span className={styles.cardBadge}>{section.badge}</span>
                </div>
                <div className={styles.cardContent}>
                  <h3>{section.title}</h3>
                  <p>{section.text}</p>
                </div>
              </motion.div>
            ))}
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
