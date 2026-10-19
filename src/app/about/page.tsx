import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarCheck, Clock, ShieldCheck } from "lucide-react";

import { OriginStory } from "@/components/sections/about/origin-story";
import { Principles } from "@/components/sections/about/principles";
import { Toolkit } from "@/components/sections/about/toolkit";
import { CtaBanner } from "@/components/sections/cta-banner";
import { FactStrip } from "@/components/sections/fact-strip";
import { PageHero } from "@/components/sections/page-hero";
import {
  glowButtonClassName,
  gradientTextClassName,
} from "@/components/sections/styles";
import { Team } from "@/components/sections/team";
import { buttonVariants } from "@/components/ui/button";
import { studioFacts } from "@/data/about";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description:
    "LeWiSoft is two senior engineers in Accra and London who design, build and ship complete websites and web platforms, with no middlemen.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="[ About the Studio // Accra & London ]"
        title={
          <>
            Two senior engineers.{" "}
            <span
              className={cn(gradientTextClassName, "from-primary to-brand-sky")}
            >
              Zero middlemen.
            </span>{" "}
            Complete digital ownership.
          </>
        }
        description="We founded LeWiSoft on a simple premise: modern web development should be done directly by the specialists writing the code, not passed through layers of agency bureaucracy."
      />
      <FactStrip facts={studioFacts} label="Studio at a glance" />

      <OriginStory />
      <Principles />
      <Team
        eyebrow="[ Chapter 03 // Leadership ]"
        title="The engineers behind every release."
        aside="Specialist depth across client and server. Meet the partners building your product."
        detailed
      />
      <Toolkit />

      <CtaBanner
        eyebrow="Direct dialogue with the founders"
        title="Ready to work with engineers who care about your product as much as you do?"
        description="Tell us about your timeline and technical requirements, and how our two-person senior team can give you a digital edge."
        footnote={
          <>
            <span className="flex items-center gap-1.5">
              <Clock className="size-3.5 text-primary" />
              Response within 24h
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="size-3.5 text-primary" />
              NDA on request
            </span>
            <span className="flex items-center gap-1.5">
              <CalendarCheck className="size-3.5 text-primary" />
              Sprint slots open
            </span>
          </>
        }
        actions={
          <>
            <Link href="/contact" className={glowButtonClassName}>
              Start a conversation
              <ArrowRight data-icon="inline-end" />
            </Link>
            <Link
              href="/work"
              className={buttonVariants({
                variant: "secondary",
                size: "lg",
                className: "h-12 px-6 text-base",
              })}
            >
              Explore our work
            </Link>
          </>
        }
      />
    </>
  );
}
