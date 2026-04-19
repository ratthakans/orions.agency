

# ØRIONS — Design Review & Refinement Plan

## ปัญหาปัจจุบัน (จากการ review)

**1. Gradient สีฟ้า→ม่วง→แดง ไม่เข้ากับแบรนด์**
- ดูเหมือน Web3/Crypto/Gaming brand มากกว่า creative agency
- 3-color gradient ทำให้ดูยุ่งและขาด sophistication
- สีแดง crimson ตัดกับ background ดำแรงเกินไป — ไม่ premium
- ไม่สื่อถึง "Bangkok Energy × Logical Standard"

**2. Layout ยังเป็น "single column stack"**
- ทุก section จัดกลาง / max-width เท่ากัน → จังหวะการอ่านเหมือนกันหมด
- ขาด visual hierarchy ระหว่าง section
- ไม่มี asymmetry, ไม่มี editorial grid
- Featured Work cards เหมือนกัน 3 ใบเรียงกัน → น่าเบื่อ

**3. Hero ยังธรรมดา**
- ØRIONS อยู่ตรงกลางจอเดี่ยวๆ + blob พื้นหลัง
- ไม่มี supporting elements (index, meta info, motion text)
- Marquee แยกอยู่ใต้ hero แทนที่จะเป็นส่วนหนึ่งของ composition

**4. Typography สีไม่ pop**
- Heading หลายอันใช้ gradient → อ่านยาก, ลด impact
- ขาด contrast ระหว่าง display headlines กับ body
- ตัวอักษร Thai (IBM Plex) กับ Unbounded ยังไม่ harmonize ดีพอ

---

## แนวทางใหม่ (Direction)

### A. Color System — "Warm Editorial Mono + Single Liquid Accent"

ทิ้ง 3-color gradient แล้วใช้:

```text
BACKGROUND     #0B0B0D   (warm near-black, ไม่เย็น)
SURFACE        #131316   (card / alt section)
SURFACE-2      #1B1B1F   (nested elements)
BORDER         #26262B   (hairline)
TEXT           #F5F5F0   (warm white, ไม่ขาวจัด)
MUTED          #8A8A92   
ACCENT INK     #E8E3D8   (creamy bone — สำหรับ italic/eyebrow)

LIQUID ACCENT  Single-tone amber→bone→white
  → ใช้เฉพาะกับ "ØRIONS" wordmark, key numbers, divider
  → ไม่ใช้กับ paragraph headings
```

**ทำไม**: warm tone ให้ความรู้สึก editorial/print magazine (เช่น It's Nice That, The Gentlewoman) มากกว่า tech/web3. Amber↔bone gradient ดู refined แต่ยังมี personality.

**ทางเลือก gradient** (จะขอ confirm ก่อนสร้าง):
- **Option 1 — Warm Bone**: amber → cream → white (แบบ print magazine, เหมือนแสง golden hour)
- **Option 2 — Cold Pearl**: steel blue → silver → pearl white (modern, premium tech)
- **Option 3 — Mercury**: mid-grey → bright white → mid-grey (mono ที่สุด, เน้น light play)
- **Option 4 — Single Solid**: ไม่มี gradient เลย — ใช้สีเดียว (เช่น amber #E8B86D) เป็น accent

### B. Layout — "Editorial Grid System"

แต่ละ section ใช้ 12-column grid พร้อม asymmetric placement:

```text
HERO (full-bleed)
┌────────────────────────────────────────────────┐
│ ⓘ INDEX 01/13      ◐ APPLIED CREATIVE AGENCY   │ ← top meta bar
│                                                 │
│   ØRIONS                          (huge, left)  │
│   ━━━━━                                         │
│   Practical. Bold. Done.        (italic, mid)   │
│                                                 │
│                              ╲ scroll          │
│ EST. 2024 · BKK              ╲ ↓ next          │
└────────────────────────────────────────────────┘
```

```text
STAGNATION (split layout, ไม่ใช่ centered quote)
┌──────────────┬─────────────────────────────────┐
│ 01           │  เมื่อวิธีเดิม                  │
│ THE          │  มาถึง ทางตัน                   │
│ STAGNATION   │  คุณต้องการไอเดียที่           │
│              │  'ประยุกต์'                     │
│ Source:      │  มาเพื่อแก้ปัญหาจริง           │
│ Industry     │  ─────                          │
│ Observation  │  — ØRIONS Manifesto, 2024      │
└──────────────┴─────────────────────────────────┘
```

```text
3 PRESSURES (ตัวเลขใหญ่ขึ้น, layout horizontal divide)
┌──────────────────────────────────────────────┐
│ 02 — THE 3 PRESSURES                          │
│                                                │
│ 1.7s          +41%          4.6×              │
│ ─────         ─────         ─────             │
│ ATTENTION     DIGITAL       DIGITAL           │
│ SPAN          INFLATION     WASTE             │
│                                                │
│ ไม่ถึง 2 วิ   ค่าโฆษณา      ขยะดิจิทัล       │
│ คือเวลา...   เพิ่มขึ้น...   ล้นโลก...        │
└──────────────────────────────────────────────┘
```

```text
FEATURED WORK (asymmetric — ใบแรกใหญ่, อีก 2 ใบเล็ก stack)
┌────────────────────────┬──────────────────┐
│                        │  ┌────────────┐  │
│   HONGMOVE             │  │  RTAF      │  │
│   [large image 4:5]    │  └────────────┘  │
│                        │  ┌────────────┐  │
│   APPLIED UTILITY      │  │  KHAO YAI  │  │
│   +25% Conversion      │  └────────────┘  │
└────────────────────────┴──────────────────┘
```

### C. Hero ใหม่ — Editorial composition

- เพิ่ม **top meta bar**: `INDEX 01/13` ซ้าย, `◐ APPLIED CREATIVE AGENCY` ขวา
- ØRIONS ชิดซ้าย (ไม่ใช่ center) ขนาด 18-22vw
- Tagline italic อยู่ใต้แบบ caption ของหนังสือ
- มุมล่างซ้าย: `EST. BANGKOK · 2024 · ØRIONS.AGENCY`
- มุมล่างขวา: scroll indicator + `↓ NEXT — THE STAGNATION`
- **Marquee** เลื่อนเป็น horizontal divider คั่นระหว่าง hero กับ section ถัดไป (slim, slow)

### D. Typography Refinement

```text
HERO WORDMARK    Unbounded 700, 18-22vw, tracking -0.06em
                 → ใช้ liquid accent gradient (amber→bone)
H1 (page hero)   Unbounded 600, 64-88px, tracking -0.04em
                 → solid foreground (ไม่ gradient)
H2 (section)     Unbounded 500, 36-48px
                 → solid foreground
EYEBROW          JetBrains Mono 11px, tracking 0.24em, MUTED
ITALIC SUB       Inter Italic 18-22px, light, ใช้คั่น break
BODY TH          IBM Plex Sans Thai 16-17px, leading 1.75
QUOTE TH         IBM Plex Sans Thai 28-36px, weight 400
                 → keyword highlight ด้วย accent color (ไม่ gradient)
```

**กฎใหม่**: gradient ใช้กับ ØRIONS wordmark + numbers (1.7s, +41%, 4.6×) + key callouts เท่านั้น ไม่ใช้กับ heading ทั่วไป

### E. Micro-details เพิ่ม visual interest

1. **Section index badges** — `01/13`, `02/13`, ... เป็น meta info ทุก section
2. **Hairline dividers** — เส้นบางๆ คั่นระหว่าง subsection แทน gap ใหญ่
3. **Numbered footnotes** — เพิ่ม `¹` `²` กับ key claims (style แบบ academic/editorial)
4. **Image placeholders** — แทน gradient blob ใส่เป็น noise/grain texture หรือ duotone ภาพจริง (ถ้ามี)
5. **Cursor**: เพิ่ม custom cursor เล็กๆ บน interactive cards (วงกลม + arrow)
6. **Sticky page index** ด้านขวาของหน้า Home: dot navigator แสดงว่าอยู่ section ไหน

---

## คำถามก่อนลงมือ

ขอ confirm 2 จุดสำคัญ:

**Q1 — เลือก accent gradient แบบไหน**
1. Warm Bone (amber → cream → white) — editorial print magazine
2. Cold Pearl (steel → silver → pearl) — modern premium tech
3. Mercury (grey → white → grey) — most mono
4. Single solid amber #E8B86D — no gradient at all

**Q2 — Hero composition**
1. Editorial split (ØRIONS ซ้าย + meta bars + asymmetric)
2. คงไว้กลางจอแต่ refine (ลด blob, เพิ่ม meta bar บน-ล่าง)
3. Full-bleed video/image background + ØRIONS overlay

ตอบ 2 ข้อนี้แล้วจะเริ่มลงมือ refactor:
- `src/index.css` — color tokens + gradient ใหม่
- `src/pages/Index.tsx` — editorial layout ทุก section
- `src/pages/Services.tsx`, `Work.tsx`, `About.tsx`, `Contact.tsx` — sync grid system + typography rules
- `src/components/PageHero.tsx`, `Nav.tsx` — meta bar + index badges

