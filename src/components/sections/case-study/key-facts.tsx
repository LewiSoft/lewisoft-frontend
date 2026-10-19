import { HardHat } from "lucide-react";

import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";
import type { CaseStudy, Project } from "@/types";

import { TechTags } from "../tech-tags";

/** Facts for projects that don't have a written case study yet. */
function defaultFacts(project: Project): CaseStudy["facts"] {
  return [
    { label: "Client", value: project.name, detail: project.country },
    { label: "Industry", value: project.industry, detail: project.tagline },
    {
      label: "LewiSoft Role",
      value: "Full-Stack Delivery",
      detail: "Lemuel & William",
    },
    {
      label: "Core Engine",
      value: project.stack[0],
      detail: project.stack.slice(1).join(" + "),
    },
  ];
}

export function KeyFacts({
  project,
  caseStudy,
}: {
  project: Project;
  caseStudy?: CaseStudy;
}) {
  const facts = caseStudy?.facts ?? defaultFacts(project);

  return (
    <section aria-label="Project facts" className="bg-card py-10">
      <Container>
        <dl
          className={cn(
            "grid grid-cols-2 gap-4",
            facts.length > 4
              ? "md:grid-cols-3 lg:grid-cols-6"
              : "lg:grid-cols-4",
          )}
        >
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="flex flex-col gap-1 rounded-lg bg-muted p-4"
            >
              <dt className="font-mono text-[11px] font-semibold tracking-wider text-primary uppercase">
                {fact.label}
              </dt>
              <dd className="font-heading text-sm font-semibold">
                {fact.value}
              </dd>
              <dd className="font-mono text-[13px] text-muted-foreground">
                {fact.detail}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-4 flex flex-col justify-between gap-4 rounded-xl bg-muted p-4 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
              <HardHat className="size-5" />
            </span>
            <div>
              <p className="font-heading text-sm font-semibold">
                Built end-to-end by LewiSoft
              </p>
              <p className="text-sm text-muted-foreground">
                Lemuel (design systems & frontend) • William (backend, data &
                infrastructure)
              </p>
            </div>
          </div>
          <TechTags items={project.stack} />
        </div>
      </Container>
    </section>
  );
}
