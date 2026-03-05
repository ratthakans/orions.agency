

## Plan: Elevate ØRIONS Visual Identity & UX

The current site is clean but feels "flat" — like a template. The goal is to add visual depth, a subtle accent color, texture, and micro-interactions that make it feel like a real creative agency made this, without breaking the monochromatic Scandinavian foundation.

### Design Direction

**Accent Color**: Introduce a warm amber/burnt orange (`--accent-warm: 32 95% 55%`) used sparingly — on hover states, active indicators, the status dot, and key interactive elements. This adds warmth without disrupting the black/white foundation.

**Texture & Grain**: Add a subtle film grain overlay via CSS (`background-image` with SVG noise filter) applied to the body. This gives the "analog" feel that separates premium creative studios from corporate sites.

**Cursor & Interaction Design**: Custom cursor that scales up on hoverable elements (a simple CSS approach using `mix-blend-mode: difference`).

### Changes by File

**1. `src/index.css` — Foundation layer**
- Add `--accent-warm` color token (amber/orange)
- Add CSS noise/grain texture overlay on `body::after` (fixed, pointer-events-none, opacity ~3-5%)
- Add custom cursor styles (`.cursor-dot` blend mode circle)
- Improve `::selection` to use accent-warm
- Add hover transition utilities

**2. `tailwind.config.ts`**
- Add `accent-warm` color to theme
- Add new keyframe for `grain` animation (subtle shift)
- Add `text-stroke` utility for outlined text

**3. `src/components/HeroSection.tsx`**
- Make "Noiseless," use a text-stroke (outlined) style — hollow letter effect for visual punch
- Add accent-warm color to the status available dot (already green, switch to warm)
- Add a large decorative section number "(01)" in outlined style positioned subtly
- Improve CTA button — add hover arrow animation (translateX on the SVG)
- Make marquee text slightly vary — accent the `·` separators with accent-warm

**4. `src/components/ProblemSection.tsx`**
- Change the background watermark "NOISE" to use text-stroke outline instead of filled low-opacity text — more editorial
- Add accent-warm to the border-left on "But meaning is disappearing"
- Add a subtle horizontal rule accent element

**5. `src/components/ImpactSection.tsx`**
- Use accent-warm on the stat numbers on hover
- Add a subtle top-border accent line on hover cards
- Improve the grid with a slight stagger animation enhancement

**6. `src/components/Navbar.tsx`**
- Active nav link gets a small accent-warm underline indicator
- "Start a Project" button uses accent-warm on hover instead of muted gray

**7. `src/components/Footer.tsx`**
- Add a large outlined "ØRIONS" watermark behind the footer content
- Accent-warm on hover states for links

**8. `src/components/WorkSection.tsx`**
- Work card images: on hover, add a subtle accent-warm tinted overlay instead of just removing grayscale
- Scope tags get accent-warm border on hover

**9. `src/components/ServicesSection.tsx`**
- Service number ("01", "02", "03") uses accent-warm color
- The "+" toggle icon uses accent-warm when open

**10. `src/pages/AboutPage.tsx`**
- Team member hover: instead of just grayscale removal, add a subtle accent-warm overlay tint
- Add a subtle grid line pattern behind the team section

**11. `src/components/ContactSection.tsx`**
- Input focus state uses accent-warm border instead of white
- Submit button hover uses accent-warm background

**12. `src/components/AnimatedSection.tsx`**
- No changes needed — the component is clean and reusable

### Summary of Visual Additions
- **Accent warm color** (amber/burnt orange) as a secondary signal color — used on interactive states only
- **Film grain texture** overlay across the entire site
- **Outlined/stroked typography** on hero headline for editorial depth
- **Accent-colored micro-interactions** on hovers, focus states, active indicators
- **Large decorative watermark text** in footer using text-stroke
- **Improved button hover animations** (arrow slide, color shifts)

All changes maintain the monochromatic base and use the accent color sparingly as a "signal" — never as a background fill or dominant element.

