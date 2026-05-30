# Project Memory

## Core
Editorial multi-page site (NOT a landing). bg Snow #fdfdf9, ink Black Russian #0e0e0e, accent **Cinnabar #eb5939**.
**6/3/1 (60/30/10) — INK ดอม / SNOW อาศัย / CINNABAR แค่ accent.** Alternate sections via `.section-ink` (auto-inverts all CSS tokens — children with `bg-background`/`text-foreground`/`border-foreground` self-flip). No 2 consecutive snow sections. **Every page hero (or first section) must be ink** to anchor the 60% ink ratio — confirmed: Diagnostic, Contact, Studio hero, all use `.section-ink`. Cinnabar ≤10% pixels, never full-bleed.
Brand 'ØRIONS' wordmark = `.font-brand` → **Unbounded SemiBold** (600) tracked +0.08em uppercase (apply to Footer "ØRIONS · BANGKOK" too — never plain `font-mono`). Body = **Inter**. Display H1–H6 = **Inter Bold** (default). Italic accents in headings → Newsreader serif italic via `<em className="italic text-cinnabar">…</em>`. Meta/eyebrows = **IBM Plex Mono**. **Thai paragraphs:** use `.font-thai` only — word-break/line-break/overflow-wrap are now baked into the utility, so no need for separate `.thai-wrap`. `lang="th"` is optional. Thai body scale: `.body-th-sm` / `.body-th` / `.body-th-lg`.
Zero radius. Hairlines only. No glows/shadows/rounded cards/gradients.
**Display headings = Inter Bold sans (default for h1-h6)** with Newsreader italic cinnabar accent. NEVER apply `font-serif` to a heading. Use `.h-display-xl/lg/md/sm/xs` for scale.
**Layout variation rule** — never stack two 3-equal-column grids in a row. Mix: stacked editorial rows, 2-col asymmetric (sticky H2 + MethodStep numerals), TierMatrix, 3-col grid (only as signature, one per page).
**CTA buttons** — always use `.btn-primary` (ink pill) / `.btn-accent` (cinnabar pill) / `.btn-ghost` (outlined). Do NOT hand-roll `bg-cinnabar text-background px-7 py-4 btn-label` ever again.
**Headings rule** — `.font-serif` is banned on any `h1–h6`. Use `.h-display-{xl,lg,md,sm,xs}` + `<em className="italic text-cinnabar">…</em>` for serif italic accent. Editorial quotes (non-heading) use `.editorial-quote`.
**Headlines (locked):** Index hero `Stories, Refined.` · Services Boutique `No Guesswork. Just Craft.` Do not swap.
**Spec primitives (Rate Card 2026):**
- Page chrome: `<PageChrome>` or hairline band at top — `ØRIONS · BOUTIQUE CREATIVE STUDIO` (cinnabar mono caps) left + category (muted mono caps) right.
- Section labels: `<SectionLabel label="Side by Side" />` → cinnabar mono caps single-line eyebrow. NO slash, NO hairline rule. Optional `index="01"` prefix only on numbered sequences.
- Process rows: `<ProcessRow index="01" title="Discovery" meta="WEEK 01 · DAYS 1–5">body</ProcessRow>`.
- Method steps: `<MethodStep n="01" caption="WHO · AUDIENCE" title={...}>body</MethodStep>` (giant cinnabar Newsreader numeral).
- Tier matrices: `<TierMatrix tiers rows />` — PRO column = `highlight: true` (black bg + cinnabar text).
- Principle / hero quote: `<PrincipleBlock eyebrow title>body</PrincipleBlock>` (dark bg + cinnabar left rule).
- CTAs: hero = `btn-primary` ink pill; in-body = `<CTA variant="chevron">`; contact = `<StackedCTA label href link>` (label / `›` / link).
- Cinnabar surface ≤ 10% of pixels. PRO column is the only fully inverted block per page.
Nav: hyper-minimal — logo left + hamburger right with mix-blend-difference; full-screen overlay with serif italic links.
Routes: `/`, `/about`, `/services`, `/pricing`, `/consulting`, `/work`, `/studio`, `/diagnostic`, `/contact`. Services = agency overview (capabilities, process, deliverables, industries, FAQ — NO prices). Pricing = all rate cards (Boutique/Digital/Production tiers, add-ons, ladder, fine print). Consulting is its own page. Reusable marketing components: `FAQ` (accordion), `TrustStrip` (client names row), `CTABand` (eyebrow + headline + dual CTA). Contact has marketing hero with trust badges, "what happens next" timeline, FAQ, and sticky mobile LINE pill. Nav `/contact` rendered as accent pill button. `/manifesto` & `/approach` → `/about`. `/projects` & `/ventures` → `/studio`. `/health-check` → `/diagnostic`.
React/Vite MPA. Centralized SEO.tsx. Brand: 'Stories, refined.'

## Memories
- [Visual Aesthetic](mem://style/aesthetic) — Snow/ink/Cinnabar, hairlines, zero-radius
- [Typography](mem://style/typography) — Inter Bold display, Newsreader italic accents, IBM Plex Mono meta
- [Motion & Interactions](mem://tech/transitions) — Wipe overlays, CSS transforms, fast transitions
- [Architecture & SEO](mem://tech/architecture) — Core pages, routing, SEO.tsx
- [Copywriting](mem://brand/narrative-strategy) — Positioning, Tone Block, Manifesto
- [Company Info](mem://brand/contact-details) — Contact details, tax ID, and team structure
- [Portfolio & Series](mem://features/portfolio) — Case study layouts, project grids
- [Contact Section](mem://features/contact-section) — Mailto inquiry form, audit flow
