"use client";

import { motion } from "framer-motion";
import { GlowingEffectDemo } from "./ui/glowing-effect-demo";

export function BenefitsSection() {
    return (
        <section className="py-20 bg-black" id="benefits">
            <div className="container mx-auto px-4">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-4">
                        BUSINESS OUTCOMES
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                        Real Results, Not Just Features
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        See how Mowazfk delivers measurable business outcomes that impact your bottom line, not just fancy technology
                    </p>
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <GlowingEffectDemo />
                </motion.div>
            </div>
        </section>
    );
} 