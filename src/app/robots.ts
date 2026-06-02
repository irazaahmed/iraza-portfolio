import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/portfolio";

/**
 * Explicitly welcomes AI / generative-search crawlers (Google-Extended powers
 * Gemini & AI Overviews, GPTBot powers ChatGPT, PerplexityBot, ClaudeBot, etc.)
 * so this site is eligible to be cited and recommended by AI engines.
 */
const aiCrawlers = [
  "Google-Extended",
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "Applebot-Extended",
  "Amazonbot",
  "Bytespider",
  "CCBot",
  "cohere-ai",
  "Meta-ExternalAgent",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...aiCrawlers.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
