'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { useLanguage } from '@/components/LanguageProvider';
import { useAuth } from '@/components/AuthContext';
import styles from './page.module.css';
import Footer from '@/components/Footer';

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

      <Footer />
    </main>
  );
}
