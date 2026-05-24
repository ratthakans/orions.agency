## Scope
Four fixes to the dark editorial site: kill the gradient accent, eliminate every white/snow-on-dark section, surface ØRIONS Ventures as a home-page section, and add creative-agency texture (capabilities, process, studio reel) without breaking the editorial system.

## 1. Remove Cinnabar gradient — solid accent everywhere
- `src/index.css`: keep `--accent` (Cinnabar #EB5939) but **delete** `.bg-gradient-cinnabar` and `.text-gradient-cinnabar` utilities.
- Replace every `text-gradient-cinnabar` → `text-cinnabar` and every `bg-gradient-cinnabar` → `bg-cinnabar` across:
  - `src/components/Nav.tsx` (2 CTAs)
  - `src/components/Footer.tsx` (email hover + 4 mono labels)
  - `src/pages/Index.tsx` (hero "refined.", "considered.", Contact CTA, CTA tile, "One refined system.", diagnostic CTAs)
  - `src/pages/About.tsx`, `Services.tsx`, `Work.tsx`, `Contact.tsx` (italic accents + primary buttons)

## 2. All-dark — no white/snow sections
Currently several sections invert to snow background (`bg-foreground text-background`). Flip every one back to the dark page tone with hairline structure instead:

- `src/pages/Services.tsx` lines 159, 194, 260, 274, 289, 383 — featured pricing card, comparison header, sticky CTA: swap `bg-foreground text-background` → `bg-surface text-foreground` with `border border-foreground/15`; hover stays `bg-cinnabar`.
- `src/pages/Index.tsx` line 296 (featured pricing tier) — same treatment.
- `src/pages/About.tsx` line 65 (hero band) — remove inversion, use page bg + bigger type.
- `src/pages/CaseStudy.tsx` line 172 (closing band) — same.
- `src/pages/HealthCheck.tsx` line 435 (result card) — `bg-surface` + hairline.
- `src/pages/Contact.tsx` line 169 (submit btn) — `bg-cinnabar` instead of inverted snow.
- `src/pages/Projects.tsx` lines 44, 70 — hero + card hover: dark with Cinnabar hover accents.
- Keep `bg-foreground/15` divider lines (those are hairlines, not white slabs).

## 3. Bring back Ventures
ØRIONS Ventures already exists at `/projects` (route `/ventures` redirects there). Two changes:

- **Nav**: add `Ventures → /projects` between Work and Diagnostic in `src/components/Nav.tsx`.
- **Home**: add a new section `03 — Ventures` on `src/pages/Index.tsx` directly after Selected Work, before Trusted. Renumber Trusted→04, Packages→05, Diagnostic→06. Section shows 2–3 venture tiles (pulled from `src/pages/Projects.tsx` `ventures` array) in a 2-col layout with title, one-line description, "Visit →" external link + "View ventures →" link to `/projects`. Copy framing: *"Studios build for clients. We build for ourselves, too."*

## 4. More creative-agency feel
Add three editorial-agency moves without bloating the system:

- **Capabilities strip** (new section on home, between Approach and Selected Work, index `02 — Capabilities`): 4-column hairline grid listing service disciplines — *Brand Strategy · Editorial Design · Content Systems · Performance Loops*. Each cell: serif label + 2-line description in mono. No icons.
- **Process ribbon** (small horizontal strip inside Approach section): 4 mono steps — `01 Listen · 02 Diagnose · 03 Refine · 04 Compound`. Replaces the bare prose-only feel without re-introducing the removed 6:3:1 process.
- **Studio status bar refresh** (`src/components/Footer.tsx` top or pre-footer): add a thin "Now / Next / Available" line — currently editing, next opening, booking window — to telegraph live agency activity.
- **Selected Work**: add a small "View all 12 projects →" link under the bento grid pointing to `/work`.

Renumbered home sections after all changes:
```
HERO
01 — Approach (+ process ribbon)
02 — Capabilities
03 — Selected Work
04 — Ventures
05 — Trusted
06 — Packages
07 — Diagnostic
```

## Files to edit
- `src/index.css` — remove gradient utilities
- `src/components/Nav.tsx` — solid Cinnabar CTA, add Ventures link
- `src/components/Footer.tsx` — solid Cinnabar labels, status line
- `src/pages/Index.tsx` — gradient→solid, Capabilities + Ventures sections, process ribbon, renumber
- `src/pages/About.tsx`, `Services.tsx`, `Work.tsx`, `Contact.tsx`, `Projects.tsx`, `CaseStudy.tsx`, `HealthCheck.tsx` — gradient→solid + remove snow inversions

## Out of scope
- No new routes, no copy rewrite beyond the additions above, no motion library changes, no design-token color changes besides removing two utilities.
