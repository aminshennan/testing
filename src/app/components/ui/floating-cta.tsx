"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Show the floating CTA after scrolling past the hero section (approximately 100vh)
      const scrollPosition = window.scrollY;
      const triggerPosition = window.innerHeight;
      
      if (scrollPosition > triggerPosition && !isVisible) {
        setIsVisible(true);
      } else if (scrollPosition <= triggerPosition && isVisible) {
        setIsVisible(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <a
            href="#contact"
            className="flex items-center px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all hover:scale-105"
          >
            <span>Book Demo</span>
            <ChevronRight className="w-4 h-4 ml-1" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 