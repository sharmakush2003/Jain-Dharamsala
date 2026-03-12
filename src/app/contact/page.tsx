'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import { useLanguage } from '@/components/LanguageProvider';
import styles from './contact.module.css';
import Link from 'next/link';

const ContactPage = () => {
  const { t } = useLanguage();

  return (
    <main className={styles.page}>
      <Navbar />
      
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className="fade-in">{t('contact_title')}</h1>
          <p className="fade-in" style={{ animationDelay: '0.2s' }}>{t('contact_greeting')}</p>
        </div>
      </div>

      <div className={styles.container}>
        {/* Warning Section */}
        <section className={`${styles.warningBox} fade-in`} style={{ animationDelay: '0.3s' }}>
          <div className={styles.warningIcon}>⚠️</div>
          <div className={styles.warningContent}>
            <h3>{t('contact_warning_title')}</h3>
            <p>{t('contact_warning_text')}</p>
          </div>
        </section>

        <div className={styles.grid}>
          {/* Contact Details Column */}
          <div className={styles.detailsCol}>
            <section className={styles.infoBox}>
              <h3>{t('contact_info_title')}</h3>
              <p>{t('contact_info_text')}</p>
            </section>

            <div className={styles.contactCards}>
              <div className={styles.contactCard}>
                <div className={styles.cardIcon}>📞</div>
                <div className={styles.cardText}>
                  <h4>{t('contact_phone_primary')}</h4>
                  <a href="tel:+919664309708">+91 9664309708</a>
                  <a href="tel:01472291971">01472-291971</a>
                </div>
              </div>

              <div className={styles.contactCard}>
                <div className={styles.cardIcon}>👤</div>
                <div className={styles.cardText}>
                  <h4>{t('contact_rajendra')}</h4>
                  <a href="tel:+919664309708">+91 9664309708</a>
                </div>
              </div>
              
              <div className={styles.contactCard}>
                <div className={styles.cardIcon}>📍</div>
                <div className={styles.cardText}>
                  <h4>{t('footer_address')}</h4>
                  <p>Saat Bees Deori, Chittorgarh Fort, Rajasthan - 312001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Column */}
          <div className={styles.mapCol}>
            <div className={styles.mapWrapper}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.520846640539!2d74.6444003753696!3d24.8896000779116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396898d0efd547f3%3A0xe7f9b87fcf100782!2sJain%20Shwetambar%20Temple%20%26%20Dharamsala!5e0!3m2!1sen!2sin!4v1710256860000!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{ border: 0, borderRadius: '12px' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className={styles.backHome}>
          <Link href="/">{t('nav_home')}</Link>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
