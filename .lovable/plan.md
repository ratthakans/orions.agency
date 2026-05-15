
## Goal

หน้า `/pricing` เข้าถึงเร็ว · เห็นแพ็กเกจหลัก (Social Media) ทันที · แล้วเลื่อนลงไปดูแพ็กเกจอื่น ๆ ได้ครบ. รวมแพ็กเกจที่หายไปจาก PDF เข้ามาด้วย.

## ราคาที่ขาดอยู่ (จาก ORIONS_Final_Master)

**Search & AI Visibility**
- SEO Package — 20,000 / mo
- AEO Package — 25,000 / mo
- SEO + AEO Bundle — **35,000 / mo** (Save 10,000)
- Elite ได้ส่วนลด 20% (SEO 16k / AEO 20k / Bundle 28k)

**Production**
- Long-form Video (3–5 min) — 15,000 / คลิป
- TVC / Commercial — เริ่ม 50,000
- Podcast Production — 12,000 / EP
- Professional Photoshoot — 15,000 / วัน
- Brand Film (3–5 min) — เริ่ม 80,000
- Drone Aerial — 8,000 / ครั้ง

**Web & Digital**
- Landing Page — 20,000
- Website (5–7 pages) — เริ่ม 60,000
- LINE OA Setup — 12,000
- E-commerce Setup — เริ่ม 35,000

**Marketing & Strategy**
- Influencer / KOL Mgmt — 10% ของ budget
- Email Marketing Setup — เริ่ม 18,000
- Workshop ทีมลูกค้า (½ วัน) — 18,000
- Brand Strategy Workshop (full day) — 45,000
- Crisis Mgmt / PR — Quote per case
- Raw Files Delivery — 15,000 / mo (มีแล้ว)
- Ads Management Add-on — 3,500 / mo (มีแล้ว)

## Plan

### A · Flow ที่เข้าถึงเร็วขึ้น

**1. Hero ย่อให้สั้นมาก** (เห็น packages ใน fold เดียว)
- ลดระยะ `pt-32 md:pt-40` → `pt-28 md:pt-32`, `pb-16 md:pb-24` → `pb-10 md:pb-14`
- ใส่ **jump-nav แถวเดียว** ใต้ปุ่ม CTA: `Social Media · Search + AI · Production · Web · Marketing · FAQ` (แต่ละอันเป็น anchor link ไปยัง section นั้น) — ใช้ `font-mono text-[10px] tracking-[0.14em] uppercase` คั่นด้วย `·`
- ลบบรรทัด tagline ยาว (ที่เพิ่งแก้ไป) ให้เหลือ 1 บรรทัดสั้นจริง ๆ

**2. Section 02 ยังเป็น Social Media Packages เหมือนเดิม** — anchor `#social` (อยู่แค่หลัง hero ทันที = "easy to access" ตามที่ขอ)

**3. Home → Pricing teaser** เปลี่ยน CTA เป็น `/pricing#social` เพื่อ scroll ตรงไปแพ็กเกจ Social Media

### B · เพิ่ม section ใหม่ครบทุกแพ็กเกจ

โครงใหม่ของ `/pricing`:

```
01 · Hero (สั้นมาก + jump nav)
02 · Social Media Packages    #social     (Starter / Pro / Elite — เหมือนเดิม)
03 · Compare table                        (เหมือนเดิม)
04 · Search + AI Visibility   #search     (SEO / AEO / Bundle — 3 cards)
05 · Production               #production (ตาราง 6 บริการ)
06 · Web & Digital            #web        (ตาราง 4 บริการ)
07 · Marketing & Strategy     #marketing  (ตาราง 6 บริการ)
08 · FAQ                      #faq
```

อัปเดต `PageMark total="08"` ทุกที่ (เลิกใช้ section "Add-ons" แยก — รวมเป็น Marketing & Strategy แทน, รวม Raw Files + Ads Mgmt Add-on เข้าไปเป็นแถวในตาราง).

#### Section 04 · Search + AI Visibility (3 cards)

ใช้ pattern เดียวกับ social media `PackageCard` (ย่อขนาด ~80% เพื่อแยกระดับสายตา):
- SEO — 20,000 THB / mo · `Keyword research · On-page · Backlinks · Local SEO`
- AEO — 25,000 THB / mo · `AI visibility audit · Q&A content · Citation tracking · LLM optimization` · ribbon "NEW"
- Bundle — 35,000 THB / mo · ribbon "★ SAVE 10K" · `ทุกอย่างใน SEO + AEO · Unified report · Quarterly workshop`

หมายเหตุใต้ section: *"Elite ได้ส่วนลด 20% — SEO 16k · AEO 20k · Bundle 28k"*

#### Section 05–07 · ตาราง 3 คอลัมน์ (Service · Detail · Price)

ใช้ pattern เดียวกับตาราง Add-ons เดิม (hairline, font-serif italic ชื่อ, font-thai รายละเอียด, font-serif text-orion ราคา).

หัว section ใช้ heading style เดียวกัน: *"Production."*, *"Web & Digital."*, *"Marketing."* (italic, sunset ink)

### C · ปรับเนื้อหา/Footer/อื่น ๆ

- ลบ section "03 · ADD-ONS" เดิม (ข้อมูลย้ายไป Marketing & Strategy + Production)
- FAQ ยังเหลือ 4 ข้อเดิม
- ไม่แตะ Footer / Nav / หน้าอื่น

### Files

- **Edit** `src/pages/Pricing.tsx` — ย่อ hero + เพิ่ม jump nav + 4 section ใหม่ (Search+AI, Production, Web, Marketing) + อัปเดต `PageMark total="08"` + ลบ section Add-ons เดิม + เพิ่ม anchor `#social`
- **Edit** `src/pages/Index.tsx` — Pricing teaser CTA → `/pricing#social`

### Out of scope

- ไม่แตะ design system / palette / typography
- ไม่แตะ Services, About, Work, Footer, Nav
- ไม่เปลี่ยนราคาที่มีอยู่
