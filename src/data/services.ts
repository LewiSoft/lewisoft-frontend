import type { Service } from "@/types";

// Copy from the Stitch homepage design.
export const services: Service[] = [
  {
    slug: "business-websites",
    title: "Business & Marketing Websites",
    label: "Frontend",
    summary:
      "High-converting digital flagships built on lightning-fast Next.js architecture, bespoke brand aesthetics, and obsessive performance tuning.",
    highlights: [
      "Sub-second paint times",
      "Tailwind responsive systems",
      "CMS integrations (Sanity / Strapi)",
    ],
    icon: "website",
  },
  {
    slug: "web-applications",
    title: "Web Applications & Platforms",
    label: "Systems",
    summary:
      "Complex SaaS platforms, custom portals, dynamic dashboards, and bespoke workflow tools engineered for resilient scaling.",
    highlights: [
      "Role-based access controls",
      "Real-time WebSockets & charts",
      "Enterprise state management",
    ],
    icon: "platform",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design & Prototypes",
    label: "Product Design",
    summary:
      "User research, high-fidelity wireframing, clickable prototypes, and unified design token systems mapped cleanly directly to code.",
    highlights: [
      "Figma component systems",
      "User flow validation",
      "Micro-interactions & animations",
    ],
    icon: "design",
  },
  {
    slug: "backend-apis",
    title: "Backend & APIs",
    label: "Backend Core",
    summary:
      "Robust database schema design with PostgreSQL and MySQL, secure REST/GraphQL microservices, and reliable cloud functions.",
    highlights: [
      "High-throughput query tuning",
      "JWT / OAuth / MFA security",
      "Automated transactional pipelines",
    ],
    icon: "backend",
  },
  {
    slug: "ecommerce-booking",
    title: "E-commerce & Booking Systems",
    label: "Transactions",
    summary:
      "Custom checkouts, appointment calendars, inventory tracking, and multi-currency gateways integrating Paystack, Mobile Money, and Stripe.",
    highlights: [
      "Dual Ghana/UK payment rails",
      "Calendar & seat reservations",
      "Automated invoices & SMS alerts",
    ],
    icon: "commerce",
  },
  {
    slug: "maintenance-hosting-seo",
    title: "Maintenance, Hosting & SEO",
    label: "Reliability",
    summary:
      "High-availability cloud deployments on AWS and Vercel, automated regression tests, continuous backups, and technical SEO hygiene.",
    highlights: [
      "99.98% runtime uptime targets",
      "Edge caching and CDN rules",
      "Schema markup & sitemap engine",
    ],
    icon: "reliability",
  },
];
