import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import type { Project } from "@/data/portfolio";

/**
 * Project card shared by the homepage Projects section and the /projects
 * page: copper-themed card with tech chips and Live + GitHub buttons.
 */
export default function ProjectCard({ project }: { project: Project }) {
  return (
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

      <div className="mt-5 flex flex-wrap gap-2.5">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-copper inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-copper px-4 py-2 text-sm font-semibold text-black transition-all hover:bg-copper-dark hover:glow-copper-strong"
          >
            <FiExternalLink size={15} />
            Live Site
          </a>
        )}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-fg transition-colors hover:border-copper hover:text-copper"
        >
          <FaGithub size={15} />
          GitHub
        </a>
      </div>
    </article>
  );
}
