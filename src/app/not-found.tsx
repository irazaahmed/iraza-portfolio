import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-svh flex-col items-center justify-center px-6 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-copper/10 blur-[120px]"
      />
      <p className="text-glow-copper text-7xl font-extrabold tracking-tight text-copper sm:text-8xl">
        404
      </p>
      <h1 className="mt-4 text-2xl font-semibold text-fg sm:text-3xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-muted">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="glow-copper mt-8 inline-flex items-center justify-center rounded-full bg-copper px-7 py-3 text-sm font-semibold text-black transition-all hover:bg-copper-dark hover:glow-copper-strong"
      >
        Back to home
      </Link>
    </main>
  );
}
