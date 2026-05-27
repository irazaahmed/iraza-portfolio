import { FaWhatsapp, FaEnvelope, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { contacts } from "@/data/portfolio";

const iconMap = {
  whatsapp: FaWhatsapp,
  email: FaEnvelope,
  linkedin: FaLinkedinIn,
  github: FaGithub,
} as const;

export default function Footer() {
  return (
    <footer className="relative border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center">
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
