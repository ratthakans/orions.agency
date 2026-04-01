

# ØRIONS — Design Enhancement Plan

## Current Issues

After reviewing all 5 pages, the current site has a **solid foundation** but feels **flat and repetitive**:

1. **Every page has identical structure** — mono label → serif title → body text → border-t sections. No visual variety.
2. **No texture or atmosphere** — Pure flat #0A0A0A background with no grain, no depth. Doesn't feel "cinematic."
3. **Hero sections (non-home)** are all identical layouts — just text aligned bottom-left. No personality per page.
4. **Work cards are static** — 16:9 grid with basic brightness hover. No sense of craft or film production.
5. **Services page** is a plain text list — no visual hierarchy to differentiate the 3 pillars.
6. **Contact page** is minimal to the point of feeling empty.
7. **No manifesto or editorial moment** — The brand's strongest copy ("Most agencies add noise. We strip it back.") is absent.
8. **No film grain overlay** — Mentioned in brand memory but never implemented.

---

## Plan: Make Every Page Earn Its Place

### 1. Global — Film Grain + Atmosphere
**File:** `src/index.css`
- Add CSS `::after` film grain texture overlay on `body` (subtle SVG noise at 3-4% opacity)
- Add a `.section-dark-accent` utility for sections with slightly elevated background (#0D0D0D)

### 2. Home (`Index.tsx`) — Add Manifesto + Scroll Indicator
- Add a **scroll-down indicator** (thin animated line) at the bottom of the hero
- Replace the plain "About teaser" text with a **staggered manifesto reveal**: "Most agencies add noise. / We strip it back. / Find what matters. / And make people see you." — each line fades in on scroll with slight delay
- **Work preview**: Make cards larger (full-width stacked instead of 2-col grid), with a horizontal rule between them and bolder typography — more editorial, less "portfolio grid"
- **Services preview**: Add left border accent (primary/20) on each service card for visual anchor
- **CTA section**: Make the italic text larger, add a thin horizontal line above it for visual weight

### 3. About (`AboutPage.tsx`) — Visual Storytelling
- Hero: Add a **large atmospheric image** (full-width, 40vh, darkened) behind the title to break the text-only pattern
- "Why ØRIONS" section: Convert from 3-col text grid to **numbered list with large display numbers** (oversized "01" "02" "03" in primary/10 behind the text) — creates visual rhythm
- Leadership: Add placeholder initials or monogram instead of empty gray boxes
- Philosophy closing: Make the italic quotes **much larger** (clamp to 72px) with staggered opacity for visual drama

### 4. Work (`WorkPage.tsx`) — Cinematic Gallery
- Change card aspect ratio to **3:4 (portrait/poster)** to feel like film posters
- Add a **hoverable overlay** with project details that slides up from bottom
- Alternate layout: first card full-width, remaining 3 in a 3-column grid — creates editorial asymmetry
- Add subtle border-l with primary color on hover

### 5. Services (`ServicesPage2.tsx`) — Visual Hierarchy
- Each service pillar gets a **full-width horizontal card** with the number as a large watermark (120px, primary/5) — stacked vertically instead of 3-col
- Add a thin animated divider line between pillars
- "Define → Develop → Produce" section: Make it a **visual timeline** with dots and connecting line, not just text with arrows
- Retainer box: Add subtle primary border-left accent

### 6. Contact (`ContactPage2.tsx`) — More Presence
- Hero: Use the same italic style but make it **much larger** (clamp to 80px)
- Add a **two-column layout**: left side = large CTA text, right side = contact details
- Add social links row (Instagram, Vimeo — relevant for a film agency)
- Bottom: Add a simple embedded map or location illustration

### 7. Navbar Enhancement
- Add a subtle **bottom progress bar** (1px, primary color) showing scroll position on each page — gives a sense of craft

---

## Technical Summary

| File | Changes |
|---|---|
| `src/index.css` | Add grain overlay, section-dark-accent, scroll progress bar |
| `src/pages/Index.tsx` | Manifesto section, editorial work cards, scroll indicator, enhanced CTA |
| `src/pages/AboutPage.tsx` | Hero image, oversized value numbers, larger philosophy quotes |
| `src/pages/WorkPage.tsx` | Portrait cards, asymmetric layout, hover overlay |
| `src/pages/ServicesPage2.tsx` | Full-width service cards, visual timeline, retainer accent |
| `src/pages/ContactPage2.tsx` | Two-column layout, larger CTA, social links |
| `src/components/Navbar.tsx` | Scroll progress indicator |

