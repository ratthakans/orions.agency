
# ทบทวนทั้งไซต์ → ดันให้เป็น Boutique Creative + Data ชัดขึ้น

## A) Link & Flow Audit — สิ่งที่ต้องแก้ก่อนเลย (ความไม่ตรงกัน)

ตรวจครบ 7 หน้า, Nav, Footer, Redirects แล้ว — routing สะอาด (`/manifesto /approach /health-check /ventures` redirect ถูก). พบความไม่ตรงกัน:

1. **ตัวเลข brand counts ไม่ตรง**
   - Index footer label: "18 brands refined"
   - Work hero: "40+ brands"
   - About: "15 people" (ตรงกับ array) ✓
   → ตั้งตัวเลขเดียวทั้งไซต์ (เสนอ: "20+ brands · since 2020")

2. **Diagnostic เวลา/จำนวนคำถามไม่ตรง**
   - HealthCheck SEO: "18 questions" · ใน UI: "3 นาที"
   - Index teaser: "5 minutes" + "18 คำถาม"
   - Comment ในไฟล์เขียน "2 questions each = 12" (จริง 3×6=18)
   → ใช้ "18 คำถาม · 3 นาที" ทุกที่ + แก้ comment

3. **Trusted-by lists คนละชุด**
   - Index: ชื่อไทย/แบรนด์จริง (Hongmove, RTAF, SCG, AIS…)
   - Work: ชื่อ fictional ฝรั่ง (Maison Lumière, Saint Manor…)
   → รวมเป็นชุดเดียว (ใช้ของ Work ที่มี logo Hongmove + เพิ่มแบรนด์จริงจาก Index ที่มีงานจริง)

4. **Sample diagnostic preview บน Index ใช้แกนผิด**
   - Index แสดง: Clarity / Consistency / Craft / **Conversion**
   - จริงมี 6 แกน: Clarity / Consistency / **Data** / Craft / **Audience** / **Strategy**
   → แก้ให้ตรง

5. **ClosingCTA ใช้แค่หน้า Work** — About, Services, Projects, HealthCheck มี CTA แบบ ad-hoc คนละทรง
   → ใช้ `<ClosingCTA>` ทุกหน้าปลาย เพื่อ rhythm ที่ consistent

6. **Selected Work cards (Index + Work)** ลิงก์ไป `/work` ทั้งหมด — ยังไม่มี case-study page จริง. ตอนนี้ให้ลบ `<Link>` ออก (ทำเป็น card นิ่ง + "Case study Q3 2026") กันการคลิกที่ไม่ไปไหน

7. **About CTA section** มี `mt-24` ซ้อนใน `py-20 md:py-28` → เกิด whitespace ตายๆ. ลบ `mt-24` ออก

8. **Contact submit button** ยังใช้ `hover:bg-orion` (legacy). เปลี่ยนเป็น `hover:bg-cinnabar`

---

## B) Boutique Creative × Data — ลูกเล่นที่จะเพิ่ม

ทั้งหมดอยู่ใน design language เดิม (hairline, mono labels, cinnabar accent, zero-radius) — ไม่แตกแถว.

### B1. Studio Status Bar (boutique signal, อยู่ทุกหน้า)
แถบเตี้ยๆ ใต้ nav (h-8, mono 10px) ที่บอก:
```
● LIVE · BKK 14:23 ICT · ON SET — Hongmove S2 · NEXT SLOT — Aug 2026 · 2/3 LOOPS FREE
```
ใช้ `useEffect` อัปเดตเวลาทุกนาที. ใช้ `mix-blend-difference` หรือ pin ใต้ nav. มี component `StudioStatusBar.tsx` อยู่แล้ว — แค่ wire เข้า Layout

### B2. Work card hover = data reveal
- Default: ภาพ grayscale + ชื่อ
- Hover: ภาพคืนสี + เผยแถบ data 3 ตัว (impact / niche / scope) ที่ animate เลื่อนขึ้นจากขอบล่าง (CSS translate, ไม่ใช้ JS)
- เพิ่ม CountUp ที่ตัวเลข impact เมื่อ in-view (component มีอยู่)

### B3. หน้า Diagnostic ผลลัพธ์ — Radar/Polar SVG
ปัจจุบันแสดง bar chart 6 แกน. เพิ่ม **radar chart SVG เล็กๆ** ข้างคะแนนรวม → สื่อ "data agency" ทันที. radar เป็น hairline + เติม cinnabar 30% opacity

### B4. Index hero — Kinetic Wordmark
ใต้ headline "Stories, refined." เพิ่ม wordmark "ØRIONS" ขนาดใหญ่ที่ขยับแบบ marquee ช้าๆ (component `KineticWordmark` มีอยู่แล้ว) แทน marquee คำธรรมดา หรือใช้คู่กัน

### B5. Counter strip (creative + data signal)
หลัง Selected Work แทรกแถบเตี้ยๆ ใช้ CountUp:
```
20+ brands refined  ·  ◐ 6:3:1 system  ·  +312% avg lift  ·  18 months in market
```
hairline borders, tabular nums

### B6. Cursor-following cinnabar dot (subtle, desktop only)
6px cinnabar dot ตาม cursor บน hero sections เท่านั้น (มี `prefers-reduced-motion` guard). เพิ่ม weight ของ boutique มากๆ

### B7. "Now Refining" — editorial list ในหน้า About
มี section เล็กๆ คล้าย record-shop list:
```
NOW REFINING
01  Hongmove        — Brand campaign · S2
02  Khaoyai CC      — Lifestyle film
03  GCOO            — Launch loop
```
สื่อ transparency + studio feel

### B8. Services — interactive 6:3:1 visualizer
เหนือตาราง 3 tiers เพิ่ม block: bar split 6/3/1 ที่ hover แต่ละช่องแล้วเผยคำอธิบาย. ใช้ CSS hover, ไม่ต้อง state

### B9. Footer expansion (boutique trust)
ตอนนี้ footer แค่ email + nav. เพิ่ม:
- studio address (จาก Contact)
- "Reply within 24h · Mon–Fri"
- tax ID (จาก memory: company info)
- Bangkok time live
- จัด 3 columns: Contact / Studio / Index

### B10. Editorial pull-quotes
ใน Index และ About แทรก pull-quote ตัวใหญ่ระหว่าง section (serif italic 64px) เช่น:
> "We don't produce to fill a feed. We refine until it earns its place."

---

## C) Scope ของ build ครั้งนี้

แก้ทั้งหมดของ A (8 จุด) + เลือกทำ B1, B2, B3, B5, B8, B9 (impact สูง, risk ต่ำ).
**เลื่อนไว้รอบหน้า:** B4 kinetic wordmark, B6 cursor dot, B7 now-refining, B10 pull-quotes (ต้องเลือก copy เพิ่ม).

## ไฟล์ที่จะแก้
- `src/components/Layout.tsx` — wire StudioStatusBar
- `src/components/StudioStatusBar.tsx` — เขียนเนื้อจริง (live time + slot)
- `src/components/Footer.tsx` — expand 3 columns
- `src/pages/Index.tsx` — fix sample radar axes, counter strip, unify trustedBy + counts, ลบ link ออกจาก work cards, แก้ "5 min"→"3 min"
- `src/pages/Work.tsx` — unify trustedBy + count, ลบ link ที่ค้าง, hover data reveal
- `src/pages/About.tsx` — ลบ mt-24, ใช้ ClosingCTA
- `src/pages/Services.tsx` — 6:3:1 visualizer, ใช้ ClosingCTA
- `src/pages/Projects.tsx` — ใช้ ClosingCTA
- `src/pages/HealthCheck.tsx` — radar SVG + fix comment + ใช้ ClosingCTA
- `src/pages/Contact.tsx` — `bg-orion`→`bg-cinnabar`

## Out of scope
- เปลี่ยน palette/font/route
- Case study detail page (ยัง mock)
- Backend / form schema
- รูปจริงของทีม

