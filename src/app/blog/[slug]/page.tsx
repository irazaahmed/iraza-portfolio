import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  getAllSlugs,
  getAvailableLangs,
  getPostBySlug,
  parseLang,
  type Lang,
} from "@/lib/blog";
import { siteUrl } from "@/data/portfolio";
import BlogHeader from "@/components/BlogHeader";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import DownloadPdfButton from "@/components/DownloadPdfButton";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang?: string }>;
};

/** Pre-render every English post at build time. Translated variants are
 *  rendered on demand via the `?lang=` query parameter. */
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

function formatDate(iso: string, lang: Lang): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  const locale = lang === "ur" ? "ur-PK" : lang === "ro" ? "en-US" : "en-US";
  return d.toLocaleDateString(locale, { year: "numeric", month: "long", day: "numeric" });
}

function ogLocale(lang: Lang): string {
  return lang === "ur" ? "ur_PK" : lang === "ro" ? "en_US" : "en_US";
}

function pathFor(slug: string, lang: Lang): string {
  return lang === "en" ? `/blog/${slug}` : `/blog/${slug}?lang=${lang}`;
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { slug } = await params;
  const sp = await searchParams;
  const lang = parseLang(sp.lang);
  const post = getPostBySlug(slug, lang);
  if (!post) return { title: "Post not found - Ahmed Raza" };

  const available = getAvailableLangs(slug);
  const languages: Record<string, string> = {};
  for (const l of available) {
    const tag = l === "ur" ? "ur" : l === "ro" ? "en-x-roman-ur" : "en";
    languages[tag] = `${siteUrl}${pathFor(slug, l)}`;
  }

  return {
    title: `${post.title} - Ahmed Raza`,
    description: post.excerpt,
    keywords: post.tags,
    alternates: { canonical: pathFor(slug, lang), languages },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteUrl}${pathFor(slug, lang)}`,
      type: "article",
      publishedTime: post.date,
      authors: ["Ahmed Raza"],
      locale: ogLocale(lang),
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt },
  };
}

export default async function BlogPostPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const sp = await searchParams;
  const lang = parseLang(sp.lang);
  const post = getPostBySlug(slug, lang);
  if (!post) notFound();

  const available = getAvailableLangs(slug);
  const isUrdu = post.lang === "ur";
  const labels = {
    back: isUrdu ? "تمام تحریریں" : post.lang === "ro" ? "Sari tehreerain" : "All posts",
    backBottom: isUrdu
      ? "تمام تحریروں پر واپس"
      : post.lang === "ro"
        ? "Wapis sari tehreerain"
        : "Back to all posts",
    download: isUrdu
      ? "پی ڈی ایف ڈاؤن لوڈ کریں"
      : post.lang === "ro"
        ? "PDF Download Karein"
        : "Download PDF",
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    inLanguage: post.lang === "ur" ? "ur" : post.lang === "ro" ? "en" : "en",
    datePublished: post.date,
    dateModified: post.date,
    keywords: post.tags.join(", "),
    author: { "@type": "Person", name: "Ahmed Raza", url: siteUrl },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${siteUrl}${pathFor(slug, post.lang)}` },
  };

  return (
    <>
      <BlogHeader />
      <main id="main" className="relative z-10 mx-auto max-w-3xl px-6 pb-24 pt-32">
        <Link
          href="/blog"
          className="no-print inline-flex items-center gap-1.5 text-sm font-medium text-copper transition-colors hover:text-copper-dark"
        >
          <ArrowLeft size={16} />
          {labels.back}
        </Link>

        <div className="no-print mt-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex-1">
            <LanguageSwitcher slug={slug} current={post.lang} available={available} />
          </div>
          <DownloadPdfButton label={labels.download} isUrdu={isUrdu} />
        </div>

        <div id="pdf-root">
          {/* Title page: visible only in the PDF */}
          <div className="pdf-cover print-only" aria-hidden>
            <div className="pdf-cover-watermark">﷽</div>
            <div className="pdf-cover-top">
              <div className="pdf-cover-bismillah">﷽</div>
              <div className="pdf-cover-brand">AHMED RAZA</div>
              <div className="pdf-cover-role">Islamic Scholar &amp; Agentic AI Engineer</div>
            </div>
            <div className="pdf-cover-main">
              <div className="pdf-cover-kicker">Article</div>
              <div className="pdf-cover-rule" />
              <div className={`pdf-cover-title ${isUrdu ? "urdu-heading" : ""}`}>
                {post.title}
              </div>
              <div className="pdf-cover-rule" />
              <div className="pdf-cover-meta">
                {formatDate(post.date, post.lang)} &middot; {post.readingTime}
              </div>
              {post.tags.length > 0 && (
                <div className="pdf-cover-tags">{post.tags.join("  •  ")}</div>
              )}
            </div>
            <div className="pdf-cover-foot">irazaahmed.me</div>
          </div>

          {/* Content pages. The table's thead/tfoot reprint on every PDF page
              as the running header/footer (they are hidden on screen). */}
          <table className="pdf-doc">
            <thead>
              <tr>
                <td>
                  <div className="pdf-rhead">
                    <span className="pdf-rhead-l">Ahmed Raza</span>
                    <span className="pdf-rhead-r">Agentic AI Engineer</span>
                  </div>
                </td>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <td>
                  <div className="pdf-rfoot">
                    <span className="pdf-rfoot-l">irazaahmed.me</span>
                    <span className="pdf-rfoot-r">Execution Over Words</span>
                  </div>
                </td>
              </tr>
            </tfoot>
            <tbody>
              <tr>
                <td>
                  <article dir={isUrdu ? "rtl" : "ltr"} lang={post.lang === "ur" ? "ur" : "en"}>
          <header className="mb-10 border-b border-border pb-8">
            <div
              className={`flex flex-wrap items-center gap-2 text-xs text-muted ${
                isUrdu ? "justify-end" : ""
              }`}
            >
              <time dateTime={post.date}>{formatDate(post.date, post.lang)}</time>
              <span aria-hidden>·</span>
              <span>{post.readingTime}</span>
            </div>
            <h1
              className={
                isUrdu
                  ? "urdu-heading mt-3 text-4xl font-bold text-fg sm:text-5xl"
                  : "mt-3 text-3xl font-bold leading-tight tracking-tight text-fg sm:text-4xl"
              }
            >
              {post.title}
            </h1>
            {post.tags.length > 0 && (
              <div
                className={`mt-4 flex flex-wrap gap-2 ${isUrdu ? "justify-end" : ""}`}
              >
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className={`rounded-full border border-copper/30 bg-copper/5 px-3 py-1 text-xs font-medium text-copper ${
                      isUrdu ? "urdu-heading text-base" : ""
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div
            className={isUrdu ? "prose-blog prose-urdu" : "prose-blog"}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
                  </article>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="no-print mt-14 border-t border-border pt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-copper transition-colors hover:text-copper-dark"
          >
            <ArrowLeft size={16} />
            {labels.backBottom}
          </Link>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
