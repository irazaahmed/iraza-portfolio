import type { Metadata } from "next";
import { siteUrl, prompts } from "@/data/portfolio";
import BlogHeader from "@/components/BlogHeader";
import PromptGrid from "@/components/PromptGrid";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const title = "Prompt Gallery — Ahmed Raza";
const description =
  "AI-generated results by Ahmed Raza with the exact prompts behind them. Browse the gallery and copy any prompt to try it yourself — premium AI prompts shared free of cost.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/prompts" },
  openGraph: { title, description, url: `${siteUrl}/prompts`, type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function PromptsPage() {
  return (
    <>
      <BlogHeader />
      <main
        id="main"
        className="relative z-10 mx-auto max-w-7xl px-5 pb-24 pt-28 sm:px-6 sm:pt-32"
      >
        <Reveal>
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.25em] text-copper">
            AI Showcase
          </p>
          <div className="flex flex-wrap items-end gap-3 sm:gap-4">
            <h1 className="text-3xl font-bold tracking-tight text-fg sm:text-5xl">
              Prompt Gallery
            </h1>
            {prompts.length > 0 && (
              <span className="mb-1 rounded-full border border-copper/30 bg-copper/5 px-3 py-1 text-sm font-medium text-copper">
                {prompts.length} {prompts.length === 1 ? "prompt" : "prompts"}
              </span>
            )}
          </div>
          <p className="mt-4 max-w-2xl text-muted">
            Premium AI prompts shared{" "}
            <span className="font-semibold text-copper">free of cost</span> —
            real results with the exact prompts behind them. Tap any card to view
            it large, then copy or share the prompt and use it yourself.
          </p>
        </Reveal>

        <PromptGrid />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
