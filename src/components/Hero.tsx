"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { profile } from "@/data/portfolio";
import IslamicPattern from "./IslamicPattern";

/** Cycling typewriter that types and deletes each role in turn. */
function useTypewriter(words: readonly string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];
    const finishedTyping = !deleting && text === current;
    const finishedDeleting = deleting && text === "";
    const delay = finishedTyping ? 1600 : finishedDeleting ? 400 : deleting ? 45 : 90;

    // All state updates run inside the timeout callback (async), never
    // synchronously in the effect body - avoids cascading renders.
    const timeout = setTimeout(() => {
      if (finishedTyping) {
        setDeleting(true);
      } else if (finishedDeleting) {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText((t) =>
          deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section
      id="hero"
      className="relative flex min-h-svh items-center overflow-hidden px-6 py-24"
    >
      {/* Islamic geometric watermark - faint copper star lattice */}
      <IslamicPattern />

      {/* Radial copper glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-copper/10 blur-[120px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-muted"
        >
          Execution Over Words
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-glow-copper text-[2.75rem] font-extrabold leading-[1.05] tracking-tight text-fg sm:text-7xl md:text-8xl lg:text-9xl"
        >
          AHMED RAZA
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 flex h-9 items-center justify-center text-xl font-medium text-copper sm:text-2xl"
        >
          <span>{typed}</span>
          <span className="caret-blink ml-1 inline-block h-6 w-0.5 bg-copper sm:h-7" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mx-auto mt-6 max-w-2xl text-base text-muted sm:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="glow-copper inline-flex items-center justify-center rounded-full bg-copper px-7 py-3 text-sm font-semibold text-black transition-all hover:bg-copper-dark hover:glow-copper-strong"
          >
            View Projects
          </a>
          <a
            href={profile.cvFile}
            download
            className="inline-flex items-center justify-center gap-2 rounded-full border border-copper/60 px-7 py-3 text-sm font-semibold text-copper transition-all hover:bg-copper/10 hover:border-copper"
          >
            <Download size={16} />
            Download CV
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}
