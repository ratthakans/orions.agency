## A · Split Pricing out of Services

**สร้างหน้าใหม่ `/pricing`** เป็น single-purpose pricing page:
- Hero: "Pricing." + เริ่มต้น 29,000 + sub-line สั้น
- 3 packages (Starter / Pro / Elite) — ย้ายมาจาก Services
- "All packages include…" caption
- Package details accordion — ย้ายมา
- FAQ — ย้ายมา (เพราะคำถามทั้งหมดเกี่ยวกับ pricing/contract)
- ClosingCTA — ย้ายมา

**Services (`/services`) เหลือ 3 sections:** ไม่มี pricing, ไม่มี FAQ
- 01 Hero — เปลี่ยน headline จาก "Pricing that makes sense" → **"Three things. Done right."** + sub: Branding · Content · Social — one team, one team to talk to.
- CTA: "See pricing →" (link to /pricing) + "Get a free proposal"
- 02 What We Do (3-col Branding/Content/Social — keep)
- 03 Process (4 steps — keep)
- ClosingCTA (Get a free proposal + See pricing)

**Routing:**
- เพิ่ม `<Route path="/pricing" element={<Pricing />} />` ใน `App.tsx`
- Nav link "Pricing" → จาก `/services#packages` เป็น `/pricing`
- Index pricing teaser "See full breakdown" → `/pricing` (จาก `/services#packages`)
- StickyMobileCTA, etc. — ตรวจ link

## B · Footer consistency

ปัจจุบัน footer ไม่ match ส่วนอื่น:
- `tracking-[0.4em]` กว้างเกิน → ลด `0.12em`
- email ใช้ `font-display` (Unbounded uppercase ตัวหนา) → เปลี่ยนเป็น **Instrument Serif italic** (เหมือน hero footer email + headlines)
- nav links + socials uppercase mono → เปลี่ยนเป็น **`btn-label`** (serif italic) เหมือน nav menu
- Legal row mono uppercase tracking ก็ลดให้พอดี
- เพิ่ม "Pricing" ใน footer nav links

## Files
- `src/pages/Pricing.tsx` — สร้างใหม่ (copy packages + faq + closing logic จาก Services)
- `src/pages/Services.tsx` — ลบ packages + accordion + FAQ + ปรับ hero copy
- `src/components/Footer.tsx` — refactor typography
- `src/components/Nav.tsx` — Pricing link → `/pricing`
- `src/pages/Index.tsx` — pricing teaser link → `/pricing`
- `src/App.tsx` — เพิ่ม route

## Out of scope
- ไม่เปลี่ยน price numbers / package details
- ไม่เปลี่ยน design system / palette
- Sitemap.xml ไม่แตะตอนนี้ (ถ้ามี)
