'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { useLanguage } from '@/components/LanguageProvider';
import Timeline from '@/components/Timeline';
import Footer from '@/components/Footer';
import styles from './about.module.css';

const AboutPage = () => {
  const { language, t } = useLanguage();

  const content = {
    hi: {
      title: "जैन धर्मशाला (स्टेशन रोड)",
      phoneLabel: "फोन:",
      phone: "91163 97180",
      facilities: "सुविधाएं: ए.सी./नॉन-ए.सी. कमरे, फ्री पार्किंग, भोजनशाला, मंदिर, गर्म पानी",
      note: "नोट: सात बीस देवरी मंदिर, किला का फोन नंबर: 9252144095",
      bhojanshala: {
        title: "भोजनशाला",
        para1: "किले के सात बीस देवरी मंदिर मंे श्रीमती जयकुंवर बेन अमृतलाल जी, रामजी भाई शाह माटूंगा हस्ते समाज श्रेष्ठी पुत्र श्री नरेश भाई शाह के आर्थिक सहयोग से सन् 2009 में भोजनशाला का कार्य पूर्ण हुआ एवं तबसे भोजनशाला नियमित रूप से चालू है।",
        para2: "जैन धर्मशाला स्टेशन रोड पर भोजनशाला की कमी महसूस की जा रही थी। फलस्वरूप श्रीमती पार्वती बेन, जगरूप जी, मंछालाल जी निवासी सिरोही हस्ते, श्री चम्पालाल जी सूरत एवं री जयन्तिलाल जी मुंबई के आर्थिक सहयोग से 60'x 60' क्षेत्रफल की सुन्दर भोजनशाला का निर्माण सन् 1998 में पूर्ण हुआ। तब से भोजनशाला नियमित एवं सुव्यवस्थित रूप से चल रही है।"
      }
    },
    en: {
      title: "Jain Dharamsala (Station Road)",
      phoneLabel: "Phone:",
      phone: "91163 97180",
      facilities: "Facilities: AC/Non-AC Rooms, Free Parking, Bhojanshala, Temple, Hot Water",
      note: "Note: Phone Number of Saat Bees Devri Temple, Fort: 9252144095",
      bhojanshala: {
        title: "Bhojanshala (Dining Hall)",
        para1: "The Bhojanshala at the Saat Bees Devri Temple on the Fort was completed in 2009 with the support of the Shah family from Mumbai and has been operational since then.",
        para2: "Recognizing the need for a dining hall at the Station Road location, a beautiful 60'x 60' Bhojanshala was constructed in 1998 with support from the Sirohi, Surat, and Mumbai communities. It has been running systematically ever since."
      }
    }
  };

  const current = content[language];

  return (
    <div className={styles.page}>
      <Navbar />
      <div className={styles.hero}>
        <div className={styles.heroOverlay}>
          <h1>{current.title}</h1>
        </div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.contactCard}>
          <p>📞 {current.phoneLabel} {current.phone}</p>
          <p>🏠 {current.facilities}</p>
          <p className={styles.note}>ℹ️ {current.note}</p>
        </div>

        <section className={styles.historySection}>
          <div className={styles.sectionHeader}>
            <span className={styles.badge}>{t('about_history')}</span>
            <h2 className={styles.sectionTitle}>{t('about_history')}</h2>
          </div>
          <Timeline />
        </section>

        <section className={styles.bhojanshalaSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.badge}>{current.bhojanshala.title}</span>
            <h2 className={styles.sectionTitle}>{current.bhojanshala.title}</h2>
          </div>
          <div className={styles.historyContent}>
            <p className={styles.bhojanText}>{current.bhojanshala.para1}</p>
            <p className={styles.bhojanText}>{current.bhojanshala.para2}</p>
          </div>
        </section>

        <div className={styles.backHome}>
           <Link href="/">{t('nav_home')}</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
