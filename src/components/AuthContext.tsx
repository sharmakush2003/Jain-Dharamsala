'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type AdminRole = 'super' | 'counter1' | 'counter2' | 'counter3' | null;

interface AuthContextType {
  isAdmin: boolean;
  adminRole: AdminRole;
  login: (password: string, role?: AdminRole) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const ROLE_PASSWORDS: Record<Exclude<AdminRole, null>, string> = {
  super: 'superadmin123',
  counter1: 'counter1',
  counter2: 'counter2',
  counter3: 'counter3',
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [adminRole, setAdminRole] = useState<AdminRole>(null);

  useEffect(() => {
    const storedAdminStatus = localStorage.getItem('isAdmin') === 'true';
    const storedRole = localStorage.getItem('adminRole') as AdminRole;
    setIsAdmin(storedAdminStatus);
    setAdminRole(storedRole);
  }, []);

  const login = (password: string, selectedRole?: AdminRole) => {
    // If a role is selected, check that specific password
    if (selectedRole && selectedRole !== null) {
      if (password === ROLE_PASSWORDS[selectedRole as Exclude<AdminRole, null>]) {
        setIsAdmin(true);
        setAdminRole(selectedRole);
        localStorage.setItem('isAdmin', 'true');
        localStorage.setItem('adminRole', selectedRole);
        return true;
      }
    } else {
      // Legacy or password-only check (if user doesn't select role but enters super password)
      if (password === ROLE_PASSWORDS.super) {
        setIsAdmin(true);
        setAdminRole('super');
        localStorage.setItem('isAdmin', 'true');
        localStorage.setItem('adminRole', 'super');
        return true;
      }
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    setAdminRole(null);
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('adminRole');
  };

  return (
    <AuthContext.Provider value={{ isAdmin, adminRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
