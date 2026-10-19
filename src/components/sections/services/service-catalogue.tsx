import { CircleCheck } from "lucide-react";

import { Container } from "@/components/layout/container";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";
import type { Service } from "@/types";

import { SectionHeading } from "../section-heading";
import { serviceIcons } from "../services";

const tones = ["text-primary", "text-brand-sky", "text-brand-teal"] as const;

export function ServiceCatalogue() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          eyebrow="[ 01 // Core Engineering Capabilities ]"
          title="Systematic modules engineered for production."
          aside="Fixed-price scoped engagements or ongoing retainers. Every module is handled directly by Lemuel (UI & frontend) and William (architecture & cloud)."
        />
        <ul className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {services.map((service, index) => (
            <li
              key={service.slug}
              id={service.slug}
              className="flex scroll-mt-24"
            >
              <ServiceDetailCard
                service={service}
                number={index + 1}
                tone={tones[index % tones.length]}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function ServiceDetailCard({
  service,
  number,
  tone,
}: {
  service: Service;
  number: number;
  tone: (typeof tones)[number];
}) {
  const Icon = serviceIcons[service.icon];

  return (
    <article className="flex w-full flex-col justify-between overflow-hidden rounded-xl bg-card shadow-lg">
      <div className="flex flex-col gap-5 p-6 sm:p-8">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] font-semibold tracking-widest text-muted-foreground">
            SVC // {String(number).padStart(2, "0")}
          </span>
          <span
            className={cn(
              "flex size-12 items-center justify-center rounded-lg bg-secondary",
              tone,
            )}
          >
            <Icon className="size-6" />
          </span>
        </div>

        <div>
          <h3 className="mb-2 text-2xl font-semibold tracking-tight">
            {service.title}
          </h3>
          <p className="text-muted-foreground">{service.description}</p>
        </div>

        <div className="rounded-lg bg-background p-4">
          <p className="mb-3 font-mono text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
            Stack & capabilities
          </p>
          <ul className="flex flex-wrap gap-2 font-mono text-xs">
            {service.stack.map((item) => (
              <li key={item} className="rounded-sm bg-secondary px-2 py-1">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 font-mono text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
            Key deliverables
          </p>
          <ul className="grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
            {service.deliverables.map((deliverable) => (
              <li key={deliverable} className="flex items-start gap-2">
                <CircleCheck className={cn("mt-0.5 size-4 shrink-0", tone)} />
                {deliverable}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <dl className="grid grid-cols-2 gap-4 bg-muted px-6 py-4 sm:px-8">
        <div>
          <dt className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase">
            {service.timeline.includes("week") ? "Timeline" : "Commitment"}
          </dt>
          <dd className="font-heading font-semibold">{service.timeline}</dd>
        </div>
        <div className="text-right">
          <dt className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase">
            Investment
          </dt>
          <dd className="font-heading font-semibold">
            <span className={tone}>{service.price}</span>
            {service.priceNote && (
              <span className="ml-1 text-sm font-normal text-muted-foreground">
                / {service.priceNote}
              </span>
            )}
          </dd>
        </div>
      </dl>
    </article>
  );
}
