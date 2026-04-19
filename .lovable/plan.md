

## About Page — Visual Refinement Plan

ผมไป review หน้า About แล้ว (โครงสร้างปัจจุบัน 5 sections: Hero → WHO IS ØRIONS → MEANING OF THE LINE → 6 METHODS → TEAM → CTA). ตอนนี้ functional แต่ยังขาด **rhythm, hierarchy, และ editorial moment** ที่ทำให้รู้สึก "premium agency" จริงๆ

นี่คือสิ่งที่จะปรับ — focus ที่ **visual impact + editorial polish** โดยไม่เปลี่ยน content

---

### 1. Hero — เพิ่ม editorial weight

**ตอนนี้**: ใช้ `PageHero` ธรรมดาเหมือนหน้าอื่น
**เปลี่ยน**:
- เพิ่ม **meta strip** ใต้ title: `EST. 2014 · BANGKOK · APPLIED CREATIVE` (3 columns hairline-divided, mono uppercase)
- เพิ่ม **scroll cue** มุมล่างขวา: `↓ SCROLL` + animated dot

### 2. WHO IS ØRIONS — สลับ visual weight

**ตอนนี้**: รูป 5 cols, text 7 cols → รูปเล็กไป, ดูเป็น "thumbnail"
**เปลี่ยน**:
- สลับเป็น **รูป 7 cols (ใหญ่กว่า), text 5 cols** — รูป team สำคัญพอที่จะ dominate
- เพิ่ม **caption strip** ใต้รูป: `01 — ØRIONS TEAM · BANGKOK STUDIO · 2024`
- Stats 3 ช่อง: เปลี่ยน label ให้ visual interest มากขึ้น — ใส่ tiny vertical line คั่นแต่ละ stat (`|` แทน grid divider)
- ตัวเลข `10+ / 40+ / ∞` → ใช้ `FlipNumber` component ที่มีอยู่แล้ว ให้ animate ตอน scroll เข้าจอ

### 3. MEANING OF THE LINE — ยกระดับเป็น editorial moment

**ตอนนี้**: 3 columns เรียงเท่ากัน แม้ fix grid แล้วแต่ยัง "flat"
**เปลี่ยน**:
- **Asymmetric layout**: column 01 (The Line) span 5/12, column 02 (The Connector) span 4/12 with **offset top -40px**, column 03 (The Meaning) span 3/12 with **offset top -80px** — staircase composition แบบ editorial magazine
- **Typography contrast**: column 01 ใช้ font display ใหญ่กว่า (anchor), 02-03 เป็น body
- เพิ่ม **constellation line SVG** ลากเชื่อม 3 columns (เส้นบางๆ มี dot ที่จุดเชื่อม) — concept "ลากเส้นเชื่อมดาว" จริงๆ visualize ออกมา
- Pull quote: เพิ่ม **drop cap** ตัวแรก "ด" ขนาดใหญ่ (font display, 4-5 lines tall, float left)
- Background `―` mark: ขยับไปอยู่มุมขวาบน (rotate -15deg) แทนกลางจอ → ดู intentional ไม่ใช่ background pattern

### 4. THE 6 METHODS — เพิ่ม depth

**ตอนนี้**: 6 cards เรียงเท่ากัน hover แค่เปลี่ยนสี
**เปลี่ยน**:
- เพิ่ม **connecting line** บนสุดของ card row: เส้นที่มี 6 dots ตามตัวอักษร O-R-I-O-N-S (visualize "method as journey")
- Card hover: เพิ่ม **corner mark** (CornerMarks component มีอยู่แล้ว) ปรากฏมุมทั้ง 4 → ดู technical/precise
- ตัวอักษรใหญ่ (`O R I O N S`): เพิ่ม **outline variant** — บน hover เปลี่ยนจาก solid → outline (text-stroke effect) → ดู kinetic
- เพิ่ม **process arrow** `→` ระหว่าง card บน desktop (absolute positioned, hairline)

### 5. TEAM — Editorial roster

**ตอนนี้**: 4×2 grid, photos แบบ portrait card
**เปลี่ยน**:
- เพิ่ม **section intro stat**: "8 PEOPLE · 1 MISSION" ใหญ่ๆ ก่อน grid
- PersonCard: เพิ่ม **role number prefix** ใหญ่ขึ้น (เช่น `01/08` มุมบนซ้าย) แทน badge เล็กๆ
- เพิ่ม **hover detail**: เลื่อน cursor บน card → reveal "years at ØRIONS" หรือ "specialty" ที่ overlay ล่าง (slide-up จากใต้รูป)
- เพิ่ม **alternating offset** บน desktop: row 2 เลื่อนลง 40px → break grid uniformity → ดู editorial มากขึ้น

### 6. CTA section — Final statement

**ตอนนี้**: heading + button ธรรมดา
**เปลี่ยน**:
- เปลี่ยนเป็น **full-bleed dark section** (`bg-foreground text-background`) เหมือน 6 METHODS → bookend หน้า
- เพิ่ม **giant arrow** `→` (clamp 200-400px) อยู่หลัง heading เป็น decorative
- เพิ่ม **secondary action**: "Or explore our work →" link ใต้ CTA หลัก
- เพิ่ม **email + tel** เล็กๆ ด้านขวา: `hello@orions.co · +66...`

---

### Files to edit

- `src/pages/About.tsx` — sections 1-6 ทั้งหมด
- (อาจเพิ่ม) `src/components/ConstellationLine.tsx` — SVG component สำหรับ section 3 & 4

---

### What stays untouched

- Content (copy ไทย/อังกฤษทั้งหมด เก็บเดิม)
- Color tokens, typography utilities
- Component library (CTA, Reveal, SectionHeader, FlipNumber, CornerMarks — reuse all)
- Newsprint aesthetic (zero radius, hairlines, no glow/shadow)

---

### Priority (ถ้าอยากทำเป็นรอบๆ)

**Round 1 — High impact**: #3 (MEANING asymmetric + constellation), #5 (TEAM offset + hover reveal), #6 (CTA dark bookend)
**Round 2 — Polish**: #1 (Hero meta strip), #2 (WHO swap + flip stats), #4 (METHODS connecting dots)

แนะนำเริ่ม **Round 1 ก่อน** — 3 changes นี้จะเปลี่ยน feel ของหน้าเยอะที่สุด

