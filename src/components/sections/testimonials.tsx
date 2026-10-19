import { Star } from "lucide-react";

import { Container } from "@/components/layout/container";
import { testimonials } from "@/data/testimonials";

import { SectionHeading } from "./section-heading";

export function Testimonials() {
  return (
    <section className="my-6 bg-muted py-16 shadow-inner dark:bg-ink/60">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Endorsements"
          title="What founders and directors say about LewiSoft."
        />
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <li key={testimonial.company} className="flex">
              <figure className="flex w-full flex-col justify-between rounded-xl bg-card p-6 shadow-lg">
                <div className="mb-4">
                  <div
                    role="img"
                    aria-label="Rated 5 out of 5"
                    className="mb-3 flex items-center gap-1 text-primary"
                  >
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star key={i} className="size-4.5 fill-current" />
                    ))}
                  </div>
                  <blockquote className="leading-relaxed italic">
                    “{testimonial.quote}”
                  </blockquote>
                </div>
                <figcaption className="flex items-center gap-3 rounded-lg bg-muted/40 p-2.5">
                  <span
                    aria-hidden
                    className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary font-heading text-sm font-bold text-primary"
                  >
                    {initials(testimonial.company)}
                  </span>
                  <div>
                    <div className="font-heading text-sm font-semibold">
                      {testimonial.author}
                    </div>
                    <div className="font-mono text-[11px] text-muted-foreground">
                      {testimonial.company} • {testimonial.location}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((word) => word.charAt(0))
    .join("");
}
