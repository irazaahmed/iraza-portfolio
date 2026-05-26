Build a full professional portfolio website for Ahmed Raza using Next.js and Tailwind CSS. The project is already initialized. Use the following complete brief:

---

DESIGN THEME (STRICT):
- Background: Pure black (#0A0A0A) with a subtle grid overlay (thin lines, 5% opacity white)
- Primary accent: Copper-orange (#E97A2C) with a soft glow effect on hover elements
- Secondary accent: Slightly darker copper (#D97426) for depth
- Text: White (#FFFFFF) primary, soft gray (#A0A0A0) for secondary text
- Style: Premium dark tech aesthetic with Islamic calligraphic subtle touches
- Sections should have very subtle copper glow or border-left accent lines
- Smooth scroll, fade-in-on-scroll animations using framer-motion
- Font: Inter for body, use a single Arabic/Islamic decorative Unicode character (like ﷽ or geometric bismillah) as a subtle hero background watermark element only

---

TECH STACK:
- Next.js 14+ App Router
- Tailwind CSS
- Framer Motion (animations)
- React Icons or Lucide React (icons)
- No external UI library needed

---

SECTIONS TO BUILD (in order):

1. NAVBAR
- Fixed top, transparent with blur backdrop
- Logo: "Ahmed Raza" in copper on left
- Nav links: About, Experience, Projects, Skills, Contact
- Smooth scroll to sections

2. HERO SECTION
- Full viewport height
- Large name: "AHMED RAZA" with copper glow
- Animated typewriter effect cycling through: "Islamic Scholar", "Team Lead Translation", "AI Solutions Expert", "Full Stack Developer"
- Subtext: "Bridging authentic Islamic knowledge with cutting-edge AI technology"
- Two CTA buttons: "View Projects" (copper filled) and "Download CV" (copper outlined)
- Subtle Arabic watermark text in background (very low opacity)

3. ABOUT SECTION
- Two column: left side photo (use /public/ahmed.jpg placeholder), right side text
- Professional summary text (from data below)
- Three highlight cards: Islamic Scholar, AI Engineer, Translation Lead with copper icon and stat

4. CURRENT POSITIONS SECTION (title: "What I Do Now")
- Two cards side by side
- Card 1: Team Lead Translation - Dawat-e-Islami (Jan 2026 - Present)
- Card 2: Founder & AI Solutions Expert - Cybrum Solutions (Nov 2025 - Present)
- Copper border, black card background, hover glow effect

5. EXPERIENCE TIMELINE SECTION
- Vertical timeline with copper line and copper dot markers
- Each entry: job title, org, dates, 1-2 bullet points
- Entries (chronological descending):
  * Asst. Mufattish / Asst. Shariah Advisor - Dar-ul-Madinah International Islamic School System (Aug 2017 - Jan 2026, 8.5 Years)
  * Secretariat Incharge - Dar-ul-Madinah International Islamic School System (Jan 2022 - Sep 2023)
  * Teacher of Scholars Course - Jamia Noor Ul Quran, Karachi (Sep 2022 - Apr 2024)
  * Teacher of Scholars Course - Al Miftah Scholars Academy, Karachi (Nov 2014 - Aug 2022, 7+ Years)
  * Online Quran and Dars-e-Nizami Teacher - Independent/Remote (Jan 2017 - Dec 2020)
  * Class Teacher Nazrah Quran - Islamic Institution, Karachi (Jun 2015 - Jul 2017)

6. PROJECTS SECTION
- Grid layout (2 columns desktop, 1 mobile)
- Each project card: name, tech stack as copper pills, description, GitHub link button
- Hover: card lifts with copper glow shadow
- Projects list:
  * Quran Translation Management System | Next.js, Supabase, Vercel | Full-stack web app managing end-to-end Quranic content translation workflow across 33 languages. Built with Next.js frontend, Supabase backend database, deployed on Vercel for distributed translation teams.
  * Physical AI and Humanoid Robotics | Python, AI/ML Frameworks, Robotics Integration | Explored physical AI concepts and humanoid robotics, implementing intelligent control and decision-making in robotic platforms.
  * Multiuser ToDo Application | Next.js, TypeScript, FastAPI, Python | Full-stack multiuser task management app with real-time collaboration, user authentication, and persistent storage.
  * Saylani Impact Portal | Next.js, TypeScript, Tailwind CSS | Web portal tracking and showcasing social impact metrics for Saylani Welfare with data visualization dashboards.
  * Nike E-Commerce Platform | Next.js, TypeScript, Sanity CMS, Tailwind CSS | Full e-commerce storefront with Sanity CMS product management, dynamic routing, and cart functionality.
  * SMIT Virtual Assistant | Dialogflow, FlowiseAI, Node.js | Conversational AI assistant for SMIT handling student queries via intent-based and LLM-powered flows.
  * InfoNest Blog Platform | Next.js, TypeScript, Tailwind CSS | Content-rich blog platform with category filtering, dynamic post rendering, and SEO optimization.

7. SKILLS SECTION
- Category-based grid layout
- Each category as a copper-outlined card with skill pills inside
- Categories:
  * AI & Agents: LangGraph, CrewAI, n8n, Claude API, Agentic AI, Multi-agent Systems
  * AI / ML: LLMs, Prompt Engineering, RAG, Generative AI, Google Colab
  * Frontend: HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS
  * Backend: Python, FastAPI, REST APIs
  * Tools: GitHub, VS Code, MS Office, Sanity CMS, Dialogflow, FlowiseAI
  * Languages: Urdu (Native), Arabic (Fluent), English (Proficient)

8. EDUCATION SECTION
- Two subsections: Academic Education and Certifications
- Clean card list with copper left-border
- Academic:
  * Hafiz-e-Quran - Memorization of the Complete Holy Quran
  * Matriculation (Computer Science) - Board of Secondary Education, Karachi
  * Masters in Arabic & Islamiat (Shahadat Ul Almiyah) - Tanzeem-ul-Madaris, Pakistan
  * Equivalence: Masters in Arabic & Islamiat - University of Karachi
  * Specialization in Jurisprudence (Takhassus Fil Fiqh) - Jamia-Tul-Madina, Karachi
- Certifications:
  * Cloud Computing and Agentic AI - GIAIC
  * Generative AI and Chatbot Development - SMIT
  * Modern Web Application Development - SMIT
  * MOS - Microsoft Office Specialist - SMIT
  * JavaScript Essentials 1 - Cisco Networking Academy

9. CONTACT SECTION
- Clean centered layout
- WhatsApp: +92 313 0221118
- Email: hafizahmedraza12345@gmail.com
- LinkedIn: linkedin.com/in/irazaahmed
- GitHub: github.com/irazaahmed
- Each contact item as a copper icon + text row with hover underline

10. FOOTER
- "Ahmed Raza © 2025" centered
- Tagline: "Execution Over Words"
- Social icons row

---

PROFESSIONAL SUMMARY (use in About section):
"Multidisciplinary professional combining deep Islamic scholarship with hands-on expertise in AI engineering and automation. Currently leading a 33-language Quranic content translation pipeline at Dawat-e-Islami and building AI-driven solutions at Cybrum Solutions. Brings 8+ years of experience in Shariah advisory, Islamic academia, and institutional management, alongside proficiency in agentic AI systems, multi-agent workflows, full-stack development, and LLM integration."

---

IMPORTANT INSTRUCTIONS:
- Create all components as separate files in /components folder
- Use a /data/portfolio.ts file to store all data as typed constants so it is easy to update later
- Make the site fully responsive (mobile first)
- Use Next.js App Router (app/page.tsx as entry)
- No placeholder lorem ipsum anywhere, use real data provided above
- Export a clean README.md with run instructions
- After building, run "npm run build" to confirm no errors

