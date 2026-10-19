import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** The cyan-to-blue glowing call-to-action from the Stitch design. */
export const glowButtonClassName = cn(
  buttonVariants({ size: "lg" }),
  "h-12 gap-2 bg-linear-to-r from-primary to-brand-blue px-7 text-base font-bold text-primary-foreground",
  "shadow-[0_0_24px_color-mix(in_oklab,var(--primary)_35%,transparent)] hover:bg-transparent hover:shadow-[0_0_36px_color-mix(in_oklab,var(--primary)_50%,transparent)]",
  "active:scale-95",
);

/** Gradient text fill used on headline highlights and big numbers. */
export const gradientTextClassName =
  "bg-clip-text text-transparent bg-linear-to-r";
