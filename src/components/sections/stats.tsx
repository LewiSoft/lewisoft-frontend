import { Container } from "@/components/layout/container";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

import { gradientTextClassName } from "./styles";

type Stat = {
  value: string;
  label: string;
  detail: string;
  gradient: string;
};

const stats: Stat[] = [
  {
    value: `${projects.length}+`,
    label: "Projects Shipped",
    detail: "Flawless client delivery record",
    gradient: "from-primary to-brand-sky",
  },
  {
    value: "2",
    label: "Countries",
    detail: "Ghana & UK active operations",
    gradient: "from-brand-sky to-primary",
  },
  {
    value: "FE + BE",
    label: "Under One Roof",
    detail: "Lemuel & William end-to-end",
    gradient: "from-brand-teal to-primary",
  },
  {
    value: "100%",
    label: "Responsive Code",
    detail: "Mobile, tablet & ultra-wide",
    gradient: "from-primary to-brand-teal",
  },
];

export function Stats() {
  return (
    <section
      aria-label="Studio at a glance"
      className="dark my-6 bg-ink py-10 shadow-xl"
    >
      <Container>
        <dl className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center rounded-lg bg-white/5 p-4 text-center md:items-start md:text-left"
            >
              <dt className="mt-1 font-heading font-semibold text-ink-foreground">
                {stat.label}
              </dt>
              <dd
                className={cn(
                  gradientTextClassName,
                  stat.gradient,
                  "order-first font-heading text-4xl font-bold tracking-tight whitespace-nowrap sm:text-5xl xl:text-6xl",
                )}
              >
                {stat.value}
              </dd>
              <dd className="mt-0.5 font-mono text-[13px] text-ink-foreground/70">
                {stat.detail}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
