## ทิศทางใหม่ของ ORIONS (จาก deck)

จาก **"Applied Creative Agency, est. 2019"** ที่ทำงานหลากหลายอุตสาหกรรม (Defence, Mobility, Healthcare, Automotive) → เปลี่ยนเป็น **"Boutique creative agency, est. 2026"** ที่โฟกัส **F&B / Fashion / Hospitality** ผ่าน social-first (branding · content · paid ads) ทีม in-house 11 คน, retainer pricing โปร่งใส.

**Visual ทั้งหมดคงเดิม** (cream, hairlines, Unbounded, vermilion accent, zero-radius) — เปลี่ยนเฉพาะ copy + structure ที่ขับเคลื่อนด้วย content ใหม่

---

## ไฟล์ที่จะแก้

### 1. `src/pages/Index.tsx` (Home)
- **Hero**: คงโครงเดิม (HeroVideoGrid + ORIONS wordmark) แต่เปลี่ยน tagline rotation เป็น:
  - "BOUTIQUE CREATIVE AGENCY"
  - "BRANDING · CONTENT · PAID ADS"
  - "F&B · FASHION · HOSPITALITY"
  - "BANGKOK · EST. 2026"
- **The Vicious Cycle** → เปลี่ยนเป็น **"What you're up against"** ด้วย 3 stats จาก deck:
  - 71% — OF SOCIAL IMAGES AI-generated
  - 20% — META CPM RISE YoY
  - 8s — ATTENTION SPAN
- **Applied Solutions (4 cards)** → เปลี่ยนเป็น **"Three things, properly"** (3 cards): Branding / Content / Social media พร้อม sub-items ตาม deck
- **Mastery video 21:9** → คงไว้ (ambient cinematic, ไม่ผูกกับ niche)
- **Selected Work / Across Industries / Social & Commercials** → **ลบทั้งหมด**
- **เพิ่ม section ใหม่แทน**:
  - "From hello, live in 4 weeks" — 4 steps: Listen / Plan / Build / Run
  - "What clients say" — 3 testimonials (Cedric C. / Estelle S. / Shimpei M.) พร้อม stats (+62% bookings, 11d sellout, −41% cost/booking)
  - "Trusted by" — wordmark grid (placeholder names ตาม deck: Maison Lumière, Saint Manor, Hôtel Vergé, Cala/BKK, North Meridian, AT.09, Café Orsay, Studio-Kin, Playa Norte, Casa·Sol, Marlow & Co., Union BKK)
- **ClosingCTA** → "Tell us about the brand" / "30-min discovery call. Free."

### 2. `src/pages/Services.tsx`
- ลบ 4 services เก่า (Creative Solution, Applied Communication, Social Media Marketing, High Impact Production) → แทนด้วย 3 services จาก deck:
  - **01 Branding** — Naming · Logo · Marks / Visual identity / Brand guidelines / Launch toolkit
  - **02 Content** — Photo + video shoots / Reels + short-form / Graphic + motion / Asset libraries
  - **03 Social media** — Strategy + calendar / Daily posting / Community management / Paid ads (Meta, TikTok)
- เพิ่ม section **"Honest pricing"** (3 retainer tiers + Startup):
  - STARTER (Standard) — From THB 50k/mo
  - PRO (Most Popular) — From THB 80k/mo (highlighted card, dark)
  - PREMIUM (Exclusive) — From THB 120k/mo
  - STARTUP (Quick start) — From THB 30k, brand audit + content plan, 2 weeks
- เพิ่ม section **"From hello, live in 4 weeks"** (4 steps timeline)

### 3. `src/pages/About.tsx`
- ลบ ORIONS 6-step process (O.R.I.O.N.S.) เพราะไม่อยู่ใน deck แล้ว
- เปลี่ยน "Who is ORIONS" → ใช้ copy ใหม่: *boutique creative agency · est. 2026 · social-first*
- เปลี่ยน team section → **"The team — 11 people, in-house"** จัดกลุ่มเป็น 3 หมวดตาม deck:
  - **Leadership** (Founder · Managing Director)
  - **Strategy & Account** (Account Executive · Project Manager · Marketing Strategist)
  - **Creative & Production** (Creative Director · Creative Senior · Creative Editor · DOP · Social Media Manager)
- เพิ่ม **"Why us?"** 4 reasons:
  1. Small team. Your team. — You talk to who's doing the work.
  2. Strategy before pretty. — We plan before we post.
  3. Ads inside the plan. — Paid built-in from day one.
  4. Built for boutique brands. — Quality-first.
- ลบ industry focus เก่า (Defence / Mobility / Healthcare) → "F&B · Fashion · Hospitality"

### 4. `src/pages/Work.tsx`
- **ลบ case studies เก่าทั้งหมด** (RTAF, Hongmove, Khao Yai, Audi, Siriraj, Leicester, Democrat, GCOO, MyHotel, Heavy Organizer ฯลฯ)
- แทนด้วย editorial placeholder: **"New chapter — case studies launching Q3 2026"** + 3 testimonial cards จาก deck (Maison Lumière / Saint Manor / Hôtel Vergé) + Trusted-by wordmark grid
- ลบ assets เก่าใน `src/assets/` (hongmove.webp, rtaf.webp, khaoyai.jpg, democrat.webp, gcoo.webp, myhotel.webp, heavy-organizer.webp)
- ลบ `src/components/SelectedWorkReel.tsx` ถ้าไม่ใช้แล้วที่ไหน — หรือ refactor ให้รับ "Coming soon" state

### 5. `src/pages/Contact.tsx`
- เปลี่ยน headline → "Tell us about the brand."
- Sub: "30-min discovery call. Free. We reply within 24 hours."
- Badge: "✦ NOW BOOKING — Q3 2026"
- คง mailto form เดิม
- คงข้อมูล contact เดิม (hello@orions.agency, phone, IG)

### 6. `src/components/Footer.tsx` + `src/components/StudioStatusBar.tsx`
- เปลี่ยน tagline → "From idea to live in 4 weeks. One in-house team."
- ปี est. 2019 → 2026
- Industry tags: F&B · Fashion · Hospitality

### 7. `src/components/SEO.tsx` defaults + `index.html`
- Title default: "ØRIONS — Boutique creative agency for F&B, fashion & hospitality"
- Description: "Branding, content, and paid ads for unique brands. Bangkok. From THB 50k/mo."
- อัปเดต title/description ของแต่ละหน้า

### 8. Memory updates
- **Update `mem://brand/narrative-strategy`**: positioning ใหม่ = boutique social-first F&B/Fashion/Hospitality, est. 2026, brand promise = "From hello, live in 4 weeks"
- **Update `mem://brand/contact-details`**: ทีม 11 in-house, 3 หมวด (Leadership / Strategy & Account / Creative & Production)
- **Update `mem://features/services-page`**: 3 services ใหม่ + 4 retainer tiers + 4-step process
- **Update `mem://features/portfolio`**: Coming soon Q3 2026 + testimonials-led
- **Update `mem://features/about-page`**: ลบ ORIONS process, เพิ่ม Why us 4 reasons
- **Update `mem://index.md`** Core: brand line ใหม่ "From hello, live in 4 weeks. One in-house team."

---

## สิ่งที่ **ไม่** เปลี่ยน

- Design system ทั้งหมด (cream bg, ink, vermilion accent, hairlines, zero-radius)
- Fonts (Unbounded, IBM Plex Sans Thai, JetBrains Mono)
- Components: PageHero, SectionHeader, CTA, Reveal, CornerMarks, ClosingCTA, FlipNumber, ScrollMarquee, HeroVideoGrid, RotatingHeadline
- Mastery 21:9 video block (cinematic, niche-agnostic)
- Routing & layout shell (Nav, Footer reveal, PageTransition)

---

## Trade-offs

- ✅ Content เปลี่ยนชัดเจนตรงตาม deck, design ไม่เสีย consistency
- ✅ Portfolio rebuild สะอาด พร้อมรับ case studies ใหม่ Q3 2026
- ⚠️ HeroVideoGrid ปัจจุบัน reference งานเก่า (RTAF, Audi-style) — เก็บไว้เป็น ambient texture (ไม่ระบุชื่อโครงการ) จนกว่าจะมี reel ใหม่ของ niche F&B/Fashion/Hospitality
- ⚠️ ทีมหน้า About — ปัจจุบันมีรูปจริง 8 คน แต่ deck บอก 11 คน 3 หมวด: ใช้รูปเดิม map เข้า role ใหม่เท่าที่ตรง, ที่เหลือใช้ role-only card (ไม่มีรูป) หรือ silhouette placeholder
