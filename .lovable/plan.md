

# ØRIONS Website — Full Consistency Review

## Overall Assessment
The site has been significantly simplified and is now well-aligned with the "fewer, better" philosophy. The 5-page structure (Home, About, Work, Services, Contact) is clean and consistent. Below are all issues found.

---

## Issues Found

### 1. ✦ Symbol Still Present (Style Rule Violation)
The memory states "✦ symbols have been removed in favor of a cleaner monograph and cinematic style," but ✦ appears in **every page** as a section label prefix:
- **Index.tsx** lines 142, 212 — "✦ Selected Work", "✦ What We Do"
- **AboutPage.tsx** lines 76, 117, 166 — "✦ About", "✦ The Team", "✦ Clients"
- **WorkPage.tsx** line 25 — "✦ Work"
- **ServicesPage.tsx** line 72 — "✦ Services"
- **ContactPage.tsx** line 23 — "✦ Contact"

**Decision needed**: Either remove all ✦ or keep them consistently. The memory says remove.

### 2. Homepage Services Preview Doesn't Match Services Page
**Homepage** (lines 227-245) shows 3 services with old-style names and descriptions:
- "Strategy" — OK, matches
- "Communication Design" — OK, matches
- "Film & Production" — OK, matches

BUT the descriptions are different from the Services page. Homepage says: *"Brand positioning, narrative, communication framework, and campaign direction"* while Services page says: *"Define what your brand should say, who it should speak to, and how it should be understood."*

This is acceptable (preview vs full), but worth noting for tone alignment.

### 3. Team Data — Memory vs Code Mismatch
Memory says team has **13 members** with key names:
- Ratthakan Suwanphakdee (Founder & CD) ✓ correct in code
- Khanakhom Kittisakulnam (CEO) — **NOT in code**
- Manrut Rojrattanavichai (Creative Director) — **NOT in code**
- Jaruwatr Bhokhaidhanes (Art Director) — **NOT in code**, code has "Nattawut Prasertsri"
- NITI PALADKONG (Director) — **NOT in code**

Code only has **6 team members** with placeholder names (except Ratthakan). The memory references 13 people but code shows 6.

### 4. About Page — "We do less" Message Repeated
The phrase "We do less — with more intention" appears in:
- **Homepage** About preview (line 116) — as heading
- **About page** hero (line 79) — as heading
- **About page** SEO description (line 64)

Per content rules, no message should repeat across sections. The homepage preview is a teaser so this is borderline acceptable, but the content spec says this message should only live on About.

### 5. CTA Section Inconsistency Across Pages
Each page has a different CTA headline:
- **Home**: "START WITH A CONVERSATION" → links to /contact
- **About**: "START WITH A CONVERSATION" → links to /contact + /work
- **Work**: "WANT TO WORK TOGETHER?" → links to /contact + /services
- **Services**: "READY TO START?" → links to /contact + /work
- **Contact**: No CTA (it IS the contact page)

The variation is fine for variety, but About and Home use the exact same CTA text. Consider differentiating About's CTA.

### 6. Homepage Work Section Uses `group-hover:scale-105`
Memory states all scale animations are excluded. Lines 162, 185 in Index.tsx use `group-hover:scale-105` on work card images. Same in WorkPage.tsx lines 47, 78. Also in ProjectDetailPage.tsx line 132.

### 7. Work Page Subtitle Inconsistency
- **Homepage Work label**: "Selected Work"
- **Work page hero**: "SELECTED WORK."
- **Work page subtitle**: "Original productions and documentary work."
- **Content spec** says: "Selected projects and original productions."

The subtitle doesn't match the content spec.

### 8. Services Page — No Mention of Retainer Tiers (Pulse/Flow/Orbit)
Memory references three retainer tiers: **Pulse, Flow, Orbit**. The current Services page has a single "Retainer" block with no tier breakdown. This was simplified per the content spec, which only mentions a single retainer concept — so this is correct per spec but contradicts the memory.

### 9. Contact Page Missing "Start with a conversation" as Call to Action
The content spec says Contact should have "a clear call to action, not just contact info." Current Contact page has the heading "START WITH A CONVERSATION" but no form or action button — just static contact info. This is minimal but could feel passive.

### 10. Footer Brand Description Repeats Hero Tagline
Footer (line 21): *"A creative agency focused on clear communication, strong art direction, and high-quality film production."*
Hero (line 86): identical text.
SEO description: identical text.

This is standard for footer/SEO, not a real issue.

### 11. NotFound Page Style Inconsistency
NotFound uses `font-bold`, `tracking-tight`, `rounded` patterns, and non-standard button styling (`bg-foreground text-background`) that doesn't match the rest of the site's editorial aesthetic (no font-bold elsewhere, no tracking-tight pattern).

### 12. `grain-overlay` Class Used Inconsistently
Present on: Index, AboutPage, WorkPage, ServicesPage, ContactPage, ProjectDetailPage.
Missing on: NotFound page (uses `min-h-screen flex flex-col` but no `grain-overlay`).

### 13. Unused Legacy Files Still in Project
Files like `ContactPage2.tsx`, `ServicesPage2.tsx`, `StudioPage.tsx`, `ProcessPage.tsx`, `HospitalityPage.tsx`, `IndustryPageTemplate.tsx`, `works.ts`, `HorizontalScroll*.tsx`, `ManifestoSection.tsx`, `Marquee.tsx`, `StarField.tsx`, `OrionConstellation.tsx`, `ConstellationBackground.tsx`, `ConstellationDivider.tsx`, `CinematicDivider.tsx`, `MagneticButton.tsx`, `HeroTypewriter.tsx`, `HeroSection.tsx`, `TextReveal.tsx`, `StartProjectDialog.tsx`, `AnimatedCounter.tsx`, `NavLink.tsx` — all appear to be unused dead code from previous iterations.

### 14. LanguageProvider Still Wrapping App But No EN/TH Toggle
`App.tsx` wraps everything in `<LanguageProvider>` but no page or component uses language switching. Dead infrastructure.

---

## Consistency Matrix

```text
Element              | Home    | About   | Work    | Services | Contact | Detail
─────────────────────────────────────────────────────────────────────────────────
Navbar               | ✓       | ✓       | ✓       | ✓        | ✓       | ✓
Footer               | ✓       | ✓       | ✓       | ✓        | ✓       | ✓
SEO component        | ✓       | ✓       | ✓       | ✓        | ✓       | ✓
grain-overlay        | ✓       | ✓       | ✓       | ✓        | ✓       | ✗ (404)
✦ symbol             | ✓       | ✓       | ✓       | ✓        | ✓       | ✗
scale-105 hover      | ✓       | ✗       | ✓       | ✗        | ✗       | ✓
Hero height          | h-screen| 50vh    | 50vh    | 50vh     | 60vh    | image
CTA section          | ✓       | ✓       | ✓       | ✓        | ✗       | ✗
pt-20 wrapper        | ✗       | ✓       | ✓       | ✓        | ✓       | ✓
```

---

## Recommended Fixes (Priority Order)

1. **Remove `group-hover:scale-105`** from all image hovers (Home, Work, Detail pages) per style rules
2. **Remove or standardize ✦ symbols** — decide once, apply everywhere
3. **Fix team data** — either update to real names from memory or reduce memory to match current 6-person team
4. **Fix NotFound page styling** — align with editorial aesthetic (no font-bold, use standard button pattern)
5. **Add `grain-overlay` to NotFound** page
6. **Clean up unused files** — remove ~20 dead components and pages
7. **Remove `LanguageProvider`** if EN/TH is no longer needed
8. **Update Work page subtitle** to match content spec

---

## What's Working Well

- 5-page navigation is clean and consistent across Navbar, Footer, and all pages
- Service structure (Strategy → Communication Design → Film & Production) is aligned across Homepage preview and Services page
- Project data is centralized in `projects.ts` and used consistently across Home, Work, and Detail pages
- Dark editorial aesthetic with #0A0A0A background and yellow accents is consistent
- All interactive elements use zero-radius (square) profile
- Border hover pattern `border-accent-warm/30 transition-colors duration-300` is standardized
- SEO component is applied to every page with proper metadata
- Footer contact info matches Contact page exactly

