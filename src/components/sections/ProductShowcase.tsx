"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownRight, Monitor, Smartphone } from "lucide-react";

export default function ResponsiveEngineering() {
  return (
    <section
      id="responsive"
      className="relative overflow-hidden bg-[var(--bg)] text-[var(--white)]"
    >
      <div className="mx-auto mt-25 w-[85%]">
        {/* ================================================================ */}
        {/* HEADER                                                           */}
        {/* ================================================================ */}

        <div className="border-b border-[var(--border)] pb-12">
          <div className="mb-8">
            <span className="font-mono text-md uppercase tracking-[0.2em] text-[var(--accent)]">
              10 / Responsive Engineering
            </span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-end">
            <div>
              <h2 className="max-w-4xl text-4xl font-light leading-[1.04] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
                One website.
                <br />
                <span className="text-[var(--muted)]">
                  Every screen.
                </span>
              </h2>
            </div>

            <div>
              <p className="max-w-sm text-sm font-light leading-7 text-[var(--muted)] sm:text-base">
                The public Menuly website was designed and engineered to
                maintain its visual hierarchy, usability and interaction
                quality across desktop and mobile.
              </p>
            </div>
          </div>
        </div>

        {/* ================================================================ */}
        {/* DEVICE SHOWCASE                                                  */}
        {/* ================================================================ */}

        <div className="relative border-b border-[var(--border)]">
          <div className="relative min-h-[520px] overflow-hidden sm:min-h-[620px] lg:min-h-[720px]">
            {/* Desktop label */}

            <div className="absolute left-0 top-8 z-30 flex items-center gap-3">
              <Monitor
                size={15}
                strokeWidth={1.3}
                className="text-[var(--accent)]"
              />

              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--muted)]">
                Desktop / Website
              </span>
            </div>

            {/* Mobile label */}

            <div className="absolute bottom-8 right-0 z-30 flex items-center gap-3">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--muted)]">
                Mobile / Website
              </span>

              <Smartphone
                size={15}
                strokeWidth={1.3}
                className="text-[var(--accent)]"
              />
            </div>

            {/* ============================================================ */}
            {/* LAPTOP                                                         */}
            {/* ============================================================ */}

            <motion.div
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-1/2 top-[52%] w-[82%] -translate-x-1/2 -translate-y-1/2 sm:w-[76%] lg:w-[68%]"
            >
              <div className="relative">
                {/* Website screenshot */}

                <div className="absolute left-[11.5%] top-[7.5%] z-0 h-[67%] w-[77%] overflow-hidden">
                  <Image
                    src="/case-study/website-desktop.webp"
                    alt="Menuly public website desktop"
                    fill
                    priority
                    sizes="70vw"
                    className="object-cover object-top"
                  />
                </div>

                {/* Transparent laptop mockup */}

                <Image
                  src="/mockups/laptop.png"
                  alt="Laptop showing the Menuly website"
                  width={1800}
                  height={1100}
                  priority
                  className="relative z-10 h-auto w-full"
                />
              </div>
            </motion.div>

            {/* ============================================================ */}
            {/* PHONE                                                          */}
            {/* ============================================================ */}

            <motion.div
              initial={{
                opacity: 0,
                x: 70,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                delay: 0.15,
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute bottom-[-3%] right-[5%] z-20 w-[145px] sm:right-[10%] sm:w-[175px] lg:right-[13%] lg:w-[205px]"
            >
              <div className="relative">
                {/* Website screenshot */}

                <div className="absolute left-[8%] top-[3.5%] z-0 h-[93%] w-[84%] overflow-hidden rounded-[7%]">
                  <Image
                    src="/case-study/website-mobile.webp"
                    alt="Menuly public website mobile"
                    fill
                    sizes="205px"
                    className="object-cover object-top"
                  />
                </div>

                {/* Transparent phone mockup */}

                <Image
                  src="/mockups/phone.png"
                  alt="Phone showing the Menuly website"
                  width={700}
                  height={1400}
                  className="relative z-10 h-auto w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* ================================================================ */}
        {/* RESPONSIVE BREAKDOWN                                             */}
        {/* ================================================================ */}

        <div className="grid border-b border-[var(--border)] lg:grid-cols-3">
          <ResponsiveItem
            number="01"
            title="Desktop"
            description="A spacious layout built around larger content areas, stronger visual hierarchy and wider navigation."
          />

          <ResponsiveItem
            number="02"
            title="Mobile"
            description="The same experience is restructured for smaller screens without losing the product's visual identity."
          />

          <ResponsiveItem
            number="03"
            title="Adaptive System"
            description="Spacing, typography, navigation and content density adapt continuously between breakpoints."
          />
        </div>

        {/* ================================================================ */}
        {/* BOTTOM STATEMENT                                                 */}
        {/* ================================================================ */}

        <div className="border-b border-[var(--border)] py-16 sm:py-20 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[200px_1fr] lg:gap-16">
            <div className="flex items-start gap-3">
              <ArrowDownRight
                size={16}
                strokeWidth={1.3}
                className="mt-0.5 text-[var(--accent)]"
              />

              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                Responsive Strategy
              </span>
            </div>

            <div>
              <p className="max-w-5xl text-xl font-light leading-relaxed text-[var(--text)] sm:text-2xl lg:text-3xl">
                Responsive design was treated as part of the product
                architecture —
                <strong className="font-normal text-[var(--white)]">
                  {" "}
                  not as a final adaptation layer.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ======================================================================== */
/* RESPONSIVE ITEM                                                          */
/* ======================================================================== */

function ResponsiveItem({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="border-b border-[var(--border)] p-6 last:border-b-0 sm:p-8 lg:border-b-0 lg:border-r lg:p-10 lg:last:border-r-0">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[9px] tracking-[0.2em] text-[var(--accent)]">
          [{number}]
        </span>

        <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-[var(--muted)]">
          Responsive
        </span>
      </div>

      <h3 className="mt-10 text-2xl font-light tracking-[-0.03em] text-[var(--white)] sm:text-3xl">
        {title}
      </h3>

      <p className="mt-4 max-w-sm text-sm font-light leading-7 text-[var(--muted)]">
        {description}
      </p>
    </div>
  );
}