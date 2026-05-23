## Plan

### 1. New `/about` page (Manifesto + Approach combined)
- Create `src/pages/About.tsx` that renders Manifesto content first, then Approach content, as one continuous narrative.
- Keep all existing sections, copy, and components intact — just concatenate, re-number the mono section labels in sequence (01 → end), and remove the duplicate hero/closing CTA so it reads as one page.
- SEO: title "About — ØRIONS", path `/about`, description blending manifesto + approach intent.

### 2. Rename Health Check → The Diagnostic
- File stays `src/pages/HealthCheck.tsx` (component unchanged).
- Update visible labels everywhere: hero "06 — The Diagnostic", SEO title "The Diagnostic — ØRIONS", nav link text "The Diagnostic".
- Route changes from `/health-check` → `/diagnostic`. Old `/health-check` redirects to `/diagnostic` (Navigate component) so existing links don't 404.

### 3. Routing & nav (`src/App.tsx`, `src/components/Nav.tsx`)
- Add `<Route path="/about" element={<About />} />`.
- Replace `/manifesto` and `/approach` routes with redirects to `/about`.
- Remove `Manifesto` and `Approach` from nav `links[]`, add single `About → /about`.
- Replace `Health Check → /health-check` with `The Diagnostic → /diagnostic`.
- Final nav order: About · Services · Work · The Diagnostic · Contact.

### 4. Internal link sweep
- Update any `to="/manifesto"`, `to="/approach"`, `to="/health-check"` references across `src/pages/*` and components (Index, Footer, ClosingCTA, StickyMobileCTA, etc.) to the new paths.
- Update `public/sitemap.xml` entries.

### 5. Memory + old files
- Keep `Manifesto.tsx` and `Approach.tsx` files for now (referenced by the new About page if we import sections, otherwise delete after extracting content into About.tsx). Plan: **delete** both after content is moved into `About.tsx` to avoid drift.
- Update `mem://index.md` Core routes line to: `/`, `/about`, `/services`, `/diagnostic`, `/work`, `/contact`.

### Files touched
- add: `src/pages/About.tsx`
- edit: `src/App.tsx`, `src/components/Nav.tsx`, `src/pages/HealthCheck.tsx`, `src/components/Footer.tsx`, `src/components/ClosingCTA.tsx`, `src/components/StickyMobileCTA.tsx`, `src/pages/Index.tsx` (and any other files with old links), `public/sitemap.xml`, `mem://index.md`
- delete: `src/pages/Manifesto.tsx`, `src/pages/Approach.tsx`
