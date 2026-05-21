# Plan — ØRIONS rebuild (multi-page) with new design system

## 1. New design system

**Colors** (replace Collins cream/ink + remove all "orion/gemini" tones):
- `--background` Snow `#fdfdf9`
- `--foreground` Black Russian `#0e0e0e`
- `--accent` Cinnabar `#eb5939` (used for italic headline accents, mono labels, key numbers, hover states — sparingly)
- `--muted-foreground` neutral grey derived from ink
- Hairline `#0e0e0e / 15%`
- Keep zero-radius, hairline-only, no shadows/gradients (rule unchanged)

**Typography** (full swap):
| Role | Font |
|---|---|
| Display / UI / body | **Inter** (400/500/600) |
| Editorial / serif headlines + italic accents | **Newsreader** (400 + italic 400/500) |
| Mono labels, eyebrows, numerals | **IBM Plex Mono** (400/500) |
| Thai fallback | **IBM Plex Sans Thai** (kept for Thai readability) |

Replace existing `font-serif` (Cormorant) → Newsreader, `font-sans` → Inter, `font-mono` → IBM Plex Mono. Remove Sarabun + Cormorant + JetBrains Mono imports.

Update:
- `index.html` Google Fonts link
- `src/index.css` (tokens, font-family, base styles, `.h-display-*` utilities)
- `tailwind.config.ts` (`fontFamily`, color tokens, remove `text-orion` / `text-gemini` legacy)
- `mem://index.md`, `mem://style/aesthetic`, `mem://style/typography` updated to reflect Snow/Cinnabar + Inter/Newsreader/Plex Mono

## 2. Page structure (NOT a single landing)

Content from the uploaded HTML is broken into 6 routes. Each page has its own hero, mono section label, serif headline with Cinnabar italic accent.

```
/                  Home — short index page
                   • Hero: "Stories, refined."
                   • Marquee of services
                   • 4 framed links → Manifesto / Approach / Services / Health Check
                   • Footer CTA

/manifesto         Section 01 Manifesto (dark bg)
                   • "The New Landscape" + 3 pains
                   • Big italic quote
                   • Mission line in Cinnabar
                   • Links to /approach

/approach          Approach (groups sections 02–05)
                   • 02 Three Pillars (3-col hairline grid)
                   • 03 Data-Refined Creative
                   • 04 The 6:3:1 System (huge serif formula)
                   • 05 Beyond Content — Brand Journey

/services          Services + Packages (sections 07 + 08)
                   • Intro
                   • 08 Packages — 3 tiers, hairline cards
                   • 07 Find Your Tier — static decision matrix
                     (no interactive quiz state — presented as a guide)
                   • Promise (section 09) appended as trust block

/health-check      Section 06 — interactive Creative Health Check
                   • Multi-step questionnaire with progress bar
                   • Radial result card
                   • Local-state only (no backend)

/contact           CTA + contact details
                   • "Ready to refine your story?"
                   • Mailto + studio info (kept from current Contact)
```

Retire / fold in:
- `/about` → redirected to `/manifesto` (or kept as alias)
- `/pricing` → redirected to `/services`
- `/work`, `/style`, `/type-thai` — left as-is unless you want them removed (please confirm)

## 3. Shared components to update

- `Nav.tsx` — links: Manifesto · Approach · Services · Health Check · Contact
- `PageHero.tsx` — restyle to mono eyebrow + Newsreader headline + Cinnabar italic
- `SectionHeader.tsx` — mono label with leading hairline (as in source HTML)
- `CTA.tsx` — pill button with Cinnabar fill variant
- `Footer.tsx` — minor color swap

## 4. Technical notes

- All colors via HSL tokens in `index.css`; no hex in components.
- Italic accents continue to use `<em className="italic">…</em>`; legacy `text-orion`/`text-gemini` classes get removed (now `text-accent`).
- IBM Plex Sans Thai stays as Thai fallback only — Inter handles Latin, Newsreader handles serif Latin, Thai chars fall through to Plex Sans Thai.
- Health Check uses local React state only (no DB).
- SEO.tsx updated per-page titles/descriptions.

## 5. Open questions

1. Keep `/work`, `/style`, `/type-thai` pages or remove them?
2. Health Check — keep multi-step interactive version, or simplify to static "10 signs" checklist?
3. Home page — minimal index (as above) or even more minimal (hero + single CTA to Manifesto)?