import { Container } from "@/components/layout/container";
import { projects } from "@/data/projects";

export function ClientStrip() {
  return (
    <section
      aria-labelledby="clients-heading"
      className="dark bg-ink/80 py-6 shadow-inner"
    >
      <Container className="flex flex-col items-center">
        <h2
          id="clients-heading"
          className="mb-4 text-center font-mono text-[11px] font-semibold tracking-[0.2em] text-ink-foreground/70 uppercase"
        >
          Trusted by ambitious teams in Ghana &amp; the UK
        </h2>
        <ul className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {projects.map((project) => (
            <li
              key={project.slug}
              className="rounded-sm bg-white/5 px-4 py-2.5 text-center font-heading text-sm font-medium tracking-tight text-ink-foreground/70 transition-colors hover:bg-white/10 hover:text-primary"
            >
              {project.shortName}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
