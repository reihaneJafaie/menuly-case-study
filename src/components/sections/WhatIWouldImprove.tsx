"use client";

import { motion } from "framer-motion";
import {
Languages,
CircleDollarSign,
Calculator,
Zap,
} from "lucide-react";

const improvements = [
{
number: "01",
title: "Multi-language Menus",
description:
"Allow café owners to manage menus in multiple languages and let customers switch between them instantly.",
icon: Languages,
},
{
number: "02",
title: "Flexible Pricing & Currency",
description:
"Let business owners define their preferred currency, price format and regional settings directly from the admin panel.",
icon: CircleDollarSign,
},
{
number: "03",
title: "Accounting Integration",
description:
"Connect Menuly with accounting software through APIs to reduce manual data entry and keep business data synchronized.",
icon: Calculator,
},
{
number: "04",
title: "Faster Menu Management",
description:
"Make creating, editing and updating products and prices faster as the number of menu items grows.",
icon: Zap,
},
];

export default function WhatIWouldImprove() {
return ( <section
   id="improve"
   className="relative overflow-hidden bg-[var(--bg)] text-[var(--white)]"
 > <div className="mx-auto mt-25 w-[85%]">

    {/* HEADER */}

    <div className="border-b border-[var(--border)] pb-12">
      <span
        className="
          font-mono
          text-md
          uppercase
          tracking-[0.2em]
          text-[var(--accent)]
        "
      >
        13 / What I'd Improve
      </span>

      <div
        className="
          mt-8
          grid
          gap-8
          lg:grid-cols-[1fr_320px]
          lg:items-end
        "
      >
        <h2
          className="
            text-4xl
            font-light
            leading-[1.05]
            tracking-[-0.04em]
            sm:text-5xl
            lg:text-7xl
          "
        >
          Building a better
          <br />
          <span className="text-[var(--muted)]">
            next version.
          </span>
        </h2>

        <p
          className="
            text-sm
            leading-7
            text-[var(--muted)]
            sm:text-base
          "
        >
          The next improvements I would focus on to make
          Menuly more scalable, flexible and useful for
          real-world businesses.
        </p>
      </div>
    </div>

    {/* CONTENT */}

    <div
      className="
        grid
        gap-12
        py-16
        lg:grid-cols-[1fr_0.9fr]
        lg:gap-20
        lg:py-24
      "
    >

      {/* LIST */}

      <div>
        {improvements.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.number}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
              }}
              className="
                group
                flex
                gap-6
                border-b
                border-[var(--border)]
                py-8
              "
            >
              <span
                className="
                  pt-1
                  font-mono
                  text-xs
                  text-[var(--accent)]
                "
              >
                [{item.number}]
              </span>

              <div className="flex-1">
                <div className="flex items-start justify-between gap-6">
                  <h3
                    className="
                      text-2xl
                      font-light
                      tracking-[-0.03em]
                      sm:text-3xl
                    "
                  >
                    {item.title}
                  </h3>

                  <Icon
                    size={22}
                    strokeWidth={1.2}
                    className="
                      mt-1
                      shrink-0
                      text-[var(--muted)]
                      transition-colors
                      duration-300
                      group-hover:text-[var(--accent)]
                    "
                  />
                </div>

                <p
                  className="
                    mt-3
                    max-w-lg
                    text-sm
                    leading-7
                    text-[var(--muted)]
                  "
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* V2 SYSTEM VISUAL */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.96,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
        }}
        className="
          relative
          min-h-[420px]
          overflow-hidden
          border
          border-[var(--border)]
          p-8
        "
      >
        <div className="flex h-full flex-col justify-between">

          <div>
            <span
              className="
                font-mono
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-[var(--accent)]
              "
            >
              Product Evolution
            </span>

            <h3
              className="
                mt-4
                text-4xl
                font-light
                tracking-[-0.04em]
              "
            >
              Menuly V2
            </h3>
          </div>

          {/* SYSTEM */}

          <div className="space-y-3">

            <div
              className="
                border
                border-[var(--border)]
                p-4
              "
            >
              <div className="flex items-center gap-3">
                <Languages size={18} strokeWidth={1.2} />
                <span className="text-sm">
                  Multi-language
                </span>
              </div>
            </div>

            <div
              className="
                border
                border-[var(--border)]
                p-4
              "
            >
              <div className="flex items-center gap-3">
                <CircleDollarSign
                  size={18}
                  strokeWidth={1.2}
                />
                <span className="text-sm">
                  Currency & Pricing
                </span>
              </div>
            </div>

            <div
              className="
                border
                border-[var(--border)]
                p-4
              "
            >
              <div className="flex items-center gap-3">
                <Calculator
                  size={18}
                  strokeWidth={1.2}
                />
                <span className="text-sm">
                  Accounting API
                </span>
              </div>
            </div>

          </div>

          <div
            className="
              border-t
              border-[var(--border)]
              pt-5
            "
          >
            <span
              className="
                font-mono
                text-[10px]
                uppercase
                tracking-[0.15em]
                text-[var(--muted)]
              "
            >
              From digital menu
            </span>

            <div className="mt-2 flex items-center gap-3">
              <span className="text-sm">
                Menu
              </span>

              <span className="text-[var(--muted)]">
                →
              </span>

              <span className="text-sm">
                Business Platform
              </span>
            </div>
          </div>

        </div>
      </motion.div>

    </div>
  </div>
</section>


);
}
