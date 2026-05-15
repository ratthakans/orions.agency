
## Goal

หน้า `/pricing` → **ชัด · สะอาด · อ่านราคาได้ใน 5 วินาที**.
รวมราคาทั้งหมดของ ØRIONS ไว้ที่หน้านี้หน้าเดียว ตัดคำบรรยายที่ไม่จำเป็นออก.

## ราคาทั้งหมดที่มีอยู่ (สรุป)

| Item | Price | ที่อยู่ปัจจุบัน |
|---|---|---|
| Starter | 29,000 / เดือน | Pricing + Index (ซ้ำ) |
| Pro | 59,000 / เดือน | Pricing + Index (ซ้ำ) |
| Elite | 119,000 / เดือน | Pricing + Index (ซ้ำ) |
| Ads Management Add-on | 3,500 / เดือน | ซ่อนใน Starter details |
| Raw Files Delivery | 15,000 / เดือนของงาน | ซ่อนใน FAQ |

## Plan

### A · `Pricing.tsx` — ตัดให้สะอาด

**Hero (01)**
- เก็บ heading `Pricing.` (italic, sunset ink) เท่าเดิม
- ลบ tagline ยาว "Branding · Content · Social — one team, one monthly retainer..." → เหลือบรรทัดเดียว: *"Monthly retainer · เริ่มต้น 29,000 บาท / เดือน"*
- ลบบรรทัด "↳ ตอบกลับใน 24 ชม. · ปรึกษาฟรี 30 นาที" (ย้ายไปอยู่ใต้ปุ่ม Contact ที่หน้า Contact อยู่แล้ว)
- เก็บ 2 ปุ่ม: `See packages` + `Get a free proposal`

**Packages (02)**
- ลบ heading ใหญ่ "Pick yours in 30 seconds." + sub "→ ไม่แน่ใจ? เริ่มที่ Pro..."
- ใช้แค่ heading สั้น: *"Packages."* (ตามจังหวะ Pricing. / Add-ons. / FAQ.)
- ลบ "VALID 30 DAYS" mark (vanity)
- **Card cleanup** — ตัดสิ่งที่ไม่ใช่ราคา/ระยะสัญญา/highlights:
  - ลบ `tagline` italic ("ทดลองได้ ไม่ผูกมัด...", "Most Popular — คุ้มที่สุด...", "Full Premium Service...")
  - ลบ block "Best for ·" (ซ้ำกับ highlight แรก ๆ)
  - เก็บ: badge / name / **price ใหญ่** / contract / highlights 4 บรรทัด / ปุ่ม Book a call
- ลบบรรทัด "All packages include — Strategy · In-house production..." (ย้ายเป็น 1 แถว hairline เล็ก ๆ ใต้ตาราง add-ons แทน)

**Add-ons (03 — ใหม่)**
- Heading: *"Add-ons."*
- ตารางเส้น hairline เรียบ ๆ 3 คอลัมน์: ชื่อ · note สั้น · ราคา (`tabular-nums`, sunset ink)

  ```text
  Ads Management (Starter)        ≤ 30k budget               3,500   THB / mo
  Raw Files Delivery              footage + source           15,000  THB / mo
  Extra Production Day            +1 day, full crew          on request
  Extra Platform                  +1 platform                on request
  Rush Turnaround (48h)           outside calendar           on request
  ```
- บรรทัดเดียวใต้ตาราง: *"Pro / Elite include Ads Management (≤ 50k / ≤ 100k)."*
- ลบบรรทัด "All packages include..." มารวมเป็นแถวสุดท้ายของตารางนี้แทน → *"All packages include — Strategy · Production · Monthly report · 24h response"*

**Package Details accordion**
- ลบทั้ง block "— PACKAGE DETAILS" accordion (ข้อมูลซ้ำกับ highlights + add-ons แล้ว และเป็นต้นเหตุของความรกหลัก)
- ถ้าต้องการรายละเอียด → ผู้ใช้กด `Book a call` หรือไปหน้า Contact

**FAQ (04)**
- เก็บไว้แต่ลดจาก 6 → 4 ข้อสำคัญ: ผลลัพธ์เห็นเมื่อไหร่ / Raw files / ปรับแพ็กเกจ / Setup fee
- ลบข้อ "ใครเป็นผู้โพสต์" + "ถ้าผลลัพธ์ไม่เป็นไปตามที่คาด" (รายละเอียดควรอยู่ในการคุย ไม่ใช่หน้า pricing)
- อัปเดต `PageMark total` → `04`

### B · `Index.tsx` — ลบบล็อกราคาซ้ำ

- ลบ `pricingTiers` array (บรรทัด 112–116)
- Section 09 PRICING TEASER → ย่อให้เหลือ:
  - Heading `Pricing.`
  - บรรทัดเดียว: *"3 packages · เริ่มต้น 29,000 บาท / เดือน"*
  - ปุ่ม `See full pricing →` ไป `/pricing`
- ไม่มีตัวเลข tier 3 ตัวที่หน้า Home อีกต่อไป

### Files

- **Edit** `src/pages/Pricing.tsx` — ตัด tagline, ตัด "Best for", ตัด details accordion, เพิ่ม Add-ons table, ลด FAQ เหลือ 4 ข้อ, อัปเดต `PageMark total="04"`
- **Edit** `src/pages/Index.tsx` — ย่อ section 09, ลบ `pricingTiers`

### Out of scope

- ไม่แก้ราคาจริง (29k / 59k / 119k / 3.5k / 15k คงเดิม)
- ไม่แตะ design system / typography / palette / components
- ไม่แตะ Services, About, Work, Footer, Nav
