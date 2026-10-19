import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Clock, Network } from "lucide-react";

import { CtaBanner } from "@/components/sections/cta-banner";
import { HighlightChips } from "@/components/sections/highlight-chips";
import { PageHero } from "@/components/sections/page-hero";
import {
  glowButtonClassName,
  gradientTextClassName,
} from "@/components/sections/styles";
import { ProjectGrid } from "@/components/sections/work/project-grid";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Websites and web platforms LeWiSoft has designed and built for clients in Ghana, the UK and beyond.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        badge="[ Portfolio // Client Deployments ]"
        title={
          <>
            Real products shipped. <br />
            <span
              className={cn(
                gradientTextClassName,
                "from-primary via-brand-sky to-brand-teal",
              )}
            >
              No fluff, just production code.
            </span>
          </>
        }
        description="Explore the bespoke websites, custom web platforms and workflow tools Lemuel & William have engineered for ambitious organisations in Ghana, the United Kingdom and across borders."
      >
        <HighlightChips
          items={[
            {
              icon: BadgeCheck,
              value: `${projects.length} Shipped`,
              label: "Turnkey Systems",
            },
            { icon: Clock, value: "100%", label: "On-Time Delivery" },
            {
              icon: Network,
              value: "UK & Ghana",
              label: "Dual Hub Footprint",
              tone: "text-brand-sky",
            },
          ]}
        />
      </PageHero>

      <ProjectGrid />

      <CtaBanner
        className="pt-0"
        eyebrow="Discovery & Technical Specification"
        title="Looking for something bespoke? We engineer tailor-made architectures for complex requirements."
        description="Every platform we build is engineered directly by William and Lemuel — no junior handoffs, no bloated agencies, just direct access to the engineers."
        actions={
          <Link href="/contact" className={glowButtonClassName}>
            Discuss your project
            <ArrowRight data-icon="inline-end" />
          </Link>
        }
      />
    </>
  );
}
