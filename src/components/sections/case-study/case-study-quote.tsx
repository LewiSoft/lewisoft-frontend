import { Star } from "lucide-react";

import { Container } from "@/components/layout/container";
import type { Testimonial } from "@/types";

export function CaseStudyQuote({ testimonial }: { testimonial: Testimonial }) {
  return (
    <section className="bg-ink/5 py-16 dark:bg-ink">
      <Container>
        <figure className="relative overflow-hidden rounded-2xl bg-card p-8 md:p-16">
          <span
            aria-hidden
            className="pointer-events-none absolute -top-10 -right-6 font-heading text-[180px] leading-none text-foreground/5 select-none"
          >
            “
          </span>
          <div className="relative flex max-w-4xl flex-col gap-6">
            <div
              role="img"
              aria-label="Rated 5 out of 5"
              className="flex items-center gap-1 text-primary"
            >
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className="size-5 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl leading-tight font-medium md:text-4xl">
              “{testimonial.quote}”
            </blockquote>
            <figcaption className="flex flex-col">
              <span className="font-heading text-sm font-bold">
                {testimonial.author}, {testimonial.company}
              </span>
              <span className="font-mono text-[11px] font-semibold text-primary uppercase">
                {testimonial.location}
              </span>
            </figcaption>
          </div>
        </figure>
      </Container>
    </section>
  );
}
