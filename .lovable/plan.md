
# Full Site Review — Design, Consistency, Creative Agency Polish

## Findings by Page

### 1. Typography inconsistency (sitewide)
- Heading sizes scale inconsistently: Home hero `110px`, About `56px italic`, Services `48px`, Work/Contact different again. No clear type scale.
- Mixing `font-display italic` (About, Work, Services, Contact heroes) with `font-display` uppercase elsewhere creates two competing voices.
- Body text alternates between `text-[15px]`, `text-[17px]`, `text-[20px]` with different leading. Thai text needs consistent `font-thai` treatment.
- Section labels (`SectionLabel`) work well but numbering restarts per page — fine, but visual rhythm is broken by inconsistent margins (`mt-8`, `mt-10`, `mt-12`).

### 2. Home (`/`)
- Hero is strong but the section after marquee → STAGNATION → 3 PRESSURES → WHO → FEATURED → CTA is **6 heavy sections** with nearly identical padding (`py-28 md:py-40`) — feels monotonous.
- 3 PRESSURES uses fake-feeling stats ("1.7s attention span", "+41% inflation", "4.6x waste") with a "Source: ØRIONS Industry Observation" disclaimer — reads as filler. A real agency would either cite real sources or remove.
- Featured Work cards show **only gradient placeholders** — no actual imagery. Looks unfinished.
- CTA headline "Your business is stuck / We're the unstuck" is awkward English.

### 3. Services (`/services`)
- Good structure (4 services with what/how/deliverables/outcomes) but very text-heavy and visually flat — long vertical scroll of similar blocks.
- No visual differentiation between services (no icon, no number, no signature color/treatment per service).

### 4. Work (`/work`)
- All project cards likely use the same `bg-grad-radial` placeholder — no real imagery, no hierarchy (no "featured" project larger than others).
- Missing: filter/category, year, client name treatment.

### 5. About (`/about`)
- Italic display headings clash with the uppercase Unbounded used elsewhere.
- "ØRIONS Formula" likely needs more visual weight.
- No team, no process diagram, no founding story beat — feels thin for an agency About page.

### 6. Contact (`/contact`)
- Likely a basic form. Agencies need: direct email, response time promise, office location, social links, optional Calendly-style booking CTA.

### 7. Nav & Footer
- Nav: solid. "Book Audit" CTA is good.
- Footer: needs review — likely missing social, address, legal.

---

## Plan — What I'll Change

### A. Establish a unified type scale (in `index.css` + applied everywhere)
```
Display XL  → clamp(64px, 9vw, 110px)   Hero only
Display L   → clamp(40px, 5vw, 72px)    Page heroes
Display M   → clamp(28px, 3.5vw, 44px)  Section headlines
Display S   → 22–24px                   Card titles
Body L      → 18px / 1.7                Lead paragraphs
Body M      → 15px / 1.75               Default
Label       → 11px mono uppercase       Already exists
```
- Remove `italic` from page hero subheads — replace with uppercase Unbounded for consistency. Keep one italic accent only as a deliberate moment (e.g., a single pull-quote).
- Standardize section padding to `py-24 md:py-32` (slightly tighter).
- Standardize section header gap: `SectionLabel` → 32px → headline → 48px → content.

### B. Home — tighten + add creative agency texture
1. **Drop fake stats** in 3 PRESSURES. Replace with 3 short editorial statements (no numbers, just sharp copy + a small visual mark per item).
2. **Compress** STAGNATION + 3 PRESSURES into one tighter "Diagnosis" block (saves a section).
3. **Featured Work**: redesign as **1 large featured + 2 smaller**, asymmetric grid. Use real image slots (with proper fallback gradients with project name as overlay typography — much more agency-like).
4. **Add a small "Capabilities" strip** between WHO and FEATURED — 4 short service tags linking to /services. Replaces the empty marquee feel.
5. **Rewrite CTA** copy to: "Let's make something that works." / "Book a 30-min Clarity Call."

### C. Services — visual differentiation
1. Add a **large numeric marker** (01–04) per service in Unbounded at `120px` opacity 15% as background.
2. Add a one-line **signature verb** per service (e.g., "WE CLARIFY", "WE CONNECT", "WE AMPLIFY", "WE PRODUCE").
3. Convert what/how/deliverables/outcomes into a **2-column layout** (left: narrative; right: bullet list) instead of stacked — much easier to scan.
4. Add a sticky side index (desktop only) listing the 4 services for quick jump.

### D. Work — proper portfolio feel
1. **Asymmetric editorial grid**: row 1 = 1 large + 1 medium; row 2 = 3 equal; alternating.
2. Each card: client name (mono label), project title (Unbounded), one-line outcome, year tag.
3. Add **category filter chips** at top (All / Brand / Film / Digital / Campaign).
4. Hover: gradient overlay lifts, label slides up. No scale.

### E. About — give it weight
1. Add a **manifesto block** — 3 short principles in large Unbounded with thin dividers between.
2. Add a **process timeline** (4 steps: Listen → Diagnose → Apply → Measure) as a horizontal line with dots on desktop, vertical on mobile.
3. Keep "ØRIONS Formula" but wrap it in a stronger frame with a section label.
4. Add a **"Based in Bangkok / Working worldwide"** locator block.

### F. Contact — make it useful
1. Two-column on desktop: left = form; right = direct contact info (email, phone, address, hours, response promise "We reply within 1 business day").
2. Add **service-of-interest dropdown** in form (the 4 services).
3. Add small social row + a "Prefer to talk? Book a call →" link.

### G. Footer
- 4 columns: Brand + tagline / Services links / Site links / Contact + socials.
- Bottom: © 2025 ØRIONS · Bangkok · All rights reserved.

### H. Micro-polish
- Standardize all CTA buttons: one primary (`bg-grad`), one secondary (`border border-border`). Same padding `px-7 py-4`, same `label-mono` text.
- Add subtle horizontal rule treatment between major sections (the `divider-grad` thin line) for editorial rhythm.
- Reduce gradient usage to **accent moments only** (1 gradient element per section max) to prevent fatigue.

---

## Files to be edited
- `src/index.css` — unified type scale utilities, spacing tokens
- `src/pages/Index.tsx` — restructure sections, drop fake stats, asymmetric featured grid, new CTA copy
- `src/pages/Services.tsx` — large numerals, 2-col layout, sticky index, signature verbs
- `src/pages/Work.tsx` — asymmetric grid, filter chips, card redesign
- `src/pages/About.tsx` — manifesto, process timeline, remove clashing italics
- `src/pages/Contact.tsx` — 2-col layout, info panel, service dropdown
- `src/components/Footer.tsx` — 4-column structured footer
- `src/components/PageHero.tsx` — remove italic, apply unified scale

## Out of scope (for this pass)
- Real project photography (placeholders stay, but redesigned as typographic cards)
- Backend wiring of contact form
- Individual /work/:slug case study pages
