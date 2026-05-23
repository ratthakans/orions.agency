## Plan

### 1) Services — pricing wording
- เปลี่ยนทั้ง 3 แพ็กเกจให้ใช้คำว่า **"Start from"** นำหน้าราคา
  - Starter: `Start from ฿35,000`
  - Pro: `Start from ฿69,000`
  - Elite: `Start from ฿139,000`
- ปรับขนาด/น้ำหนัก: คำว่า "Start from" เป็น mono caption เล็กๆ เหนือราคาเพื่อไม่ทำลายลำดับ visual

### 2) Diagnostic — ขยายเป็น 18 ข้อ + result page แบบละเอียด + แนะนำ package
**Quiz expansion (18 questions, 3 ต่อ axis × 6 axes):**
- เพิ่มคำถามอีก axis ละ 1 ข้อให้ครอบคลุมมิติย่อย เช่น Clarity เพิ่มเรื่อง positioning statement, Data เพิ่มเรื่อง measurement framework, Strategy เพิ่มเรื่อง competitor differentiation
- ปรับ progress bar/axis dots ให้สะท้อน 18 ข้อ (state shape เป็น `Array(18)`)

**Result page (ขยายจากเดิม):**
- Overall score + tier (เดิม) — คงไว้
- เพิ่ม **per-axis insight card** — แต่ละ axis แสดง:
  - คะแนน + bar
  - **คำวินิจฉัยสั้น (1-2 บรรทัด)** ตามช่วงคะแนน (Strong / Developing / Gap)
  - **Next action** 1 ข้อต่อ axis (เช่น "สร้าง voice framework" / "วาง content calendar 90 วัน")
- เพิ่ม **Recommended Package block** — เลือกแพ็กเกจตาม overall %:
  - 0-44% → **Starter** (Data-Informed Loop)
  - 45-74% → **Pro** (Data-Tested Loops)
  - 75-100% → **Elite** (Data-Strategy Lab)
  - การ์ดสรุปแพ็กเกจ + เหตุผลสั้น 2 บรรทัด + CTA "See full package →" → `/services`
- เพิ่ม **Top 3 priority axes** (เรียงจาก gap มาก→น้อย) เป็น checklist เรียบๆ
- CTA สุดท้าย: "Book a free consult" → `/contact`, "Take again" คงไว้

### 3) Homepage — เพิ่ม section ใหม่ (4 sections ตามที่ user เลือก)
ใส่ระหว่าง **Index links** กับ **footer**, เรียงตามลำดับ:

1. **Selected Work** (preview 3-4 ชิ้น)
   - mono label `02 — Selected Work`
   - editorial grid: 1 large + 2 small (asymmetric) ใช้ placeholders จาก `/public` หรือดึงจาก Work page list
   - link card → `/work`
2. **Process — 6:3:1 System**
   - mono label `03 — Process`
   - 3 คอลัมน์ใหญ่: **6 Reels · 3 Static · 1 Hero** + คำอธิบายสั้นใต้แต่ละตัวเลขแบบ editorial
   - หรือใช้ตัวเลข display ใหญ่ (font-serif h-display) เพื่อความ bold
3. **Trusted by / Testimonials**
   - mono label `04 — Trusted`
   - 2 testimonial quotes แบบ pull-quote (serif italic ใหญ่) + ชื่อ/บริษัท
   - แถบ logo wordmark grid (5-6 ชื่อ) ด้านล่าง — ใช้ text wordmarks (Inter tracked) ไม่ใช่ logo จริง เพราะยังไม่มี assets
4. **Services preview** (3 tiers ย่อ)
   - mono label `05 — Packages`
   - 3 การ์ดเรียงแถวเดียว: tier symbol + ชื่อ + start from price + 1 บรรทัด tagline
   - CTA: "See all packages →" → `/services`

ปรับเลขที่ Index section ของ homepage ใหม่ให้ไม่ชน (Index เป็น `01`)

### Files
- edit `src/pages/Services.tsx` (pricing wording)
- edit `src/pages/HealthCheck.tsx` (18 questions, result page expansion, package recommendation logic)
- edit `src/pages/Index.tsx` (เพิ่ม 4 sections)
- ไม่ต้องสร้างไฟล์ใหม่ ไม่แตะ DB/backend

### หมายเหตุ
- ทุก section ใช้ design tokens เดิม: snow bg, cinnabar accent, hairlines, zero radius, mono labels ตาม pattern `NN — Title`
- Testimonials ใช้ placeholder content (จะใส่ "Replace with real quote" comment) เพราะยังไม่มีข้อมูลจริง — ถ้าต้องการ quote จริงสามารถส่งมาเปลี่ยนภายหลัง