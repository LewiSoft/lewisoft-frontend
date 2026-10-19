export type NavItem = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  name: string;
  /** Compact name for tight spaces such as the homepage client strip. */
  shortName: string;
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
  summary: string;
  highlights: string[];
  icon: ServiceIcon;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  location: string;
  timezone: string;
  stack: string[];
  /** Path under /public, e.g. "/images/team/lemuel.jpg" */
  image: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  company: string;
  location: string;
};
