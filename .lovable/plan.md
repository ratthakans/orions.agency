

## Site-wide Audit — สิ่งที่หลุด tone & แผนแก้

ตรวจครบ 6 หน้า (Index, Services, Work, About, Contact, NotFound) + Footer/Nav แล้ว นี่คือ inconsistencies ที่เจอ **เรียงตามความรุนแรง**

---

### 🔴 Critical — ต้องแก้

#### 1. Email/Phone ไม่ตรงกันทั่วเว็บ
- **About** CTA: `hello@orions.co` · `+66 (0) 00 000 0000` (placeholder!)
- **Contact**: `hello@orions.agency` · `+66 92 390 5464`
- **Footer**: `hello@orions.agency` · `+66 92 390 5464`
- **แก้**: About → ใช้ `hello@orions.agency` + `+66 92 390 5464` ให้ตรงกับ Contact/Footer

#### 2. About — `import SectionHeader` แต่ไม่ได้ใช้
- เคย refactor แล้วลืมลบ → unused import ใน 6 METHODS section ใช้ `<div>` เอง ไม่ใช้ SectionHeader → **inconsistent กับหน้าอื่น** (Index/Work ใช้ SectionHeader)
- **แก้**: เปลี่ยน 6 METHODS และ TEAM ใน About ให้ใช้ `<SectionHeader>` component (consistent กับ Index/Work)

#### 3. Hero structure ไม่สอดคล้องกัน
- **About**: ใช้ `PageHero` + custom meta strip + scroll cue
- **Services / Work / Contact**: ใช้ `PageHero` เปล่าๆ
- **Index**: hero เอง (custom)
- **แก้**: ลบ meta strip + scroll cue ออกจาก About hero (มันเป็น one-off ที่หน้าอื่นไม่มี) → เก็บแค่ `PageHero` ธรรมดาให้เหมือน Services/Work/Contact

---

### 🟡 Moderate — tone หลุด

#### 4. Services CTA — โครงสร้าง grid แปลก
- ใช้ `mt-12 grid grid-cols-1 md:grid-cols-12` แต่มีแค่ `md:col-span-8` อันเดียว → grid ไม่จำเป็น, มี `mt-12` ติดมาจาก paste ที่ลืมลบ
- ไม่มี `border-t border-foreground` separator เหมือนหน้าอื่น → CTA ลอย ไม่มี anchor
- **แก้**: เพิ่ม `border-t border-foreground`, ลบ grid wrapper เหลือ container ปกติ, เพิ่ม email/tel hairline footer style เหมือน About CTA (คงทรง centered/calm)

#### 5. Work CTA — minimal เกินไป
- มีแค่ heading + button → เทียบกับ Index/About CTA ที่มี hairline + secondary action → ดู "ขาด"
- **แก้**: เพิ่ม `READY WHEN YOU ARE` eyebrow + secondary CTA (`Or request the audit →`) ให้ matched กับ Index closing pattern

#### 6. About — มี `MANIFESTO · 01` badge ขวาบน แต่ section อื่นไม่มี numbering แบบนี้
- ขัดกับ user request เดิมที่ขอเอา "UNTIL SOMEONE DRAWS THE LINE" ออก → badge นี้ก็ตระกูลเดียวกัน รก
- **แก้**: ลบ `MANIFESTO · 01` badge ออก เหลือแค่ `THE MEANING OF THE LINE`

#### 7. About hero — `SCROLL` cue ซ้ำซ้อนกับหน้า Index
- Index มี SCROLL cue กลางล่าง, About มีอันที่มุมขวาล่าง → คนละ pattern → confusing
- **แก้**: ลบออก (cleanup ตามข้อ 3)

---

### 🟢 Minor — polish

#### 8. Contact — `DIRECT` label vs Footer ใช้ `Reach`
- Inconsistent — เลือกอันเดียว
- **แก้**: Contact ใช้ `DIRECT LINE` (เก็บไว้ — ชัดเจนกว่า), Footer คงไว้ ok

#### 9. About TEAM heading — `8 PEOPLE · 1 MISSION · NO HANDOFF` 
- ใช้ inline number `08` ใหญ่กับ mono caption — ok แต่ duplicate กับ `${team.length} PEOPLE` ในเดิม
- แก้: เก็บไว้ ดี — แค่ตรวจ alignment

#### 10. Index hero — `BANGKOK · 2019—` ใน rotating headline
- About meta strip บอก `EST. 2014` (ก่อนเอาออก) → ปีไม่ตรง
- **แก้**: เลือก year เดียว — ปัจจุบัน About จะถูกลบ meta strip → ใช้ `2019—` ใน Index เป็น source of truth (หรือ user confirm year ที่ถูก)

---

### แผนแก้ — 3 รอบ

**Round 1 (critical, 5 นาที)**
- About: แก้ email/tel ให้ตรง (`hello@orions.agency`, `+66 92 390 5464`)
- About: ลบ meta strip + scroll cue ออกจาก hero
- About: ลบ `MANIFESTO · 01` badge
- About: ลบ unused `SectionHeader` import หรือใช้จริงใน 6 METHODS/TEAM

**Round 2 (consistency, 5 นาที)**
- Services CTA: เพิ่ม `border-t`, simplify grid, เพิ่ม contact line เหมือน About
- Work CTA: เพิ่ม eyebrow + secondary CTA pattern เหมือน Index closing

**Round 3 (optional)**
- ตรวจ year `2019—` vs `2014` — ขอ user confirm

### Files
- `src/pages/About.tsx` — Rounds 1
- `src/pages/Services.tsx` — Round 2
- `src/pages/Work.tsx` — Round 2

### คำถาม
- ปีก่อตั้ง ØRIONS คือ **2014** หรือ **2019**? (เจอทั้ง 2 ในเว็บ)
- จะให้ทำทั้ง 3 รอบรวดเดียว หรือเลือกเฉพาะ Round 1 (critical) ก่อน?

