export type NavItem = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  name: string;
  industry: string;
  country: string;
  summary: string;
  liveUrl: string;
  tags: string[];
  /** Path under /public, e.g. "/images/projects/my-project.jpg" */
  image: string;
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  /** Path under /public, e.g. "/images/team/lemuel.jpg" */
  image: string;
};
