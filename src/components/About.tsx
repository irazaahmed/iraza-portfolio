import Image from "next/image";
import { Cpu, Languages, ScrollText } from "lucide-react";
import { highlights, profile } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import CountUp from "./CountUp";
import TiltCard from "./TiltCard";

const iconMap = {
  scroll: ScrollText,
  cpu: Cpu,
  languages: Languages,
} as const;

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24">
      <SectionHeading eyebrow="Who I Am" title="About" />

      <div className="grid items-center gap-12 md:grid-cols-2">
        {/* Photo */}
        <Reveal>
          <div className="group relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-copper/40 to-transparent opacity-60 blur transition-opacity group-hover:opacity-100" />
            <div className="relative overflow-hidden rounded-2xl border border-border">
              <Image
                src={profile.photo}
                alt={`${profile.name} portrait`}
                width={480}
                height={560}
                priority
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </Reveal>

        {/* Text */}
        <Reveal delay={0.15}>
          <p className="text-lg leading-relaxed text-muted">{profile.summary}</p>
        </Reveal>
      </div>

      {/* Highlight cards */}
      <div className="mt-16 grid gap-6 sm:grid-cols-3">
        {highlights.map((h, i) => {
          const Icon = iconMap[h.icon];
          return (
            <Reveal key={h.title} delay={i * 0.1} className="h-full">
              <TiltCard className="h-full rounded-xl border border-border bg-bg-soft/60 p-6 hover:border-copper/50 hover:glow-copper">
                <div
                  className="animate-float-y mb-4 inline-flex rounded-lg bg-copper/10 p-3 text-copper transition-colors group-hover:bg-copper/20"
                  style={{ animationDelay: `${i * 0.5}s` }}
                >
                  <Icon size={24} />
                </div>
                <p className="text-2xl font-bold text-copper">
                  <CountUp value={h.stat} />
                </p>
                <h3 className="mt-1 text-lg font-semibold text-fg">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {h.description}
                </p>
              </TiltCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
