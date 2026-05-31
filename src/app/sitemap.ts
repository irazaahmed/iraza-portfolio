import type { MetadataRoute } from "next";
import { siteUrl, prompts } from "@/data/portfolio";
import { getAllPosts, getAvailableLangs } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  // One entry per (post × available language) so Google indexes every
  // translation we ship.
  const postEntries: MetadataRoute.Sitemap = posts.flatMap((post) => {
    const langs = getAvailableLangs(post.slug);
    const lastModified = post.date ? new Date(post.date) : new Date();
    return langs.map((lang) => ({
      url:
        lang === "en"
          ? `${siteUrl}/blog/${post.slug}`
          : `${siteUrl}/blog/${post.slug}?lang=${lang}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: lang === "en" ? 0.7 : 0.6,
    }));
  });

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: posts[0]?.date ? new Date(posts[0].date) : new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/prompts`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...prompts.map((p) => ({
      url: `${siteUrl}/prompts/${p.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...postEntries,
  ];
}
