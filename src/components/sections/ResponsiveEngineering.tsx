"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone } from "lucide-react";

export default function ResponsiveEngineering() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg)] py-24 md:py-32">
      <div className="mx-auto w-[85%]">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <div className="mb-8">
            <span className="font-mono text-md uppercase tracking-[0.2em] text-[var(--accent)]">
              10 / Responsive Engineering
            </span>
          </div>
          <h2 className="text-4xl font-medium tracking-[-0.045em] sm:text-5xl lg:text-[68px] lg:leading-[0.98]">
            Seamless across devices.
          </h2>

          <p className="mt-7 max-w-[680px] text-base leading-7 text-[var(--muted)] sm:text-lg">
            Designed and engineered to deliver an uncompromised user experience, whether accessed from a desktop workstation or a mobile device.
          </p>
        </motion.div>

        {/* MOCKUPS SHOWCASE CONTAINER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-12 overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-[var(--white)]/5 blur-3xl pointer-events-none" />

          {/* Device Badges / Info Header */}
          <div className="mb-8 flex flex-wrap items-center gap-6 border-b border-[var(--border)] pb-6">
            <div className="flex items-center gap-2">
              <Monitor size={18} className="text-[var(--white)]" />
              <span className="text-xs font-medium text-[var(--white)]">Desktop Web</span>
            </div>
            <span className="h-3 w-px bg-[var(--border)] hidden sm:block" />
            <div className="flex items-center gap-2">
              <Smartphone size={18} className="text-[var(--white)]" />
              <span className="text-xs font-medium text-[var(--white)]">Mobile Web</span>
            </div>
          </div>

          {/* Visual Presentation Area */}
          <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 min-h-[350px] md:min-h-[450px] pt-4">
            
            {/* 1. DESKTOP MOCKUP CONTAINER */}
            <div className="relative w-full md:w-[70%] max-w-[700px] flex justify-center">
              <img
                src="/images/mockups/desktop-preview.png" // آدرس عکس لپ‌تاپ یا دسکتاپ بدون بک‌گراند
                alt="Desktop Version Preview"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>

            {/* 2. MOBILE MOCKUP CONTAINER (Positioned slightly overlapping on desktop) */}
            <div className="relative w-1/2 md:w-[25%] max-w-[220px] md:-ml-12 md:translate-y-8 flex justify-center">
              <img
                src="/images/mockups/mobile-preview.png" // آدرس عکس گوشی بدون بک‌گراند
                alt="Mobile Version Preview"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}