'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero />
      </motion.div>
      
      <section id="amenities" className={`${styles.section} ${styles.bgAlt}`}>
        <div className={styles.container}>
          <motion.div 
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.badge}>{t('nav_amenities')}</span>
            <h2>{t('amenities_title')}</h2>
            {isAdmin && <button className={styles.adminEditBtn}>✏️ Edit Amenities</button>}
          </motion.div>
          
          <div className={styles.amenitiesGrid}>
            {[
              { icon: '🛏️', label: t('amenity_rooms') },
              { icon: '❄️', label: t('amenity_ac') },
              { icon: '🚿', label: t('amenity_water') },
              { icon: '🍽️', label: t('amenity_dining') },
              { icon: '📶', label: t('amenity_wifi') },
              { icon: '🚗', label: t('amenity_parking') },
            ].map((amenity, idx) => (
              <motion.div 
                key={idx} 
                className={styles.amenity}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className={styles.icon}>{amenity.icon}</div>
                <span>{amenity.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
