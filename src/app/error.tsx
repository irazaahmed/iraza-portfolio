"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCw } from "lucide-react";

/** Branded error boundary so a runtime failure never shows an unstyled crash. */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="relative flex min-h-svh flex-col items-center justify-center px-6 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-copper/10 blur-[120px]"
      />
      <p className="text-sm font-medium uppercase tracking-[0.35em] text-copper">
        Something went wrong
      </p>
      <h1 className="mt-4 text-2xl font-semibold text-fg sm:text-3xl">
        An unexpected error occurred
      </h1>
      <p className="mt-3 max-w-md text-muted">
        This was on our side, not yours. Try again, or head back to the
        homepage.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <button
          onClick={reset}
          className="glow-copper inline-flex items-center justify-center gap-2 rounded-full bg-copper px-7 py-3 text-sm font-semibold text-black transition-all hover:bg-copper-dark hover:glow-copper-strong"
        >
          <RefreshCw size={16} />
          Try Again
        </button>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full border border-copper/60 px-7 py-3 text-sm font-semibold text-copper transition-all hover:border-copper hover:bg-copper/10"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
