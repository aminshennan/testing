"use client"


import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { useTranslation } from '../../lib/hooks/useTranslation';
import { SocialMediaOrbit } from "./SocialMediaOrbit"
import { Check } from "lucide-react"
import { GridBackground } from "./ui/grid-background";

export function LogosSection() {
  const { theme } = useTheme()
  const { t, isRTL } = useTranslation();

  // Common business problems the product solves
  const businessProblems = [
    {
      problem: t('logos.problem1.title'),
      solution: t('logos.solution1.title'),
      description: t('logos.problem1.description')
    },
    {
      problem: t('logos.problem2.title'),
      solution: t('logos.solution2.title'),
      description: t('logos.problem2.description')
    },
    {
      problem: t('logos.problem3.title'),
      solution: t('logos.solution3.title'),
      description: t('logos.problem3.description')
    }
  ]

  // List of supported social platforms with descriptions
  const supportedPlatforms = [
    {
      name: "WhatsApp",
      description: "Automate customer service and sales conversations directly in WhatsApp Business",
    },
    {
      name: "Instagram",
      description: "Respond to DMs, comments, and story mentions with intelligent AI",
    },
    {
      name: "Facebook",
      description: "Manage comments, messenger queries, and reviews automatically",
    },
    {
      name: "Telegram",
      description: "Provide instant responses to customer inquiries through Telegram",
    },
    {
      name: "Web Chat",
      description: "Embed intelligent chat widgets directly on your website",
    }
  ]

  return (
    <section className="py-24 overflow-hidden bg-black relative">
      <GridBackground opacity={0.3} strokeColor="rgb(255 255 255 / 0.1)" gridSize={30} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
            {t('logos.tagline')}
            <span className="block text-white mt-2">{t('logos.tagline2')}</span>
          </h2>
        </motion.div>

        {/* Problem-Solution Framework */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4 text-white">{t('logos.challenges.title')}</h3>
            <p className="text-neutral-300 max-w-2xl mx-auto">
              {t('logos.challenges.description')}
            </p>
          </div>
          
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${isRTL ? 'rtl-flip' : ''}`}>
            {businessProblems.map((item, i) => (
              <motion.div 
                key={item.problem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 * i }}
                className="bg-gradient-to-b from-neutral-900 to-neutral-950 rounded-xl overflow-hidden border border-neutral-800"
              >
                <div className="p-6">
                  <div className="mb-4 flex justify-between items-start">
                    <div className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm">
                      {t('logos.problem.label')}
                    </div>
                    <span className="text-2xl font-bold text-white">#{i+1}</span>
                  </div>
                  <h4 className={`text-xl font-semibold mb-2 text-white ${isRTL ? 'rtl-text-right' : ''}`}>{item.problem}</h4>
                  <p className={`text-neutral-400 mb-6 ${isRTL ? 'rtl-text-right' : ''}`}>{item.description}</p>
                  
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-800 to-transparent my-4"></div>
                  
                  <div className="mb-2 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm w-fit">
                    {t('logos.solution.label')}
                  </div>
                  <h4 className={`text-xl font-semibold text-white ${isRTL ? 'rtl-text-right' : ''}`}>{item.solution}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`mt-16 text-center text-gray-300 max-w-2xl mx-auto ${isRTL ? 'rtl-text-right' : ''}`}
        >
        </motion.div>

        {/* Social Media Orbit Section - Modified to be split into two columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 mb-16"
        >
          <h3 className="text-center text-2xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            {t('logos.social.title')}
          </h3>
          
          <div className={`flex flex-col lg:flex-row gap-8 items-center ${isRTL ? 'rtl-flip' : ''}`}>
            {/* Left Side - Platform List */}
            <motion.div 
              className="w-full lg:w-1/2 space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h4 className={`text-xl font-semibold mb-6 text-white ${isRTL ? 'rtl-text-right' : ''}`}>
                Supported Platforms and Integrations
              </h4>
              
              <div className="space-y-4">
                {supportedPlatforms.map((platform, index) => (
                  <motion.div 
                    key={platform.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.9 + (index * 0.1) }}
                    className={`flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm ${isRTL ? 'rtl-text-right' : ''}`}
                  >
                    <div className="mt-1 flex-shrink-0">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <h5 className="font-medium text-white">{platform.name}</h5>
                      <p className="text-sm text-gray-400">{platform.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <p className="text-sm text-gray-400 mt-6">
                Our AI seamlessly connects with all major messaging platforms, providing a unified solution for all your customer interactions.
              </p>
            </motion.div>
            
            {/* Right Side - Orbit Visual */}
            <motion.div 
              className="w-full lg:w-1/2 flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="w-full max-w-[500px]">
                <SocialMediaOrbit />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>


    </section>
  )
} 