"use client";

const quotes = [
  { text: "Best gym I have been to. Cleanest facility, friendliest staff, and the equipment is top notch.", name: "Travis M." },
  { text: "We drive 30 minutes each way. Worth every mile. The free classes alone are worth it.", name: "Amie S." },
  { text: "Bryan and Chelsea run a tight ship. This place is always spotless no matter the time of day.", name: "Dave R." },
  { text: "Kids Club is a lifesaver. My kids actually ask me to go to the gym now.", name: "Kylie P." },
  { text: "I have been a member for nine years. The equipment never sits broken for long. Hammer Strength is legit.", name: "Mark D." },
  { text: "Non-judgmental crowd, great hours, and the instructors actually know your name.", name: "Jessica T." },
  { text: "They have more free classes than most paid studios charge for. Incredible value.", name: "Greg H." },
  { text: "Best gym in Box Elder County and it is not close.", name: "Rachel N." },
];

function Star({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className={className}
      style={{ fill: "var(--brass)", width: "1em", height: "1em" }}
    >
      <path d="M10 1l2.39 5.26L18 7.27l-4 3.89.94 5.84L10 14.27l-4.94 2.73.94-5.84L2 7.27l5.61-.01z" />
    </svg>
  );
}

export default function Hero() {
  const doubled = [...quotes, ...quotes];

  return (
    <section
      aria-label="Results Gym hero"
      className="flex flex-col"
      style={{ minHeight: "100svh", paddingTop: "4rem" }}
    >
      {/* Main content */}
      <div className="flex-1 flex items-center">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-16 md:py-24">

          {/* Location / since */}
          <p
            className="mb-8 text-sm font-bold tracking-[0.18em] uppercase"
            style={{ fontFamily: "var(--font-archivo-narrow)", color: "var(--dust)" }}
          >
            Tremonton, Utah&nbsp;&nbsp;&middot;&nbsp;&nbsp;Since 2010
          </p>

          {/* Rating block */}
          <div className="animate-rating mb-6 flex items-end gap-4 flex-wrap">
            <span
              aria-label="4.8 out of 5 stars"
              className="leading-none font-black"
              style={{
                fontFamily: "var(--font-archivo)",
                fontStretch: "ultra-expanded",
                fontSize: "clamp(4.5rem, 16vw, 8rem)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                color: "var(--bone)",
              }}
            >
              4.8
            </span>
            <div className="flex flex-col gap-1 pb-2">
              <div
                className="flex gap-1 text-3xl"
                role="img"
                aria-label="Five stars"
              >
                <Star className="animate-star-1" />
                <Star className="animate-star-2" />
                <Star className="animate-star-3" />
                <Star className="animate-star-4" />
                <Star className="animate-star-5" />
              </div>
              <p
                className="text-sm font-bold tracking-[0.08em] uppercase"
                style={{ fontFamily: "var(--font-archivo-narrow)", color: "var(--dust)" }}
              >
                Across 187 Google reviews
              </p>
            </div>
          </div>

          {/* Headline */}
          <h1
            className="animate-headline mb-10 uppercase leading-none font-black"
            style={{
              fontFamily: "var(--font-archivo)",
              fontStretch: "ultra-expanded",
              fontSize: "clamp(2.5rem, 9vw, 5.5rem)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              color: "var(--bone)",
              maxWidth: "14ch",
            }}
          >
            The gym your neighbors already trust
          </h1>

          {/* CTA row */}
          <div className="animate-cta flex flex-wrap items-center gap-6">
            <a
              href="#free-pass"
              className="inline-block px-8 py-4 font-bold tracking-widest uppercase text-sm transition-opacity hover:opacity-90"
              style={{
                fontFamily: "var(--font-archivo-narrow)",
                background: "var(--brass)",
                color: "var(--iron)",
                borderRadius: "2px",
              }}
            >
              Get a free pass
            </a>
            <p
              className="text-sm font-bold tracking-[0.08em] uppercase"
              style={{ fontFamily: "var(--font-archivo-narrow)", color: "var(--dust)" }}
            >
              24/7 access&nbsp;&nbsp;&middot;&nbsp;&nbsp;30+ free classes weekly
            </p>
          </div>
        </div>
      </div>

      {/* Brass rule */}
      <div style={{ height: "2px", background: "var(--brass)" }} aria-hidden="true" />

      {/* Review marquee */}
      <div
        aria-label="Member review highlights"
        className="overflow-hidden py-4"
        style={{ background: "var(--iron)", borderTop: "1px solid var(--steel)" }}
      >
        <div
          className="marquee-track"
          role="list"
          aria-label="Scrolling member quotes"
        >
          {doubled.map((q, i) => (
            <div
              key={i}
              role="listitem"
              className="flex items-center whitespace-nowrap px-8"
              style={{ borderRight: "1px solid var(--steel)" }}
            >
              <blockquote>
                <p
                  className="text-sm italic"
                  style={{ fontFamily: "var(--font-public-sans)", color: "var(--dust)" }}
                >
                  &ldquo;{q.text}&rdquo;
                </p>
                <footer
                  className="text-xs font-bold tracking-widest uppercase mt-0.5"
                  style={{ fontFamily: "var(--font-archivo-narrow)", color: "var(--steel)" }}
                >
                  {q.name}
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
