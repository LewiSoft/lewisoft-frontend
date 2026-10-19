import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { CaseStudyHero } from "@/components/sections/case-study/case-study-hero";
import {
  Challenge,
  Results,
  Solution,
} from "@/components/sections/case-study/case-study-narrative";
import { CaseStudyQuote } from "@/components/sections/case-study/case-study-quote";
import { CaseStudySkeleton } from "@/components/sections/case-study/case-study-skeleton";
import { KeyFacts } from "@/components/sections/case-study/key-facts";
import { ProjectPager } from "@/components/sections/case-study/project-pager";
import { CtaBanner } from "@/components/sections/cta-banner";
import { glowButtonClassName } from "@/components/sections/styles";
import { buttonVariants } from "@/components/ui/button";
import { getCaseStudy } from "@/data/case-studies";
import { getProjectBySlug, projects } from "@/data/projects";
import { testimonials } from "@/data/testimonials";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.summary,
  };
}

// The slug is read inside <Suspense> so the shared App Shell stays
// URL-independent and navigations between case studies paint instantly.
// Unknown slugs render the not-found UI with a noindex tag, but the HTTP status
// stays 200 because the shell has already started streaming.
export default function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  return (
    <Suspense fallback={<CaseStudySkeleton />}>
      <CaseStudyContent params={params} />
    </Suspense>
  );
}

async function CaseStudyContent({
  params,
}: Pick<PageProps<"/work/[slug]">, "params">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const caseStudy = getCaseStudy(slug);
  const testimonial = testimonials.find((item) => item.projectSlug === slug);

  return (
    <>
      <CaseStudyHero project={project} caseStudy={caseStudy} />
      <KeyFacts project={project} caseStudy={caseStudy} />
      {caseStudy && (
        <>
          <Challenge challenge={caseStudy.challenge} />
          <Solution solution={caseStudy.solution} />
          <Results results={caseStudy.results} />
        </>
      )}
      {testimonial && <CaseStudyQuote testimonial={testimonial} />}
      <CtaBanner
        eyebrow="Start a collaboration"
        title={`Have a ${project.industry.split(" /")[0].toLowerCase()} or digital platform project in mind?`}
        description="Work directly with founders Lemuel and William. We design, architect and ship high-converting web applications with complete end-to-end craft."
        actions={
          <>
            <Link href="/contact" className={glowButtonClassName}>
              Book a scope call
            </Link>
            <Link
              href="/services"
              className={buttonVariants({
                variant: "secondary",
                size: "lg",
                className: "h-12 px-6 text-base",
              })}
            >
              View our services
            </Link>
          </>
        }
      />
      <ProjectPager slug={slug} />
    </>
  );
}
