'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

import { useLanguage } from './LanguageProvider';
import { useAuth } from './AuthContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { isAdmin, logout } = useAuth();

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
        <Link href="/home" className={styles.logo}>
          <span className={styles.logoText}>{t('site_name')}</span>
          <span className={styles.logoSubtext}>{t('site_sub')}</span>
        </Link>
        <div className={`${styles.links} ${menuOpen ? styles.menuOpen : ''}`}>
          <Link href="/home" className={styles.link} onClick={() => setMenuOpen(false)}>{t('nav_home')}</Link>
          <Link href="/about" className={styles.link} onClick={() => setMenuOpen(false)}>{t('nav_about')}</Link>
          <Link href="/temple" className={styles.link} onClick={() => setMenuOpen(false)}>{t('nav_temple')}</Link>
          <Link href="/trust-committee" className={styles.link} onClick={() => setMenuOpen(false)}>{t('nav_trust')}</Link>
          <Link href="/contact" className={styles.link} onClick={() => setMenuOpen(false)}>{t('nav_contact')}</Link>
          <Link href="/home#rooms" className={styles.link} onClick={() => setMenuOpen(false)}>{t('nav_rooms')}</Link>
          <Link href="/home#amenities" className={styles.link} onClick={() => setMenuOpen(false)}>{t('nav_amenities')}</Link>
          {!isAdmin && (
            <Link href="/" className={styles.link} onClick={() => setMenuOpen(false)}>Admin</Link>
          )}
          
          <div className={styles.mobileOnly}>
            <button className={styles.langBtn} onClick={toggleLanguage}>
              {language === 'en' ? 'हिन्दी' : 'English'}
            </button>
            <button 
              className={styles.bookBtn} 
              onClick={() => {
                setMenuOpen(false);
                window.open("https://docs.google.com/forms/d/e/1FAIpQLSf0p5e1NgFpVRO_L4PMKqeAMX_YITJswhoWSN4E-vh4YvE7dA/viewform?usp=publish-editor", '_blank', 'noopener,noreferrer');
              }}
            >
              {t('nav_book')}
            </button>
          </div>
        </div>

        <div className={styles.desktopActions}>
          <button className={styles.langBtn} onClick={toggleLanguage}>
            {language === 'en' ? 'हिन्दी' : 'English'}
          </button>
          <button 
            className={styles.bookBtn} 
            onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSf0p5e1NgFpVRO_L4PMKqeAMX_YITJswhoWSN4E-vh4YvE7dA/viewform?usp=publish-editor", '_blank', 'noopener,noreferrer')}
          >
            {t('nav_book')}
          </button>
          {isAdmin && (
            <>
              <Link href="/admin" className={styles.langBtn} style={{ background: 'rgba(234, 179, 8, 0.1)', color: '#eab308' }}>Dashboard</Link>
              <button className={styles.logoutBtn} onClick={logout}>
                Logout
              </button>
            </>
          )}
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
