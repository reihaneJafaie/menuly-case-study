"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";


const links = [
  {
    title: "Story",
    href: "#story",
  },
  {
    title: "Architecture",
    href: "#frontend-architecture",
  },
  {
    title: "Challenges",
    href: "#technical-challenges",
  },
  {
    title: "About",
    href: "#about",
  },
];


export default function Navbar() {

  const [open, setOpen] = useState(false);


  return (
    <header
      className="
      fixed
      top-0
      z-50
      w-full
      border-b
      border-[var(--border)]
      bg-[var(--bg)]/80
      backdrop-blur-md
      "
    >

      <div
        className="
        mx-auto
        flex
        h-20
        w-[85%]
        items-center
        justify-between
        "
      >


        {/* LOGO */}


        <a
          href="#"
          className="
          font-mono
          text-xs
          uppercase
          tracking-[0.2em]
          text-[var(--white)]
          "
        >
          Menuly
          <span className="text-[var(--accent)]">
            {" "}
            / Case Study
          </span>
        </a>




        {/* DESKTOP LINKS */}


        <nav
          className="
          hidden
          items-center
          gap-8
          lg:flex
          "
        >

          {links.map((item)=>(
            <a
              key={item.title}
              href={item.href}
              className="
              font-mono
              text-[11px]
              uppercase
              tracking-[0.15em]
              text-[var(--muted)]
              transition
              hover:text-[var(--white)]
              "
            >
              {item.title}
            </a>
          ))}


        </nav>




        {/* RIGHT */}


        <div
          className="
          hidden
          items-center
          gap-6
          lg:flex
          "
        >

          <a
            href="https://menuly.reihanejafaie.ir/menuly-demo"
            target="_blank"
            rel="noreferrer"
            className="
            flex
            items-center
            gap-2
            font-mono
            text-[11px]
            uppercase
            tracking-[0.15em]
            text-[var(--accent)]
            "
          >
            Live
            <ArrowUpRight size={13}/>
          </a>


          <a
            href="#contact"
            className="
            border
            border-[var(--border)]
            px-5
            py-2.5
            font-mono
            text-[11px]
            uppercase
            tracking-[0.15em]
            transition
            hover:border-[var(--accent)]
            "
          >
            Contact
          </a>


        </div>





        {/* MOBILE BUTTON */}


        <button
          onClick={()=>setOpen(!open)}
          className="
          lg:hidden
          text-[var(--muted)]
          "
        >

          {open
            ?
            <X size={22}/>
            :
            <Menu size={22}/>
          }

        </button>


      </div>





      {/* MOBILE MENU */}


      {open && (

        <div
          className="
          border-t
          border-[var(--border)]
          bg-[var(--bg)]
          px-[7.5%]
          py-8
          lg:hidden
          "
        >

          <nav
            className="
            flex
            flex-col
            gap-6
            "
          >

            {links.map((item)=>(
              <a
                key={item.title}
                href={item.href}
                onClick={()=>setOpen(false)}
                className="
                font-mono
                text-xs
                uppercase
                tracking-[0.2em]
                text-[var(--muted)]
                "
              >
                {item.title}
              </a>
            ))}


            <a
              href="#contact"
              className="
              mt-4
              font-mono
              text-xs
              uppercase
              tracking-[0.2em]
              text-[var(--accent)]
              "
            >
              Contact
            </a>


          </nav>

        </div>

      )}


    </header>
  );
}