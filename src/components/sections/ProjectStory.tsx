"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

const storySteps = [
  {
    number: "01",
    label: "THE BEGINNING",
    title: "I was building the same thing over and over.",
    text: "In my previous job, we built a separate e-commerce website for every client. At first, it worked. But as the number of projects grew, every project had its own structure, its own technology, and its own maintenance problems.",
  },
  {
    number: "02",
    label: "THE PROBLEM",
    title: "Every change meant going back to the beginning.",
    text: "Making changes and maintaining those projects became increasingly difficult. I didn't want every new client to mean another completely separate project that I had to build and maintain from scratch.",
  },
  {
    number: "03",
    label: "THE IDEA",
    title: "I wanted to earn from something I had already built.",
    text: "The goal was simple: build a product once, keep improving it, and let multiple businesses use the same system instead of creating another isolated project every time.",
  },
  {
    number: "04",
    label: "MENULY",
    title: "That idea became Menuly.",
    text: "I started building Menuly as a multi-layer product that could serve multiple businesses. But building the product was only one part of the problem.",
  },
  {
    number: "05",
    label: "A NEW PROBLEM",
    title: "I couldn't be the person doing everything.",
    text: "I built the Control Center to manage the system, but I quickly realized that I couldn't handle sales and create every workspace myself.",
  },
  {
    number: "06",
    label: "SCALING",
    title: "So I built the Seller Panel.",
    text: "I started working with sellers and influencers, giving them a defined commission for every menu they sold. The Seller Panel allowed them to create workspaces and manage their customers themselves.",
  },
  {
    number: "07",
    label: "THE PRODUCT",
    title: "Every business gets its own Workspace.",
    text: "Cafe owners have their own independent workspace where they can manage products, categories, appearance, and menu settings without depending on me for every change.",
  },
  {
    number: "08",
    label: "THE RESULT",
    title: "A product instead of another client project.",
    text: "What started as my frustration with rebuilding separate projects became a complete ecosystem connecting the business owner, seller, platform management, and the final customer experience.",
  },
];

function StepIndicator({
  stepNumber,
  activeIndex,
}: {
  stepNumber: string;
  activeIndex: MotionValue<number>;
}) {
  const opacity = useTransform(activeIndex, (value) =>
    Math.abs(value - Number(stepNumber) + 1) < 0.6 ? 1 : 0.25,
  );

  return (
    <motion.div
      className="h-px"
      style={{
        width: 28,
        opacity,
        background: "var(--accent)",
      }}
    />
  );
}

export default function ProjectStory() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const activeIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, storySteps.length - 1],
  );

  return (
    <section
      id="story"
      ref={ref}
      className="bg-[var(--bg)] text-[var(--white)]"
    >
      <div className="         w-[85%]
         mx-auto">
        <div className="mb-10">
          <span className="font-mono text-md uppercase tracking-[0.2em] text-[var(--accent)]">
            03 / The Story
          </span>
        </div>


        {/* Sticky Story */}
        <div className="relative grid items-start  lg:grid-cols-2">
          {/* LEFT — sticky */}
          <div className="hidden h-full lg:block">
            <div className="sticky top-0 flex h-screen flex-col justify-center pr-20">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
                My story
              </span>

<h3 className="mt-6 max-w-md text-4xl font-medium leading-[1.05] tracking-[-0.04em]">
  From custom client work
  <br />
  to a scalable SaaS platform.
</h3>

              <div className="mt-12 flex gap-2">
                {storySteps.map((step) => (
                  <StepIndicator
                    key={step.number}
                    stepNumber={step.number}
                    activeIndex={activeIndex}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — scroll */}
          <div>
            {storySteps.map((step) => (
              <div
                key={step.number}
                className="flex min-h-[80vh] items-center border-b border-[var(--border)] py-24 lg:min-h-screen"
              >
                <article className="max-w-xl">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs tracking-[0.18em] text-[var(--accent)]">
                      {step.number}
                    </span>

                    <span className="h-px w-8 bg-[var(--border)]" />

                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
                      {step.label}
                    </span>
                  </div>

                  <h3 className="mt-8 text-4xl font-medium leading-[1.05] tracking-[-0.04em] sm:text-5xl">
                    {step.title}
                  </h3>

                  <p className="mt-8 text-lg font-light leading-[1.8] text-[var(--text)] sm:text-xl">
                    {step.text}
                  </p>
                </article>
              </div>
            ))}
          </div>
        </div>

       
      </div>
    </section>
  );
}
