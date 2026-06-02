import type { Metadata } from "next";
import { siteUrl, faqs } from "@/data/portfolio";
import BlogHeader from "@/components/BlogHeader";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const title = "FAQ - Who is Ahmed Raza? | AI Solutions Expert";
const description =
  "Answers to common questions about Ahmed Raza - Islamic Scholar, AI Solutions Expert, Founder of Cybrum Solutions, and Team Lead Translation at Dawat-e-Islami.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/faq" },
  openGraph: { title, description, url: `${siteUrl}/faq`, type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

/** FAQPage structured data - lets AI engines quote these answers directly. */
function FaqJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteUrl}/faq#faqpage`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function FaqPage() {
  return (
    <>
      <FaqJsonLd />
      <BlogHeader />
      <main
        id="main"
        className="relative z-10 mx-auto max-w-3xl px-5 pb-24 pt-28 sm:px-6 sm:pt-32"
      >
        <Reveal>
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.25em] text-copper">
            Frequently Asked Questions
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-fg sm:text-5xl">
            About Ahmed Raza
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            Quick answers about Ahmed Raza - Islamic Scholar, AI Solutions
            Expert, Founder of Cybrum Solutions, and Team Lead Translation at
            Dawat-e-Islami.
          </p>
        </Reveal>

        <div className="mt-12 space-y-5">
          {faqs.map((f, i) => (
            <Reveal key={f.question} delay={(i % 4) * 0.06}>
              <article className="rounded-2xl border border-border bg-bg-soft/60 p-6 transition-colors [@media(hover:hover)]:hover:border-copper/40">
                <h2 className="text-lg font-semibold text-fg">{f.question}</h2>
                <p className="mt-3 leading-relaxed text-muted">{f.answer}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
