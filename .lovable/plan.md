

# ØRIONS Website — Full Review

## Overall Impression

The site has strong bones — the typography system (Bebas Neue + IBM Plex), the dark palette with gold accents, and the editorial layout are working well together. It reads as a serious creative agency, not a template site. That said, there are several areas that could elevate it from "good agency site" to "this agency clearly practices what they preach."

## What's Working

- **Brand voice** is consistent and sharp across all pages — short sentences, confident tone
- **Typography hierarchy** is well-executed — Bebas Neue headlines vs IBM Plex body creates clear contrast
- **Color discipline** — yellow (#ffcc00) is used sparingly as accent, not overused
- **Navigation structure** makes sense — Process → Services → About → Work → Studio → Contact is a logical flow
- **Service page** with expandable details is well-designed and functional
- **Work detail page** (Challenge → Approach → Result) is clean and easy to scan

## Issues Found

### 1. Homepage — Hero video iframe performance
The YouTube iframe (`w-[300vw] h-[300vh]`) is a heavy embed that loads YouTube's entire player. On slow connections, users see a black screen for several seconds before the video loads. Consider using a self-hosted MP4 with the `<video>` tag for instant playback, or at minimum add a poster/fallback image.

### 2. Homepage — Services preview shows only 3 of 7
The homepage services section shows only 3 services (Creative Transformation, Signature Campaign, Film/Production). Event & Experience, Creative Communication, and retainers are missing. This undersells what you offer.

### 3. Homepage — Case Studies are placeholder data
The "Lifestyle Brand", "B2B SaaS", "D2C Brand" cards use generic names with no images. This section should either link to real work from the /work page or be removed. Having placeholder case studies alongside a full portfolio page with 9 detailed projects is contradictory.

### 4. Homepage — No link to Work page in Case Studies section
The Selected Work section has no "View all" link to /work, unlike the Services and Process sections which link to their respective pages.

### 5. Work page — Duplicate data
`WorkPage.tsx` and `WorkDetailPage.tsx` both define the full `works` array independently. This is a maintenance risk — if you update one, the other goes stale.

### 6. Contact form doesn't actually send
The form just sets `submitted = true` with no backend integration. This should either connect to an email service or at minimum open a `mailto:` link.

### 7. Social links are dead
Footer and Contact page social links (`Facebook`, `Instagram`, `YouTube`) all point to `#`.

### 8. About page — Team photos are AI-generated placeholders
The `.jpg` assets in `src/assets/` are generated images, not real team photos. For a 13-person team with named leadership (Ratthakan, Manrut, Jaruwatr, Niti), having obviously AI-generated photos undermines credibility.

### 9. Studio page — All shows are in development
Every show has a status of "In Development," "Concept," or "Pre-production." There's no released content to watch. Consider adding links to any published episodes, trailers, or teasers.

### 10. Process page — Painpoint section may be redundant
Both `/problem` and `/process` cover similar ground about "brands doing too much marketing but not growing." The Problem page does it better with the SCQA framework. The Process page's painpoint intro feels like a diluted version.

### 11. Missing "Value" page content
The route `/value` exists in App.tsx but the homepage's "What We Actually Sell" section seems to have been merged/removed. The Value page may be orphaned.

### 12. Footer — Missing Work link context
Footer has all nav links but no brief tagline or differentiator per section — it's purely functional.

## Design & UX Suggestions (for a future iteration)

1. **Replace YouTube iframe with self-hosted video** — instant load, no third-party dependency, smaller file
2. **Connect homepage Case Studies to real /work entries** — or replace with a "Selected Work" carousel pulling from the actual works data
3. **Extract works data into a shared file** — `src/data/works.ts` used by both WorkPage and WorkDetailPage
4. **Add real social media URLs** or remove the placeholder links
5. **Integrate contact form with email** — Supabase edge function or simple mailto fallback
6. **Add real team photos** when available, or use a typography-only "role grid" instead of fake photos
7. **Homepage services preview** — show all 5 core services or use a different selection strategy
8. **Studio page** — add YouTube embeds or teaser links for any shows that have published content

## Verdict

The site looks and reads like a legitimate creative agency — the tone is right, the structure makes sense, the design system is cohesive. The main things holding it back from feeling "premium agency that practices what it preaches" are: placeholder content (fake team photos, dead social links, non-functional form, generic case studies on homepage). Fixing those gaps would make a significant difference in credibility.

As a design system, it's solid. As a live portfolio site, it needs real content to match the quality of the design.

