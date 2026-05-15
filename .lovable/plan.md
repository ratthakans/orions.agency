# Redesign หน้าแรก — Clean Minimal (Klar-inspired)

แก้ไฟล์เดียว: `src/pages/Index.tsx`  
หลักการ: **เว้นวรรคเยอะขึ้น, ตัดของซ้ำซ้อน, รูปนำ, ตัวอักษรน้อยลง**

---

## 1) HERO — Split layout + mockup image

เปลี่ยนจาก hero แบบ centered บน background ดำ → **split 50/50** แบบ Klar

```
┌──────────────────────┬──────────────────────┐
│                      │  — BANGKOK · 2026    │
│                      │                      │
│   [B&W mockup        │  We don't just       │
│    portrait/team     │  shoot content,      │
│    image, full       │  we shape brands.    │
│    height]           │                      │
│                      │  ทีมเดียว ครบจบ      │
│                      │  ตั้งแต่ไอเดีย       │
│                      │  ถึง final cut.      │
│                      │                      │
└──────────────────────┴──────────────────────┘
   marquee bar (เดิม)
```

**Spec:**
- ซ้าย: รูป grayscale full-bleed (ใช้ `workHongmove` หรือ `workDemocrat` เป็น mockup ก่อน — comment บอกผู้ใช้ว่าเปลี่ยนเป็นรูปทีมจริงทีหลังได้)
- ขวา: cream background, ตัวหนังสือชิดซ้าย เว้นบนเยอะ
- **ตัด**: wordmark `ØRIONS` ขนาดยักษ์ออก (ไปอยู่ที่ Nav แล้ว), ตัด tagline `Boutique creative agency` (ซ้ำกับ headline)
- **ตัดปุ่ม** `ดูบริการของเรา` → แทนด้วย **quote เท่ๆ**:
  > *"We don't just shoot content,  
  > we shape brands."*  
  
  ใต้ quote เป็น Thai sub สั้นๆ: `ทีมเดียว ครบจบ ตั้งแต่ไอเดียถึง final cut.`
  
  ไม่มีปุ่ม CTA ใน hero — ให้ scroll ลงไปเจอเอง (Klar มีปุ่มเดียวเล็กๆ; เราจะเอา CTA หลักไปไว้ section สุดท้าย)
- Marquee bar เดิม คงไว้

## 2) WHAT WE DO — บางลง

- คงโครง editorial list 4 แถว
- **ตัด**: link `View all →` มุมบนขวา (รก, มี CTA หลักท้ายหน้าแล้ว)
- **ลดขนาด headline**: `h-display-sm` → `h-display-xs`
- เว้น padding section ลงเล็กน้อย (`py-20 md:py-28` → `py-24 md:py-32`)
- เอา accent gradient ที่ "ให้แบรนด์คุณ" ออก — Klar ใช้สีน้อยมาก, ให้ headline เป็นสีเดียว

## 3) SELECTED WORK — ลดข้อมูลในการ์ด

- คงโครง carousel + 5 cards
- **ตัดข้อมูลในการ์ด**: เอา overlay บนการ์ด (scope/impact/title bottom drawer) ออก — เหลือแค่รูปสะอาดๆ
- ใต้รูปเหลือแค่: **ชื่อโปรเจกต์** + **niche** (มีอยู่แล้ว) — ตัด overlay ตัวเลข `— 01 / NICHE` ทับรูปออก
- ตัด `accent` gradient ตรง impact (ไม่ใช้แล้ว เพราะตัด overlay)
- Hover: รูปจาก grayscale → color (คงไว้ — เท่และ minimal)

## 4) TRUSTED BY — เบาขึ้น

- **ตัด headline** `แบรนด์ที่เลือกเรา.` ออก — เหลือแค่ eyebrow `— TRUSTED BY` พอ (Klar ก็ใช้แบบนี้)
- ตัด border ของ grid ออก ให้เป็น logo ลอยๆ มี gap แทน
- ลด background contrast: เปลี่ยนจาก `bg-foreground text-background` → คง cream bg เหมือน section อื่น (ไม่สลับโทน, flow ลื่นกว่า)

## 5) CTA — เก็บไว้, simplify

- คงโครงเดิม (eyebrow + headline + sub + ปุ่ม)
- **ตัด accent gradient** ที่ `จบที่ final cut.` — เป็นสีเดียว
- คงปุ่ม `เริ่มคุยกับเรา` (เป็นปุ่มเดียวของหน้านี้แล้ว)

---

## สรุปสิ่งที่ตัดออก (ลดความรก)

- Hero: wordmark ยักษ์, tagline, ปุ่ม CTA → แทนด้วย **รูป + quote**
- Services: link "View all", accent gradient
- Work: overlay บนรูป (3 ชั้น: ตัวเลขมุมบน, drawer ล่าง)
- Trusted by: headline ไทย, border grid, dark section
- CTA: accent gradient

## สิ่งที่เพิ่ม

- รูป mockup grayscale ใน hero (ใช้ `workDemocrat` เป็น placeholder — ผู้ใช้เปลี่ยนเป็นรูปทีม/studio ทีหลังได้ง่าย)
- Quote เท่ๆ แทนปุ่ม
- Whitespace มากขึ้นทุก section

## ผลลัพธ์

หน้าจะมี **rhythm** แบบ Klar: รูปใหญ่นำ → quote → list สะอาด → grid งาน → logo wall เบา → CTA  
ตัวอักษรน้อยลง ~30%, สีเดียวตลอด, ไม่มี gradient, ไม่มี dark section สลับ
