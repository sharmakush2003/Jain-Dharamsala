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
    const bookingId = Math.random().toString(36).substr(2, 9).toUpperCase();
    const data = {
      id: bookingId,
      name: "Guest " + Math.floor(Math.random() * 1000),
      checkIn: (document.querySelector('input[type="date"]:first-child') as HTMLInputElement)?.value || "2026-03-12",
      checkOut: (document.querySelectorAll('input[type="date"]')[1] as HTMLInputElement)?.value || "2026-03-13",
      guests: (document.querySelector('select') as HTMLSelectElement)?.value || "1 Person",
      rooms: "1 Standard Room",
      totalAmount: (1200 + selectedServices.length * 200).toString(),
      services: selectedServices.length > 0 ? selectedServices : ["Accommodation only"]
    };

    console.log("Mock Booking Data:", data);
    setIsBooked(true);
    setTimeout(() => setIsBooked(false), 5000);
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
