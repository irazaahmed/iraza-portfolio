import Image from "next/image";
import { Cpu, Languages, ScrollText, ArrowUpRight } from "lucide-react";
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

      {/* Cybrum Solutions showcase */}
      <Reveal delay={0.2}>
        <a
          href="https://www.cybrumsolutions.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-12 flex w-full items-center justify-between gap-6 rounded-2xl border border-copper/30 bg-gradient-to-br from-copper/5 via-transparent to-transparent p-6 transition-all duration-300 hover:border-copper/60 hover:from-copper/10 hover:shadow-[0_0_40px_-12px_var(--color-copper)] sm:p-8"
        >
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-copper/40 bg-copper/10 px-3 py-0.5 text-xs font-semibold uppercase tracking-widest text-copper">
                Founder &amp; CEO
              </span>
              <span className="rounded-full border border-border bg-bg-soft px-3 py-0.5 text-xs font-medium text-muted">
                AI-Native Company
              </span>
              <span className="rounded-full border border-border bg-bg-soft px-3 py-0.5 text-xs font-medium text-muted">
                Est. Dec 2025
              </span>
            </div>
            <h3 className="mt-1 text-2xl font-bold tracking-tight text-fg sm:text-3xl">
              Cybrum Solutions
            </h3>
            <p className="max-w-xl text-sm leading-relaxed text-muted sm:text-base">
              One element. Every solution. — AI agents, automation, chatbots, and web systems built end to end for businesses that need things to actually run.
            </p>
          </div>
          <div className="shrink-0">
            <span className="inline-flex items-center gap-1.5 rounded-xl border border-copper/40 bg-copper/10 px-4 py-2.5 text-sm font-semibold text-copper transition-all duration-300 group-hover:bg-copper/20 group-hover:gap-2.5">
              Visit
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </div>
        </a>
      </Reveal>

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
