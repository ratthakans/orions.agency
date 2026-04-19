
## Make ØRIONS feel like a top-tier Amsterdam creative agency

After reviewing the current state (Index, Nav, Footer, PageHero, all pages), the bones are strong but the site still reads as "editorial template" not "studio with a point of view". Top Amsterdam studios (Build in Amsterdam, Mainstudio, Random Studio, Order, Lundgren+Lindqvist) share these traits we're missing:

1. **A signature interaction** — one repeating gesture across the site (custom cursor, magnetic hover, slow reveal, or marquee logic) that becomes the brand.
2. **Deep navigation with intent** — not just nav links but a *system* (page indicator, scroll progress, time/location ticker).
3. **Confident negative space + asymmetric grids** — not centered everything; off-grid moments that breathe.
4. **One unforgettable hero gesture** — kinetic type, scroll-driven scale, or rotating tagline.
5. **Detail layer** — corner brackets, tiny ticking metadata, hairline numbering, status dot ("STUDIO OPEN · 14:32 ICT").

---

## What I'll build (focused, not bloated)

### A. New "Studio Status Bar" (top, above Nav)
Thin bar (28px) showing live Bangkok time, status dot, and a rotating tagline. Hides on scroll down, returns on scroll up.
```
● STUDIO OPEN · BKK 14:32 ICT       NOW: TAKING Q2 2026 PROJECTS       N 13.756° E 100.501°
```

### B. Refined Nav
- Add scroll-progress hairline at the bottom of nav (gradient).
- Active link gets a small leading `•` + gradient underline (already there).
- Logo gets a tiny rotating "01/05" page indicator next to it (e.g. `ØRIONS [03/05]`).

### C. Index Hero — kinetic upgrade
Replace static hero with:
- Massive ØRIONS wordmark unchanged, but add **3 rotating sub-headlines** below ("FROM IDEA → FINAL CUT", "ONE TEAM · NO HANDOFF", "BANGKOK · 2019—") cycling every 3s with vertical wipe.
- Add a tiny **"scroll" indicator** with vertical line + label.
- Replace TypingLoop with the rotation (less jittery).

### D. Signature interaction: Magnetic CTAs + cursor-aware arrows
- Primary CTA arrows subtly tilt toward cursor on hover (CSS transform via mouse position, no library).
- Project cards get a soft "lift" (translateY -4px + shadow) instead of current hover.

### E. Section transitions — a real "wipe"
Add a 400ms full-screen vertical wipe (cream → black → cream) on route change. One overlay component in `<Layout>`. This is THE Amsterdam move.

### F. Detail layer (sitewide, tiny)
- Corner brackets `⌐ ¬ ∟ ⌐` at viewport edges (4 SVGs, fixed, 24px, opacity 0.15).
- Section anchors get a hover-revealed `§` symbol next to numbers.
- Footer wordmark: on hover, letters animate individually (stagger fade).

### G. Index page tightening
- Remove "Vicious Cycle" section noise — keep stats but in 4-col with hairline dividers, no card boxes.
- "Selected Work" → asymmetric grid: 1 large (60%) + 2 stacked small (40%) instead of 4 equal.
- Closing CTA: simplify to ONE giant headline + one CTA, drop the 2nd column.

### H. Typography micro-refinement
- Add `font-feature-settings: "ss01", "ss02"` for Unbounded alt characters.
- Tighten `letter-spacing` on hero from -0.05em → -0.055em.
- Add `text-wrap: balance` on all H1/H2.

### I. Color discipline (keep Sunset Ink)
No new color. Sunset Ink stays as-is, but extends to:
- Status dot in StudioStatusBar (vermilion only, no gradient).
- Scroll progress bar (gradient).
- One word per page (already done).

---

## Files to touch

- `src/components/StudioStatusBar.tsx` — **new** (top bar w/ live time)
- `src/components/PageTransition.tsx` — **new** (route wipe overlay)
- `src/components/CornerMarks.tsx` — **new** (4 fixed viewport corners)
- `src/components/MagneticCTA.tsx` — **new** wrapper or extend `CTA.tsx` with cursor tilt
- `src/components/Layout.tsx` — mount StatusBar + PageTransition + CornerMarks
- `src/components/Nav.tsx` — scroll progress bar, page indicator next to logo
- `src/components/Footer.tsx` — letter-stagger hover on wordmark
- `src/pages/Index.tsx` — kinetic rotating sub-headline hero, asymmetric work grid, simplified closing CTA, cleaner stats row
- `src/index.css` — `text-wrap: balance`, `font-feature-settings`, tighter tracking, corner marks utility
- `src/App.tsx` — wrap routes with PageTransition

---

## What you'll feel after

- Site has a **heartbeat** (time ticker, scroll progress, route wipe).
- One memorable interaction (magnetic CTA / page wipe) becomes the brand signature.
- Less "section after section" — more asymmetry and intentional emptiness.
- Hero feels alive without being noisy.
- Every detail (corners, status, page count) signals "designed by a studio, not a template".

No new colors. No new fonts. No backend. Pure design and motion craft.
