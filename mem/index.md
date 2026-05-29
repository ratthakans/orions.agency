# Project Memory

## Core
Editorial multi-page site (NOT a landing). **Snow #fdfdf9 background sitewide** · ink Black Russian #0e0e0e type · Cinnabar #eb5939 accent (≤10% pixels). Footer is the only dark surface (uses `bg-foreground text-background`).
**6/3/1 (60/30/10) is the governing ratio** — content, color, typography, 10-col layouts. Prefer hairline bands over full-bleed cinnabar.
Italic accents in headlines = Cinnabar (`<em className="italic text-cinnabar">…</em>`).
Brand 'ØRIONS'. Fonts: **Newsreader** (serif/editorial/italic), **Inter** (display+body+UI+brand wordmark tracked +0.16em uppercase), **IBM Plex Mono** (meta labels), IBM Plex Sans Thai (Thai fallback). Body 16/1.6.
Zero radius everywhere. Hairlines only. No glows/shadows/rounded cards/gradients.
**Restrained editorial type scale** (do not exceed): xl 40→96px · lg 34→68px · md 26→44px · sm 20→30px · xs 17→22px. Use `.h-display-xl/lg/md/sm/xs` utilities — never inline `style={{fontSize:clamp()}}`.
**Unified hover system** (use these utilities; do not invent new ones): `.link-quiet` (text+underline grow), `.card-quiet` (border→cinnabar only), `.btn-primary` (ink→cinnabar), `.btn-accent` (cinnabar→ink), `.btn-ghost` (hairline→cinnabar). NEVER use `hover:-translate-y-*`, `hover:scale-*`, `hover:bg-cinnabar hover:text-background` (card flip), or `hover:opacity-*` on cards/links.
Section rhythm: `py-20 md:py-28` (use `.section-pad`). Hero `pt-24 pb-20` md `pt-28 pb-24`. Nav height 64px.
Mono section labels: `font-mono text-[10px] tracking-[0.22em] uppercase` with leading `w-6 h-px bg-cinnabar` rule + "NN — Title".
Nav: clean horizontal text links, no pill — active link is ink, inactive is `text-foreground/55`.
Routes: `/`, `/about`, `/services`, `/consulting`, `/work`, `/studio`, `/diagnostic`, `/contact`. `/manifesto` & `/approach` → `/about`. `/projects` & `/ventures` → `/studio`. `/health-check` → `/diagnostic`.
React/Vite MPA. Centralized SEO.tsx. Brand: 'Stories, refined.'

## Memories
- [Visual Aesthetic](mem://style/aesthetic) — Snow/ink/Cinnabar, hairlines, zero-radius
- [Typography](mem://style/typography) — Newsreader + Inter + IBM Plex Mono
- [Motion & Interactions](mem://tech/transitions) — Reveal y:8 d:0.35, link-quiet underlines
- [Architecture & SEO](mem://tech/architecture) — Core pages, routing, SEO.tsx
- [Copywriting](mem://brand/narrative-strategy) — Positioning, Tone Block, Manifesto
- [Company Info](mem://brand/contact-details) — Contact details, tax ID, and team structure
- [Portfolio & Series](mem://features/portfolio) — Case study layouts, project grids, 21:9 originals
- [Contact Section](mem://features/contact-section) — Mailto inquiry form, audit flow
