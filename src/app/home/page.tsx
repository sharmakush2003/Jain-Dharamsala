'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { useLanguage } from '@/components/LanguageProvider';
import { useAuth } from '@/components/AuthContext';
import styles from './page.module.css';

export default function Home() {
  const { t } = useLanguage();
  const { isAdmin } = useAuth();

  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      
      <section id="amenities" className={`${styles.section} ${styles.bgAlt}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.badge}>{t('nav_amenities')}</span>
            <h2>{t('amenities_title')}</h2>
            {isAdmin && <button className={styles.adminEditBtn}>✏️ Edit Amenities</button>}
          </div>
          
          <div className={styles.amenitiesGrid}>
            <div className={styles.amenity}>
              <div className={styles.icon}>🛏️</div>
              <span>{t('amenity_rooms')}</span>
            </div>
            <div className={styles.amenity}>
              <div className={styles.icon}>❄️</div>
              <span>{t('amenity_ac')}</span>
            </div>
            <div className={styles.amenity}>
              <div className={styles.icon}>🚿</div>
              <span>{t('amenity_water')}</span>
            </div>
            <div className={styles.amenity}>
              <div className={styles.icon}>🍽️</div>
              <span>{t('amenity_dining')}</span>
            </div>
            <div className={styles.amenity}>
              <div className={styles.icon}>📶</div>
              <span>{t('amenity_wifi')}</span>
            </div>
            <div className={styles.amenity}>
              <div className={styles.icon}>🚗</div>
              <span>{t('amenity_parking')}</span>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.forcedFooter}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <div className={styles.footerInfo}>
              <h3 className={styles.forcedFooterLogo}>{t('site_name')}</h3>
              <p className={styles.forcedFooterInfo}>{t('footer_address')}</p>
            </div>
            <div className={styles.forcedFooterLinks}>
              <h4>{t('footer_links')}</h4>
              <ul>
                <li><Link href="/about">{t('about_title')}</Link></li>
                <li><Link href="/trust-committee">{t('nav_trust')}</Link></li>
                <li><Link href="/contact">{t('nav_contact')}</Link></li>
                <li><Link href="/home#rooms">{t('nav_rooms')}</Link></li>
                <li><Link href="/home#booking">{t('nav_book')}</Link></li>
              </ul>
            </div>
            <div className={styles.forcedFooterContact}>
              <h4>{t('footer_contact')}</h4>
              <p>Email: info@jaindharamsala.com</p>
              <p>Phone: +91 98765 43210</p>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p className={styles.forcedCopyright}>&copy; 2026 {t('footer_copyright')}</p>
            <div className={styles.forcedCredit}>
              {t('made_with')} <span className={styles.heart}>❤️</span> {t('by')} 
              <span className={styles.names}> Kush Sharma</span> & 
              <span className={styles.names}> Lav Sharma</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
