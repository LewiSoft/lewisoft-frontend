# lewisoft-frontend

Frontend for the LewiSoft studio website: portfolio, services and contact pages, built with Next.js, TypeScript and Tailwind CSS. The public face of LewiSoft: a fast, responsive portfolio and marketing site showcasing our web projects. LewiSoft website frontend: UI, pages and components for our portfolio, case studies and project enquiries.

LewiSoft is a two-person web development studio: **Lemuel** (frontend) and **William** (backend). The backend API lives in a separate repository.

## Tech stack

| Area            | Choice                                                                                          |
| --------------- | ----------------------------------------------------------------------------------------------- |
| Framework       | [Next.js 16](https://nextjs.org) (App Router, Turbopack, Cache Components)                      |
| Language        | TypeScript                                                                                      |
| Styling         | Tailwind CSS v4 + `tw-animate-css`                                                              |
| UI components   | [shadcn/ui](https://ui.shadcn.com) (`base-nova` style, built on [Base UI](https://base-ui.com)) |
| Icons           | lucide-react                                                                                    |
| Animation       | motion (Framer Motion)                                                                          |
| Theming         | next-themes (light / dark / system)                                                             |
| Forms           | react-hook-form + zod + @hookform/resolvers, with the shadcn `Field` components                 |
| Toasts          | sonner                                                                                          |
| Linting / style | ESLint (`eslint-config-next`) + Prettier with `prettier-plugin-tailwindcss`                     |
| Package manager | pnpm (version pinned via `packageManager` in `package.json`)                                    |

## Getting started

Requirements: Node.js 20.9+ (developed on Node 24) and pnpm.

```bash
# Enable pnpm via Corepack (once per machine; may need sudo on macOS)
corepack enable

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local

# Start the dev server at http://localhost:3000
pnpm dev
```

### Scripts

| Command             | Description                                 |
| ------------------- | ------------------------------------------- |
| `pnpm dev`          | Start the development server                |
| `pnpm build`        | Create a production build                   |
| `pnpm start`        | Serve the production build                  |
| `pnpm lint`         | Run ESLint                                  |
| `pnpm format`       | Format all files with Prettier              |
| `pnpm format:check` | Check formatting without writing            |
| `pnpm typecheck`    | Generate route types and run `tsc --noEmit` |

Use **pnpm only**. Don't commit a `package-lock.json` or `yarn.lock` (both are git-ignored).

### Adding shadcn/ui components

```bash
pnpm dlx shadcn@latest add <component>
```

Components are written to `src/components/ui/`. This project uses the Base UI flavour of shadcn, so composition uses the `render` prop rather than `asChild`. To style a `next/link` as a button, use `buttonVariants()`:

```tsx
<Link href="/contact" className={buttonVariants()}>
  Start a project
</Link>
```

## Folder structure

```
src/
├── app/
│   ├── layout.tsx            # Fonts, ThemeProvider, Header, Footer, root metadata
│   ├── page.tsx              # Home (placeholder)
│   ├── work/page.tsx         # Our Work (placeholder)
│   ├── work/[slug]/page.tsx  # Case study (placeholder, static params from data/projects)
│   ├── services/page.tsx     # Services (placeholder)
│   ├── about/page.tsx        # About (placeholder)
│   ├── contact/page.tsx      # Contact (placeholder)
│   ├── not-found.tsx
│   ├── sitemap.ts
│   ├── robots.ts
│   └── globals.css           # Tailwind + theme colours (CSS variables)
├── components/
│   ├── ui/                   # shadcn/ui components
│   ├── layout/               # Header, Footer, MobileNav, Container, Logo, ThemeToggle
│   ├── sections/             # Page sections (homepage etc.)
│   └── theme-provider.tsx
├── data/
│   ├── projects.ts           # Portfolio projects
│   ├── services.ts
│   └── team.ts
├── lib/
│   ├── site.ts               # Site config + navigation links
│   └── utils.ts              # cn() class-name helper
└── types/
    └── index.ts              # Project, Service, TeamMember, NavItem
public/
└── images/
    ├── projects/             # Project screenshots (paths referenced in data/projects.ts)
    └── team/                 # Team photos
```

## Design foundations

- **Fonts:** Inter (body, `font-sans`) and Space Grotesk (headings, `font-heading`), loaded via `next/font` in `src/app/layout.tsx`.
- **Colours:** defined as CSS variables in `src/app/globals.css`. Look for the **"LEWISOFT THEME COLOURS: SWAP HERE"** block. The current values are placeholders: deep navy ink, off-white background and a teal accent (`primary`). There are also `bg-ink` / `text-ink-foreground` utilities for dark brand sections.
- **Logo:** `src/components/layout/logo.tsx` is a text wordmark that's ready to be swapped for an SVG.

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

| Variable               | Description                                                                         | Example                    |
| ---------------------- | ----------------------------------------------------------------------------------- | -------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Public URL of this site (no trailing slash). Used for metadata, sitemap and robots. | `https://lewisoft.example` |
| `NEXT_PUBLIC_API_URL`  | Base URL of the LewiSoft backend API (separate repo).                               | `http://localhost:8000`    |

Set `NEXT_PUBLIC_SITE_URL` in your hosting provider for production builds. Otherwise canonical URLs and the sitemap fall back to `http://localhost:3000`.

## License

[MIT](./LICENSE) © 2026 LewiSoft
