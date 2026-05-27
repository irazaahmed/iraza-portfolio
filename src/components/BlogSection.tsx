import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import BlogCard from "./BlogCard";

/**
 * Homepage "Blog" section — recent posts in a horizontal, swipe/scrollable row.
 * Only a few cards fit on screen at once; the rest are reachable by scrolling
 * left/right, with a "See all posts" button linking to the full /blog page.
 */
export default function BlogSection() {
  const posts = getAllPosts().slice(0, 6);
  if (posts.length === 0) return null;

  return (
    <section id="blog" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Writing" title="Blog" />
          <Reveal className="mb-12">
            <Link
              href="/blog"
              className="inline-flex w-fit items-center gap-2 rounded-lg border border-copper/50 px-5 py-2.5 text-sm font-semibold text-copper transition-all hover:bg-copper hover:text-black hover:glow-copper"
            >
              See all posts →
            </Link>
          </Reveal>
        </div>
      </div>

      {/* Horizontal scroller — padded to align with the max-w-7xl content edge */}
      <Reveal>
        <div className="blog-scroller flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-6 pb-5 [scroll-padding-left:1.5rem] lg:px-[max(1.5rem,calc((100%-80rem)/2+1.5rem))]">
          {posts.map((post) => (
            <div key={post.slug} className="w-[80vw] shrink-0 snap-start sm:w-80">
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
