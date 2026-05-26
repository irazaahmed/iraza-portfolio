import { experience } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24">
      <SectionHeading eyebrow="Career Path" title="Experience" />

      <div className="relative">
        {/* Vertical copper line */}
        <div className="absolute left-3 top-2 h-full w-px bg-gradient-to-b from-copper via-copper/40 to-transparent md:left-3" />

        <ol className="space-y-10">
          {experience.map((job, i) => (
            <li key={`${job.org}-${job.period}`} className="relative pl-12">
              {/* Dot marker */}
              <span className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center">
                <span className="absolute h-6 w-6 rounded-full bg-copper/20" />
                <span className="relative h-3 w-3 rounded-full bg-copper glow-copper" />
              </span>

              <Reveal delay={i * 0.05}>
                <div className="rounded-xl border border-border bg-bg-soft/40 p-5 transition-colors duration-300 hover:border-copper/30">
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                    <h3 className="text-lg font-semibold text-fg">{job.title}</h3>
                    <span className="text-sm font-medium text-copper">{job.period}</span>
                  </div>
                  <p className="mt-0.5 text-sm text-muted">{job.org}</p>
                  <ul className="mt-3 space-y-1.5">
                    {job.points.map((point, j) => (
                      <li
                        key={j}
                        className="flex gap-2 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-copper" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
