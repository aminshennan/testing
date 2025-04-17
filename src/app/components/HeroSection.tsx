"use client"

import { AuroraButton } from './ui/aurora-button'
import { Spotlight } from './blocks/spotlight-new'
import { GridBackground } from './ui/grid-background'
import { useTranslation } from '../../lib/hooks/useTranslation'
import { motion } from "framer-motion"
import { FileText, Sparkles } from "lucide-react"
import { FloatingPaper } from './blocks/FloatingPaper'
import { LogoAnimation } from './blocks/LogoAnimation'
import { SparklesCore } from './blocks/Sparkles'

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black/[0.96] antialiased overflow-hidden pt-24">
      {/* Base effects from original */}
      <GridBackground opacity={0.25} strokeColor="rgb(255 255 255 / 0.1)" gridSize={32} />
      <Spotlight />
      
      {/* New particle effects */}
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={60}
          className="w-full h-full"
          particleColor="#FFFFFF"
          
        />
      </div>
      
      {/* Floating papers background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <FloatingPaper count={6} />
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-4">
              {t('hero.title')}
            </h1>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl sm:text-2xl text-neutral-200 font-semibold mb-5"
          >
            {t('hero.subtitle')}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-neutral-300 max-w-lg mx-auto mb-6"
          >
            {t('hero.description')}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row justify-center space-x-0 sm:space-x-4 space-y-4 sm:space-y-0"
          >
            <AuroraButton
              className="text-lg px-8 py-3"
              onClick={() => window.location.href = '#contact'}
            >
              <FileText className="mr-2 h-5 w-5 inline-block" />
              {t('hero.scheduleDemo')}
            </AuroraButton>
            
            <button
              className="px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white/5 transition-colors"
              onClick={() => {
                // Remove automatic scrolling
                // Just show the demo section without scrolling
              }}
            >
              <Sparkles className="mr-2 h-5 w-5 inline-block" />
              {t('hero.seeInAction')}
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Animated logo */}
      <div className="absolute bottom-10 md:bottom-5 right-10 md:right-20 w-52 h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 z-10">
        <LogoAnimation />
      </div>
    </section>
  )
} 