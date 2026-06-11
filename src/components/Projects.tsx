import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { projects } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/** Homepage shows the three strongest projects; /projects lists them all. */
export default function Projects() {
  const featured = projects.slice(0, 3);

  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24">
      <SectionHeading eyebrow="Selected Work" title="Projects" />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((project, i) => (
          <Reveal key={project.name} delay={(i % 3) * 0.1} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 flex justify-center">
        <Link
          href="/projects"
          className="group inline-flex items-center justify-center gap-2 rounded-full border border-copper/60 px-7 py-3 text-sm font-semibold text-copper transition-all hover:border-copper hover:bg-copper/10"
        >
          View all projects
          <FiArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </Reveal>
    </section>
  );
}
