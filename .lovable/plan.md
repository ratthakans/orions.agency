## Scope

Five focused fixes — Home, Services, and a global scroll bug. No backend, no new routes.

---

### 1. Home — "Three tiers" headline line-break

`src/pages/Index.tsx` (Section 06 Packages):
- Change headline to break onto two lines:
  - Line 1: *Three tiers.*
  - Line 2: *One refined system.* (italic cinnabar)

### 2. Home — Trusted: add 4 testimonials + auto-scroll

`src/pages/Index.tsx` (Section 05 Trusted):
- Extend `testimonials[]` from 2 → 6 (add 4 new editorial quotes from plausible client roles: Founder/CMO/Head of Content/Creative Director across e-commerce, hospitality, F&B, finance).
- Replace the static 2-col grid with a horizontal **auto-scrolling marquee** of testimonial cards (reuse `SimpleMarquee` already in the project; verify it supports vertical card content — otherwise use a CSS `@keyframes` translateX loop, pause on hover).
- Each card: fixed width (~440px), border-t cinnabar quote mark, blockquote, figcaption.
- Keep "Selected partners" logo grid below unchanged.

### 3. Services — simplify the 3 package cards

`src/pages/Services.tsx`:
- Rename package names to plain-language equivalents, applied uniformly to all 3 cards:
  - Starter → **"Starter"** (drop "Data-Informed Loop" subtitle)
  - Pro → **"Pro"** (drop "Data-Tested Loops") — change "Most Popular" badge label to **"Featured Package"**
  - Elite → **"Elite"** (drop "Data-Strategy Lab")
- Same card structure for all three (no special featured surface treatment beyond the badge + cinnabar border).
- Keep all detail rows (Deliverables / Production / Strategy / Reporting / Best For) but **remove camera brand/model references** ("Sony A7V") — replace with generic phrasing like "professional mirrorless camera" or just "pro camera + crew".
- Ensure feature lists are complete and parallel across tiers (same row labels in same order).
- Update home `servicesPreview[]` to match the new naming.

### 4. Services — clearer Add-ons

`src/pages/Services.tsx` (Add-ons section):
- Rewrite each add-on `desc` in plain Thai/English (1 sentence, what you get + who it's for). Examples:
  - "Brand Identity Package" → "ชุดอัตลักษณ์แบรนด์ครบชุด: โลโก้ สี ฟอนต์ และคู่มือการใช้งาน — เหมาะกับแบรนด์เปิดใหม่หรือรีแบรนด์"
  - "Community Management Plus" → "ดูแลคอมเมนต์และ DM ขยายเวลา 8:00–23:00 พร้อมตอบเชิงรุก — สำหรับแบรนด์ที่ engagement สูง"
- Add a 1-line "What you get" / "Best for" split under each name (or keep single line but plainer).
- Keep prices + bundle discount band unchanged.

### 5. Bug — scroll bounce-back

`src/components/Layout.tsx`:
- The current sticky-reveal footer (`clipPath` + nested `sticky bottom-0`) is causing layout reflow that bounces the scroll position upward.
- Fix: remove the `clipPath` wrapper and `sticky` positioning. Render `<Footer />` as a normal block after `<main>`. This keeps the all-dark aesthetic and eliminates the jump.

---

## Technical notes

- Marquee: prefer existing `SimpleMarquee` (`src/components/SimpleMarquee.tsx`) — if its API only supports inline text, write a small inline CSS keyframe animation (`animate-[marquee_40s_linear_infinite]`) duplicating the testimonial list for seamless loop, with `hover:[animation-play-state:paused]`.
- All color/spacing tokens stay within the existing design system (cinnabar, surface, foreground/15 hairlines, mono labels).
- No changes to routing, data layer, or other pages.

## Files to edit

- `src/pages/Index.tsx`
- `src/pages/Services.tsx`
- `src/components/Layout.tsx`
- possibly `src/components/SimpleMarquee.tsx` (read-only check first)
