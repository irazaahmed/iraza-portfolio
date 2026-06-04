"use client";

import { Download } from "lucide-react";

type Props = {
  /** Localized button label. */
  label: string;
  /** Urdu gets the Nastaliq face + larger size. */
  isUrdu?: boolean;
};

/**
 * Triggers the browser's print dialog. A dedicated print stylesheet (see
 * globals.css, @media print) restyles the page into a premium, copper-on-black
 * PDF of just the article, so "Save as PDF" yields a fully designed document.
 * Hidden from the printed output itself via the `no-print` class.
 */
export default function DownloadPdfButton({ label, isUrdu }: Props) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      aria-label={label}
      className={`no-print inline-flex items-center gap-2 rounded-lg border border-copper/40 bg-copper/5 px-4 py-2 text-sm font-semibold text-copper transition-all hover:bg-copper hover:text-black hover:glow-copper ${
        isUrdu ? "urdu-heading text-lg" : ""
      }`}
    >
      <Download size={16} aria-hidden />
      {label}
    </button>
  );
}
