

## Master Audit + Amsterdam Polish

ผมตรวจครบทุกหน้าแล้ว — เจอ bugs จริง, inconsistencies, และโอกาสยก aesthetic เป็น Amsterdam style

---

### 🔴 BUGS (ต้องแก้ทันที)

| # | ที่ | ปัญหา |
|---|---|---|
| 1 | `Work.tsx` L184–192 | **Section "Social & Commercials" ซ้ำ 2 ครั้งติดกัน** (copy-paste bug) — content เดียวกันเป๊ะ |
| 2 | `Work.tsx` L199 | `<span className="italic opacity-70">Long-form</span>` — ผิดกฎ "no italic in Unbounded heading" ที่เพิ่งกำหนด |
| 3 | `Index.tsx` L246 | `text-gradient` ใน "applying" — แต่ `Index` มี gradient ใน hero scroll bar ด้วย → ตรวจไม่เกิน 1/หน้า |
| 4 | `Work.tsx` L255 / `About.tsx` L399 | CTA secondary เป็น `<Link>` มี `→` text — แต่ `Index` L252 ใช้ `<CTA variant="ghost">` → **ไม่ unify** |
| 5 | `About.tsx` L113 + L268 | มี `text-gradient` 2 จุด ("Applied" + "ลากเส้น") — เกิน 1/หน้า |

---

### 🟡 INCONSISTENCIES

| ที่ | ปัญหา | แก้ |
|---|---|---|
| Section padding | `Index` ใช้ `py-16 md:py-24`, `py-16 md:py-20` ปนกัน | กำหนด: full=`py-20 md:py-28`, row=`py-16 md:py-20` |
| Index L98 marquee | `border-y border-foreground` เต็ม viewport | ย้าย border มา inner เหมือน sections อื่น |
| `hairline` width | บางที่ `w-8`, `w-16`, `w-12` | scale: 8 / 16 / 24 เท่านั้น |
| Index L93 scroll dash | `bg-muted-foreground` แต่ใต้ใช้ `bg-foreground` | unify เป็น `bg-foreground/40` |
| Work hero gradient | "ideas" gradient — แต่ Index, Services, About, Contact ก็มี → 5/5 หน้า "title gradient on hero" — ซ้ำซากเกินไป | ลด: gradient เฉพาะ Index hero, หน้าอื่นใช้ ink solid + `text-muted-foreground` punctuation |
| Index "Vicious Cycle" copy | Slide 02 presentation = "ธุรกิจของคุณนิ่ง เพราะกติกาเปลี่ยน..." แต่ headline ใช้ "The Vicious Cycle" | เพิ่ม subtitle Thai ตามต้นฉบับ |

---

### 🟢 AMSTERDAM STYLE — ยกระดับ

**Amsterdam style = Dutch design school:** asymmetric grid, oversized type, generous negative space, single-color discipline, swiss-grid + rebellious typography, large numbers as art, rules-driven but playful.

**ของที่มีอยู่แล้ว ✓:** newsprint, hairlines, zero-radius, large `num-display`, mono labels, CornerMarks.

**สิ่งที่จะเพิ่ม (clean + Amsterdam):**

1. **Strict 12-col grid visible** — เพิ่ม `<GridGuide>` component (debug toggle หรือ subtle 1px grid behind hero) → ทำให้ asymmetry รู้สึกตั้งใจ ไม่ใช่บังเอิญ
2. **Oversized index numbers as art** — เปลี่ยน `[01/05]` ใน Nav เป็น **"01" ขนาดใหญ่ floating ที่ corner ของ hero** (Werkplaats Typografie pattern)
3. **Asymmetric hero offsets** — Hero ทุกหน้าตอนนี้ centered → ขยับ title ไป **off-center** (col-start-2 span-9, หรือ ragged right) → Amsterdam signature
4. **Number-as-section-marker** — แทน `SectionHeader` index `"01"` เล็กๆ → render เป็น **80–120px display number** ลอยซ้ายของ section (Studio Dumbar / Experimental Jetset pattern)
5. **Diagonal/rotated marker** — มีอยู่แล้วใน About L182 ("―" rotated) → เพิ่ม pattern นี้ใน Index "Vicious Cycle" และ Services hero (รอบเดียวต่อหน้า)
6. **Tighter color discipline** — ลบ `text-gradient` ใน hero ของ Work / Services / Contact / About → เหลือแค่ Index เท่านั้น (1/site = ultra clean)
7. **Footer** — เปลี่ยน hover icon `hover:bg-gradient-accent` → ใช้ ink solid (`hover:bg-background hover:text-foreground`) → ตัด accent ที่ไม่จำเป็น
8. **Marquee dividers** — ใช้ `/` ใน Contact marquee อยู่แล้ว ✓ ขยายไปใช้ใน Footer index list separator
9. **Vertical text labels** — เพิ่ม section labels หมุน 90° ที่ขอบซ้าย sections สำคัญ (Wim Crouwel pattern)
10. **Paper crop mark** — เพิ่ม "crop marks" จริง (4 ขีดสั้น) ที่มุมแต่ละ section ใหญ่ → ความรู้สึก print/typographic

---

### 📋 แผนทำ (เรียงลำดับ)

**Phase 1 — Bugs & Consistency (จำเป็น)**
- ลบ section ซ้ำใน Work.tsx
- ตัด italic จาก "Long-form" + Work hero gradient
- About: ตัด gradient 1 จุด (เหลือแค่ "ลากเส้น")
- Unify CTA secondary: ทุกหน้าใช้ `<CTA variant="ghost">` เหมือน Index
- Unify section padding scale
- Marquee section: ย้าย border เข้า inner
- Hairline width scale 8/16/24
- เพิ่ม Vicious Cycle subtitle ตาม presentation slide 02

**Phase 2 — Amsterdam Polish**
- สร้าง `<BigSectionNumber>` component (80–120px floating index)
- ใช้แทน `SectionHeader` index ใน sections หลัก: Vicious Cycle, Applied Solutions, Selected Work, Method (About), Team, Audit
- Hero asymmetric offset: Services / Work / About / Contact → title col-start-2 (md+)
- เพิ่ม `<CropMarks>` รอบ section ใหญ่ (4 มุม)
- Footer: ตัด accent gradient hover, ใช้ ink invert
- Vertical 90° label ที่ขอบซ้าย Hero แต่ละหน้า ("/ 02 SERVICES" etc.)
- ลบ `text-gradient` ออกจาก hero ทุกหน้ายกเว้น Index

**Phase 3 — Final QA**
- E2E test ทุกหน้า desktop 1399 + mobile 375
- Screenshot report + console check

---

### ไฟล์ที่จะแก้

| ไฟล์ | งาน |
|---|---|
| `src/pages/Work.tsx` | ลบ section ซ้ำ, ตัด italic+gradient, unify CTA |
| `src/pages/Index.tsx` | Vicious Cycle subtitle, padding unify, marquee inner border |
| `src/pages/About.tsx` | ตัด gradient ที่ hero (เหลือ "ลากเส้น"), unify CTA secondary |
| `src/pages/Services.tsx` | ตัด gradient hero, unify CTA, asymmetric offset |
| `src/pages/Contact.tsx` | ตัด gradient hero, vertical label |
| `src/components/Footer.tsx` | ตัด accent hover → ink invert |
| `src/components/Nav.tsx` | (ไม่แตะ — ของเดิม clean ดีแล้ว) |
| `src/components/SectionHeader.tsx` | ขยาย — รองรับ `bigNumber` prop |
| **NEW** `src/components/BigSectionNumber.tsx` | Floating oversized section index |
| **NEW** `src/components/CropMarks.tsx` | 4-corner crop marks (Amsterdam print) |
| **NEW** `src/components/VerticalLabel.tsx` | 90° rotated edge label |

---

### กฎใหม่ที่จะ enforce

- `text-gradient` = **1 จุด/site** (เฉพาะ Index hero word "applying")
- `italic` = ห้ามใน Unbounded heading, ทุกที่
- `hairline` width = `w-8 / w-16 / w-24` เท่านั้น
- Section padding = full `py-20 md:py-28`, row `py-16 md:py-20`
- Hero title = asymmetric (off-center) ทุกหน้ายกเว้น Index
- Section index = floating big number (80–120px) แทน inline label

---

### คำถามก่อนเริ่ม

1. **Hero ของ Index เก็บ centered ไว้ (จุดเด่น) หรือ asymmetric ทุกหน้ารวม Index?**
   - (a) เก็บ Index centered, หน้าอื่น asymmetric (contrast)
   - (b) Asymmetric ทุกหน้า (uniform Amsterdam)

2. **`text-gradient` 1/site OK ไหม?** — เก็บแค่ Index "applying" เท่านั้น
   - (a) OK 1 จุด/site
   - (b) อยากให้แต่ละหน้ามี 1 จุด (5 จุดทั้งเว็บ)

3. **CropMarks + VerticalLabel** — เพิ่มทุก section หรือเฉพาะ hero?
   - (a) เฉพาะ hero แต่ละหน้า (subtle)
   - (b) ทุก section ใหญ่ (full Amsterdam print feel)

4. **E2E test** — ให้ทำหลัง Phase 1+2 เสร็จเลย หรือ test หลัง Phase 1 ก่อน?

