import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import BlogCard from "./BlogCard";

/** Homepage "Blog" section — shows the latest posts with a link to the full list. */
export default function BlogSection() {
  const posts = getAllPosts().slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <section id="blog" className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24">
      <SectionHeading eyebrow="Writing" title="Blog" />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <Reveal key={post.slug} delay={(i % 3) * 0.1}>
            <BlogCard post={post} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10">
        <Link
          href="/blog"
          className="inline-flex w-fit items-center gap-2 rounded-lg border border-copper/50 px-5 py-2.5 text-sm font-semibold text-copper transition-all hover:bg-copper hover:text-black hover:glow-copper"
        >
          View all posts →
        </Link>
      </Reveal>
    </section>
  );
}
