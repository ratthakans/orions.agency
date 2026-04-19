

## Hero Section Review — Current State

**What's there now:**
- `EST. BANGKOK · 2024` mono label (gradient soft)
- Massive `ØRIONS` wordmark, white, Unbounded, ~110px desktop / 16vw mobile
- Looping Typewriter cycling 4 phrases in Unbounded uppercase
- Animated `liquid-blob` (blue/magenta/red) blurred backdrop
- Bottom-left: `orions.agency`
- Bottom-right: `Scroll ↓` link

**Issues spotted:**

1. **Vertical balance feels off** — Logo sits high after `pt-20`, but with `min-h-screen` + `items-center` the content clusters mid-page leaving a heavy dead zone below. No visual anchor at the bottom besides tiny labels.
2. **Typewriter is visually noisy** — 4 long phrases in Unbounded uppercase at 18px reads as a second headline competing with ØRIONS. The hard delete/retype + blinking cursor pulls attention away from the brand.
3. **Eyebrow is weak** — "EST. BANGKOK · 2024" is a generic label. Doesn't telegraph what ØRIONS *does*.
4. **No real CTA** — Hero has zero action. User must scroll or hunt the nav. Premium agency sites (Berlin/Stockholm tier) almost always anchor a primary action in the hero.
5. **Liquid blob is too soft / too centered** — At 60px blur it reads as a uniform purple wash behind the logo, muddying the wordmark contrast instead of framing it.
6. **Wordmark feels floating** — No supporting metadata grid (most premium agency heros use a 2–4 column meta strip: location, status, year, discipline) which gives the page editorial weight.
7. **Bottom corners feel asymmetric and tiny** — `orions.agency` left + `Scroll ↓` right are isolated; no horizontal rule or grid to tie them in.
8. **Mobile**: 16vw logo + uppercase Unbounded typewriter wraps awkwardly on 375px. Phrase #2 ("CREATIVE ENGINEERING FROM BANGKOK.") breaks across 3 lines.

---

## Proposed Redesign — "Editorial Studio" Hero

Goal: keep the liquid gradient identity but make the hero feel like a **senior studio masthead** — calmer, more intentional, with clear hierarchy and a real action.

### Layout (desktop)

```text
┌─────────────────────────────────────────────────────────────┐
│ [nav already above]                                         │
│                                                             │
│  ── APPLIED CREATIVE AGENCY                  (BKK 13.7°N)   │
│                                                             │
│                                                             │
│  ØRIONS                                                     │
│  ───────                                                    │
│  We turn stuck brands into                                  │
│  unstuck outcomes.                  [single rotating verb]  │
│                                                             │
│  [ Book Clarity Audit → ]   [ See Work ]                    │
│                                                             │
│                                                             │
│ ─────────────────────────────────────────────────────────── │
│ 01 BANGKOK    02 STRATEGY+FILM    03 EST. 2024    ↓ SCROLL  │
└─────────────────────────────────────────────────────────────┘
```

### Specific changes

**A. Replace the typewriter as second headline → use it as a single rotating verb chip**
- Move Typewriter to a small inline chip beside or under the sub-headline (`font-mono`, 11–12px, gradient text). It cycles single words: `PRACTICAL.` / `BOLD.` / `DONE.` / `APPLIED.`
- Add a real h2 sub-headline in `font-thai` (IBM Plex), left-aligned: e.g. *"We turn stuck brands into unstuck outcomes."* — gives the hero a content message instead of a slogan loop.

**B. Strengthen the eyebrow row (top of hero)**
- Left: `── APPLIED CREATIVE AGENCY` (replaces "EST. BANGKOK · 2024")
- Right: live-feel meta `BKK · 13.7°N, 100.5°E` in mono (subtle, premium studio touch)
- Both small, gradient-soft, on a single horizontal rule that spans the container.

**C. Add primary + secondary CTA buttons**
- Primary: `Book Clarity Audit →` using `bg-grad` (gradient fill, dark text).
- Secondary: `See Work` using `border-grad` outline.
- Sits directly under the sub-headline. Anchors action above the fold.

**D. Replace bottom corner labels with a 4-column meta strip**
- Top divider line, then 4 cells: `01 BANGKOK` · `02 STRATEGY + FILM` · `03 EST. 2024` · `04 ↓ SCROLL`.
- Each cell is `label-mono`, gradient-soft on hover. Last cell is the scroll anchor (replaces the floating "Scroll ↓").
- This grounds the hero like an editorial cover.

**E. Tune the liquid blob**
- Push two blobs to the **edges** instead of behind the wordmark: one top-left (blue), one bottom-right (red), magenta accent off-canvas. Reduces wash behind ØRIONS so the white wordmark stays crisp.
- Add a subtle 1px noise/grain overlay (already in CSS as `.grain`) to give it film texture.
- Keep the slow `blob-shift` animation but reduce opacity slightly (0.55 → 0.45) for premium calm.

**F. Wordmark refinement**
- Slightly reduce desktop size: `110px → 96px` so it shares the page with the sub-headline rather than dominating it.
- Add tracking polish: `tracking-[-0.06em]` for tighter Unbounded.
- Keep solid white (per memory).

**G. Left-align everything**
- Switch hero from `text-center` to `text-left` (memory rule: never center body paragraphs). Aligns with the editorial Berlin/Stockholm brief.
- Sub-headline + CTAs left-aligned; eyebrow row uses `justify-between`.

**H. Mobile pass**
- Wordmark `16vw → 18vw` but on a tighter container (px-5).
- Sub-headline 18px → tight 1.4 line-height.
- CTAs stack vertically full-width.
- Meta strip becomes 2×2 grid.

---

## Files to touch

1. **`src/pages/Index.tsx`** — restructure hero JSX (eyebrow row, left-align, sub-headline, CTA pair, meta strip). Remove old `text-center`, `pt-20`, bottom-corner labels, and inline `Scroll` link.
2. **`src/components/Typewriter.tsx`** — accept smaller cursor and allow a `chip` style; pass shorter single-word phrases from Index.
3. **`src/index.css`** — minor: lower `.liquid-blob` opacity, optionally add `.hero-grid-meta` helper. No new tokens.

No new dependencies. No routing changes. Memory rules respected: left-align body, no scale-on-hover, no glows beyond existing gradient, Unbounded stays uppercase.

