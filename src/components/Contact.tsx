import { FaWhatsapp, FaEnvelope, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { contacts } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const iconMap = {
  whatsapp: FaWhatsapp,
  email: FaEnvelope,
  linkedin: FaLinkedinIn,
  github: FaGithub,
} as const;

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-3xl px-6 py-16 sm:py-24 text-center">
      <div className="flex flex-col items-center">
        <SectionHeading eyebrow="Get In Touch" title="Contact" />
      </div>

      <Reveal>
        <p className="mx-auto -mt-6 mb-10 max-w-xl text-muted">
          Open to collaborations in AI engineering, Islamic content technology, and
          full-stack projects. Reach out through any channel below.
        </p>
      </Reveal>

      <div className="mx-auto grid max-w-xl gap-4 sm:grid-cols-2">
        {contacts.map((c, i) => {
          const Icon = iconMap[c.icon];
          return (
            <Reveal key={c.label} delay={i * 0.08}>
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-border bg-bg-soft/50 px-5 py-4 text-left transition-all duration-300 hover:border-copper/50 hover:glow-copper"
              >
                <span className="inline-flex rounded-lg bg-copper/10 p-3 text-copper transition-colors group-hover:bg-copper/20">
                  <Icon size={20} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-wider text-muted">
                    {c.label}
                  </span>
                  <span className="block truncate font-medium text-fg underline-offset-4 group-hover:text-copper group-hover:underline">
                    {c.value}
                  </span>
                </span>
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
