## Goal

Clean up the Services page: reduce eyebrow noise, give sections more breathing room, and add subtle, on-brand effects that fit the editorial newsprint system.

## Audit — what's noisy now

Counted **~12 eyebrows / mono labels** competing for attention on a single page:

- Hero: vertical edge label `/ 02 · SERVICES` + service index `— 01 Branding. ↓` (×3)
- Pricing rail: `— 01 / 03` + `Identity that ships.` mono caps next to each section title (×3)
- Each tier card: `— 01` (top) + `★ POPULAR` + `FROM` + `THB /project` + `WHAT YOU GET`  → 5 mono labels per card × 7 cards = **~35 mono labels** in pricing alone
- Kickstart: `WHAT YOU GET` + `03 DELIVERABLES` + `— 01/02/03` per item + `THB · 1–2 weeks`
- Process: `— 01` + `01/04` per step (×4)

Result: page reads "labeled," not "designed."

## Plan

### 1. Hero — keep, lighten

- Remove the vertical edge label `/ 02 · SERVICES` (Nav already tells you where you are).
- Keep the service index as anchors; replace the `↓` glyph with an animated underline that slides in on hover (story-link style, ink-on-cream → background/60).
- Add a subtle stagger so each `01 / 02 / 03` reveals 80ms after the previous.

### 2. Kickstart — drop one eyebrow, breathe

- Remove the `03 DELIVERABLES` mono tag on the right side of "What you get" (redundant — list already shows three).
- Keep only `WHAT YOU GET` as the single eyebrow on that side.
- Increase section padding `py-20 md:py-28` → `py-28 md:py-36`.
- Bump gap between left price column and right list: `lg:gap-x-12` → `lg:gap-x-20`.
- Hover effect: each deliverable row gets a left-edge accent bar that grows from 0 → 12px on hover (CSS transform, fast).

### 3. Pricing — biggest cleanup

- **Remove per-service header line completely**. Currently every service has: `— 01 / 03` + `Branding.` + `Identity that ships.` Replace with a single, calmer header: only the giant numeral `01` (left) and `Branding.` (right) — drop the mono lead, drop the count.
- **Tier cards: cut from 5 mono labels to 2.**
  - Drop `— 01` corner number (redundant with column position).
  - Drop the `THB /project` mono after the price (move unit inline as small grey text).
  - Keep only `★ POPULAR` (featured) and `WHAT YOU GET`.
- Replace `What you get` text with a hairline + plain bullet list (no numbered prefixes `·01`, `·02`...) — those add 4 more mono items per card.
- **Featured tier effect**: featured card stays dark, but on hover non-featured cards invert (cream → ink) with a sweep transition (0.5s cubic-bezier), so user can compare by hovering.
- Increase tier inner padding `p-7 md:p-9` → `p-8 md:p-12`, and section vertical rhythm `space-y-24 md:space-y-32` → `space-y-28 md:space-y-40`.

### 4. Process — tighten

- Drop the `0X/04` counter on the right of each step (redundant with the `— 0X` on the left).
- Keep only one mono label per step.
- Reveal animation: the gradient hairline above each step grows on scroll-into-view (already happens), add a subtle 1px → fade on the title via `Reveal` delay.

### 5. Spacing system (page-wide)

Standardize section vertical rhythm so every section breathes the same:

| Section   | Current               | Proposed             |
|-----------|-----------------------|----------------------|
| Hero      | `pt-28/32 pb-12/16`   | `pt-32/40 pb-16/24`  |
| Kickstart | `py-20/28`            | `py-28/36`           |
| Pricing   | `py-20/28`            | `py-28/36`           |
| Process   | `py-24/32`            | `py-28/36`           |

Between pricing tier groups: `space-y-24 md:space-y-32` → `space-y-28 md:space-y-40`.

### 6. Effects — quiet but premium

All on-brand (CSS only, fast, no glow/shadow):

- **Anchor links (hero)**: hairline underline grows left-to-right on hover, 300ms.
- **Kickstart deliverables**: row gets an accent bar that grows from the left margin on hover.
- **Tier cards**: non-featured cards invert background on hover (cream → ink), text colors swap. 500ms cubic-bezier wipe.
- **Pricing service headers**: when scrolled into view, the giant numeral `01` slides up from below by 12px with opacity 0 → 1 (300ms), title slides in 80ms after.
- **Process steps**: existing gradient-rule grow animation is kept; nothing added.

## Result

- Mono labels drop from ~12 unique types to ~5 (vertical label removed; per-service lead removed; per-card corner number, FROM unit duplicate, and DELIVERABLES tag removed; numbered list prefixes removed).
- One consistent vertical rhythm across all sections.
- Three small, on-brand interactions (anchor underline, deliverable bar, tier invert) — no new dependencies.
