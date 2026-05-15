# Redesign หน้าแรก — เน้นไทย, สอดคล้อง, อ่านง่าย

แก้เฉพาะ `src/pages/Index.tsx`

## เปลี่ยนทิศทางภาษา (ลูกค้าไทย)

จากแผนก่อนที่ "headline = English" → ปรับใหม่เพราะลูกค้าคือคนไทย:

- **Headline หลัก** → ภาษาไทย (อ่านง่าย, จำง่ายสำหรับคนไทย)
- **Eyebrow / labels mono** → English uppercase (ทำหน้าที่เป็น decorator แบบ editorial)
- **Body / sub / button** → ไทย
- **ชื่อบริการ / ชื่อเคส** → English (เพราะเป็นชื่อเฉพาะและสะอาดกว่า)
- **Brand line `From idea to final cut.`** → คงไว้เพราะเป็น tagline แบรนด์

แบบนี้ทุก section จะมี rhythm เดียวกัน: **EN eyebrow → TH headline → TH body**

## 1) HERO

- เก็บโครงเดิม
- **Sub ใต้ wordmark** เปลี่ยนจาก `Boutique creative agency` → คงไว้ (เป็น tagline แบรนด์ภาษาเดียว)
- ปุ่ม `ดูบริการของเรา` คงเดิม

## 2) WHAT WE DO — redesign (เอา icon ออก)

ออกแบบใหม่เป็นรายการ editorial แทน card grid:

```
— WHAT WE DO
สี่สิ่งที่เราทำ ให้แบรนด์คุณ จำง่ายและขายได้.

──────────────────────────────────────────────
01   Branding              วางตัวตนแบรนด์ให้คมและจำง่าย
──────────────────────────────────────────────
02   Content Production    ถ่ายทำ ตัดต่อ ครบจบในทีมเดียว
──────────────────────────────────────────────
03   Social Media          ดูแลคอนเทนต์ครบทุกแพลตฟอร์ม
──────────────────────────────────────────────
04   Paid Ads              ยิงแอดให้คุ้ม ทุกบาทมีเหตุผล
──────────────────────────────────────────────
                                          View all →
```

**Spec:**
- Layout: รายการแนวนอน 4 แถว, แต่ละแถว grid `[number] [name EN] [desc TH]`
- Hover: ทั้งแถวขยับซ้าย/เปลี่ยนสี เป็น accent (Sunset Ink)
- ไม่มี icon, ไม่มี border box, แค่ hairline divider บน-ล่างของแต่ละแถว
- Typography:
  - หมายเลข `01-04` → JetBrains Mono ขนาดเล็ก
  - ชื่อบริการ → Unbounded display ขนาดใหญ่ (`text-[28px] md:text-[40px]`)
  - คำอธิบาย → IBM Plex Sans Thai ขวาสุด, ขนาด body
- Headline section เปลี่ยนเป็นไทย: `สี่สิ่งที่เราทำ.` (ตัด `One team. From idea to final cut.` เพราะใช้ที่ CTA แล้ว)

## 3) SELECTED WORK — เอา พลวัต ออก, เหลือ 5 cards

Cards: Hongmove, Democrat, RTAF, GCOO, Heavy Organizer

**ปรับ headline ให้สอดคล้อง:**
- Eyebrow: `— SELECTED WORK` (ภาษาอังกฤษให้ตรง pattern)
- Headline ภาษาไทย: `แบรนด์จริง ผลลัพธ์จริง.` (ย้ายกลับมาเป็น headline แทน eyebrow)
- ตัดบรรทัด `Selected work.` ออก

Card ทุกใบเหมือนเดิม (image + overlay, scope/impact/title)

## 4) TRUSTED BY

- Eyebrow `— TRUSTED BY` คงไว้
- **เพิ่ม headline สั้นภาษาไทย**: `แบรนด์ที่เลือกเราแล้ว.` (เพื่อให้มี hierarchy เดียวกับ section อื่น — ตอนนี้มันโดดออกมาเพราะไม่มี headline)
- Grid logos เหมือนเดิม

## 5) CTA

- Eyebrow `— LET'S TALK` คงไว้
- Headline เปลี่ยนเป็นไทย: `เริ่มจากไอเดีย จบที่ final cut.` (ผสมไทย-อังกฤษเฉพาะที่ tagline brand)
- Sub ไทย, ปุ่ม `เริ่มคุยกับเรา` คงเดิม

## ผลลัพธ์ rhythm ทุก section

```
— EN EYEBROW (mono, เล็ก)
Headline ภาษาไทย คมๆ. (display, ใหญ่)
[content]
```

ทุก section จะ "อ่านเป็นจังหวะเดียวกัน" — คนไทยเข้าใช้ได้ทันที, English ถูกใช้เฉพาะที่เป็น decorator/brand voice
