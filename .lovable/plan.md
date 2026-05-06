## Move testimonials from Index → Work

### src/pages/Index.tsx
- Remove `testimonials` data array.
- Remove the entire "TESTIMONIALS" section (`What clients say.` block).

### src/pages/Work.tsx
- Add the same `testimonials` data array (F&B / Fashion / Hospitality — 3 quotes with stat, name, handle).
- Insert a new "What clients say." section directly **before** `<ClosingCTA />` at the bottom of the page.
- Reuse the exact same layout/styling as the current Index version for visual consistency:
  - `border-t border-foreground py-24 md:py-32 max-w-[1200px] mx-auto`
  - `h2.font-display.h-display-sm` with gradient accent on "say."
  - 3-column grid with hairline dividers, niche label, big stat, quote, name + handle.
- Wrap each card in `Reveal` to match existing Work page motion.

No other pages affected.