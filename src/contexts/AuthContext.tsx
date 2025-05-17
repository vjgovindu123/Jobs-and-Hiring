
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { getCurrentUserProfile, loginUser, logoutUser, registerUser, AuthCredentials, UserProfile } from '@/services/backendApi';

interface AuthContextType {
  isAuthenticated: boolean;
  user: UserProfile | null;
  loading: boolean;
  login: (credentials: AuthCredentials) => Promise<void>;
  register: (credentials: AuthCredentials & { name: string }) => Promise<void>;
  logout: () => void;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  loading: true,
  login: async () => {},
  register: async () => {},
  logout: () => {},
  refreshUser: async () => {}
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const refreshUser = async () => {
    setLoading(true);
    try {
      const userProfile = await getCurrentUserProfile();
      setUser(userProfile);
    } catch (error) {
      console.error("Error refreshing user:", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Check if user is logged in on mount
    refreshUser();
  }, []);

  const login = async (credentials: AuthCredentials) => {
    setLoading(true);
    try {
      const response = await loginUser(credentials);
      setUser(response.user);
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData: AuthCredentials & { name: string }) => {
    setLoading(true);
    try {
      const response = await registerUser(userData);
      setUser(response.user);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    logoutUser();
    setUser(null);
  };

  const value = {
    isAuthenticated: !!user,
    user,
    loading,
    login,
    register,
    logout,
    refreshUser
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
