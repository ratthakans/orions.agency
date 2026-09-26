# ORIONS — Visual System

The site expresses **Stories, refined.** through typography, sequence and precise spacing. This document describes the live implementation in `src/index.css`, `tailwind.config.ts` and `src/fonts.ts`.

## Palette

The interface is monochrome. The primary canvas is ink `#0E0E0E`, with snow `#FDFDF9` for type, lines, and focus. Subtle surfaces `#141414` and `#181818` separate dense sections. The home movements section reverses ink and snow for a single editorial interruption. Photographic work retains its own colors; UI chrome has no chromatic accent.

Use CSS variables for every surface and line. `--accent`, `--ring`, and the Tailwind `signal` utility now all refer to a monochrome value. Red is reserved for error feedback. Avoid colored punctuation, gradients, accent pills and decorative glows.

## Type

| Role | Face | Rule |
|---|---|---|
| English headings | Unbounded 500/600 | Uppercase, tight tracking, fluid `.h-display-*` scale |
| Selected editorial statement | Newsreader 400/500 | Rare emphasis in running content; currently the three movement pivots on `/practice` |
| Body and Thai | IBM Plex Sans Thai | Comfortable measure and generous leading; Thai is never forced uppercase |
| Labels and metadata | IBM Plex Mono | Small uppercase labels, indexes and navigation details |

Unbounded is intentionally wider than the previous serif display. Headlines must wrap inside their container; use the shared scale, balanced wrapping and `overflow-wrap: anywhere`. Avoid Newsreader in cards, lists, navigation and routine section headings.

## Composition

- The home masthead opens on the studio showreel, an oversized two-line statement and a ruled lower row for explanation and actions. An exposure scrim keeps the copy legible. The still is the prerendered LCP element and the loop mounts over it only after hydration, on a wide screen with motion allowed and data saver off — phones and reduced-motion visitors never request the file. Once footage moves it carries its own texture, so the frame's own grain layer steps back.
- A movement section runs its name and English line down a sticky left column while the long right column scrolls, so the reader never loses which move they are inside.
- The next section inverts to a snow canvas. Most other pages remain on ink with thin rules instead of boxes or shadows.
- Selected work follows an 8/4 image rhythm followed by one panoramic frame. Use asymmetrical editorial grids, visible indexes and generous margins. Work imagery carries color, while surrounding interface remains restrained.
- Shared `SectionLabel`, `.cta-link`, `.h-display-*`, `.section-ink` and `.section-paper` keep routes consistent. Preserve content hierarchy and route ownership.

## Cinematic surface

`src/assets/film-grain.png` is a deterministic, static raster tile. A quiet fixed layer gives the site a common emulsion texture; still frames get a second, stronger grain layer within their image bounds. Keep grain static so it never flickers over body copy. The opening frame may drift slowly by a few pixels, with the movement disabled for reduced-motion users. Use actual selected-work imagery and identify its client in the frame metadata; avoid decorative stock imagery or simulated video controls.

Client names in selected work and digital product cards use their English public names. Song titles remain in the original language because they are names of works, not agency client labels.

## Behavior and accessibility

Interactions use underlines, opacity and small movements, with reduced-motion alternatives. Focus has a visible high-contrast monochrome ring. At 320px and larger, headings may wrap but must never force horizontal scrolling; clickable CTA labels stay on one line where possible. Thai copy keeps natural word boundaries and the language attribute.

## Structure

The site gives exactly one answer to *what do you sell*: three movements — Expand, Reframe, Embed — each named by the client's own question. Story · Direction · Expression is craft that sits beneath them and never returns as a competing section; the five-step method is retired. `src/data/practice.ts` is the single source, and `src/test/content-contracts.test.ts` fails if a second model reappears, if an engagement is not routed into a movement, or if a movement loses its evidence in `/work`.

Two offers sit deliberately outside the three and say so: Brand Foundation, because every movement starts from something that already exists, and Film & Visual Story, because choosing a medium is not the same kind of decision as choosing a move.

## Usage check

Before publishing, run `npm run typecheck` (plain `tsc --noEmit` checks nothing here — the root config is `"files": []` plus project references) and inspect home, work, practice, about and contact at phone and desktop widths; verify there is no chromatic UI accent, Unbounded headings are legible, the isolated Newsreader statement reads as a deliberate exception, and focus remains visible.
