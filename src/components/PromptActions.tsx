"use client";

import { useState } from "react";
import { Check, Copy, Share2 } from "lucide-react";
import type { Prompt } from "@/data/portfolio";

/**
 * Copy + Share buttons for a single prompt detail page.
 * Share sends ONLY this prompt's own URL (/prompts/[id]) - not the whole gallery.
 */
export default function PromptActions({ prompt }: { prompt: Prompt }) {
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(prompt.prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable */
    }
  };

  const share = async () => {
    const url =
      typeof window !== "undefined" ? window.location.href : "";
    try {
      if (typeof navigator !== "undefined" && navigator.share) {
        await navigator.share({ title: prompt.title, url });
        return;
      }
      // Desktop fallback: copy just this prompt's link
      await navigator.clipboard.writeText(url);
      setShared(true);
      setTimeout(() => setShared(false), 1600);
    } catch {
      /* user cancelled the share sheet */
    }
  };

  return (
    <div className="mt-5 flex items-center gap-2">
      <button
        onClick={copy}
        className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-copper/30 bg-copper/10 px-4 py-2.5 text-sm font-medium text-copper transition-colors hover:bg-copper/20"
      >
        {copied ? (
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
        onClick={share}
        aria-label="Share this prompt"
        className="flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-muted transition-colors hover:border-copper/40 hover:text-copper"
      >
        {shared ? <Check size={16} /> : <Share2 size={16} />}
        <span>{shared ? "Link copied" : "Share"}</span>
      </button>
    </div>
  );
}
