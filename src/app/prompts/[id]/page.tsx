import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { siteUrl, prompts } from "@/data/portfolio";
import BlogHeader from "@/components/BlogHeader";
import PromptActions from "@/components/PromptActions";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

type Params = { id: string };

// Pre-render a static page for every prompt.
export function generateStaticParams() {
  return prompts.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { id } = await params;
  const prompt = prompts.find((p) => p.id === id);
  if (!prompt) return { title: "Prompt not found - Ahmed Raza" };

  const title = `${prompt.title} - Prompt by Ahmed Raza`;
  const description = `Premium AI prompt by Ahmed Raza: ${prompt.prompt.slice(0, 150)}…`;
  const url = `${siteUrl}/prompts/${prompt.id}`;

  return {
    title,
    description,
    alternates: { canonical: `/prompts/${prompt.id}` },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [{ url: prompt.image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [prompt.image],
    },
  };
}

export default async function PromptDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;
  const prompt = prompts.find((p) => p.id === id);
  if (!prompt) notFound();

  return (
    <>
      <BlogHeader />
      <main
        id="main"
        className="relative z-10 mx-auto max-w-6xl px-5 pb-24 pt-28 sm:px-6 sm:pt-32"
      >
        <Reveal>
          <Link
            href="/prompts"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-copper"
          >
            <ArrowLeft size={16} />
            All prompts
          </Link>
        </Reveal>

        <Reveal>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
            {/* Left - image */}
            <div className="overflow-hidden rounded-2xl border border-border bg-black">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={prompt.image}
                alt={prompt.title}
                className="h-auto w-full object-contain"
              />
            </div>

            {/* Right - prompt + actions */}
            <div className="flex flex-col lg:sticky lg:top-28">
              <h1 className="text-2xl font-bold tracking-tight text-fg sm:text-3xl">
                {prompt.title}
              </h1>

              <p className="mb-2 mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-muted">
                Prompt
              </p>
              <div className="max-h-[55vh] overflow-y-auto overflow-x-hidden whitespace-pre-line break-words [overflow-wrap:anywhere] rounded-lg border border-border bg-bg-soft/60 p-4 text-sm leading-relaxed text-fg">
                {prompt.prompt}
              </div>

              <PromptActions prompt={prompt} />
            </div>
          </div>
        </Reveal>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
