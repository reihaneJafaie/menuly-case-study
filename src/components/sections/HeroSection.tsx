"use client";

import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import { motion } from "framer-motion";


export default function HeroSection() {
  return (
    <section
      className="
      relative
      min-h-screen
      overflow-hidden
      bg-[var(--bg)]
      text-[var(--white)]
      "
    >

      <div className="mx-auto flex min-h-screen w-[85%] flex-col justify-center">


        {/* TOP */}

        <div
          className="
          font-mono
          text-xs
          uppercase
          tracking-[0.2em]
          text-[var(--accent)]
          "
        >
          Menuly / Case Study
        </div>



        {/* CONTENT */}


        <div
          className="
          mt-10
          grid
          gap-12
          lg:grid-cols-[1fr_500px]
          lg:items-center
          "
        >



          {/* TEXT */}


          <div>


            <motion.h1
              initial={{
                opacity:0,
                y:30
              }}

              animate={{
                opacity:1,
                y:0
              }}

              transition={{
                duration:.8
              }}

              className="
              text-5xl
              font-light
              leading-[1]
              tracking-[-0.05em]
              sm:text-6xl
              lg:text-8xl
              "
            >

              I built a SaaS
              <br />

              product from

              <br />

              <span className="text-[var(--muted)]">
                idea to production.
              </span>

            </motion.h1>



            <p
              className="
              mt-10
              max-w-xl
              text-base
              leading-8
              text-[var(--muted)]
              "
            >
              A frontend-focused case study about
              designing, engineering and launching
              Menuly — a digital menu platform for
              businesses.
            </p>




          </div>





          {/* PRODUCT IMAGE */}


          <motion.div

            initial={{
              opacity:0,
              scale:.95
            }}

            animate={{
              opacity:1,
              scale:1
            }}

            transition={{
              duration:.9
            }}

            className="
            relative
            "
          >

            <div
              className="
              relative
              aspect-square
              overflow-hidden
              border
              border-[var(--border)]
              "
            >

              <Image
                src="/images/hero.png"
                alt="Menuly product"
                fill
                priority
                className="
                object-cover
                "
              />

            </div>


            <div
              className="
              mt-5
              flex
              justify-between
              font-mono
              text-[10px]
              uppercase
              tracking-[0.2em]
              text-[var(--muted)]
              "
            >

              <span>
                Reihane Jafaie
              </span>

              <span>
                Frontend Developer
              </span>

            </div>


          </motion.div>



        </div>


      </div>


    </section>
  );
}