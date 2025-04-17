"use client"

import { motion } from "framer-motion"
import { cn } from "../lib/utils"

export function BrandStory() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.8 }}
      className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16"
    >
      <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            We Don&apos;t Just Automate — We Converse
          </h2>
          
          <div className="space-y-6 text-lg text-neutral-300">
            <p>
              Born from a simple observation: customer service shouldn&apos;t feel robotic. 
              We&apos;re on a mission to bridge the gap between human connection and technological efficiency.
            </p>
            
            <p>
              Our journey began when we realized that while AI was getting smarter, 
              it was losing the human touch that makes conversations meaningful. 
              That&apos;s why we built Mowazfk — to create AI agents that don&apos;t just respond, 
              but truly understand and engage.
            </p>
            
            <p className="font-medium text-blue-400">
              Because at the end of the day, it&apos;s not about replacing human interaction — 
              it&apos;s about enhancing it with technology that feels natural and intuitive.
            </p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            {[
              "🤝 Human-Like Understanding",
              "💡 Intelligent Adaptation",
              "✨ Natural Conversations",
              "🚀 Seamless Integration"
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1 }}
                className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10"
              >
                <span>{feature}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
} 