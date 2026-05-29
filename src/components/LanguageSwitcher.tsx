import Link from "next/link";
import { Languages } from "lucide-react";
import { LANG_LABEL, type Lang } from "@/lib/blog";

type Props = {
  slug: string;
  current: Lang;
  available: Lang[];
};

const ORDER: Lang[] = ["en", "ro", "ur"];

function hrefFor(slug: string, lang: Lang): string {
  return lang === "en" ? `/blog/${slug}` : `/blog/${slug}?lang=${lang}`;
}

/** Language filter shown above each full blog article. Disabled state for any
 *  language that doesn't have a translation file yet. */
export default function LanguageSwitcher({ slug, current, available }: Props) {
  return (
    <div className="mb-8 rounded-xl border border-border bg-bg-soft/60 p-3">
      <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted">
        <Languages size={14} className="text-copper" />
        <span>Read in</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {ORDER.map((lang) => {
          const isAvailable = available.includes(lang);
          const isActive = lang === current;
          const label = LANG_LABEL[lang];
          const isUrdu = lang === "ur";

          if (!isAvailable) {
            return (
              <span
                key={lang}
                aria-disabled="true"
                title="Translation coming soon"
                className={`cursor-not-allowed rounded-lg border border-border px-4 py-2 text-sm text-muted/50 ${
                  isUrdu ? "urdu-heading text-lg" : ""
                }`}
              >
                {label}
              </span>
            );
          }

          return (
            <Link
              key={lang}
              href={hrefFor(slug, lang)}
              aria-current={isActive ? "page" : undefined}
              className={`rounded-lg border px-4 py-2 text-sm font-semibold transition-all ${
                isActive
                  ? "border-copper bg-copper text-black glow-copper"
                  : "border-copper/40 text-copper hover:bg-copper/10"
              } ${isUrdu ? "urdu-heading text-lg" : ""}`}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
