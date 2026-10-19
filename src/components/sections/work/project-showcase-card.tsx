import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Lock, MapPin } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { projectCategories } from "@/data/projects";
import type { Project } from "@/types";

import { BrowserChrome } from "../browser-frame";
import { TechTags } from "../tech-tags";

/** Large project card used on the Our Work page. */
export function ProjectShowcaseCard({ project }: { project: Project }) {
  const host = new URL(project.liveUrl).hostname;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl bg-card shadow-xl transition-all duration-300 hover:-translate-y-1">
      <BrowserChrome
        address={host}
        trailing={<Lock className="text-primary" />}
        className="bg-secondary/90"
      />
      <div className="relative h-64 overflow-hidden bg-ink">
        <Image
          src={project.image}
          alt={`${project.name} website preview`}
          fill
          sizes="(min-width: 1024px) 560px, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-card via-card/40 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col justify-between gap-4 p-6">
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] font-semibold tracking-wider uppercase">
            <span className="rounded-md bg-primary/10 px-2.5 py-0.5 text-primary">
              {projectCategories[project.category].label}
            </span>
            <span className="flex items-center gap-1 rounded-md bg-secondary px-2.5 py-0.5 text-muted-foreground">
              <MapPin className="size-3 text-brand-sky" />
              {project.country}
            </span>
          </div>
          <h2 className="text-2xl font-semibold tracking-tight transition-colors group-hover:text-primary">
            {project.name} — {project.tagline}
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            {project.summary}
          </p>
        </div>

        <TechTags items={project.stack} className="pt-1" />

        <div className="mt-2 flex items-center justify-between pt-4">
          <Link
            href={`/work/${project.slug}`}
            className={buttonVariants({
              variant: "secondary",
              size: "lg",
              className:
                "h-10 gap-1.5 px-4 font-semibold hover:bg-primary hover:text-primary-foreground",
            })}
          >
            Case study
            <span className="sr-only">: {project.name}</span>
            <ArrowRight data-icon="inline-end" />
          </Link>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-mono text-[13px] text-muted-foreground transition-colors hover:text-primary"
          >
            Visit live site
            <span className="sr-only">: {project.name}</span>
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </article>
  );
}
