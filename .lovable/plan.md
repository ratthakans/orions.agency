## Goal
ปรับ design language ทั้งไซต์ให้ตรงกับ ØRIONS Rate Card 2026 (PDF reference). เปลี่ยน 5 signature: page chrome bar, display heading style, section eyebrow, process row, principle/highlight quote block. ไม่แตะ copy / route / backend.

## Design signatures ที่ต้อง match กับ PDF

```
┌────────────────────────────────────────────────────────┐
│ ØRIONS · BOUTIQUE CREATIVE STUDIO  BRANDING · SOCIAL │ ← page chrome (mono caps, cinnabar brand)
│ ──────────────────────────────────────────────────── │ ← hairline
│ Rate Card · 2026 · 01/01                              │ ← mono meta
│                                                        │
│   SIDE BY SIDE                                         │ ← eyebrow mono caps · cinnabar
│                                                        │
│   What's in                       ← Inter Bold massive (sans)
│   each package.                   ← Newsreader italic · cinnabar (accent word only)
│                                                        │
│  ┌─ table / content ─┐                                │
└────────────────────────────────────────────────────────┘
```

### 1. Page chrome bar (top + bottom of every page)
- Top: hairline-bordered band with `ØRIONS · BOUTIQUE CREATIVE STUDIO` (mono caps cinnabar) left + `BRANDING · SOCIAL · PRODUCTION` (mono caps muted) right
- Below: mono meta line `Page Name · 2026 · NN/NN`
- Bottom: matching hairline footer `ORIONS.AGENCY · HELLO@ORIONS.AGENCY` left + `VALID · …` or page number right

### 2. Display heading style (THE biggest change)
- H1 / page titles = **Inter Bold sans-serif clamp(56–120px)**, line-height ~0.95, letter-spacing -0.04em — NOT Newsreader
- Italic accent line = Newsreader italic in cinnabar, sits BELOW the sans line ("Stories, *refined.*", "What's in *each package.*", "From kickoff *to going live.*")
- Promote a new utility `.h-rate-display` (Inter 700) + companion `.h-rate-italic` (Newsreader italic cinnabar)

### 3. Section eyebrow (replaces current `NN/NAME` slash)
- Single-line `SIDE BY SIDE` / `OUR METHOD` / `HOW WE WORK` in cinnabar mono caps tracked 0.22em — no number, no rule
- Keep `SectionLabel` for backward compat but switch default render to eyebrow style; add `index` only as small superscript on the right when needed
- Page-number badge `03 / 08` (mono cinnabar) moves to top-right of chrome bar

### 4. Process row (Consulting / HealthCheck / Services)
- Format: `01 /` (cinnabar bold sans) ` Title` (ink bold sans) left + `WEEK 01 · DAYS 1–5` (mono caps muted) right
- Hairline below the row; serif (or sans muted) body paragraph beneath at ~70ch
- New `<ProcessRow index title meta>{body}</ProcessRow>` primitive

### 5. Numbered method block (Index / About method section)
- Giant cinnabar serif numeral `01` (Newsreader 500, ~96px) + tiny mono caption `WHO · AUDIENCE` below
- Right column: bold sans `Listen to *people.*` + body paragraph
- New `<MethodStep n caption titleSans titleItalic>{body}</MethodStep>` primitive

### 6. Tier matrix table (Services)
- Real `<table>` with cinnabar eyebrow row, bordered cells, middle (PRO) column gets black bg + cinnabar text on header/price rows, mono cell contents
- Pricing rows at bottom `MONTHLY` / `ANNUAL (Save 17%)` — mono left label, bold sans prices
- New `<TierMatrix rows tiers highlight="pro">` primitive

### 7. Principle / highlight quote block
- Black bg, cinnabar left rule (5px), cinnabar eyebrow `OUR PRINCIPLE`, huge white sans heading with cinnabar italic accent, muted snow body
- New `<PrincipleBlock eyebrow title body>` primitive

### 8. Chevron CTA stack
- `BOOK KICKOFF` (mono caps muted, label) above `>` glyph (cinnabar standalone line) above `hello@orions.agency` (sans link)
- Update existing `.cta-chevron` → add `.cta-stack` variant

## Files to touch

**Tokens & utilities (`src/index.css`)**
- Replace `.h-display-*` rendering: heading utilities switch to Inter 700 sans by default; add `.h-rate-italic` for Newsreader cinnabar accents
- New: `.eyebrow-mono` (cinnabar mono caps), `.page-chrome`, `.process-row`, `.method-num`, `.principle-block`, `.cta-stack`
- Remove `.editorial-quote` left-rule narrative (we now use `<PrincipleBlock>` for the rare big quote; narrative body becomes plain muted sans/serif paragraphs at 70ch)

**New primitives**
- `src/components/PageChrome.tsx` — top + bottom hairline bands with mono meta
- `src/components/Eyebrow.tsx` — cinnabar mono caps section label
- `src/components/ProcessRow.tsx` — `01 / Title · WEEK 01 · DAYS x–y` row
- `src/components/MethodStep.tsx` — giant numeral + caption + sans/italic title
- `src/components/TierMatrix.tsx` — Starter/Pro/Elite comparison table with PRO highlight column
- `src/components/PrincipleBlock.tsx` — dark hero quote block
- `src/components/StackedCTA.tsx` — label / `>` / link stack

**Existing primitives (update, don't replace)**
- `SectionLabel.tsx` → re-export from new `<Eyebrow>` (keep old API)
- `CTA.tsx` → keep chevron variant, add `stack` variant
- `PageHero.tsx` → adopt `<PageChrome>` + new Inter-bold + Newsreader-italic split title
- `Editorial.tsx` → re-purpose as muted narrative paragraph wrapper at 70ch (drop left rule); kept for back-compat

**Page sweep (presentation only)**
- `Index.tsx` — adopt PageChrome, retitle hero with new split; method section uses `<MethodStep>`; principle band uses `<PrincipleBlock>`
- `About.tsx` — same chrome; manifesto rendered with sans display + italic accent; cards become `<MethodStep>`
- `Services.tsx` — replace divisions/pricing with `<TierMatrix>` (Starter/Pro/Elite from rate card); add-on tables stay
- `Consulting.tsx` — engagement steps → `<ProcessRow>`; tiers → `<TierMatrix>`
- `Work.tsx`, `Projects.tsx`, `CaseStudy.tsx` — chrome + new heading split; eyebrows replace slash labels
- `HealthCheck.tsx` — process → `<ProcessRow>`; principle → `<PrincipleBlock>`
- `Contact.tsx` — `<StackedCTA>` for email/phone, chrome
- `Footer.tsx` — adopt bottom chrome (mono + hairline)

**Memory**
- Rewrite `mem://index.md` core: headings = **Inter Bold sans** with Newsreader italic cinnabar accents; eyebrows = cinnabar mono caps (no slash numbering); process rows use `01 / Title · WEEK NN · DAYS x–y`; PRO column is the only fully-inverted block on the page; cinnabar stays ≤10%.

## Out of scope
- No copy rewrites (apart from filling in section eyebrows / page numbers).
- No new pages, no route changes, no backend, no font additions (Inter + Newsreader + IBM Plex Mono already loaded).
- No palette change. No imagery regeneration.
- No responsive breakpoint overhaul beyond what's needed for the new heading + table.

## Acceptance
- Every page opens with hairline chrome bar matching the PDF (brand left · category right · mono meta line).
- Every page heading is **Inter Bold sans** with the accent line in Newsreader italic cinnabar.
- Section eyebrows are single-line cinnabar mono caps (no `NN/NAME` slash anywhere except inside ProcessRow / page-number badge).
- Services tier comparison is the matrix table with PRO highlighted column.
- Consulting + HealthCheck process is the `01 / Title · WEEK NN · DAYS x–y` row.
- Principle / hero-quote blocks render dark with cinnabar rule + cinnabar italic accent.
- Cinnabar surface area stays ≤10% of pixels.
