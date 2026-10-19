import Link from "next/link";

import { Container } from "@/components/layout/container";
import { CurrentYear } from "@/components/layout/current-year";
import { Logo } from "@/components/layout/logo";
import { Separator } from "@/components/ui/separator";
import { mainNav, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto bg-ink text-ink-foreground">
      <Container className="flex flex-col gap-8 py-12">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div className="space-y-2">
            <Logo />
            <p className="max-w-sm text-sm opacity-70">
              {siteConfig.description}
            </p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-6">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm opacity-80 hover:opacity-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <Separator className="bg-ink-foreground/15" />
        <p className="text-xs opacity-60">
          © <CurrentYear /> {siteConfig.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
