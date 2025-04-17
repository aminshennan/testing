"use client"

import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

interface Word {
  text: string
  className?: string
}

interface TypewriterEffectProps {
  words: Word[]
  className?: string
  cursorClassName?: string
}

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: TypewriterEffectProps) => {
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    }
  })

  const renderWords = () => {
    return (
      <div>
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <span
                  key={`char-${index}`}
                  className={cn(
                    `opacity-0 inline-block`,
                    word.className
                  )}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: "fadeIn 0.5s forwards",
                  }}
                >
                  {char}
                </span>
              ))}
              &nbsp;
            </div>
          )
        })}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={cn(
            "inline-block rounded-sm w-[4px] h-4 bg-blue-500",
            cursorClassName
          )}
        ></motion.span>
      </div>
    )
  }

  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
        }}
        className="text-2xl sm:text-3xl font-bold"
      >
        {renderWords()}
      </motion.div>
    </div>
  )
} 