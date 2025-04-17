"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GridBackgroundProps {
  className?: string;
  strokeColor?: string;
  opacity?: number;
  gridSize?: number;
  animate?: boolean;
}

export function GridBackground({
  className,
  strokeColor = "rgb(255 255 255 / 0.04)",
  opacity = 0.2,
  gridSize = 30,
  animate = true,
}: GridBackgroundProps) {
  // Create SVG for the grid with dynamic sizing and color
  const svgGrid = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='${gridSize}' height='${gridSize}' fill='none' stroke='${strokeColor.replace(
    /#/g,
    "%23"
  )}'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`;

  return animate ? (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity }}
      transition={{ duration: 1 }}
      className={cn("absolute inset-0 z-0 pointer-events-none", className)}
      style={{
        backgroundImage: svgGrid,
        backgroundSize: `${gridSize}px ${gridSize}px`,
      }}
    />
  ) : (
    <div
      className={cn("absolute inset-0 z-0 pointer-events-none", className)}
      style={{
        backgroundImage: svgGrid,
        backgroundSize: `${gridSize}px ${gridSize}px`,
        opacity,
      }}
    />
  );
} 