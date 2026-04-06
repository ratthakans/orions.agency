

# ØRIONS Website — Full Review & Recommendations

## Critical Bugs (P0)

### 1. Project images are broken / not rendering
The project cards on `/projects` and the homepage Projects section are completely invisible. The 6 `.jpg` files in `src/assets/projects/` appear to have been generated as binary but may be invalid or empty. The grid renders but shows nothing — no images, no text, no cards at all. This is the most critical issue.

**Fix**: Re-generate all 6 project images using proper Unsplash URLs as fallbacks, or use placeholder images from a reliable CDN (e.g. `picsum.photos` or `unsplash` URLs) until real images are ready.

### 2. YouTube iframe "Sign in" overlay still bleeding through Hero
The YouTube play button avatar and "Sign in" link are clearly visible through the `bg-background/90` overlay on the homepage hero. Despite the previous fix increasing opacity to 90%, YouTube's UI elements still show.

**Fix**: Replace the YouTube iframe entirely with a `<video>` tag using a self-hosted MP4 file, OR add `pointer-events-none` plus a higher z-index overlay, OR increase overlay to `bg-background/95`.

---

## Structural Issues (P1)

### 3. Footer is out of sync with Navbar
The Footer still shows old navigation links: About, **Work**, Services, Contact. It's missing **Projects** and **Original Series**. The Navbar has 5 links but the Footer only shows 4.

**Fix**: Update `Footer.tsx` to match the current Navbar structure — add "Original Series" and "Projects" links.

### 4. "ORIONS" vs "ØRIONS" brand inconsistency
In `projects.ts`, the role field reads `"Created, Directed & Produced by ORIONS"` (without Ø) across all projects. Should be `ØRIONS`.

**Fix**: Replace all instances of `ORIONS` with `ØRIONS` in project data.

### 5. Homepage hero CTA "View Work" is vague
The secondary CTA says "View Work →" which could link to either Original Series or Projects. It currently links to `/work` (Original Series). Since Projects (client work) is now the primary portfolio, this link should point to `/projects` or the text should say "View Original Series →".

**Fix**: Change to "View Projects →" linking to `/projects`, or "View Original Series →" keeping the `/work` link.

---

## Design & UX Improvements (P2)

### 6. Homepage is still 7 sections long
Hero → Tone Block → Projects Preview → Services Preview → Packages → CTA → Footer. The Services + Packages sections overlap in purpose (both sell services). Consider merging or shortening.

**Recommendation**: The Packages section could become a compact callout within the Services section, or be removed from homepage entirely (it lives on the Services page already).

### 7. No Original Series preview on Homepage
The homepage only shows client Projects now but has no preview of Original Series content. Since Original Series is a key differentiator for the brand, a small preview section between Projects and Services would strengthen the page.

**Recommendation**: Add a compact 2-3 item Original Series preview after the Projects section.

### 8. Services page "View Work" link in CTA
The Services page CTA has `"View Work →"` linking to `/work`. Should probably link to `/projects` since client work is more relevant for someone evaluating services.

**Fix**: Change to "View Projects →" with link to `/projects`.

### 9. About page CTA "View Work" same issue
The About page CTA also links to `/work` with "View Work →". Same fix needed.

---

## Minor Polish (P3)

### 10. Filter buttons on Projects page need `cursor-pointer`
The filter buttons don't show pointer cursor by default since they're `<button>` elements without explicit cursor styling.

### 11. Project detail pages may crash
Since the project images are broken, the detail pages at `/projects/:slug` likely show broken images too. Need to verify once images are fixed.

### 12. Navbar "LET'S TALK" button has border styling
The CTA button in the navbar appears to have a border/outline style (white bg with dark text) that looks like a ghost button. This is fine visually but differs from the solid-fill CTAs used elsewhere.

---

## Implementation Plan

### Step 1: Fix broken project images
Replace the local `.jpg` imports in `clientProjects.ts` with working Unsplash URLs as reliable placeholders. Remove the broken files from `src/assets/projects/`.

### Step 2: Fix YouTube overlay
Increase hero overlay opacity to `bg-background/95` or replace iframe with a static dark background.

### Step 3: Update Footer links
Add "Original Series" and "Projects" to the Footer navigation to match the Navbar.

### Step 4: Fix brand name consistency
Replace `ORIONS` with `ØRIONS` in all project data files.

### Step 5: Fix CTA link targets
Update "View Work" links across Homepage, About, and Services pages to point to the correct destination (`/projects` for client work context).

### Step 6: Optional — Add Original Series preview to Homepage
Add a compact section showing 2-3 Original Series items between the Projects preview and Services sections.

---

## Summary

| Priority | Issue | Status |
|----------|-------|--------|
| P0 | Project images completely broken — grid is empty | Must fix |
| P0 | YouTube "Sign in" still visible in hero | Must fix |
| P1 | Footer missing Projects + Original Series links | Should fix |
| P1 | "ORIONS" vs "ØRIONS" in project data | Should fix |
| P1 | "View Work" CTA targets wrong page | Should fix |
| P2 | Homepage too long (7 sections) | Consider |
| P2 | No Original Series preview on Homepage | Consider |
| P3 | Minor cursor + styling polish | Nice to have |

