## 1. Index hero — fix spacing & centering (priority)

`src/pages/Index.tsx` Hero section currently combines `min-h-screen` + `flex justify-center` + extra `pt-[20vh] pb-[18vh]` + `mt-[18vh] md:mt-[22vh]` on credentials. The double vertical padding pushes content low and crowds the bottom.

Fix:
- Replace section with: `min-h-[100svh] flex flex-col px-6 md:px-10`
- Inner container: `max-w-[1400px] mx-auto w-full flex-1 flex flex-col justify-center items-center text-center pt-32 md:pt-40 pb-20 md:pb-28` (matches the rest of the site's hero rhythm + uses safe top/bottom)
- Drop the `pt-[20vh] pb-[18vh]` and the `mt-[18vh] md:mt-[22vh]` — replace with a single `mt-16 md:mt-20` between headline and tagline, and `mt-20 md:mt-24` before credentials
- Headline keeps `h-display-xl leading-[0.92] tracking-[-0.04em]`
- Result: headline optically centered with clear, equal top/bottom breathing room.

## 2. Standardize section vertical rhythm

Two rhythms exist:
- `py-24 md:py-32` — Index, Services, Projects
- `py-20 md:py-28` — Work, CaseStudy

Pick **`py-24 md:py-32`** as canonical (more editorial). Update Work.tsx (4 occurrences) and CaseStudy.tsx (6 occurrences).

## 3. Standardize hairline borders

Currently mixed: `border-foreground/10`, `/15`, `/20`, and solid `border-foreground`.

Canon:
- **`border-foreground/15`** — all section dividers and editorial hairlines
- **`border-foreground/20`** — card/table grids only (Services packages, comparison table)
- **`border-cinnabar`** — accent only (featured package, active states)
- Remove all solid `border-foreground` section dividers → `/15`

Files: Work.tsx, CaseStudy.tsx, Services.tsx, Index.tsx (Trusted section uses `border-foreground bg-surface` — change to `/15` and drop the `bg-surface` to keep the all-dark scope).

## 4. Standardize section H2 sizing

Mixed: `h-display-md`, `h-display-lg`, raw `text-[56px] md:text-[88px]`.

Canon:
- **Page H1 (hero)** → `h-display-xl`
- **Section H2** → `h-display-md`
- **Featured/closing H2** → `h-display-lg` (sparing)
- Replace raw inline sizes in Projects.tsx line 79 with `h-display-lg`
- Audit Work.tsx (uses `h-display-lg` for every section → demote intermediate ones to `h-display-md`)

## 5. Standardize Thai body text

Mixed `text-[15px]/[16px]/[17px] md:text-[17px]/[18px]`.

Canon:
- **Lede paragraph** (right under H1/H2): `font-thai text-[16px] md:text-[18px] leading-[1.7] text-muted-foreground`
- **Body paragraph**: `font-thai text-[14px] md:text-[15px] leading-[1.7] text-muted-foreground`
- Apply across all pages.

## 6. Standardize buttons

Canon (already used):
- **Primary**: `inline-flex items-center gap-3 bg-cinnabar text-background px-7 py-4 btn-label hover:opacity-90 transition-opacity`
- **Secondary**: `inline-flex items-center gap-2 btn-label border-b border-foreground pb-1 hover:text-cinnabar hover:border-cinnabar transition-colors`
- Update Services package CTA from `px-6 py-4` → `px-7 py-4` for parity.

## 7. Sub-tagline consistency

The standardized subtitle "Independent editorial studio. Bangkok. — Boutique Creative Agency." appears on Services/Work/Projects/Contact/HealthCheck but **not Index hero**. Either add it under Index hero (small, italic, muted) or remove from sub-pages. Recommendation: keep on sub-pages only — Index has its own "Stories, refined." voice.

---

## Files to edit

- `src/pages/Index.tsx` — hero rewrite, Trusted border fix
- `src/pages/Work.tsx` — section rhythm, border tokens, H2 sizing
- `src/pages/CaseStudy.tsx` — section rhythm, border tokens
- `src/pages/Services.tsx` — border tokens, button padding
- `src/pages/Projects.tsx` — H2 sizing
- `src/pages/HealthCheck.tsx` — border tokens
- `src/pages/Contact.tsx` — body text sizing (audit)

No design-system / `index.css` changes needed — all tokens already exist.

## Out of scope
- No content/copy changes
- No new components or routes
- No color palette changes
