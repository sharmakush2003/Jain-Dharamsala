'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

import { useLanguage } from './LanguageProvider';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll(); // Set initial state
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>{t('site_name')}</span>
          <span className={styles.logoSubtext}>{t('site_sub')}</span>
        </Link>
        <div className={`${styles.links} ${menuOpen ? styles.menuOpen : ''}`}>
          <Link href="/" className={styles.link} onClick={() => setMenuOpen(false)}>{t('nav_home')}</Link>
          <Link href="/about" className={styles.link} onClick={() => setMenuOpen(false)}>{t('nav_about')}</Link>
          <Link href="/temple" className={styles.link} onClick={() => setMenuOpen(false)}>{t('nav_temple')}</Link>
          <Link href="/trust-committee" className={styles.link} onClick={() => setMenuOpen(false)}>{t('nav_trust')}</Link>
          <Link href="/contact" className={styles.link} onClick={() => setMenuOpen(false)}>{t('nav_contact')}</Link>
          <Link href="/#rooms" className={styles.link} onClick={() => setMenuOpen(false)}>{t('nav_rooms')}</Link>
          <Link href="/#amenities" className={styles.link} onClick={() => setMenuOpen(false)}>{t('nav_amenities')}</Link>
          
          <div className={styles.mobileOnly}>
            <button className={styles.langBtn} onClick={toggleLanguage}>
              {language === 'en' ? 'हिन्दी' : 'English'}
            </button>
            <Link href="#booking" className={styles.bookBtn} onClick={() => setMenuOpen(false)}>{t('nav_book')}</Link>
          </div>
        </div>

        <div className={styles.desktopActions}>
          <button className={styles.langBtn} onClick={toggleLanguage}>
            {language === 'en' ? 'हिन्दी' : 'English'}
          </button>
          <Link href="#booking" className={styles.bookBtn}>{t('nav_book')}</Link>
        </div>

        <button 
          className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
