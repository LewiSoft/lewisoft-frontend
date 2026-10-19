import { Container } from "@/components/layout/container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { team } from "@/data/team";
import { cn } from "@/lib/utils";
import type { TeamMember } from "@/types";

import { PulseDot } from "./pulse-dot";
import { SectionHeading } from "./section-heading";
import { TechTags } from "./tech-tags";

// Lemuel's card uses the cyan accent, William's the sky accent.
const accents = [
  {
    text: "text-primary",
    badge: "bg-primary/10 text-primary",
    glow: "bg-primary/10",
  },
  {
    text: "text-brand-sky",
    badge: "bg-brand-blue/20 text-brand-sky",
    glow: "bg-brand-blue/10",
  },
] as const;

type TeamProps = {
  eyebrow?: string;
  title?: string;
  aside?: string;
  /** Show each founder's specialisations (used on the About page). */
  detailed?: boolean;
};

export function Team({
  eyebrow = "Meet the Founders",
  title = "Senior engineers. No project managers or account executives.",
  aside = "When you commission LeWiSoft, your project is planned, architected, designed, and coded exclusively by William and Lemuel.",
  detailed = false,
}: TeamProps) {
  return (
    <section id="about" className="scroll-mt-20 py-16">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} aside={aside} />
        <ul className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {team.map((member, index) => (
            <li key={member.name} className="flex">
              <FounderCard
                member={member}
                accent={accents[index % accents.length]}
                detailed={detailed}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function FounderCard({
  member,
  accent,
  detailed,
}: {
  member: TeamMember;
  accent: (typeof accents)[number];
  detailed: boolean;
}) {
  return (
    <article className="flex w-full flex-col items-start gap-6 rounded-2xl bg-card p-8 shadow-xl md:flex-row">
      <div className="flex w-full shrink-0 flex-col items-center md:w-44">
        <Avatar className="relative mb-3 size-36 rounded-2xl shadow-lg after:rounded-2xl">
          <AvatarImage
            src={member.image}
            alt={`Portrait of ${member.name}`}
            className="rounded-2xl"
          />
          <AvatarFallback
            className={cn(
              "rounded-2xl bg-secondary font-heading text-5xl font-bold",
              accent.text,
            )}
          >
            {member.name.charAt(0)}
          </AvatarFallback>
          <span
            aria-hidden
            className={cn(
              "absolute inset-0 rounded-2xl mix-blend-overlay",
              accent.glow,
            )}
          />
        </Avatar>
        <span
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full bg-secondary px-2.5 py-1 font-mono text-[10px]",
            accent.text,
          )}
        >
          <PulseDot className="size-1.5" />
          {member.location} • {member.timezone}
        </span>
      </div>

      <div className="flex h-full flex-col justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-3xl font-bold tracking-tight">{member.name}</h3>
            <span
              className={cn(
                "rounded-sm px-2.5 py-1 font-mono text-[11px] font-semibold uppercase",
                accent.badge,
              )}
            >
              {member.role}
            </span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {member.bio}
          </p>
        </div>
        {detailed && (
          <div>
            <p className="mb-2 font-mono text-[11px] tracking-wider text-muted-foreground uppercase">
              Specialisations
            </p>
            <p className="text-sm">{member.specializations.join(" • ")}</p>
          </div>
        )}
        <div>
          <p className="mb-2 font-mono text-[11px] tracking-wider text-muted-foreground uppercase">
            Core Tech Stack
          </p>
          <TechTags items={member.stack} />
        </div>
      </div>
    </article>
  );
}
