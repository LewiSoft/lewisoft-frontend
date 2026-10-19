import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const metadata: Metadata = {
  title: "About",
  description: "Meet the team behind LewiSoft.",
};

export default function AboutPage() {
  return <PagePlaceholder title="About" />;
}
