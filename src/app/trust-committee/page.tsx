'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import { useLanguage } from '@/components/LanguageProvider';
import styles from './trust.module.css';
import Link from 'next/link';

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
      <Navbar />
      
      <div className={styles.hero}>
        <h1 className="fade-in">{t('trust_title')}</h1>
      </div>

      <div className={styles.container}>
        <div className={styles.bearersSection}>
          <div className={styles.bearerCard}>
            <span className={styles.role}>{t('trust_president')}</span>
            <h3 className={styles.name}>{t('trust_dr_al_jain')}</h3>
          </div>
          <div className={styles.bearerCard}>
            <span className={styles.role}>{t('trust_secretary')}</span>
            <h3 className={styles.name}>{t('trust_rakesh_jain')}</h3>
          </div>
          <div className={styles.bearerCard}>
            <span className={styles.role}>{t('trust_treasurer')}</span>
            <h3 className={styles.name}>{t('trust_kanhaiyalal')}</h3>
          </div>
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
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{member.name}</td>
                    <td>{member.city}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className={styles.backHome}>
          <Link href="/">{t('nav_home')}</Link>
        </div>
      </div>
    </main>
  );
};

export default TrustCommitteePage;
