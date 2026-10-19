import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export type Highlight = {
  icon: LucideIcon;
  value: string;
  label: string;
  /** Icon colour, defaults to the primary accent. */
  tone?: string;
};

/** Row of icon + value + caption chips used in page heroes. */
export function HighlightChips({
  items,
  className,
}: {
  items: Highlight[];
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "grid w-full max-w-3xl grid-cols-2 gap-4 pt-1 sm:grid-cols-3",
        className,
      )}
    >
      {items.map(({ icon: Icon, value, label, tone }, index) => (
        <li
          key={label}
          className={cn(
            "flex items-center gap-3 rounded-lg bg-card p-2 shadow-sm",
            index === items.length - 1 &&
              items.length % 2 === 1 &&
              "col-span-2 sm:col-span-1",
          )}
        >
          <span
            className={cn(
              "flex size-10 shrink-0 items-center justify-center rounded-md bg-secondary",
              tone ?? "text-primary",
            )}
          >
            <Icon className="size-5" />
          </span>
          <span className="flex flex-col">
            <span className="font-heading text-lg font-semibold">{value}</span>
            <span className="font-mono text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
              {label}
            </span>
          </span>
        </li>
      ))}
    </ul>
  );
}
