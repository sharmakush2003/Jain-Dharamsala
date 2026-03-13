'use client';

import React, { useEffect } from 'react';
import { useAuth } from '@/components/AuthContext';
import { useRouter } from 'next/navigation';
import Dashboard from './Dashboard';

export default function AdminPage() {
  const { isAdmin } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // If not admin, redirect to welcome page
    if (!isAdmin) {
      router.push('/');
    }
  }, [isAdmin, router]);

  if (!isAdmin) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000', color: '#fff' }}>
        Authenticating...
      </div>
    );
  }

  return <Dashboard />;
}
