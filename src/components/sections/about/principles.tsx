import {
  Brush,
  Eye,
  Gauge,
  Handshake,
  HeartPulse,
  MessagesSquare,
  MonitorPlay,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { principles } from "@/data/about";
import { cn } from "@/lib/utils";

import { SectionHeading } from "../section-heading";

// Icon for each pillar, its footer marker, and the accent colour.
const accents: { icon: LucideIcon; marker: LucideIcon; tone: string }[] = [
  { icon: Brush, marker: Gauge, tone: "text-primary" },
  { icon: Eye, marker: MonitorPlay, tone: "text-brand-sky" },
  { icon: HeartPulse, marker: Zap, tone: "text-brand-teal" },
  { icon: Handshake, marker: MessagesSquare, tone: "text-primary" },
];

export function Principles() {
  return (
    <section className="bg-ink/5 py-16 dark:bg-ink/60">
      <Container>
        <SectionHeading
          eyebrow="[ Chapter 02 // Operating Principles ]"
          title="How we build. No compromises."
          aside="Four engineering convictions that guide every decision, from the first API schema to the final micro-interaction."
        />
        <ol className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle, index) => {
            const {
              icon: Icon,
              marker: Marker,
              tone,
            } = accents[index % accents.length];
            return (
              <li
                key={principle.name}
                className="flex flex-col justify-between gap-6 rounded-xl bg-card p-6 transition-colors hover:bg-muted"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] font-semibold tracking-widest text-muted-foreground uppercase">
                      {`${String(index + 1).padStart(2, "0")} // ${principle.name}`}
                    </span>
                    <Icon className={cn("size-5", tone)} />
                  </div>
                  <h3 className="text-3xl font-bold tracking-tight">
                    {principle.name}
                  </h3>
                  <p className={cn("font-heading text-sm font-medium", tone)}>
                    {principle.tagline}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {principle.description}
                  </p>
                </div>
                <p className="flex items-center justify-between rounded-lg bg-background px-3 py-2 font-mono text-xs text-muted-foreground">
                  {principle.marker}
                  <Marker className={cn("size-4", tone)} />
                </p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
