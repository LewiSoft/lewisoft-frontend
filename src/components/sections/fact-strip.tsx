import { Container } from "@/components/layout/container";
import type { Fact } from "@/types";

/** Four-up strip of headline facts that sits under a page hero. */
export function FactStrip({
  facts,
  label,
  className,
}: {
  facts: Fact[];
  /** Accessible name for the strip. */
  label: string;
  className?: string;
}) {
  return (
    <section aria-label={label} className={className}>
      <Container>
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-border lg:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="flex flex-col gap-1 bg-card p-5">
              <dt className="font-mono text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
                {fact.label}
              </dt>
              <dd className="font-heading text-xl font-semibold text-primary">
                {fact.value}
              </dd>
              <dd className="text-sm text-muted-foreground">{fact.detail}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
