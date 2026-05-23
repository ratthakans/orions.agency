## ภาพรวม

Finetune 5 จุดที่กระทบ design system มากที่สุดจาก review — งานเป็น UI/presentation ล้วน ไม่แตะ business logic หรือ backend

---

## 1. Renumber section labels ทั้งไซต์ให้ตรง navigation order

ปัจจุบัน `01–05` ใน Index, `08/07/09` ใน Services, `06` ใน HealthCheck — ดูสุ่ม

**ลำดับใหม่ตาม nav order:**

| Section | Number |
|---|---|
| Index — Manifesto block | `01 — Manifesto` |
| Index — Selected Work | `02 — Selected Work` |
| Index — Process | `03 — Process` |
| Index — Trusted | `04 — Trusted` |
| Index — Packages preview | `05 — Packages` |
| `/manifesto` page sections | `06 — …` |
| `/approach` page | `07 — …` |
| `/services` Packages | `08 — Packages` |
| `/services` Find Your Tier | `09 — Find Your Tier` |
| `/services` Add-ons | `10 — Add-ons` |
| `/diagnostic` (health-check) | `11 — The Diagnostic` |
| `/work` sections | `12 — …` |

**Files:** `src/pages/Index.tsx`, `src/pages/Services.tsx`, `src/pages/HealthCheck.tsx`, `src/pages/Work.tsx`, `src/pages/About.tsx` (manifesto), `src/pages/Projects.tsx` (approach) — เช็คและปรับให้ตรง

---

## 2. เปลี่ยน Index → Manifesto block เป็น editorial vertical list

ตอนนี้ Index มี 3-col grid ซ้ำ 3 ครั้ง (Manifesto, Process, Packages preview) → ทำให้ rhythm เดาได้

**Change:** Manifesto block (i / ii / iii) เปลี่ยนเป็น **full-width numbered rows** แทน grid:
- แต่ละข้อเป็น row เต็มความกว้าง `grid-cols-[80px_1fr_2fr]` (roman numeral · EN heading · TH body)
- คั่นด้วย hairline
- Roman numeral ใหญ่ Cinnabar serif italic
- ให้ Process (6:3:1) คงเป็น 3-col grid อย่างเดิม → contrast ระหว่าง 2 sections ชัดขึ้น

**File:** `src/pages/Index.tsx` (manifestoPoints render block)

---

## 3. Demote Bundle Discount band เป็น ink-on-snow

Services มี Cinnabar full-bleed 2 อันใกล้กัน (Founder's Deal + Bundle Discount) → accent อิ่มตัว

**Change:** Bundle Discount เปลี่ยนเป็น:
- `bg-background` + `border-y border-foreground` (hairlines บนล่าง)
- Headline ink, italic "15% off, instantly." เป็น Cinnabar
- ปุ่ม "Get a Quote" เป็น ink button (`bg-foreground text-background`) hover Cinnabar
- เก็บ Cinnabar full-bleed ไว้แค่ Founder's Deal อันเดียว

**File:** `src/pages/Services.tsx`

---

## 4. Add-ons table polish

**Change:**
- ราคาเปลี่ยนจาก `font-mono text-[12px]` → `font-serif text-[20px] tabular-nums tracking-[-0.01em]` (ติด editorial feel เดียวกับชื่อ)
- Hover state: ลบ `hover:bg-surface`, เปลี่ยนเป็น Cinnabar underline ที่ชื่อ add-on (`group` + `group-hover:underline decoration-cinnabar`)
- เพิ่ม `tabular-nums` ที่ ราคา column ให้ตัวเลขเรียง

**File:** `src/pages/Services.tsx`

---

## 5. Index hero — ลบ `whitespace-nowrap` + ปรับ metrics row

- ลบ `whitespace-nowrap` จาก H1 "Stories, refined." (กัน overflow บน viewport แคบ)
- Metrics row (6:3:1 / Data-Refined / Industry Exclusivity) — ลด emphasis: ใช้ `font-mono text-[11px]` ทั้งหมด, ไม่ใช่ serif 26px → focal point กลับมาที่ headline เดียว

**File:** `src/pages/Index.tsx`

---

## Out of scope

- ไม่แตะ SelectedWorkReel swap (action #4 จาก review เดิม) — เก็บไว้รอบหน้าเพราะกระทบ Work page ด้วย
- ไม่แตะ navigation, routing, backend, content copy
- ไม่เพิ่ม dependencies

## Files touched

- `src/pages/Index.tsx`
- `src/pages/Services.tsx`
- `src/pages/HealthCheck.tsx`
- `src/pages/Work.tsx`
- `src/pages/About.tsx`
- `src/pages/Projects.tsx`
