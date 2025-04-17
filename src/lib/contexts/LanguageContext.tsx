"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { en } from '../translations/en';
import { ar } from '../translations/ar';

type Translations = typeof en;

type LanguageContextType = {
  language: 'en' | 'ar';
  setLanguage: (lang: 'en' | 'ar') => void;
  t: (key: keyof Translations) => string;
  isRTL: boolean;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const [translations, setTranslations] = useState<Translations>(en);
  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    // Get language from localStorage if available
    const savedLanguage = localStorage.getItem('language') as 'en' | 'ar';
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    // Update translations based on language
    setTranslations(language === 'en' ? en : ar);
    setIsRTL(language === 'ar');
    
    // Update HTML dir attribute
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    
    // Add a class to the document to exclude navbar from RTL
    if (language === 'ar') {
      document.documentElement.classList.add('rtl-content');
    } else {
      document.documentElement.classList.remove('rtl-content');
    }
    
    // Save to localStorage
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: keyof Translations) => {
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 