import {
  CloudCog,
  CreditCard,
  LayoutDashboard,
  LayoutTemplate,
  PencilRuler,
  Server,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";
import type { Service, ServiceIcon } from "@/types";

import { SectionHeading } from "./section-heading";

const icons: Record<ServiceIcon, LucideIcon> = {
  website: LayoutTemplate,
  platform: LayoutDashboard,
  design: PencilRuler,
  backend: Server,
  commerce: CreditCard,
  reliability: CloudCog,
};

// Accent colours cycle cyan → sky → teal across the grid, as in the design.
const accents = [
  { icon: "bg-primary/10 text-primary", dot: "bg-primary" },
  { icon: "bg-brand-blue/10 text-brand-sky", dot: "bg-brand-sky" },
  { icon: "bg-brand-teal/15 text-brand-teal", dot: "bg-brand-teal" },
] as const;

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-16">
      <Container>
        <SectionHeading
          eyebrow="Capabilities"
          title="Full-stack engineering and product design under one roof."
          aside="No siloed handoffs between agency creatives and third-party outsource coders. Design and architecture evolve simultaneously."
        />
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <li key={service.slug} className="flex">
              <ServiceCard
                service={service}
                number={index + 1}
                accent={accents[index % accents.length]}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function ServiceCard({
  service,
  number,
  accent,
}: {
  service: Service;
  number: number;
  accent: (typeof accents)[number];
}) {
  const Icon = icons[service.icon];

  return (
    <article className="group flex w-full flex-col justify-between rounded-xl bg-card p-6 shadow-md transition-all hover:bg-muted hover:shadow-xl">
      <div>
        <span
          className={cn(
            "mb-4 flex size-12 items-center justify-center rounded-lg transition-transform group-hover:scale-105",
            accent.icon,
          )}
        >
          <Icon className="size-6" />
        </span>
        <p className="mb-1 font-mono text-[13px] text-muted-foreground uppercase">
          {`[ ${String(number).padStart(2, "0")} // ${service.label} ]`}
        </p>
        <h3 className="mb-2 text-2xl font-medium tracking-tight">
          {service.title}
        </h3>
        <p className="mb-4 text-sm text-muted-foreground">{service.summary}</p>
      </div>
      <ul className="space-y-1.5 rounded-sm bg-background/50 p-3 font-mono text-xs text-muted-foreground">
        {service.highlights.map((highlight) => (
          <li key={highlight} className="flex items-center gap-2">
            <span
              aria-hidden
              className={cn("size-1.5 shrink-0 rounded-full", accent.dot)}
            />
            {highlight}
          </li>
        ))}
      </ul>
    </article>
  );
}
