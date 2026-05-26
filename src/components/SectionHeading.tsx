import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
};

/** Consistent section header: small copper eyebrow + large white title with accent bar. */
export default function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12">
      {eyebrow && (
        <p className="mb-2 text-sm font-medium uppercase tracking-[0.25em] text-copper">
          {eyebrow}
        </p>
      )}
      <h2 className="flex items-center gap-4 text-3xl font-bold tracking-tight text-fg sm:text-4xl">
        <span className="h-8 w-1 rounded-full bg-copper" />
        {title}
      </h2>
    </Reveal>
  );
}
