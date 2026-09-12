"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Palette,
  Sparkles,
  Check,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const themeVariables = [
  { name: "primaryColor", label: "Primary", description: "Main background" },
  {
    name: "secondaryColor",
    label: "Secondary",
    description: "Supporting surfaces",
  },
  { name: "accentColor", label: "Accent", description: "Actions & emphasis" },
  { name: "text", label: "Text", description: "Primary content" },
  { name: "textMuted", label: "Muted", description: "Secondary content" },
  {
    name: "textOnAccent",
    label: "Text on Accent",
    description: "Content on accent",
  },
];

const cardVariants = [
  { title: "Default Variant", image: "/images/cards/default-card.jpg" },
  { title: "Vertical Variant", image: "/images/cards/vertical-card.jpg" },
  { title: "Vintage Variant", image: "/images/cards/vintage-card.jpg" },
  { title: "Glass Variant", image: "/images/cards/glass-card.jpg" },
];

const standards = [
  "Borders",
  "Radius",
  "Shadows",
  "Spacing",
  "Typography",
  "States",
];
const motionItems = ["Hover", "Image Scale", "Elevation", "Scroll Reveal"];

export default function DesignSystem() {
  const [mobileIndex, setMobileIndex] = useState(0);
  const [desktopIndex, setDesktopIndex] = useState(0);

  // کنترل اسلایدر موبایل (۱ کارت در هر اسلاید)
  const nextMobile = () => {
    setMobileIndex((prev) => (prev + 1) % cardVariants.length);
  };
  const prevMobile = () => {
    setMobileIndex(
      (prev) => (prev - 1 + cardVariants.length) % cardVariants.length,
    );
  };

  // کنترل اسلایدر دسکتاپ (۲ کارت در هر اسلاید -> کلاً ۲ اسلاید)
  const totalDesktopPages = Math.ceil(cardVariants.length / 2);
  const nextDesktop = () => {
    setDesktopIndex((prev) => (prev + 1) % totalDesktopPages);
  };
  const prevDesktop = () => {
    setDesktopIndex(
      (prev) => (prev - 1 + totalDesktopPages) % totalDesktopPages,
    );
  };

  // محاسبه ۲ کارت فعال برای دسکتاپ
  const currentDesktopCards = cardVariants.slice(
    desktopIndex * 2,
    desktopIndex * 2 + 2,
  );

  return (
    <section
      id="design-system"
      className="relative overflow-hidden bg-[var(--bg)] py-24 md:py-32"
    >
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
              08 / Design System
            </span>              
          </div>

          <h2 className="text-4xl font-medium tracking-[-0.045em] sm:text-5xl lg:text-[68px] lg:leading-[0.98]">
            Flexible by design.
            <br />
            Consistent by system.
          </h2>

          <p className="mt-7 max-w-[680px] text-base leading-7 text-[var(--muted)] sm:text-lg">
            A reusable visual system gives Menuly flexible theming and multiple
            product presentations while keeping the interface consistent across
            the project.
          </p>
        </motion.div>

        {/* COLOR SYSTEM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="mb-6 flex items-center gap-3">
            <Palette
              size={17}
              strokeWidth={1.5}
              className="text-[var(--muted)]"
            />
            <span className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              Color System
            </span>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
              <div className="mb-5">
                <p className="text-sm font-medium text-[var(--white)]">
                  60 / 30 / 10
                </p>
                <p className="mt-1 text-xs text-[var(--muted)]">
                  The visual hierarchy used by the theme system.
                </p>
              </div>

              <div className="flex h-28 overflow-hidden rounded-xl border border-[var(--border)]">
                <div
                  className="flex-[6] p-4"
                  style={{ background: "var(--surface)" }}
                >
                  <span className="text-xs text-[var(--muted)]">60%</span>
                </div>
                <div className="flex-[3] border-l border-[var(--border)] bg-[var(--white)] p-4">
                  <span className="text-xs text-[var(--bg)]">30%</span>
                </div>
                <div className="flex-[1] border-l border-[var(--border)] bg-[var(--accent)] p-4">
                  <span className="text-xs text-[var(--bg)]">10%</span>
                </div>
              </div>

              <p className="mt-4 text-xs leading-6 text-[var(--muted)]">
                The ratio defines hierarchy rather than locking the interface to
                a fixed color palette.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
              <div className="mb-5">
                <p className="text-sm font-medium text-[var(--white)]">
                  Configurable theme variables
                </p>
                <p className="mt-1 text-xs text-[var(--muted)]">
                  These values can be defined for each menu theme.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3">
                {themeVariables.map((variable) => (
                  <div key={variable.name} className="min-w-0">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="h-3 w-3 shrink-0 rounded-full border border-[var(--border)] bg-[var(--white)]" />
                      <span className="truncate text-xs text-[var(--white)]">
                        {variable.label}
                      </span>
                    </div>
                    <code className="block truncate text-[10px] text-[var(--muted)]">
                      {variable.name}
                    </code>
                    <p className="mt-1 text-[10px] text-[var(--muted)]">
                      {variable.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* PRODUCT CARD SYSTEM (SLIDER SECTION) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          {/* HEADER & NAVIGATION BUTTONS */}
          <div className="mb-6 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                Product Card System
              </p>
              <h3 className="mt-2 text-2xl font-medium text-[var(--white)] md:text-3xl">
                Four card styles.
              </h3>
            </div>

            {/* دکمه‌های اسلایدر دسکتاپ (md به بالا) */}
            <div className="hidden md:flex md:items-center md:gap-3">
              <button
                type="button"
                onClick={prevDesktop}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--white)] transition-all hover:border-[var(--white)] active:scale-95"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={nextDesktop}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--white)] transition-all hover:border-[var(--white)] active:scale-95"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* دکمه‌های اسلایدر موبایل (زیر md) */}
            <div className="flex items-center gap-3 md:hidden">
              <button
                type="button"
                onClick={prevMobile}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--white)] active:scale-90"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                onClick={nextMobile}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--white)] active:scale-90"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* =========================================
              ۱. اسلایدر موبایل (۱ کارت)
          ========================================= */}
          <div className="block md:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={mobileIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4"
              >
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-[var(--bg)]">
                  <img
                    src={cardVariants[mobileIndex].image}
                    alt={cardVariants[mobileIndex].title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="mt-4 flex items-center justify-between px-1">
                  <div>
                    <span className="text-[10px] uppercase text-[var(--muted)]">
                      Variant
                    </span>
                    <h4 className="text-sm font-medium text-[var(--white)]">
                      {cardVariants[mobileIndex].title}
                    </h4>
                  </div>

                  <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-mono text-[var(--muted)]">
                    0{mobileIndex + 1} / 0{cardVariants.length}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* =========================================
              ۲. اسلایدر دسکتاپ (۲ کارت در هر صفحه)
          ========================================= */}
          <div className="hidden md:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={desktopIndex}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 gap-6"
              >
                {currentDesktopCards.map((card, idx) => {
                  const actualIndex = desktopIndex * 2 + idx + 1;
                  return (
                    <div
                      key={card.title}
                      className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 transition-all duration-300 hover:border-[var(--white)]/40"
                    >
                      <div className="aspect-[16/10] overflow-hidden rounded-xl bg-[var(--bg)]">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      <div className="mt-4 flex items-center justify-between px-1">
                        <div>
                          <span className="text-[10px] uppercase text-[var(--muted)]">
                            Variant
                          </span>
                          <h4 className="text-sm font-medium text-[var(--white)]">
                            {card.title}
                          </h4>
                        </div>

                        <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-mono text-[var(--muted)]">
                          0{actualIndex}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* CONSISTENCY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <Check
                  size={17}
                  strokeWidth={1.5}
                  className="text-[var(--muted)]"
                />
                <span className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                  Consistency
                </span>
              </div>

              <h3 className="text-2xl font-medium text-[var(--white)]">
                Standardized across the project.
              </h3>

              <p className="mt-3 max-w-md text-sm leading-7 text-[var(--muted)]">
                Shared design rules keep the interface consistent instead of
                allowing every component to develop its own visual language.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {standards.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-5"
                >
                  <span className="text-xs text-[var(--white)]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* MOTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col gap-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:flex-row md:items-center md:justify-between md:p-7">
            <div className="flex items-start gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--border)]">
                <Sparkles
                  size={16}
                  strokeWidth={1.5}
                  className="text-[var(--muted)]"
                />
              </div>

              <div>
                <h3 className="text-sm font-medium text-[var(--white)]">
                  Motion & Interaction
                </h3>

                <p className="mt-1 max-w-xl text-xs leading-6 text-[var(--muted)]">
                  Subtle animation is used throughout the interface for
                  feedback, hierarchy and smoother interaction.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {motionItems.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--border)] px-3 py-1.5 text-[10px] text-[var(--muted)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
