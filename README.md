# ORIONS — orions.agency

Marketing site for **ORIONS**, an independent creative studio in Bangkok.
*Stories, Refined.* — three services, two signature approaches (`src/data/practice.ts`).

## Stack

- [TanStack Start](https://tanstack.com/start) + [TanStack Router](https://tanstack.com/router) (file-based, type-checked routes in `src/routes/`)
- [React 19](https://react.dev/) + TypeScript, on [Vite 7](https://vitejs.dev/)
- Every page is **prerendered to static HTML** at build time (`vite.config.ts` lists the pages) and served from Vercel's CDN — no server runs in production
- Per-page head tags come from `<SEO>`; React 19 hoists them into `<head>`
- [Tailwind CSS](https://tailwindcss.com/) (editorial design system in `src/index.css`; see `DESIGN_SYSTEM.md`)
- Contact form: Web3Forms → studio inbox

## Develop

```sh
npm install
npm run dev      # http://localhost:8080
```

## Build

```sh
npm run build    # prerenders every page into dist/client/
npm run preview  # preview the production build
npm test         # content contracts (vitest)
npm run typecheck  # tsc -b — plain `tsc --noEmit` checks nothing here
```

## Environment

Read at build time and inlined into the client bundle:

```
VITE_WEB3FORMS_KEY="..."          # contact form → studio inbox
```

## Structure

```
src/
  routes/       File-based routes; each one points at a page component
  pages/        Page components (Index, Work, CaseStudy, Services, About, Archive, …)
  components/   Shared UI (Nav, Footer, SEO, CTABand, HeroReel, Picture, …)
  data/         practice.ts — the blueprint; caseStudies.ts — the work; archive.ts — the Archive
  lib/          site-schema.ts — site-wide structured data (offer fields derived from practice.ts)
  index.css     Fonts, design tokens and utilities
```
