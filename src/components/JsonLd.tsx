import { contacts, profile, siteUrl } from "@/data/portfolio";

/** Person structured data (schema.org) for rich search results. */
export default function JsonLd() {
  const sameAs = contacts
    .filter((c) => c.icon === "linkedin" || c.icon === "github")
    .map((c) => c.href);

  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: siteUrl,
    image: `${siteUrl}${profile.photo}`,
    jobTitle: "Team Lead Translation & AI Solutions Expert",
    description: profile.summary,
    email: contacts.find((c) => c.icon === "email")?.value,
    sameAs,
    knowsLanguage: ["Urdu", "Arabic", "English"],
    worksFor: [
      { "@type": "Organization", name: "Dawat-e-Islami" },
      { "@type": "Organization", name: "Cybrum Solutions" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // JSON-LD must be injected as raw text
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
