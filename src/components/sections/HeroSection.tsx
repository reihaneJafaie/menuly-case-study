"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, ExternalLink } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0D0E0F] text-[#F5F3EE]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.02] blur-[120px]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col px-6 py-8 sm:px-10 lg:px-16">
        {/* Top */}
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/35">
            Product Case Study
          </span>

          <span className="font-mono text-[10px] text-white/25">
            2026
          </span>
        </div>

        {/* Main */}
        <div className="flex flex-1 flex-col justify-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-[1100px]"
          >
            <p className="mb-8 text-sm text-white/35">
              A digital menu platform for cafés and restaurants.
            </p>

            <h1 className="text-[clamp(5rem,15vw,13rem)] font-medium leading-[0.75] tracking-[-0.075em]">
              MENULY
            </h1>

            <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <p className="max-w-2xl text-2xl font-light leading-[1.35] tracking-[-0.03em] text-white/65 sm:text-3xl">
                From a digital menu
                <br />
                to a complete product ecosystem.
              </p>

              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-400">
                Interface → Production
              </div>
            </div>
          </motion.div>

          {/* Meta */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-20 grid border-y border-white/10 sm:grid-cols-4"
          >
            <div className="border-b border-white/10 py-5 sm:border-b-0 sm:border-r sm:pr-6">
              <span className="block text-[9px] uppercase tracking-[0.2em] text-white/25">
                Role
              </span>
              <span className="mt-2 block text-xs text-white/65">
                Frontend Developer
              </span>
            </div>

            <div className="border-b border-white/10 py-5 sm:border-b-0 sm:border-r sm:px-6">
              <span className="block text-[9px] uppercase tracking-[0.2em] text-white/25">
                Type
              </span>
              <span className="mt-2 block text-xs text-white/65">
                SaaS Product
              </span>
            </div>

            <div className="border-b border-white/10 py-5 sm:border-b-0 sm:border-r sm:px-6">
              <span className="block text-[9px] uppercase tracking-[0.2em] text-white/25">
                Stack
              </span>
              <span className="mt-2 block text-xs text-white/65">
                React · TypeScript · Vue 3
              </span>
            </div>

            <div className="py-5 sm:pl-6">
              <span className="block text-[9px] uppercase tracking-[0.2em] text-white/25">
                Status
              </span>

              <span className="mt-2 flex items-center gap-2 text-xs text-white/65">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                Production
              </span>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between border-t border-white/10 pt-5">
          <a
            href="#story"
            className="group inline-flex items-center gap-2 text-xs text-white/45 transition-colors hover:text-white"
          >
            Explore case study
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          <a
            href="#snapshot"
            className="group flex items-center gap-2 text-white/30 transition-colors hover:text-white"
          >
            <span className="hidden text-[9px] uppercase tracking-[0.2em] sm:block">
              Scroll
            </span>

            <ArrowDown
              size={15}
              className="transition-transform duration-300 group-hover:translate-y-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}