import type { Metadata } from "next";
import { Globe } from "lucide-react";

import { Container } from "@/components/layout/container";
import { ContactChannels } from "@/components/sections/contact/contact-channels";
import { ProjectBriefForm } from "@/components/sections/contact/project-brief-form";
import { PageHero } from "@/components/sections/page-hero";
import { PulseDot } from "@/components/sections/pulse-dot";
import { SectionHeading } from "@/components/sections/section-heading";
import type { Faq } from "@/types";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with LewiSoft. Tell us about your goals and timeline, and Lemuel & William will reply directly.",
};

const reassurances: Faq[] = [
  {
    question: "What happens after I submit?",
    answer:
      "We review your requirements, assess technical feasibility and come back with a proposal outline or a call booking, usually within 4 hours on business days.",
  },
  {
    question: "Can you sign an NDA first?",
    answer:
      "Absolutely. We respect your intellectual property and are happy to sign a mutual NDA before reviewing sensitive requirements or design assets.",
  },
  {
    question: "Do you work with clients outside Ghana and the UK?",
    answer:
      "Yes. We work remotely by default, so we can partner with founders and organisations wherever they are.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Start a project // Direct access"
        title="Let’s build something exceptional together."
        description="Tell us about your project, timeline and goals. You'll deal directly with Lemuel & William — no gatekeepers, no sales runaround."
      >
        <ul className="flex flex-wrap gap-3 font-mono text-xs text-muted-foreground">
          <li className="flex items-center gap-2 rounded-md bg-card px-3 py-2">
            <PulseDot ping />
            Accepting new projects
          </li>
          <li className="flex items-center gap-2 rounded-md bg-card px-3 py-2">
            <PulseDot className="text-brand-sky" />
            Direct founder access
          </li>
          <li className="flex items-center gap-2 rounded-md bg-card px-3 py-2">
            <Globe className="size-3.5 text-primary" />
            Accra & London
          </li>
        </ul>
      </PageHero>

      <section aria-label="Contact options" className="pb-16">
        <Container className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ProjectBriefForm />
          </div>
          <div className="lg:col-span-5">
            <ContactChannels />
          </div>
        </Container>
      </section>

      <section className="bg-ink/5 py-16 dark:bg-ink/60">
        <Container>
          <SectionHeading
            eyebrow="Collaboration FAQ"
            title="Before you hit send."
            aside={
              <p className="font-mono text-[13px] text-muted-foreground uppercase">
                Direct partnership. Zero agency bloat.
              </p>
            }
          />
          <ol className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {reassurances.map((item, index) => (
              <li key={item.question} className="rounded-xl bg-card p-6">
                <span className="mb-4 flex size-8 items-center justify-center rounded-full bg-primary/15 font-mono text-xs font-bold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-2 font-heading text-lg font-semibold">
                  {item.question}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.answer}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}
