import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

import { PulseDot } from "./pulse-dot";

type CtaBannerProps = {
  eyebrow: string;
  title: React.ReactNode;
  description: React.ReactNode;
  /** Buttons or links, shown beside the copy on wide screens. */
  actions: React.ReactNode;
  /** Small print under the copy, e.g. response-time notes. */
  footnote?: React.ReactNode;
  className?: string;
};

/** Closing call-to-action card used at the bottom of inner pages. */
export function CtaBanner({
  eyebrow,
  title,
  description,
  actions,
  footnote,
  className,
}: CtaBannerProps) {
  return (
    <section className={cn("py-16", className)}>
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-muted to-card p-8 shadow-2xl lg:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -bottom-16 size-80 rounded-full bg-primary/10 blur-3xl"
          />
          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="flex max-w-2xl flex-col gap-3">
              <p className="flex items-center gap-2 font-mono text-[11px] font-semibold tracking-widest text-primary uppercase">
                <PulseDot />
                {eyebrow}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">
                {title}
              </h2>
              <p className="text-muted-foreground">{description}</p>
              {footnote && (
                <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 font-mono text-xs text-muted-foreground">
                  {footnote}
                </div>
              )}
            </div>
            <div className="flex shrink-0 flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              {actions}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
