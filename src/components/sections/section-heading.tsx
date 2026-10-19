import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  /** Supporting copy, or any node such as a mono caption. */
  aside?: React.ReactNode;
  align?: "split" | "center";
  className?: string;
};

export function Eyebrow({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "font-mono text-[11px] font-semibold tracking-widest text-primary uppercase",
        className,
      )}
      {...props}
    />
  );
}

export function SectionHeading({
  eyebrow,
  title,
  aside,
  align = "split",
  className,
}: SectionHeadingProps) {
  if (align === "center") {
    return (
      <div
        className={cn(
          "mb-10 flex flex-col items-center text-center",
          className,
        )}
      >
        <Eyebrow className="mb-2">{eyebrow}</Eyebrow>
        <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-balance md:text-5xl md:leading-14">
          {title}
        </h2>
        {aside}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end",
        className,
      )}
    >
      <div className="max-w-3xl">
        <Eyebrow className="mb-2">{eyebrow}</Eyebrow>
        <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl md:leading-14">
          {title}
        </h2>
      </div>
      {typeof aside === "string" ? (
        <p className="max-w-md text-muted-foreground">{aside}</p>
      ) : (
        aside
      )}
    </div>
  );
}
