import {
  GitCommitHorizontal,
  ShieldCheck,
  UserX,
  Workflow,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { originStory, studioGuarantees } from "@/data/about";
import { contactConfig } from "@/lib/site";

import { PulseDot } from "../pulse-dot";
import { Eyebrow } from "../section-heading";

const guaranteeIcons = [ShieldCheck, UserX, Workflow];

export function OriginStory() {
  const [accra, london] = contactConfig.hubs;

  return (
    <section className="py-16">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-7">
          <Eyebrow>[ Chapter 01 // Origin Story ]</Eyebrow>
          <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl md:leading-14">
            Frontend finesse meets robust backend resilience.
          </h2>
          <div className="flex flex-col gap-4 text-lg leading-relaxed text-muted-foreground">
            {originStory.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <figure className="flex gap-4 rounded-xl border-l-2 border-primary bg-card p-5">
            <GitCommitHorizontal className="mt-1 size-5 shrink-0 text-primary" />
            <div>
              <blockquote className="font-heading text-lg leading-snug">
                “When the person who builds your interface discusses schema
                design with the server architect directly, no intent gets lost.”
              </blockquote>
              <figcaption className="mt-2 font-mono text-[11px] tracking-wider text-muted-foreground uppercase">
                — The LewiSoft approach
              </figcaption>
            </div>
          </figure>
        </div>

        <aside className="flex flex-col gap-4 rounded-2xl bg-card p-6 shadow-xl lg:col-span-5">
          <p className="font-mono text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
            Studio overview
          </p>

          {/* Two hubs, one team */}
          <div className="flex items-center justify-between gap-3 rounded-xl bg-background p-5">
            {[accra, london].map((hub, index) => (
              <div
                key={hub.city}
                className={index === 1 ? "text-right" : undefined}
              >
                <p className="font-heading text-2xl font-bold">{hub.city}</p>
                <p className="font-mono text-[11px] text-muted-foreground">
                  {hub.timezone}
                </p>
              </div>
            ))}
          </div>
          <p className="-mt-2 flex items-center justify-center gap-2 font-mono text-[11px] font-semibold tracking-wider text-primary uppercase">
            <PulseDot ping />
            Same hours, one team
          </p>

          <ul className="flex flex-col gap-3">
            {studioGuarantees.map((guarantee, index) => {
              const Icon = guaranteeIcons[index % guaranteeIcons.length];
              return (
                <li
                  key={guarantee.title}
                  className="flex gap-3 rounded-lg bg-muted p-4"
                >
                  <Icon className="mt-0.5 size-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-heading font-semibold">
                      {guarantee.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {guarantee.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </aside>
      </Container>
    </section>
  );
}
