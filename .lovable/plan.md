
## เปลี่ยนตามที่สั่ง

**1) Hero — wordmark "ØRIONS" → Unbounded Regular, ไม่มี animation**
- เพิ่ม Unbounded ใน `index.css` (Google Fonts import) + เพิ่ม `font-family: 'Unbounded'` ใหม่ใน utility `.font-brand` (weight 400, ไม่ uppercase tracking แบบเดิมเพราะ Unbounded เป็น display อยู่แล้ว — จะใช้ tracking ปกติ `0.02em`)
- แทนที่ `<KineticWordmark />` ใน `src/pages/Index.tsx` ด้วย heading static เดียว: `<h1 className="font-brand h-display-xl">ØRIONS</h1>` — ไม่มี mouse-tilt / orbit / mask-up / 3D
- เก็บไฟล์ `KineticWordmark.tsx` ไว้ (ไม่ลบ) เผื่อเรียกใช้ภายหลัง — แค่เลิก import

**2) Navbar logo → Unbounded เหมือนกัน**
- `src/components/Nav.tsx`: logo "ØRIONS" ใช้ `font-brand` อยู่แล้ว → จะ inherit Unbounded อัตโนมัติ
- ปรับ tracking ของ logo เป็น `tracking-[0.04em]` (Unbounded ไม่ต้องการ tracking เยอะเท่า Inter)

**3) เอา section "PROCESS 6 : 3 : 1" ออกจากหน้าแรก**
- ลบทั้ง block `{/* PROCESS — 6:3:1 */}` ใน `Index.tsx` (บรรทัด ~255–289) รวมทั้ง array `processSteps`
- เนื้อหา 6:3:1 ยังอยู่ที่หน้า `/services` และ `/approach` เหมือนเดิม
- เลขลำดับ section จะเลื่อน: 04 Trusted → **03**, 05 Packages → **04**, ฯลฯ (ไล่แก้ทุก label)

**4) แถบบน Navbar (StudioStatusBar) — เปลี่ยนสีให้ต่าง**
- ปัจจุบัน status bar กับ navbar ใช้ `bg-foreground` ทั้งคู่ → ดูเป็นแถบเดียวกัน
- เปลี่ยน `StudioStatusBar` เป็น `bg-cinnabar text-background` (พื้นสีส้ม cinnabar, ตัวอักษรขาว) — เป็น signature accent ที่อ่านง่ายและทำให้ "studio open" รู้สึก alive
- จุดสถานะ open dot เปลี่ยนจาก cinnabar เป็น `bg-background` (จุดขาวบนพื้นส้ม) + animate-pulse คงเดิม
- navbar ยังคง `bg-foreground` (ดำ) → ตัด layer ชัดเจน: ส้ม / ดำ / snow

## คำแนะนำเพิ่มเติม (ผม recommend)

**a. Unbounded balance** — Unbounded หนากว่า Inter เยอะ ถ้าใช้ในหน้า hero ขนาด `h-display-xl` (clamp ~120–180px) อาจดูหนักไป → แนะนำลด weight เหลือ 300 หรือ 400 เท่านั้น (จะ import แค่ 2 weights เพื่อ performance)

**b. รักษา editorial feel** — Hero ไม่มี animation แล้ว เพื่อไม่ให้ดูนิ่งเกินไป แนะนำเก็บ marquee แถบล่าง + เพิ่ม `Reveal` fade เบาๆ บน wordmark (fade-in 600ms, ไม่ใช่ kinetic) เพื่อให้ยังมีจังหวะเข้า

**c. Hero meta strip** — บรรทัด `6 : 3 : 1 · Refined Content System` ใน hero ถ้าเอา section 6:3:1 ออก อาจดู disconnect → เปลี่ยนเป็น `Boutique · 11 in-house · Live in 4 weeks` แทน เพื่อให้สอดคล้องกับ status bar

**d. Section numbering** — เพราะ section หายไปหนึ่ง ผมจะไล่เลข `01 → 04` ใหม่ทั้งหน้าให้เรียงสวย

## ไฟล์ที่จะแก้

- `src/index.css` — เพิ่ม Unbounded import + ปรับ `.font-brand` family
- `src/pages/Index.tsx` — เปลี่ยน hero wordmark, ลบ Process section, ปรับ meta strip, ไล่เลข section ใหม่
- `src/components/Nav.tsx` — ปรับ tracking ของ logo
- `src/components/StudioStatusBar.tsx` — เปลี่ยนสีพื้นเป็น cinnabar
