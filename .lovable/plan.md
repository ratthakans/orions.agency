## เป้าหมาย
ทำให้เว็บ ØRIONS รู้สึกเป็น **marketing agency** ที่เข้าถึงง่ายขึ้น (clear CTA, ชัดเจนว่าทำอะไร–ราคาเท่าไหร่–เริ่มยังไง) และตรวจให้ทุกหน้าพูดภาษาเดียวกัน ไม่ขัดกันเอง

## ปัญหาที่เจอตอน audit

**1. ความไม่สอดคล้องระหว่างหน้า (Index ↔ Services)**

| เรื่อง | Index (หน้าแรก) | Services | ปัญหา |
|---|---|---|---|
| ชื่อบริการ | Branding · Content · Social media | Brand · Film · Social | ใช้คำคนละชุด |
| Process | 4 ขั้น (Listen → Plan → Build → Run) | 6 ขั้น (Strategy → … → Optimize) | ตัวเลข/ชื่อขั้นไม่ตรง |
| Timeline promise | "live in **4 weeks**" | "live in **4–6 weeks**" | ตัวเลขขัดกัน |
| Positioning | "**boutique** creative agency" | "**Full-service** creative agency" | tone คนละทาง |
| ตัวเลข proof | 71% / 20% / 8s (market stats) | +3.2× / 40+ / 4–6wk (our outcomes) | คนละชุด ไม่เสริมกัน |
| Capability blocks | 3-col grid (compact) | Zigzag ใหญ่ + รูป grayscale | ซ้ำเนื้อหา 90% |

**2. Access / UX ที่ทำให้ลูกค้าตัดสินใจช้า**
- หน้าแรก**ไม่บอกราคา**เลย ต้องไปหน้า Services ถึงเห็น → เพิ่ม friction
- Nav ไม่มีลิงก์ตรงไป `#packages` หรือ "Pricing"
- CTA หลักทั้งเว็บใช้ "Work with us" / "Book a free audit" / "See packages" / "Book a call" — สี่แบบ ไม่ consistent
- Sticky CTA / WhatsApp / LINE ไม่มี (ตลาดไทย agency ส่วนใหญ่มี)
- Services hero ยาว ต้อง scroll 2 จอกว่าจะถึง pricing

**3. Marketing-agency feel ที่ขาด**
- ไม่มี "Get a free proposal/audit" form ลอยอยู่
- ไม่มี response-time promise ("ตอบใน 24 ชม.")
- ไม่มี trust signal บนหน้าแรกแบบเร็ว ๆ (logo bar เป็น text-only)
- ไม่มี outcome/case-result แบบตัวเลขในหน้าแรก (Index มีแต่ market stats — เป็น "ปัญหา" ไม่ใช่ "ผลของเรา")

---

## แผนแก้ — 3 ส่วน

### A · Unify ภาษา (1 source of truth)

```
Service names  →  Branding · Content · Social
Process        →  4 ขั้น (Listen · Plan · Build · Run) ทุกหน้า
Timeline       →  "Live in 4 weeks" ทุกที่
Positioning    →  "Boutique creative agency — Bangkok"
Primary CTA    →  "Get a free proposal" (เปลี่ยน "Book a free audit" / "Work with us" ทั้งหมด)
Secondary CTA  →  "See pricing →" (anchor /services#packages)
```

แก้ไฟล์: `Nav.tsx`, `Index.tsx`, `Services.tsx`, `About.tsx`, `Work.tsx`, `Contact.tsx`, `ClosingCTA.tsx`

### B · Access — ทำให้ติดต่อง่ายขึ้น

1. **Nav** เพิ่มเมนู `Pricing` (ลิงก์ `/services#packages`) ระหว่าง Services กับ Work
2. **Sticky bottom bar** (มือถือ) — `Get free proposal` + `LINE` 2 ปุ่ม fix bottom
3. **Index — เพิ่ม "Pricing teaser" section** ก่อน CTA ปิด: 3 tier ราคาแบบย่อ (29k / 59k / 119k) + ปุ่ม "See full breakdown →"
4. **Response promise** ใต้ทุก CTA หลัก: `"ตอบกลับใน 24 ชม. · ปรึกษาฟรี 30 นาที"`
5. **Contact** เพิ่ม WhatsApp / LINE / โทร แบบ 1-tap (ไม่ใช่แค่ form)

### C · Marketing-agency feel

1. **Index hero** เพิ่ม sub-line ที่ตอบ "ทำอะไร · ให้ใคร · ผลคืออะไร"
   ```
   We help boutique brands grow on social.
   Branding, content, paid ads — one team.
   → ตัวอย่างผล: +62% bookings · sold out 11 วัน · −41% CPA
   ```
2. **Outcomes bar ย้ายมา Index** (section ใหม่ระหว่าง testimonials กับ work):
   `+3.2×` reach lift · `40+` brands · `4 weeks` to live
3. **Services hero ย่อ** — ลด headline 3 บรรทัดเหลือ 1–2 บรรทัด + แสดง "เริ่มต้น 29,000 บาท/เดือน" ใต้ headline ทันที
4. **Packages section ขึ้นสูงขึ้น** ใน Services — ย้ายมาเป็น section 02 (หลัง hero) แทนที่จะอยู่ section 05 ลูกค้าเห็นราคาภายใน 1 scroll
5. **เพิ่ม "What you get in week 1"** card ใน Services — concrete, ลดความกลัวว่าจ่ายแล้วไม่รู้ได้อะไร
6. **Logo bar** ใน Index ใส่โลโก้จริง (เริ่มจาก hongmove ที่มีอยู่) แทน text-only

---

## โครง Services ใหม่ (จาก 6 → 5 sections)

```
01  HERO         1-line promise + ราคาเริ่มต้น + 2 CTA
02  PACKAGES     3 การ์ด (Pro กลาง) + accordion details   ← ย้ายขึ้น
03  WHAT WE DO   3 services (ใช้ชื่อเดียวกับ Index)
04  PROCESS      4 ขั้น (เหมือน Index, ขยายความ + week)   ← ลดจาก 6
05  FAQ + CTA    คงเดิม
```

ตัด: outcomes bar (ย้ายไป Index), zigzag image blocks ใหญ่ (ใช้ 3-col แบบ Index แทน), marquee ก่อน CTA ซ้ำกับ Nav announcement

## ไฟล์ที่จะแก้

```
src/components/Nav.tsx              + Pricing menu
src/components/StickyMobileCTA.tsx  + (ใหม่) bottom bar
src/components/ClosingCTA.tsx       unify CTA copy
src/pages/Index.tsx                 + outcomes bar, pricing teaser, real logos
src/pages/Services.tsx              ย้าย packages ขึ้น, ลด process เป็น 4, sync ชื่อ
src/pages/About.tsx                 sync ชื่อ service / CTA copy
src/pages/Work.tsx                  sync CTA copy
src/pages/Contact.tsx               + LINE/WhatsApp 1-tap
```

## Out of scope
- ไม่เปลี่ยนราคา, ไม่เปลี่ยน design system (font/สี/spacing tokens), ไม่เพิ่ม assets ใหม่นอกจากใช้โลโก้/รูปที่มีอยู่
- ไม่แตะ backend / form logic เดิม

---

**ขอยืนยัน 3 ข้อก่อนลงมือ:**
1. ใช้ **4-week timeline** (ตาม Index) หรือ **4–6 weeks** (ตาม Services) เป็นมาตรฐาน?
2. ชื่อบริการใช้ **Branding / Content / Social** (Index) หรือ **Brand / Film / Social** (Services)?
3. Primary CTA copy ใช้ `"Get a free proposal"` หรือคงไว้ที่ `"Book a free audit"`?
