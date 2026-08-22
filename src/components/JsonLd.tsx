import { certifications, contacts, profile, siteUrl } from "@/data/portfolio";

/**
 * Site-wide structured data (schema.org) as a single @graph so search and
 * AI engines (Google AI Overviews, Gemini, Perplexity) can resolve Ahmed Raza
 * as a clear, well-described entity. Includes Person, WebSite and ProfilePage.
 */
export default function JsonLd() {
  const sameAs = contacts
    .filter((c) => c.icon === "linkedin" || c.icon === "github")
    .map((c) => c.href);

  const personId = `${siteUrl}/#person`;

  const person = {
    "@type": "Person",
    "@id": personId,
    name: profile.name,
    alternateName: ["Hafiz Ahmed Raza", "Ahmed Raza AI"],
    url: siteUrl,
    image: `${siteUrl}${profile.photo}`,
    jobTitle: [
      "Agentic AI Engineer",
      "Team Lead Translation",
      "Islamic Scholar",
      "Full Stack Developer",
    ],
    description: profile.summary,
    email: contacts.find((c) => c.icon === "email")?.value,
    telephone: contacts.find((c) => c.icon === "whatsapp")?.value,
    sameAs,
    nationality: { "@type": "Country", name: "Pakistan" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Karachi",
      addressCountry: "PK",
    },
    knowsLanguage: ["Urdu", "Arabic", "English"],
    knowsAbout: [
      "Artificial Intelligence",
      "Agentic AI",
      "Multi-agent Systems",
      "Large Language Models (LLMs)",
      "Prompt Engineering",
      "Retrieval-Augmented Generation (RAG)",
      "Generative AI",
      "AI Automation",
      "WhatsApp Chatbots",
      "Full-Stack Web Development",
      "Next.js",
      "Python",
      "FastAPI",
      "Islamic Jurisprudence (Fiqh)",
      "Shariah Advisory",
      "Quranic Translation",
      "Arabic Language",
    ],
    hasOccupation: [
      {
        "@type": "Occupation",
        name: "Agentic AI Engineer",
        occupationalCategory: "15-2051.00 Data Scientists / AI Specialists",
      },
      {
        "@type": "Occupation",
        name: "Team Lead Translation",
        occupationalCategory: "27-3091.00 Interpreters and Translators",
      },
      {
        "@type": "Occupation",
        name: "Islamic Scholar",
      },
    ],
    worksFor: [
      {
        "@type": "Organization",
        name: "Dawat-e-Islami",
        department: { "@type": "Organization", name: "Translation Department (شعبہ تراجم)" },
      },
      {
        "@type": "Organization",
        name: "Cybrum Solutions",
        description: "AI solutions and automation studio founded by Ahmed Raza.",
      },
    ],
    alumniOf: [
      { "@type": "EducationalOrganization", name: "University of Karachi" },
      { "@type": "EducationalOrganization", name: "Tanzeem-ul-Madaris, Pakistan" },
      { "@type": "EducationalOrganization", name: "Jamia-Tul-Madina, Karachi" },
    ],
    hasCredential: certifications.map((c) => ({
      "@type": "EducationalOccupationalCredential",
      name: c,
    })),
  };

  const website = {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "Ahmed Raza - Agentic AI Engineer",
    description:
      "Portfolio of Ahmed Raza, an Islamic Scholar and Agentic AI Engineer bridging authentic Islamic knowledge with cutting-edge AI technology.",
    publisher: { "@id": personId },
    inLanguage: "en",
  };

  const profilePage = {
    "@type": "ProfilePage",
    "@id": `${siteUrl}/#profilepage`,
    url: siteUrl,
    name: "Ahmed Raza - Agentic AI Engineer & Islamic Scholar",
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": personId },
    mainEntity: { "@id": personId },
    inLanguage: "en",
  };

  const data = {
    "@context": "https://schema.org",
    "@graph": [person, website, profilePage],
  };

  return (
    <script
      type="application/ld+json"
      // JSON-LD must be injected as raw text
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
