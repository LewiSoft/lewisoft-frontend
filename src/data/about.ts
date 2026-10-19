import type { Fact } from "@/types";

// Copy from the Stitch About design.

export const studioFacts: Fact[] = [
  {
    label: "Timezones",
    value: "UTC+0 / BST",
    detail: "Accra & London in sync",
  },
  {
    label: "Engineering",
    value: "100% in-house",
    detail: "No subcontractor handoffs",
  },
  {
    label: "Capacity",
    value: "2 active sprints",
    detail: "Focused boutique throughput",
  },
  {
    label: "Release cycle",
    value: "Weekly demo",
    detail: "Working preview builds",
  },
];

export const originStory = [
  "LewiSoft emerged from frustration with the fragmented agency model. Working across startups and digital projects in London and Accra, we kept seeing the same pattern: agencies with high overheads charging premium rates, then handing the work to junior contractors or disconnected offshore teams.",
  "The result was predictable. Talented designers created dazzling Figma mockups that fell apart in production, while separate backend teams shipped slow, fragile code that couldn’t adapt to changing requirements.",
  "We combined Lemuel’s depth in responsive typography, fluid micro-interactions and React/Next.js systems with William’s expertise in distributed systems, database design and cloud hosting. Design and infrastructure are no longer separate stages — they evolve together from day one.",
];

export const studioGuarantees = [
  {
    title: "100% in-house engineering",
    description:
      "Every commit is written by Lemuel or William. We never farm out your codebase.",
  },
  {
    title: "Zero junior handoffs",
    description:
      "You talk directly to the engineers solving your problems, not account coordinators.",
  },
  {
    title: "Full lifecycle ownership",
    description:
      "From system architecture and pixel-level styling to database migrations and DNS cutover.",
  },
];

export type Principle = {
  name: string;
  tagline: string;
  description: string;
  marker: string;
};

export const principles: Principle[] = [
  {
    name: "Craft",
    tagline: "Every pixel and query has purpose",
    description:
      "Fluid responsive typography, smooth micro-interactions, fast server responses and clean semantic markup. We write code we're proud to sign.",
    marker: "Lighthouse 98+ target",
  },
  {
    name: "Clarity",
    tagline: "Radical transparency throughout",
    description:
      "No jargon, no hidden fees and no silent delays. You get working preview builds every week, visible progress and plain-English updates on timeline and scope.",
    marker: "Weekly preview builds",
  },
  {
    name: "Reliability",
    tagline: "Built for real-world conditions",
    description:
      "Whether it's a property showcase viewed from London or an admissions surge on mobile data in Accra, our platforms are built to stay up and degrade gracefully.",
    marker: "Uptime-first engineering",
  },
  {
    name: "Partnership",
    tagline: "Your flagship is our flagship",
    description:
      "We don't just close tickets. We challenge faulty assumptions, tune business logic for conversion and build foundations that give you a lasting edge.",
    marker: "Direct engineer access",
  },
];

export type ToolCategory = {
  name: string;
  tools: { name: string; role: string }[];
  outcome: string;
};

// TODO: trim this to the tools you actually use day to day.
export const toolkit: ToolCategory[] = [
  {
    name: "Frontend & UI",
    tools: [
      { name: "Next.js (App Router)", role: "SSR / SSG" },
      { name: "React", role: "Core UI" },
      { name: "TypeScript", role: "Strict types" },
      { name: "Tailwind CSS", role: "Utility design" },
      { name: "Framer Motion", role: "Animation" },
      { name: "Figma", role: "Systems" },
    ],
    outcome: "Sub-second first contentful paint",
  },
  {
    name: "Backend & Data",
    tools: [
      { name: "Node.js", role: "Runtime" },
      { name: "PostgreSQL", role: "Relational" },
      { name: "Supabase", role: "Auth & DB" },
      { name: "Redis", role: "In-memory" },
      { name: "Python", role: "Data pipelines" },
      { name: "GraphQL & REST", role: "API contracts" },
    ],
    outcome: "No schema bottlenecks",
  },
  {
    name: "Infrastructure & Edge",
    tools: [
      { name: "Vercel", role: "Global CDN" },
      { name: "AWS", role: "Cloud scale" },
      { name: "Docker", role: "Deterministic builds" },
      { name: "Cloudflare", role: "DNS & protection" },
      { name: "GitHub Actions", role: "CI/CD" },
      { name: "Sentry", role: "Error tracking" },
    ],
    outcome: "Zero-downtime deploys",
  },
  {
    name: "CMS & Integrations",
    tools: [
      { name: "Sanity", role: "Structured CMS" },
      { name: "Stripe", role: "Global checkout" },
      { name: "Paystack", role: "African payments" },
      { name: "Resend", role: "Transactional email" },
      { name: "Twilio", role: "SMS / WhatsApp" },
      { name: "PostHog", role: "Product analytics" },
    ],
    outcome: "Multi-currency payments",
  },
];
