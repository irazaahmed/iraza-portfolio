import { GraduationCap, Award } from "lucide-react";
import { academicEducation, certifications } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function CardList({
  items,
  icon: Icon,
  title,
}: {
  items: string[];
  icon: typeof GraduationCap;
  title: string;
}) {
  return (
    <div>
      <h3 className="mb-5 flex items-center gap-2.5 text-xl font-semibold text-fg">
        <Icon size={22} className="text-copper" />
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item, i) => {
          const [head, ...rest] = item.split(" - ");
          return (
            <Reveal key={i} delay={i * 0.04}>
              <li className="rounded-lg border-l-2 border-copper bg-bg-soft/50 px-5 py-4 transition-colors duration-300 hover:bg-bg-soft">
                <p className="font-medium text-fg">{head}</p>
                {rest.length > 0 && (
                  <p className="mt-0.5 text-sm text-muted">{rest.join(" - ")}</p>
                )}
              </li>
            </Reveal>
          );
        })}
      </ul>
    </div>
  );
}

export default function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24">
      <SectionHeading eyebrow="Background" title="Education & Certifications" />

      <div className="grid gap-12 md:grid-cols-2">
        <CardList
          items={academicEducation}
          icon={GraduationCap}
          title="Academic Education"
        />
        <CardList items={certifications} icon={Award} title="Certifications" />
      </div>
    </section>
  );
}
