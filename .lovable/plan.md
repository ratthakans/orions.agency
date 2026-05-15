# Swiss Gradient — ØRIONS v3

A typographic Swiss layout (strict grid, hairlines, tabular numbers) on a textured paper, with Gemini gradient used as the single hero accent. All display type is **UPPERCASE Unbounded**, body is **IBM Plex Sans / IBM Plex Sans Thai**. Copy is cut hard — fewer words, more white space.

---

## 1. Typography (rewire fonts)

`src/index.css`
- Body / paragraphs → `IBM Plex Sans` (EN) + `IBM Plex Sans Thai` (TH), weight 400.
- All H1–H6 → `Unbounded`, weight 600/700, **UPPERCASE**, `letter-spacing: -0.01em`, `line-height: 0.95`.
- Remap utilities so existing markup adopts the new system without per-page churn:
  - `.font-serif` → Unbounded UPPERCASE 600 (no italic, no serif).
  - `.font-display` / `.font-brand` → Unbounded UPPERCASE 700.
  - `.font-thai` → IBM Plex Sans Thai 400, `text-transform: none`.
  - `.btn-label` → IBM Plex Sans 500, UPPERCASE, tracked `0.08em`.
- Italic `<em>` inside headings: keep gradient, **drop italic** (Unbounded italic is weak) — render as the same weight with `.text-gemini`.
- Drop Plus Jakarta Sans import.

## 2. Color & gradient (Swiss restraint)

- Keep paper background `#F5F2EC`, ink `#0F0F0F`.
- Gradient (`#4285F4 → #9B72CB → #D96570`) used **only** for:
  - the accent word in each section H1/H2 (already wired via `.text-gemini`),
  - the top status hairline / progress bar,
  - one full-bleed gradient rule (1px) under the cover hero,
  - `accent-dot` and `text-orion` micro-marks.
- No glow orbs, no large gradient fills, no rounded shapes.

## 3. Texture (paper grain + subtle noise)

- Strengthen existing `.grain` overlay from `opacity .03` → `.05`, swap noise PNG for a finer 256×256 monochrome noise tile.
- Add `.texture-paper` utility: layered SVG noise + a 1px hairline cross-grid (every 80px) at 4% opacity, applied to dark hero and dark CTA sections only.
- Add `.rule-gradient`: 1px horizontal full-bleed gradient line for section transitions (used 2–3× per page max).

## 4. Swiss grid & spacing

- Tighten container to `max-w-[1240px]`, gutters `px-6 md:px-12`.
- All sections: 12-column conceptual grid via existing flex/grid; align headlines flush-left, move the section index (`01 / 07`) to top-left rail in `font-mono` 10px.
- Increase vertical breathing: `py-20 md:py-28` → `py-28 md:py-40`.
- Replace dashed dividers with solid `border-foreground` hairlines.

## 5. Copy condensation (fewer words)

Rewrite headlines + sublines on `src/pages/Index.tsx` (and apply same trim to the other pages' heroes). Examples:

| Section | Before | After |
|---|---|---|
| Hero H1 | "Creative that *moves numbers.*" | "CREATIVE THAT *MOVES.*" |
| Hero subline | "A boutique creative agency — work that hits the brief, the numbers, and the eye." | "BRAND. CONTENT. ADS. — BANGKOK." |
| Stats H2 | "Why brands *stall.*" | "WHY BRANDS *STALL.*" |
| Stat captions (TH) | full sentence | 6–8 words max |
| Services H2 | "Three things, *properly.*" | "THREE THINGS. *PROPERLY.*" |
| Service taglines | 2 lines | 1 line, ≤ 9 words |
| Process H2 | "From audit to *scale.*" | "AUDIT → *SCALE.*" |
| Process step copy | full TH sentence | 4–6 words |
| Work H2 | "Selected *work.*" | "SELECTED *WORK.*" |
| Testimonials H2 | "What clients *say.*" | "CLIENTS *SAY.*" |
| Closing CTA | long sentence | "LET'S *MOVE.*" + single CTA |

Other pages (`About`, `Services`, `Work`, `Pricing`, `Contact`, `ClosingCTA`): only update H1 + lead paragraph to UPPERCASE-condensed form; keep body content intact in this pass.

## 6. Components touched

- `src/index.css` — fonts, utilities, grain, gradient rule.
- `index.html` — swap Google Fonts link to `Unbounded` + `IBM Plex Sans` + `IBM Plex Sans Thai` + `JetBrains Mono`.
- `src/pages/Index.tsx` — copy trim + grid spacing.
- `src/pages/{About,Services,Work,Pricing,Contact}.tsx` — H1 + lead trim only.
- `src/components/ClosingCTA.tsx` — condense.
- No new components, no routing, no backend changes.

## Out of scope

- No layout restructure beyond spacing/grid tightening.
- No new images, no hero video.
- No animation library swap (existing `Reveal` stays).
- No dark-mode rework.
