import { Briefcase } from "lucide-react";
import { currentPositions } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function CurrentPositions() {
  return (
    <section id="now" className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24">
      <SectionHeading eyebrow="Currently" title="What I Do Now" />

      <div className="grid gap-6 md:grid-cols-2">
        {currentPositions.map((pos, i) => (
          <Reveal key={pos.org} delay={i * 0.12}>
            <article className="group relative h-full overflow-hidden rounded-2xl border border-copper/30 bg-bg-soft/60 p-7 transition-all duration-300 hover:border-copper hover:glow-copper-strong">
              {/* corner glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-copper/10 blur-2xl transition-opacity duration-300 group-hover:bg-copper/20"
              />
              <div className="relative">
                <div className="mb-4 flex items-center justify-between">
                  <span className="inline-flex rounded-lg bg-copper/10 p-2.5 text-copper">
                    <Briefcase size={20} />
                  </span>
                  <span className="rounded-full border border-copper/40 px-3 py-1 text-xs font-medium uppercase tracking-wider text-copper">
                    Current
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-fg">{pos.title}</h3>
                <p className="mt-1 font-medium text-copper">{pos.org}</p>
                <p className="mt-0.5 text-sm text-muted">{pos.period}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {pos.description}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
