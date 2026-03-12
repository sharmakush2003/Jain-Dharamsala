'use client';

import React, { useState } from 'react';
import { useLanguage } from './LanguageProvider';
import styles from './DharmicCalendar.module.css';

interface TithiData {
  day: number;
  type: 'ashtami' | 'chaturdashi' | 'kalyanak' | 'general';
  labelKey: string;
  hasSpecialBhojan?: boolean;
}

const DharmicCalendar = () => {
  const { t } = useLanguage();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  // Mock Sacred Tithis for the demonstration (March 2026)
  const sacredDays: Record<number, TithiData> = {
    8: { day: 8, type: 'ashtami', labelKey: 'cal_ashtami' },
    14: { day: 14, type: 'chaturdashi', labelKey: 'cal_chaturdashi', hasSpecialBhojan: true },
    22: { day: 22, type: 'ashtami', labelKey: 'cal_ashtami' },
    27: { day: 27, type: 'kalyanak', labelKey: 'cal_kalyanak', hasSpecialBhojan: true },
    29: { day: 29, type: 'chaturdashi', labelKey: 'cal_chaturdashi' },
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const handleDayClick = (day: number) => {
    setSelectedDay(selectedDay === day ? null : day);
  };

  const renderDays = () => {
    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className={styles.emptyDay}></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const sacredInfo = sacredDays[i];
      days.push(
        <div 
          key={i} 
          className={`${styles.dayCell} ${selectedDay === i ? styles.selected : ''}`}
          onClick={() => handleDayClick(i)}
        >
          <span className={styles.dayNum}>{i}</span>
          {sacredInfo && (
            <>
              {sacredInfo.type === 'kalyanak' && <div className={styles.kalyanakDot}></div>}
              <div className={`${styles.tithiTag} ${styles[sacredInfo.type]}`}>
                {t(sacredInfo.labelKey)}
              </div>
            </>
          )}
        </div>
      );
    }
    return days;
  };

  const selectedTithi = selectedDay ? sacredDays[selectedDay] : null;

  return (
    <div className={styles.calendarContainer}>
      <div className={styles.calendarHeader}>
        <h3>{t('cal_dharmic_title')}</h3>
        <p>{t('cal_dharmic_subtitle')}</p>
      </div>

      <div className={styles.navigation}>
        <button 
          className={styles.navBtn} 
          onClick={() => setCurrentDate(new Date(year, month - 1))}
        >
          &lt;
        </button>
        <span className={styles.monthLabel}>
          {monthNames[month]} {year}
        </span>
        <button 
          className={styles.navBtn}
          onClick={() => setCurrentDate(new Date(year, month + 1))}
        >
          &gt;
        </button>
      </div>

      <div className={styles.grid}>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
          <div key={d} className={styles.weekday}>{d}</div>
        ))}
        {renderDays()}
      </div>

      {selectedDay && (
        <div className={styles.detailSection}>
          <div className={styles.detailHeader}>
            <div className={styles.detailIcon}>🕉️</div>
            <div className={styles.detailInfo}>
              <h4>{selectedDay} {monthNames[month]} {year}</h4>
              {selectedTithi ? (
                <p><strong>{t(selectedTithi.labelKey)}</strong></p>
              ) : (
                <p>{t('cal_view_details')}</p>
              )}
            </div>
          </div>

          <div className={styles.timingGrid}>
            <div className={styles.timingCard}>
              <h5>Navkarsi</h5>
              <p>{t('cal_timing_navkarsi')}</p>
            </div>
            <div className={styles.timingCard}>
              <h5>Bhojanshala</h5>
              <p>{t('cal_timing_bhojan')}</p>
            </div>
            {selectedTithi?.hasSpecialBhojan && (
              <div className={styles.timingCard}>
                <h5>Special</h5>
                <p>{t('cal_timing_special')}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DharmicCalendar;
