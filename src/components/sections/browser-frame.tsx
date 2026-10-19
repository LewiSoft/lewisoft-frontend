import { cn } from "@/lib/utils";

type BrowserChromeProps = {
  /** Hostname shown in the address bar. */
  address: string;
  /** Icon on the right of the bar, e.g. a lock or external-link glyph. */
  trailing?: React.ReactNode;
  className?: string;
};

/** The traffic-light title bar used on the site preview mockups. */
export function BrowserChrome({
  address,
  trailing,
  className,
}: BrowserChromeProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-3 bg-muted px-4 py-2.5 text-muted-foreground",
        className,
      )}
    >
      <div aria-hidden className="flex items-center gap-1.5">
        <span className="size-2 rounded-full bg-destructive/70" />
        <span className="size-2 rounded-full bg-foreground/20" />
        <span className="size-2 rounded-full bg-primary" />
      </div>
      <span className="truncate font-mono text-[10px] tracking-wide">
        {address}
      </span>
      <span className="flex [&_svg]:size-3.5">{trailing}</span>
    </div>
  );
}
