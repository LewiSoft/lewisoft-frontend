import type { Metadata } from "next";
import Link from "next/link";

import { PagePlaceholder } from "@/components/layout/page-placeholder";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Selected websites and web apps built by LewiSoft.",
};

export default function WorkPage() {
  return (
    <PagePlaceholder title="Our Work">
      {/* Temporary links so every case study route is reachable. */}
      <ul className="mt-8 space-y-2">
        {projects.map((project) => (
          <li key={project.slug}>
            <Link
              href={`/work/${project.slug}`}
              className="text-primary underline-offset-4 hover:underline"
            >
              {project.name}
            </Link>
          </li>
        ))}
      </ul>
    </PagePlaceholder>
  );
}
