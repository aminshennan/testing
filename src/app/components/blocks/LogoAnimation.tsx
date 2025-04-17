"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function LogoAnimation() {
  return (
    <div className="relative w-full h-full">
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <div className="relative">

          <motion.div
            animate={{
              rotateY: [0, 10, 0, -10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <Image 
              src="/logo-moveing.svg" 
              alt="Logo" 
              width={200} 
              height={200} 
              className="object-contain " 
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}