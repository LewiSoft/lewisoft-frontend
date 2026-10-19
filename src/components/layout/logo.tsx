import Link from "next/link";

import { cn } from "@/lib/utils";

// Placeholder wordmark. To use an SVG logo later, replace the <span> below
// with e.g. <Image src="/logo.svg" alt="LewiSoft" width={120} height={32} />.
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="LewiSoft home"
      className={cn("font-heading text-xl font-bold tracking-tight", className)}
    >
      <span>
        Lewi<span className="text-primary">Soft</span>
      </span>
    </Link>
  );
}
