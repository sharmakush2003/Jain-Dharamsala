'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/LanguageProvider';
import styles from './trust.module.css';
import Link from 'next/link';
import Footer from '@/components/Footer';

const TrustCommitteePage = () => {
  const { t } = useLanguage();

  const members = [
    { name: t('trust_member_1'), city: t('trust_city_mumbai') },
    { name: t('trust_member_2'), city: t('trust_city_ahmedabad') },
    { name: t('trust_member_3'), city: t('trust_city_ahmedabad') },
    { name: t('trust_member_4'), city: t('trust_city_mumbai') },
    { name: t('trust_member_5'), city: t('trust_city_mumbai') },
    { name: t('trust_member_6'), city: t('trust_city_chittorgarh') },
    { name: t('trust_member_7'), city: t('trust_city_ahmedabad') },
    { name: t('trust_member_8'), city: t('trust_city_chittorgarh') },
    { name: t('trust_member_9'), city: t('trust_city_chittorgarh') },
    { name: t('trust_member_10'), city: t('trust_city_chittorgarh') },
    { name: t('trust_member_11'), city: t('trust_city_chittorgarh') },
    { name: t('trust_member_12'), city: t('trust_city_chittorgarh') },
    { name: t('trust_member_13'), city: t('trust_city_chittorgarh') },
    { name: t('trust_member_14'), city: t('trust_city_chittorgarh') },
  ];

  return (
    <main className={styles.page}>
      <Navbar forceDark={true} />
      
      <motion.div 
        className={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="fade-in">{t('trust_title')}</h1>
      </motion.div>

      <div className={styles.container}>
        <div className={styles.bearersSection}>
          {[
            { role: t('trust_president'), name: t('trust_dr_al_jain') },
            { role: t('trust_secretary'), name: t('trust_rakesh_jain') },
            { role: t('trust_treasurer'), name: t('trust_kanhaiyalal') },
          ].map((bearer, idx) => (
            <motion.div 
              key={idx} 
              className={styles.bearerCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <span className={styles.role}>{bearer.role}</span>
              <h3 className={styles.name}>{bearer.name}</h3>
            </motion.div>
          ))}
        </div>

        <div className={styles.membersSection}>
          <h2 className={styles.sectionTitle}>{t('trust_all_members')}</h2>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>{t('trust_col_sn')}</th>
                  <th>{t('trust_col_name')}</th>
                  <th>{t('trust_col_city')}</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member, index) => (
                  <motion.tr 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <td>{index + 1}</td>
                    <td>{member.name}</td>
                    <td>{member.city}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className={styles.backHome}>
          <Link href="/">{t('nav_home')}</Link>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default TrustCommitteePage;
