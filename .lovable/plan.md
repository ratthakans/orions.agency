

# Website Consistency Review & Improvement Plan

## Issues Found

### 1. Inconsistent Section Markers
- Home uses `✦`, `◎`, `△` symbols before section labels
- About uses `✦`, `◎`, `△`, `⬡`
- Services uses `✦`, `⬡`
- Career uses `✦`, `◎`
- Studio and Contact have **no symbols** at all — inconsistent with rest of site

### 2. Footer Services List Mismatch
Footer lists services as "Content, Think, Produce, Develop" but the Home page "What We Do" section uses "Narrative, Campaign, Film, Content". These should align — the Services page uses "Content, Think, Produce, Develop" which is the canonical list.

### 3. StartProjectDialog vs ContactPage Styling Gaps
- Dialog uses `text-[9px]` labels and `border-divider`, Contact page uses `text-[11px]` labels and `border-border` — should be unified
- Dialog submit button uses `hover:opacity-85` while Contact and Navbar buttons use `hover:bg-accent-warm` — inconsistent CTA style
- Dialog lacks Budget/Timeline fields that Contact page has

### 4. Missing Da Vinci Corner Marks on Some Pages
- Career page has corner marks on job cards
- Work page has corner marks on portfolio cards
- About "Why ORIONS" cards have corner marks
- **But**: Services page service blocks, Studio page project blocks, and Home "Why ORIONS" section have **no corner marks** — inconsistent hover treatment

### 5. Hero Section Pattern Inconsistency
- Home: full-screen hero, `items-end`, no `pt-20`
- All other pages: `pt-20` with `py-32 md:py-48` — correct
- Home hero has no section symbol marker, other pages do — intentional but worth noting

### 6. Studio Page Missing Section Symbol
Studio hero has plain text "Studio" without a `✦` or symbol prefix, unlike every other page.

### 7. Contact Page Missing Section Symbol
Contact hero label is just "Contact" without symbol prefix.

### 8. Work Page Dialog Styling
The work detail dialog uses `p-0 gap-0` but `DialogTitle` uses `font-display text-[40px]` — this is fine but the dialog lacks Da Vinci corner marks that match the card hover style.

### 9. Career Page Bottom CTA Section
Career page (lines 300+) has a general application section — need to verify it has consistent button styling with rest of site.

### 10. Mobile Hamburger Menu Gap
Navbar mobile menu items use `text-[12px]` while desktop uses `text-[11px]` — minor but could be unified.

---

## Recommended Fixes

### A. Unify Section Markers (All Pages)
Add consistent `✦` / `◎` / `△` symbol markers to Studio and Contact page hero labels.

### B. Fix Footer Services List
Change Footer services from "Content, Think, Produce, Develop" to match either the Home page categories or Services page — recommend matching Services page (Content, Think, Produce, Develop) since that's the canonical structure, and update Home "What We Do" titles to also use these.

### C. Standardize StartProjectDialog
- Update label font sizes from `9px` to `11px`
- Change `border-divider` to `border-border` 
- Update submit button to match site-wide CTA: `bg-foreground text-background hover:bg-accent-warm hover:text-accent-warm-foreground`

### D. Add Da Vinci Corner Marks to Missing Pages
Add hover corner marks to:
- Services page service blocks
- Studio page project blocks

### E. Unify Home "What We Do" with Services Page
Home page service titles (Narrative, Campaign, Film, Content) don't match Services page (Content, Think, Produce, Develop). Recommend keeping Home as a summary with its own names but adding a mapping note, OR aligning the titles.

### F. Minor Polish
- Add `✦` symbol to Studio and Contact hero labels
- Ensure all CTA buttons use the same hover pattern (`hover:bg-accent-warm hover:text-accent-warm-foreground`)

---

## Implementation Scope
- **Files to edit**: `Footer.tsx`, `StartProjectDialog.tsx`, `StudioPage.tsx`, `ContactPage.tsx`, `ServicesPage.tsx`
- **Estimated changes**: Small, focused edits per file (5-15 lines each)
- **No new files needed**

