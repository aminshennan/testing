"use client"

import { NavBarDemo } from "./components/NavBarDemo"
import EnhancedHeroSection from "./components/EnhancedHeroSection"
import { LogosSection } from "./components/LogosSection"
import { BenefitsSection } from "./components/BenefitsSection"
import { ProcessSection } from "./components/ProcessSection"
import { InteractiveDemoSection } from "./components/InteractiveDemoSection"
import { StatisticalHighlights } from "./components/StatisticalHighlights"
import { BookDemoSection } from "./components/BookDemoSection"
import { FAQSection } from "./components/FAQSection"
import { LiveChatWidget } from "./components/LiveChatWidget"
import { FloatingCTA } from "./components/ui/floating-cta"
import { useTranslation } from "../lib/hooks/useTranslation"

export default function Home() {
  const { isRTL } = useTranslation();
  
  return (
    <main className={`min-h-screen bg-black ${isRTL ? 'rtl-text-right' : ''}`}>
      <NavBarDemo />
      <section id="home">
        <EnhancedHeroSection />
      </section>
      <section id="about">
        <LogosSection />
      </section>
      <section id="stats">
        <StatisticalHighlights />
      </section>
      <section id="benefits">
        <BenefitsSection />
      </section>
      <section id="demo">
        <InteractiveDemoSection />
      </section>
      <section id="process">
        <ProcessSection />
      </section>
      <section id="faq">
        <FAQSection />
      </section>
      <section id="contact">
        <BookDemoSection />
      </section>
      <LiveChatWidget />
      <FloatingCTA />
    </main>
  )
}
