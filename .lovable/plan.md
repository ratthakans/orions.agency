

## Plan: Programs Popup + Work Hover Refresh + Accent Gradient

### 1. Add Popup Details to ProgramsSection

Add detailed `process`, `difference`, and `steps` data for all 20 scope items across the 3 programs (Marketing & Social Systems, Creative Direction, Information Intelligence). Add `Dialog` popup with the same layout as ServicesSection — clickable scope items with expanding line indicator on hover.

**Data structure change**: Each scope item becomes an object `{ name, process, difference, steps[] }` instead of a plain string.

### 2. Selected Work — Color Images + New Hover Effect

Current: Images are `grayscale` by default, remove grayscale on hover with subtle scale.

New approach: Show images in **full color** by default. On hover, apply a **subtle warm-toned overlay gradient** (from transparent to `accent-warm/20`) with a smooth scale-up and a slight brightness boost. This creates an elegant "warm glow" effect that feels premium.

Changes in `WorkSection.tsx`:
- Remove `grayscale group-hover:grayscale-0` from `<img>`
- Add `group-hover:scale-[1.03]` (subtler scale)
- Replace the overlay div with a gradient overlay: `bg-gradient-to-t from-accent-warm/15 via-transparent to-transparent` that fades in on hover
- Add a bottom text overlay that slides up on hover showing the project brief

### 3. Accent Color as Gradient

The CSS variables and `.text-accent-gradient` utility already exist. Apply gradient treatment to key accent elements site-wide:

- **ServicesSection**: Service numbers (`01`, `02`, `03`) use `text-accent-gradient` on hover
- **ServicesSection Dialog**: Step numbers use gradient
- **ProgramsSection Dialog**: Step numbers use gradient
- **ImpactSection**: Stat numbers use gradient on hover
- **HeroSection**: Status dot uses gradient bg
- Anywhere `text-accent-warm` is used for decorative emphasis, consider `text-accent-gradient`

Also add a `.bg-accent-gradient` utility in CSS for background gradient usage:
```css
.bg-accent-gradient {
  background: linear-gradient(135deg, hsl(var(--accent-warm)), hsl(var(--accent-warm-end)));
}
```

### Files to modify
- `src/components/ProgramsSection.tsx` — major rewrite with detailed scope data + Dialog
- `src/components/WorkSection.tsx` — image hover effect changes
- `src/index.css` — add `.bg-accent-gradient` utility
- `src/components/ServicesSection.tsx` — gradient on service numbers
- `src/components/HeroSection.tsx` — gradient on status dot
- `src/components/ImpactSection.tsx` — gradient on stat numbers

