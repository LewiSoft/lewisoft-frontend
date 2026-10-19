import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const metadata: Metadata = {
  title: "Services",
  description: "Web design, development and support services from LewiSoft.",
};

export default function ServicesPage() {
  return <PagePlaceholder title="Services" />;
}
