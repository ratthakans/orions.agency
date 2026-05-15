## Changes

### 1 · Revert ORIONS hero
- Hero `<h1>` กลับเป็น `font-serif` (Instrument Serif) แบบเดิม + ตัว O สีส้ม italic
- Sizes กลับเป็น `text-[20vw] md:text-[18vw] lg:text-[16vw]`

### 2 · ลบ proof bar
- ลบทั้ง section "+3.2× REACH LIFT / 40+ BRANDS / 4 WK" ที่อยู่ใต้ marquee
- อัปเดตเลข section: หน้า Index จาก 9 → 8 sections (footer counter `01/08`, mark indices)
- ลบ `outcomes` array (ไม่ใช้แล้ว)

### 3 · ปรับ font ปุ่มให้สอดคล้อง
ตอนนี้ปุ่มใช้ `index-badge` = **Unbounded uppercase 11px** ซึ่งดูแข็งและไม่เข้ากับ headline ที่เป็น Instrument Serif italic

**เปลี่ยนเป็น:** ปุ่มทั้งหมดใช้ **Instrument Serif italic** (font-serif) ขนาด ~16-17px ไม่ uppercase ให้ flow กับ headline

**ขอบเขต:** ปุ่ม CTA ทุกที่
- Nav: "Get a free proposal"
- Hero: "Get a free proposal", "See pricing →"
- Hero mobile menu CTA
- Pricing section: "See full breakdown", "Get a free proposal"
- Bottom dark CTA: "Get a free proposal"
- หน้าอื่นๆ (Services, Work, About, Contact, ClosingCTA, StickyMobileCTA)

**คงเป็น Unbounded mono เฉพาะ:** eyebrow labels, page numbers (01/08), section marks, announcement bar, stats tabular numbers — เพราะเป็น utility text ไม่ใช่ CTA

### Files
- `src/pages/Index.tsx` — revert hero, remove proof bar section, renumber, swap button classes
- `src/components/Nav.tsx` — swap CTA button class
- `src/components/ClosingCTA.tsx` — swap button class
- `src/components/StickyMobileCTA.tsx` — swap button class
- `src/pages/Services.tsx`, `About.tsx`, `Work.tsx`, `Contact.tsx` — swap CTA buttons

### Out of scope
- ไม่เปลี่ยน layout, สี, content อื่น
- ไม่แตะ `index-badge` utility (ยังใช้กับ labels ที่ไม่ใช่ปุ่ม)
