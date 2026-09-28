# ORIONS — Visual System

The site expresses **Stories, refined.** through typography, sequence and precise spacing. This document describes the live implementation in `src/index.css`, `tailwind.config.ts` and `src/fonts.ts`.

## Palette

The interface is monochrome. The primary canvas is ink `#0E0E0E`, with snow `#FDFDF9` for type, lines, and focus. Subtle surfaces `#141414` and `#181818` separate dense sections. The home brand-idea section reverses ink and snow for a single editorial interruption. Photographic work retains its own colors; UI chrome has no chromatic accent.

Use CSS variables for every surface and line. `--accent`, `--ring`, and the Tailwind `signal` utility now all refer to a monochrome value. Red is reserved for error feedback. Avoid colored punctuation, gradients, accent pills and decorative glows.

## Type

| Role | Face | Rule |
|---|---|---|
| English headings | Unbounded 500/600 | Uppercase, tight tracking, fluid `.h-display-*` scale. A `<span>` inside a heading inherits the heading's face (the document is `lang=th`, which would otherwise hand it IBM Plex Sans Thai) |
| Master line and editorial statements | Newsreader 400/500 | "Stories, Refined." in the hero and on the share image, set as written (not uppercase); also case-page verdicts, approach pivots on `/services` and Archive pull lines |
| Body and Thai | IBM Plex Sans Thai | Comfortable measure and generous leading; Thai is never forced uppercase |
| Labels and metadata | IBM Plex Mono | Small uppercase labels, indexes and navigation details |

Unbounded is intentionally wider than the previous serif display. Headlines must wrap inside their container; use the shared scale, balanced wrapping and `overflow-wrap: anywhere`. Avoid Newsreader in cards, lists, navigation and routine section headings.

## Composition

- The home masthead opens on the studio showreel, an oversized two-line statement and a ruled lower row for explanation and actions. An exposure scrim keeps the copy legible. The still is the prerendered LCP element and the loop mounts over it only after hydration, on a wide screen with motion allowed and data saver off — phones and reduced-motion visitors never request the file. Once footage moves it carries its own texture, so the frame's own grain layer steps back.
- On `/services` the three services sit side by side as equals; the two approaches follow on their own surface, so they never read as a fourth and fifth service.
- The next section inverts to a snow canvas. Most other pages remain on ink with thin rules instead of boxes or shadows.
- Selected work follows an 8/4 image rhythm followed by one panoramic frame. Use asymmetrical editorial grids, visible indexes and generous margins. Work imagery carries color, while surrounding interface remains restrained.
- Shared `SectionLabel`, `.cta-link`, `.h-display-*`, `.section-ink` and `.section-paper` keep routes consistent. Preserve content hierarchy and route ownership.

## Cinematic surface

`src/assets/film-grain.png` is a deterministic, static raster tile. A quiet fixed layer gives the site a common emulsion texture; still frames get a second, stronger grain layer within their image bounds. Keep grain static so it never flickers over body copy. The opening frame may drift slowly by a few pixels, with the movement disabled for reduced-motion users. Use actual selected-work imagery and identify its client in the frame metadata; avoid decorative stock imagery (the Archive is the one exception, below) or simulated video controls.

Client names in selected work and digital product cards use their English public names. Song titles remain in the original language because they are names of works, not agency client labels.

## Behavior and accessibility

Interactions use underlines, opacity and small movements, with reduced-motion alternatives. Focus has a visible high-contrast monochrome ring. At 320px and larger, headings may wrap but must never force horizontal scrolling; clickable CTA labels stay on one line where possible. Thai copy keeps natural word boundaries and the language attribute.

## Structure

The site follows the ORIONS blueprint: **Stories, Refined.** · three services · two signature approaches. Pages are concept, work, services and about, plus the Archive, contact and privacy; nav is Work · Services · About · Archive.

Each blueprint layer appears on exactly one page. Home: the master idea and belief (hero), the brand idea (Story · Behavior · Aesthetic · Experience), selected work, one line per service (approaches are not shown here), the founder, and the promise as its closing band. `/services`: the three services with their six items each, the two signature approaches set apart from them (they combine services — they are never listed as services), and the method Observe → Reframe → Shape → Embed. `/about`: the founder, the point of view as one line (Better = More Intentional.) over the four principles, the record. Brand voice and the architecture diagram stay internal and never ship.

The Archive is a grid of twelve numbered pieces, each with a 4:3 thumbnail; an article opens on the same image at 3:2 with a credit beneath. Archive images are Pexels photographs chosen for what each piece says — the one place on the site that uses stock, by the founder's decision. They are saved in `src/assets/archive/` rather than hotlinked, and every one is credited "Photo by … on Pexels" with a link to its Pexels page (a test enforces both). Everywhere else, imagery is the studio's own work. No dates, no categories; each piece keeps its blueprint layer in data for structured data only.

Only the homepage and `/services` end on a closing CTA band. `src/data/practice.ts` and `src/data/archive.ts` hold everything the pages say. `src/test/content-contracts.test.ts` fails if a page, nav item, previous model, duplicate heading, extra CTA band or banned word comes back, or if an in-app link lands on a redirect.

## Usage check

Before publishing, run `npm run typecheck` (plain `tsc --noEmit` checks nothing here — the root config is `"files": []` plus project references) and inspect home, work, services, about, archive and contact at phone and desktop widths; verify there is no chromatic UI accent, Unbounded headings are legible, the isolated Newsreader statement reads as a deliberate exception, and focus remains visible.
