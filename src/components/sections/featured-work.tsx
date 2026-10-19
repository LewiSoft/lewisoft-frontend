import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

import { Container } from "@/components/layout/container";
import { projects } from "@/data/projects";
import type { Project } from "@/types";

import { BrowserChrome } from "./browser-frame";
import { SectionHeading } from "./section-heading";
import { TechTags } from "./tech-tags";

export function FeaturedWork() {
  return (
    <section id="work" className="scroll-mt-20 py-16">
      <Container>
        <SectionHeading
          eyebrow="Selected Work"
          title="Real products shipped for clients across London, Accra, and beyond."
          aside={
            <p className="font-mono text-[13px] text-muted-foreground uppercase">
              [ {String(projects.length).padStart(2, "0")} production
              deployments showcased ]
            </p>
          }
        />
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <li key={project.slug} className="flex">
              <ProjectCard project={project} priority={index < 3} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function ProjectCard({
  project,
  priority,
}: {
  project: Project;
  priority: boolean;
}) {
  const host = new URL(project.liveUrl).hostname;

  return (
    <article className="group flex w-full flex-col justify-between overflow-hidden rounded-xl bg-card shadow-lg transition-all hover:shadow-2xl">
      <div>
        <BrowserChrome
          address={host}
          trailing={
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit ${project.name} live site`}
              className="transition-colors hover:text-primary"
            >
              <ExternalLink />
            </a>
          }
        />
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={`${project.name} website preview`}
            fill
            sizes="(min-width: 1024px) 384px, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority={priority}
          />
          <div className="absolute top-3 left-3 flex gap-1.5 font-mono text-[10px] font-semibold">
            <span className="rounded-sm bg-background/80 px-2 py-0.5 text-primary backdrop-blur-md">
              {project.industry}
            </span>
            <span className="rounded-sm bg-background/80 px-2 py-0.5 backdrop-blur-md">
              {project.country}
            </span>
          </div>
        </div>
        <div className="p-5">
          <h3 className="mb-2 text-xl font-bold tracking-tight">
            {project.name}
          </h3>
          <p className="mb-4 text-sm text-muted-foreground">
            {project.summary}
          </p>
          <TechTags items={project.stack} />
        </div>
      </div>
      <div className="px-5 pb-5">
        <Link
          href={`/work/${project.slug}`}
          className="inline-flex items-center gap-1.5 font-mono text-[13px] font-medium text-primary transition-colors hover:text-foreground"
        >
          View case study
          <span className="sr-only">: {project.name}</span>
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
