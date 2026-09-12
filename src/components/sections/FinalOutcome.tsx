"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
} from "lucide-react";


const outcomes = [
  "Complete SaaS product",
  "Public digital menu",
  "Admin management system",
  "Seller & subscription workflow",
];


export default function FinalOutcome() {
  return (
    <section
      id="final-outcome"
      className="
      relative
      overflow-hidden
      bg-[var(--bg)]
      text-[var(--white)]
      "
    >

      <div className="mx-auto mt-25 w-[85%]">


        {/* HEADER */}

        <div
          className="
          border-b
          border-[var(--border)]
          pb-12
          "
        >

          <span
            className="
            font-mono
            text-md
            uppercase
            tracking-[0.2em]
            text-[var(--accent)]
            "
          >
            14 / Final Outcome
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

              From an idea
              <br />

              to a

              <br />

              <span className="text-[var(--muted)]">
                real product.
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
              Menuly became a complete product experience,
              from product decisions and development
              to deployment and real usage.
            </p>


          </div>


        </div>




        {/* MAIN */}


        <div
          className="
          grid
          gap-12
          py-16
          lg:grid-cols-[0.8fr_1fr]
          lg:gap-20
          lg:py-24
          "
        >



          {/* LEFT */}


          <div>


            {/* FLOW */}

            <div
              className="
              flex
              items-center
              gap-4
              font-mono
              text-xs
              uppercase
              tracking-[0.2em]
              text-[var(--muted)]
              "
            >

              <span>
                Idea
              </span>


              <ArrowRight
                size={14}
                className="text-[var(--accent)]"
              />


              <span>
                Build
              </span>


              <ArrowRight
                size={14}
                className="text-[var(--accent)]"
              />


              <span>
                Production
              </span>


            </div>



            <div
              className="
              mt-14
              space-y-6
              "
            >

              {outcomes.map((item)=>(

                <div
                  key={item}
                  className="
                  flex
                  items-center
                  gap-4
                  "
                >

                  <div
                    className="
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                    border
                    border-[var(--border)]
                    "
                  >

                    <Check
                      size={12}
                      className="
                      text-[var(--accent)]
                      "
                    />

                  </div>


                  <span
                    className="
                    text-lg
                    font-light
                    text-[var(--text)]
                    "
                  >
                    {item}
                  </span>


                </div>

              ))}


            </div>



            <div
              className="
              mt-16
              border-t
              border-[var(--border)]
              pt-10
              "
            >

              <p
                className="
                max-w-xl
                text-xl
                font-light
                leading-relaxed
                text-[var(--muted)]
                sm:text-2xl
                "
              >

                Menuly was not only a project I built.
                It was my first experience of turning
                an idea into a real product.

              </p>


            </div>


          </div>




          {/* RIGHT IMAGE */}


          <motion.div

            initial={{
              opacity:0,
              y:40
            }}

            whileInView={{
              opacity:1,
              y:0
            }}

            viewport={{
              once:true
            }}

            transition={{
              duration:.8
            }}

            className="
            relative
            min-h-[520px]
            overflow-hidden
            border
            border-[var(--border)]
            "
          >

            <Image
              src="/images/final.jpg"
              alt="Menuly final product"
              fill
              className="
              w-full h-auto
              "
            />

{/* 
            <div
              className="
              absolute
              bottom-0
              left-0
              "
            >

              <span
                className="
                font-mono
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-[var(--accent)]
                "
              >
                Final Product
              </span>


              <p
                className="
                mt-3
                max-w-xs
                text-2xl
                font-light
                "
              >
                A complete digital experience for businesses.
              </p>


            </div> */}


          </motion.div>



        </div>



      </div>

    </section>
  );
}