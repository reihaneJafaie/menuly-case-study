"use client";

import { motion } from "framer-motion";
import {
  GitBranch,
  Server,
  Globe,
  Cpu,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";


const steps = [
  {
    number: "01",
    title: "Git",
    subtitle: "Version Control",
    icon: GitBranch,
    description:
      "Managing source code, tracking changes and maintaining a clean development workflow.",
  },
  {
    number: "02",
    title: "VPS",
    subtitle: "Production Server",
    icon: Server,
    description:
      "Moving the application from local development into a real Linux environment.",
  },
  {
    number: "03",
    title: "Nginx",
    subtitle: "Reverse Proxy",
    icon: Globe,
    description:
      "Handling domains, routing requests and connecting users to the application.",
  },
  {
    number: "04",
    title: "PM2",
    subtitle: "Process Manager",
    icon: Cpu,
    description:
      "Keeping Node.js services running reliably with automatic restart management.",
  },
  {
    number: "05",
    title: "SSL",
    subtitle: "Secure Connection",
    icon: ShieldCheck,
    description:
      "Adding HTTPS security between users and the production server.",
  },
];


export default function ProductionDeployment() {
  return (
    <section
      id="deployment"
      className="
      relative
      overflow-hidden
      bg-[var(--bg)]
      text-[var(--white)]
      "
    >

      <div className="mx-auto mt-25 w-[85%]">


        {/* HEADER */}

        <div className="border-b border-[var(--border)] pb-12">

          <span className="
          font-mono
          text-md
          uppercase
          tracking-[0.2em]
          text-[var(--accent)]
          ">
            11 / Production & Deployment
          </span>


          <div className="
          mt-8
          grid
          gap-8
          lg:grid-cols-[1fr_320px]
          lg:items-end
          ">


            <h2 className="
            max-w-5xl
            text-4xl
            font-light
            leading-[1.04]
            tracking-[-0.04em]
            sm:text-5xl
            lg:text-7xl
            ">
              From code.
              <br />

              <span className="text-[var(--muted)]">
                To production.
              </span>

            </h2>


            <p className="
            max-w-sm
            text-sm
            leading-7
            text-[var(--muted)]
            ">
              The journey of turning a local project into a running,
              accessible and secure product.
            </p>


          </div>

        </div>



        {/* PIPELINE */}


        <div className="
        relative
        py-20
        ">


          {/* LINE */}

          <div className="
          absolute
          left-8
          top-24
          hidden
          h-px
          w-[calc(100%-64px)]
          bg-[var(--border)]
          lg:block
          " />



          <div className="
          grid
          gap-12
          lg:grid-cols-5
          ">


          {steps.map((step,index)=>{

            const Icon = step.icon;


            return (

              <motion.div

              key={step.title}

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
                delay:index*.12
              }}


              className="
              group
              relative
              "

              >


                {/* NODE */}

                <div className="
                relative
                z-10
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                border
                border-[var(--border)]
                bg-[var(--bg)]
                transition-all
                duration-500
                group-hover:border-[var(--accent)]
                ">

                  <Icon
                    size={22}
                    strokeWidth={1.2}
                    className="
                    text-[var(--accent)]
                    "
                  />

                </div>



                <span className="
                mt-8
                block
                font-mono
                text-[10px]
                tracking-[0.2em]
                text-[var(--accent)]
                ">
                  [{step.number}]
                </span>



                <h3 className="
                mt-4
                text-2xl
                font-light
                ">
                  {step.title}
                </h3>



                <p className="
                mt-2
                text-xs
                uppercase
                tracking-wider
                text-[var(--muted)]
                ">
                  {step.subtitle}
                </p>



                <p className="
                mt-5
                text-sm
                leading-7
                text-[var(--muted)]
                ">
                  {step.description}
                </p>


              </motion.div>

            );

          })}


          </div>


        </div>





      </div>

    </section>
  );
}