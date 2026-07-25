# ØRIONS — Design System

Reference for designing and building ØRIONS surfaces. Every value here is the
one actually in the code (`src/index.css`, `tailwind.config.ts`, `src/fonts.ts`).

---

## 0. The governing idea

**Sharp, flat, and quiet.** Structure is made of 1px rules, not boxes. Nothing
is rounded, nothing casts a shadow, and colour is withheld until it means
something. The page should read like a printed editorial spread that happens to
be on a screen — confident enough to be plain.

Three rules that decide most arguments:

1. **Subtraction over addition.** If an element can be removed and the page
   still reads, remove it.
2. **Colour is a statement, not decoration.** Cinnabar appears ~12 times across
   the entire site. If you are reaching for it, ask what it is marking.
3. **Type carries hierarchy.** Not weight, not colour, not borders — size and
   space.

---

## 1. Colour

Dark theme only. There is no light mode and no `dark:` variants.

| Token | HSL | Hex | Role |
|---|---|---|---|
| `--background` | `0 0% 5.5%` | `#0E0E0E` | Page base (Black Russian) |
| `--foreground` | `60 33% 98%` | `#FDFDF9` | Ink (Snow) |
| `--surface` | `0 0% 7.8%` | `#141414` | Alternating section band |
| `--surface-2` | `0 0% 9.4%` | `#181818` | Cards, elevated band |
| `--card` | `0 0% 9.4%` | `#181818` | Card fill |
| `--muted-foreground` | `60 5% 65%` | — | Secondary text |
| `--border` | `0 0% 15.3%` | `#272727` | All rules and dividers |
| **`--accent`** | **`11 81% 57%`** | **`#EB5939`** | **Cinnabar — the only accent** |
| `--accent-hover` | `11 76% 50%` | — | Accent hover |
| `--destructive` | `0 72% 48%` | — | Errors only |

### Using colour

- Tailwind: `bg-background`, `text-foreground`, `border-border`, `bg-surface`,
  `bg-surface-2`, `text-muted-foreground`, and **`text-cinnabar` /
  `bg-cinnabar` / `border-cinnabar`** (full opacity-modifier support:
  `text-cinnabar/60`).
- Most borders in page code are written as `border-foreground/12` … `/20`
  rather than `border-border` — both land in the same neighbourhood; prefer
  `border-foreground/12` for hairlines inside a section and `/20` for a section's
  top rule.
- Text de-emphasis ladder: `text-foreground` → `text-foreground/85` →
  `text-foreground/80` → `text-muted-foreground`.

### Where cinnabar IS allowed

Keyboard focus ring · the brand slash `/` · the single gate marker in the
practice ladder · the `Signal` moment in Noise/Signal · the hero full-stop ·
the `editorial-quote` left rule. That is the list.

### Where cinnabar is NOT allowed

**`<em>` inside a heading.** It is deliberately styled `color: inherit` — accent
words change *form*, not colour. A heading full of orange words is the failure
mode this system was built to avoid.

---

## 2. Typography

Three self-hosted faces via Fontsource. No third-party font requests, ever.

| Face | Use |
|---|---|
| **Newsreader** | Latin display — headings, serif numerals, pull quotes |
| **IBM Plex Sans Thai** | Body, **all Thai**, and Latin *inside* Thai text |
| **IBM Plex Mono** | Labels, meta, depth/stage markers, eyebrows |

> Thai text uses IBM Plex Sans Thai for its inline Latin too — mixing a Latin
> serif into a Thai line produces a visible clash. This is enforced by
> `:lang(th)` in `@layer base`.

### Display scale — single source of truth

All fluid via `clamp()`. Never hand-roll a heading size when one of these fits.

| Class | Size | Line height | Tracking |
|---|---|---|---|
| `.h-display-xl` | `clamp(46px, 8.5vw, 128px)` | 1.0 | −0.025em |
| `.h-display-lg` | `clamp(34px, 5.6vw, 84px)` | 1.04 | −0.022em |
| `.h-display-md` | `clamp(28px, 4vw, 52px)` | 1.1 | −0.018em |
| `.h-display-sm` | `clamp(21px, 2.4vw, 32px)` | 1.2 | −0.012em |
| `.h-display-xs` | `clamp(17px, 1.5vw, 21px)` | 1.4 | −0.008em |
| `.h-display-2xs` | `clamp(15px, 1.2vw, 18px)` | 1.3 | −0.005em |

Body: `17px / 1.58`, weight 400. Headings default to weight **500** — never 700.

### Thai typography (important)

Thai gets its own tuning, declared **outside** `@layer` so it beats the utilities:

```css
letter-spacing: 0;    /* Latin's negative tracking collides Thai marks */
line-height: 1.25;    /* stacked vowels/tones need vertical room */
text-wrap: pretty;
```

**Always put `lang="th"` on Thai elements** — the tuning, the wrapping and the
font stack all key off it. Add `thai-wrap` on Thai blocks that need explicit
break control. `font-thai` sets the Thai body treatment (1.7 line height).

### Italics do not exist

```css
em, i, .italic { font-style: normal !important; }
```

IBM Plex Sans Thai's obliques read poorly, so the system is upright throughout.
**Do not write `className="italic"` — it does nothing.** Use `<em>` for a
semantic accent word; it renders as Newsreader upright at the heading's colour.

---

## 3. Shape and depth

- **`border-radius: 0` everywhere.** Every Tailwind radius utility is overridden
  to `0` in the config. There are no pills, no rounded cards.
- **No shadows.** Every `shadow-*` utility resolves to `none`. Elevation is
  expressed by surface value (`#0E0E0E` → `#141414` → `#181818`), never by blur.
- **1px hairlines are the structural device**: `border-t border-foreground/15`
  between sections, `border-b border-foreground/12` between list rows.

---

## 4. Layout and rhythm

- Content max width: **`max-w-[1400px]`** (marketing pages) or
  **`max-w-[1280px]`** (denser editorial pages like `/practice`, `/about`).
- Horizontal padding: **`px-6 md:px-10`**, always.
- Section rhythm: **`py-24 md:py-36`** standard, **`py-32 md:py-52`** for the
  big homepage movements. Sections are separated by a top hairline, and
  alternate `bg-surface` / `section-ink` for banding.
- Measure: body copy capped at `max-w-[640px]`…`max-w-[760px]`; headings capped
  in characters (`max-w-[16ch]`…`max-w-[24ch]`) so line breaks stay deliberate.

---

## 5. Motion

One easing curve for the whole site:

```
cubic-bezier(0.22, 1, 0.36, 1)
```

- **`<Reveal>`** — the scroll-reveal wrapper used on nearly every block.
  IntersectionObserver + CSS transition. Above-the-fold content reveals
  immediately, and a 1200ms failsafe guarantees content is **never** left
  invisible. Props: `delay`, `direction` (`up`/`left`/`right`/`fade`),
  `emphasis` (`lead` 16px/640ms · `default` 10px/480ms · `quiet` 6px/380ms).
  Use `quiet` for stacked items so a grid of six doesn't become six competing
  animations.
- **`.mask-line`** — hero mask-up. Fail-safe by design: the resting state is
  *visible* and the animation only plays *from* the hidden position, so an
  animation that never runs can't hide the headline.
- **`.silk-drift`** — 26s ambient drift on the hero image.
- `prefers-reduced-motion` is honoured by every one of these.

**There is no `framer-motion`.** It was removed; do not reintroduce it.

---

## 6. Components and primitives

### CTAs

`.cta-link` is the house CTA — a label, an arrow that drifts on hover, and a
baseline that brightens. No boxes.

```jsx
<Link to="/practice" className="cta-link">
  <span>ดูวิธีที่เรารับงาน</span><ArrowUpRight className="w-4 h-4" />
</Link>
```

- `.cta-link-lg` — hero scale (18px)
- `.cta-link-muted` — secondary; starts at 55% opacity, warms to full on hover
- `.btn-accent` — the one real button (snow on ink). Used for form submit.
  **Note it is snow-on-ink, not cinnabar** — the accent stays reserved.

### Surfaces

- `.card-soft` — flat panel, border warms `0.12 → 0.3` on hover
- `.card-accent` — featured panel; near-white tint gradient, *not* orange
- `.section-ink` — elevated dark band that also re-scopes `--surface`/`--card`

### Meta

- `.meta-chip` — mono 10px, uppercase, `0.18em` tracking, 1px border
- `.index-badge` — mono 10px, `0.22em` tracking, uppercase
- `.editorial-quote` — Thai body at `clamp(17px, 1.4vw, 21px)` with a
  **cinnabar left rule**
- `.brand-slash` — the skewed cinnabar `/` (component: `<Slash />`)
- `.hairline` / `.hairline-soft` — 1px rules

### Analog texture layer

Applied faintly and on purpose — analog at full strength becomes retro pastiche.

- `.grain` — two-plate film grain (fine speckle over coarse clumps) at 0.075
- `.halftone` — 3px print dot-screen over imagery, dissolves on `.group:hover`
  alongside the grayscale→colour transition
- `.sprocket-edge` + `.frame-index` — contact-sheet treatment, **scoped to the
  Film & Motion board only**

---

## 7. Imagery

Default treatment is `grayscale-[0.25]` at rest → full colour on hover, paired
with a `scale-[1.03]` push and the halftone dissolve, all at 700ms. Cards are
`aspect-[4/5]` with a bottom gradient scrim carrying the caption.

Use the `<Picture>` component (`?as=picture` imports) so AVIF/WebP are emitted
at build. Always `loading="lazy"` below the fold.

---

## 8. Accessibility

- Focus ring is a **2px cinnabar outline at 3px offset** — never remove it.
- Decorative layers (grain, scrim, halftone, SignalField) carry `aria-hidden`.
- The hero headline ships a `sr-only` plain-text copy because the visible
  version is split into animated line spans.
- Thai content must carry `lang="th"`.

---

## 9. Quick do / don't

| Do | Don't |
|---|---|
| `border-foreground/12` hairlines | Cards with borders on all sides + fill + shadow |
| One `h-display-*` class | Hand-rolled `text-[47px]` |
| `<em>` for accent words | `text-cinnabar` inside every heading |
| `lang="th"` on Thai | Thai without it (tracking and wrapping break) |
| `emphasis="quiet"` on grids | Full-strength reveal on twelve tiles |
| Cinnabar for one marked thing | Cinnabar as a brand wash |
| Weight 500 headings | Weight 700 anything |
| `<Reveal>` | `framer-motion` |

---

## 10. File map

| Path | Contains |
|---|---|
| `src/index.css` | Tokens, base layer, every utility above |
| `tailwind.config.ts` | Colour aliases, font stacks, radius/shadow overrides |
| `src/fonts.ts` | Fontsource imports (the whole type system) |
| `src/components/Reveal.tsx` | Scroll reveal |
| `src/components/Picture.tsx` | Responsive AVIF/WebP images |
| `src/components/SignalField.tsx` | Ambient hero field |
| `src/components/Logo.tsx` | Wordmark as vector outlines (no webfont) |
