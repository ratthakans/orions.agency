## Scope

Site-wide polish anchored on the home page. Boutique editorial framing: "Independent editorial studio. Bangkok. Boutique Creative Agency."

## Changes

### 1. Home (`src/pages/Index.tsx`)
- **Remove** the MINI MANIFESTO section entirely (the `manifestoPoints` block, section index 01).
- **Move** the APPROACH section into its place as section **01**, directly under the hero. Keep prose, italic Cinnabar accent, link to `/approach`.
- **Renumber** remaining sections: Selected Work → 02, Trusted → 03, Packages → 04, Diagnostic → 05.
- **Hero subtitle**: update to "Independent editorial studio. Bangkok. — Boutique Creative Agency."

### 2. Selected Work — B&W with color on hover (`src/pages/Index.tsx`)
- All four tiles (Hongmove, RTAF, Democrat, CTA) become **grayscale by default**, transitioning to full color on hover.
- Apply `grayscale group-hover:grayscale-0 transition-[filter,opacity] duration-700` to `<img>` tags; raise opacity on hover.
- Tighten bento grid composition for better balance: re-check row spans so the CTA tile and Democrat tile align cleanly on the bottom row (no awkward gaps at 1377px viewport).
- Add a hairline meta row above the grid: counter `01 / 03` and "Drag · Scroll" rhythm cue (static, no JS).

### 3. Cinnabar → Gradient accent (`src/index.css`)
- Add a new utility `--gradient-cinnabar: linear-gradient(135deg, hsl(11 81% 57%), hsl(22 90% 62%), hsl(35 92% 60%))` (Cinnabar → warm coral → amber).
- Add `.bg-gradient-cinnabar` and `.text-gradient-cinnabar` (background-clip text) utilities.
- Apply to: hero italic accents (`Stories, refined.`), section-headline italic accents across pages, primary CTA buttons (Contact pill, "Start a project"), Selected-Work CTA tile background, accent dots.
- Keep `.text-cinnabar` / `.bg-cinnabar` as solid fallbacks for hairlines, small labels, mono accents (where gradient would be illegible).

### 4. Navbar — opaque (`src/components/Nav.tsx`)
- Replace transparent header with **solid `bg-background` + bottom hairline** (`border-b border-foreground/10`).
- Keep current inline-links layout, brand left, contact CTA right.
- Contact CTA uses new `.bg-gradient-cinnabar`.

### 5. Footer — black (`src/components/Footer.tsx`)
- Currently uses `bg-foreground text-background` (snow-on-black-on-white inversion). Since the site is already dark, flip to **`bg-black text-foreground`** (pure #000) so the footer reads as a distinct deeper-black slab vs. the #0E0E0E page background.
- Adjust all `text-background/...` → `text-foreground/...`, `border-background/...` → `border-foreground/...`.
- Cinnabar mono labels switch to gradient text where they appear as headings ("— Contact", "— Studio", "— Index", "— Elsewhere").
- Email headline keeps gradient hover treatment.

### 6. Cross-page consistency
- **Subtitle/positioning line** "Independent editorial studio. Bangkok. — Boutique Creative Agency" added to: `About.tsx` (page hero), `Services.tsx` (page hero), `Work.tsx` (page hero), `Contact.tsx` (page hero). One line, mono or serif italic, just below page H1.
- All page heroes use the same `font-serif h-display-lg/xl` rhythm and italic-gradient accent.
- All "Contact →" CTAs and primary buttons across pages adopt `.bg-gradient-cinnabar`.
- Verify `border-foreground/12` hairline is consistent on section dividers across `About`, `Services`, `Work`, `Contact`, `HealthCheck`, `CaseStudy`.

## Files to edit

- `src/index.css` — gradient utility + token wiring
- `src/components/Nav.tsx` — opaque bg + gradient CTA
- `src/components/Footer.tsx` — pure black bg, token swap
- `src/pages/Index.tsx` — remove Manifesto, promote Approach, B&W bento, gradient accents, renumber
- `src/pages/About.tsx`, `Services.tsx`, `Work.tsx`, `Contact.tsx` — subtitle + gradient CTA consistency

## Out of scope
- No routing changes, no new components, no copy rewrites beyond the subtitle line and section renumbering.
- No motion/library additions.
