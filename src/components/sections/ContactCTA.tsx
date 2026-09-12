"use client";

const contacts = [
  {
    title: "LinkedIn",
    value: "linkedin.com/in/reihanejafaie",
    href: "#",
  },
  {
    title: "GitHub",
    value: "github.com/reihanejafaie",
    href: "#",
  },
  {
    title: "Email",
    value: "reihanejafaie@gmail.com",
    href: "mailto:reihanejafaie@gmail.com",
  },
  {
    title: "Resume",
    value: "Download Resume",
    href: "#",
  },
];


export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="bg-[var(--bg)] text-[var(--white)]"
    >
      <div className="mx-auto mt-25 w-[85%]">


        <div className="border-b border-[var(--border)] pb-12">

          <span className="
          font-mono
          text-md
          uppercase
          tracking-[0.2em]
          text-[var(--accent)]
          ">
            16 / Contact
          </span>

        </div>



        <div className="py-20">


          <h2 className="
          text-5xl
          font-light
          tracking-[-0.05em]
          sm:text-6xl
          lg:text-8xl
          ">

            Have a product idea?

            <br />

            <span className="text-[var(--muted)]">
              Let's talk.
            </span>

          </h2>



          <div className="
          mt-20
          grid
          gap-10
          border-t
          border-[var(--border)]
          pt-10
          lg:grid-cols-2
          ">


            <div>

              <p className="
              text-xl
              font-light
              ">
                Reihane Jafaie
              </p>

              <p className="
              mt-2
              text-sm
              text-[var(--muted)]
              ">
                Frontend Developer
              </p>

              <p className="
              mt-6
              max-w-sm
              text-sm
              leading-7
              text-[var(--muted)]
              ">
                Building digital products with
                React, TypeScript and modern
                frontend architecture.
              </p>

            </div>




<div>

  {contacts.map((item, index) => (

    <a
      key={item.title}
      href={item.href}
      className="
      group
      block
      border-b
      border-[var(--border)]
      py-6
      transition
      hover:text-[var(--accent)]
      "
    >

      <div
        className="
        flex
        justify-between
        items-center
        "
      >

        <span
          className="
          text-lg
          font-light
          "
        >
          0{index + 1} / {item.title}
        </span>


        <span>
          →
        </span>

      </div>


      <p
        className="
        mt-2
        font-mono
        text-xs
        text-[var(--muted)]
        "
      >
        {item.value}
      </p>


    </a>

  ))}

</div>


          </div>


        </div>

      </div>
    </section>
  );
}