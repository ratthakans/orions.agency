## Changes — `src/pages/Index.tsx`

**1. Hero — remove SIX YEARS · 40+ BRANDS · BANGKOK**
- Delete the credentials strip (lines 101–112) and the `Laurel` component + its usage (lines 7–23).

**2. Hero — rebalance vertical composition**
Current hero stacks H1 → italic tagline (mt-16/20) → credentials (mt-20/24), pushing content high. With the strip gone:
- Keep `min-h-[100svh]` centered layout.
- Tighten top padding `pt-32 md:pt-40` → `pt-28 md:pt-32`; bottom `pb-20 md:pb-28` → `pb-24 md:pb-32` for even optical balance.
- Reduce tagline gap `mt-16 md:mt-20` → `mt-10 md:mt-12` so H1 + tagline read as one block, vertically centered in the viewport.

**3. Approach — remove 6:3:1 ratio bar + CTA row**
- Delete the entire ratio bar block (lines 138–157).
- Delete the CTA Reveal block with "Read the full approach →" and "Start a project" (lines 158–174).
- Approach section flow becomes: SectionLabel → headline → 2 paragraphs → Process ribbon (Listen/Diagnose/Refine/Compound).

## Out of scope
- The `border-foreground/15/15` typo on lines 117, 178, 197 (separate cleanup).
- 6:3:1 ratio bar is removed from Index but the principle stays in memory and continues to govern color/typography/layout decisions elsewhere.

## Files
- `src/pages/Index.tsx` — only file touched.
