import {
  CircleCheck,
  Gauge,
  Handshake,
  TrendingUp,
  TriangleAlert,
  Zap,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";
import type { CaseStudy } from "@/types";

import { Eyebrow } from "../section-heading";

function NarrativeHeading({
  step,
  label,
  title,
  intro,
}: {
  step: string;
  label: string;
  title: string;
  intro: string;
}) {
  return (
    <div className="mb-10 flex max-w-3xl flex-col gap-2">
      <Eyebrow>{`[ ${step} // ${label} ]`}</Eyebrow>
      <h2 className="text-3xl font-bold tracking-tight text-balance md:text-5xl md:leading-14">
        {title}
      </h2>
      <p className="text-lg text-muted-foreground">{intro}</p>
    </div>
  );
}

export function Challenge({
  challenge,
}: {
  challenge: CaseStudy["challenge"];
}) {
  return (
    <section className="py-16">
      <Container>
        <NarrativeHeading step="01" label="Problem Context" {...challenge} />
        <ol className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {challenge.issues.map((issue, index) => (
            <li
              key={issue.title}
              className="flex flex-col gap-4 rounded-xl bg-card p-6 transition-colors hover:bg-muted"
            >
              <span className="flex size-12 items-center justify-center rounded-lg bg-secondary text-destructive">
                <TriangleAlert className="size-6" />
              </span>
              <p className="font-mono text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
                Bottleneck {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="text-xl font-semibold">{issue.title}</h3>
              <p className="text-muted-foreground">{issue.description}</p>
              <p className="mt-auto rounded-lg bg-background p-3 font-mono text-[13px] text-muted-foreground">
                {issue.impact}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export function Solution({ solution }: { solution: CaseStudy["solution"] }) {
  // The first two features get full-width rows; the rest sit side by side.
  const [primary, secondary] = [
    solution.features.slice(0, 2),
    solution.features.slice(2),
  ];

  return (
    <section id="solution" className="scroll-mt-20 bg-ink/5 py-16 dark:bg-ink">
      <Container>
        <NarrativeHeading
          step="02"
          label="Architectural Solution"
          {...solution}
        />
        <div className="flex flex-col gap-6">
          {primary.map((feature, index) => (
            <article
              key={feature.title}
              className="grid grid-cols-1 gap-6 rounded-2xl bg-card p-8 lg:grid-cols-12 lg:items-center"
            >
              <div className="flex flex-col gap-4 lg:col-span-7">
                <span
                  className={cn(
                    "w-fit rounded px-3 py-1 font-mono text-[11px] font-semibold tracking-wider uppercase",
                    index === 0
                      ? "bg-primary/10 text-primary"
                      : "bg-brand-blue/10 text-brand-sky",
                  )}
                >
                  {feature.label}
                </span>
                <h3 className="text-3xl font-bold tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
              <ul className="flex flex-col gap-3 rounded-xl bg-background p-5 text-sm lg:col-span-5">
                {feature.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    {index === 0 ? (
                      <CircleCheck className="mt-0.5 size-4.5 shrink-0 text-primary" />
                    ) : (
                      <Zap className="mt-0.5 size-4.5 shrink-0 text-brand-sky" />
                    )}
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}

          {secondary.length > 0 && (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {secondary.map((feature) => (
                <article
                  key={feature.title}
                  className="flex flex-col gap-4 rounded-xl bg-card p-6"
                >
                  <p className="font-mono text-[11px] font-semibold tracking-wider text-primary uppercase">
                    {feature.label}
                  </p>
                  <h3 className="text-2xl font-bold tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                  {feature.outcome && (
                    <p className="mt-auto rounded-lg bg-background p-3 font-mono text-[13px] text-brand-teal">
                      {feature.outcome}
                    </p>
                  )}
                </article>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

// Icons and colours cycle across the result cards, as in the design.
const resultAccents = [
  { icon: TrendingUp, tone: "text-primary" },
  { icon: Gauge, tone: "text-brand-teal" },
  { icon: Handshake, tone: "text-brand-sky" },
  { icon: Zap, tone: "text-primary" },
] as const;

export function Results({ results }: { results: CaseStudy["results"] }) {
  return (
    <section className="py-16">
      <Container>
        <NarrativeHeading step="03" label="Quantifiable Impact" {...results} />
        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {results.items.map((item, index) => {
            const { icon: Icon, tone } =
              resultAccents[index % resultAccents.length];
            return (
              <div
                key={item.label}
                className="flex flex-col justify-between gap-4 rounded-xl bg-card p-6"
              >
                <div className="flex items-center justify-between">
                  <dt className="font-mono text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
                    {item.label}
                  </dt>
                  <Icon className={cn("size-5", tone)} />
                </div>
                <dd>
                  <span
                    className={cn(
                      "block font-heading text-5xl font-bold tracking-tight",
                      tone,
                    )}
                  >
                    {item.value}
                  </span>
                  <span className="font-heading text-sm font-semibold">
                    {item.caption}
                  </span>
                </dd>
                <dd className="text-sm text-muted-foreground">
                  {item.description}
                </dd>
              </div>
            );
          })}
        </dl>
      </Container>
    </section>
  );
}
