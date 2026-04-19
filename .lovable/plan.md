
ปรับหน้า Home ตั้งแต่ **THE VICIOUS CYCLE** ลงไป ให้มีจังหวะการเล่าเรื่อง (rhythm) และ visual hierarchy ที่ดีขึ้น แบบ editorial magazine จริงๆ ไม่ใช่ stack ของ section ที่หน้าตาเหมือนกัน

## ปัญหาปัจจุบัน
- ทุก section ใช้ pattern เดิม: `SectionHeader` + grid 12 col + alternating `bg-surface` → จังหวะแบนราบ
- 11 section ยาวเกินไป มี content ซ้ำซ้อน (Applied Solutions + Blueprint + Why Agency พูดเรื่องคล้ายกัน)
- Hero Projects กับ Selected Works แทบเหมือนกัน (กริดรูป + caption)
- ขาด moment ที่ "หยุดสายตา" — ไม่มี full-bleed, ไม่มี oversized type, ไม่มี contrast block ที่กล้า
- Blueprint 6-col กลายเป็นกล่องเล็กๆ อ่านยากบนมือถือ

## แนวทางใหม่ — Re-pacing & Re-grouping

### ลำดับใหม่ (จาก 9 sections เหลือ 8 ที่มีน้ำหนักต่างกัน)

```text
03  THE VICIOUS CYCLE         [keep, refine type scale]
04  WHO IS ØRIONS              [bigger, full-bleed image left, manifesto right]
05  APPLIED SOLUTIONS          [new layout: horizontal scroll-stack list, ไม่ใช่ 4 grid]
06  THE BLUEPRINT              [redesign: oversized "ORIONS" lockup horizontal, 1 letter = 1 row]
07  SELECTED WORK              [merge Hero Projects + Selected Works → 1 feature + 4 secondary asymmetric]
08  WHY ØRIONS                 [keep 3-col, but make middle ØRIONS card oversized]
09  THE CLARITY AUDIT          [refine, add stronger visual anchor]
10  LET'S WORK (CTA)           [keep + add giant ØRIONS wordmark behind]
```

### การเปลี่ยนแปลงสำคัญ section-by-section

**03 — THE VICIOUS CYCLE**
- คงโครง 5/7 split sticky
- เพิ่ม decorative oversized number "01–03" บางๆ ขนาดใหญ่ตรงพื้นหลังด้านซ้ายเป็น typographic anchor
- เพิ่ม keyword highlight ใน body text ของแต่ละ pressure (e.g. "ไม่ถึง 2 วินาที" เป็นตัวหนา/underline)

**04 — WHO IS ØRIONS** (ขยาย impact)
- เปลี่ยนจาก 7/5 → full-bleed image ซ้าย (kiss edge) + ข้อความขวาแบบ manifesto column แคบ
- เพิ่ม oversized vertical text "BANGKOK / 2024" คั่นระหว่างภาพกับ text
- เพิ่ม 3 stats ด้านล่าง (e.g., "12+ Years", "40+ Brands", "1 Studio")

**05 — APPLIED SOLUTIONS** (ทิ้ง 4-col grid แบนๆ)
- เปลี่ยนเป็น **horizontal expanding list** — แต่ละ service เป็น row เต็มความกว้าง, hover → ขยาย, เผยรายละเอียด
- ซ้าย: เลข + ชื่อ service (display font ใหญ่) | กลาง: keyword tags | ขวา: arrow
- ให้ feel เหมือน table of contents ของ magazine

**06 — THE BLUEPRINT** (redesign สำคัญ)
- ทิ้ง 6-col grid เล็ก
- เปลี่ยนเป็น **vertical stack 6 rows** เต็มความกว้าง: ตัวอักษร O/R/I/O/N/S ขนาด ~140px ชิดซ้าย + ชื่อ stage กลาง + คำอธิบายขวา + เส้น hairline คั่น
- Sticky number indicator ทางซ้าย (01–06) ขณะ scroll
- ให้ feel เหมือน editorial chapter list

**07 — SELECTED WORK** (รวม Hero + Selected → 1 section)
- ลบ section "Selected Works" แยก
- Layout: 1 hero project ใหญ่ (full-width 16:9) + ใต้นั้น 4 secondary projects asymmetric grid (2 ใหญ่ + 2 เล็ก แบบ bento)
- ลด redundancy, เพิ่ม visual variety

**08 — WHY ØRIONS** (ทำให้ ØRIONS card เด่น)
- คงกริด 3 cards แต่ ØRIONS card span 2 rows / มี aspect ratio ต่างจาก 2 อันแรก
- เพิ่ม comparison icon (✕ vs ✕ vs ✓) บน card

**09 — CLARITY AUDIT**
- เพิ่ม number "01" "02" ขนาดใหญ่มากใน card
- เพิ่ม CTA mini "BOOK A SESSION →" ใต้ description

**10 — CTA**
- เพิ่ม oversized "ØRIONS" wordmark พื้นหลัง (text-foreground/5) เพื่อ echo hero
- คง content เดิม

### Design rules ที่ใช้ตลอด
- ลบ alternating `bg-surface` ทุก section — ใช้ rhythm ผ่าน spacing/scale แทน, คั่นด้วย hairline
- ใช้ `min-h-screen` เฉพาะ section ที่ต้องการ moment (Vicious Cycle, Who, CTA)
- ขนาด heading ไล่ระดับ: 56→72→88→64→48 ตาม narrative beat ไม่ uniform
- เพิ่ม oversized typographic background numbers/letters เป็น anchor ทุก section หลัก

## ไฟล์ที่จะแก้
- `src/pages/Index.tsx` — refactor section 03 ลงไปทั้งหมด

ขอ confirm 1 จุดก่อนเริ่ม:

