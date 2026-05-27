import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { siteUrl } from "@/data/portfolio";
import BlogHeader from "@/components/BlogHeader";
import BlogCard from "@/components/BlogCard";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const title = "Blog — Ahmed Raza";
const description =
  "Articles by Ahmed Raza on AI, agentic systems, Islamic scholarship, translation technology, and full-stack development.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog" },
  openGraph: { title, description, url: `${siteUrl}/blog`, type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <BlogHeader />
      <main id="main" className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-32">
        <Reveal>
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.25em] text-copper">Writing</p>
          <h1 className="text-4xl font-bold tracking-tight text-fg sm:text-5xl">Blog</h1>
          <p className="mt-4 max-w-2xl text-muted">
            Thoughts on AI, agentic systems, Islamic scholarship, translation technology, and
            building for the web.
          </p>
        </Reveal>

        {posts.length === 0 ? (
          <p className="mt-16 text-muted">No posts yet — check back soon, in shā’ Allāh.</p>
        ) : (
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 0.1}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        )}
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
