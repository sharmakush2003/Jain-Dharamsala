'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/AuthContext';
import styles from './page.module.css';

  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const { login } = useAuth();

  const handleGuestEntry = () => {
    router.push('/home');
  };

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      router.push('/admin');
    } else {
      setError('Invalid admin password');
    }
  };

  return (
    <div className={styles.welcomeContainer}>
      <div className={styles.card}>
        <div className={styles.logo}>🏯</div>
        <h1 className={styles.title}>Jain Dharamsala</h1>
        <p className={styles.subtitle}>
          Welcome to heart of peaceful staying. Experience serenity and Jain hospitality at its finest.
        </p>

        {!showAdminLogin ? (
          <div className={styles.buttonGroup}>
            <button onClick={handleGuestEntry} className={styles.primaryButton}>
              Explore as Guest
            </button>
            <button 
              onClick={() => setShowAdminLogin(true)} 
              className={styles.adminToggle}
            >
              Admin Portal
            </button>
          </div>
        ) : (
          <form onSubmit={handleAdminLogin} className={styles.authForm}>
            <input
              type="password"
              placeholder="Enter Admin Password"
              className={styles.inputField}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
              required
            />
            {error && <p className={styles.error}>{error}</p>}
            <button type="submit" className={styles.loginButton}>
              Login as Admin
            </button>
            <button 
              type="button" 
              onClick={() => setShowAdminLogin(false)} 
              className={styles.adminToggle}
              style={{ marginTop: '1rem', width: '100%' }}
            >
              Back
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
