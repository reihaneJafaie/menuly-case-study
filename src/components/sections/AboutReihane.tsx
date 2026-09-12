"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Code2,
  Layers3,
  Rocket,
} from "lucide-react";


const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    items: "React · TypeScript · Next.js",
  },
  {
    icon: Layers3,
    title: "Product Thinking",
    items: "UX · Architecture · Problem Solving",
  },
  {
    icon: Rocket,
    title: "Building Products",
    items: "SaaS · Admin Panels · Digital Experiences",
  },
];


export default function AboutReihane() {
  return (
    <section
      id="about"
      className="
      overflow-hidden
      bg-[var(--bg)]
      text-[var(--white)]
      "
    >

      <div className="mx-auto mt-25 w-[85%]">


        {/* HEADER */}



          <span
            className="
            font-mono
            text-md
            uppercase
            tracking-[0.2em]
            text-[var(--accent)]
            "
          >
            15 / About Reihane
          </span>





        {/* CONTENT */}

        <div
          className="
          grid
          gap-14
          py-16
          lg:grid-cols-[1fr_420px]
          lg:items-center
          lg:py-24
          "
        >


          {/* TEXT */}

          <div>


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

              Building products,
              <br />

              <span className="text-[var(--muted)]">
                not just interfaces.
              </span>

            </h2>



            <p
              className="
              mt-10
              max-w-2xl
              text-base
              leading-8
              text-[var(--muted)]
              "
            >

              I'm Reihane, a Frontend Developer focused on
              building scalable and user-centered digital
              experiences.

              <br />
              <br />

              Menuly was my first journey of turning an idea
              into a real product — from designing interfaces
              and frontend architecture to understanding
              backend systems, deployment and product decisions.

            </p>



            {/* SKILLS */}

            <div
              className="
              mt-12
              space-y-6
              "
            >

              {skills.map((skill)=>{

                const Icon = skill.icon;


                return (

                  <div
                    key={skill.title}
                    className="
                    flex
                    gap-5
                    "
                  >

                    <Icon
                      size={18}
                      strokeWidth={1.3}
                      className="
                      mt-1
                      text-[var(--accent)]
                      "
                    />


                    <div>

                      <h3
                        className="
                        text-sm
                        font-normal
                        uppercase
                        tracking-wider
                        "
                      >
                        {skill.title}
                      </h3>


                      <p
                        className="
                        mt-1
                        font-mono
                        text-xs
                        text-[var(--muted)]
                        "
                      >
                        {skill.items}
                      </p>

                    </div>


                  </div>

                );

              })}

            </div>



          </div>





          {/* IMAGE */}


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
            "
          >


            <div
              className="
              relative
              aspect-[4/5]
              overflow-hidden
              border
              border-[var(--border)]
              "
            >

              <Image
                src="/images/me.png"
                alt="Reihane Jafaie - Frontend Developer"
                fill
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
                Frontend Developer
              </span>


              <span>
                Menuly Creator
              </span>


            </div>


          </motion.div>



        </div>



        {/* FOOTER STATEMENT */}


        <div
          className="
          border-t
          border-[var(--border)]
          py-16
          "
        >

          <p
            className="
            max-w-5xl
            text-2xl
            font-light
            leading-relaxed
            text-[var(--muted)]
            sm:text-3xl
            lg:text-5xl
            "
          >

            I believe good software is not only about
            writing code —

            <span className="text-[var(--white)]">
              {" "}
              it is about solving real problems and creating
              meaningful experiences.
            </span>

          </p>


        </div>


      </div>


    </section>
  );
}