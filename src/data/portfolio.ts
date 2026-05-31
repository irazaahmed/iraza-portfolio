/**
 * Single source of truth for all portfolio content.
 * Update values here to change what renders across the site.
 */

/** Public site URL — override via NEXT_PUBLIC_SITE_URL when deploying. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.irazaahmed.me";

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
    "Active Islamic Scholar with 8+ years as an Asst. Shariah Advisor, simultaneously learning and applying modern technology — with the mission of combining Islam with tech to make authentic Islamic knowledge accessible, easy, and engaging for everyone. Currently Team Lead Translation at Dawat-e-Islami's Translation Department (شعبہ تراجم), leading a 33-language Quranic content translation pipeline, and Founder of Cybrum Solutions building AI-driven solutions across Pakistan. Brings deep grounding in Shariah advisory, jurisprudence, and Islamic academia, alongside hands-on proficiency in agentic AI systems, multi-agent workflows, full-stack development, and LLM integration.",
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
    org: "Dawat-e-Islami — Translation Department (شعبہ تراجم)",
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

export type Prompt = {
  id: string;
  title: string;
  /** Path to the generated result image, e.g. "/prompts/my-image.jpg" */
  image: string;
  /** The exact prompt used to generate the result */
  prompt: string;
  /** The AI tool used — also used as the filter category */
  tool: string;
};

// 👇 ADD YOUR PROMPTS HERE.
// 1) Put your image file in:  public/prompts/   (e.g. public/prompts/my-art.jpg)
// 2) Copy one block below, paste it inside the [ ], and fill in your details.
//
//   {
//     id: "my-art",                       // koi bhi unique naam (no spaces)
//     title: "Card ka title",             // card pe dikhega
//     image: "/prompts/my-art.jpg",       // public/prompts/ wali file ka naam
//     tool: "Midjourney",                 // jis tool se banaya (chhote pill me aata hai)
//     prompt: "Yahan apna pura prompt likho...",
//   },
//
export const prompts: Prompt[] = [
  {
    id: "image-in-text",
    title: "Image in Text Prompting",
    image: "/prompts/pic-in-text.jpg",
    tool: "ChatGPT",
    prompt:"Create a luxury editorial name collage using the uploaded reference photo as the likeness guide. Spell the name: [Ahmed Raza] Use large, bold, clean block letters centered on a black background. Make the letters photo-filled cutouts with a glowing deep orange and gold outline. The background should be black-on-black with subtle velvet, satin, smoke, or soft spotlight texture. Use the person’s likeness consistently across every portrait: face shape, skin tone, hairstyle, eyewear if present, signature features, expression, and overall presence. Do not copy the exact reference photo. Create elevated editorial versions of the person.Inside the letters, create fewer but stronger portraits. Include a mix of close-up cinematic portraits, seated leadership poses, side-profile portraits, standing full-body fashion poses, lifestyle branding shots, TEDx-style keynote speaker moments, AI strategist workspace scenes, and luxury personal brand imagery.Style direction: magazine cover meets luxury personal brand campaign. Professional stylist.Professional grooming. Polished luxury editorial styling. Flawless skin texture. Defined eyes. Natural confidence. Premium wardrobe. Cinematic lighting. Editorial depth. Sharp high-resolution finish.Wardrobe palette: [black, deep orange & gold] Expression direction: calm confidence, visionary energy, modern founder presence, powerful but approachable, quiet authority.Make the center letter the hero portrait with one strong close-up image. Let each letter represent a different side of the person, such as leader, creator, strategist, visionary, speaker, mentor, founder, or AI innovator."
  },
  {
    id: "insta-vew",
    title: "Instagram View Prompting",
    image: "/prompts/insta-view.jpg",
    tool: "DALL·E",
    prompt: `Create a hyper-realistic premium futuristic founder portrait using
the uploaded man's photo. Preserve the EXACT facial identity, facial 
structure, hairstyle, skin texture, beard, glasses, facial features, 
and overall likeness from Ahmed Raza's uploaded portrait. Do NOT 
alter, beautify, replace, or redesign the face. Maintain 100% facial 
identity accuracy — this is non-negotiable.

⚠️ STRICT DIMENSION LOCK: Output must be exactly 1080 × 1350 pixels 
(4:5 portrait ratio for LinkedIn) OR 1080 × 1080 pixels (1:1 square 
for WhatsApp/Facebook/Instagram). Verify exact aspect ratio.

═══════════════════════════════════════════════════════════════
SUBJECT — AHMED RAZA (Founder & AI Solutions Expert)
═══════════════════════════════════════════════════════════════

▸ FACIAL IDENTITY (preserve 100%):
  • Use uploaded portrait photo as exact reference
  • Maintain his glasses, beard, hairstyle, skin tone, expression 
    baseline
  • Do not "beautify", smooth, or replace any feature
  • Render with photorealistic skin texture and natural pores
  • Subtle confident genuine smile, NOT exaggerated
  • Direct confident eye contact with viewer
  • Approachable yet authoritative energy

▸ POSE & POSTURE:
  • Sitting elegantly and confidently on a sleek floating dark 
    platform with subtle copper edge glow
  • Natural masculine posture: shoulders back, chin slightly up, 
    one hand resting thoughtfully (chin or knee), the other 
    casually placed
  • Confident, composed, founder-grade authority
  • NOT influencer pose — executive thought-leader vibe
  • Cinematic gravitas, like a senior tech CEO portrait

▸ OUTFIT (Premium Founder Aesthetic):
  • Premium black tailored modern kurta (refined cut, slightly 
    structured) OR black premium turtleneck (founder-classic)
  • Optional: dark charcoal blazer or fitted overcoat layered on top 
    (refined, subtle copper-tone metallic buttons or piping)
  • Premium black trousers (well-fitted, modern cut)
  • Premium black leather shoes (refined, polished — NOT sneakers)
  • Optional refined accessories: minimalist watch with copper-tone 
    accent (subtle, not flashy)
  • Overall vibe: Tim Cook meets traditional Pakistani elegance — 
    premium, modern, culturally rooted, authoritative

⚠️ MASCULINE + FOUNDER ENERGY — NOT feminine, NOT influencer-style.

═══════════════════════════════════════════════════════════════
BACKGROUND — HOLOGRAPHIC AI WORKSPACE
═══════════════════════════════════════════════════════════════

▸ MAIN HOLOGRAPHIC DISPLAY (behind/beside Ahmed):
  • Giant curved holographic interface showing his AI work
  • Display elements (all in copper-orange #E97A2C + dim white):
    - LinkedIn profile preview with engagement metrics
    - WhatsApp Business dashboard with chat threads
    - Agentic AI workflow diagrams (connected nodes, copper lines)
    - Code editor showing Next.js/Python (subtle, blurred)
    - Quranic Translation pipeline visualization
    - Analytics dashboards (growth charts in copper)
    - Notification badges and engagement counters
  • Interface style: futuristic dark UI with copper accents (NOT 
    bright blue/white tech aesthetic)
  • Seamlessly integrated into the dark environment

▸ FLOATING HOLOGRAPHIC ELEMENTS (around scene):
  • Glowing agentic AI nodes connected by thin copper lines
  • Floating workflow icons (📊 reports, 💬 chats, 📈 charts) — 
    but rendered as STYLIZED COPPER OUTLINE ICONS, not actual emoji
  • Translation/language flow indicators (Arabic, Urdu, English 
    text fragments floating, copper-orange)
  • LinkedIn-style engagement metrics (followers, post views, 
    impressions) as floating holographic numbers
  • Small copper-glowing API/automation visual indicators
  • Subtle "live" pulsing dots representing real-time activity
  • All floating elements: copper-orange #E97A2C outlines, 
    semi-transparent (~60% opacity), soft glow halos

═══════════════════════════════════════════════════════════════
LIGHTING & ATMOSPHERE
═══════════════════════════════════════════════════════════════

▸ PRIMARY LIGHTING:
  • Pure deep black ambient base (#000000)
  • Soft warm copper-orange key light from above-left, illuminating 
    Ahmed's face and shoulders (#E97A2C → #FFB347)
  • Counter-glow from holographic displays on the right side 
    (#D97426 rim light)
  • Subtle backlight creating soft halo around his silhouette

▸ ATMOSPHERIC ELEMENTS:
  • Soft volumetric copper light beams cutting through the space
  • Floating warm golden particles drifting upward (sense of 
    ideas/energy/data flowing)
  • Subtle bokeh lights in copper tones in the deep background
  • Atmospheric fog with warm copper undertone (very subtle)
  • Reflective floor surface with soft copper light bouncing
  • Soft vignette in all four corners
  • Slight cinematic film grain for premium feel

⚠️ ABSOLUTELY NO: Electric blue, cyan, pink, purple, green, or 
white-bright tech lighting. ONLY copper-orange warm tones.

═══════════════════════════════════════════════════════════════
TOP-LEFT BRANDING BLOCK (MANDATORY, COMPACT)
═══════════════════════════════════════════════════════════════
- A SECOND smaller circular profile photo of Ahmed Raza in top-left 
  corner (separate from main hero portrait)
- PERFECT CIRCULAR crop (1:1 mask)
- Thin glowing copper-orange ring border (#E97A2C, 2-3px)
- Soft outer copper halo glow
- Compact size (~70-80px diameter)
- Right of circle, two stacked sans-serif lines:
    Line 1 (bold white #FFFFFF): "Ahmed Raza"
    Line 2 (copper #E97A2C, smaller): 
    "AI Solutions Expert | Team Lead Translation"
- Padding: ~40px from top, ~40px from left

═══════════════════════════════════════════════════════════════
HERO TYPOGRAPHY OVERLAY (optional, on the right side)
═══════════════════════════════════════════════════════════════

▶ Subtle elegant text overlay on the upper-right area:

  Line 1:  "BUILDING THE"
  Line 2:  "FUTURE"   ← DOMINANT
  Line 3:  "WITH AI"

▸ LINE 2 "FUTURE":
  • Massive bold display serif (Playfair Display Black, Bodoni Bold)
  • Copper-orange #E97A2C with strong glow halo #FFB347
  • Size: large but doesn't compete with the subject
  • 3D dimensional embossed feel

▸ LINES 1 & 3:
  • Modern sans-serif (Inter Black, Poppins ExtraBold)
  • Soft white #FFFFFF
  • All uppercase, letter-spaced
  • Smaller than Line 2

═══════════════════════════════════════════════════════════════
BOTTOM CONTACT STRIP (MANDATORY)
═══════════════════════════════════════════════════════════════
- Thin copper-orange horizontal divider line (#D97426, 1px, 
  ~70% width, centered, soft glow)
- Single horizontal row, centered, ~40px from bottom edge:

  [WA icon]  +92 313 0221118

- WhatsApp icon: stylized speech bubble outline in copper-orange 
  #E97A2C, ~22-24px (NOT exact WhatsApp green logo)
- Phone number: "+92 313 0221118" in soft white #FFFFFF, modern 
  bold sans-serif, ~16-18px

⚠️ DO NOT add company name, tagline, philosophy, website, social 
handles.
⚠️ NO emojis anywhere.

═══════════════════════════════════════════════════════════════
COLOR PALETTE (strict — copper-orange + black ONLY)
═══════════════════════════════════════════════════════════════
- Pure black              #000000  (background, base)
- Warm orange             #E97A2C  (primary accent, holograms, 
                                    lighting, outlines)
- Copper                  #D97426  (secondary accent, deeper tones)
- Soft white              #FFFFFF  (text, name, subtle highlights)
- Bright glow              #FFB347  (key light, halos, "FUTURE" glow)
- Subtle gold             #C9A227  (premium metallic accent)
- Deep dark warm          #1A0F08  (atmospheric depth)
- Charcoal                #2A2520  (outfit blacks, depth)

═══════════════════════════════════════════════════════════════
STYLE
═══════════════════════════════════════════════════════════════
- Hyper-realistic photographic founder portrait
- Cinematic dark premium mode
- Apple keynote campaign meets Tesla CEO portrait meets premium 
  tech magazine cover
- 8K ultra-detailed, 85mm lens depth of field
- Glossy reflective surfaces
- Award-winning commercial advertising quality
- Magazine-cover grade
- Creator economy meets B2B SaaS founder aesthetic
- Subtle film grain for cinematic warmth
- NOT influencer aesthetic — executive/founder aesthetic

═══════════════════════════════════════════════════════════════
TECHNICAL SPECS
═══════════════════════════════════════════════════════════════
- 85mm lens, shallow depth of field (subject sharp, background 
  softly defocused with bokeh)
- Three-point lighting setup
- Professional commercial photography quality
- Ultra-HD resolution rendering
- Photorealistic skin texture preserved
- Realistic shadows matching light source direction
- Hyper-detailed fabric textures on outfit
- Soft reflective glow on glasses (subtle, not blocking eyes)

═══════════════════════════════════════════════════════════════
ABSOLUTE NEGATIVE PROMPT (DO NOT INCLUDE)
═══════════════════════════════════════════════════════════════
- ❌ Different face, altered identity, face swap errors
- ❌ AI-generated face replacement
- ❌ Beauty filter, over-retouched skin, plastic skin
- ❌ Female features, feminine elegance, female body proportions
- ❌ Sky-blue, electric blue, cyan, pink, purple, green, white tech 
   lighting
- ❌ Sneakers, denim jacket, casual streetwear
- ❌ Generic influencer pose, social media model pose
- ❌ Floating hearts, kissy emoji, romance elements
- ❌ Cartoon, anime, CGI plastic appearance
- ❌ Distorted facial features, elongated limbs, bad anatomy
- ❌ Extra fingers, duplicate elements, deformed hands
- ❌ Artificial smile, mannequin expression
- ❌ Blurry face, low resolution, low detail
- ❌ Oversaturated bright colors
- ❌ Real Instagram screenshots (use abstract holographic UI)
- ❌ Real LinkedIn screenshots (use abstract dashboard visuals)
- ❌ Exact WhatsApp/Adobe/LinkedIn logos (stylized only)
- ❌ Cropped body, weird framing
- ❌ Different aspect ratio (must be exactly 1080×1350 or 1080×1080)
- ❌ Removing top-left branding block
- ❌ Removing bottom WhatsApp strip
- ❌ Adding company name, tagline, philosophy text
- ❌ ANY emoji anywhere
- ❌ ANY @username tags or external watermarks
- ❌ Bright backgrounds`
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
  { label: "Prompts", href: "/prompts" },
  { label: "Skills", href: "#skills" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
] as const;
