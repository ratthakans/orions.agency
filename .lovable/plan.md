

## ตรวจสอบ Spacing & Section Rhythm — ทั้งเว็บ

ผมไป audit ครบทุกหน้าแล้ว นี่คือสิ่งที่เจอ + แผนแก้

---

### 🔴 ปัญหาหลัก

#### 1. Section padding ไม่ consistent — ค่ากระจัดกระจาย

ปัจจุบันใช้ค่าหลากหลายมากเกินไป:
- `py-16 md:py-20` (CTA หลังแก้ล่าสุด)
- `py-20 md:py-32` (Index sections)
- `py-24 md:py-32` (Services cards)
- `py-12 md:py-16` (About sub-sections)
- `pb-10`, `pb-20` (mixed bottom paddings)

→ ไม่มี rhythm ที่ชัดเจน อ่านไม่ลื่น

**แก้:** กำหนด **section padding scale** ให้เป็น 3 ระดับ:
- **Hero:** `py-20 md:py-28` (หายใจได้ แต่ไม่บวมเกิน)
- **Content section:** `py-16 md:py-24` (มาตรฐาน — Index, Work, Services cards, About blocks)
- **CTA / closer:** `py-16 md:py-20` (compact ตามที่เพิ่งปรับ ✓)

---

#### 2. Hairline (border-t) เยอะเกินจริง — ซ้อนกันรัวๆ

ตัวอย่างหน้า Services:
- PageHero มี border ล่าง
- `<section>` ถัดไป `border-t border-foreground` (ทับ)
- การ์ด services แต่ละอันมี `border-b border-soft`
- CTA section อีก `border-t border-foreground`
- Footer อีก border บน

→ บางจุด **2 hairlines ติดกัน** (เช่น hero bottom + section top)

**แก้:**
- ลบ `border-t` ที่ซ้ำกับ border ของ section ก่อนหน้า
- ใช้ `border-foreground` (ดำเข้ม) เฉพาะ **section divider หลัก** เท่านั้น
- ใช้ `border-soft` (เทาอ่อน) สำหรับ inner dividers (list items, cards)
- กฎ: ระหว่าง 2 sections ติดกัน → ใช้แค่ **1 hairline** (อยู่กับ section ใดก็ได้ แต่ไม่ทั้งสอง)

---

#### 3. Margin top ของ child elements ไม่เป็น scale

เจอ `mt-3, mt-5, mt-6, mt-8, mt-10, mt-12, mt-14` ปนกันมั่ว

**แก้:** ใช้ scale **mt-4 / mt-6 / mt-8 / mt-12** เท่านั้น (4-step rhythm)

---

### 🟡 ปัญหารอง

#### 4. Horizontal padding ok แล้ว
ทุกหน้าใช้ `px-6 md:px-10` consistent ✓ — ไม่ต้องแตะ

#### 5. Gap ใน grid ไม่ตรงกัน
- Services: `gap-8 lg:gap-12`
- About methods: `gap-10 md:gap-12`
- Index: `gap-6 md:gap-10`

**แก้:** มาตรฐาน `gap-8 md:gap-12` สำหรับ content grids

---

### 🎯 Nav hover — กลับเป็นแบบเดิม

ปัจจุบัน Nav ใช้:
- Magnetic wrapper
- `after:` underline gradient
- Active dot + gradient text
- Hover เปลี่ยนสีเป็น `accent-to`

**แก้กลับเป็นแบบ minimal เดิม:**
- ลบ `Magnetic` wrapper รอบ NavLink (เก็บไว้แค่ปุ่ม Let's Talk)
- ลบ `after:` gradient underline
- ลบ active dot
- Hover: แค่เปลี่ยนสี `text-muted-foreground` → `text-foreground` (transition 200ms)
- Active state: text สีดำ (`text-foreground`) — ไม่มี underline/dot

---

### ไฟล์ที่จะแก้

| ไฟล์ | สิ่งที่แก้ |
|---|---|
| `src/components/Nav.tsx` | กลับ hover เป็นแบบ minimal |
| `src/pages/Index.tsx` | normalize section padding ให้เข้า scale |
| `src/pages/Services.tsx` | ลบ border ซ้ำ, normalize padding, gap |
| `src/pages/Work.tsx` | normalize padding, ลบ border ซ้ำ |
| `src/pages/About.tsx` | normalize padding, gap, mt scale |
| `src/pages/Contact.tsx` | ตรวจ padding ให้เข้า scale |

### หลักการสรุป
- Section: `py-16 md:py-24` (content), `py-16 md:py-20` (CTA), `py-20 md:py-28` (hero)
- Margin scale: 4 / 6 / 8 / 12
- Hairline rule: 1 เส้นระหว่าง section, ไม่มีคู่
- Nav: minimal hover (แค่เปลี่ยนสี)

