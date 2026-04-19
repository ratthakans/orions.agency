## Plan: Align site design with ØRIONS Master V6.5 deck

The PDF establishes a **calmer, more editorial** brand voice than the current site. Current site is loud (liquid blob, marquee, gradient text everywhere). The deck is sharper, quieter, content-first.

### Key insights from deck

- **The Pressure** = 3 pillars: ADHD SPAN (1.7s), DIGITAL INFLATION (+41%), AI FLOOD (4.6x) — rename from current "ATTENTION SPAN / DIGITAL INFLATION / DIGITAL WASTE"
- **Hero Projects** (4): พรรคประชาธิปัตย์, GCOO, MY HOTEL, HONG MOVE — each with Challenge + URL
- **More Selected Projects** (4): HEAVY ORGANIZER, เขาใหญ่ คันทรีคลับ, กองทัพอากาศ (RTAF), พรรคพลวัต
- **Social & Commercials**: LEICESTER CITY, BURIRAM ESPORT, AUDI THAILAND, SIRIRAJ HOSPITAL, TAT
- **Entertainment & Long-form**: เถื่อน TRAVEL, THE UPGRADE, FINDING THE LAST NOTE, etc.
- **Why Agency**: Consultant vs Studio vs Agency (3-column comparison) — NEW SECTION
- **Contact**: 246/8 Soi Yothinphatthana, Bang Kapi, Bangkok 10240 / [hello@orions.agency](mailto:hello@orions.agency) / +66 92 390 5464

### Design direction shift

- **Quieter visuals**: remove animated `liquid-blob`, tone down marquee, use gradient sparingly (accents/dividers only — not whole headlines)
- **Editorial layout**: bigger whitespace, numbered sections, content-led
- **Real imagery**: copy hero project + selected project images from PDF into `src/assets/projects/`

### Changes by file

**Home (`src/pages/Index.tsx`)**

1. Replace "STAGNATION" quote section → new copy: "ในโลกที่ทุกอย่างหมุนเร็วขึ้น / ไม่ใช่ทุกธุรกิจจะปรับตัวทัน"
2. THE PRESSURE: rename labels (ADHD SPAN / DIGITAL INFLATION / AI FLOOD) + update body copy
3. Featured Work: replace 3 placeholders with 4 Hero Projects using real images + Challenge text
4. Add new section: **WHY AGENCY** (Consultant / Studio / Agency 3-column)
5. CTA: keep, but soften copy

**Work (`src/pages/Work.tsx`)**

- Restructure into 3 buckets matching deck: Hero Projects (4), Selected Projects (4), Social & Commercials (5), Entertainment & Long-form
- Use real images from PDF

**Contact (`src/pages/Contact.tsx`)**

- Update address, phone, email per deck

**Footer (`src/components/Footer.tsx`)**

- Update contact info to match

**Global (`src/index.css`)**

- Soften gradient usage: remove `liquid-blob` animation from hero, keep `text-grad` for accents only
- Slow marquee or shorten; consider replacing with static logo strip
- Keep monotone base, gradient on dividers/numbers/CTAs only

**Assets**

- Copy ~12 project images from `parsed-documents://` into `src/assets/projects/`

### Out of scope (this round)

- Individual case-study pages
- Backend wiring for contact form
- About page edits (deck has no About content)