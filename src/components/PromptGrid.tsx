"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Copy, Maximize2, Share2, X } from "lucide-react";
import { prompts as PROMPTS, type Prompt } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function PromptGrid() {
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [sharedId, setSharedId] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<Prompt | null>(null);

  // Lock body scroll + close on Escape while the lightbox is open
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox]);

  const copyPrompt = async (p: Prompt) => {
    try {
      await navigator.clipboard.writeText(p.prompt);
      setCopiedId(p.id);
      setTimeout(() => setCopiedId((id) => (id === p.id ? null : id)), 1600);
    } catch {
      /* clipboard unavailable */
    }
  };

  const sharePrompt = async (p: Prompt) => {
    const url =
      typeof window !== "undefined" ? `${window.location.origin}/prompts` : "";
    const shareData = { title: p.title, text: `${p.title}\n\n${p.prompt}`, url };
    try {
      if (typeof navigator !== "undefined" && navigator.share) {
        await navigator.share(shareData);
        return;
      }
      // Desktop fallback: copy the prompt + link to the clipboard
      await navigator.clipboard.writeText(`${p.title}\n\n${p.prompt}\n\n${url}`);
      setSharedId(p.id);
      setTimeout(() => setSharedId((id) => (id === p.id ? null : id)), 1600);
    } catch {
      /* user cancelled the share sheet */
    }
  };

  if (PROMPTS.length === 0) {
    return (
      <p className="mt-16 text-muted">
        No prompts yet — check back soon, in shā’ Allāh.
      </p>
    );
  }

  return (
    <>
      {/* Uniform grid — every card is the same size regardless of image ratio */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROMPTS.map((p, i) => {
          const isRevealed = revealed[p.id];
          const isCopied = copiedId === p.id;
          return (
            <Reveal key={p.id} delay={(i % 3) * 0.08} className="h-full">
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-bg-soft/60 transition-all duration-300 [@media(hover:hover)]:hover:-translate-y-1.5 [@media(hover:hover)]:hover:border-copper/50 [@media(hover:hover)]:hover:glow-copper-strong">
                {/* Image / result — fixed 4:5 frame, cropped to fill so all cards match */}
                <button
                  onClick={() => setLightbox(p)}
                  className="relative block aspect-[4/5] w-full shrink-0 overflow-hidden bg-black"
                  aria-label={`View ${p.title} large`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 [@media(hover:hover)]:group-hover:scale-105"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-0 transition-opacity duration-300 [@media(hover:hover)]:group-hover:opacity-100" />
                  <span className="absolute right-3 top-3 rounded-full border border-copper/30 bg-black/55 px-2.5 py-1 text-xs font-medium text-copper backdrop-blur-sm">
                    {p.tool}
                  </span>
                  <span className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/55 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 [@media(hover:hover)]:group-hover:opacity-100">
                    <Maximize2 size={15} />
                  </span>
                </button>

                {/* Body */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-base font-semibold text-fg transition-colors [@media(hover:hover)]:group-hover:text-copper">
                    {p.title}
                  </h3>

                  <AnimatePresence initial={false}>
                    {isRevealed && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3 max-h-40 overflow-y-auto overflow-x-hidden whitespace-pre-line break-words [overflow-wrap:anywhere] rounded-lg border border-border bg-bg/50 p-3 text-sm leading-relaxed text-muted">
                          {p.prompt}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-4 flex items-center gap-2">
                    <button
                      onClick={() =>
                        setRevealed((r) => ({ ...r, [p.id]: !r[p.id] }))
                      }
                      className="flex-1 rounded-lg border border-copper/30 bg-copper/5 px-3 py-2 text-sm font-medium text-copper transition-colors hover:bg-copper/10"
                    >
                      {isRevealed ? "Hide prompt" : "Show prompt"}
                    </button>
                    <button
                      onClick={() => copyPrompt(p)}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-copper/40 hover:text-copper"
                      aria-label="Copy prompt"
                      title="Copy prompt"
                    >
                      {isCopied ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                    <button
                      onClick={() => sharePrompt(p)}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-copper/40 hover:text-copper"
                      aria-label="Share prompt"
                      title="Share"
                    >
                      {sharedId === p.id ? (
                        <Check size={16} />
                      ) : (
                        <Share2 size={16} />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-copper/30 bg-bg md:flex-row"
            >
              {/* Close — floats top-right, always reachable */}
              <button
                onClick={() => setLightbox(null)}
                className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm transition-colors hover:text-copper"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              {/* Full image — contained, never cropped */}
              <div className="flex shrink-0 items-center justify-center bg-black p-3 md:w-[55%] md:p-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={lightbox.image}
                  alt={lightbox.title}
                  className="max-h-[42vh] w-auto max-w-full rounded-lg object-contain md:max-h-[84vh]"
                />
              </div>

              {/* Details */}
              <div className="flex min-h-0 flex-1 flex-col p-5 sm:p-6 md:w-[45%]">
                <span className="w-fit rounded-full border border-copper/30 bg-copper/5 px-2.5 py-1 text-xs font-medium text-copper">
                  {lightbox.tool}
                </span>
                <h3 className="mt-3 pr-8 text-lg font-semibold text-fg">
                  {lightbox.title}
                </h3>

                <p className="mb-2 mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-muted">
                  Prompt
                </p>
                <div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden whitespace-pre-line break-words [overflow-wrap:anywhere] rounded-lg border border-border bg-bg-soft/60 p-4 text-sm leading-relaxed text-fg">
                  {lightbox.prompt}
                </div>

                <div className="mt-4 flex shrink-0 items-center gap-2">
                  <button
                    onClick={() => copyPrompt(lightbox)}
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-copper/30 bg-copper/10 px-4 py-2.5 text-sm font-medium text-copper transition-colors hover:bg-copper/20"
                  >
                    {copiedId === lightbox.id ? (
                      <>
                        <Check size={16} /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy size={16} /> Copy prompt
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => sharePrompt(lightbox)}
                    aria-label="Share prompt"
                    className="flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-muted transition-colors hover:border-copper/40 hover:text-copper"
                  >
                    {sharedId === lightbox.id ? (
                      <Check size={16} />
                    ) : (
                      <Share2 size={16} />
                    )}
                    <span className="hidden sm:inline">Share</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
