
## Concept: 6/3/1 — One System, Everywhere

ใช้สัดส่วน **6 : 3 : 1** (หรือ **60 : 30 : 10**) เป็นกฎเดียวที่ขับเคลื่อนทุก layer ของไซต์ — ไม่ใช่แค่ content loop ของ services

---

## ตีความ 6/3/1 ใน 4 เลเยอร์

**1. Content rhythm (มีอยู่แล้ว — Services)**
- 6 Reels (discovery) · 3 Static (context) · 1 Hero (signature)
- คงไว้ — เป็น anchor ของ concept

**2. Color distribution (60/30/10) — ปรับใหม่**
- **60% Snow** `#fdfdf9` — background หลักทุกหน้า
- **30% Ink** `#0e0e0e` — typography, hairlines, foreground
- **10% Cinnabar** `#eb5939` — accent เท่านั้น (italic emphasis, section labels, CTA primary, hover state)
- **ตรวจ:** ทุกหน้า cinnabar ไม่เกิน 10% ของพื้นที่ visible. ปัจจุบัน Services มี Founder's Deal full-bleed cinnabar + Bundle band hairline + Featured Package card border — รวมเกิน 10% บน viewport เดียว → ลด Founder's Deal เป็น hairline band แบบเดียวกับ Bundle

**3. Typography hierarchy (6/3/1)**
- **6 units body** (font-thai/serif body 14–18px) — เนื้อหาหลัก
- **3 units meta** (font-mono 10–11px tracking +0.22em uppercase) — labels, captions
- **1 unit display** (h-display-xl/lg/md serif) — headline ต่อ section ไม่เกิน 1 ตัว
- **กฎ:** 1 section = 1 display headline เท่านั้น. ปัจจุบัน CaseStudy บางที่มี H2 ซ้อนใน sub-block → ลดเป็น serif body หรือ mono label

**4. Layout proportion (6/3/1 grid)**
- Hero/feature block : supporting : meta = 6 : 3 : 1 columns บน 10-col grid
- ปัจจุบัน Selected Work bento grid ใช้ 8/4/5/7 — ปรับเป็น **6/4 row 1, 3/7 row 2** (= 6/3/1 family bias)
- Services packages: Pro card กลาง = featured (1 unit เด่น), Starter+Elite = supporting (3+3 = 6 unit รวม) — มีอยู่แล้ว ✓

---

## Implementation plan — 3 phases

### Phase 1: เพิ่ม visual proof ของ 6/3/1 บนหน้า Index
ใส่ **6/3/1 ratio bar** ที่ Hero หรือใต้ Approach section — เป็น visual signature ของ studio
- Hairline 10-column bar: 6 col cinnabar full · 3 col cinnabar 55% · 1 col cinnabar 25%
- พร้อม mono label: `6 — Reels · 3 — Static · 1 — Hero` หรือ `60 — Snow · 30 — Ink · 10 — Cinnabar`
- ทำให้ concept มองเห็นได้ทันทีตั้งแต่หน้าแรก (ไม่ต้องไปดูที่ Services)

### Phase 2: Color audit — บังคับสัดส่วน 60/30/10
- **Services:** Founder's Deal block เปลี่ยนจาก full cinnabar bg → hairline band (ขอบบน-ล่าง cinnabar + ตัวหนังสือ ink) เหมือน Bundle Discount
- **Index Capabilities/Approach:** ตรวจไม่ให้มี cinnabar background ขนาดใหญ่ — คงไว้แค่ text accent + 1px hairline
- **CaseStudy:** CTA tile cinnabar ขนาดใหญ่ใน Selected Work grid → ลดเหลือ hairline border + cinnabar text เท่านั้น (เก็บ full cinnabar ไว้แค่ closing CTA)

### Phase 3: Section structure ทุกหน้า ใช้ 6/3/1
ทุก section ใหม่/แก้ ปฏิบัติตาม:
- **6 บรรทัด** body content
- **3 บรรทัด** mono meta (label + caption + small note)
- **1 บรรทัด** display headline
- ตรวจ Manifesto, Approach, HealthCheck ว่าทุก section มี hierarchy นี้ครบ (ไม่ใช่ headline ติดกัน 3 ตัว)

---

## ขอบเขตของแผนนี้ (ถ้าอนุมัติ)

**ทำในรอบนี้:**
1. เพิ่ม **6/3/1 ratio bar** ที่หน้า Index (Hero footer หรือ Approach intro) — Phase 1
2. แก้ Founder's Deal ใน Services เป็น hairline band — Phase 2 (จุดเดียวที่เด่นชัด)
3. แก้ CaseStudy "All case studies" CTA tile ลด full cinnabar → hairline + accent text — Phase 2

**ไม่ทำในรอบนี้ (รอ approve แยก):**
- Phase 3 audit ทุก section (ใหญ่ — ต้องดูทุกหน้า)
- Layout grid refactor (Selected Work bento)

**Memory update:** บันทึก `mem://core/six-three-one` เป็น core principle เพื่อให้ทุกการแก้ในอนาคต follow สัดส่วนนี้อัตโนมัติ

---

## ไฟล์ที่จะแก้ (ถ้าอนุมัติ Phase 1+2 subset)
- `src/pages/Index.tsx` — เพิ่ม ratio bar
- `src/pages/Services.tsx` — Founder's Deal → hairline band
- `src/pages/CaseStudy.tsx` — CTA tile audit
- `mem://core/six-three-one` — บันทึก principle ใหม่
