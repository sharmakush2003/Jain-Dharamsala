'use client';

import React, { useState } from 'react';
import { useLanguage } from './LanguageProvider';
import styles from './AvailabilityCalendar.module.css';

const AvailabilityCalendar = () => {
  const { t } = useLanguage();
  const [currentDate, setCurrentDate] = useState(new Date());

  // Generate mock availability data
  const generateAvailability = (year: number, month: number) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const availability: Record<number, 'available' | 'full' | 'limited'> = {};
    
    for (let i = 1; i <= daysInMonth; i++) {
      const rand = Math.random();
      if (rand > 0.8) availability[i] = 'full';
      else if (rand > 0.6) availability[i] = 'limited';
      else availability[i] = 'available';
    }
    return availability;
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const availabilityData = generateAvailability(year, month);
  
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} className={styles.emptyDay}></div>);
  }
  
  for (let i = 1; i <= daysInMonth; i++) {
    const status = availabilityData[i];
    days.push(
      <div key={i} className={`${styles.day} ${styles[status]}`}>
        <span className={styles.dayNum}>{i}</span>
        <span className={styles.statusLabel}>
          {status === 'available' ? '✓' : status === 'full' ? '✕' : '!'}
        </span>
      </div>
    );
  }

  return (
    <div className={styles.calendarCard}>
      <div className={styles.header}>
        <h3>{t('booking_calendar_title')}</h3>
        <p>{t('booking_calendar_desc')}</p>
      </div>
      
      <div className={styles.navigation}>
        <button onClick={() => setCurrentDate(new Date(year, month - 1))}>&lt;</button>
        <span className={styles.monthYear}>{monthNames[month]} {year}</span>
        <button onClick={() => setCurrentDate(new Date(year, month + 1))}>&gt;</button>
      </div>
      
      <div className={styles.grid}>
        <div className={styles.weekday}>Sun</div>
        <div className={styles.weekday}>Mon</div>
        <div className={styles.weekday}>Tue</div>
        <div className={styles.weekday}>Wed</div>
        <div className={styles.weekday}>Thu</div>
        <div className={styles.weekday}>Fri</div>
        <div className={styles.weekday}>Sat</div>
        {days}
      </div>
      
      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <span className={`${styles.legendDot} ${styles.available}`}></span>
          <span>Available</span>
        </div>
        <div className={styles.legendItem}>
          <span className={`${styles.legendDot} ${styles.limited}`}></span>
          <span>Limited</span>
        </div>
        <div className={styles.legendItem}>
          <span className={`${styles.legendDot} ${styles.full}`}></span>
          <span>Full</span>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityCalendar;
