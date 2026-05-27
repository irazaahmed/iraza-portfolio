import Link from "next/link";
import type { BlogMeta } from "@/lib/blog";

/** Formats an ISO date as e.g. "May 28, 2026"; falls back to the raw string. */
function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

/** Clickable blog preview card — opens the full post at /blog/[slug]. */
export default function BlogCard({ post }: { post: BlogMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-border bg-bg-soft/60 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-copper/50 hover:glow-copper-strong"
    >
      <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span aria-hidden>·</span>
        <span>{post.readingTime}</span>
      </div>

      <h3 className="mt-3 text-xl font-semibold text-fg transition-colors group-hover:text-copper">
        {post.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>

      {post.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-copper/30 bg-copper/5 px-3 py-1 text-xs font-medium text-copper"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      <span className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-copper">
        Read article
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}
