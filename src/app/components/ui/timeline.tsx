"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "../../../lib/hooks/useTranslation";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const { isRTL } = useTranslation();

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 45%", "end 55%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-black font-sans md:px-10"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className={`sticky flex flex-col ${isRTL ? 'md:flex-row-reverse' : 'md:flex-row'} z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full`}>
              <motion.div 
                className={`h-10 absolute ${isRTL ? 'right-3 md:right-3' : 'left-3 md:left-3'} w-10 rounded-full bg-black flex items-center justify-center`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 20, delay: index * 0.2 }}
              >
                <motion.div 
                  className="h-4 w-4 rounded-full bg-neutral-800 border border-neutral-700 p-2"
                  whileInView={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                />
              </motion.div>
              <motion.h3 
                className={`hidden md:block text-xl ${isRTL ? 'md:pr-20 text-right' : 'md:pl-20 text-left'} md:text-3xl font-bold text-neutral-400`}
                initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
              >
                {item.title}
              </motion.h3>
            </div>

            <div className={`relative ${isRTL ? 'pr-20 pl-4 md:pr-4' : 'pl-20 pr-4 md:pl-4'} w-full`}>
              <motion.h3 
                className={`md:hidden block text-2xl mb-4 ${isRTL ? 'text-right' : 'text-left'} font-bold text-neutral-400`}
                initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {item.title}
              </motion.h3>
              <div className={isRTL ? 'text-right' : 'text-left'}>
                {item.content}
              </div>
            </div>
          </motion.div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className={`absolute ${isRTL ? 'md:right-8 right-8' : 'md:left-8 left-8'} top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-neutral-700 to-transparent`}
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent"
          />
        </div>
      </div>
    </div>
  );
}; 