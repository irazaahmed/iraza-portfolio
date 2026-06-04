import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { profile } from "@/data/portfolio";
import ThemeToggle from "./ThemeToggle";

/** Fixed header for the blog pages (separate from the homepage scroll-spy navbar). */
export default function BlogHeader() {
  return (
    <header className="no-print fixed inset-x-0 top-0 z-50 border-b border-border bg-bg/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-3">
          <span className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-copper/50 transition-all duration-300 group-hover:border-copper group-hover:glow-copper">
            <Image
              src={profile.photo}
              alt={profile.name}
              width={40}
              height={40}
              className="h-full w-full object-cover"
            />
          </span>
          <span className="text-lg font-bold tracking-tight text-copper transition-colors group-hover:text-copper-dark">
            Ahmed Raza
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-copper"
          >
            <ArrowLeft size={16} />
            Home
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
