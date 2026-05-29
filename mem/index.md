# Project Memory

## Core
Editorial multi-page site (NOT a landing). bg Snow #fdfdf9, ink Black Russian #0e0e0e, accent **Cinnabar #eb5939**.
**6/3/1 (60/30/10) is the governing ratio** — content, color (60 snow / 30 ink / 10 cinnabar — never exceed), typography, 10-col layouts. Prefer hairline bands over full-bleed cinnabar.
Italic headline accents = Cinnabar (`<em className="italic text-cinnabar">…</em>`). Legacy `text-orion`/`text-gemini` map to Cinnabar.
Brand 'ØRIONS'. Fonts: **Newsreader** (serif/editorial/italic), **Inter** (display+body+UI+brand wordmark tracked +0.16em uppercase), **IBM Plex Mono** (meta labels), IBM Plex Sans Thai (Thai fallback).
Zero radius. Hairlines only. No glows/shadows/rounded cards/gradients.
Type scale: use `.h-display-xl/lg/md/sm/xs` utilities — never inline `style={{fontSize:clamp()}}`.
**Spec primitives (mandatory):**
- Section labels = `SectionLabel index="NN" label="Name"` → renders `NN/NAME` (slash, uppercase, cinnabar hairline). NEVER use `—` em-dash separator.
- Narrative prose = wrap in `<Editorial>` (Newsreader serif blockquote, cinnabar left rule).
- Dates / metrics / constraints / week+day codes = `<MetaChip>` (mono CAPS) or inline backticks.
- In-body action lists = `<CTA variant="chevron">` (Inter + `›` glyph). Hero CTAs keep filled `primary`/`invert` pill.
- Tier comparisons = matrix table (Feature × Starter/Pro/Elite columns).
- Process / timeline = `NN/STEP → WEEK NN → DAYS x-y` mono chips + `<Editorial>` body.
Nav: hyper-minimal — logo left + hamburger right with mix-blend-difference; full-screen overlay menu with serif italic links.
Routes: `/`, `/about`, `/services`, `/consulting`, `/work`, `/studio`, `/diagnostic`, `/contact`. `/manifesto` & `/approach` → `/about`. `/projects` & `/ventures` → `/studio`. `/health-check` → `/diagnostic`. Ventures renamed to Studio sitewide. Services page = Boutique · Digital · Production divisions (from 2026 rate cards). Consulting is its own page.
React/Vite MPA. Centralized SEO.tsx. Brand: 'Stories, refined.'

## Memories
- [Visual Aesthetic](mem://style/aesthetic) — Snow/ink/Cinnabar, hairlines, zero-radius
- [Typography](mem://style/typography) — Newsreader + Inter + IBM Plex Mono
- [Motion & Interactions](mem://tech/transitions) — Wipe overlays, CSS transforms, fast transitions
- [Architecture & SEO](mem://tech/architecture) — Core pages, routing, SEO.tsx
- [Copywriting](mem://brand/narrative-strategy) — Positioning, Tone Block, Manifesto
- [Company Info](mem://brand/contact-details) — Contact details, tax ID, and team structure
- [Portfolio & Series](mem://features/portfolio) — Case study layouts, project grids, 21:9 originals
- [Contact Section](mem://features/contact-section) — Mailto inquiry form, audit flow
