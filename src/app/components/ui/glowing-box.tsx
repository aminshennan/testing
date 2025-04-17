"use client";

import { cn } from "../../lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { GlowingEffect } from "./glowing-effect";

interface GlowingBoxProps {
  children: React.ReactNode;
  variant?: "default" | "white";
  glow?: boolean;
  disabled?: boolean;
  blur?: number;
  spread?: number;
  borderWidth?: number;
  movementDuration?: number;
  inactiveZone?: number;
  proximity?: number;
  className?: string;
}

const GlowingBox = ({
  children,
  className,
  variant = "default",
  glow = false,
  disabled = false,
  blur = 0,
  spread = 20,
  borderWidth = 1,
  movementDuration = 2,
  inactiveZone = 0.7,
  proximity = 0,
}: GlowingBoxProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative isolate rounded-xl border bg-gradient-to-b from-white/[0.07] to-transparent p-4 backdrop-blur-sm",
        variant === "white" && "border-white/20",
        className
      )}
    >
      <GlowingEffect
        variant={variant}
        glow={glow}
        disabled={disabled}
        blur={blur}
        spread={spread}
        borderWidth={borderWidth}
        movementDuration={movementDuration}
        inactiveZone={inactiveZone}
        proximity={proximity}
      />
      {children}
    </motion.div>
  );
};

export { GlowingBox };