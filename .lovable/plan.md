

## Plan: Remove Film Grain & Switch Accent to Blue Gradient

### 1. Remove Film Grain — `src/index.css`
- Delete the entire `body::after` block (lines 75-87) and the `@keyframes grain` block (lines 89-100)
- Remove the `::selection` style that references `accent-warm` if present

### 2. Change Accent Color to Blue — `src/index.css`
- Replace `--accent-warm: 32 95% 55%` (amber) with a cool blue: `--accent-warm: 217 91% 60%` (vibrant blue like `#3B82F6`)
- Add a second token `--accent-warm-end: 199 89% 48%` (cyan-ish blue like `#0EA5E9`) for gradient use
- Update `--status-available` to match the new blue

### 3. Add Gradient Utility — `src/index.css`
Add a `.text-accent-gradient` utility class:
```css
.text-accent-gradient {
  background: linear-gradient(135deg, hsl(var(--accent-warm)), hsl(var(--accent-warm-end)));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### 4. Bring Back Accent Usage — Components
Re-introduce accent color (now blue gradient) in the same places from the original plan, but properly hover-gated:

- **`ServicesSection.tsx`**: Service numbers use `group-hover:text-accent-warm` (already done), accordion "+" icon uses accent on open
- **`HeroSection.tsx`**: Status dot uses accent-warm, CTA button hover uses accent-warm bg
- **`Navbar.tsx`**: Active link indicator uses accent-warm, "Start a Project" hover uses accent-warm
- **`ImpactSection.tsx`**: Stat numbers use accent-warm on hover
- **`ProblemSection.tsx`**: Left border accent on key quote
- **`ContactSection.tsx`**: Input focus border uses accent-warm, submit button hover
- **`Footer.tsx`**: Link hover states use accent-warm
- **`WorkSection.tsx`**: Scope tags get accent border on hover
- **`AboutPage.tsx`**: Team photo hover gets subtle accent overlay

### 5. Update Tailwind Config — `tailwind.config.ts`
- Already has `accent-warm` color — no changes needed (it reads from CSS variable)

All accent usages are **hover/focus/active only** — nothing displays the accent color in a resting state.

