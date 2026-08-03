"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{ background: "var(--iron)", borderColor: "var(--steel)" }}
    >
      <div className="mx-auto max-w-[1200px] px-6 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-display font-black text-lg tracking-tight leading-none"
          style={{
            fontFamily: "var(--font-archivo)",
            color: "var(--bone)",
            fontStretch: "expanded",
          }}
          aria-label="Results Gym & Fitness - home"
        >
          RESULTS GYM
          <span style={{ color: "var(--brass)" }}>&amp;</span>
          FITNESS
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Site navigation">
          <Link
            href="#classes"
            className="text-sm font-semibold tracking-widest uppercase"
            style={{ fontFamily: "var(--font-archivo-narrow)", color: "var(--dust)" }}
          >
            Classes
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-semibold tracking-widest uppercase"
            style={{ fontFamily: "var(--font-archivo-narrow)", color: "var(--dust)" }}
          >
            Pricing
          </Link>
          <Link
            href="#free-pass"
            className="px-5 py-2 text-sm font-semibold tracking-widest uppercase transition-opacity hover:opacity-90"
            style={{
              fontFamily: "var(--font-archivo-narrow)",
              background: "var(--brass)",
              color: "var(--iron)",
              borderRadius: "2px",
            }}
          >
            Get a free pass
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
          style={{ color: "var(--bone)" }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            {open ? (
              <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <>
                <rect y="4" width="22" height="2" rx="1" fill="currentColor" />
                <rect y="10" width="22" height="2" rx="1" fill="currentColor" />
                <rect y="16" width="22" height="2" rx="1" fill="currentColor" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav
          className="md:hidden border-t px-6 py-6 flex flex-col gap-5"
          style={{ background: "var(--iron)", borderColor: "var(--steel)" }}
          aria-label="Mobile navigation"
        >
          <Link
            href="#classes"
            onClick={() => setOpen(false)}
            className="text-sm font-semibold tracking-widest uppercase"
            style={{ fontFamily: "var(--font-archivo-narrow)", color: "var(--dust)" }}
          >
            Classes
          </Link>
          <Link
            href="#pricing"
            onClick={() => setOpen(false)}
            className="text-sm font-semibold tracking-widest uppercase"
            style={{ fontFamily: "var(--font-archivo-narrow)", color: "var(--dust)" }}
          >
            Pricing
          </Link>
          <Link
            href="#free-pass"
            onClick={() => setOpen(false)}
            className="inline-block px-5 py-3 text-sm font-semibold tracking-widest uppercase text-center"
            style={{
              fontFamily: "var(--font-archivo-narrow)",
              background: "var(--brass)",
              color: "var(--iron)",
              borderRadius: "2px",
            }}
          >
            Get a free pass
          </Link>
        </nav>
      )}
    </header>
  );
}
