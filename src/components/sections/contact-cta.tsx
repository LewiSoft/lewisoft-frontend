import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

import { ProjectEnquiryForm } from "./project-enquiry-form";
import { PulseDot } from "./pulse-dot";
import { gradientTextClassName } from "./styles";

export function ContactCta() {
  return (
    <section id="contact" className="scroll-mt-20 py-16">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-muted to-card p-8 shadow-2xl lg:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -bottom-24 size-96 rounded-full bg-primary/15 blur-[100px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -left-24 size-80 rounded-full bg-brand-blue/15 blur-[90px]"
          />

          <div className="relative flex max-w-3xl flex-col items-start gap-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 font-mono text-[11px] font-semibold tracking-wider text-primary uppercase">
              <PulseDot />
              Open for Commission
            </span>

            <h2 className="text-4xl leading-tight font-bold tracking-tight md:text-5xl lg:text-7xl lg:leading-20">
              Have a project in mind? <br />
              <span
                className={cn(
                  gradientTextClassName,
                  "from-primary to-brand-sky",
                )}
              >
                Let’s build it.
              </span>
            </h2>

            <p className="text-lg text-muted-foreground">
              Whether you need a brand-new web application, a high-converting
              marketing site, or an end-to-end platform rebuild, talk directly
              to the two people who will build it.
            </p>

            <div className="w-full pt-1">
              <ProjectEnquiryForm />
              <p className="mt-4 flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <span
                  aria-hidden
                  className="size-2 shrink-0 rounded-full bg-primary"
                />
                Typically responds in under 4 hours • Based in Accra (UTC+0)
                &amp; London (UTC+0/BST)
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
