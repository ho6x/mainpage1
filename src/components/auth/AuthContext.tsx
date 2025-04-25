import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserType } from '../../types/user';

interface User {
  id: string;
  name: string;
  email: string;
  userType: UserType;
  favorites: string[];
  searchPreferences?: {
    location?: string;
    priceRange?: {
      min: number;
      max: number;
    };
    propertyType?: string[];
  };
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string) => Promise<void>;
  register: (data: {
    name: string;
    email: string;
    password: string;
    userType: UserType;
    phone: string;
    companyName?: string;
    companyLicense?: string;
  }) => Promise<void>;
  logout: () => void;
  showAuthPrompt: boolean;
  setShowAuthPrompt: (show: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [showAuthPrompt, setShowAuthPrompt] = useState(false);

  useEffect(() => {
    // التحقق من وجود جلسة مستخدم محفوظة
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string) => {
    // TODO: Implement actual API call
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, create a mock user
      const mockUser: User = {
        id: '1',
        name: 'مستخدم تجريبي',
        email,
        userType: UserType.PROPERTY_SEEKER,
        favorites: []
      };
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
    } catch (error) {
      throw new Error('فشل تسجيل الدخول. يرجى التحقق من بياناتك.');
    }
  };

  const register = async (data: {
    name: string;
    email: string;
    password: string;
    userType: UserType;
    phone: string;
    companyName?: string;
    companyLicense?: string;
  }) => {
    // TODO: Implement actual API call
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, create the user account
      const mockUser: User = {
        id: '1',
        name: data.name,
        email: data.email,
        userType: data.userType,
        favorites: []
      };
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
    } catch (error) {
      throw new Error('فشل إنشاء الحساب. يرجى المحاولة مرة أخرى.');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        showAuthPrompt,
        setShowAuthPrompt
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
