"use client";

import { Timeline } from "./ui/timeline";
import { motion } from "framer-motion";
import { useTranslation } from "../../lib/hooks/useTranslation";
import { GridBackground } from "./ui/grid-background";

export function ProcessSection() {
  const { t, isRTL } = useTranslation();
  
  const processData = [
    {
      title: t('process.step1.title'),
      content: (
        <div className="space-y-4">
          <p className={`text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal ${isRTL ? 'text-right' : 'text-left'}`}>
            {t('process.step1.description')}
          </p>
          <div className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-2 text-sm text-neutral-600 dark:text-neutral-400`}>
            <span>📱</span>
            <span>Supports Facebook, Instagram, Telegram, Webchat, and WhatsApp</span>
          </div>
          <div className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-2 text-sm text-neutral-600 dark:text-neutral-400`}>
            <span>⚡</span>
            <span>15-minute setup per platform</span>
          </div>
          <div className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-2 text-sm text-neutral-600 dark:text-neutral-400`}>
            <span>🔒</span>
            <span>Secure OAuth authentication</span>
          </div>
        </div>
      ),
    },
    {
      title: t('process.step2.title'),
      content: (
        <div className="space-y-4">
          <p className={`text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal ${isRTL ? 'text-right' : 'text-left'}`}>
            {t('process.step2.description')}
          </p>
          <div className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-2 text-sm text-neutral-600 dark:text-neutral-400`}>
            <span>🎯</span>
            <span>Brand voice customization</span>
          </div>
          <div className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-2 text-sm text-neutral-600 dark:text-neutral-400`}>
            <span>💼</span>
            <span>Industry-specific knowledge base</span>
          </div>
          <div className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-2 text-sm text-neutral-600 dark:text-neutral-400`}>
            <span>📊</span>
            <span>Custom lead scoring rules</span>
          </div>
        </div>
      ),
    },
    {
      title: t('process.step3.title'),
      content: (
        <div className="space-y-4">
          <p className={`text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal ${isRTL ? 'text-right' : 'text-left'}`}>
            {t('process.step3.description')}
          </p>
          <div className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-2 text-sm text-neutral-600 dark:text-neutral-400`}>
            <span>🔌</span>
            <span>API-based integrations</span>
          </div>
          <div className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-2 text-sm text-neutral-600 dark:text-neutral-400`}>
            <span>📱</span>
            <span>Bi-directional data sync</span>
          </div>
          <div className={`mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg ${isRTL ? 'text-right' : 'text-left'}`}>
            <p className="text-sm text-blue-600 dark:text-blue-400">
              We integrate with Salesforce, HubSpot, Zendesk, Microsoft Dynamics, Slack, Teams, and many more platforms through our open API.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: t('process.step4.title'),
      content: (
        <div className="space-y-4">
          <p className={`text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal ${isRTL ? 'text-right' : 'text-left'}`}>
            {t('process.step4.description')}
          </p>
          <div className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-2 text-sm text-neutral-600 dark:text-neutral-400`}>
            <span>🤝</span>
            <span>Contextual handoff to sales team</span>
          </div>
          <div className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-2 text-sm text-neutral-600 dark:text-neutral-400`}>
            <span>📈</span>
            <span>Performance analytics dashboard</span>
          </div>
          <div className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-2 text-sm text-neutral-600 dark:text-neutral-400`}>
            <span>🔄</span>
            <span>Monthly optimization reviews</span>
          </div>
          <div className={`mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg ${isRTL ? 'text-right' : 'text-left'}`}>
            <p className="text-sm text-green-600 dark:text-green-400">
              Clients typically see a 35% increase in qualified leads and a 60% reduction in response times within the first 30 days of implementation.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="relative min-h-[200vh] overflow-hidden bg-black" id="process">
      <GridBackground opacity={0.3} strokeColor="rgb(255 255 255 / 0.1)" gridSize={32} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sticky top-0 pt-16 bg-black/80 backdrop-blur-sm z-10"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            {t('process.title')}
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            {t('process.subtitle')}
          </p>
        </motion.div>

        <div className="relative w-full">
          <Timeline data={processData} />
        </div>
      </div>
    </section>
  );
} 