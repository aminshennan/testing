"use client"
import { Sparkles } from "./ui/sparkles"
import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { cn } from "../lib/utils"

const stats = [
  {
    title: "Response Time Impact",
    mainStat: "9x",
    description: "Businesses that respond to leads within 5 minutes are up to",
    highlight: "more likely to convert",
    icon: "⚡",
    color: "from-blue-500 to-cyan-400",
    source: "Harvard Business Review",
    link: "https://hbr.org/2011/03/the-short-life-of-online-sales-leads"
  },
  {
    title: "Lead Generation",
    mainStat: "67%",
    description: "Increase in qualified leads with",
    highlight: "24/7 AI response systems",
    icon: "🎯",
    color: "from-emerald-500 to-green-500",
    source: "Drift & Clearbit Research",
    link: "https://www.drift.com/blog/lead-response-survey/"
  },
  {
    title: "Customer Satisfaction",
    mainStat: "89%",
    description: "of consumers expect",
    highlight: "immediate responses to inquiries",
    icon: "⭐",
    color: "from-yellow-400 to-orange-500",
    source: "Salesforce Research",
    link: "https://www.salesforce.com/resources/research-reports/state-of-the-connected-customer/"
  }
]

function CountUp({ value, duration = 2000, prefix = "", suffix = "" }: { 
  value: string | number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    let start = 0
    
    if (!isInView) return
    
    // Get value as number (extract digits)
    let numericValue = String(value).replace(/[^0-9]/g, '')
    const finalValue = parseInt(numericValue || '0', 10)
    
    if (finalValue === 0) return
    
    // Set duration based on value size
    const stepTime = Math.abs(Math.floor(duration / finalValue))
    
    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start >= finalValue) {
        clearInterval(timer)
      }
    }, stepTime)
    
    return () => clearInterval(timer)
  }, [value, duration, isInView])
  
  return <span ref={ref}>{isInView ? `${prefix}${count}${suffix}` : `${prefix}0${suffix}`}</span>
}

export function StatisticalHighlights() {
  return (
    <section className="relative py-24 overflow-hidden" id="stats">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm font-medium mb-4">
            PROVEN RESULTS
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            The Numbers Speak for Themselves
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Research-backed statistics from industry leaders demonstrate why AI-powered response systems are transforming business communication
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl transition-all duration-300 group-hover:from-white/10 group-hover:to-white/5" />
              <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full flex flex-col">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-white/10 to-white/5 mb-6 mx-auto">
                  <span className="text-3xl">{stat.icon}</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-center">{stat.title}</h3>
                
                <div className="text-center flex-grow">
                  <span className={cn(
                    "text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r",
                    stat.color
                  )}>
                    {stat.mainStat.includes('%') ? (
                      <>
                        <CountUp value={stat.mainStat.replace('%', '')} suffix="%" />
                      </>
                    ) : (
                      stat.mainStat
                    )}
                  </span>
                  
                  <p className="mt-4 text-neutral-300">
                    {stat.description}{" "}
                    <span className="font-semibold text-white">
                      {stat.highlight}
                    </span>
                  </p>
                  
                  <a 
                    href={stat.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center justify-center text-xs text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Source: {stat.source} 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  
                  {index === 0 && (
                    <p className="mt-4 text-sm text-neutral-400">
                      Our AI responds instantly, maximizing your conversion potential
                    </p>
                  )}
                  
                  {index === 1 && (
                    <p className="mt-4 text-sm text-neutral-400">
                      Automatically qualify and nurture leads even outside business hours
                    </p>
                  )}
                  
                  {index === 2 && (
                    <p className="mt-4 text-sm text-neutral-400">
                      Meet modern consumer expectations with immediate, 24/7 assistance
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="relative -mt-20 h-96 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]">
        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#8350e8,transparent_70%)] before:opacity-40" />
        <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t border-white/20 bg-zinc-900" />
        <Sparkles
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </div>
    </section>
  )
} 