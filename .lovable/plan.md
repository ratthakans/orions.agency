

## ปรับ Home page ให้สอดคล้องกับ deck (Applied Creative Agency)

จัด content ใหม่ตาม deck — ใส่ tagline ใน hero, ปรับ Vicious Cycle, เพิ่ม "Read more → About", เปลี่ยน Blueprint เป็น "4 Steps to Unstuck", split Selected Works เป็น 3 categories, ปรับ CTA เป็น "ØRIONS Audit"

### Section-by-section

**01 — HERO**
- เพิ่ม tagline `"Practical. Bold. Done."` ใต้ APPLIED CREATIVE AGENCY (เก็บ TypingLoop)

**03 — THE VICIOUS CYCLE**
- ปรับ subheading: `จ่ายแพงขึ้น แต่ได้ผลลัพธ์เท่าเดิม`
- ปรับ label/body 3 ตัวให้ตรง deck: `Attention Span / Digital Inflation / Digital Waste`

**04 — WHO IS ØRIONS**
- ปรับ heading: `Applied Creative Agency from Bangkok.`
- Body: "เชื่อมช่องว่างระหว่าง 'ไอเดียที่ดูดี' กับ 'ผลลัพธ์ที่วัดผลได้' เพื่อเปลี่ยนงบที่สูญเปล่าเป็น Impact ที่แท้จริง"
- เพิ่มลิงก์ `Read more → /about` ใต้ paragraph (text link with arrow, hairline style)

**05 — APPLIED SOLUTIONS** (4-col คงเดิม)
- คง content (ตรง deck แล้ว)

**06 — 4 STEPS TO UNSTUCK** (replace THE BLUEPRINT)
- เปลี่ยน data จาก O-R-I-O-N-S (6 ขั้น) → `AUDIT / ENGINEER / EXECUTE / IMPACT` (4 ขั้น)
- Layout: `lg:grid-cols-4` แถวเดียว แต่ละ col: เลขใหญ่ `01–04` + ชื่อ + คำอธิบาย
- Header: `06 — 4 STEPS TO UNSTUCK`, eyebrow: "จากจุดตัน สู่การเติบโตที่วัดผลได้"

**07 — SELECTED WORK** (restructure เป็น 3 หมวด)
- คง HERO PROJECTS (3 ตัว: HONGMOVE/RTAF/KHAO YAI) เป็น hero feature + 2 secondary
- เพิ่ม 3 sub-blocks ตาม deck คั่นด้วย hairline + sub-label:
  - `Applied Creative across industries` → DEMOCRAT / GCOO / MY HOTEL / HEAVY ORGANIZER
  - `High-Impact Digital Content` → LEICESTER × BURIRAM ESPORT / SIRIRAJ / AUDI THAILAND
  - `Mastery in Storytelling` → เถื่อน Travel · เกิดแก่เจ็บโต · ท่วงทำนองที่เลือนหาย / The Upgrade / เพลงลำคำเขื่อนแก้ว
- แต่ละ sub-block: 3-4 col compact card grid (ใช้ placeholder image เดิม)

**09 — THE CLARITY AUDIT → "ØRIONS AUDIT (FREE)"**
- Heading: `ØRIONS Audit. Free.`
- Body: "เราไม่ได้มาขอโอกาส แต่มาเพื่อชี้ 'จุดตาย' และหา 'ทางรอด'"
- เพิ่ม badge/tag: `LIMITED · รับเฉพาะธุรกิจที่ต้องการเปลี่ยนแปลงจริง`
- คง 2 cards ขวา (ปรับข้อความ)

**10 — CTA**
- คง heading "Your business is stuck. We're the unstuck."
- เพิ่ม tagline ใต้: `Stop guessing. Start applying. — Practical. Bold. Done.`

### ไฟล์ที่จะแก้
- `src/pages/Index.tsx` — update content arrays + sections 01, 03, 04, 06, 07, 09, 10

