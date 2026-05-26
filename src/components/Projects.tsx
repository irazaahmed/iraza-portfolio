import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24">
      <SectionHeading eyebrow="Selected Work" title="Projects" />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={(i % 2) * 0.1}>
            <article className="group flex h-full flex-col rounded-2xl border border-border bg-bg-soft/60 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-copper/50 hover:glow-copper-strong">
              <h3 className="text-xl font-semibold text-fg transition-colors group-hover:text-copper">
                {project.name}
              </h3>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-copper/30 bg-copper/5 px-3 py-1 text-xs font-medium text-copper"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-fit items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-fg transition-colors hover:border-copper hover:text-copper"
              >
                <FaGithub size={16} />
                View on GitHub
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
