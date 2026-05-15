## เป้าหมาย
ปรับ hero scale ให้ **โดดเด่นกว่าเดิม** + วาง type system ให้ทุก section consistent

---

## Type scale ใหม่ (ratio ~1.333 perfect fourth)

| Token | Mobile | md | lg | Use |
|---|---|---|---|---|
| `h1-hero` | 56px | 104px | **136px** | Hero H1 เท่านั้น |
| `h2-section` | 40px | 64px | **80px** | H2 ทุก section (เดิม 96–104) |
| `h3-card` | 28px | 36px | 40px | service title, process step |
| `lead` | 18px | 20px | 22px | subtitle ใต้ H1 hero |
| `body` | 14px | 15px | 16px | paragraph |
| `label` | 10px | — | 11px | mono labels |

Hero H1 / H2 = **1.7×** → hierarchy ชัดเจน

---

## ไฟล์ที่แก้

### 1) `src/pages/Index.tsx`
- **Hero H1** `text-[44px] md:text-[88px] lg:text-[112px]` → `text-[56px] md:text-[104px] lg:text-[136px]` + `max-w-[14ch]` ขยายเล็กน้อย
- **Hero subtitle** `text-[15px] md:text-[18px]` → `text-[18px] md:text-[22px]` + `max-w-[600px]`
- **H2 ทุก section** ปรับเป็นมาตรฐานเดียว `text-[40px] md:text-[64px] lg:text-[80px]` (เดิมมีทั้ง 96/104)
- ระยะห่างระหว่าง H1 → subtitle: `mt-6 md:mt-8` → `mt-8 md:mt-10`
- ระยะห่าง subtitle → CTA: `mt-10` → `mt-12 md:mt-14`

### 2) `src/pages/Services.tsx` `About.tsx` `Work.tsx` `Pricing.tsx` `Contact.tsx`
- **H1 hero ทุกหน้า** ใช้ขนาดเดียวกัน: `text-[52px] md:text-[88px] lg:text-[112px]` (เล็กกว่า home hero นิด เพราะ home คือหน้าหลัก)
- **H2 section** มาตรฐานเดียวกับ Index: `text-[40px] md:text-[64px] lg:text-[80px]`

### 3) `src/components/ClosingCTA.tsx`
- H2 ใหญ่ปรับเป็น `text-[44px] md:text-[72px] lg:text-[96px]` (closing CTA ใหญ่กว่า section ปกติเล็กน้อย แต่ยังเล็กกว่า hero)

---

## สิ่งที่ **ไม่** เปลี่ยน
- Font (Instrument Serif italic accent คงเดิม)
- Color, layout, spacing structure อื่นๆ
- Copy
