## Goals

1. Complete the **Services** page as a real creative-agency overview (capabilities, philosophy, deliverables, FAQ) — not a rate card.
2. Move all **pricing tables** (Boutique tiers, Digital tiers, Production day rates, add-ons, ladder, fine-print) into a new **`/pricing`** page.
3. Make **Contact** feel like a high-converting agency contact page: stronger marketing hero, social proof, FAQ, calendar CTA, sticky inquiry.
4. Add marketing layers (trust strip, testimonials, "Why ØRIONS", CTA bands) across Home + Services so the site reads like a working creative agency, not a brochure.

Out of scope: copy rewrites of existing case studies, new imagery, backend changes beyond what's noted below.

---

## 1. New route — `/pricing`

Create `src/pages/Pricing.tsx`. Register in `App.tsx`. Add to `Nav.tsx` (after Services).

Move from `Services.tsx` into Pricing:
- Boutique Industries grid + Standard KPIs + Phases + Annual Legacy callout + Boutique add-ons
- Digital 3-tier matrix + money-back promise + Digital add-ons
- Production shoot-day tiers + equipment kit + a-la-carte + Promise
- The Ladder section
- Fine print accordion

Pricing page structure:
1. Hero — "Transparent rates. No retainer traps." + jump nav (Boutique / Digital / Production / Consulting / Fine print)
2. Sticky sub-nav (chips)
3. Sections (the matrices above)
4. Closing CTA → /contact

---

## 2. Services rewrite — agency overview

Strip all pricing from `Services.tsx`. Rebuild as:

1. **Hero** — "The Creative Company." + 3-axis blueprint (kept).
2. **What we do** — 3 divisions × short capability list (no prices). Each card links to /pricing#anchor.
3. **Capabilities matrix** — flat list (Brand Strategy, Identity Systems, Campaign, Content, Paid Media, CRM/LINE, Film, Stills, Web, PR) grouped by division.
4. **How we work** — 4-step process (Listen · Refine · Build · Launch) with timeframes.
5. **Deliverables** — what a client actually receives (brand book, content library, ad creatives, dashboard, raw archive…).
6. **Industries** — 6 verticals (kept from Boutique block).
7. **Why ØRIONS** — 3 differentiators (senior crew · measurable · one ecosystem).
8. **Selected work strip** — 3 thumbnails from /work.
9. **FAQ** — 6 Q&A (timeline, team, ownership, exclusivity, geography, NDA).
10. **CTA band** — "See rates" → /pricing · "Book discovery" → /contact.

---

## 3. Contact redesign

Rewrite `Contact.tsx`:

1. **Marketing hero** — Big claim ("Let's build the next chapter."), 3 trust badges (Reply <24h · 30-min free call · NDA on request), primary CTA "Book 30-min call" + secondary "Send brief".
2. **Trust strip** — client logos / industries served (text-only marquee row).
3. **Two-column split** — left: brief form (kept, polished); right: direct channels (kept) + studio address + map link + working hours.
4. **What happens next** — 3-step timeline (Reply in 24h → Discovery call → Tailored proposal in 7 days).
5. **FAQ short** — 4 Q&A (cost, timeline, retainer vs project, NDA).
6. **Closing CTA band** — "Not ready? Get the Free Diagnostic →" link to /diagnostic.

Sticky bottom-right floating "Chat on LINE" pill on mobile.

Backend: keep existing `contact_inquiries` insert. No schema change.

---

## 4. Marketing layer across site

- **Home (`Index.tsx`)**: add (a) trust strip under hero, (b) testimonial quote block, (c) "Recent work" 3-card strip (already present — verify), (d) final CTA band with dual buttons.
- **Footer**: add newsletter signup input (writes to existing or new `subscribers` table — flag below).
- **Nav**: add `Pricing` link; turn `Contact` into accent pill button.

---

## 5. Files

Create:
- `src/pages/Pricing.tsx`
- `src/components/FAQ.tsx` (reusable accordion)
- `src/components/TrustStrip.tsx`
- `src/components/CTABand.tsx`

Edit:
- `src/App.tsx` — add `/pricing` route
- `src/components/Nav.tsx` — add Pricing link, accent Contact
- `src/pages/Services.tsx` — full rewrite (no prices)
- `src/pages/Contact.tsx` — full rewrite
- `src/pages/Index.tsx` — add trust + testimonial + CTA band
- `src/components/Footer.tsx` — newsletter row
- `mem/index.md` — note new route + pricing/services split

---

## 6. Backend (flag)

Newsletter signup is optional. If you want it functional I'll add a `newsletter_subscribers` table (email, created_at, RLS insert-only for anon). Otherwise it stays as a `mailto:` link. **Default: skip the table, use mailto.**

---

## Open questions

1. Newsletter — wire to DB or mailto only? (default: mailto)
2. Calendar booking — embed Cal.com / Calendly, or keep "Book call" as mailto? (default: mailto)
3. Client logos for trust strip — do you have real logos, or use text names of past clients (Royal Thai Air Force, Hongmove, Democrat Party, etc.)? (default: text names)

I'll assume defaults unless you say otherwise.
