"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Scroll-linked vertical connector for the experience timeline: the copper
 * line draws itself downward as the section scrolls through the viewport.
 */
export default function TimelineBeam({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.55"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <div ref={ref} className={`pointer-events-none ${className}`}>
      {/* faint track */}
      <div className="absolute inset-0 w-px bg-gradient-to-b from-border via-border to-transparent" />
      {/* drawing beam */}
      <motion.div
        style={{ scaleY: progress }}
        className="absolute inset-0 w-px origin-top bg-gradient-to-b from-copper via-copper/70 to-transparent"
      />
    </div>
  );
}
