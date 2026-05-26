"use client";

import { motion } from "framer-motion";
import { languageLevels } from "@/data/portfolio";

/** Animated proficiency bars for spoken languages (fills on scroll into view). */
export default function LanguageBars() {
  return (
    <div className="flex flex-col gap-4">
      {languageLevels.map((lang) => (
        <div key={lang.name}>
          <div className="mb-1.5 flex items-center justify-between text-sm">
            <span className="font-medium text-fg">{lang.name}</span>
            <span className="text-muted">{lang.level}</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-fg/10">
            <motion.div
              className="h-full rounded-full bg-copper"
              initial={{ width: 0 }}
              whileInView={{ width: `${lang.value}%` }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
