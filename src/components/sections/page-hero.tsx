import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

import { PulseDot } from "./pulse-dot";

type PageHeroProps = {
  /** Mono pill above the title, e.g. "[ Portfolio // 2024–2026 ]". */
  badge: string;
  title: React.ReactNode;
  description: React.ReactNode;
  /** Extra content under the description, such as metric chips or CTAs. */
  children?: React.ReactNode;
  className?: string;
};

/** Opening section for inner pages, with the ambient glow from the design. */
export function PageHero({
  badge,
  title,
  description,
  children,
  className,
}: PageHeroProps) {
  return (
    <section className={cn("relative overflow-hidden", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[980px] max-w-none -translate-x-1/2 rounded-full bg-linear-to-b from-primary/15 via-brand-blue/5 to-transparent blur-3xl"
      />
      <Container className="relative flex flex-col items-start gap-6 pt-12 pb-10 lg:pt-16">
        <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5 font-mono text-[11px] font-semibold tracking-widest text-primary uppercase shadow-inner">
          <PulseDot ping />
          {badge}
        </span>
        <h1 className="max-w-4xl text-4xl leading-[1.08] font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <div className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {description}
        </div>
        {children}
      </Container>
    </section>
  );
}
