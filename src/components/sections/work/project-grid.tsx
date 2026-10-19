"use client";

import { useState } from "react";

import { Container } from "@/components/layout/container";
import { projectCategories, projects } from "@/data/projects";
import { cn } from "@/lib/utils";
import type { ProjectCategory } from "@/types";

import { ProjectShowcaseCard } from "./project-showcase-card";

type Filter = "all" | ProjectCategory;

// Only offer filters that have at least one project behind them.
const filters: { value: Filter; label: string; count: number }[] = [
  { value: "all", label: "All", count: projects.length },
  ...(Object.keys(projectCategories) as ProjectCategory[])
    .map((category) => ({
      value: category,
      label: projectCategories[category].label,
      count: projects.filter((project) => project.category === category).length,
    }))
    .filter((filter) => filter.count > 0),
];

export function ProjectGrid() {
  const [active, setActive] = useState<Filter>("all");

  const visible =
    active === "all"
      ? projects
      : projects.filter((project) => project.category === active);

  const status =
    active === "all"
      ? "Viewing: all client deployments"
      : `Viewing: ${projectCategories[active].description} (${visible.length} ${visible.length === 1 ? "project" : "projects"})`;

  return (
    <section aria-label="Projects" className="pb-16">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div
            role="group"
            aria-label="Filter projects by industry"
            className="flex flex-wrap items-center gap-2"
          >
            {filters.map((filter) => {
              const isActive = filter.value === active;
              return (
                <button
                  key={filter.value}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActive(filter.value)}
                  className={cn(
                    "rounded-full px-4 py-2 font-mono text-[11px] font-semibold tracking-wider uppercase transition-all focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-[0_0_15px_color-mix(in_oklab,var(--primary)_25%,transparent)]"
                      : "bg-secondary text-muted-foreground hover:text-foreground",
                  )}
                >
                  {filter.label} ({filter.count})
                </button>
              );
            })}
          </div>
          <p
            aria-live="polite"
            className="flex w-fit items-center gap-2 rounded-md bg-muted px-3 py-1.5 font-mono text-[13px] text-muted-foreground"
          >
            <span aria-hidden className="size-1.5 rounded-full bg-brand-blue" />
            {status}
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
          {visible.map((project) => (
            <li key={project.slug}>
              <ProjectShowcaseCard project={project} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
