import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { serviceFaqs } from "@/data/services";
import { contactConfig } from "@/lib/site";

import { FaqList } from "../faq-list";
import { Eyebrow } from "../section-heading";

export function EngagementFaq() {
  return (
    <section className="bg-ink/5 py-16 dark:bg-ink/60">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="flex flex-col gap-4 lg:col-span-5">
          <Eyebrow>[ 02 // Engagement Protocols ]</Eyebrow>
          <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl md:leading-14">
            How we operate, collaborate, and deliver.
          </h2>
          <p className="text-muted-foreground">
            Zero ambiguity. Before signing anything or writing code, we agree
            clear milestones, communication channels and deliverables.
          </p>
          <div className="mt-4 rounded-xl bg-card p-5">
            <p className="font-heading font-semibold">
              Prefer a direct conversation?
            </p>
            <p className="mt-1 mb-3 text-sm text-muted-foreground">
              Ask us specific technical questions about your stack by email.
            </p>
            <a
              href={`mailto:${contactConfig.email}`}
              className="group inline-flex items-center gap-2 font-mono text-sm text-primary"
            >
              {contactConfig.email}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
        <FaqList faqs={serviceFaqs} className="lg:col-span-7" />
      </Container>
    </section>
  );
}
