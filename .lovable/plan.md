## A) About — ลดความซ้ำซ้อนและความยาว

**Diagnosis:** หน้า About ปัจจุบันยาว 7 sections (~341 บรรทัด). มี 2 จุดซ้ำซ้อนกับ Index ชัดเจน + 1 จุดซ้ำในตัวเอง:

| # | Section | สถานะ | เหตุผล |
|---|---------|------|-------|
| 01 | Manifesto + 3 Pains | **เก็บ** | unique, ลึกกว่า Index |
| — | Big quote "ตัดส่วนเกิน · สกัดเนื้อแท้ · กลั่นกรองเรื่องราว" | **ตัดทิ้ง** | ซ้ำกับ Manifesto i/ii/iii ของ Index แบบคำต่อคำ |
| 02 | Our Promise | **เก็บ** | unique |
| 03 | Three Pillars (Craft/Strategy/Story) | **ยุบรวมเข้า 04** | concept ทับกับ Data-Refined + ทำให้ flow ช้า |
| 04 | Data-Refined Creative | **เก็บ + ขยาย** | รับ Pillars เข้ามาเป็น sub-layer |
| 05 | The System 6:3:1 | **ตัดเหลือ inline reference** | section นี้มีอยู่บน Index (Process) แล้ว — เก็บไว้แค่บรรทัดเดียว + ลิงก์ |
| 06 | Beyond Content | **เก็บ** | unique |
| 07 | Our Team | **เก็บ** | unique |
| — | CTA ปิด | **เก็บ** | |

**ผลลัพธ์:** จาก 7 sections → **5 sections** (Manifesto · Promise · Data+Pillars · Beyond · Team). สั้นลง ~30%, ไม่มี content ที่ผู้ใช้เคยอ่านบน Index ซ้ำอีก.

**รายละเอียดการรวม Pillars → Data:**
ทำเป็น 2-tier layout ใน section เดียว — ด้านบน 3 pillars (Craft/Strategy/Story) เป็นแถบสั้น (icon + heading only, ไม่มี body), ด้านล่าง 3 data steps (ฟังคน/ฟังตลาด/ฟังตัวเลข) เป็น cards เต็มแบบเดิม. Header เปลี่ยนเป็น "How We Refine" รวม 2 ชั้นเข้าด้วยกัน.

---

## B) Services — ตัด "Find Your Tier" + เติม detail ใน packages

**B1. ตัด section 02 "Find Your Tier" ออก**
ลบทั้ง block (◐เริ่มต้น / ◑กำลังเติบโต / ◒เป็นที่รู้จัก + CTA Diagnostic). เหตุผล: หน้า Diagnostic มี diagnostic flow ที่ทำหน้าที่นี้ดีกว่า + ลด redundancy. Renumber section ที่เหลือ: **01 Packages · 02 Add-ons** (เดิม 03).

**B2. เติมรายละเอียดให้ทุก package**
ขยาย card แต่ละ tier เพิ่ม sub-groups ใหม่ ใต้ features list:

```
[ Tier + Name + Tagline + Price ]
[ INCLUDES — 7-8 bullets เดิม ]
+ [ DELIVERABLES / MONTH — สรุปจำนวนชิ้นเป็นตาราง compact ]
   เช่น  Reels 6 · Static 3 · Hero 1 · Stories 6 · Photos 6
+ [ PRODUCTION — ทีม + วันถ่าย + อุปกรณ์ ]
   เช่น  1 production day · 2-person crew · Sony A7V
+ [ STRATEGY & DATA — insight layer ]
   เช่น  Monthly Insight Snapshot · 3 competitors tracked
+ [ REPORTING — what you receive ]
   เช่น  Monthly performance report · 1 platform + cross-post
+ [ BEST FOR — 1 บรรทัดบอก fit ]
   เช่น  Brands launching their refined voice (0-10k followers)
```

แต่ละ sub-group ใช้ mono label เล็ก (`text-[10px] tracking-[0.22em] uppercase text-cinnabar`) + hairline divider ระหว่างกลุ่ม. รักษา editorial feel — ไม่ใช่ comparison table.

**B3. เพิ่ม comparison strip ใต้ packages (optional addition)**
mini-table 1 แถวเทียบ 3 tiers แบบ at-a-glance: Loops/mo · Production Days · Team Size · Strategy Layer. ช่วย scan โดยไม่ต้องอ่าน 3 cards ละเอียด.

---

## Files touched

- `src/pages/About.tsx` — ลบ big quote band, ลบ section 03 Three Pillars (ย้าย 3 pillar headings เข้า 04), ลบ section 05 The System (เหลือ inline reference + link to "/", "/services"), renumber 01→02→03→04→05
- `src/pages/Services.tsx` — ลบ "Find Your Tier" section + tiers array, เพิ่ม deliverables/production/strategy/reporting/bestFor fields ใน packages array, ขยาย card markup, เพิ่ม mini comparison strip, renumber 01→02

## Out of scope
- Copy rewrite อื่น
- Pricing change
- Add-ons / Bundle discount blocks
- Routing, backend, animation, layout system
