import { cn } from "@/lib/utils";

/** Small status dot with an optional radar-style ping. */
export function PulseDot({
  ping = false,
  className,
}: {
  ping?: boolean;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={cn("relative flex size-2 text-primary", className)}
    >
      {ping && (
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-current opacity-75" />
      )}
      <span
        className={cn(
          "relative inline-flex size-full rounded-full bg-current",
          !ping && "animate-pulse",
        )}
      />
    </span>
  );
}
