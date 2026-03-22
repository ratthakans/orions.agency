

# ØRIONS Website — Full Re-Review

## Current State Summary

After reviewing every page and component, here's what's working and what needs fixing.

## What's Working Well

- **Brand system is cohesive** — Bebas Neue + IBM Plex, #ffcc00 accent, dark palette, consistent across all pages
- **Navigation** — fixed, correct order (Process → Services → About → Work → Studio → Contact), progress bar
- **Services page** — detailed, expandable, outcome-driven, pricing included
- **Work page** — shared data file, filters, detail pages with prev/next navigation
- **Studio page** — accordion details, 16:9 mockups, 5 shows
- **Footer** — 3-column layout with business details
- **SEO** — meta tags, schema markup, canonical links

## Issues Found — Grouped by Priority

### HIGH PRIORITY (Credibility & Performance)

1. **PageTransition still has exit animation** — `exit={{ scaleY: 1 }}` remains on line 12, causing the slow black-screen gap we planned to fix. The second wipe overlay also remains. This was approved in a previous plan but never fully implemented.

2. **Contact form missing service selector** — `ContactPage2.tsx` (the active contact page) has no service/subject dropdown. `ContactPage.tsx` has one but isn't used. The user previously requested this and it was supposedly added, but `ContactPage2` still only has name/email/message.

3. **404 route shows homepage instead of NotFound** — `App.tsx` line 45: `path="*"` renders `<Index />` instead of `<NotFound />`. Users hitting bad URLs see the homepage with no indication anything went wrong.

4. **Dead redirect** — `/industries` redirects to `/package` (line 44), but there's no `/package` route defined. This is a 404 loop.

5. **Unused pages cluttering the codebase** — `ContactPage.tsx` (unused, replaced by `ContactPage2`), `ClientsPage.tsx` (still routed but not in navbar), `PhilosophyPage.tsx`, `ProblemPage.tsx`, `ValuePage.tsx`, various package pages — all orphaned.

### MEDIUM PRIORITY (Consistency & UX)

6. **Homepage hero `pt-0` but navbar is 60px fixed** — Hero section has no top padding, so the first ~60px of content sits under the navbar. Currently the hero is `h-screen flex items-center` so it centers, but on shorter viewports the "Creative Agency · Bangkok" text can be cut off.

7. **Two contact pages exist** — `ContactPage.tsx` (256 lines, has service selector, schema markup) and `ContactPage2.tsx` (181 lines, simpler, no service selector). Should consolidate into one, taking the best from each.

8. **Social links are still placeholder URLs** — `facebook.com/orionsagency`, `instagram.com/orionsagency`, `youtube.com/@orionsagency` — these likely don't exist. Better to use real URLs or remove them.

9. **About page says "13 CREATIVES" but team data shows 13 people** — The C-level row has "CEO" and "CFO" as names (not real names), which looks placeholder-ish alongside real names like Ratthakan, Manrut, Jaruwatr, Niti.

10. **Work detail pages have no gallery/additional images** — Each project shows only one hero image. For a creative agency, this undersells the work.

### LOW PRIORITY (Polish)

11. **Inconsistent hero spacing across pages** — Process/About use `min-h-[60vh]`, Studio uses `min-h-[50vh]`, Contact uses `min-h-[50vh]`, Work uses `pt-16 md:pt-24`. Should standardize.

12. **No loading state for lazy images** — All images use `loading="lazy"` but no skeleton/placeholder while loading.

13. **`grain-overlay` class** — Used on every page but I should verify the CSS actually renders it properly.

## Proposed Fixes

### Batch 1 — Critical fixes
- **Fix PageTransition**: Remove exit animation, remove second wipe overlay, speed up durations (per the previously approved plan)
- **Fix 404 route**: Change `path="*"` to render `<NotFound />`
- **Fix dead redirect**: Remove `/industries → /package` or point to valid route
- **Merge contact pages**: Consolidate into one `ContactPage` with service selector, schema markup, and mailto functionality

### Batch 2 — Cleanup
- **Remove unused page files**: `PhilosophyPage.tsx`, `ProblemPage.tsx`, `ValuePage.tsx`, old `ContactPage.tsx` (after merge), unused package pages
- **Remove unused routes**: `/clients`, orphaned redirects
- **Standardize hero spacing** across all sub-pages

### Batch 3 — Content quality
- **Add service selector to contact form** (dropdown with 6 core + 3 retainer options)
- **Remove or update placeholder social links**
- **Update About page** — either add real CEO/CFO names or switch to role-only display

## Files to Modify

- `src/components/PageTransition.tsx` — fix transition speed
- `src/App.tsx` — fix 404 route, clean up unused routes
- `src/pages/ContactPage2.tsx` — add service selector, merge schema from ContactPage
- Delete: `src/pages/ContactPage.tsx`, `src/pages/PhilosophyPage.tsx`, `src/pages/ProblemPage.tsx`, `src/pages/ValuePage.tsx`

## Technical Details

```tsx
// PageTransition.tsx — fixed
const PageTransition = ({ children }: { children: ReactNode }) => (
  <>
    <motion.div
      className="fixed inset-0 z-[9998] bg-background"
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      transition={{ duration: 0.25, ease: [0.76, 0, 0.24, 1] }}
      style={{ transformOrigin: "top" }}
    />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.08 }}
    >
      {children}
    </motion.div>
  </>
);

// App.tsx — 404 fix
<Route path="*" element={<PageTransition><NotFound /></PageTransition>} />

// ContactPage2 — add service dropdown
const serviceOptions = [
  "Creative Transformation", "Signature Campaign", "Production",
  "Event / Activation", "Digital Experience", "Conversation System",
  "Creative Partnership (Retainer)", "Content System (Retainer)",
  "Channel Management (Retainer)", "Other",
];
```

