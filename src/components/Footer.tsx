'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from './LanguageProvider';
import styles from './Footer.module.css';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div className={styles.footerInfo}>
            <h3 className={styles.footerLogo}>{t('site_name')}</h3>
            <p className={styles.footerAddress}>{t('footer_address')}</p>
          </div>
          
          <div className={styles.footerLinks}>
            <h4>{t('footer_links')}</h4>
            <ul>
              <li><Link href="/home">{t('nav_home')}</Link></li>
              <li><Link href="/about">{t('about_title')}</Link></li>
              <li><Link href="/trust-committee">{t('nav_trust')}</Link></li>
              <li><Link href="/contact">{t('nav_contact')}</Link></li>
              <li><a href="https://chittorgarh-tourism-five.vercel.app/" target="_blank" rel="noopener noreferrer">{t('footer_tourism')}</a></li>
            </ul>
          </div>
          
          <div className={styles.footerContact}>
            <h4>{t('footer_contact')}</h4>
            <p>Email: info@jaindharamsala.com</p>
            <p>Phone: +91 91163 97180</p>
            
            <div style={{ marginTop: '2rem' }}>
              <span className={styles.devLabel}>Developer Contact</span>
              <p style={{ margin: 0 }}>chittortech@gmail.com</p>
              <p style={{ margin: 0 }}>+91 8233816674</p>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>&copy; 2026 {t('footer_copyright')}</p>
          <div className={styles.credit}>
            {t('made_with')} <span className={styles.heart}>❤️</span> {t('by')} 
            <span className={styles.names}> Kush Sharma</span> & 
            <span className={styles.names}> Lav Sharma</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
