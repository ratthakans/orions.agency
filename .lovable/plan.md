
## Accent Color & Site-wide UI Audit

### Part 1 — Accent Gradient Recommendation

The site is currently pure B/W on newsprint cream (#F5F2EC). To elevate without breaking the editorial Amsterdam tone, I recommend **ONE restrained accent** used sparingly (hover states, active nav, key CTA arrow, audit badge dot).

**Recommended: "Sunset Ink" gradient**
```
from: #FF4D2E  (vermilion red — Bangkok energy)
to:   #FFB800  (amber yellow — editorial highlight)
angle: 135deg
```

Why this works:
- Vermilion + amber feels Thai (temple lacquer, marigold) but reads internationally premium (think Pentagram, Mainstudio accent work).
- High contrast on cream paper without fighting the black ink.
- Used as a **gradient text fill** on ONE word per page (replacing some Cutive italics) + as a **2px underline** on active nav + as the **CTA arrow color on hover**.

**Alternatives I considered (will offer as choice):**
- "Electric Dusk": `#6366F1 → #EC4899` (indigo→pink) — more techy, less editorial
- "Ink Wash": `#0A0A0A → #4A4A4A` (mono gradient) — safest, subtle depth, no real color
- "Citrus Pulp": `#FFD60A → #FF8C42` (yellow→orange) — warm, optimistic, very Dutch

### Part 2 — Where the accent appears (discipline rules)

```
1. Active nav link underline      → 2px gradient bar
2. Hero "one word" per page       → gradient text fill (replaces Cutive italic on:
                                     About "Applied", Work "ideas", Contact "stuck")
3. CTA primary arrow on hover     → arrow turns gradient
4. Audit badge pulsing dot        → solid vermilion #FF4D2E
5. Section index numbers (01/02)  → muted gradient on hover only
```

That's it. Max 5 touchpoints sitewide. Never on body text, never on borders, never on backgrounds.

### Part 3 — UI Consistency Audit (per page)

After scanning all pages I found these residual inconsistencies to lock down:

**Font size drift**
- Index hero uses inline `clamp()` different from PageHero's `clamp(56px, 11vw, 132px)` → unify
- Work cinematic h3 is `text-[64px]`, About leadership names are `text-[48px]`, Services rows `text-[56px]` → standardize section H2/H3 scale
- Contact hero uses hard-coded `md:text-[128px]` → switch to PageHero scale

**Font family drift**
- Some Thai paragraphs missing `.font-thai` class → render in Unbounded fallback (ugly)
- Mono labels mix `font-mono` and `index-badge` (which is Unbounded) → pick one per role
- Cutive italic still appears 2x on About after refactor → cut to 1

**Layout drift**
- Page gutters: most use `px-6 md:px-10` ✓ but Footer uses `px-10 md:px-16` → align
- Section padding: Index sections `py-20`, About `py-24`, Services `py-28`, Work `py-20 md:py-28` → lock all to `py-24 md:py-32`
- Grid gaps: cards use `gap-6`, `gap-8`, `gap-10`, `gap-12` randomly → standardize to `gap-8` (cards) / `gap-12` (sections)

**Component drift**
- Some sections still use raw `<div className="border-t border-foreground...">` instead of `<SectionHeader/>` → replace
- "Let's Talk" button in Nav still hand-rolled → swap to `<CTA variant="primary">`
- Contact form inputs still use `border-b-2` focus → align with system

### Part 4 — Files I'll touch

- `src/index.css` — add `--accent-from`, `--accent-to`, `.text-gradient`, `.bg-gradient-accent` utilities; lock section padding helpers
- `src/components/CTA.tsx` — gradient arrow on hover (primary variant)
- `src/components/Nav.tsx` — gradient underline on active link, swap CTA primitive
- `src/components/PageHero.tsx` — accept optional `accentWord` prop that gets gradient fill
- `src/components/SectionHeader.tsx` — already good, minor mono cleanup
- `src/components/Footer.tsx` — align gutters `px-6 md:px-10`
- `src/pages/Index.tsx` — unify hero scale, swap to standard padding, replace one Cutive with gradient word
- `src/pages/About.tsx` — remove duplicate Cutive italic (keep one), fix Thai font class, gradient on "Applied"
- `src/pages/Services.tsx` — section padding lock, gradient on hover arrow
- `src/pages/Work.tsx` — gradient on "ideas", normalize h3 sizes (64px→clamp), reduce gradient overlay opacity
- `src/pages/Contact.tsx` — replace Cutive "stuck" with gradient fill, vermilion dot in audit badge, standardize input focus

### Part 5 — Type & spacing lockdown (final)

```
H1 (hero):       clamp(56px, 11vw, 132px)   — PageHero only
H2 (section):    clamp(40px, 6vw, 72px)
H3 (card big):   clamp(28px, 3.5vw, 56px)
H3 (card small): 22–28px
Body:            15–17px
Label:           11px (index-badge, Unbounded)

Section padding: py-24 md:py-32
Gutters:         px-6 md:px-10
Card gap:        gap-8
Section gap:     gap-12

Fonts (strict)
  Display H1-H3: Unbounded
  Body EN:       Inter
  Body TH:       IBM Plex Sans Thai (.font-thai)
  Mono meta:     JetBrains Mono (rare — dates/coords only)
  Italic accent: REPLACED by gradient (Cutive removed except 1 hero use max)
```

### Choice for you

I'll proceed with **"Sunset Ink" (vermilion → amber)** unless you pick another below.
