"use client"

import { Home, MessageCircle, BarChart2, Clock, Info, Globe, HelpCircle, Mail } from 'lucide-react'
import { NavBar } from "./ui/tubelight-navbar"
import { useTranslation } from '../../lib/hooks/useTranslation'
import Image from 'next/image'

export function NavBarDemo() {
  const { language, changeLanguage, t, isRTL } = useTranslation();

  const toggleLanguage = () => {
    changeLanguage(language === 'en' ? 'ar' : 'en');
  };

  const navItems = [
    { name: t('nav.home'), url: '#home', icon: Home },
    { name: t('nav.about'), url: '#about', icon: Info },
    { name: t('nav.benefits'), url: '#benefits', icon: BarChart2 },
    { name: t('nav.howItWorks'), url: '#process', icon: Clock },
    { name: t('nav.demo'), url: '#demo', icon: MessageCircle },
    { name: t('nav.faq'), url: '#faq', icon: HelpCircle },
    { name: t('nav.contact'), url: '#contact', icon: Mail }
  ]

  return (
    <>
      {/* Desktop & Tablet Header */}
      <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10" style={{ direction: 'ltr' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and brand name */}
            <div className="flex items-center">
              <a href="#home" className="flex items-center gap-2">
                <Image src="/logo.svg" alt="Mowazfk Logo" width={32} height={32} className="h-8 w-auto" />
                <span className="text-xl font-bold text-white">Mowazfk</span>
              </a>
            </div>

            {/* Navigation - centered */}
            <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
              <NavBar items={navItems} className="sm:static" />
            </div>
            
            {/* Language toggle and CTA */}
            <div className="flex items-center gap-4">
              <a href="#contact" className="hidden md:inline-flex px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium hover:opacity-90 transition-opacity">
                {t('nav.bookDemo')}
              </a>
              <button 
                onClick={toggleLanguage}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 transition-colors border border-white/20"
              >
                <Globe size={16} />
                <span className="text-sm font-medium">{language === 'en' ? 'العربية' : 'English'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile navigation */}
      <div className="md:hidden fixed bottom-4 left-0 right-0 z-40 flex justify-center">
        <div className="px-2 py-1 bg-black/80 border border-white/10 rounded-full shadow-lg">
          <NavBar items={navItems} />
        </div>
      </div>
    </>
  )
} 