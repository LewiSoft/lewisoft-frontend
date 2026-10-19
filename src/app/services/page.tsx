import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, CalendarDays, Send, ShieldCheck, Zap } from "lucide-react";

import { CtaBanner } from "@/components/sections/cta-banner";
import { FactStrip } from "@/components/sections/fact-strip";
import { PageHero } from "@/components/sections/page-hero";
import { EngagementFaq } from "@/components/sections/services/engagement-faq";
import { ServiceCatalogue } from "@/components/sections/services/service-catalogue";
import {
  glowButtonClassName,
  gradientTextClassName,
} from "@/components/sections/styles";
import { buttonVariants } from "@/components/ui/button";
import { engagementFacts } from "@/data/services";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Websites, web applications, UI/UX design, backend APIs, e-commerce and ongoing maintenance from LewiSoft, with transparent scopes and pricing.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="Capabilities & Pricing // Transparent Scopes"
        title={
          <>
            Full-stack engineering services built for{" "}
            <span
              className={cn(gradientTextClassName, "from-primary to-brand-sky")}
            >
              speed, scale, and clarity.
            </span>
          </>
        }
        description="We design, build and maintain production-ready digital products. No bloated agency retainers, no junior handoffs — just two senior engineers shipping exceptional code."
      >
        <p className="flex items-center gap-2 font-mono text-[13px] text-muted-foreground">
          <BadgeCheck className="size-4 text-primary" />
          100% senior delivery • Accra & London
        </p>
      </PageHero>

      <FactStrip facts={engagementFacts} label="Engagement facts" />

      <ServiceCatalogue />
      <EngagementFaq />

      <CtaBanner
        eyebrow="Direct access to founders"
        title="Have a specific project scope or urgent deadline in mind?"
        description="Whether you're launching a new platform from scratch or refactoring mission-critical software, discuss technical feasibility directly with the builders."
        footnote={
          <>
            <span className="flex items-center gap-1.5">
              <Zap className="size-3.5 text-primary" />
              Typical reply in under 4 hours
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="size-3.5 text-primary" />
              Mutual NDA on request
            </span>
          </>
        }
        actions={
          <>
            <Link href="/contact" className={glowButtonClassName}>
              Book an architecture call
              <CalendarDays data-icon="inline-end" />
            </Link>
            <Link
              href="/contact"
              className={buttonVariants({
                variant: "secondary",
                size: "lg",
                className: "h-12 gap-2 px-6 text-base",
              })}
            >
              Request a quote
              <Send data-icon="inline-end" />
            </Link>
          </>
        }
      />
    </>
  );
}
