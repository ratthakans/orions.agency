# Simplification & Polish — คำแนะนำเป็นรายหน้า

หลัก: ลด "ความหนาแน่นของคำ + ป้ายซ้อน + sub-headline" — ปล่อยให้พื้นที่ว่างกับ typography ทำงาน

---

## ภาพรวม (cross-page)

1. **ลบ section number ออกจากทุกหน้า** (`01 / 02 / 03 …`) — ป้าย `SectionLabel index` ซ้ำกับ counter ใน CTA และกับ navigation อยู่แล้ว เก็บไว้แค่ "label" สั้น ๆ เช่น `— Divisions`
2. **เลิกใส่ tagline serif italic ใต้ H2** ในเกือบทุก section — ตอนนี้ทุกหน้าใช้สูตรเดียวกัน: H2 → italic serif → Thai paragraph → grid. ตัด italic serif ออก เหลือ Thai sentence เดียว
3. **Trust strip ใน Index** — ถ้ายังไม่มี logo จริง 6 ตัว ให้ตัดออก placeholder strip ดูเหมือนยังสร้างไม่เสร็จ
4. **ปุ่ม `ØRIONS · The Creative Company · Bangkok · 2026`** ใต้ hero — ซ้ำกับ Footer; ตัดออก
5. **เปลี่ยน "Reply within 24h / 30-min free call / NDA on request"** ในหน้า Contact ให้เหลือ inline sentence เดียว แทนกล่อง 3 badge

---

## Index (`/`)

ปัจจุบัน 5 section → เสนอ 4

- **Hero**: ลบ MetaChip `ØRIONS · The Creative Company · Bangkok · 2026` (ซ้ำ Footer), ย่อ paragraph ใต้ headline จาก 2 ประโยคยาวเป็น 1 ประโยค:
  > "Branding, content และ paid media — จาก first call ถึง launch ใน 4 สัปดาห์"
- **Trust strip**: ตัดออกถ้ายังไม่มี logo จริง
- **Problem section**: ลด headline `คุณไม่ได้ขาด agency. คุณขาดทีมเดียวที่เอาอยู่ทั้งงาน.` → `ปัญหาไม่ใช่ agency. คือ การมีหลาย agency.`
- **Divisions**: ลบคำว่า "See the full ecosystem →" → ใช้ "All services →"
- **CTA band**: subtitle `Discovery call · 45 นาที · ฟรี · ไม่มีพันธะผูกมัด` → `45 นาที · ฟรี · ไม่ผูกมัด`

---

## About

- Pillars 3 ข้อ — ตัด description ใต้ pillar ให้เหลือบรรทัดเดียว
- ย่อ Manifesto จาก paragraph → 3 บรรทัดสั้น (statement-style)

---

## Services

- ลบ subtitle italic ใต้ "3-axis blueprint"
- Process 4 ขั้น — ตัด description ของแต่ละ step ให้เหลือ ≤ 12 คำ

---

## Pricing

- **Sub-nav 6 รายการ** → 4 (ลบ "Ladder" + "Fine print" — ทั้งสองอยู่ปลายหน้าอยู่แล้ว, ผู้ใช้ scroll เจอเอง)
- **Boutique add-ons** ลบคอลัมน์ description (เก็บเป็น tooltip / hover) → เหลือ name + price ทำให้ดูเหมือน rate card จริง ๆ
- **Digital tiers**: ลบ `tagline` italic ใต้ราคา (ซ้ำกับชื่อ tier), เก็บ rows อย่างเดียว
- **Production days**: เปลี่ยน sub `"M · 2 cameras · 2 crew · 10 hrs"` ให้เป็นบรรทัดเดียวบน mono, ตัด `"ทีมเท่า M = คุ้มสุด"` ออกจาก crew description — sales-y เกินไป
- **Fine print**: ย่อ 6 ข้อ → 4 (รวม Annual Legacy เข้า Payment, รวม Travel เข้า Cancellation/Other)

---

## Consulting

- ตัด headline duplication; ใช้ structure เดียวกับ Services (3 units → engagement → CTA) แต่ลด copy ใต้แต่ละ unit เหลือ 1 บรรทัด

---

## Contact

- **Trust badges 3 อัน** → เปลี่ยนเป็น inline sentence: `Reply within 24h · 30-min discovery call · NDA on request`
- **Hero**: ลด paragraph ใต้ H1 จาก 2 ประโยค → 1 ประโยค
- **Inline timeline 3 ขั้น** — เก็บไว้ แต่ตัด description ภาษาไทยใต้แต่ละขั้นเหลือ ≤ 8 คำ
- **Direct lines (email/phone/LINE)** — เก็บ แต่ลด underline + chip style, ใช้ minimal text links
- **FAQ ลด 4 → 3 ข้อ** (รวม NDA เข้าคำตอบของ "How fast can you start?")
- **Sticky LINE pill** — เก็บไว้

---

## งานเสริม polish (เล็ก แต่เพิ่ม "สวย")

1. **Hairline rule ก่อน H2 ทุกอัน** ให้ใช้ความหนา/สีเดียวกัน — ตอนนี้บางหน้า `border-foreground/15`, บางหน้า `/20`, `/25`, `/30` → standardize เป็น `/20` ทั้งไซต์
2. **ระยะ section padding** — ตอนนี้ `py-20 md:py-28` ทุกที่ ทำให้ rhythm จืด. เสนอเปลี่ยนเป็น **pattern 28-20-28-20** (ใหญ่-เล็ก-ใหญ่-เล็ก) เพื่อให้ scroll มี breath
3. **ลด font weight ของ H2 บางส่วน** จาก default → `font-light` กับ Newsreader เพื่อให้ italic accent (Cinnabar) เด่นขึ้น

---

## Out of scope

- Nav / Footer / Routing
- Design tokens, color, fonts
- Database / form logic
- `/work`, `/studio`, `/diagnostic`, `/case-study/*`

---

## ลำดับการทำ (ถ้าอนุมัติ)

1. Cross-page hairline + spacing standardization
2. Index hero + trust strip simplification
3. Pricing sub-nav + tier card cleanup
4. Contact hero + FAQ slim
5. About / Services / Consulting copy trim
