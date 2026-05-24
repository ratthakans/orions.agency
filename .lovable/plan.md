# Design coherence pass — recheck & polish

จากการเทียบทุกหน้า (`Index`, `About`, `Services`, `Work`, `CaseStudy`, `HealthCheck`, `Projects`, `Contact`) — โครงสร้างไปทางเดียวกันแล้ว แต่มี **inconsistency เล็กๆ หลายจุด** ที่ทำให้ภาพรวมยังดูเหมือนเย็บปะมือ ไม่ใช่ระบบเดียว นี่คือสิ่งที่จะปรับ:

---

## 1. รวม Section Label เป็น component เดียว (ทั้งไซต์)

ตอนนี้ทุกหน้า inline JSX ซ้ำ ๆ:
```tsx
<div className="font-mono text-[10px] tracking-[0.22em] uppercase ..."><span className="block w-6 h-px bg-cinnabar" />NN — Title</div>
```
นับ ๆ แล้ว **≥ 25 ครั้ง** กระจาย Index/Services/Work/CaseStudy/Contact/HealthCheck/Projects และมี `SectionLabel` ใน About อยู่แล้ว แต่ใช้ที่เดียว

แก้: ย้าย `SectionLabel` ออกเป็น `src/components/SectionLabel.tsx` (รับ `index`, `label`, `tone: "ink"|"snow"`) แล้ว replace inline ทุกที่ → 1 source of truth, ง่ายต่อการปรับ tracking/spacing ทีเดียวทั้งไซต์

## 2. Standardize hairline weights

ตอนนี้ใช้ปนกัน: `border-foreground` (เต็ม), `border-foreground/20`, `border-foreground/15`, `border-soft`

แก้เป็นสามระดับชัดเจน:
- **Section break** (คั่นระหว่าง section ใหญ่ ๆ): `border-foreground` (full ink hairline)
- **Internal divider** (ในตาราง/การ์ด/list): `border-foreground/15`
- **Soft inset** (เส้นแบ่งในการ์ดเข้ม): `border-background/20`

ตรวจ Index ที่ใช้ `/15` ระหว่าง section หลัก → เปลี่ยนเป็น full ink ให้แมตช์ Work/Contact/CaseStudy

## 3. Hero แบบเดียวกันสำหรับ inner pages

ตอนนี้ inner pages (About, Services, Work, Contact, HealthCheck, CaseStudy, Projects) ต่างคน ต่าง markup แม้มี `PageHero` component แต่ไม่ได้ถูกใช้

แก้:
- เลิกใช้ `PageHero` เดิม (asymmetric ไม่เข้ากับ pattern ปัจจุบัน)
- สร้าง pattern ใหม่ผ่าน `SectionLabel` + headline + lead — ทุก inner page ใช้:
  ```
  pt-32 md:pt-40 pb-20 md:pb-28 max-w-[1280px] px-6 md:px-10
  SectionLabel "01" "Section Name"
  h1 mt-10 font-serif h-display-xl max-w-[18ch]
  lead p mt-10 font-serif italic text-[18-22px] muted (EN) | font-thai (TH)
  ```
- About + Projects ที่เป็น dark hero (`bg-foreground text-background`) ให้ใช้ `SectionLabel tone="snow"` ตรงกัน

## 4. ลด motion residue ที่ค้างอยู่

- `src/components/CTA.tsx` ยังห่อ `Magnetic` รอบ primary/invert variants — เอา Magnetic ออกทั้งหมด (เก็บ sweep underlay + arrow swap ไว้ — เป็น CSS transition, นิ่งกว่า)
- HealthCheck scale buttons: `-translate-y-0.5` + `scale-110` ตอน selected — เอาออก เหลือแค่ border-color + bg เปลี่ยน
- About `accent-dot` ใน Footer time ` ●` → ใส่สี `text-cinnabar` ให้เข้ากับ Status Bar

## 5. Index hero refinements

- บรรทัด chip "6:3:1 · Refined / Data-Refined / Industry Exclusivity" ใช้ `/` แบบ inline ดูแคบ → เปลี่ยนเป็น **3-col hairline grid** มี `border-l border-foreground/15` คั่น เหมือนตาราง meta strip ใน CaseStudy
- Marquee separator: เส้นแนวตั้ง 1px h-6 ดูบาง → เปลี่ยนเป็น **Cinnabar diamond `✦` ขนาด 14px** (สัญลักษณ์เดียวกับที่เคยใช้ + เป็นภาษาเดียวของแบรนด์)

## 6. About — รวม pattern card

ตอนนี้ About มี 3 grid pattern ติดกัน:
- Pillars: strip compact (small italic + small heading)
- Data: full cards (large italic + h3)
- Beyond: full cards (large italic + h3)

แก้: ทำ Pillars ให้เป็น full cards เหมือน Data/Beyond → grid เดียว 3 รูปแบบ ใช้ component ภายในเดียวกัน

## 7. Services 6:3:1 grid weight

`grid-cols-[6fr_3fr_1fr]` ทำให้ column "Hero" บีบมากจนตัวเลข `1` ดูไม่สมดุล

แก้เป็น `grid-cols-3` (3 col เท่ากัน) แต่ใส่ progress bar เส้น Cinnabar ใต้แต่ละ block ที่กว้าง 6/3/1 ของ container — แทนสัดส่วนด้วย hairline แทนความกว้าง column → อ่านง่ายขึ้น + ตัวเลขยังโดดเด่น

## 8. HealthCheck wizard

- Progress bar + Axis dots ซ้อนกัน → เหลือ **Axis dots อย่างเดียว** (6 segment, segment ปัจจุบันเป็น Cinnabar เต็ม, ที่ผ่านมาเป็น Cinnabar/50, ที่ยังไม่ถึงเป็น foreground/15)
- Scale buttons: ตัด sym `i. ii. iii. iv.` ออก (ซ้ำกับ roman ด้านล่าง) เหลือ `roman` italic + label
- Result page: Radial big number + Radar — รวมเข้า card เดียว ขอบ hairline ให้ดูเป็น "report card" จริง

## 9. Footer micro

- BKK status: `●` → `<span class="inline-block w-1.5 h-1.5 rounded-full bg-cinnabar" />` (สอดคล้องกับ Status Bar)
- Email headline italic Cinnabar hover — เปลี่ยนเป็น static underline hairline + Cinnabar text เมื่อ hover (เหมือนลิงก์อื่น)

## 10. Type scale sweep

ตรวจให้ headline ทุก hero ใช้ `h-display-xl` (ไม่ใช่ `h-display-lg`) → HealthCheck H1 ปัจจุบันใช้ `h-display-lg` แก้เป็น `xl`

Sub-section h2 ใช้ `h-display-lg` หรือ `h-display-md` — เลือกตาม weight ของ section

---

## Files ที่จะแก้

- **สร้าง**: `src/components/SectionLabel.tsx`
- **แก้**: `src/pages/Index.tsx`, `src/pages/About.tsx`, `src/pages/Services.tsx`, `src/pages/Work.tsx`, `src/pages/CaseStudy.tsx`, `src/pages/Contact.tsx`, `src/pages/HealthCheck.tsx`, `src/pages/Projects.tsx`, `src/components/CTA.tsx`, `src/components/Footer.tsx`
- **ลบไม่ใช้** (ทิ้ง import แต่เก็บไฟล์): `PageHero` ไม่ได้ถูก import ที่ไหน

ผลลัพธ์: ทั้งไซต์ใช้ pattern เดียว, hairline เป็นระบบ 3 ระดับ, motion ที่เหลือเป็น CSS transitions ล้วน (สงบ), Cinnabar accent ใช้ในตำแหน่งเดียวกันทุกที่ (label rule, dots, italic accent, hover) → เป็น editorial system ที่ดูเหมือนทำคน ๆ เดียว
