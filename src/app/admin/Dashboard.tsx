'use client';

import React from 'react';
import { useAuth } from '@/components/AuthContext';
import { useRouter } from 'next/navigation';
import styles from './Admin.module.css';

const Dashboard = () => {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <div className={styles.adminContainer}>
      <aside className={styles.sidebar}>
        <div className={styles.logoArea}>
          <h2>Jain Admin</h2>
        </div>
        <nav className={styles.navMenu}>
          <div className={`${styles.navItem} ${styles.navItemActive}`}>🏠 Dashboard</div>
          <div className={styles.navItem}>🛏️ Rooms</div>
          <div className={styles.navItem}>📅 Bookings</div>
          <div className={styles.navItem}>💰 Revenue</div>
          <div className={styles.navItem} onClick={() => document.getElementById('workspace')?.scrollIntoView({ behavior: 'smooth' })}>📂 Workspace</div>
          <div className={styles.navItem}>⚙️ Settings</div>
        </nav>
        <button onClick={handleLogout} className={styles.logoutBtn}>
          Exit Admin Mode
        </button>
      </aside>

      <main className={styles.mainContent}>
        <header className={styles.header}>
          <h1>Command Center</h1>
          <div className={styles.userBadge}>Admin User</div>
        </header>

        <section className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statLabel}>Total Bookings</div>
            <div className={styles.statValue}>1,284</div>
            <div className={`${styles.statTrend} ${styles.trendUp}`}>↑ 12% this month</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statLabel}>Dharamsala Occupancy</div>
            <div className={styles.statValue}>84%</div>
            <div className={`${styles.statTrend} ${styles.trendUp}`}>↑ 5% this week</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statLabel}>Revenue (INR)</div>
            <div className={styles.statValue}>₹452,000</div>
            <div className={`${styles.statTrend} ${styles.trendUp}`}>↑ 8% this month</div>
          </div>
        </section>

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

        <section className={styles.dashboardGrid}>
          <div className={styles.dataCard}>
            <h3>Recent Bookings</h3>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Guest Name</th>
                  <th>Room Type</th>
                  <th>Check In</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Rahul Jain</td>
                  <td>Premium AC</td>
                  <td>Oct 12</td>
                  <td><span className={`${styles.statusBadge} ${styles.statusConfirmed}`}>Confirmed</span></td>
                </tr>
                <tr>
                  <td>Amit Shah</td>
                  <td>Deluxe Suite</td>
                  <td>Oct 14</td>
                  <td><span className={`${styles.statusBadge} ${styles.statusPending}`}>Pending</span></td>
                </tr>
                <tr>
                  <td>Sanjay Gupta</td>
                  <td>Standard Non-AC</td>
                  <td>Oct 15</td>
                  <td><span className={`${styles.statusBadge} ${styles.statusConfirmed}`}>Confirmed</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.dataCard}>
            <h3>Room Availability</h3>
            <div style={{ marginTop: '1rem' }}>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span>AC Rooms</span>
                  <span>14 / 20</span>
                </div>
                <div style={{ background: '#27272a', height: '8px', borderRadius: '4px' }}>
                  <div style={{ background: '#eab308', width: '70%', height: '100%', borderRadius: '4px' }}></div>
                </div>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span>General Hall</span>
                  <span>45 / 50</span>
                </div>
                <div style={{ background: '#27272a', height: '8px', borderRadius: '4px' }}>
                  <div style={{ background: '#3b82f6', width: '90%', height: '100%', borderRadius: '4px' }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
