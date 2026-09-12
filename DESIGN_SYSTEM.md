# ØRIONS — Design System

Reference for designing and building ØRIONS surfaces. Every value here is the
one actually in the code (`src/index.css`, `tailwind.config.ts`, `src/fonts.ts`).

---

## 0. The governing idea

**ØRIONS is the night sky. The colour is the client's.**

The site is a monochrome canvas — a black ground and the white ink on it — and
the only colour that ever appears is inside client work. We have no accent of our
own. Swiss in structure (grid, left-aligned, hairlines, type doing the hierarchy),
a little Scandinavian in restraint.

Three rules that decide most arguments:

1. **No hue in the chrome.** Ground, text, rules, buttons, focus ring, the slash —
   all black or white. If you are reaching for a colour, it belongs in an image.
2. **Never desaturate the work.** No grayscale, no halftone, no tint over client
   imagery. The concept fails the moment we mute the one thing allowed to be loud.
3. **Type carries hierarchy.** Not weight, not colour, not borders — size and space.

---

## 1. Colour

Dark only. Two values, each used at reduced opacity where a step is needed.

| Token | HSL | Hex | Role |
|---|---|---|---|
| `--background` | `240 9% 4.3%` | `#0A0A0C` | Night sky — a hair of blue, deliberately not `#000` |
| `--foreground` | `60 8% 95.3%` | `#F4F4F2` | The ink |
| `--surface` | `240 11% 7.1%` | `#101014` | Banded sky |
| `--surface-2` / `--card` | `240 11% 9.2%` | `#15151A` | Elevated band |
| `--muted-foreground` | `240 4% 64%` | — | Secondary text |
| `--border` | `240 6% 15%` | — | Every rule and divider |
| `--accent` / `--ring` | = foreground | — | Kept as tokens so nothing breaks; they resolve to white |
| `--destructive` | `0 72% 58%` | — | **The one exception** — form validation only |

### Using colour

- Tailwind: `bg-background`, `text-foreground`, `border-border`, `bg-surface`,
  `text-muted-foreground`, and opacity steps such as `text-foreground/55`.
- **There is no `cinnabar` utility any more.** It was removed from
  `tailwind.config.ts` so it cannot creep back in.
- `--destructive` exists because a failed form field is a functional state, not a
  brand moment. It never appears outside form validation.

---

## 2. Typography

Two families via Fontsource. No third-party font requests.

| Face | Use |
|---|---|
| **Unbounded** | Latin display, labels, numerals — wide, geometric, set tight |
| **Noto Sans Thai** | All Thai, and all running body text |

Tokens live at the top of `src/index.css` — change a face there, not at call sites:

```css
--font-display: 'Unbounded', 'Noto Sans Thai', system-ui, sans-serif;
--font-body:    'Noto Sans Thai', system-ui, sans-serif;
--font-label:   'Unbounded', 'Noto Sans Thai', system-ui, sans-serif;
```

> **Unbounded has no Thai subset** (latin · latin-ext · cyrillic · vietnamese).
> Every stack that leads with it names Noto Sans Thai second, so a Thai heading
> falls through glyph by glyph. A mixed Thai/English heading is Unbounded for the
> Latin and Noto Sans Thai for the Thai, in one line. That is intended.

The Tailwind names `font-serif` and `font-mono` still exist so the existing call
sites keep working, but **neither means what it says**: both resolve to Unbounded.

### Display scale — single source of truth

Re-cut for Unbounded, which sets about a third wider than the serif it replaced.

| Class | Size | Line height | Tracking |
|---|---|---|---|
| `.h-display-xl` | `clamp(38px, 7vw, 104px)` | 0.98 | −0.04em |
| `.h-display-lg` | `clamp(30px, 4.7vw, 70px)` | 1.02 | −0.035em |
| `.h-display-md` | `clamp(25px, 3.4vw, 44px)` | 1.08 | −0.03em |
| `.h-display-sm` | `clamp(20px, 2.1vw, 28px)` | 1.18 | −0.02em |
| `.h-display-xs` | `clamp(16px, 1.4vw, 19px)` | 1.35 | −0.01em |
| `.h-display-2xs` | `clamp(14px, 1.15vw, 17px)` | 1.3 | −0.005em |

Headings are weight **500**.

### Thai typography — and the `lang` trap

The document is `<html lang="th">`, so **`:lang(th)` matches every element on the
site**, English headings included. Two consequences, both handled in the unlayered
block near the bottom of `index.css`:

- Thai-only metrics (`letter-spacing: 0`, `line-height: 1.25`) are keyed on the
  **attribute** `[lang="th"]`, never on `:lang(th)` — otherwise a 104px English
  headline sets at 1.25 leading with no tracking.
- Bare elements inside a heading inherit the display face instead of being caught
  by the body-font rule (which is why Unbounded once failed to render at all).

**So: put `lang="th"` on every Thai heading, on the element itself.**
`CTABand`, `ClosingCTA` and `SectionHeading` detect this from their `title` prop
automatically via `src/lib/lang.ts`.

### Italics do not exist

```css
em, i, .italic { font-style: normal !important; }
```

Use `<em>` for a semantic accent word; it renders upright in the heading's face.

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
  White on black — there is no accent to reach for.

### Surfaces

- `.card-soft` — flat panel, border warms `0.12 → 0.3` on hover
- `.card-accent` — featured panel; near-white tint gradient, *not* orange
- `.section-ink` — elevated dark band that also re-scopes `--surface`/`--card`

### Meta

- `.meta-chip` — mono 10px, uppercase, `0.18em` tracking, 1px border
- `.index-badge` — mono 10px, `0.22em` tracking, uppercase
- `.editorial-quote` — Thai body at `clamp(17px, 1.4vw, 21px)` with a
  **white left rule**
- `.brand-slash` — the skewed white `/` (component: `<Slash />`)
- `.hairline` / `.hairline-soft` — 1px rules

### Texture

- `.grain` — faint film grain on the page ground. Monochrome, so it is allowed.
- `.sprocket-edge` + `.frame-index` — contact-sheet treatment, Film & Motion board
  only. Also monochrome.
- **`.halftone` is retired.** A print screen over client work is our ink on their
  colour, which the concept forbids.

---

## 7. Imagery

**Client work is shown at full colour, always** — no grayscale at rest, no
colour-on-hover reveal, no halftone. A `scale-[1.03]` push on hover is fine; any
filter is not.

ØRIONS has no photographic imagery of its own. The homepage hero is
`<SignalField>` — a black field with one white star — so the first colour anyone
sees on the site is a client's.

Use the `<Picture>` component (`?as=picture` imports) so AVIF/WebP are emitted at
build. `loading="lazy"` below the fold only.

---

## 8. Accessibility

- Focus ring is a **2px white outline at 3px offset** — never remove it.
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
| `<em>` for accent words | A coloured word inside a heading |
| `lang="th"` on Thai | Thai without it (tracking and wrapping break) |
| `emphasis="quiet"` on grids | Full-strength reveal on twelve tiles |
| Full-colour client work | Grayscale, halftone or tint over client work |
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
