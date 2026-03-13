'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
          <div className={styles.logoWrapper}>
            <Image 
              src="/logo.png" 
              alt="Jain Logo" 
              width={50} 
              height={50} 
              className={styles.logoImage}
            />
            <div className={styles.logoTexts}>
              <span className={styles.logoText}>{t('site_name')}</span>
              <span className={styles.logoSubtext}>{t('site_sub')}</span>
            </div>
          </div>
        </Link>
        <div className={`${styles.links} ${menuOpen ? styles.menuOpen : ''}`}>
          <Link href="/home" className={styles.link} onClick={() => setMenuOpen(false)}>{t('nav_home')}</Link>
          <Link href="/about" className={styles.link} onClick={() => setMenuOpen(false)}>{t('nav_about')}</Link>
          <Link href="/history" className={styles.link} onClick={() => setMenuOpen(false)}>{t('nav_history')}</Link>
          <Link href="/temple" className={styles.link} onClick={() => setMenuOpen(false)}>{t('nav_temple')}</Link>
          <Link href="/trust-committee" className={styles.link} onClick={() => setMenuOpen(false)}>{t('nav_trust')}</Link>
          <Link href="/contact" className={styles.link} onClick={() => setMenuOpen(false)}>{t('nav_contact')}</Link>
          <a href="https://chittorgarh-tourism-five.vercel.app/" className={styles.link} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>{t('nav_tourism')} <span style={{ fontSize: '0.8em', opacity: 0.7 }}>↗</span></a>
          <Link href="/home#rooms" className={styles.link} onClick={() => setMenuOpen(false)}>{t('nav_rooms')}</Link>
          <Link href="/home#amenities" className={styles.link} onClick={() => setMenuOpen(false)}>{t('nav_amenities')}</Link>
          {!isAdmin && (
            <Link href="/" className={styles.link} onClick={() => setMenuOpen(false)}>Admin Login</Link>
          )}
          
          <div className={styles.mobileOnly}>
            <button className={styles.langBtn} onClick={toggleLanguage}>
              {language === 'en' ? 'हिन्दी' : 'English'}
            </button>
            {isAdmin && (
              <>
                <Link href="/admin" className={styles.link} onClick={() => setMenuOpen(false)}>Dashboard</Link>
                <button 
                  className={styles.logoutBtn} 
                  style={{ width: '100%', marginTop: '10px' }} 
                  onClick={() => {
                    setMenuOpen(false);
                    logout();
                  }}
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>

        <div className={styles.desktopActions}>
          <button className={styles.langBtn} onClick={toggleLanguage}>
            {language === 'en' ? 'हिन्दी' : 'English'}
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
