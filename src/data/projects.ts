import type { Project } from "@/types";

// TODO: replace summaries and tags with final copy, and add screenshots to
// public/images/projects/ using the paths below.
export const projects: Project[] = [
  {
    slug: "thornton-heath-after-school-club",
    name: "Thornton Heath After School Club",
    industry: "Education",
    country: "UK",
    summary:
      "Website for an after-school club in Thornton Heath, giving parents the key information they need about sessions and enrolment.",
    liveUrl: "https://th-afterschoolclub.netlify.app/",
    tags: ["Education", "Childcare", "Website"],
    image: "/images/projects/thornton-heath-after-school-club.jpg",
  },
  {
    slug: "dagenham-after-school-club",
    name: "Dagenham After School Club",
    industry: "Education",
    country: "UK",
    summary:
      "Website for an after-school club in Dagenham, presenting its programme and making it easy for parents to get in touch.",
    liveUrl: "https://dagenhamasc.netlify.app/",
    tags: ["Education", "Childcare", "Website"],
    image: "/images/projects/dagenham-after-school-club.jpg",
  },
  {
    slug: "nyonaah-developers",
    name: "Nyonaah Developers",
    industry: "Real Estate",
    country: "Ghana",
    summary:
      "Marketing website for a Ghanaian real estate developer, showcasing its developments to prospective buyers.",
    liveUrl: "https://nyonaahdevelopers.netlify.app/",
    tags: ["Real Estate", "Website"],
    image: "/images/projects/nyonaah-developers.jpg",
  },
  {
    slug: "menes-konsult-global",
    name: "Menes Konsult Global",
    industry: "Consulting",
    country: "USA",
    summary:
      "Website for a consulting firm, outlining its services and expertise for prospective clients.",
    liveUrl: "https://meneskonsult.netlify.app/",
    tags: ["Consulting", "Website"],
    image: "/images/projects/menes-konsult-global.jpg",
  },
  {
    slug: "epcfworld",
    name: "EPCFWorld",
    industry: "Fintech / Investment",
    country: "Nigeria",
    summary:
      "Website for an investment and fintech brand, explaining its offering and building trust with potential investors.",
    liveUrl: "https://epcfworld.netlify.app/",
    tags: ["Fintech", "Investment", "Website"],
    image: "/images/projects/epcfworld.jpg",
  },
  {
    slug: "ashesi-fde-market-day-2024",
    name: "Ashesi FDE Market Day 2024",
    industry: "Events / Education",
    country: "Ghana",
    summary:
      "Event website for Ashesi University's FDE Market Day 2024, featuring the event details and participating student ventures.",
    liveUrl: "https://fdemarketday.netlify.app/",
    tags: ["Events", "Education", "Website"],
    image: "/images/projects/ashesi-fde-market-day-2024.jpg",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
