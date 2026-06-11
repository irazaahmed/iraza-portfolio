"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Delay in seconds before the animation starts. */
  delay?: number;
  /** Vertical offset (px) the element rises from. */
  y?: number;
  className?: string;
};

/**
 * Fade-and-rise wrapper that triggers once when scrolled into view.
 * Used across sections for consistent fade-in-on-scroll behaviour.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
