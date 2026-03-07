

## Fix: Retainer Plans & Navigational Stars Card Heights

**Problem:** The `gap-px bg-divider` grid pattern shows the divider background unevenly because cards inside `AnimatedSection` wrappers don't stretch to fill their grid cells equally.

**Root cause (line 447-488 & 377-408):** The `AnimatedSection` wrapper and inner card `div` lack `h-full`, so cards with less content are shorter, exposing the `bg-divider` background unevenly.

**Fix in `ServicesSection.tsx`:**

1. **Retainer Plans grid (line 447-489):** Add `h-full` to both `AnimatedSection` and the inner card div so all 3 plan cards stretch equally.

2. **Service Grid (line 377-409):** Same fix — add `h-full` to `AnimatedSection` and inner card div so all navigational service cards match height.

3. **AnimatedSection component:** Check if it passes through className or needs a wrapper style update to support `h-full`.

**Files to modify:**
- `src/components/ServicesSection.tsx` — add `h-full` classes
- `src/components/AnimatedSection.tsx` — ensure it supports `h-full` pass-through (if needed)

