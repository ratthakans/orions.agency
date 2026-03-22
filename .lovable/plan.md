

# Design Consistency Review — ØRIONS Website

After reviewing every page and component, here are the inconsistencies found and proposed fixes.

---

## Issues Found

### 1. Hero Section Spacing — Inconsistent across pages

| Page | Hero Style |
|------|-----------|
| Homepage | `h-screen flex items-center` (full viewport, centered) |
| About | `min-h-[60vh] flex items-end pt-24` |
| Process | `min-h-[60vh] flex items-end pt-24` |
| Services | `min-h-[55vh] flex items-end pt-24` |
| Studio | `min-h-[50vh] flex items-end pt-24` |
| Contact | `min-h-[50vh] flex items-end pt-24` |
| Work | `pt-20` → `pt-16 md:pt-24` (no min-height) |
| Work Detail | `pt-24 md:pt-32` (no min-height) |

**Fix:** Standardize all sub-pages to `min-h-[50vh] flex items-end pt-24 pb-16 md:pb-24`. Work and Work Detail keep compact heroes since they're content-heavy pages.

### 2. Section Label Icons — Mixed symbols

- Homepage: `✦` (services, process, featured work)
- About: `✦` (about, values, team)
- Process: `✦` (beliefs) but no icon for "The Problem We See"
- Services: `✦` (services, CTA)
- Studio: `✦` (productions) and `△` (collaborate CTA)
- Work: `◎` (portfolio)
- Contact: `✦`

**Fix:** Standardize to `✦` everywhere. Replace `◎` on Work page and `△` on Studio page.

### 3. CTA Buttons — Inconsistent patterns

| Location | Style |
|----------|-------|
| Homepage hero | `bg-primary` + ghost link |
| About CTA | `bg-primary` solid only |
| Process | No CTA at bottom |
| Services CTA | `bg-primary` + ghost link |
| Work CTA | `bg-foreground` (!) + ghost link |
| Studio CTA | `bg-primary` solid only |
| Contact | Form submit `bg-primary` |

**Fix:** Standardize bottom CTA blocks: always use `bg-primary` button + ghost "→" link. Add CTA to Process page. Fix Work page button from `bg-foreground` to `bg-primary`.

### 4. Max-width containers — Mixed widths

- `max-w-5xl`: Hero text, About story, Process beliefs/manifesto
- `max-w-6xl`: About sections, Process phases, Contact content
- `max-w-7xl`: Homepage services/process/work, Services core, Work grid, Studio shows
- `max-w-4xl`: CTA blocks (About, Services, Studio)

This is actually fine — heroes and CTAs use narrower widths, content grids use wider. No change needed.

### 5. Section Padding — Mostly consistent but some outliers

Most sections use `py-24 md:py-40` or `py-24 md:py-32`. A few exceptions:
- About story: `py-16 md:py-24` (tighter, OK for narrative flow)
- Services "Start Here": `pb-16 md:pb-24` (no top padding — flows from hero, OK)

Minor inconsistency, acceptable.

### 6. Work Page title uses `font-body` instead of `font-display`

Line 89: `<h2 className="font-body text-[16px]...">` for work card titles. Every other card title on the site uses `font-display`. This breaks the typographic hierarchy.

**Fix:** Change to `font-display font-normal text-[15px]`.

### 7. Missing `border-t border-border` on some sections

Homepage sections consistently use `border-t border-border` as section dividers. But:
- Process: Painpoint section has it, but Beliefs and Manifesto also have it (good)
- Studio: Shows section has NO border-t
- Work: Filter section has NO border-t

**Fix:** Add `border-t border-border` to Studio shows section and Work filter section for consistency.

### 8. Footer missing social links

Footer has email, phone, address, tax ID — but no social links. Contact page has Facebook/Instagram/YouTube links. These should also appear in the footer.

**Fix:** Add social links to Footer, matching Contact page.

### 9. Process page has no bottom CTA

Every other page ends with a CTA ("Want to work with us?" / "Let's build something" / etc.). Process page ends with the Manifesto section and goes straight to Footer.

**Fix:** Add a CTA section matching the pattern from other pages.

---

## Summary of Changes

| File | Changes |
|------|---------|
| `src/pages/WorkPage.tsx` | Fix `◎` → `✦`, fix `font-body` → `font-display` on card titles, fix CTA button color, add `border-t` to filter section |
| `src/pages/StudioPage.tsx` | Fix `△` → `✦`, add `border-t` to shows section |
| `src/pages/ProcessPage.tsx` | Add CTA section at bottom |
| `src/pages/AboutPage.tsx` | Standardize hero to `min-h-[50vh]` |
| `src/components/Footer.tsx` | Add social links |

All changes are small, targeted fixes — no redesigns, no new components. Pure consistency pass.

