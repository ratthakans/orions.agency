

# Cohesive UI Refinement — Amsterdam-style Creative Agency

I've reviewed all pages (Index, About, Services, Work, Contact) + Nav/Footer. The site has strong bones (newsprint cream, hairlines, Unbounded + Cutive italic accents, square corners) but suffers from **inconsistency, visual fatigue, and competing systems**. Here's a focused refinement to make it tighter, more confident, and clearly Amsterdam-style (think Build in Amsterdam, Studio Dumbar, Mainstudio).

---

## What's wrong today (the diagnosis)

**Inconsistency**
- 4 different hero patterns: Index (centered giant ØRIONS), About/Work/Contact (left-aligned editorial), Services (uses `PageHero` component with empty eyebrows producing dead space).
- Section labels are mixed: `01 — TITLE`, `HERO PROJECTS`, plain `SectionHeader`, no label at all. Earlier requests removed many — now numbering is broken/random.
- Type scales jump arbitrarily: 88px / 96px / 128px / 140px hero sizes across pages.
- Two CTA styles: solid black pill and outlined link — used inconsistently.
- "Stat" cards rendered 3 different ways (Index pressures vs Services stats vs Index hero projects).

**Visual noise**
- Index closing section is enormous (audit + contact + footer-meta) and duplicates the Footer + Contact page.
- Too many hover effects: scale, color invert, translate, rotate-45 all on one page.
- `grain` texture + `marquee` + pulsing dots + `animate-ping` + typing loop happening simultaneously on Index.
- Hairlines are full-black (`border-foreground`) everywhere, making the page feel boxed-in. Amsterdam style uses **selective** hard rules + lots of breathing room.

**Amsterdam-style misses**
- Not enough whitespace between sections.
- Numbering system inconsistent (should be a strict, visible 01/02/03 grid index).
- No restrained color accent — everything is pure B/W on cream. Adding **one tiny signal color** (or none, but used with discipline) is a hallmark.
- Footer is generic — should match the editorial system.

---

## The plan — One Design System, applied everywhere

### 1. Lock a strict design system (tokens + primitives)

**Type scale (3 sizes only)**
```
Hero (H1):     clamp(56px, 11vw, 132px)   — every page hero uses this exactly
Section (H2):  clamp(40px, 6vw, 72px)
Card (H3):     22–28px
Body:          15–17px
Label:         11px mono (index-badge)
```

**Spacing rhythm:** sections use `py-24 md:py-32` (currently inconsistent 20/28). Page gutters stay `px-6 md:px-10`.

**Hairlines:** switch most to `border-soft` (light gray). Reserve full-black `border-foreground` ONLY for section dividers and the active hero rule. This single change instantly looks more Amsterdam.

**One CTA primitive** — refactor into `<CTA variant="primary|ghost">`:
- Primary: black pill with arrow (used once per page, max twice)
- Ghost: underline label with arrow

**One SectionHeader primitive** used on every section:
```
[index]  [TITLE]                                        [meta right]
─────────────────────────────────────────────────────────────────
01 / SELECTED WORK                                  04 PROJECTS
```
Numbered consistently across each page (01, 02, 03...).

**One PageHero primitive** — left-aligned, eyebrow + giant headline + optional 2-col supporting paragraph + bottom hairline. Use on About, Work, Services, Contact identically. Index keeps its unique centered cover.

### 2. Page-by-page refinements

**Index**
- Keep cover hero, marquee.
- Trim "Vicious Cycle" hover (remove invert-on-hover; keep stat reveal). Less is more.
- Applied Solutions: keep dark band but reduce padding, drop hover invert.
- Selected Work: simplify to ONE grid (4-col), remove the inserted "High-Impact" video block — move that to Work page.
- **Replace giant closing section** with a clean 2-line CTA strip (mirroring About's "Stop guessing"). All audit/contact details belong in Footer/Contact only — not duplicated here.

**About**
- Remove leftover `02 — THE METHOD` label (request was to drop these).
- Keep current structure but apply new SectionHeader (`01 / WHO WE ARE` removed per earlier ask → use unlabelled hero, then `01 / METHOD`, `02 / TEAM` for visual rhythm).
- Tighten team grid: leadership 2-col stays, crew 3-col stays, but unify image aspect to `4/5` and reduce gap to `gap-8`.
- Drop the `mix-blend-difference` overlay on portraits — too noisy.

**Services**
- Replace empty `PageHero` with proper hero: eyebrow `INDEX 01–04` + headline "Applied Solution.".
- Fix the hover-invert on each service row → too aggressive (4 in a row flashes the whole page). Replace with subtle `border-soft → border-foreground` transition + arrow reveal only.
- Stats grid: align to same component as Index pressures.

**Work**
- Already redesigned. Apply unified SectionHeader (currently mixed: `HERO PROJECTS`, `MORE SELECTED`, `SOCIAL & COMMERCIALS`, `ENTERTAINMENT & LONG-FORM` — number them `01/02/03/04`).
- Reduce gradient overlays on cards (currently every card has one).

**Contact**
- Hero is good. Marquee good.
- Audit card: keep dark, but remove duplicated content with Index (now Index won't have it).
- Form: standardize input style to match the design system (currently uses `border-b-2` on focus — change to `border-foreground` constant + bottom-grow underline animation).

**Nav**
- Add visible page index indicator (e.g. small dot or active underline animation).
- Convert "Let's Talk ↗" pill to match new CTA primitive.

**Footer**
- Promote to editorial signature: large ØRIONS wordmark across full width, hairline columns, big legal line at bottom. Remove duplicate contact (it's in Contact + index closing already).

### 3. Amsterdam-style polish (small but defining)

- **Numbered index everywhere**: every section gets a 2-digit prefix consistently.
- **Mono captions** for all metadata (dates, project counts, locations) — already partly done.
- **Cutive italic accent** used ONCE per page maximum (currently overused: About has "Applied" + "output", Work has "ideas" + "sitting", Contact has "stuck" — keep one per page).
- **Reduce grain opacity** from 0.06 to 0.03 — currently visible on flat surfaces.
- **Remove `animate-pulse`/`animate-ping`** dots except in Contact marquee (one place only).

---

## Files I'll touch

- `src/index.css` — lower grain opacity, add `--border-soft` usage helpers
- `src/components/SectionHeader.tsx` — extend with optional `index` and `right` props (already has)
- `src/components/PageHero.tsx` — refactor to support optional eyebrow, single source of truth
- `src/components/CTA.tsx` — **new** primitive
- `src/components/Nav.tsx` — refine active state, CTA
- `src/components/Footer.tsx` — editorial redesign with big wordmark
- `src/pages/Index.tsx` — trim closing section, simplify hovers, remove inserted high-impact block
- `src/pages/About.tsx` — apply unified headers, remove blend-difference, one italic accent
- `src/pages/Services.tsx` — proper hero, calmer hover
- `src/pages/Work.tsx` — numbered headers, less gradient
- `src/pages/Contact.tsx` — input style, remove duplication

---

## What you'll feel after

- Every page reads as the **same magazine issue** — same grid, same type, same rhythm.
- Less hover noise → feels more confident, less "trying hard".
- Bigger whitespace + softer hairlines → premium editorial.
- One CTA, one hero, one section header → instantly more designed.

