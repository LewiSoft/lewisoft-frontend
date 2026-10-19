import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowLeft, ArrowUpRight, Lock } from "lucide-react";

import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { projectCategories } from "@/data/projects";
import { cn } from "@/lib/utils";
import type { CaseStudy, Project } from "@/types";

import { BrowserChrome } from "../browser-frame";
import { PulseDot } from "../pulse-dot";
import { glowButtonClassName, gradientTextClassName } from "../styles";

export function CaseStudyHero({
  project,
  caseStudy,
}: {
  project: Project;
  caseStudy?: CaseStudy;
}) {
  const host = new URL(project.liveUrl).hostname;
  const category = projectCategories[project.category].label;

  return (
    <>
      <nav aria-label="Breadcrumb" className="bg-ink/60 dark:bg-ink">
        <Container className="flex flex-wrap items-center gap-3 py-3 font-mono text-[13px]">
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-primary transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Back to all projects
          </Link>
          <ol className="flex flex-wrap items-center gap-3 text-muted-foreground">
            <li aria-hidden>/</li>
            <li>Work</li>
            <li aria-hidden>/</li>
            <li>{category}</li>
            <li aria-hidden>/</li>
            <li aria-current="page" className="font-semibold text-foreground">
              {project.name}
            </li>
          </ol>
        </Container>
      </nav>

      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 right-1/4 size-[500px] rounded-full bg-primary/5 blur-[140px]"
        />
        <Container className="relative flex flex-col gap-10 pt-10 pb-16">
          <div className="flex max-w-4xl flex-col items-start gap-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 font-mono text-[11px] font-semibold tracking-wider text-primary uppercase">
              <PulseDot />
              Case study // {project.industry} — {project.country}
            </span>
            <h1 className="text-4xl leading-tight font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {caseStudy ? (
                <>
                  {caseStudy.title.lead}{" "}
                  <span
                    className={cn(
                      gradientTextClassName,
                      "from-primary via-brand-sky to-foreground",
                    )}
                  >
                    {caseStudy.title.highlight}
                  </span>{" "}
                  {caseStudy.title.trail}
                </>
              ) : (
                <>
                  {project.name}:{" "}
                  <span
                    className={cn(
                      gradientTextClassName,
                      "from-primary via-brand-sky to-foreground",
                    )}
                  >
                    {project.tagline}
                  </span>
                </>
              )}
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
              {caseStudy?.intro ?? project.summary}
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              {caseStudy && (
                <Link href="#solution" className={glowButtonClassName}>
                  See what we built
                  <ArrowDown data-icon="inline-end" />
                </Link>
              )}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({
                  variant: "secondary",
                  size: "lg",
                  className: "h-12 gap-2 px-6 text-base",
                })}
              >
                Visit {project.shortName} live
                <ArrowUpRight data-icon="inline-end" className="text-primary" />
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl bg-ink p-2 shadow-2xl shadow-black/40 sm:p-3">
            <BrowserChrome
              address={host}
              trailing={<Lock className="text-primary" />}
              className="mb-2 rounded-lg bg-card sm:mb-3"
            />
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src={project.image}
                alt={`${project.name} website`}
                fill
                sizes="(min-width: 1152px) 1120px, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
