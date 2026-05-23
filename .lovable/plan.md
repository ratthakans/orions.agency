## Plan

**1) Selected Partners — 18 logos, 6 cols × 3 rows**

In `src/pages/Index.tsx`, expand `trustedBy` from 6 to 18 mockup names and render as `grid-cols-2 sm:grid-cols-3 md:grid-cols-6` with hairline dividers between cells (matrix style, zero radius).

Mockup list (existing 6 + 12 new placeholders, mix of TH/EN):
```
Hongmove · Khaoyai CC · RTAF · Democrat · Heavy · GCOO
Sermsuk · Bangkok Bank · SCG · CP All · Thai Airways · PTT
Central · King Power · AIS · True · Singha · Chang
```
Each cell: same height (~`h-16`), centered, `font-display text-[12px] tracking-[0.22em] uppercase text-foreground/60`, hover → `text-cinnabar`. Hairline grid via `gap-px` on `bg-foreground/15` wrapper, cells `bg-background` (matches existing manifesto/process grid pattern).

Add a small `font-mono` note above: "18 brands refined since 2026" for editorial weight.

**2) Diagnostic Teaser — new homepage section**

Insert a new `06 — Diagnostic` section between Packages (05) and the end of page, in `src/pages/Index.tsx`. Lead-gen oriented.

Layout (split: left editorial copy, right benefit list):
- Mono label: `06 — Diagnostic`
- Headline (serif): `Not sure where you stand? *Find out in 5 minutes.*`
- Thai sub: `18 คำถาม · 6 มิติแบรนด์ · ผลลัพธ์ + package ที่เหมาะกับคุณ ส่งให้ทันที`
- 3 benefit bullets (mono labels + serif lines):
  - `i.` Brand clarity score
  - `ii.` Per-axis diagnosis
  - `iii.` Recommended package
- Primary CTA (Cinnabar): `Take The Diagnostic →` → `/diagnostic`
- Secondary link: `See sample result →` (also → /diagnostic for now)
- Right column: a stylized "result card" mockup (hairline frame, mono header `SAMPLE RESULT`, fake score `72 / 100`, 3 axis bars, package badge `→ Pro`) — purely decorative, reinforces the offer.

Visual: matches existing section rhythm (`py-24 md:py-32`, `border-t border-foreground/15`, alternates surface via `bg-surface` to contrast Packages).

**3) Renumber**

The Diagnostic CTA already inside the Packages section ("Not sure? Take The Diagnostic →") — keep it; the new section reinforces the same lead-gen path further down.

### Files

- `src/pages/Index.tsx` — only file touched. Expand `trustedBy` array + grid markup; add `06 — Diagnostic` section before closing `</div>`.

### Out of scope

- No new route, no backend, no form on homepage (CTA routes to existing `/diagnostic`).
- Real partner logos (mockup wordmarks only until brand assets supplied).
