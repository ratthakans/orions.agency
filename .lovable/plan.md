

## Making the ØRIONS Website More "Marketing"

Right now the site is beautifully designed but reads more like an **editorial portfolio** — it's sophisticated but passive. To make it feel more like a **marketing machine**, we need to add elements that build trust, create urgency, and guide visitors toward conversion at every scroll.

Here's the plan:

---

### 1. Social Proof & Trust Signals (Homepage)

**Add a "Results in Numbers" counter strip** between Problem and Impact sections — a horizontal bar with animated counting stats visible without clicking:

```text
┌──────────────┬──────────────┬──────────────┬──────────────┐
│  50+ Brands  │ 3.2× Avg ROI │ 6 Countries  │  89% Recall  │
└──────────────┴──────────────┴──────────────┴──────────────┘
```

- Animated count-up on scroll using framer-motion
- Immediately communicates credibility without requiring clicks

**Add client logo marquee** to the homepage (move from Work page or duplicate) so visitors see trust signals before scrolling deep.

---

### 2. Testimonials Section (New Component)

Create a `TestimonialsSection.tsx` with 3-4 client quotes:

- Clean card layout with quote, name, title, company
- Rotating or static grid — no carousel (stays on brand)
- Placed on homepage between Impact and CTA Bridge

---

### 3. Stronger CTA Strategy

**Hero section**: Add a secondary line of social proof under the tagline, e.g. *"Trusted by 50+ brands across Southeast Asia"*

**CTA Bridge (bottom of homepage)**: Strengthen copy and add urgency:
- Add "Limited availability" or "Currently accepting Q2 projects" messaging
- Add a secondary trust line: "Join 50+ brands that chose clarity over noise"

**Sticky CTA**: Add a subtle floating "Start a Project" button that appears after scrolling past the hero

---

### 4. Case Study Results in Work Grid

Each work card currently shows title + industry + brief. Add a **visible result metric** directly on the card (no click needed):

```text
┌─────────────────────┐
│  [Image]            │
│  Northwind Electric │
│  EV Mobility        │
│  ↑ 40% awareness    │  ← visible result
└─────────────────────┘
```

---

### 5. Process Section (New — Homepage or Services)

Add a simple **"How We Work"** section with 3-4 steps showing the client journey:

```text
01 Discovery → 02 Strategy → 03 Creation → 04 Launch
```

This reduces friction for potential clients by showing them exactly what to expect.

---

### 6. FAQ Section (Homepage Footer Area)

Add a collapsible FAQ section before the footer addressing common client questions:
- "How long does a typical project take?"
- "What's your pricing model?"
- "Do you work with startups?"
- "What industries do you specialize in?"

This is also great for SEO/AEO (already have FAQ structured data in place).

---

### Files to Create / Edit

| File | Action |
|------|--------|
| `src/components/SocialProofStrip.tsx` | **Create** — animated counter bar |
| `src/components/TestimonialsSection.tsx` | **Create** — client testimonials |
| `src/components/ProcessSection.tsx` | **Create** — how we work steps |
| `src/components/FAQSection.tsx` | **Create** — collapsible FAQ |
| `src/components/StickyProjectCTA.tsx` | **Create** — floating CTA button |
| `src/pages/Index.tsx` | **Edit** — integrate new sections, add trust line to CTA bridge |
| `src/components/HeroSection.tsx` | **Edit** — add social proof line |
| `src/components/WorkSection.tsx` | **Edit** — add result metric on cards |
| `index.html` | **Edit** — update FAQ structured data |

All new components will follow the established 2-column header pattern, `text-accent-gradient`, numbered items, and `AnimatedSection` conventions.

