# Ahmed Raza — Portfolio Website

A premium dark-tech portfolio for **Ahmed Raza** — Islamic Scholar, Team Lead Translation,
AI Solutions Expert, and Full Stack Developer. Built with Next.js (App Router), Tailwind CSS,
and Framer Motion.

## ✨ Features

- Dark **and** light themes sharing the same copper-orange (`#E97A2C`) accent — switch via a navbar toggle (Light / Dark / System), persisted with `next-themes`
- Subtle grid overlay that adapts to the active theme
- Animated typewriter hero cycling through professional roles
- Fade-in-on-scroll animations powered by Framer Motion
- Fully responsive, mobile-first layout (320px → ultra-wide)
- Scroll progress bar + active-section navbar highlighting (scroll-spy)
- Animated stat counters and language proficiency bars
- Sections: Hero · About · What I Do Now · Experience Timeline · Projects · Skills ·
  Education & Certifications · Contact · Footer
- All content lives in one typed data file for easy updates
- **SEO ready:** dynamic Open Graph image, `Person` JSON-LD, sitemap, robots, copper favicon
- **Accessible:** keyboard focus rings, skip-to-content link, respects `prefers-reduced-motion`
- **Fast:** optimized WebP imagery, Vercel Analytics
- **AI chatbot:** a 24/7 assistant (Groq + Llama) that answers visitor questions about Ahmed using his portfolio data

## ⚙️ Configuration

Set your deployed URL so SEO metadata (OG image, sitemap, canonical) uses absolute links:

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Defaults to `https://ahmed-raza.vercel.app` if unset (see `src/data/portfolio.ts`).

## 🤖 AI Chatbot

A floating assistant (bottom-right) answers visitor questions about Ahmed 24/7. It runs
on [Groq](https://groq.com/) (free, very fast) and is grounded in the portfolio data —
update `src/data/portfolio.ts` and the bot stays in sync automatically.

**Setup:**

1. Get a free API key at [console.groq.com](https://console.groq.com) → **API Keys** → **Create API Key**.
2. Create a `.env.local` file in the project root and add your key:
   ```bash
   GROQ_API_KEY=gsk_your_key_here
   ```
3. Restart the dev server (`npm run dev`). The chat button activates automatically.

**On Vercel:** add `GROQ_API_KEY` under **Project → Settings → Environment Variables**, then redeploy.

**How it works:**
- `src/components/ChatWidget.tsx` — the chat UI (streaming replies)
- `src/app/api/chat/route.ts` — server route that calls Groq (key stays server-side)
- `src/lib/chatContext.ts` — builds the system prompt from portfolio data

The model is `llama-3.3-70b-versatile` by default; override with `GROQ_MODEL`. The endpoint
validates input, caps conversation length, and applies a basic rate limit. Only public info
(the same details shown on the site) is shared — never add private/sensitive data.

## 🧱 Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) — animations
- [Lucide React](https://lucide.dev/) — icons
- TypeScript

## 🚀 Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build for Production

```bash
npm run build
npm run start
```

## 🗂️ Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout, Inter font, metadata
│   ├── page.tsx          # Composes all sections in order
│   └── globals.css       # Theme tokens, grid overlay, glow utilities
├── components/           # One file per UI section / helper
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── CurrentPositions.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Education.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Reveal.tsx        # Scroll-reveal animation wrapper
│   └── SectionHeading.tsx
└── data/
    └── portfolio.ts      # ✏️ All site content — edit here
public/
├── ahmed.jpg             # Profile photo
└── Ahmed_Raza_CV.pdf     # Downloadable CV
```

## ✏️ Updating Content

All text, links, jobs, projects, skills, and education entries are stored as typed
constants in [`src/data/portfolio.ts`](src/data/portfolio.ts). Edit that file to update
the site — no component changes required.

## 🎨 Theme

Color tokens and effects (grid overlay, copper glow, scrollbar) are defined in
[`src/app/globals.css`](src/app/globals.css) using Tailwind v4's `@theme` block:

| Token                 | Value     | Use                   |
| --------------------- | --------- | --------------------- |
| `--color-bg`          | `#0A0A0A` | Page background       |
| `--color-copper`      | `#E97A2C` | Primary accent / glow |
| `--color-copper-dark` | `#D97426` | Secondary accent      |
| `--color-fg`          | `#FFFFFF` | Primary text          |
| `--color-muted`       | `#A0A0A0` | Secondary text        |

---

**Ahmed Raza © 2025 — Execution Over Words**
