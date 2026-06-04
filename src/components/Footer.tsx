import Link from "next/link";
import { FaWhatsapp, FaEnvelope, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { contacts } from "@/data/portfolio";

const iconMap = {
  whatsapp: FaWhatsapp,
  email: FaEnvelope,
  linkedin: FaLinkedinIn,
  github: FaGithub,
} as const;

const footerLinks = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Blog", href: "/blog" },
  { label: "Prompts", href: "/prompts" },
  { label: "FAQ", href: "/faq" },
];

export default function Footer() {
  return (
    <footer className="no-print relative border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center">
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
          {footerLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-muted transition-colors hover:text-copper"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-5">
          {contacts.map((c) => {
            const Icon = iconMap[c.icon];
            return (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={c.label}
                className="text-muted transition-colors hover:text-copper"
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
        <p className="text-sm text-muted">
          Ahmed Raza <span className="text-copper">©</span> 2026
        </p>
        <p className="text-xs uppercase tracking-[0.3em] text-copper/70">
          Execution Over Words
        </p>
      </div>
    </footer>
  );
}
