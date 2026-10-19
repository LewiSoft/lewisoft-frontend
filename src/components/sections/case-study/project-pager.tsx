import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { getAdjacentProjects } from "@/data/projects";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

export function ProjectPager({ slug }: { slug: string }) {
  const { previous, next } = getAdjacentProjects(slug);

  return (
    <nav aria-label="More case studies" className="bg-ink/5 py-10 dark:bg-ink">
      <Container className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <PagerLink project={previous} direction="previous" />
        <PagerLink project={next} direction="next" />
      </Container>
    </nav>
  );
}

function PagerLink({
  project,
  direction,
}: {
  project: Project;
  direction: "previous" | "next";
}) {
  const isNext = direction === "next";

  return (
    <Link
      href={`/work/${project.slug}`}
      className={cn(
        "group flex flex-col justify-between gap-6 rounded-xl bg-card p-6 transition-colors hover:bg-muted",
        isNext && "md:items-end md:text-right",
      )}
    >
      <span className="flex items-center gap-2 font-mono text-[13px] text-muted-foreground uppercase transition-colors group-hover:text-primary">
        {!isNext && (
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
        )}
        {isNext ? "Next case study" : "Previous case study"}
        {isNext && (
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        )}
      </span>
      <span
        className={cn(
          "flex items-center gap-4",
          isNext && "md:flex-row-reverse",
        )}
      >
        <span className="relative size-16 shrink-0 overflow-hidden rounded-lg bg-secondary">
          <Image
            src={project.image}
            alt=""
            fill
            sizes="64px"
            className="object-cover"
          />
        </span>
        <span>
          <span className="block font-heading text-xl font-semibold transition-colors group-hover:text-primary">
            {project.name}
          </span>
          <span className="block text-sm text-muted-foreground">
            {project.tagline} • {project.country}
          </span>
        </span>
      </span>
    </Link>
  );
}
