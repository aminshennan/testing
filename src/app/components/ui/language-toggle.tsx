"use client"

import { useEffect } from "react"
import { Globe } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTranslation } from "@/lib/hooks/useTranslation"

interface LanguageToggleProps {
  className?: string
}

export function LanguageToggle({ className }: LanguageToggleProps) {
  const { language, changeLanguage } = useTranslation()

  const toggleLanguage = () => {
    changeLanguage(language === 'en' ? 'ar' : 'en')
  }

  return (
    <div
      className={cn(
        "flex w-16 h-8 p-1 rounded-full cursor-pointer transition-all duration-300",
        "bg-zinc-950 border border-zinc-800",
        className
      )}
      onClick={toggleLanguage}
      role="button"
      tabIndex={0}
    >
      <div className="flex justify-between items-center w-full">
        <div
          className={cn(
            "flex justify-center items-center w-6 h-6 rounded-full transition-transform duration-300",
            language === 'en' 
              ? "transform translate-x-0 bg-zinc-800" 
              : "transform translate-x-8 bg-zinc-800"
          )}
        >
          <Globe className="w-4 h-4 text-white" strokeWidth={1.5} />
        </div>
        <div
          className={cn(
            "flex justify-center items-center w-6 h-6 rounded-full transition-transform duration-300",
            language === 'en' 
              ? "bg-transparent" 
              : "transform -translate-x-8"
          )}
        >
          <span className="text-xs font-medium text-white">
            {language === 'en' ? "EN" : "AR"}
          </span>
        </div>
      </div>
    </div>
  )
} 