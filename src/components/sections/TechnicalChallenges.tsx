"use client";

import { motion } from "framer-motion";
import {
  ArrowDownRight,
  Boxes,
  CreditCard,
  Database,
  Layers3,
  Server,
  Code2,
} from "lucide-react";
import {

  GraduationCap,
} from "lucide-react";

const challenges = [
  {
    number: "01",
    icon: Layers3,
    title: "Building the system from zero",
    problem:
      "At the beginning, Menuly was just an idea. I didn't know how different parts like Seller, Workspace, Admin and Control Center should work together.",
    solution:
      "Instead of designing everything upfront, I improved the system step by step using an Agile approach. Every new requirement helped me refine the architecture.",
  },

  {
    number: "02",
    icon: CreditCard,
    title: "Understanding subscription logic",
    problem:
      "This was my first time building a product with subscriptions. I wasn't sure what should happen in the frontend and what should stay in the backend.",
    solution:
      "I moved the important business rules to the backend and made the frontend responsible only for showing the right experience.",
  },

  {
    number: "03",
    icon: Database,
    title: "Learning backend because I needed it",
    problem:
      "I started as a frontend developer, but building my own product meant I couldn't wait for another developer to build the backend.",
    solution:
      "I learned NestJS, Prisma and database concepts while building the real product, and used AI tools as a development assistant when needed.",
  },

  {
    number: "04",
    icon: Code2,
    title: "Keeping the frontend clean while growing",
    problem:
      "The project was growing fast. I needed a structure that was easy to change without creating messy code.",
    solution:
      "I focused on reusable components, clear folder structure and TypeScript to keep development fast and maintainable.",
  },

  {
    number: "05",
    icon: Server,
    title: "Deploying a real product",
    problem:
      "Before Menuly, my server experience was mostly academic. Running a real product in production was completely different.",
    solution:
      "I learned how to work with Linux, Ubuntu, Nginx, PM2 and SSL by deploying and maintaining the actual product.",
  },

  {
    number: "06",
    icon: GraduationCap,
    title: "Turning university knowledge into practice",
    problem:
      "Many concepts from university felt theoretical until I faced real product problems.",
    solution:
      "Software engineering, databases, operating systems and algorithms became practical tools for making better technical decisions.",
  },
];

export default function TechnicalChallenges() {
  return (
    <section
      id="technical-challenges"
      className="relative overflow-hidden bg-[var(--bg)] text-[var(--white)]"
    >
      <div className="mx-auto mt-25 w-[85%]">

        {/* HEADER */}
        <div className="border-b border-[var(--border)] pb-12">

          <span className="font-mono text-md uppercase tracking-[0.2em] text-[var(--accent)]">
            10 / Technical Challenges
          </span>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px] lg:items-end">

            <h2 className="max-w-4xl text-4xl font-light leading-[1.04] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
              Problems.
              <br />
              <span className="text-[var(--muted)]">
                Decisions.
              </span>
              <br />
              Engineering.
            </h2>

<p className="max-w-sm text-sm font-light leading-7 text-[var(--muted)] sm:text-base">
  Building Menuly came with unexpected challenges.
  Here are the problems I faced and how I worked through them.
</p>

          </div>

        </div>


        {/* LIST */}

        <div className="border-b border-[var(--border)]">

          {challenges.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                className="
                  grid gap-8
                  border-b border-[var(--border)]
                  py-12
                  lg:grid-cols-[120px_1fr_320px]
                  lg:py-16
                  last:border-none
                "
              >

                {/* NUMBER */}

                <div className="flex items-center gap-3">

                  <span className="font-mono text-xs text-[var(--accent)]">
                    [{item.number}]
                  </span>

                  <Icon
                    size={16}
                    strokeWidth={1.3}
                    className="text-[var(--accent)]"
                  />

                </div>


                {/* CHALLENGE */}

                <div>

                  <h3 className="text-3xl font-light tracking-[-0.03em] sm:text-4xl">
                    {item.title}
                  </h3>

                  <p className="mt-6 max-w-2xl text-sm font-light leading-8 text-[var(--muted)] sm:text-base">
                    {item.problem}
                  </p>

                </div>


                {/* SOLUTION */}

                <div className="border-l border-[var(--border)] pl-6">

                  <div className="flex items-center gap-3">

                    <ArrowDownRight
                      size={15}
                      strokeWidth={1.3}
                      className="text-[var(--accent)]"
                    />

                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--muted)]">
                      Solution
                    </span>

                  </div>

                  <p className="mt-5 text-sm font-light leading-7 text-[var(--muted)]">
                    {item.solution}
                  </p>

                </div>

              </motion.div>
            );
          })}

        </div>


        {/* FOOTER */}

        <div className="py-16 sm:py-20 lg:py-24">

          <div className="grid gap-8 lg:grid-cols-[200px_1fr] lg:gap-16">

            <div className="flex items-start gap-3">

              <ArrowDownRight
                size={16}
                strokeWidth={1.3}
                className="text-[var(--accent)]"
              />

              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                Engineering Journey
              </span>

            </div>


            <p className="max-w-5xl text-xl font-light leading-relaxed text-[var(--text)] sm:text-2xl lg:text-3xl">

              Building Menuly was not only about writing code.
              It was about learning how to

              <strong className="font-normal text-[var(--white)]">
                {" "}
                design, evolve and maintain a real product.
              </strong>

            </p>

          </div>

        </div>


      </div>
    </section>
  );
}