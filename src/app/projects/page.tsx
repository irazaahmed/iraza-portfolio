import type { Metadata } from "next";
import { siteUrl, projects } from "@/data/portfolio";
import BlogHeader from "@/components/BlogHeader";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const title = "Projects - Ahmed Raza";
const description =
  "Every project built by Ahmed Raza: AI systems, multilingual translation platforms, e-commerce, dashboards, and web apps, each with a live deployment and open source code on GitHub.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/projects" },
  openGraph: { title, description, url: `${siteUrl}/projects`, type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function ProjectsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Ahmed Raza Projects",
    itemListElement: projects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: p.live ?? p.github,
    })),
  };

  return (
    <>
      <BlogHeader />
      <main
        id="main"
        className="relative z-10 mx-auto max-w-7xl px-5 pb-24 pt-28 sm:px-6 sm:pt-32"
      >
        <Reveal>
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.25em] text-copper">
            Selected Work
          </p>
          <div className="flex flex-wrap items-end gap-3 sm:gap-4">
            <h1 className="text-3xl font-bold tracking-tight text-fg sm:text-5xl">
              All Projects
            </h1>
            <span className="mb-1 rounded-full border border-copper/30 bg-copper/5 px-3 py-1 text-sm font-medium text-copper">
              {projects.length} projects
            </span>
          </div>
          <p className="mt-4 max-w-2xl text-muted">
            Everything I&apos;ve built across AI systems, translation platforms,
            e-commerce, and the web. Each project ships with a live deployment
            and public source code, see them running for yourself.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={(i % 3) * 0.1} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </main>
      <Footer />
      <ScrollToTop />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
