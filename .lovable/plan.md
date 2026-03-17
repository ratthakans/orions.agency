

# Full Site Audit — Issues & Fixes

## Errors & Bugs

### 1. Home "What We Do" service names don't match Services page
- **Home page** uses: Narrative, Campaign, Film, Content
- **Services page** uses: Content, Think, Produce, Develop
- **Footer** uses: Content, Think, Produce, Develop
- This is confusing for visitors navigating between pages. The canonical pillars are **Content, Think, Produce, Develop** — the Home page accordion should use the same names.

### 2. Home Marquee items are inconsistent
- First marquee: `["Narrative", "Campaign", "Film", "Content", "Strategy", "Brand", "Story"]` — uses old service names
- Second marquee: `["Think", "Develop", "Produce", "Launch", "Scale"]` — uses correct names
- Third marquee: `["Story", "Strategy", "Campaign", "Film", "Meaning"]` — mixed
- All marquees should use consistent vocabulary aligned with the brand pillars.

### 3. Career page h1 size is smaller than other pages
- Career uses `clamp(40px,5vw,80px)` while all other pages use `clamp(44px,6vw,96px)`. Should be unified.

### 4. Career CTA button font size inconsistency
- CTA button at bottom uses `text-[12px]` while every other button site-wide uses `text-[11px]`.

### 5. Mobile navbar link size mismatch
- Desktop nav links: `text-[11px]`, Mobile nav links: `text-[12px]`. Minor but should match.

### 6. Home hero "Start a Project" button exists but is invisible
- `HeroSection` accepts `onStartProject` prop but never renders a button — the CTA is lost. The hero has no visible call-to-action, only a subtitle paragraph.

---

## Consistency Gaps

### 7. About page hero has body text, Services page hero does not
- About, Work, Contact, Studio all have a `<p>` subtitle under the h1
- Services page has NO subtitle paragraph — feels incomplete

### 8. Work page uses only 2 Da Vinci corners on images (top-left, bottom-right)
- Every other page uses all 4 corners. Work cards should add top-right and bottom-left for consistency.

### 9. About "Why ORIONS" cards use different numbering style
- About cards: `01, 02, 03` with titles Think, Develop, Produce
- Services cards: `01, 02, 03, 04` with titles Content, Think, Produce, Develop
- The About section should mirror the Services page order and naming for brand coherence.

### 10. Contact page form text size differs from Dialog
- Contact form inputs use `text-[15px]`, StartProjectDialog uses `text-[14px]`. Should be the same.

### 11. Career page has no `pb-8 md:pb-12` after hero
- Hero section in Career has no bottom padding (`pb-*`) unlike Services/Work/Studio/Contact which all use `pb-8 md:pb-12`.

---

## Improvement Opportunities

### 12. Home hero has no visible CTA button
- Add a "Start a Project" button in the hero section that calls `onStartProject`, plus a secondary "View Work →" link. This is critical for conversion.

### 13. Work page dialog missing Da Vinci corners
- The dialog shows work detail but has no corner marks, unlike every other card/block on the site.

---

## Implementation Plan

### A. Align Home "What We Do" with canonical service pillars
Update `Index.tsx` service titles from Narrative/Campaign/Film/Content to Content/Think/Produce/Develop, with matching descriptions and includes from ServicesPage.

### B. Fix all 3 Marquee components
Unify vocabulary: use brand-aligned words (Content, Think, Produce, Develop, Story, Film, Strategy).

### C. Add CTA to HeroSection
Add "Start a Project" button + "View Work →" link below the subtitle text.

### D. Unify Career page h1 and spacing
- Change `clamp(40px,5vw,80px)` → `clamp(44px,6vw,96px)`
- Add `pb-8 md:pb-12` to hero section
- Fix CTA button from `text-[12px]` → `text-[11px]`

### E. Add subtitle to Services hero
Add a brief `<p>` line under the h1, matching the pattern on About/Work/Studio/Contact.

### F. Fix Work page Da Vinci corners (2 → 4)
Add missing top-right and bottom-left corner marks on Work card images.

### G. Unify Contact form + Dialog input sizes
Standardize both to `text-[14px]` for inputs.

### H. Fix mobile nav link size
Change from `text-[12px]` → `text-[11px]`.

### I. Add Da Vinci corners to Work dialog

---

## Files to Edit
- `src/pages/Index.tsx` — service names, marquees, hero CTA
- `src/components/HeroSection.tsx` — add CTA buttons
- `src/pages/CareerPage.tsx` — h1 size, hero pb, CTA button font
- `src/pages/ServicesPage.tsx` — add subtitle
- `src/pages/WorkPage.tsx` — 4 corners on cards + dialog corners
- `src/pages/ContactPage.tsx` — input font size
- `src/components/Navbar.tsx` — mobile link font size

