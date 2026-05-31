import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { prompts as PROMPTS } from "@/data/portfolio";
import Reveal from "./Reveal";

/**
 * Grid of prompt cards. Each card links to its own detail page
 * (/prompts/[id]) so a single prompt can be opened and shared on its own.
 */
export default function PromptGrid() {
  if (PROMPTS.length === 0) {
    return (
      <p className="mt-16 text-muted">
        No prompts yet — check back soon, in shā’ Allāh.
      </p>
    );
  }

  return (
    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {PROMPTS.map((p, i) => (
        <Reveal key={p.id} delay={(i % 3) * 0.08} className="h-full">
          <Link
            href={`/prompts/${p.id}`}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-bg-soft/60 transition-all duration-300 [@media(hover:hover)]:hover:-translate-y-1.5 [@media(hover:hover)]:hover:border-copper/50 [@media(hover:hover)]:hover:glow-copper-strong"
          >
            {/* Image — fixed 4:5 frame, cropped to fill so all cards match */}
            <div className="relative aspect-[4/5] w-full shrink-0 overflow-hidden bg-black">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 [@media(hover:hover)]:group-hover:scale-105"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-0 transition-opacity duration-300 [@media(hover:hover)]:group-hover:opacity-100" />
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-base font-semibold text-fg transition-colors [@media(hover:hover)]:group-hover:text-copper">
                {p.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
                {p.prompt}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-copper">
                View prompt
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 [@media(hover:hover)]:group-hover:translate-x-1"
                />
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
