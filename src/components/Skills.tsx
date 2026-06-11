import { skills } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import LanguageBars from "./LanguageBars";
import TiltCard from "./TiltCard";

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24">
      <SectionHeading eyebrow="Toolkit" title="Skills & Technologies" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((cat, i) => (
          <Reveal key={cat.category} delay={(i % 3) * 0.08} className="h-full">
            <TiltCard className="h-full rounded-2xl border border-copper/25 bg-bg-soft/50 p-6 hover:border-copper/60 hover:glow-copper">
              <h3 className="mb-4 text-base font-semibold uppercase tracking-wider text-copper">
                {cat.category}
              </h3>
              {cat.category === "Languages" ? (
                <LanguageBars />
              ) : (
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-border bg-fg/[0.03] px-3 py-1.5 text-sm text-fg/90 transition-colors hover:border-copper/40 hover:text-copper"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
