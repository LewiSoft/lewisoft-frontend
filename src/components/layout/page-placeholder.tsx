import { Container } from "@/components/layout/container";

// Temporary page shell used until the real designs are built.
export function PagePlaceholder({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <Container className="py-24">
      <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
        {title}
      </h1>
      {children}
    </Container>
  );
}
