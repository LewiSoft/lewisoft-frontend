import {
  AtSign,
  CalendarDays,
  ExternalLink,
  MessageCircle,
  Network,
} from "lucide-react";

import { contactConfig } from "@/lib/site";

import { PulseDot } from "../pulse-dot";
import { glowButtonClassName } from "../styles";
import { CopyEmailButton } from "./copy-email-button";

function CardLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
      {children}
    </p>
  );
}

/** Right-hand column of the Contact page: booking, direct channels, hubs. */
export function ContactChannels() {
  const { email, whatsapp, whatsappDisplay, bookingUrl, hubs } = contactConfig;

  return (
    <div className="flex flex-col gap-6">
      {bookingUrl && (
        <section
          aria-labelledby="booking-heading"
          className="relative overflow-hidden rounded-2xl bg-linear-to-br from-muted to-card p-6 shadow-xl"
        >
          <div className="mb-3 flex items-center justify-between">
            <CardLabel>Direct calendar</CardLabel>
            <span className="flex items-center gap-1.5 font-mono text-[11px] text-primary">
              <PulseDot ping />
              Slots live
            </span>
          </div>
          <h2 id="booking-heading" className="mb-2 text-2xl font-semibold">
            Book a free 20-min architecture call
          </h2>
          <p className="mb-5 text-sm text-muted-foreground">
            Skip the back-and-forth emails. Grab a 20-minute screen-share to
            discuss feasibility, stack and delivery milestones.
          </p>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
            className={glowButtonClassName}
          >
            <CalendarDays data-icon="inline-start" />
            Open scheduler
            <ExternalLink data-icon="inline-end" />
          </a>
          <p className="mt-3 font-mono text-[11px] text-muted-foreground">
            Mon–Fri • 9:00–18:00 Accra / London time
          </p>
        </section>
      )}

      <section
        aria-labelledby="channels-heading"
        className="flex flex-col gap-3 rounded-2xl bg-card p-6 shadow-xl"
      >
        <h2 id="channels-heading">
          <CardLabel>Direct channels</CardLabel>
        </h2>

        {whatsapp && (
          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 rounded-xl bg-background p-4 transition-colors hover:bg-muted"
          >
            <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <MessageCircle className="size-5" />
            </span>
            <span>
              <span className="block font-heading font-semibold group-hover:text-primary">
                WhatsApp
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                {whatsappDisplay ?? `+${whatsapp}`}
              </span>
            </span>
          </a>
        )}

        <div className="flex flex-col gap-3 rounded-xl bg-background p-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-sky">
                <AtSign className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block font-heading font-semibold">Email</span>
                <a
                  href={`mailto:${email}`}
                  className="block truncate font-mono text-xs text-primary hover:underline"
                >
                  {email}
                </a>
              </span>
            </div>
            <CopyEmailButton email={email} />
          </div>
          <p className="flex justify-between border-t pt-3 font-mono text-[11px] text-muted-foreground">
            <span>Response target</span>
            <span className="text-foreground">Within 4 hours (weekdays)</span>
          </p>
        </div>
      </section>

      <section
        aria-labelledby="hubs-heading"
        className="flex flex-col gap-4 rounded-2xl bg-card p-6 shadow-xl"
      >
        <h2 id="hubs-heading">
          <CardLabel>Studio hubs</CardLabel>
        </h2>
        <ul className="grid grid-cols-2 gap-3">
          {hubs.map((hub) => (
            <li key={hub.city} className="rounded-xl bg-background p-4">
              <p className="mb-1 flex items-center justify-between font-mono text-[10px] font-semibold tracking-wider text-primary uppercase">
                {hub.city} hub
                <span className="text-muted-foreground">{hub.timezone}</span>
              </p>
              <p className="font-heading text-lg font-semibold">{hub.city}</p>
              <p className="text-sm text-muted-foreground">{hub.country}</p>
            </li>
          ))}
        </ul>
        <p className="flex items-start gap-2 text-sm text-muted-foreground">
          <Network className="mt-0.5 size-4 shrink-0 text-brand-sky" />
          Overlapping time zones mean fast coordination across West Africa,
          Europe and the US East Coast.
        </p>
      </section>
    </div>
  );
}
