"use client";

import { createContext, useContext, useState, useEffect } from 'react';
import { dictionaries, Language, Dictionary } from '@/i18n/dictionaries';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  dict: Dictionary;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en'); // Default to English
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const savedLang = localStorage.getItem('app-language') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'es')) {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('app-language', lang);
  };

  const dict = dictionaries[language];

  // Prevent hydration mismatch by not rendering until client-side matches
  if (!isClient) return <div className="min-h-screen bg-dark-900" />; // Simple placeholder

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, dict }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
