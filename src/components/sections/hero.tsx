import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Gauge, Lock, ShieldCheck } from "lucide-react";

import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { BrowserChrome } from "./browser-frame";
import { PulseDot } from "./pulse-dot";
import { glowButtonClassName, gradientTextClassName } from "./styles";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/4 size-96 rounded-full bg-primary/10 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 -right-20 size-[450px] rounded-full bg-brand-blue/10 blur-[140px]"
      />

      <Container className="relative grid grid-cols-1 items-center gap-10 py-10 lg:grid-cols-2 lg:py-16">
        <HeroCopy />
        <HeroMockups />
      </Container>
    </section>
  );
}

function HeroCopy() {
  return (
    <div className="flex flex-col items-start gap-4">
      <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5">
        <PulseDot ping />
        <span className="font-mono text-[11px] font-semibold tracking-wider text-primary uppercase">
          Available for Q2/Q3 Projects • Ghana &amp; UK
        </span>
      </div>

      <h1 className="text-4xl leading-[1.08] font-bold tracking-tight sm:text-6xl lg:text-7xl">
        We build websites that{" "}
        <span
          className={cn(
            gradientTextClassName,
            "from-primary via-brand-sky to-brand-teal",
          )}
        >
          work as hard
        </span>{" "}
        as you do.
      </h1>

      <p className="max-w-xl text-lg text-muted-foreground">
        We design and develop fast, beautiful, and bulletproof websites and
        platforms for schools, real estate developers, consultancies, events,
        and ambitious startups.
      </p>

      <div className="flex w-full flex-wrap items-center gap-4 pt-1 sm:w-auto">
        <Link
          href="#work"
          className={buttonVariants({
            variant: "secondary",
            size: "lg",
            className: "h-12 gap-2 px-6 text-base font-semibold shadow-md",
          })}
        >
          See our work
          <ArrowDown data-icon="inline-end" />
        </Link>
        <Link href="#contact" className={glowButtonClassName}>
          Start a project
          <ArrowRight data-icon="inline-end" />
        </Link>
      </div>

      <p className="flex items-center gap-2 pt-2 font-mono text-[13px] text-muted-foreground">
        <ShieldCheck className="size-4 shrink-0 text-primary" />
        Direct access to Lemuel &amp; William. Zero middlemen, pure craft.
      </p>
    </div>
  );
}

/** Decorative composition of client-site mockups. */
function HeroMockups() {
  return (
    <div
      aria-hidden
      className="relative flex min-h-[460px] items-center justify-center lg:min-h-[560px]"
    >
      <div className="absolute inset-0 scale-95 -rotate-1 rounded-2xl bg-linear-to-tr from-card to-secondary/60 shadow-xl" />

      {/* Primary browser window */}
      <div className="relative z-20 w-full max-w-[500px] overflow-hidden rounded-xl bg-background/95 shadow-2xl backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1">
        <BrowserChrome
          address="thorntonheathasc.co.uk"
          trailing={<Lock />}
          className="bg-card"
        />
        <div className="space-y-4 p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex size-6 items-center justify-center rounded-sm bg-primary font-heading text-xs font-bold text-primary-foreground">
                TH
              </span>
              <span className="font-heading text-xs font-semibold">
                Thornton Heath ASC
              </span>
            </div>
            <span className="rounded-sm bg-primary/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-primary">
              ADMISSIONS OPEN
            </span>
          </div>
          <div className="relative h-28 overflow-hidden rounded-lg">
            <Image
              src="/images/hero/classroom.jpg"
              alt=""
              fill
              sizes="500px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 flex items-end bg-linear-to-t from-background via-transparent to-transparent p-2.5">
              <span className="font-heading text-xs font-semibold">
                Free Assessment Booking Active
              </span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 pt-1">
            {[
              { value: "98%", label: "Pass Rate", tone: "text-primary" },
              { value: "11+", label: "Prep Focus", tone: "text-foreground" },
              { value: "4.9★", label: "Reviews", tone: "text-brand-sky" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-sm bg-muted p-2 text-center"
              >
                <div
                  className={cn("font-heading text-xs font-bold", stat.tone)}
                >
                  {stat.value}
                </div>
                <div className="font-mono text-[9px] text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating real estate card */}
      <div className="absolute -right-2 -bottom-6 z-30 w-[270px] rounded-xl bg-secondary/95 p-4 shadow-2xl backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1.5 sm:right-0 sm:w-[310px]">
        <div className="mb-2 flex items-center justify-between pb-2">
          <span className="font-mono text-[10px] font-semibold tracking-widest text-brand-sky uppercase">
            Accra • Prime Sector
          </span>
          <PulseDot className="size-1.5" />
        </div>
        <div className="relative mb-2 h-20 overflow-hidden rounded-lg">
          <Image
            src="/images/hero/villa.jpg"
            alt=""
            fill
            sizes="310px"
            className="object-cover"
          />
        </div>
        <div className="flex items-center justify-between text-xs">
          <div>
            <div className="font-heading font-semibold">
              The Signature Crest
            </div>
            <div className="font-mono text-[11px] text-muted-foreground">
              78% Off-Plan Allocated
            </div>
          </div>
          <span className="rounded-sm bg-brand-blue px-2.5 py-1 font-heading text-[11px] font-bold text-white">
            Inquire
          </span>
        </div>
      </div>

      {/* Floating Core Web Vitals badge */}
      <div className="absolute -top-6 -left-4 z-30 flex items-center gap-3 rounded-lg bg-card/90 px-3.5 py-2.5 shadow-xl backdrop-blur-md sm:left-2">
        <span className="flex size-8 items-center justify-center rounded-sm bg-primary/15 text-primary">
          <Gauge className="size-4.5" />
        </span>
        <div>
          <div className="font-mono text-[11px] font-semibold text-primary">
            100 / 100
          </div>
          <div className="text-[11px] text-muted-foreground">
            Next.js Core Vitals
          </div>
        </div>
      </div>
    </div>
  );
}
