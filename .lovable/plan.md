

# ØRIONS Website — Detailed Consistency & UI Review

---

## Critical Bugs

### 1. YouTube iframe "Sign in" overlay bleeding through Hero
The YouTube embed shows its "Sign in" link and cookie consent through the dark overlay. This looks broken and unprofessional. The `bg-background/70` overlay is not opaque enough to fully hide YouTube's UI elements.

**Fix**: Either increase overlay opacity to `bg-background/85`, or replace the YouTube iframe with a self-hosted MP4 video using `<video>` tag (preferred — eliminates all YouTube branding issues permanently).

### 2. CSS class conflict: `inline-flex` + `block` on same element
Line 130 in `Index.tsx` — the "Learn more about us" link has both `inline-flex` and `block` classes, which conflict. `block` will override `inline-flex`.

**Fix**: Remove `block` from that class string.

---

## Content Contradictions

### 3. Homepage repeats About page's core message
- **Homepage Tone Block**: "Most brands are not unclear. They are just hard to remember. We fix that."
- **About page hero**: "WE DO LESS — WITH MORE INTENTION."
- **About page SEO**: "We do less — with more intention."

These are different messages, which is fine. BUT the Homepage Hero ("We make brands easier to understand and remember") and the Tone Block below it say essentially the same thing twice. The user scrolls from "easier to understand and remember" directly into "hard to remember. We fix that." — redundant within the same page.

**Fix**: Rework the Tone Block to introduce a different angle — e.g., focus on the "fewer, better" philosophy or the approach, not restate the hero promise.

### 4. Services CTA text inconsistency
- Navbar button: "Let's Talk"
- Homepage Hero CTA: "Start your first project"
- Homepage CTA section: "Start your first project"
- Services CTA: "Start your first project with ORIONS" (note: "ORIONS" not "ØRIONS")
- Work CTA: "Start a Conversation"
- About CTA: "Get in Touch"

The brand name is inconsistent — "ORIONS" vs "ØRIONS". Should always be "ØRIONS".

**Fix**: Change Services CTA to "Start your first project" (consistent) or use "ØRIONS" with the Ø.

---

## UI/Layout Issues

### 5. Homepage is very long — 6 full sections before Footer
Hero → Tone Block → Work → Services → Retainer → Packages → CTA → Footer. That's 7 sections. The Services preview + Retainer callout + Packages section all overlap in purpose (they all say "here's what we offer, hire us").

**Recommendation**: Consider merging the Retainer callout into the Packages section, or removing the Retainer callout from the homepage entirely (it's already on the Services page). This would tighten the page from 7 sections to 6.

### 6. "View all →" link alignment on Services section
The "View all →" link sits at `md:items-end` with the heading, but on the screenshot it appears visually disconnected (right-aligned vs left-aligned heading). Same pattern works for Work section but looks off for Services because the heading + "View all" have a large `mb-20` gap to the cards below.

**Fix**: Reduce `mb-20` to `mb-16` to match the Work section spacing.

### 7. Work grid on Homepage: 4 small cards may be too compressed at 1252px
At the user's viewport (1252px), 4 columns of project cards with aspect-[4/3] makes each card quite small. Text below becomes hard to scan.

**Recommendation**: Consider `md:grid-cols-2` instead of `md:grid-cols-4` for the remaining projects grid — larger cards, more readable.

### 8. Contact page feels empty
The Contact page has very little content — just email, phone, website, and address. No form, no CTA button, no indication of what happens next. The heading says "Tell us about your brand — we'll start with a conversation" but there's no way to actually do that on the page except clicking the email.

**Recommendation**: Add a simple contact form (name, email, message) or at least a prominent "Email us" button styled as a primary CTA.

---

## Typography & Spacing Consistency

### 9. Section label pattern inconsistency
Most sections use `font-mono text-[11px] tracking-[0.2em]` for labels, but:
- Contact page label: `mb-8` (others use `mb-4` or `mb-6`)
- Footer labels: `text-[10px] tracking-[0.2em]` (smaller than page labels)

Minor but creates subtle visual inconsistency.

### 10. Packages section bullet points use `rounded-full` 
The bullet dots (`w-1 h-1 bg-accent-warm/40 rounded-full`) break the zero-radius rule established in the style guide. All interactive elements should be square.

**Fix**: Remove `rounded-full` from the bullet dots — or accept dots as a typographic element rather than interactive element (this is borderline acceptable).

---

## Structural Recommendations

### 11. Services page: "Define → Develop → Produce" shown twice
The 3-step process bar appears at the top, then the exact same text repeats at the bottom: "Our process: Define → Develop → Produce". Redundant.

**Fix**: Remove the bottom repetition.

### 12. Retainer block placement on Services page
The Retainer block appears BEFORE the detailed service listings. Logically, a retainer offer makes more sense AFTER the user has seen what services are available.

**Fix**: Move Retainer block to after the 3 service detail sections, before the CTA.

### 13. Project Detail page — no visual gallery
All project pages show a single hero image and text content. For a creative/film agency, the project detail pages need more visual proof — stills, behind-the-scenes, video embeds.

**Recommendation**: Add an optional `gallery` array to project data and render a visual grid between content sections and the case study.

---

## Summary of Priority Fixes

| Priority | Issue | Impact |
|----------|-------|--------|
| P0 | YouTube iframe bleeding through | Looks broken on first impression |
| P0 | `inline-flex` + `block` CSS conflict | Code quality |
| P1 | Hero + Tone Block message redundancy | Weakens conversion flow |
| P1 | "ORIONS" vs "ØRIONS" brand name | Brand consistency |
| P1 | Contact page too empty | Lost conversions |
| P2 | Homepage too long (7 sections) | User fatigue |
| P2 | Services page Retainer placement | Logic flow |
| P2 | "Define → Develop → Produce" repeated | Redundancy |
| P3 | Work grid 4-col too small | Readability |
| P3 | Section label spacing inconsistency | Polish |

---

## What's Working Well
- Dark editorial aesthetic is fully consistent across all pages
- Typography hierarchy (font-display / font-body / font-mono) is applied correctly everywhere
- Zero-radius design rule is maintained on all interactive elements
- Navbar active state highlighting works correctly
- Scroll progress bar on navbar is a nice touch
- CTA variety across pages (different headlines) prevents monotony
- Project data centralization in `projects.ts` is clean
- Case study format on Alan Makeup adds real credibility

