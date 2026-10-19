import type { TeamMember } from "@/types";

// Bios from the Stitch homepage design.
// TODO: add full names and photos (public/images/team/). Until a photo exists
// the homepage shows initials instead.
export const team: TeamMember[] = [
  {
    name: "Lemuel",
    role: "Frontend & UI/UX Lead",
    bio: "Specializing in React, Next.js, TypeScript, and modern CSS architectures. Lemuel crafts fluid, pixel-precise interfaces that load instantly, feel natural on touchscreens, and convert visitors into loyal customers.",
    location: "Accra",
    timezone: "UTC+0",
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "UI/UX Design",
      "Figma",
    ],
    specializations: [
      "Design systems engineering",
      "Micro-interactions",
      "Web performance & Core Web Vitals",
      "Headless storefronts",
    ],
    image: "/images/team/lemuel.jpg",
  },
  {
    name: "William",
    role: "Backend & Systems Lead",
    bio: "Architecting resilient APIs, distributed database schemas, authentication systems, and cloud infrastructure. William ensures LeWiSoft platforms run securely, scale smoothly, and handle mission-critical transactional loads.",
    location: "London",
    timezone: "UTC+0 / BST",
    stack: [
      "Node.js",
      "Python",
      "PostgreSQL",
      "REST / GraphQL",
      "Redis",
      "AWS / Docker",
    ],
    specializations: [
      "Relational schema architecture",
      "Multi-tenant auth security",
      "High-concurrency caching",
      "International payment orchestration",
    ],
    image: "/images/team/william.jpg",
  },
];
