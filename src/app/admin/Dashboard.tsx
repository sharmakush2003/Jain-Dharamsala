'use client';

import React from 'react';
import { useAuth } from '@/components/AuthContext';
import { useRouter } from 'next/navigation';
import styles from './Admin.module.css';

const Dashboard = () => {
  const { logout, adminRole } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  const handleBookRoom = () => {
    const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSf0p5e1NgFpVRO_L4PMKqeAMX_YITJswhoWSN4E-vh4YvE7dA/viewform?usp=sf_link";
    window.open(googleFormUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDownloadReport = () => {
    const SHEET_EXCEL_URL = "https://docs.google.com/spreadsheets/d/1V87BexFSW_NfzkjyT3Gozc6LFe12qTSd61iDY1ewYHM/export?format=xlsx&gid=1302886654";
    window.open(SHEET_EXCEL_URL, '_blank');
  };

  return (
    <div className={styles.adminContainer}>
      <aside className={styles.sidebar}>
        <div className={styles.logoArea}>
          <h2>Jain Admin</h2>
          <p style={{ fontSize: '0.8rem', opacity: 0.7, color: '#eab308' }}>
            {adminRole === 'super' ? 'Super Admin' : `Counter Admin (${adminRole?.replace('counter', ' ')})`}
          </p>
        </div>
        <nav className={styles.navMenu}>
          <div className={`${styles.navItem} ${styles.navItemActive}`}>🏠 Control Center</div>
          <div className={styles.navItem} onClick={handleBookRoom}>➕ Book New Room</div>
          <div className={styles.navItem} onClick={handleDownloadReport}>📊 Download Excel</div>
          {adminRole === 'super' && (
            <div className={styles.navItem} onClick={() => document.getElementById('workspace')?.scrollIntoView({ behavior: 'smooth' })}>📂 Workspace</div>
          )}
        </nav>
        <button onClick={handleLogout} className={styles.logoutBtn}>
          Exit Admin Mode
        </button>
      </aside>

      <main className={styles.mainContent}>
        <header className={styles.header}>
          <div className={styles.headerTitleArea}>
            <h1>Control Center</h1>
            <p className={styles.headerSubtitle}>
              Manage {adminRole === 'super' ? 'Central' : 'Counter'} Operations
            </p>
          </div>
          <div className={styles.headerActions}>
            <button 
              onClick={handleDownloadReport}
              className={styles.logoutBtn} 
              style={{ padding: '0.6rem 1.2rem', margin: 0, fontSize: '0.9rem', background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', border: '1px solid rgba(59, 130, 246, 0.2)' }}
            >
              📊 Download Excel
            </button>
            <button 
              onClick={handleBookRoom}
              className={styles.bookRoomBtn}
            >
              <span>➕</span> Book New Room
            </button>
            <div className={styles.userBadge}>
              {adminRole === 'super' ? 'Super Admin' : `Counter ${adminRole?.replace('counter', '')} User`}
            </div>
          </div>
        </header>

        <section style={{ 
          background: '#18181b', 
          padding: '3rem 2rem', 
          borderRadius: '1.5rem', 
          textAlign: 'center', 
          border: '1px solid rgba(255, 255, 255, 0.1)',
          marginBottom: '3rem'
        }}>
          <h2 style={{ color: '#ffcc33', marginBottom: '1rem', fontSize: '2rem' }}>Admin Quick Actions</h2>
          <p style={{ color: '#f4f4f5', marginBottom: '2.5rem', maxWidth: '600px', marginInline: 'auto', fontSize: '1.1rem', fontWeight: 500 }}>
            Use the buttons above or in the sidebar to register new bookings or download the latest entry reports.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <div style={{ padding: '2rem', background: '#111113', borderRadius: '1rem', width: '280px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>📝</div>
              <h3 style={{ color: '#fff', fontSize: '1.25rem' }}>Live Registration</h3>
              <p style={{ fontSize: '1rem', color: '#d1d1d6', marginTop: '0.75rem', lineHeight: '1.5' }}>Open the official Google Form to add new guest entries.</p>
            </div>
            <div style={{ padding: '2rem', background: '#111113', borderRadius: '1rem', width: '280px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>📑</div>
              <h3 style={{ color: '#fff', fontSize: '1.25rem' }}>Master Report</h3>
              <p style={{ fontSize: '1rem', color: '#d1d1d6', marginTop: '0.75rem', lineHeight: '1.5' }}>Export the complete booking list in Excel format.</p>
            </div>
          </div>
        </section>

        {adminRole === 'super' && (
          <section id="workspace" style={{ marginBottom: '3rem' }}>
            <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: 600 }}>Google Workspace Integration</h2>
            <div className={styles.workspaceGrid}>
              <a 
                href="https://docs.google.com/spreadsheets/d/1V87BexFSW_NfzkjyT3Gozc6LFe12qTSd61iDY1ewYHM/edit?resourcekey=&gid=1302886654#gid=1302886654" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.workspaceCard}
              >
                <div className={styles.workspaceIcon}>📊</div>
                <div className={styles.workspaceTitle}>Booking Excel Sheet</div>
                <p className={styles.workspaceDesc}>View and manage all booking data in real-time via Google Sheets.</p>
                <div className={styles.actionIcon}>↗</div>
              </a>

              <a 
                href="https://docs.google.com/forms/d/19grqwFLN_Z016WGPZ2MHM65R--XSWOt6vv5kEvrq6ik/edit#responses" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.workspaceCard}
              >
                <div className={styles.workspaceIcon}>📝</div>
                <div className={styles.workspaceTitle}>Response Summary</div>
                <p className={styles.workspaceDesc}>Analyze booking trends and guest feedback summaries.</p>
                <div className={styles.actionIcon}>↗</div>
              </a>

              <a 
                href="https://docs.google.com/forms/d/19grqwFLN_Z016WGPZ2MHM65R--XSWOt6vv5kEvrq6ik/edit" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.workspaceCard}
              >
                <div className={styles.workspaceIcon}>🛠️</div>
                <div className={styles.workspaceTitle}>Edit Booking Form</div>
                <p className={styles.workspaceDesc}>Modify form fields, questions, and booking requirements.</p>
                <div className={styles.actionIcon}>↗</div>
              </a>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
