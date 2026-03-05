

## Review & Recommendations for ØRIONS Website

After reviewing every page and component, here are the issues and improvements organized by priority:

---

### Critical Issues (Bugs / Inconsistencies)

**1. Dead i18n code everywhere — language is English-only but `useLanguage` still imported in 12+ components**
The language toggle was removed from the Navbar, but every component still imports `useLanguage`, calls `t()`, and has Thai translation strings. This is dead code that adds complexity and bundle size. All components should use hardcoded English strings directly instead of `t("key")` or `copy[lang]`.

**2. StartProjectDialog still references `lang` for Thai/English toggling**
Since there's no way to switch to Thai, the bilingual `copy` object and `lang` variable are unnecessary. Should use plain English strings.

**3. Contact form doesn't actually send data anywhere**
`handleSubmit` just sets `submitted = true`. Same issue in StartProjectDialog. The form gives users a "Thank you" message but sends nothing. This is misleading. At minimum, add a note like "Our team will follow up" or integrate with an email service / Supabase edge function.

**4. 404 page doesn't match site design**
`NotFound.tsx` uses generic styling (`bg-muted`, basic text) instead of the site's design system (Navbar, Footer, dark theme, font-display/font-body).

---

### Content / Logic Issues

**5. Homepage flow: Problem → Social Proof → Impact → Process → FAQ → CTA**
- The **Problem section** has 6 cards but ends abruptly — the "ØRIONS exists to change that" copy was removed. There's no transition sentence into the next section. Consider adding a brief bridge line.
- **Social Proof** stats (50+ Brands, 3.2x ROI, 6 Countries, 89% Recall) appear here AND are repeated in the CTA bridge text. Redundant.

**6. FAQ answers reference Thai Baht pricing (฿300K–฿2M+) which is good, but the StartProjectDialog budget field is a free-text input instead of a dropdown like the Contact page**
The Contact page has a proper `<select>` with budget ranges. The StartProjectDialog should match — use a dropdown for consistency.

**7. "View Services" link in Hero uses `<a href="/services">` instead of React Router `<Link>`**
This causes a full page reload instead of SPA navigation. Should be `<Link to="/services">`.

---

### Design / UX Improvements

**8. About page is very thin**
Only has a short "Our approach" text block + team grid. For an agency trying to build trust, this page needs more substance:
- Add founding story or mission statement
- Add values or principles section
- Add client count or years in business

**9. Services page header layout inconsistency**
ProgramsSection uses a single-column header (label, title, description stacked) while ServicesSection uses the standard 2-column layout. ProgramsSection should match.

**10. Work page project cards have no hover scale/lift effect on images**
They use `brightness-110` on hover but no `scale` transform, making the interaction feel flat. Adding subtle `scale-[1.03]` would match the About page team cards.

**11. Footer is minimal — missing social media links**
For a creative agency, the footer should include links to Instagram, LinkedIn, Behance, or similar platforms.

**12. Contact page map uses a query-based embed that may not pinpoint the exact location**
The current `maps.google.com/maps?q=` approach is approximate. Consider using the Place ID or exact coordinates for precision.

---

### Technical Cleanup

**13. Remove entire i18n infrastructure**
Since the site is English-only:
- Remove `src/contexts/LanguageContext.tsx`
- Remove `src/i18n/translations.ts`
- Remove `LanguageProvider` from `main.tsx`
- Replace all `t("key")` calls with direct English strings
- Remove all `{ en: "...", th: "..." }` objects in component data

**14. Navbar has an empty line (line 6, 20, 46) — minor lint cleanup**

---

### Summary of Recommended Changes

| Priority | Change | Files |
|----------|--------|-------|
| High | Remove all i18n infrastructure, hardcode English | 15+ files |
| High | Fix Hero "View Services" to use `<Link>` | HeroSection.tsx |
| High | Match StartProjectDialog budget field to Contact page dropdown | StartProjectDialog.tsx |
| Medium | Redesign 404 page to match site theme | NotFound.tsx |
| Medium | Add social links to Footer | Footer.tsx |
| Medium | Fix ProgramsSection header to 2-column layout | ProgramsSection.tsx |
| Medium | Add bridge text after Problem section | ProblemSection.tsx |
| Low | Add hover scale to Work card images | WorkSection.tsx |
| Low | Enrich About page content | AboutSection.tsx, AboutPage.tsx |

Total: ~15 files modified, 2 files deleted.

