import { Cloud, Database, MonitorSmartphone, Network } from "lucide-react";

import { Container } from "@/components/layout/container";
import { toolkit } from "@/data/about";
import { cn } from "@/lib/utils";

import { SectionHeading } from "../section-heading";

const accents = [
  { icon: MonitorSmartphone, tone: "text-primary" },
  { icon: Database, tone: "text-brand-sky" },
  { icon: Cloud, tone: "text-brand-teal" },
  { icon: Network, tone: "text-primary" },
] as const;

export function Toolkit() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          eyebrow="[ Chapter 04 // Production Toolkit ]"
          title="Tools & tech stack"
          aside="Proven technologies chosen for speed, security, maintainability and zero bloat."
        />
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {toolkit.map((category, index) => {
            const { icon: Icon, tone } = accents[index % accents.length];
            return (
              <li
                key={category.name}
                className="flex flex-col justify-between gap-6 rounded-xl bg-card p-6"
              >
                <div>
                  <h3 className="mb-4 flex items-center gap-2 font-heading text-lg font-semibold">
                    <Icon className={cn("size-5", tone)} />
                    {category.name}
                  </h3>
                  <ul className="flex flex-col divide-y divide-border">
                    {category.tools.map((tool) => (
                      <li
                        key={tool.name}
                        className="flex items-center justify-between gap-3 py-2 text-sm"
                      >
                        <span>{tool.name}</span>
                        <span className="font-mono text-[11px] text-muted-foreground">
                          {tool.role}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p
                  className={cn(
                    "rounded-lg bg-background px-3 py-2 font-mono text-xs",
                    tone,
                  )}
                >
                  {category.outcome}
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
