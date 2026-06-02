import Link from "next/link";
import { ArrowRight, Sparkles, Copy, Share2 } from "lucide-react";
import { prompts } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/**
 * Homepage teaser for the standalone /prompts gallery.
 * Sits after the Blog section and drives visitors to the full page.
 */
export default function PromptsTeaser() {
  return (
    <section id="prompts" className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24">
      <SectionHeading eyebrow="AI Showcase" title="Prompt Gallery" />

      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-copper/30 bg-bg-soft/60 p-6 sm:p-10">
          {/* Soft copper glow accent */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-copper/10 blur-3xl" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-copper/30 bg-copper/5 px-3 py-1 text-xs font-medium text-copper">
                <Sparkles size={14} />
                100% Free - no sign-up
              </span>

              <h3 className="mt-4 text-2xl font-bold tracking-tight text-fg sm:text-3xl">
                Premium AI prompts, shared{" "}
                <span className="text-copper">free of cost</span>
              </h3>

              <p className="mt-3 text-muted">
                Explore a growing gallery of high-quality, premium AI prompts by
                Ahmed Raza - the exact prompts behind every result. Browse the
                images, then copy or share any prompt and use it yourself,
                completely free.
              </p>

              {/* Feature chips */}
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs text-muted">
                  <Copy size={13} /> Copy any prompt
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs text-muted">
                  <Share2 size={13} /> Share with friends
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs text-muted">
                  <Sparkles size={13} /> Real results, real prompts
                </span>
              </div>
            </div>

            <div className="flex shrink-0 flex-col items-start gap-3 lg:items-end">
              {prompts.length > 0 && (
                <p className="text-sm text-muted">
                  <span className="text-2xl font-bold text-copper">
                    {prompts.length}
                  </span>{" "}
                  premium {prompts.length === 1 ? "prompt" : "prompts"} available
                </p>
              )}
              <Link
                href="/prompts"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-copper px-6 py-3 text-sm font-semibold text-black transition-all hover:glow-copper sm:w-auto"
              >
                Explore Prompt Gallery
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
