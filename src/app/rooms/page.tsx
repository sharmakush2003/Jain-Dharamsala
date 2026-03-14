'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

import { useLanguage } from '@/components/LanguageProvider';

const RoomsPage = () => {
  const { t } = useLanguage();

  const roomCategories = [
    {
      title: t('rooms_cat_premium'),
      rooms: [
        {
          name: t('rooms_ac_3bed_name'),
          count: 10,
          price: 1000,
          features: [t('rooms_feat_ac'), t('rooms_feat_geyser'), t('rooms_feat_prime')],
          description: t('rooms_ac_3bed_desc'),
          image: "/images/IMG-20260313-WA0046.jpg"
        },
        {
          name: t('rooms_ac_4bed_name'),
          count: 1,
          price: 1200,
          features: [t('rooms_feat_ac'), t('rooms_feat_spacious'), t('rooms_feat_geyser')],
          description: t('rooms_ac_4bed_desc'),
          image: "/images/IMG-20260313-WA0045.jpg"
        }
      ]
    },
    {
      title: t('rooms_cat_standard'),
      rooms: [
        {
          name: t('rooms_ac_2bed_name'),
          count: 17,
          price: 800,
          features: [t('rooms_feat_ac'), t('rooms_feat_geyser'), t('rooms_feat_linen')],
          description: t('rooms_ac_2bed_desc'),
          image: "/images/IMG-20260313-WA0047.jpg"
        },
        {
          name: t('rooms_nonac_2bed_name'),
          count: 22,
          price: 500,
          features: [t('rooms_feat_geyser'), t('rooms_feat_ventilated'), t('rooms_feat_fan')],
          description: t('rooms_nonac_2bed_desc'),
          image: "/images/standard_nonac_room.png"
        }
      ]
    },
    {
      title: t('rooms_cat_economy'),
      rooms: [
        {
          name: t('rooms_economy_name'),
          count: 10,
          price: 300,
          features: [t('rooms_feat_budget'), t('rooms_feat_traditional')],
          description: t('rooms_economy_desc'),
          image: "/images/economy_room_interior.png"
        },
        {
          name: t('rooms_halls_name'),
          count: 3,
          price: 300,
          features: [t('rooms_feat_beds'), t('rooms_feat_traditional'), t('rooms_feat_shared')],
          description: t('rooms_halls_desc'),
          image: "/images/dormitory_hall_interior.png"
        }
      ]
    }
  ];

  const BOOKING_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSf0p5e1NgFpVRO_L4PMKqeAMX_YITJswhoWSN4E-vh4YvE7dA/viewform?usp=sf_link";

  return (
    <div className={styles.roomsContainer}>
      <header className={styles.hero}>
        <Image 
          src="/images/IMG-20260313-WA0045.jpg" 
          alt="Jain Dharamsala Premium Room" 
          fill 
          priority
          className={styles.heroImage}
          style={{ objectFit: 'cover' }}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1>{t('rooms_hero_title')}</h1>
          <p>{t('rooms_hero_sub')}</p>
        </div>
      </header>

      <main className={styles.section}>
        {roomCategories.map((category, catIdx) => (
          <div key={catIdx} className={styles.categoryGroup}>
            <div className={styles.categoryHeader}>
              <h2>{category.title}</h2>
              <div className={styles.divider} />
            </div>
            
            <div className={styles.roomsGrid}>
              {category.rooms.map((room, roomIdx) => (
                <div key={roomIdx} className={styles.roomCard}>
                  <div className={styles.roomImageContainer}>
                    <div className={styles.roomPrice}>₹{room.price} <span style={{fontSize: '0.8rem', opacity: 0.8}}> / {t('rooms_night')}</span></div>
                    <Image 
                      src={room.image} 
                      alt={room.name} 
                      fill 
                      className={styles.roomImage}
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  
                  <div className={styles.roomContent}>
                    <h3>{room.name}</h3>
                    <div className={styles.roomFeatures}>
                      {room.features.map((f, i) => (
                        <span key={i} className={styles.featureTag}>{f}</span>
                      ))}
                    </div>
                    <p className={styles.roomDesc}>{room.description}</p>
                    
                    <div className={styles.roomFooter}>
                      <div className={styles.roomStatus}>
                        <div className={styles.totalBadge}>
                          {t('rooms_total').replace('{{count}}', room.count.toString())}
                        </div>
                        <span className={styles.roomCount}>{t('rooms_available')}</span>
                      </div>
                      <a 
                        href={BOOKING_FORM_URL} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={styles.bookBtn}
                      >
                        {t('rooms_book_now')}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>

      <footer className={styles.disclaimerSection}>
        <p>{t('rooms_disclaimer')}</p>
      </footer>
    </div>
  );
};

export default RoomsPage;
