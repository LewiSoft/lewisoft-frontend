import {
  CalendarDays,
  Code,
  Palette,
  Rocket,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

import { SectionHeading } from "./section-heading";

type ProcessStep = {
  title: string;
  description: string;
  milestone: string;
  icon: LucideIcon;
  /** Text colour for the step number and milestone. */
  tone: string;
  /** Background tint for the step number badge. */
  tint: string;
};

const steps: ProcessStep[] = [
  {
    title: "Discover",
    description:
      "Direct kickoff call with William & Lemuel. We clarify business objectives, dissect user flows, define exact data models, and set fixed timelines.",
    milestone: "Week 1 • Architecture Plan",
    icon: CalendarDays,
    tone: "text-primary",
    tint: "bg-primary/20",
  },
  {
    title: "Design",
    description:
      "Wireframing, interactive UI prototypes, and customized component systems. Rapid review loops refine details before code implementation.",
    milestone: "Week 2 • Figma Prototype",
    icon: Palette,
    tone: "text-brand-sky",
    tint: "bg-brand-blue/20",
  },
  {
    title: "Build",
    description:
      "Concurrent frontend Next.js engineering and scalable backend API development. You receive continuous staging preview links as features complete.",
    milestone: "Weeks 3-5 • Staging Previews",
    icon: Code,
    tone: "text-primary",
    tint: "bg-primary/20",
  },
  {
    title: "Launch & Support",
    description:
      "Domain DNS migration, CDN cache tuning, SEO audit, analytics tracking, plus a comprehensive 30-day post-launch warranty and handoff training.",
    milestone: "Week 6 • Production Go-Live",
    icon: Rocket,
    tone: "text-brand-teal",
    tint: "bg-brand-teal/20",
  },
];

export function Process() {
  return (
    <section id="process" className="scroll-mt-20 py-16">
      <Container>
        <SectionHeading
          eyebrow="Our Process"
          title="From first conversation to live deployment in four disciplined stages."
          aside="Predictable milestones, transparent sprints, and constant staging links. You always know what is built and when it ships."
        />
        <ol className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const number = String(index + 1).padStart(2, "0");
            const Icon = step.icon;

            return (
              <li
                key={step.title}
                className="relative flex flex-col justify-between overflow-hidden rounded-xl bg-card p-6 shadow-md transition-colors hover:bg-muted"
              >
                <span
                  aria-hidden
                  className="absolute -top-4 -right-2 font-heading text-7xl font-bold text-foreground/5 select-none"
                >
                  {number}
                </span>
                <div>
                  <span
                    className={cn(
                      "mb-4 flex size-8 items-center justify-center rounded-full font-mono text-xs font-bold",
                      step.tint,
                      step.tone,
                    )}
                  >
                    {number}
                  </span>
                  <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
                <p
                  className={cn(
                    "mt-4 flex items-center gap-1.5 pt-4 font-mono text-[11px]",
                    step.tone,
                  )}
                >
                  <Icon className="size-3.5" />
                  {step.milestone}
                </p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
