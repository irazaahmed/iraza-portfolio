/**
 * Single source of truth for all portfolio content.
 * Update values here to change what renders across the site.
 */

/** Public site URL — override via NEXT_PUBLIC_SITE_URL when deploying. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://irazaahmed.me";

export const profile = {
  name: "Ahmed Raza",
  roles: [
    "Islamic Scholar",
    "Team Lead Translation",
    "AI Solutions Expert",
    "Full Stack Developer",
  ],
  tagline: "Bridging authentic Islamic knowledge with cutting-edge AI technology",
  summary:
    "Multidisciplinary professional combining deep Islamic scholarship with hands-on expertise in AI engineering and automation. Currently leading a 33-language Quranic content translation pipeline at Dawat-e-Islami and building AI-driven solutions at Cybrum Solutions. Brings 8+ years of experience in Shariah advisory, Islamic academia, and institutional management, alongside proficiency in agentic AI systems, multi-agent workflows, full-stack development, and LLM integration.",
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
    title: "Team Lead — Translation Department",
    org: "Dawat-e-Islami",
    period: "Jan 2026 – Present",
    description:
      "Leading a multilingual Quranic content translation operation across 33 target languages using a structured relay chain (Arabic → Urdu → English → 33 languages). Managing translator teams, setting quality benchmarks, and enforcing Islamic scholarly standards across all language outputs, while overseeing the complete workflow from translation to publishing.",
  },
  {
    title: "Founder & AI Solutions Expert",
    org: "Cybrum Solutions",
    period: "Nov 2025 – Present",
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
    period: "Aug 2017 – Jan 2026 · 8.5 Years",
    points: [
      "Served in the Shariah and Tafteesh (Inspection) Department, overseeing compliance with Islamic law and institutional standards.",
      "Conducted Shariah audits, prepared legal opinions, and advised management on jurisprudential matters.",
    ],
  },
  {
    title: "Secretariat Incharge",
    org: "Dar-ul-Madinah International Islamic School System",
    period: "Jan 2022 – Sep 2023",
    points: [
      "Managed secretariat operations, official correspondence, and administrative coordination for the school system.",
      "Streamlined documentation workflows and maintained institutional records across departments.",
    ],
  },
  {
    title: "Teacher of Scholars Course",
    org: "Jamia Noor Ul Quran, Karachi",
    period: "Sep 2022 – Apr 2024",
    points: [
      "Delivered advanced Dars-e-Nizami curriculum to students enrolled in the Scholars Course.",
      "Focused on Arabic language, Islamic jurisprudence, and classical Islamic texts.",
    ],
  },
  {
    title: "Teacher of Scholars Course",
    org: "Al Miftah Scholars Academy, Karachi",
    period: "Nov 2014 – Aug 2022 · 7+ Years",
    points: [
      "Taught Dars-e-Nizami subjects over 7+ years with consistent academic outcomes.",
      "Mentored students in Arabic grammar, Fiqh, Hadith, and Tafseer disciplines.",
    ],
  },
  {
    title: "Online Quran & Dars-e-Nizami Teacher",
    org: "Independent / Remote",
    period: "Jan 2017 – Dec 2020",
    points: [
      "Delivered one-on-one and group online sessions for Quran recitation and Dars-e-Nizami subjects.",
      "Taught students across multiple countries, adapting instruction to individual learning levels.",
    ],
  },
  {
    title: "Class Teacher — Nazrah Quran",
    org: "Islamic Institution, Karachi",
    period: "Jun 2015 – Jul 2017",
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
};

export const projects: Project[] = [
  {
    name: "Quran Translation Management System",
    tech: ["Next.js", "Supabase", "Vercel"],
    description:
      "Full-stack web app managing the end-to-end Quranic content translation workflow across 33 languages. Next.js frontend, Supabase backend database, deployed on Vercel for distributed translation teams.",
    github: "https://github.com/irazaahmed/quranic-translation-management-system",
  },
  {
    name: "Physical AI and Humanoid Robotics",
    tech: ["Python", "AI/ML Frameworks", "Robotics Integration"],
    description:
      "Explored physical AI concepts and humanoid robotics, implementing intelligent control and decision-making in robotic platforms.",
    github: "https://github.com/irazaahmed/physical-ai-humanoid-robotics",
  },
  {
    name: "Multiuser ToDo Application",
    tech: ["Next.js", "TypeScript", "FastAPI", "Python"],
    description:
      "Full-stack multiuser task management app with real-time collaboration, user authentication, and persistent storage.",
    github: "https://github.com/irazaahmed/multiple-user-todo-app",
  },
  {
    name: "Saylani Impact Portal",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    description:
      "Web portal tracking and showcasing social impact metrics for Saylani Welfare with data visualization dashboards.",
    github: "https://github.com/irazaahmed/saylami-impact-portal",
  },
  {
    name: "Nike E-Commerce Platform",
    tech: ["Next.js", "TypeScript", "Sanity CMS", "Tailwind CSS"],
    description:
      "Full e-commerce storefront with Sanity CMS product management, dynamic routing, and cart functionality.",
    github: "https://github.com/irazaahmed/NextJSQ2-hackathon",
  },
  {
    name: "SMIT Virtual Assistant",
    tech: ["Dialogflow", "FlowiseAI", "Node.js"],
    description:
      "Conversational AI assistant for SMIT handling student queries via intent-based and LLM-powered flows.",
    github: "https://github.com/irazaahmed/AI-Hackathon",
  },
  {
    name: "InfoNest Blog Platform",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    description:
      "Content-rich blog platform with category filtering, dynamic post rendering, and SEO optimization.",
    github: "https://github.com/irazaahmed/InfoNest-Blogs",
  },
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
  value: number; // 0–100, for the proficiency bar
};

export const languageLevels: LanguageLevel[] = [
  { name: "Urdu", level: "Native", value: 100 },
  { name: "Arabic", level: "Fluent", value: 92 },
  { name: "English", level: "Proficient", value: 82 },
];

export const academicEducation: string[] = [
  "Hafiz-e-Quran — Memorization of the Complete Holy Quran",
  "Matriculation (Computer Science) — Board of Secondary Education, Karachi",
  "Masters in Arabic & Islamiat (Shahadat Ul Almiyah) — Tanzeem-ul-Madaris, Pakistan",
  "Equivalence: Masters in Arabic & Islamiat — University of Karachi",
  "Specialization in Jurisprudence (Takhassus Fil Fiqh) — Jamia-Tul-Madina, Karachi",
];

export const certifications: string[] = [
  "Cloud Computing and Agentic AI — GIAIC (Governor Initiative for AI & Computing)",
  "Generative AI and Chatbot Development — SMIT",
  "Modern Web Application Development — SMIT",
  "MOS — Microsoft Office Specialist — SMIT",
  "3D Visualization with 3Ds Max 2017 — SMIT",
  "Teaching Methodology Course — Jamia-Tul-Madina, Karachi",
  "JavaScript Essentials 1 — Cisco Networking Academy",
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

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;
