## Blueprint Distribution — 13 Sections Across Existing Pages

เก็บโครงสร้าง multi-page เดิมไว้ทั้งหมด แล้ว map 13 sections ลงในหน้าที่เหมาะสม โดยรักษา editorial aesthetic (Snow/Ink/Cinnabar, hairlines, zero radius, Newsreader+Inter+IBM Plex Mono, 6/3/1).

### Mapping Overview

```text
INDEX (/)              → 01 Hero · 02 Problem · 03 Insight · 06 Divisions (teaser) · 07 Strengths · 10 Selected Work (teaser) · 11 Process · Closing CTA
ABOUT (/about)         → 03 Insight (full) · 06 Divisions (full) · 07 Strengths · 12 Engagement Matrix (Promise side) · 13 Screening
SERVICES (/services)   → 04 Master Blueprint · 05 Ecosystem Deep Dive (9 units) · 08 Standard (Proof Metrics) · 12 Engagement Matrix (Ladder)
WORK (/work)           → 09 Focus Verticals · 10 Contextual Moments · existing case grid
PROJECTS (/projects)   → keep as-is (Ventures = Studio asset list)
CONTACT (/contact)     → keep + Footer CTA copy refresh
HEALTHCHECK (/diagnostic) → keep as-is
```

---

### Page-by-Page Changes

**`src/pages/Index.tsx`** — slim editorial homepage (overview only, deep content lives on dedicated pages)
1. **01 Hero** — replace current H1 with `No Guesswork. Just Craft.` + Newsreader italic sub `Branding, content, production & paid media for brands with something to say. From first call to first market-ready direction in 4 weeks.` + mono meta `ØRIONS · The Creative Company · Bangkok · 2026` + CTA `Book Discovery Call`.
2. **02 Problem (condensed)** — headline `คุณไม่ได้ขาด agency. คุณขาด ทีมเดียว ที่เอาอยู่ทั้งงาน.` + 3-col grid (จ้าง 3 เจ้า · คอนเทนต์ไม่มีตัวตน · วัดผลไม่ได้) + statement box.
3. **03 Insight (condensed)** — `Craft ที่ดี ควรมีหลักฐาน.` + Cinnabar core line `Data informs. Creative leads. Craft delivers.` → link "Read the full thinking →" /about.
4. **06 Divisions teaser** — `สามทีม · แบรนด์เดียว · Account Director คนเดียว.` 3-col strip (Boutique/Digital/Production) → link /services.
5. **07 Strengths** — 3-col (Ecosystem · Measurable Craft · Senior Crew).
6. **10 Selected Work** — keep existing reel, link to /work.
7. **11 Process** — 4-step timeline (Listen · Refine · Build · Launch) + meta footnote.
8. **Closing CTA** — `พร้อมเริ่มบทแรกของแบรนด์คุณหรือยัง?` + Book Discovery Call.

**`src/pages/About.tsx`** — manifesto + strategic positioning
1. Section 01 keeps current Manifesto opener.
2. **Insert 03 Insight (full)** — Cinnabar accent block `ØRIONS อยู่ตรงกลางโดยตั้งใจ`.
3. **Insert 06 Divisions (full)** — comparison table (Boutique / Digital&Performance / Production: role · pain solved · output) + statement box `Brand-first, not sales-first.`
4. **Insert 07 Core Strengths** — 3-col detailed (Ecosystem · Measurable Craft · Senior Crew of 8–12).
5. **Insert 12 Promise (right side of matrix)** — 5 promises (refund 30d · free month 4 · free adjustment · free reshoot · IP after full payment).
6. **Insert 13 Screening** — split 2-col (เหมาะ / ยังไม่เหมาะ) + statement box.
7. Keep existing Pillars + Team + CTA.

**`src/pages/Services.tsx`** — full ecosystem & commercial detail
1. **04 Master Blueprint** — header section: 3 golden cards (Ø1 Agency · Ø2 Consulting · Ø3 Studio) with role tag `[Cashflow / Predictable / Asset]`.
2. **05 Ecosystem Deep Dive** — 3 rows × 3 columns (9 units):
   - Row 1 Agency: 1.1 Digital&Performance · 1.2 Boutique · 1.3 Production
   - Row 2 Consulting: 2.1 Business Solution · 2.2 Fractional CCO · 2.3 Culture&Training
   - Row 3 Studio: 3.1 Startup&Product · 3.2 Owned Media&IP · 3.3 Experimental Lab
   Each card: tag · description · services list · target.
3. **08 The Standard** — split: left data table (Branded search ↑20–40% · Engagement ↑30–50% · CPL ↓20% · ROAS ↑20% · Leads ↑30%); right quote box (adjustment chapter promise).
4. **12 Engagement Matrix — Ladder side** — 4 paths (Boutique · Digital · Production · Consulting) with starting price/term per path.
5. Keep Founder's Deal block.

**`src/pages/Work.tsx`** — verticals + moments + cases
1. **09 Focus Verticals** — 3×2 grid (Restaurant · Hospitality · Golf · Real Estate · Wellness · Premium Retail) + Boutique Exclusivity panel + footnote on excluded industries.
2. **10 Contextual Moments** — 3×2 grid (Restaurant Opening · Hotel Rebrand · Real Estate Launch · Wellness Program · Premium Retail Drop · Corporate Shift).
3. Keep existing case study grid below.

**`src/components/Footer.tsx`** — minor copy refresh
- Add 3-column footer link matrix sub-block: orions.agency/boutique, /digital, /production (anchor links for now, hash to /services sections).
- Headline above CTA: `พร้อมเริ่มบทแรกของแบรนด์คุณหรือยัง?` + sub `Discovery Call · ฟรี · 45 นาที · ไม่มีพันธะผูกมัด` (place in ClosingCTA on Index, not footer chrome).

**`src/pages/Projects.tsx`, `src/pages/Contact.tsx`, `src/pages/HealthCheck.tsx`** — no structural changes.

---

### Design System Rules Applied

- All section headers use `SectionLabel index="NN" label="..."` pattern.
- Card grids: `border border-foreground/20` with hairline dividers, zero radius, `bg-background` panels.
- Statement boxes: `border-l-2 border-cinnabar pl-6 font-serif italic text-[20–24px]`.
- CTA buttons: existing `CTA` primitive (Cinnabar primary).
- Type scale: `.h-display-xl/lg/md/sm` only — no inline clamp.
- Thai body: `font-thai text-[15px] leading-[1.7] text-muted-foreground`.
- Cinnabar usage stays ≤10% (6/3/1 rule): accents, em italics, mono labels, single CTA per section.
- All new sections wrapped in `<Reveal>` for consistent fade-up.

### Out of Scope

- New routes (`/boutique`, `/digital`, `/production`) — deferred; footer links will hash to Services sections for now.
- Real data for Standard metrics — using the numbers as written in the brief.
- Diagnostic/quiz logic changes.
- No new images/assets generated — text/layout only.

### Files Touched

- `src/pages/Index.tsx` (major rewrite)
- `src/pages/About.tsx` (insert 4 new sections)
- `src/pages/Services.tsx` (major restructure — Blueprint + 9-unit grid + Standard + Ladder)
- `src/pages/Work.tsx` (insert Verticals + Moments at top)
- `src/components/Footer.tsx` (link matrix)
- `mem://index.md` (add 13-section IA reference)