"use client"

import { useLanguage } from "../contexts/LanguageContext";
import { en } from "../translations/en";

type TranslationKey = keyof typeof en;

export function useTranslation() {
  const { language, setLanguage, t, isRTL } = useLanguage();

  const changeLanguage = (lang: 'en' | 'ar') => {
    setLanguage(lang);
  };

  return {
    t,
    language,
    isRTL,
    changeLanguage
  };
} 