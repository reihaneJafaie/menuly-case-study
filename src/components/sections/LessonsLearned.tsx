"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Layers,
  Code2,
  GraduationCap,
  Rocket,
  Compass,
} from "lucide-react";


const lessons = [
  {
    number: "01",
    icon: Brain,
    title: "Building products is more than coding",
    text:
      "I learned that a real product is not only about writing code. It requires understanding users, business needs and making the right technical decisions.",
  },
  {
    number: "02",
    icon: Layers,
    title: "Architecture grows with the product",
    text:
      "I learned that architecture is not something you finish on day one. It improves through real problems and continuous iteration.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Frontend developers need system thinking",
    text:
      "Building Menuly taught me to think beyond UI and understand backend logic, databases, permissions and infrastructure.",
  },
  {
    number: "04",
    icon: GraduationCap,
    title: "Theory becomes valuable in practice",
    text:
      "University concepts like software engineering, databases and operating systems became practical tools during development.",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Real projects accelerate learning",
    text:
      "Every technology had a reason to exist. I learned faster because every problem had a real purpose behind it.",
  },
  {
    number: "06",
    icon: Compass,
    title: "From developer to product builder",
    text:
      "Menuly changed my mindset from only building features to creating and maintaining a complete product.",
  },
];


export default function LessonsLearned() {
  return (
    <section
      id="lessons"
      className="relative overflow-hidden bg-[var(--bg)] text-[var(--white)]"
    >

      <div className="mx-auto mt-25 w-[85%]">


        {/* HEADER */}

        <div className="border-b border-[var(--border)] pb-12">

          <span className="font-mono text-md uppercase tracking-[0.2em] text-[var(--accent)]">
            12 / Lessons Learned
          </span>


          <div className="mt-8 ">


            <h2 className="
            text-4xl
            font-light
            leading-[1.04]
            tracking-[-0.04em]
            sm:text-5xl
            lg:text-7xl
            ">

              Lessons 

              <span className=" px-2 text-[var(--muted)]">
                 beyond
              </span>

              code.

            </h2>


            <p className="
            max-w-sm
            text-sm
            leading-7
            text-[var(--muted)]
            ">
              The biggest changes in my mindset while building Menuly.
            </p>


          </div>

        </div>



        {/* CARDS */}

        <div className="
        grid
        gap-0
        md:grid-cols-2
        ">


          {lessons.map((lesson,index)=>{

            const Icon = lesson.icon;


            return (

              <motion.article

                key={lesson.number}

                initial={{
                  opacity:0,
                  y:30
                }}

                whileInView={{
                  opacity:1,
                  y:0
                }}

                viewport={{
                  once:true
                }}

                transition={{
                  delay:index*.08
                }}


                className="
                group
                relative
                min-h-[340px]
                border-b
                border-[var(--border)]
                p-8
                lg:p-10
                md:border-r
                "

              >


                <span className="
                absolute
                right-8
                top-6
                text-7xl
                font-light
                text-[var(--border)]
                ">
                  {lesson.number}
                </span>



                <Icon
                  size={22}
                  strokeWidth={1.2}
                  className="text-[var(--accent)]"
                />


                <h3 className="
                mt-16
                max-w-sm
                text-2xl
                font-light
                leading-tight
                ">
                  {lesson.title}
                </h3>


                <p className="
                mt-6
                max-w-sm
                text-sm
                leading-7
                text-[var(--muted)]
                ">
                  {lesson.text}
                </p>


              </motion.article>

            );

          })}


        </div>


      </div>

    </section>
  );
}