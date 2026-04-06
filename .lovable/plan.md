

# ØRIONS Website — Conversion-Focused Redesign

## Summary
Restructure the website from "looks smart" to "closes deals" — rewriting Hero, Services, CTAs, adding Packages section, and adding Case Study format to project details.

---

## Changes

### 1. Hero Section (Index.tsx)
**Current**: "Fewer pieces. Stronger impact." + generic agency description
**New**:
- Headline: "We make brands easier to understand and remember."
- Subtext: "We help brands say the right thing — and show it in a way people actually care."
- CTA button: "Let's make your brand easier to remember" (links to /contact)
- Keep video background, keep ØRIONS logo above

### 2. About Preview (Index.tsx)
**Current**: "We do less — with more intention."
**New**: Replace with a punchy tone block:
```
Most brands are not unclear.
They are just hard to remember.
We fix that.
```
This sets a memorable, confident tone without repeating the About page message.

### 3. Services Preview (Index.tsx)
**Current**: Lists service names + deliverables (abstract)
**New**: Result-oriented cards:
- Strategy → "People understand your brand faster"
- Communication → "People remember what you say"
- Film & Production → "People feel something about your brand"

Each card: service name, one-line description, bold "Result:" line. Remove icons (◆◇▣).

### 4. New "Start Here" Packages Section (Index.tsx)
Add between Services and CTA. Three tiers:
- **Starter** — Brand + Film / For new brands / "Get clear, get seen"
- **Growth** — Strategy + Campaign / For scaling / "Get strategic, get consistent"
- **Full System** — Strategy + Content + Film / For serious brands / "Get everything, one team"

Each with a "Start here →" link to /contact. Minimal, editorial card layout.

### 5. CTA Section (all pages)
**Current**: "START WITH A CONVERSATION" / "Get in Touch"
**New**:
- Homepage: "Let's make your brand easier to remember" → button "Start your first project"
- About: "LET'S MAKE SOMETHING TOGETHER" (keep current differentiated text)
- Work: "WANT TO WORK TOGETHER?" (keep)
- Services: "READY TO START?" → button "Start your first project with ORIONS"

### 6. Case Study Format (ProjectDetailPage.tsx + projects.ts)
Add `caseStudy` field to project data:
```ts
caseStudy?: {
  problem: string;
  idea: string;
  execution: string;
  result: string;
}
```
Render as a 4-block section on ProjectDetailPage between content sections and next project. Uses the existing editorial grid style with border-left accent. Add case study data for at least "Alan Makeup" (the released project).

### 7. Services Page (ServicesPage.tsx)
Add "Result" line to each of the 3 service stages below the outcome block:
- Strategy → "People understand your brand faster."
- Communication Design → "People remember what you say."
- Film & Production → "People feel something about your brand."

### 8. Contact Page (ContactPage.tsx)
Change heading from "START WITH A CONVERSATION" to "Let's make your brand easier to remember" and add a clear action prompt: "Tell us about your brand — we'll start with a conversation."

---

## Files Modified
- `src/pages/Index.tsx` — Hero, About preview, Services preview, new Packages section, CTA
- `src/pages/ServicesPage.tsx` — Add result lines
- `src/pages/ContactPage.tsx` — Update heading and CTA copy
- `src/pages/ProjectDetailPage.tsx` — Add case study section
- `src/data/projects.ts` — Add caseStudy data to Project interface and Alan Makeup entry

## Files Unchanged
- About page, Work page, Navbar, Footer — no structural changes needed

