"use client";

import { useRef, type ReactNode } from "react";

/**
 * Card wrapper with a pointer-driven 3D tilt (mouse only, capped at a few
 * degrees) and a cursor-following copper spotlight. Pass the card's visual
 * classes via className; children render above the spotlight.
 */
export default function TiltCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);

    if (e.pointerType === "mouse") {
      const px = x / rect.width - 0.5;
      const py = y / rect.height - 0.5;
      el.style.setProperty("--rx", `${(py * -4).toFixed(2)}deg`);
      el.style.setProperty("--ry", `${(px * 5).toFixed(2)}deg`);
    }
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  }

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{
        transform:
          "perspective(900px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))",
        transformStyle: "preserve-3d",
      }}
      className={`group relative overflow-hidden transition-[border-color,box-shadow,transform] duration-300 ease-out will-change-transform ${className}`}
    >
      {/* copper spotlight following the cursor */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(380px circle at var(--mx) var(--my), rgba(233, 122, 44, 0.14), transparent 60%)",
        }}
      />
      <div className="relative flex h-full flex-col">{children}</div>
    </div>
  );
}
