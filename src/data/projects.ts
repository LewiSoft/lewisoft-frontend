import type { Project } from "@/types";

// Summaries and stacks come from the Stitch homepage design.
// TODO: confirm each summary and stack is accurate, and replace the preview
// images in public/images/projects/ (currently Stitch mockups) with real
// screenshots.
export const projects: Project[] = [
  {
    slug: "thornton-heath-after-school-club",
    name: "Thornton Heath After School Club",
    shortName: "Thornton Heath ASC",
    industry: "Education",
    country: "UK",
    summary:
      "Tuition and childcare platform featuring tier selectors, free-assessment intake flow, published results metrics, verified parent testimonials, and a careers portal.",
    liveUrl: "https://th-afterschoolclub.netlify.app/",
    tags: ["Education", "Childcare", "Website"],
    stack: ["Next.js", "Tailwind", "Cal.com API"],
    image: "/images/projects/thornton-heath-after-school-club.jpg",
  },
  {
    slug: "dagenham-after-school-club",
    name: "Dagenham After School Club",
    shortName: "Dagenham ASC",
    industry: "Education / STEM",
    country: "UK",
    summary:
      "Modern tutoring and childcare platform for ages 5–16 with curriculum pages, coding programme showcase, and interactive multi-step inquiry modal.",
    liveUrl: "https://dagenhamasc.netlify.app/",
    tags: ["Education", "Childcare", "Website"],
    stack: ["React", "Node.js", "PostgreSQL"],
    image: "/images/projects/dagenham-after-school-club.jpg",
  },
  {
    slug: "nyonaah-developers",
    name: "Nyonaah Developers",
    shortName: "Nyonaah Developers",
    industry: "Real Estate",
    country: "Ghana",
    summary:
      "Luxury real estate developer showcase with architectural property showcases, off-plan investment decks, and high-converting investor lead capture.",
    liveUrl: "https://nyonaahdevelopers.netlify.app/",
    tags: ["Real Estate", "Website"],
    stack: ["Next.js", "Framer Motion", "Sanity CMS"],
    image: "/images/projects/nyonaah-developers.jpg",
  },
  {
    slug: "menes-konsult-global",
    name: "Menes Konsult Global",
    shortName: "Menes Konsult",
    industry: "Consulting",
    country: "USA",
    summary:
      "Corporate platform for an international consultancy bridging trade, governance, and business partnerships between Africa and European investment corridors.",
    liveUrl: "https://meneskonsult.netlify.app/",
    tags: ["Consulting", "Website"],
    stack: ["TypeScript", "Tailwind", "HubSpot API"],
    image: "/images/projects/menes-konsult-global.jpg",
  },
  {
    slug: "epcfworld",
    name: "EPCFWorld",
    shortName: "EPCFWorld",
    industry: "Fintech",
    country: "Nigeria",
    summary:
      "Secure, verified deal-sourcing platform connecting institutional and private capital with vetted business and infrastructure opportunities across emerging hubs.",
    liveUrl: "https://epcfworld.netlify.app/",
    tags: ["Fintech", "Investment", "Website"],
    stack: ["Next.js 14", "Prisma", "PostgreSQL"],
    image: "/images/projects/epcfworld.jpg",
  },
  {
    slug: "ashesi-fde-market-day-2024",
    name: "Ashesi FDE Market Day 2024",
    shortName: "Ashesi FDE",
    industry: "Events / Tech",
    country: "Ghana",
    summary:
      "Dedicated dynamic event site for Ashesi University’s flagship entrepreneurship market day with student enterprise directories and real-time public voting.",
    liveUrl: "https://fdemarketday.netlify.app/",
    tags: ["Events", "Education", "Website"],
    stack: ["React", "Supabase", "WebSockets"],
    image: "/images/projects/ashesi-fde-market-day-2024.jpg",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
