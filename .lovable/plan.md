## Changes

### 1. Navbar — solid black bar
`src/components/Nav.tsx`
- Remove `mixBlendMode: "difference"` from the top bar
- Add `bg-foreground` (Black Russian) to the bar
- Wordmark + links use `text-background` (Snow) directly, active underline stays Cinnabar
- Mobile hamburger lines switch from `bg-white` → `bg-background`
- Bar height stays `h-[72px]`; full-screen overlay menu unchanged

### 2. Hero — centered, single-line headline
`src/pages/Index.tsx`
- Wrap hero inner container with `items-center text-center mx-auto` so eyebrow, headline, paragraph, and stat row are horizontally centered
- Headline: remove `<br />` so "Stories, *refined.*" sits on one line; reduce headline size from `h-display-xl` → `h-display-lg` on small screens via the existing scale (still responsive), keeping it on one row on desktop ≥768px
- Stat row (`6:3:1`, Data-Refined, Industry Exclusivity): center with `justify-center` and remove `max-w-[860px]` constraint or center it with `mx-auto`
- Paragraph: `mx-auto` + `text-center`

### 3. Contrast fixes (text that currently blends in)
Audit and fix low-contrast text on Snow background:
- `text-muted-foreground` is currently `hsl(0 0% 32%)` on `#FDFDF9` — acceptable but pale labels like `text-muted-foreground` on `bg-foreground/[0.02]` hover rows in `Index.tsx` look thin. Bump `--muted-foreground` from `0 0% 32%` → `0 0% 22%` in `src/index.css` for stronger editorial body contrast across all pages.
- Confirm Footer / Index index-rows / mono labels read clearly after the bump.

### Files touched
- `src/components/Nav.tsx`
- `src/pages/Index.tsx`
- `src/index.css` (single token tweak)

No routing, copy, or component-structure changes.
