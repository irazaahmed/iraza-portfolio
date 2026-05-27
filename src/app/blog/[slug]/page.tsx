import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { siteUrl } from "@/data/portfolio";
import BlogHeader from "@/components/BlogHeader";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

type Props = { params: Promise<{ slug: string }> };

/** Pre-render every post at build time. */
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post not found — Ahmed Raza" };

  return {
    title: `${post.title} — Ahmed Raza`,
    description: post.excerpt,
    keywords: post.tags,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteUrl}/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["Ahmed Raza"],
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    keywords: post.tags.join(", "),
    author: { "@type": "Person", name: "Ahmed Raza", url: siteUrl },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${siteUrl}/blog/${slug}` },
  };

  return (
    <>
      <BlogHeader />
      <main id="main" className="relative z-10 mx-auto max-w-3xl px-6 pb-24 pt-32">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-copper transition-colors hover:text-copper-dark"
        >
          <ArrowLeft size={16} />
          All posts
        </Link>

        <article className="mt-6">
          <header className="mb-10 border-b border-border pb-8">
            <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden>·</span>
              <span>{post.readingTime}</span>
            </div>
            <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-fg sm:text-4xl">
              {post.title}
            </h1>
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
          </header>

          <div className="prose-blog" dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>

        <div className="mt-14 border-t border-border pt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-copper transition-colors hover:text-copper-dark"
          >
            <ArrowLeft size={16} />
            Back to all posts
          </Link>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
