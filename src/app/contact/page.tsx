import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with LewiSoft.",
};

export default function ContactPage() {
  return <PagePlaceholder title="Contact" />;
}
