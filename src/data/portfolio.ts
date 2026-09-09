/**
 * Single source of truth for all portfolio content.
 * Update values here to change what renders across the site.
 */

/** Public site URL - override via NEXT_PUBLIC_SITE_URL when deploying. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.irazaahmed.me";

export const profile = {
  name: "Ahmed Raza",
  roles: [
    "Islamic Scholar",
    "Team Lead Translation",
    "Agentic AI Developer",
    "Full Stack Developer",
  ],
  tagline: "Bridging authentic Islamic knowledge with cutting-edge AI technology",
  summary:
    "Founder & CEO of Cybrum Solutions, an AI-Native company building intelligent automation, AI agents, and web systems that run real business workflows end to end. As a solo founder, Ahmed Raza orchestrates an agentic AI workforce to deliver team-level output with one accountable builder. Also an active Islamic Scholar with 8+ years as an Asst. Shariah Advisor, and Team Lead Translation at Dawat-e-Islami leading a 33-language Quranic content translation pipeline. Bridges deep grounding in Islamic knowledge with modern AI engineering. Motto: Execution Over Words.",
  cvFile: "/Ahmed_Raza_CV.pdf",
  photo: "/ahmed.webp",
} as const;

export type Highlight = {
  title: string;
  stat: string;
  description: string;
  icon: "scroll" | "cpu" | "languages";
};

export const highlights: Highlight[] = [
  {
    title: "Islamic Scholar",
    stat: "8+ Years",
    description:
      "Shariah advisory, jurisprudence, and Islamic academia across leading institutions.",
    icon: "scroll",
  },
  {
    title: "AI Engineer",
    stat: "Agentic AI",
    description:
      "Multi-agent systems, LLM integration, RAG pipelines, and workflow automation.",
    icon: "cpu",
  },
  {
    title: "Translation Lead",
    stat: "33 Languages",
    description:
      "Leading an end-to-end multilingual Quranic content translation operation.",
    icon: "languages",
  },
];

export type Position = {
  title: string;
  org: string;
  period: string;
  description: string;
};

export const currentPositions: Position[] = [
  {
    title: "Team Lead Translation",
    org: "Dawat-e-Islami - Translation Department (شعبہ تراجم)",
    period: "Jan 2026 - Present",
    description:
      "Leading a multilingual Quranic content translation operation across 33 target languages using a structured relay chain (Arabic → Urdu → English → 33 languages). Managing translator teams, setting quality benchmarks, and enforcing Islamic scholarly standards across all language outputs, while overseeing the complete workflow from translation to publishing.",
  },
  {
    title: "Founder & Agentic AI Developer",
    org: "Cybrum Solutions",
    period: "Nov 2025 - Present",
    description:
      "Building and productizing AI automation solutions for Islamic publishers, educational institutions, and Pakistani SMEs. Developing WhatsApp chatbots, CRM workflow automation, and multi-agent AI systems as core service offerings.",
  },
];

export type Experience = {
  title: string;
  org: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    title: "Asst. Mufattish / Asst. Shariah Advisor",
    org: "Dar-ul-Madinah International Islamic School System",
    period: "Aug 2017 - Jan 2026 · 8.5 Years",
    points: [
      "Served in the Shariah and Tafteesh (Inspection) Department, overseeing compliance with Islamic law and institutional standards.",
      "Conducted Shariah audits, prepared legal opinions, and advised management on jurisprudential matters.",
    ],
  },
  {
    title: "Secretariat Incharge",
    org: "Dar-ul-Madinah International Islamic School System",
    period: "Jan 2022 - Sep 2023",
    points: [
      "Managed secretariat operations, official correspondence, and administrative coordination for the school system.",
      "Streamlined documentation workflows and maintained institutional records across departments.",
    ],
  },
  {
    title: "Teacher of Scholars Course",
    org: "Jamia Noor Ul Quran, Karachi",
    period: "Sep 2022 - Apr 2024",
    points: [
      "Delivered advanced Dars-e-Nizami curriculum to students enrolled in the Scholars Course.",
      "Focused on Arabic language, Islamic jurisprudence, and classical Islamic texts.",
    ],
  },
  {
    title: "Teacher of Scholars Course",
    org: "Al Miftah Scholars Academy, Karachi",
    period: "Nov 2014 - Aug 2022 · 7+ Years",
    points: [
      "Taught Dars-e-Nizami subjects over 7+ years with consistent academic outcomes.",
      "Mentored students in Arabic grammar, Fiqh, Hadith, and Tafseer disciplines.",
    ],
  },
  {
    title: "Online Quran & Dars-e-Nizami Teacher",
    org: "Independent / Remote",
    period: "Jan 2017 - Dec 2020",
    points: [
      "Delivered one-on-one and group online sessions for Quran recitation and Dars-e-Nizami subjects.",
      "Taught students across multiple countries, adapting instruction to individual learning levels.",
    ],
  },
  {
    title: "Class Teacher - Nazrah Quran",
    org: "Islamic Institution, Karachi",
    period: "Jun 2015 - Jul 2017",
    points: [
      "Conducted Nazrah Quran classes and monitored student progress in recitation and tajweed.",
    ],
  },
];

export type Project = {
  name: string;
  tech: string[];
  description: string;
  github: string;
  /** Deployed, browsable URL. */
  live?: string;
};

/** The homepage shows the first three; /projects lists them all. */
export const projects: Project[] = [
  {
    name: "Translation Management System",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    description:
      "Full-stack platform that runs two translation workflows in one real-time dashboard: Quranic translation across 25+ languages with weekly meeting scheduling and reports, and an 8-stage English production pipeline for books, speeches, booklets, and magazine articles.",
    github: "https://github.com/irazaahmed/translation-management-system",
    live: "https://tms-dawateislami.vercel.app/",
  },
  {
    name: "Personal Professional Portfolio",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    description:
      "This very site: personal brand portfolio with an AI chat assistant, multilingual blog, prompt gallery, and SEO-optimized pages, designed, built, and deployed end to end.",
    github: "https://github.com/irazaahmed/iraza-portfolio",
    live: "https://www.irazaahmed.me/",
  },
  {
    name: "Lodhi Cooperative Housing Society",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Cloudinary", "Auth.js"],
    description:
      "Secure client document portal for a 360-plot housing society in Karachi. Clients sign in to view and download only their own legal documents, while the admin verifies signups, links plots, and manages every file. Private storage with short-lived signed URLs and strict per-client access control.",
    github: "https://github.com/irazaahmed/builder-costumer-data",
    live: "https://lodhisociety.com/",
  },
  {
    name: "Hafeez Communication",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Auth.js", "Tailwind CSS"],
    description:
      "Full-stack shop management panel for a mobile accessories shop that also deals in used phones and JazzCash and EasyPaisa. Stock, fast sales, credit (udhaar) with WhatsApp reminders, printable invoices, wallet operations, expenses, and cash sessions, all reconciled through one live cash ledger. Public showcase page converts visitors to WhatsApp.",
    github: "https://github.com/irazaahmed/hafeez-communication",
    live: "https://hafeez-communication.vercel.app/",
  },
  {
    name: "AR Bank Limited - Banking Management System",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    description:
      "A full-stack banking simulator: signup with a welcome bonus, instant peer-to-peer transfers, transaction history, and an admin panel showing total bank balance and every transaction system-wide. Built with Next.js Server Actions on a live Postgres database.",
    github: "https://github.com/irazaahmed/bank-management-system",
    live: "https://ar-bank-management-system.vercel.app/",
  },
  {
    name: "LinkedIn Autonomous Agent",
    tech: ["Playwright", "Python", "Groq"],
    description:
      "Autonomous Playwright agent that reacts to LinkedIn posts and writes persona-matched comments via an LLM, with relevance filtering and verified posting.",
    github: "https://github.com/irazaahmed/linkedin-autonomous-agent",
    live: "https://raw.githubusercontent.com/irazaahmed/linkedin-autonomous-agent/main/demo/agent_demo.webm",
  },
  {
    name: "Physical AI and Humanoid Robotics",
    tech: ["Python", "AI/ML Frameworks", "Robotics Integration"],
    description:
      "Explored physical AI concepts and humanoid robotics, implementing intelligent control and decision-making in robotic platforms.",
    github: "https://github.com/irazaahmed/physical-ai-humanoid-robotics",
    live: "https://physical-ai-humanoid-robotics-ar.netlify.app/",
  },
  {
    name: "Nike E-Commerce Platform",
    tech: ["Next.js", "TypeScript", "Sanity CMS", "Tailwind CSS"],
    description:
      "Full e-commerce storefront with Sanity CMS product management, dynamic routing, and cart functionality.",
    github: "https://github.com/irazaahmed/NextJSQ2-hackathon",
    live: "https://nike-ecommerce-project.vercel.app/",
  },
  {
    name: "Saylani Impact Portal",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    description:
      "Web portal tracking and showcasing social impact metrics for Saylani Welfare with data visualization dashboards.",
    github: "https://github.com/irazaahmed/saylami-impact-portal",
    live: "https://impact-portal-saylani.netlify.app/",
  },
  {
    name: "Multiuser ToDo Application",
    tech: ["Next.js", "TypeScript", "FastAPI", "Python"],
    description:
      "Full-stack multiuser task management app with real-time collaboration, user authentication, and persistent storage.",
    github: "https://github.com/irazaahmed/multiple-user-todo-app",
  },
  {
    name: "InfoNest Blogs",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "Blog platform where I write and publish my own articles, with category filtering, dynamic post rendering, and a clean, fast reading experience.",
    github: "https://github.com/irazaahmed/InfoNest-Blogs",
    live: "https://infonest-blogs.vercel.app/",
  },
];

export type Prompt = {
  id: string;
  title: string;
  /** Path to the generated result image, e.g. "/prompts/my-image.jpg" */
  image: string;
  /** The exact prompt used to generate the result */
  prompt: string;
};

// 👇 ADD YOUR PROMPTS HERE.
// 1) Put your image file in:  public/prompts/   (e.g. public/prompts/my-art.jpg)
// 2) Copy one block below, paste it inside the [ ], and fill in your details.
//
//   {
//     id: "my-art",                       // koi bhi unique naam (no spaces)
//     title: "Card ka title",             // card pe dikhega
//     image: "/prompts/my-art.jpg",       // public/prompts/ wali file ka naam
//     prompt: `Yahan apna pura prompt likho...`,  // hamesha backtick me
//   },
//
export const prompts: Prompt[] = [
  {
    id: "image-in-text",
    title: "Image in Text Prompting",
    image: "/prompts/pic-in-text.jpg",
    prompt:"Create a luxury editorial name collage using the uploaded reference photo as the likeness guide. Spell the name: [Ahmed Raza] Use large, bold, clean block letters centered on a black background. Make the letters photo-filled cutouts with a glowing deep orange and gold outline. The background should be black-on-black with subtle velvet, satin, smoke, or soft spotlight texture. Use the person’s likeness consistently across every portrait: face shape, skin tone, hairstyle, eyewear if present, signature features, expression, and overall presence. Do not copy the exact reference photo. Create elevated editorial versions of the person.Inside the letters, create fewer but stronger portraits. Include a mix of close-up cinematic portraits, seated leadership poses, side-profile portraits, standing full-body fashion poses, lifestyle branding shots, TEDx-style keynote speaker moments, AI strategist workspace scenes, and luxury personal brand imagery.Style direction: magazine cover meets luxury personal brand campaign. Professional stylist.Professional grooming. Polished luxury editorial styling. Flawless skin texture. Defined eyes. Natural confidence. Premium wardrobe. Cinematic lighting. Editorial depth. Sharp high-resolution finish.Wardrobe palette: [black, deep orange & gold] Expression direction: calm confidence, visionary energy, modern founder presence, powerful but approachable, quiet authority.Make the center letter the hero portrait with one strong close-up image. Let each letter represent a different side of the person, such as leader, creator, strategist, visionary, speaker, mentor, founder, or AI innovator."
  },
  {
    id: "insta-view",
    title: "Instagram View Prompting",
    image: "/prompts/insta-view.jpg",
    prompt: `Create a hyper-realistic premium futuristic founder portrait using the uploaded photo. Preserve the EXACT facial identity - face structure, hairstyle, skin texture, beard, glasses, and overall likeness from Ahmed Raza's uploaded portrait. Do NOT alter, beautify, replace, or redesign the face; maintain 100% facial identity accuracy (non-negotiable). Output exactly 1080x1350 px (4:5 portrait for LinkedIn) or 1080x1080 px (1:1 square for WhatsApp/Facebook/Instagram).

Subject - Ahmed Raza (Founder & Agentic AI Developer). Use the uploaded portrait as the exact reference; keep his glasses, beard, hairstyle, skin tone and baseline expression; photorealistic skin texture with natural pores; a subtle, genuine, confident smile (not exaggerated); direct eye contact; approachable yet authoritative energy. Pose: sitting elegantly on a sleek floating dark platform with a subtle copper edge glow; natural masculine posture - shoulders back, chin slightly up, one hand resting thoughtfully, the other casually placed; founder-grade authority, executive thought-leader (not influencer). Outfit: premium black tailored modern kurta or black turtleneck, optional dark charcoal blazer or overcoat with subtle copper-tone details, premium black trousers and polished leather shoes, optional minimalist watch with a copper accent - Tim Cook meets traditional Pakistani elegance; masculine, founder energy.

Background - a holographic AI workspace. A giant curved holographic interface behind and beside him shows his AI work in copper-orange (#E97A2C) and dim white: LinkedIn profile with engagement metrics, a WhatsApp Business dashboard, agentic AI workflow diagrams with connected nodes, a subtly blurred Next.js/Python code editor, a Quranic translation pipeline, and copper analytics charts. Floating elements around the scene: glowing AI nodes connected by thin copper lines, stylized copper outline icons (reports, chats, charts - not emoji), floating Arabic/Urdu/English translation fragments, holographic engagement numbers, small API/automation indicators, and subtle pulsing live dots - all copper-orange outlines, semi-transparent (about 60%), with soft glow halos. Keep the futuristic dark UI integrated into the environment.

Lighting and atmosphere: pure deep black base (#000000); a soft warm copper-orange key light from above-left on his face and shoulders (#E97A2C to #FFB347); counter-glow from the displays on the right (#D97426 rim light); a subtle backlight halo around his silhouette. Add soft volumetric copper light beams, warm golden particles drifting upward, copper bokeh in the deep background, very subtle warm fog, a reflective floor with soft copper bounce, a gentle corner vignette, and slight cinematic film grain. Absolutely NO electric blue, cyan, pink, purple, green, or bright-white tech lighting - copper-orange warm tones only.

Top-left branding block (compact): a second small circular profile photo of Ahmed Raza, perfect 1:1 circular crop, thin glowing copper-orange ring (#E97A2C, 2-3px) with a soft outer halo, about 70-80px diameter, about 40px from the top and left. To its right, two stacked lines - line 1 bold white 'Ahmed Raza', line 2 smaller copper 'Agentic AI Developer | Team Lead Translation'.

Hero typography overlay (optional, upper-right): three lines - 'BUILDING THE', 'FUTURE' (dominant), 'WITH AI'. 'FUTURE' in a massive bold display serif, copper-orange (#E97A2C) with a strong glow halo (#FFB347), large but not competing with the subject, with a 3D embossed feel; the other two lines in a modern sans-serif, soft white, uppercase and letter-spaced, smaller than 'FUTURE'.

Bottom contact strip (mandatory): a thin copper-orange divider line (#D97426, 1px, about 70% width, centered, soft glow), then a single centered row about 40px from the bottom - a stylized copper-orange WhatsApp speech-bubble outline (about 22-24px, not the exact green logo) followed by '+92 313 0221118' in soft white bold sans-serif (about 16-18px). Do NOT add a company name, tagline, philosophy, website, or social handles, and no emojis anywhere.

Color palette (strict - copper-orange and black only): pure black #000000, warm orange #E97A2C, copper #D97426, soft white #FFFFFF, bright glow #FFB347, subtle gold #C9A227, deep dark warm #1A0F08, charcoal #2A2520.

Style: hyper-realistic photographic founder portrait, cinematic dark premium mode - Apple keynote campaign meets Tesla CEO portrait meets premium tech magazine cover; 8K ultra-detailed, 85mm lens depth of field, glossy reflective surfaces, award-winning commercial advertising quality, magazine-cover grade, executive/founder aesthetic (not influencer), with subtle film grain.

Technical specs: 85mm lens, shallow depth of field (subject sharp, background softly defocused with bokeh), three-point lighting, professional commercial photography quality, ultra-HD rendering, preserved photorealistic skin texture, realistic shadows matching the light direction, hyper-detailed fabric textures, and a soft reflective glow on the glasses that does not block the eyes.

Negative prompt (do NOT include): a different or altered face or face-swap errors, AI face replacement, beauty filter or plastic over-retouched skin, female or feminine features, sneakers or casual streetwear, generic influencer poses, floating hearts or romance elements, cartoon/anime/CGI plastic looks, distorted features or bad anatomy, extra fingers or deformed hands, artificial mannequin expressions, blurry low-resolution faces, oversaturated bright colors, real Instagram/LinkedIn screenshots (use abstract holographic UI), exact brand logos (stylized only), cropped body or weird framing, a wrong aspect ratio, removing the top-left branding block or the bottom WhatsApp strip, adding a company name/tagline/philosophy text, any emoji, any @username tags or external watermarks, and bright backgrounds.`
  }
];

export type SkillCategory = {
  category: string;
  skills: string[];
};

export const skills: SkillCategory[] = [
  {
    category: "AI & Agents",
    skills: [
      "LangGraph",
      "CrewAI",
      "n8n",
      "Claude API",
      "Agentic AI",
      "Multi-agent Systems",
    ],
  },
  {
    category: "AI / ML",
    skills: ["LLMs", "Prompt Engineering", "RAG", "Generative AI", "Google Colab"],
  },
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Python", "FastAPI", "REST APIs"],
  },
  {
    category: "Tools",
    skills: ["GitHub", "VS Code", "MS Office", "Sanity CMS", "Dialogflow", "FlowiseAI"],
  },
  {
    category: "Languages",
    skills: ["Urdu (Native)", "Arabic (Fluent)", "English (Proficient)"],
  },
];

export type LanguageLevel = {
  name: string;
  level: string;
  value: number; // 0-100, for the proficiency bar
};

export const languageLevels: LanguageLevel[] = [
  { name: "Urdu", level: "Native", value: 100 },
  { name: "Arabic", level: "Fluent", value: 92 },
  { name: "English", level: "Proficient", value: 82 },
];

export const academicEducation: string[] = [
  "Hafiz-e-Quran - Memorization of the Complete Holy Quran",
  "Matriculation (Computer Science) - Board of Secondary Education, Karachi",
  "Masters in Arabic & Islamiat (Shahadat Ul Almiyah) - Tanzeem-ul-Madaris, Pakistan",
  "Equivalence: Masters in Arabic & Islamiat - University of Karachi",
  "Specialization in Jurisprudence (Takhassus Fil Fiqh) - Jamia-Tul-Madina, Karachi",
];

export const certifications: string[] = [
  "Cloud Computing and Agentic AI - GIAIC (Governor Initiative for AI & Computing)",
  "Generative AI and Chatbot Development - SMIT",
  "Modern Web Application Development - SMIT",
  "MOS - Microsoft Office Specialist - SMIT",
  "3D Visualization with 3Ds Max 2017 - SMIT",
  "Teaching Methodology Course - Jamia-Tul-Madina, Karachi",
  "JavaScript Essentials 1 - Cisco Networking Academy",
];

export type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon: "whatsapp" | "email" | "linkedin" | "github";
};

export const contacts: ContactLink[] = [
  {
    label: "WhatsApp",
    value: "+92 313 0221118",
    href: "https://wa.me/923130221118",
    icon: "whatsapp",
  },
  {
    label: "Email",
    value: "hafizahmedraza12345@gmail.com",
    href: "mailto:hafizahmedraza12345@gmail.com",
    icon: "email",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/irazaahmed",
    href: "https://linkedin.com/in/irazaahmed",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    value: "github.com/irazaahmed",
    href: "https://github.com/irazaahmed",
    icon: "github",
  },
];

export type Faq = {
  question: string;
  answer: string;
};

/**
 * FAQ content - surfaced on /faq and emitted as FAQPage structured data.
 * Written in a direct, factual, entity-rich style so AI search engines
 * (Google AI Overviews, Gemini, Perplexity, ChatGPT) can quote it when
 * users ask about "Ahmed Raza", "Ahmed Raza AI", or "Agentic AI Developer".
 */
export const faqs: Faq[] = [
  {
    question: "Who is Ahmed Raza?",
    answer:
      "Ahmed Raza is an active Islamic Scholar and Agentic AI Developer based in Karachi, Pakistan. He has 8+ years of experience as an Asst. Shariah Advisor and is currently Team Lead Translation at Dawat-e-Islami's Translation Department (شعبہ تراجم), leading a 33-language Quranic content translation pipeline. He is also the Founder of Cybrum Solutions, where he builds AI-driven solutions, and a full-stack developer. His mission is to combine Islam with technology to make authentic Islamic knowledge accessible, easy, and engaging for everyone.",
  },
  {
    question: "Is Ahmed Raza an Agentic AI Developer?",
    answer:
      "Yes. Ahmed Raza is an Agentic AI Developer and the Founder of Cybrum Solutions, where he builds and productizes AI automation for Islamic publishers, educational institutions, and Pakistani SMEs. He works hands-on with agentic AI systems, multi-agent workflows, LLM integration, RAG pipelines, and full-stack development using tools such as LangGraph, CrewAI, n8n, and the Claude API.",
  },
  {
    question: "What AI solutions and services does Ahmed Raza offer?",
    answer:
      "Through Cybrum Solutions, Ahmed Raza offers WhatsApp business chatbots, CRM and workflow automation, multi-agent AI systems, LLM and RAG integrations, and full-stack web applications built with Next.js, TypeScript, Python, and FastAPI. He specialises in practical, production-ready AI automation tailored for businesses and Islamic organisations across Pakistan.",
  },
  {
    question: "What does Ahmed Raza do at Dawat-e-Islami?",
    answer:
      "Ahmed Raza is Team Lead Translation at Dawat-e-Islami's Translation Department (شعبہ تراجم). He leads a multilingual Quranic content translation operation across 33 target languages using a structured relay chain (Arabic → Urdu → English → 33 languages), managing translator teams, setting quality benchmarks, and enforcing Islamic scholarly standards across all language outputs.",
  },
  {
    question: "What is Ahmed Raza's experience as an Islamic Scholar?",
    answer:
      "Ahmed Raza is a Hafiz-e-Quran with a Masters in Arabic & Islamiat (Shahadat Ul Almiyah) and a Specialization in Jurisprudence (Takhassus Fil Fiqh). He has 8+ years of experience as an Asst. Shariah Advisor (معاون شرعی مشیر) at Dar-ul-Madinah International Islamic School System, alongside years of teaching the Dars-e-Nizami Scholars Course. He remains an active Islamic Scholar to this day.",
  },
  {
    question: "What technologies and skills does Ahmed Raza work with?",
    answer:
      "Ahmed Raza works with Agentic AI, multi-agent systems, LLMs, prompt engineering, RAG, and generative AI, using tools like LangGraph, CrewAI, n8n, and the Claude API. On the development side he uses Next.js, React, TypeScript, Tailwind CSS, Python, and FastAPI. He is fluent in Urdu (native), Arabic, and English.",
  },
  {
    question: "Can I hire Ahmed Raza or Cybrum Solutions for an AI project?",
    answer:
      "Yes. Ahmed Raza takes on AI automation and development projects through Cybrum Solutions. You can reach him on WhatsApp at +92 313 0221118, by email at hafizahmedraza12345@gmail.com, or via LinkedIn at linkedin.com/in/irazaahmed to discuss AI solutions, chatbots, automation, or full-stack development.",
  },
  {
    question: "How can I contact Ahmed Raza?",
    answer:
      "You can contact Ahmed Raza on WhatsApp at +92 313 0221118, by email at hafizahmedraza12345@gmail.com, on LinkedIn at linkedin.com/in/irazaahmed, or on GitHub at github.com/irazaahmed.",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;
