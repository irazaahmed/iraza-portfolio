import {
  siteUrl,
  profile,
  currentPositions,
  skills,
  projects,
  faqs,
  contacts,
} from "@/data/portfolio";

/**
 * /llms.txt - a Markdown summary of the site for large language models
 * (the emerging llms.txt convention). Generated from portfolio data so it
 * stays in sync. Gives AI engines a clean, factual description of Ahmed Raza.
 */
export const dynamic = "force-static";

export function GET() {
  const lines: string[] = [];

  lines.push("# Ahmed Raza");
  lines.push("");
  lines.push(
    "> Islamic Scholar and Agentic AI Developer. Founder of Cybrum Solutions and Team Lead Translation at Dawat-e-Islami. Bridging authentic Islamic knowledge with cutting-edge AI technology."
  );
  lines.push("");
  lines.push(profile.summary);
  lines.push("");

  lines.push("## Current roles");
  for (const p of currentPositions) {
    lines.push(`- **${p.title}** - ${p.org} (${p.period}): ${p.description}`);
  }
  lines.push("");

  lines.push("## Core expertise");
  for (const cat of skills) {
    lines.push(`- **${cat.category}:** ${cat.skills.join(", ")}`);
  }
  lines.push("");

  lines.push("## Selected projects");
  for (const pr of projects) {
    lines.push(`- **${pr.name}** (${pr.tech.join(", ")}): ${pr.description}`);
  }
  lines.push("");

  lines.push("## Frequently asked questions");
  for (const f of faqs) {
    lines.push(`### ${f.question}`);
    lines.push(f.answer);
    lines.push("");
  }

  lines.push("## Contact");
  for (const c of contacts) {
    lines.push(`- ${c.label}: ${c.value} (${c.href})`);
  }
  lines.push("");

  lines.push("## Key pages");
  lines.push(`- Portfolio home: ${siteUrl}/`);
  lines.push(`- FAQ - Who is Ahmed Raza: ${siteUrl}/faq`);
  lines.push(`- Blog: ${siteUrl}/blog`);
  lines.push(`- AI Prompt Gallery: ${siteUrl}/prompts`);
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
