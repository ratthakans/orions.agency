## Goal

1. Switch Manifesto headings (Index + About "Our Promise") from Thai to English to match the rest of the H3 hierarchy.
2. Clean up inconsistencies found in the cross-page review.

---

## A) Manifesto → English headings

### `src/pages/Index.tsx` — `manifestoPoints`
Keep `i. / ii. / iii.` and Thai body copy. Replace `en` strings:

| # | now (TH)           | new (EN)            |
|---|--------------------|---------------------|
| i  | ตัดส่วนเกิน         | **Cut the Excess**       |
| ii | สกัดเนื้อแท้         | **Extract the Essence**  |
| iii | กลั่นกรองเรื่องราว | **Refine the Story**     |

### `src/pages/About.tsx` — `promises` (Our Promise block, same pattern as Index now)
Replace Thai phrases in `en` with English headlines; keep Thai body:

| # | now (TH)                              | new (EN)                  |
|---|----------------------------------------|----------------------------|
| i  | ทุกชิ้นที่เราส่ง คือชิ้นที่เราภูมิใจ | **Work we're proud of.**   |
| ii | เราจะตรงเวลา                          | **Always on time.**        |
| iii | เราจะโปร่งใส                         | **Radically transparent.** |

---

## B) Cross-page consistency findings & fixes

### B1 — Hero type scale (Work, Contact)
`src/pages/Work.tsx` and `src/pages/Contact.tsx` hand-roll hero H1 with `text-[52px] md:text-[88px] lg:text-[112px]`. Every other page uses the shared `h-display-xl` utility.
→ Replace inline sizes with `className="font-serif h-display-xl ..."` (keep `max-w-[Xch]`).

### B2 — Stray legacy color token (Contact)
`src/pages/Contact.tsx` line 77 uses `text-gemini` for the italic accent. Memory says it maps to Cinnabar, but every other italic accent in the site reads `text-cinnabar`.
→ Replace `text-gemini` → `text-cinnabar` (one occurrence).

### B3 — Section label pattern (Work, Contact)
Work + Contact use `<PageMark index="01" total="04" />`, which renders a different visual than the `font-mono text-[10px] tracking-[0.22em] uppercase` + `w-6 h-px bg-cinnabar` rule used on Index, Services, HealthCheck, About, Projects.
→ Inside Work and Contact, replace `PageMark` calls with the inline label pattern (same component-less snippet used elsewhere) so all 7 pages share one section-label style. Keep `total` count off — labels are per-page sequential (01, 02, …) like the rest.

### B4 — Dead ternaries in Services
`src/pages/Services.tsx` has several `p.featured ? "text-cinnabar" : "text-cinnabar"` ternaries (lines ~144, ~162). Both branches equal.
→ Simplify to plain `"text-cinnabar"`.

### B5 — Unused components (cleanup, optional but recommended)
`src/components/SectionHeader.tsx` and `src/components/SectionLabel.tsx` are no longer referenced — every page uses the inline `font-mono + w-6 h-px bg-cinnabar` snippet directly.
→ Delete both files to avoid drift.

---

## What stays the same (intentional consistency)

- **Per-page section numbering** restarts at `01` on each page — this matches editorial convention and reads correctly with the new mono section labels. Keeping.
- **About page's own 01–07** numbering stays (full manifesto page has its own scope).
- Hero composition: Index = centered, all other pages = left-aligned. Intentional asymmetry.
- Cinnabar italic accent in every page H1/H2. Strong signature, keeping.

---

## Files touched

- `src/pages/Index.tsx` — manifesto EN headings (A)
- `src/pages/About.tsx` — promise EN headings (A)
- `src/pages/Work.tsx` — hero type + section label (B1, B3)
- `src/pages/Contact.tsx` — hero type + color token + section label (B1, B2, B3)
- `src/pages/Services.tsx` — dead ternary cleanup (B4)
- `src/components/SectionHeader.tsx` — delete (B5)
- `src/components/SectionLabel.tsx` — delete (B5)

## Out of scope
Copy rewrite, new sections, routing, backend, animations, layout changes.
