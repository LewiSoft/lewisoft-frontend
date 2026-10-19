export type NavItem = {
  label: string;
  href: string;
};

/** Filter groups on the Our Work page. */
export type ProjectCategory =
  "education" | "real-estate" | "consulting" | "fintech" | "events";

export type Project = {
  slug: string;
  name: string;
  /** Compact name for tight spaces such as the homepage client strip. */
  shortName: string;
  /** One-line positioning shown after the name, e.g. "Luxury Property Engine". */
  tagline: string;
  category: ProjectCategory;
  industry: string;
  country: string;
  summary: string;
  liveUrl: string;
  tags: string[];
  /** Main technologies used, shown as tags on project cards. */
  stack: string[];
  /** Path under /public, e.g. "/images/projects/my-project.jpg" */
  image: string;
};

/** Keys for the icons in src/components/sections/services.tsx. */
export type ServiceIcon =
  "website" | "platform" | "design" | "backend" | "commerce" | "reliability";

export type Service = {
  slug: string;
  title: string;
  /** Short discipline label, e.g. "Frontend". */
  label: string;
  /** Short pitch used on the homepage cards. */
  summary: string;
  /** Longer pitch used on the Services page. */
  description: string;
  highlights: string[];
  /** Technologies or capabilities shown in the Services page "stack" box. */
  stack: string[];
  deliverables: string[];
  /** e.g. "2 – 4 weeks" or "Monthly retainer". */
  timeline: string;
  /** Starting price, e.g. "From $2,800". */
  price: string;
  /** Secondary price line, e.g. "GHS 38,000" or "per month". */
  priceNote?: string;
  icon: ServiceIcon;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  location: string;
  timezone: string;
  stack: string[];
  specializations: string[];
  /** Path under /public, e.g. "/images/team/lemuel.jpg" */
  image: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  company: string;
  location: string;
  /** Slug of the related project, so case studies can show the quote. */
  projectSlug?: string;
};

/** A headline fact: small label, prominent value, supporting detail. */
export type Fact = { label: string; value: string; detail: string };

export type Faq = {
  question: string;
  answer: string;
};

export type CaseStudyIssue = {
  title: string;
  description: string;
  impact: string;
};

export type CaseStudyFeature = {
  label: string;
  title: string;
  description: string;
  points: string[];
  /** Optional one-line result, e.g. "Asset payload reduction · 88% lighter". */
  outcome?: string;
};

export type CaseStudyResult = {
  label: string;
  value: string;
  caption: string;
  description: string;
};

export type CaseStudy = {
  projectSlug: string;
  /** Headline; the part in `highlight` is rendered with the gradient. */
  title: { lead: string; highlight: string; trail: string };
  intro: string;
  facts: Fact[];
  challenge: { title: string; intro: string; issues: CaseStudyIssue[] };
  solution: { title: string; intro: string; features: CaseStudyFeature[] };
  results: { title: string; intro: string; items: CaseStudyResult[] };
};
