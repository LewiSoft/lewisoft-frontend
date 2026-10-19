import type { Fact, Faq, Service } from "@/types";

// Copy from the Stitch homepage and Services designs.
// TODO: the timelines and starting prices are Stitch placeholders. Confirm
// them before launch, since visitors will read them as quotes.
export const services: Service[] = [
  {
    slug: "business-websites",
    title: "Business & Marketing Websites",
    label: "Frontend",
    summary:
      "High-converting digital flagships built on lightning-fast Next.js architecture, bespoke brand aesthetics, and obsessive performance tuning.",
    description:
      "Fast, conversion-optimised brand sites engineered with Next.js, Tailwind CSS and headless CMS integrations. Designed to turn international visitors into booked clients.",
    highlights: [
      "Sub-second paint times",
      "Tailwind responsive systems",
      "CMS integrations (Sanity / Strapi)",
    ],
    stack: [
      "Next.js (App Router)",
      "Tailwind CSS",
      "Sanity / Strapi CMS",
      "Vercel Edge",
    ],
    deliverables: [
      "Bespoke responsive layout",
      "Headless CMS integration",
      "Sub-second Core Web Vitals",
      "Micro-animations",
      "Automated CRM / WhatsApp routing",
      "On-page technical SEO",
    ],
    timeline: "2 – 4 weeks",
    price: "From $2,800",
    priceNote: "GHS 38,000",
    icon: "website",
  },
  {
    slug: "web-applications",
    title: "Web Applications & Platforms",
    label: "Systems",
    summary:
      "Complex SaaS platforms, custom portals, dynamic dashboards, and bespoke workflow tools engineered for resilient scaling.",
    description:
      "Complex portals, dashboards, student and parent platforms, and operational tools built with full-stack TypeScript, React, Node.js and relational databases.",
    highlights: [
      "Role-based access controls",
      "Real-time WebSockets & charts",
      "Enterprise state management",
    ],
    stack: [
      "TypeScript",
      "PostgreSQL / Supabase",
      "Node.js services",
      "WebSockets",
    ],
    deliverables: [
      "Role-based access & OAuth 2.0",
      "Relational schema architecture",
      "Real-time updates",
      "Custom admin dashboards",
      "Transactional SMS & email queues",
      "Automated CI/CD staging pipelines",
    ],
    timeline: "4 – 8 weeks",
    price: "From $5,500",
    priceNote: "GHS 75,000",
    icon: "platform",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design & Prototypes",
    label: "Product Design",
    summary:
      "User research, high-fidelity wireframing, clickable prototypes, and unified design token systems mapped cleanly directly to code.",
    description:
      "High-fidelity design systems, interactive prototypes and design-to-code component architectures tailored for complex workflows and high-converting platforms.",
    highlights: [
      "Figma component systems",
      "User flow validation",
      "Micro-interactions & animations",
    ],
    stack: [
      "Design tokens",
      "WCAG contrast",
      "Light & dark modes",
      "Prototypes",
    ],
    deliverables: [
      "User journey & wireframe blueprint",
      "Tokenised Figma library",
      "Interactive high-fidelity prototype",
      "Tailwind token export",
      "Responsive breakpoint audit",
      "Micro-interaction specs",
    ],
    timeline: "2 – 3 weeks",
    price: "From $1,800",
    priceNote: "GHS 24,000",
    icon: "design",
  },
  {
    slug: "backend-apis",
    title: "Backend & APIs",
    label: "Backend Core",
    summary:
      "Robust database schema design with PostgreSQL and MySQL, secure REST/GraphQL microservices, and reliable cloud functions.",
    description:
      "Robust REST and GraphQL services, third-party API integrations and cloud backends engineered by William for uninterrupted uptime.",
    highlights: [
      "High-throughput query tuning",
      "JWT / OAuth / MFA security",
      "Automated transactional pipelines",
    ],
    stack: [
      "Node.js / Python",
      "Redis caching",
      "Docker containers",
      "AWS cloud",
    ],
    deliverables: [
      "Clean REST & GraphQL endpoints",
      "Webhook bridges & queues",
      "Caching & rate limiting",
      "Database index optimisation",
      "Containerised Docker / AWS setups",
      "API docs & integration tests",
    ],
    timeline: "3 – 6 weeks",
    price: "From $3,500",
    priceNote: "GHS 48,000",
    icon: "backend",
  },
  {
    slug: "ecommerce-booking",
    title: "E-commerce & Booking Systems",
    label: "Transactions",
    summary:
      "Custom checkouts, appointment calendars, inventory tracking, and multi-currency gateways integrating Paystack, Mobile Money, and Stripe.",
    description:
      "Payment gateways bridging Ghana and international markets, custom booking portals and secure inventory management.",
    highlights: [
      "Dual Ghana/UK payment rails",
      "Calendar & seat reservations",
      "Automated invoices & SMS alerts",
    ],
    stack: ["Paystack", "Stripe", "Mobile Money (MoMo)", "Currency conversion"],
    deliverables: [
      "Cross-border checkout flows",
      "Booking calendar syncing",
      "Live inventory tracking",
      "Automated PDF invoices",
      "Transaction verification",
      "Abandoned checkout recovery",
    ],
    timeline: "3 – 5 weeks",
    price: "From $4,200",
    priceNote: "GHS 58,000",
    icon: "commerce",
  },
  {
    slug: "maintenance-hosting-seo",
    title: "Maintenance, Hosting & SEO",
    label: "Reliability",
    summary:
      "High-availability cloud deployments on AWS and Vercel, automated regression tests, continuous backups, and technical SEO hygiene.",
    description:
      "Ongoing engineering support, security patching, performance monitoring and agreed response times for issues.",
    highlights: [
      "99.98% runtime uptime targets",
      "Edge caching and CDN rules",
      "Schema markup & sitemap engine",
    ],
    stack: [
      "Health checks",
      "Weekly backups",
      "Monthly dev hours",
      "Priority support",
    ],
    deliverables: [
      "Uptime & Web Vitals monitoring",
      "Framework & security patches",
      "Feature backlog sprints",
      "Cloud spend reviews",
      "Direct founder channel",
      "Backups & disaster recovery",
    ],
    timeline: "Monthly retainer",
    price: "From $850",
    priceNote: "per month",
    icon: "reliability",
  },
];

/** Headline facts for the Services page hero. */
export const engagementFacts: Fact[] = [
  {
    label: "Performance target",
    value: "< 0.8s LCP",
    detail: "Core Web Vitals baseline",
  },
  {
    label: "Typical cycle",
    value: "2 – 6 weeks",
    detail: "Scoped milestones & staging",
  },
  {
    label: "Payments",
    value: "USD / GBP / GHS",
    detail: "Paystack, Stripe, bank transfer",
  },
  {
    label: "Warranty",
    value: "30 days included",
    detail: "Post-launch bug fixes",
  },
];

// TODO: confirm these answers reflect how you actually work.
export const serviceFaqs: Faq[] = [
  {
    question: "How do we work together with Lemuel and William directly?",
    answer:
      "You work only with the two of us. We set up a shared Slack channel or WhatsApp group for quick check-ins, and every week or sprint we share fresh preview builds on staging URLs, so you review real progress rather than slide decks.",
  },
  {
    question: "What currencies and payment schedules do you accept?",
    answer:
      "We accept USD, GBP and Ghanaian Cedi (GHS). International clients can pay by Stripe invoice, UK bank transfer or Wise; Ghana-based clients by local bank transfer or Mobile Money. Fixed-scope projects usually follow a 50 / 25 / 25 milestone split (deposit, staging approval, launch).",
  },
  {
    question: "Can you work with our existing codebase or design files?",
    answer:
      "Yes. Many of our projects involve auditing, optimising or rebuilding existing systems. If you have Figma designs, Lemuel turns them into pixel-accurate Next.js and Tailwind components. If you have existing databases or APIs, William designs migrations or integrations around them.",
  },
  {
    question: "How fast can you kick off a project?",
    answer:
      "We limit ourselves to one or two main projects at a time to protect quality, so we can usually start onboarding within five business days of signing and receiving the deposit.",
  },
  {
    question: "What happens after the product launches?",
    answer:
      "Every project includes a 30-day warranty covering bugs, layout tweaks and setup help for your team. After that, you can move onto a monthly maintenance retainer.",
  },
];
