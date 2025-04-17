"use client"

import { useState, useEffect } from "react"

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    // Add event listener only in client-side environments
    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", updateMousePosition)
    }

    // Cleanup function to remove event listener
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("mousemove", updateMousePosition)
      }
    }
  }, [])

  return mousePosition
} 