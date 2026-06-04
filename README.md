# ØRIONS — orions.agency

Marketing site for **ØRIONS**, a creative agency in Bangkok.
*Stories, refined.*

Brand Strategy · Creative Production · Social Media Marketing — in one team.

## Stack

- [Vite](https://vitejs.dev/) + [React 18](https://react.dev/) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) (custom editorial design system in `src/index.css`)
- [React Router](https://reactrouter.com/) for routing
- [Framer Motion](https://www.framer.com/motion/) for reveal animations
- [react-helmet-async](https://github.com/staylor/react-helmet-async) for per-page SEO
- [Supabase](https://supabase.com/) for the contact form
- shadcn/ui primitives (Radix)

## Develop

```sh
npm install
npm run dev      # http://localhost:8080
```

## Build

```sh
npm run build    # outputs to dist/
npm run preview  # preview the production build
npm test         # run unit tests (vitest)
```

## Environment

The contact form uses Supabase. Provide these in a `.env` file:

```
VITE_SUPABASE_URL="..."
VITE_SUPABASE_PUBLISHABLE_KEY="..."
VITE_SUPABASE_PROJECT_ID="..."
```

## Structure

```
src/
  pages/        Route components (Index, About, Services, Work, CaseStudy, Contact, NotFound)
  components/   Reusable UI + design-system pieces (Nav, Footer, Reveal, SEO, CTABand, …)
  data/         caseStudies.ts — the Selected Work content
  assets/       Imported images
  index.css     Design tokens + utility classes (single source of truth)
```
