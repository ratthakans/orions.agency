## Goal

ทำให้ทั้งไซต์ "flow" ขึ้น น่าสนใจขึ้น คำน้อยลง และ **ฟอนต์สอดคล้องกันทุกที่** โดยยึด Unbounded เป็น display หลัก (ตรงกับ logo และ memory) แทนการใช้ Cutive serif ปนกันแบบปัจจุบัน

---

## A · Typography unification (สำคัญสุด)

ตอนนี้ปนกันมั่ว: nav ใช้ Unbounded, hero ORIONS ใช้ Cutive serif, headline ทุกหน้าใช้ `font-serif` (Cutive) แต่ใน `index.css` h1-h6 default เป็น Unbounded แล้วถูก override ทุกที่ด้วย `font-serif`.

**กฎใหม่ (ใช้ทั้งไซต์):**
- **Display / headlines / brand mark / hero ORIONS** → `Unbounded` (ผ่าน `font-brand` หรือ default h1-h6)
- **Accent italic words** (เช่น *boutique*, *properly*) → คงเป็น `Instrument Serif italic` (เพื่อความมีชีวิตชีวา 1 ฟอนต์เท่านั้นที่ทำหน้าที่นี้)
- **Body EN + Thai** → `IBM Plex Sans Thai`
- **Numbers / labels / eyebrows** → `JetBrains Mono`
- **เลิกใช้** Cutive ทุกที่ (ลบจาก `tailwind.config.ts` `font-serif` mapping → map ไปที่ Instrument Serif แทน เพื่อไม่พังโค้ดเก่า)

**ผลลัพธ์ที่เห็นชัด:** ทุก headline จะเป็น Unbounded หนา-สั้น-คม คำ italic สีส้มเป็น serif เล็กๆ แทรก = สะอาด เป็นระบบ มี personality

---

## B · Hero ORIONS

- เปลี่ยน `font-serif` → `font-brand` (Unbounded) เก็บ `text-orion italic` ตัว O ไว้
- ปรับ tracking ให้แน่นขึ้น (`tracking-[-0.06em]`) ให้เหมาะกับ Unbounded
- ลด font size 1 step (Unbounded หนากว่า Cutive ต้องเล็กลงเพื่อไม่ทับขอบ)

---

## C · Navbar consistency

- Logo `ØRIONS` คงเดิม (Unbounded `font-brand`)
- Nav links + CTA: ตอนนี้ใช้ `index-badge` (mono uppercase) → คงไว้ แต่ปรับ size/tracking ให้เท่ากันทุกตัว
- Announcement bar (NOW BOOKING…) → คงไว้แต่สั้นลง: `Q3 2026 BOOKING — 30-MIN CALL, FREE`

---

## D · Cut copy & smooth flow (ลดคำ ลดความรก)

**Index (11 → 8 sections):**
- รวม `02 Stats` + `03 Quote` → ตัด quote section ทิ้ง (ซ้ำกับ hero promise)
- รวม `08 Outcomes bar` ย้ายขึ้นไปต่อจาก hero (เป็น proof bar ทันที) — ตัด section 08 เดิม
- ตัด `09 Trusted by` paragraph "40+ brands across…" (ซ้ำกับเลขใน outcomes)
- `11 Why us`: ลด 4 ข้อ → 3 ข้อ
- ตัด CTA ใน section 11 footer (`EMAIL/PHONE/ONLINE` 3 cards) — ซ้ำกับ Contact page

**ทุก section heading:** ลดเหลือ ≤ 4 คำ
- "What you're up against." → คงเดิม ✓
- "Three things, properly." → คงเดิม ✓
- "From hello, live in 4 weeks." → **"Live in 4 weeks."**
- "Brands we've built." → คงเดิม ✓
- "What clients say." → **"Clients."**
- "Pricing that makes sense." → **"Pricing."**

**Sub-copy Thai:** ตัดให้เหลือ ≤ 1 บรรทัด (≤ 60 chars) ทุกที่

**Services / About / Work / Contact:** apply กฎเดียวกัน — heading สั้น, ตัด tagline ซ้ำ, font ใช้ระบบใหม่

---

## E · Flow & motion polish

- เพิ่ม section transition: hairline divider + small mono index (เช่น `02 — STATS`) ที่หัวทุก section ให้รู้สึก "ไหลต่อกัน"
- Marquee bridge ระหว่าง dark hero → light section คงไว้ (ดีอยู่แล้ว)
- เพิ่ม `Reveal` stagger บน section ที่ยังไม่มี (Why us cards, pricing cards)
- Hero CTA: ลด sub-text "↳ Reply within 24h · Free 30-min call" → รวมเข้ากับ announcement bar เพื่อไม่ซ้ำ

---

## Files to edit

- `tailwind.config.ts` — remap `font-serif` → Instrument Serif, ตัด Cutive
- `src/index.css` — ลบ Cutive import (ถ้ามี), ปรับ h1-h6 default
- `src/components/Nav.tsx` — ปรับ size announcement
- `src/pages/Index.tsx` — restructure 11 → 8 sections, swap fonts, ลด copy
- `src/pages/Services.tsx` — apply font + copy rules
- `src/pages/About.tsx` — apply font + copy rules
- `src/pages/Work.tsx` — apply font + copy rules
- `src/pages/Contact.tsx` — apply font + copy rules
- `mem://style/typography` — update rule

## Out of scope

- ไม่เปลี่ยนสี/palette
- ไม่เปลี่ยน layout grid หลัก
- ไม่แตะ pricing numbers / project list / business logic
