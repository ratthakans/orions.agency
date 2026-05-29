## Refinement pass — editorial discipline across the whole site

Site looks "shouty," not editorial: H1 hits ~220px, dark bg fights the brand spec, hover effects mix translate/scale/bg-swap/border-flip across pages. Fix is **tokens-first** — adjust the design system once, then sweep components for inconsistencies. No content rewrites.

---

### 1. Tokens — single source of truth (`src/index.css`)

**Background flip (dark → snow, as per brand):**
- `--background: 60 33% 98%` (snow) · `--foreground: 0 0% 5%` (ink)
- `--surface: 60 20% 96%` · `--surface-2: 60 14% 93%` (subtle warm off-whites for alt bands)
- `--muted-foreground: 0 0% 38%` · `--border-soft: 0 0% 85%`
- Scrollbar thumb: ink, not cinnabar (cinnabar stays ≤10% of pixels)

**Editorial type scale (the big fix):**
```
.h-display-xl  clamp(40px, 7.2vw,  96px)   /* was 72→220 */
.h-display-lg  clamp(34px, 5.2vw,  68px)   /* was 48→140 */
.h-display-md  clamp(26px, 3.4vw,  44px)   /* was 32→80  */
.h-display-sm  clamp(20px, 2.2vw,  30px)
.h-display-xs  clamp(17px, 1.5vw,  22px)
```
Body stays 16–17px / 1.6. Section labels stay 10px mono.

**Spacing rhythm:** standardize on `py-20 md:py-28` for sections (currently mixes 24/28/32/40). Hero `pt-32 pb-24`. No more `py-32 md:py-40`.

---

### 2. Hover system — unify on "underline + cinnabar"

One global utility set, applied everywhere:

```css
.link-quiet   /* text links: color shifts to cinnabar + underline grows L→R */
.card-quiet   /* cards/tiles: border becomes cinnabar, label-mono turns cinnabar, no translate/scale/bg swap */
.btn-primary  /* ink fill → cinnabar fill on hover (no scale) */
.btn-ghost    /* hairline border → cinnabar text + cinnabar border (no fill swap) */
```

Remove from components: `hover:-translate-y-1`, `hover:scale-105`, `hover:bg-cinnabar hover:text-background` on cards, `group-hover:translate-x-1` on arrows beyond a tiny 2px nudge, double-coloring on icons.

---

### 3. Component sweep

- **`Nav.tsx`**: remove the cinnabar Contact pill — replace with quiet text link "Contact" matching other nav items; active state = ink (not cinnabar) with cinnabar reserved for current-page hairline under the label. Height 64px (was 72).
- **`Footer.tsx`**: tighten padding, hairline dividers only, links use `.link-quiet`.
- **`Reveal.tsx`**: keep, but reduce y-offset 12→8 and duration 0.5→0.35.
- **`ClosingCTA.tsx`**: drop oversized `h-display-lg` → `h-display-md`, remove gradient/glow if any.
- **`PageHero.tsx`**: switch to restrained scale, ink-on-snow.
- **Buttons (`btn-label` callers)**: standardize to two variants only — `btn-primary` (ink fill, white text) and `btn-ghost` (hairline). Cinnabar reserved for one CTA per page max.

---

### 4. Page-level sweeps (no copy changes)

- **`Index.tsx`** (8 sections): hero scale down · Problem/Insight cards lose hover translate · Divisions tile uses `.card-quiet` · Process timeline numbers shrink · ClosingCTA shrinks.
- **`About.tsx`** (8 sections): consolidate duplicate "Why ØRIONS" — there are two `index="05"` (Divisions + Team) right now; renumber Team to 09 and rename label. Standardize section padding.
- **`Services.tsx`** (7 sections): Boutique/Digital/Production cards lose `hover:bg-cinnabar` flip → use `.card-quiet`. Pricing card "RECOMMENDED" tag becomes hairline ribbon, not filled. Tables get tighter row height (py-3, not py-5).
- **`Consulting.tsx`** (5 sections): same card-quiet pass on Three Units + Engagement grid.
- **`Work.tsx`** (6 sections): Focus Verticals + Contextual Moments use `.card-quiet`. Project gallery hover = image scale-down (1.02 max) + cinnabar caption color, no translate.
- **`Projects.tsx` (Studio)** (4 sections): venture cards drop full bg→cinnabar swap, use `.card-quiet`.
- **`Contact.tsx`**, **`HealthCheck.tsx`**: apply restrained scale + new hover.

---

### 5. Out of scope

- No content/copy rewrites (blueprint coverage is fine).
- No new sections/pages.
- No backend/auth/data changes.
- No new fonts/colors — only token values adjusted.
- No image regeneration.

---

### Files touched

```
src/index.css                          (tokens + new hover utilities)
src/components/Nav.tsx
src/components/Footer.tsx
src/components/Reveal.tsx
src/components/ClosingCTA.tsx
src/components/PageHero.tsx
src/components/SectionLabel.tsx        (snow tone update)
src/pages/Index.tsx
src/pages/About.tsx
src/pages/Services.tsx
src/pages/Consulting.tsx
src/pages/Work.tsx
src/pages/Projects.tsx
src/pages/Contact.tsx
src/pages/HealthCheck.tsx
mem://index.md                         (correct bg note: Snow is canonical, dark removed)
```

### Verification

- TypeScript build check after each batch.
- Visual QA on `/`, `/services`, `/about`, `/work`, `/studio`, `/consulting` at 1377px and 390px viewport.
