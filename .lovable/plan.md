## Goal
Map the existing site onto the four structural rules of the new ØRIONS Design System spec without changing copy, routes, or content scope. Surface change only — visual hierarchy, separators, prefixes.

## Spec → System mapping

| Spec rule | Current state | Target |
|---|---|---|
| `# 01/SECTION_NAME` numbering | `01 — Title` (em-dash) in `SectionLabel.tsx` | Switch separator to `/` and uppercase the label by default |
| `Inter` Display H1–H3 | Headings currently use Newsreader serif | Add `.h-display-*` Inter variant utilities; promote display headings on Services/Consulting/Health-check matrices to Inter uppercase. Keep Newsreader for editorial italic accents only |
| `Newsreader` body via `>` blockquote | Long-form prose is raw `<p>` | New `.editorial-quote` utility: 1px left cinnabar rule + Newsreader italic-friendly serif body. Apply to manifesto / narrative blocks on Home, About, Services intro, Consulting intro |
| `IBM Plex Mono` meta via backticks / CAPS codes | Mono used inconsistently; some inline labels are sans | New `.meta-chip` utility (mono · 10/0.22em uppercase · hairline box) for dates, metrics, constraints (`WEEK 01`, `DAYS 1-5`, `RATE: 2026`) |
| Tier matrices (Starter / Pro / Elite) | Services has 3 divisions but not as feature-row matrix; HealthCheck has tiers but mixed layout | Refactor Services pricing + HealthCheck tier blocks into a single `<TierMatrix>` table primitive |
| Timeline syntax `01/STEP -> WEEK 01 -> DAYS 1-5 > prose` | Consulting + HealthCheck use loose ordered cards | New `<ProcessRow>` primitive emitting `NN/STEP` · `WEEK NN` · `DAYS X-Y` mono chips + serif blockquote |
| CTA chevron `>` prefix | `CTA.tsx` uses `ArrowUpRight` icon | Add `variant="chevron"` (Inter, `›` glyph prefix, no box, cinnabar-on-hover). Use it for in-body action lists. Keep filled `primary`/`invert` for hero CTAs only |

## Files to touch

**Tokens & primitives**
- `src/index.css` — add `.editorial-quote`, `.meta-chip`, `.section-slash`, tighten `.h-display-*` for Inter mode (`.h-display-xl.inter` variant)
- `src/components/SectionLabel.tsx` — change `—` to `/`, uppercase label
- `src/components/CTA.tsx` — add `chevron` variant
- `src/components/PageHero.tsx` — slash numbering, mono meta chip row

**New primitives**
- `src/components/TierMatrix.tsx` — Feature × Starter/Pro/Elite table
- `src/components/ProcessRow.tsx` — timeline row: `NN/STEP` `WEEK NN` `DAYS x-y` + `>` body
- `src/components/Editorial.tsx` — blockquote wrapper for narrative prose

**Page sweep (apply primitives, no copy changes)**
- `Index.tsx` — wrap manifesto/narrative paragraphs in `<Editorial>`; convert section labels; replace CTA list with chevron variant
- `About.tsx` — section numbers to slash, Editorial for narrative, mono chips for years/roles
- `Services.tsx` — Boutique/Digital/Production → `<TierMatrix>`; pricing rows as mono chips
- `Consulting.tsx` — engagement steps → `<ProcessRow>`; tiers → `<TierMatrix>`
- `Work.tsx`, `Projects.tsx`, `CaseStudy.tsx` — slash numbering, mono date/role chips, chevron CTAs
- `HealthCheck.tsx` — process → `<ProcessRow>`; deliverables → `<TierMatrix>`
- `Contact.tsx` — chevron action list, mono labels for email/phone/hours
- `Footer.tsx`, `Nav.tsx` — leave structure; only swap any `—` numbering to `/`

**Memory**
- Update `mem://index.md` core rules: numbering uses `NN/NAME` (slash, uppercase); editorial body uses `<Editorial>` blockquote; meta uses `<MetaChip>`; in-body CTAs use chevron variant; tier comparisons use `<TierMatrix>`.

## Out of scope
- No copy rewrites, no new pages/routes, no backend, no font additions, no image regeneration, no palette change (Snow / Ink / Cinnabar unchanged), no responsive breakpoint changes.

## Acceptance
- All section headers render as `NN/UPPERCASE_NAME` with cinnabar hairline.
- Every narrative prose block sits inside a left-rule serif blockquote.
- Every metric / date / constraint renders as a mono chip or backticked code.
- Tier comparisons render as a single table primitive (Starter/Pro/Elite columns).
- Process/timeline blocks use `NN/STEP → WEEK NN → DAYS x-y >` pattern.
- In-body CTAs use `›` chevron; hero CTAs keep filled pill.
- No hover regressions; quiet hover system remains the only interaction grammar.
