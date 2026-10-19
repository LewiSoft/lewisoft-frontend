import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { PagePlaceholder } from "@/components/layout/page-placeholder";

export default function NotFound() {
  return (
    <PagePlaceholder title="Page not found">
      <p className="mt-4 text-muted-foreground">
        Sorry, we couldn&apos;t find the page you were looking for.
      </p>
      <Link href="/" className={buttonVariants({ className: "mt-8" })}>
        Back to home
      </Link>
    </PagePlaceholder>
  );
}
