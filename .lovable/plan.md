# Plan — Services restructure + Consulting split + Ventures → Studio

## 1. `/services` — full rebuild from 3 rate cards

Replace current Services content with **3 division sections** (Boutique / Digital / Production), using the PDF rate-card details verbatim. Keep current Master Blueprint hero (3 axes) but trim Ø2 to point to `/consulting` and rename Ø3 to "Creative Studio (Ventures)" pointing to `/studio`.

New section order (editorial, consistent with site design system — SectionLabel, hairlines, zero-radius, Cinnabar ≤10%):

- **01 · Hero** — "ØRIONS.co — The Creative Company." + 3-axis Master Blueprint (links to Boutique/Digital/Production anchors and to /consulting, /studio)
- **02 · Ø Boutique — Stories, refined.** Tagline + 6 industries grid (Restaurant · Hospitality · Golf · Real Estate · Wellness · Premium Retail) + ORIONS Standard 4 KPIs + 4-phase "From brief to brand moment" timeline + Annual Legacy callout (฿532k/yr) + Boutique add-ons table (Extra shoot ฿55k, Brand film ฿75k, PR ฿45k, KOL ฿35k, Logo refresh ฿35k, Naming ฿45k, Packaging ฿55k)
- **03 · Ø Digital — Performance, by design.** 3 tiers as pricing cards (Starter ฿22,900 / Growth Engine ฿44,900 RECOMMENDED / Dominate ฿89,900) with full deliverable tables from PDF (Ad-spend range, Reels/TikTok, Static, Stories, Ad creatives, Photography, Content day, LINE OA, Reporting, Guarantee) + Digital add-ons (Google Ads ฿7,900/mo, LINE Ads ฿6,900/mo, CRO ฿29,900, Landing ฿14,900, Lead-magnet funnel ฿24,900, LINE OA ฿5,900+฿4,900/mo) + "Buy 3 add-ons 10% off" + "First-month money-back" promise
- **04 · Ø Production — Crew on demand.** 3 shoot-day tiers (Run-and-Gun ฿12k / Multi-Cam ฿24k / Cinematic ฿36k RECOMMENDED) with camera/crew/lighting/delivery rows + Equipment kit grid (RØDE 32-bit Float, DJI RS 4, Hollyland, Nanlite, ProGrade) + A-la-carte add-ons table (crew + post + equipment + travel) + The Promise list (Senior crew only · Same-day proxy · Free re-shoot on technical fault) + Ideal/Not-for box
- **05 · The Ladder** — keep, update Ø Consulting row to link `/consulting` and Ø Studio replaces Ventures wording
- **06 · The Fine Print** — combined Terms grid (Payment · Revisions · Ownership · Standard · Cancellation · Travel) summarised across 3 divisions
- **07 · CTA** — Discovery call, mailto

Drop from current page: `compareRows`, the legacy 3-tier `packages` array (Starter ฿35k/Pro ฿69k/Elite ฿139k), the `addOnCategories` (Branding/Social/Production), 9-unit ecosystem deep dive (moves to `/consulting` if needed), Founder's Deal block.

## 2. New `/consulting` page

Extract the Ø2 (Consulting) column from current Ecosystem Deep Dive into a dedicated page. Sections:

- **01 · Hero** — "Ø Consulting — Predictable Revenue." + intro about long-term strategic creative leadership (12–36 month engagements)
- **02 · Three units** — 3 cards from existing ecosystem row 2:
  - 2.1 Business Creative Solution (Brand Transformation)
  - 2.2 Strategic Creative Direction (Fractional CCO)
  - 2.3 Creative Culture & Training (Organization Transition)
  Each with services list + target list (verbatim from current Services.tsx ecosystemRows[1])
- **03 · Engagement model** — "From ฿180,000/mo · 12–36 months · C-Level advisory"
- **04 · Who it's for / Not for** — Conglomerate, listed companies, legacy brands vs. project-based work (→ Boutique)
- **05 · CTA** — "Book a private consultation"

New route in `App.tsx`: `<Route path="/consulting" element={<Consulting />} />`.

## 3. Ventures → Studio (sitewide rename)

- Rename `src/pages/Projects.tsx` content: page title "Studio — ØRIONS", SectionLabel "Studio", H1 copy updated ("ØRIONS Studio คือ in-house lab ของสตูดิโอ…")
- New route `/studio` → Projects component; keep `/projects` and `/ventures` as `<Navigate to="/studio" replace />`
- `src/components/Nav.tsx`: nav item label "Ventures" → "Studio", to: "/studio"
- `src/components/Footer.tsx`: link label "Ventures" → "Studio" (both menu and primary nav arrays); add new "Consulting" link to footer nav matrix
- `src/pages/Index.tsx` + `src/pages/About.tsx`: keep word "Consulting" in ecosystem one-liners (still valid)

## 4. Files touched

- `src/pages/Services.tsx` — full rewrite
- `src/pages/Consulting.tsx` — **new**
- `src/pages/Projects.tsx` — rename copy Ventures→Studio
- `src/App.tsx` — add `/consulting`, add `/studio`, redirect `/projects` & `/ventures` → `/studio`
- `src/components/Nav.tsx` — Ventures → Studio, add Consulting
- `src/components/Footer.tsx` — Ventures → Studio, add Consulting link
- `mem://index.md` — update routes list (add /consulting, /studio; remove /projects)

## Out of scope

- No new images/photography assets
- No PDF download buttons (text content only, no rate-card PDF hosting)
- Pricing copy stays in THB exactly as PDFs; no currency conversion
- No backend / form changes
