import { Container } from "@/components/layout/container";

/** Placeholder shown while a case study's content streams in. */
export function CaseStudySkeleton() {
  return (
    <div
      aria-busy="true"
      aria-label="Loading case study"
      className="animate-pulse"
    >
      <div className="h-11 bg-ink/60 dark:bg-ink" />
      <Container className="flex flex-col gap-5 pt-10 pb-16">
        <div className="h-6 w-64 rounded-full bg-muted" />
        <div className="h-14 w-full max-w-3xl rounded-lg bg-muted" />
        <div className="h-14 w-2/3 max-w-2xl rounded-lg bg-muted" />
        <div className="h-5 w-full max-w-2xl rounded bg-muted" />
        <div className="mt-6 aspect-video w-full rounded-xl bg-card" />
      </Container>
    </div>
  );
}
