import React, { useState } from 'react';
import { useLanguage } from './LanguageProvider';
import styles from './BookingWidget.module.css';

const BookingWidget = () => {
  const { t } = useLanguage();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isBooked, setIsBooked] = useState(false);

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    );
  };

  const handleBooking = () => {
    const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSf0p5e1NgFpVRO_L4PMKqeAMX_YITJswhoWSN4E-vh4YvE7dA/viewform?usp=publish-editor";
    window.open(googleFormUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={styles.widgetWrapper}>
      <div className={styles.forcedWidgetContainer}>
        <div className={styles.forcedInputGroup}>
          <label className={styles.forcedLabel}>{t('book_checkin')}</label>
          <input type="date" defaultValue={new Date().toISOString().split('T')[0]} />
        </div>
        
        <div className={styles.divider}></div>
        
        <div className={styles.forcedInputGroup}>
          <label className={styles.forcedLabel}>{t('book_checkout')}</label>
          <input type="date" defaultValue={new Date(Date.now() + 86400000).toISOString().split('T')[0]} />
        </div>
        
        <div className={styles.divider}></div>
        
        <div className={styles.forcedInputGroup}>
          <label className={styles.forcedLabel}>{t('book_guests')}</label>
          <select>
            <option>{t('guest_1')}</option>
            <option>{t('guest_2')}</option>
            <option>{t('guest_3')}</option>
            <option>{t('guest_family')}</option>
          </select>
        </div>
      </div>

      <div className={styles.sewaSection}>
        <h4 className={styles.sewaHeading}>{t('sewa_title')}</h4>
        <div className={styles.sewaGrid}>
          <button 
            className={`${styles.sewaBtn} ${selectedServices.includes(t('sewa_navkarsi')) ? styles.selected : ''}`}
            onClick={() => toggleService(t('sewa_navkarsi'))}
          >
            🍳 {t('sewa_navkarsi')}
          </button>
          <button 
            className={`${styles.sewaBtn} ${selectedServices.includes(t('sewa_bhojanshala')) ? styles.selected : ''}`}
            onClick={() => toggleService(t('sewa_bhojanshala'))}
          >
            🍽️ {t('sewa_bhojanshala')}
          </button>
          <button 
            className={`${styles.sewaBtn} ${selectedServices.includes(t('sewa_pooja')) ? styles.selected : ''}`}
            onClick={() => toggleService(t('sewa_pooja'))}
          >
            🙏 {t('sewa_pooja')}
          </button>
        </div>
      </div>

      <button 
        className={`${styles.searchBtn} ${isBooked ? styles.success : ''}`}
        onClick={handleBooking}
      >
        {isBooked ? t('booking_confirm_msg') : t('nav_book')}
      </button>

      <div className={styles.infoLine}>
        <span>✨ {t('info_best_price')}</span>
        <span>🏨 {t('info_verified')}</span>
        <span>🍽️ {t('info_jain_food')}</span>
      </div>
    </div>
  );
};

export default BookingWidget;
