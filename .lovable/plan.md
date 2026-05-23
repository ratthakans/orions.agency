## เป้าหมาย

นำ "ภาษาทางสายตา" ของ wearecollins.com — hero ตรงกลางเงียบสุดขั้ว, ระยะหายใจมหาศาล, แถวรางวัล/credentials เล็กจิ๋ว, แล้ว drop ลงสู่ full-bleed dark block — มาผสมกับระบบเดิม (Snow / Cinnabar / Newsreader / hairlines / mono labels) โดย **ไม่เปลี่ยน design tokens, ฟอนต์, หรือ palette** ใช้แค่ composition + rhythm

สโคป: เฉพาะหน้า `/` (`src/pages/Index.tsx`) เท่านั้น nav/footer/อื่น ๆ ไม่แตะ

---

## สิ่งที่ยืมจาก Collins (และวิธีแปลให้เป็น ØRIONS)

| Collins move | ทำใน ØRIONS อย่างไร |
|---|---|
| Hero เงียบ + headline ตรงกลางจอ + period จบประโยค | คง `Stories, refined.` ตรงกลาง แต่ **ตัด eyebrow + metrics row ออกจาก viewport แรก** ให้เหลือแค่ headline + sub สั้น ๆ — push metrics ลงไปเป็น section ถัดไป |
| ระยะ vertical หายใจมาก (headline ลอยกลางจอจริง ๆ) | `min-h-screen grid place-items-center`, ตัด `pt-32 pb-20`, ให้ headline อยู่ optical center |
| แถว "8x Agency of the Year" + laurels เล็กจิ๋ว | แทนด้วยแถว **credentials row** ใต้ headline: mono caption เล็ก ๆ ตามด้วย key facts ของ ØRIONS (เช่น `Est. 2026 · Bangkok` · `By invitation · Industry-exclusive` · `Refined, not scaled`) คั่นด้วย Cinnabar bullet — ไม่ใช้ laurel SVG (ไม่ใช่ภาษาเรา) |
| Drop ลงสู่ full-bleed dark hero ใต้ fold | เพิ่ม **section ที่ 2 เป็น Ink (#0e0e0e) full-bleed** วาง featured project ชิ้นเดียว (Hongmove) แบบ editorial: ภาพใหญ่ + ตัวเลข impact + serif italic caption — เป็น "drop" แบบ Collins |
| Hamburger + logo เท่านั้น (chrome เบามาก) | ของเดิมเป็นแบบนี้อยู่แล้ว — ไม่แตะ |
| Tiny mono caption + รางวัล/ปี | ใช้ mono labels เดิม (`font-mono text-[10px] tracking-[0.22em]`) คงระบบ "NN — Title" |

ส่วนที่เหลือของหน้า (Marquee, Manifesto, Selected Work grid, Services preview, Testimonials, Trusted by, CTA) **คงไว้ตามเดิม** — แค่ปรับ spacing ระหว่าง section ให้ generous ขึ้นเล็กน้อยเพื่อให้ rhythm สอดคล้องกับ hero ใหม่

---

## โครงหน้า `/` หลังปรับ

```text
┌─────────────────────────────────────────┐
│  [logo]                          [≡]    │  ← nav เดิม
│                                         │
│                                         │
│                                         │
│         Stories, refined.               │  ← headline เดียวกลางจอ
│                                         │     (ไม่มี eyebrow / metrics)
│   เราตัดส่วนเกิน สกัดเนื้อแท้ ...        │  ← sub สั้น 1 บรรทัด
│                                         │
│                                         │
│   Est. 2026 · Bangkok  ◐  By invitation │  ← credentials row (mono เล็ก)
│   ◐  Refined, not scaled                │
│                                         │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐  ← FULL-BLEED INK section ใหม่
│  01 — Featured                          │
│                                         │
│  [        Hongmove image (16:9)      ]  │
│                                         │
│  Hongmove.                  +312%       │
│  PropTech · Bangkok      Qualified leads│
│                                         │
│  → See the case                         │
└─────────────────────────────────────────┘
   ↓ marquee (เดิม)
   ↓ 6 : 3 : 1 metrics row (ย้ายมาที่นี่จาก hero)
   ↓ manifesto / work grid / services / testimonials / trusted / CTA (เดิม)
```

---

## รายละเอียดการแก้ (ไฟล์เดียว: `src/pages/Index.tsx`)

1. **Hero section** — ลดเหลือ:
   - ตัด eyebrow `Boutique Creative Studio · Est. 2026` ออกจาก hero
   - ตัด `6:3:1 / Data-Refined / Industry Exclusivity` metrics row ออกจาก hero
   - headline + sub paragraph สั้นลงเหลือ ~2 บรรทัด
   - เพิ่ม credentials row mono ใต้ sub
   - `min-h-screen grid place-items-center` แทน flex column

2. **เพิ่ม section ใหม่ "Featured" (Ink full-bleed)** ระหว่าง hero กับ marquee:
   - `bg-foreground text-background` (Ink #0e0e0e bg, Snow text)
   - mono label "01 — Featured"
   - ภาพ Hongmove 16:9 full-width-ish (max-w-[1400px])
   - serif title + Cinnabar impact number ขวา
   - link → `/work/hongmove` (หรือ `/work`)

3. **ย้าย metrics row** (`6:3:1 / Data-Refined / Industry Exclusivity`) ลงมาเป็น band เล็ก ๆ หลัง marquee พร้อม mono label "Operating principles"

4. **ปรับ vertical spacing** ระหว่าง sections: เพิ่ม `py-32 md:py-48` ให้ rhythm หายใจขึ้น (ของเดิมแน่นเกินสำหรับภาษานี้)

ไม่แตะ: tokens, fonts, nav, footer, other pages, copy หลัก

---

## สิ่งที่ "ไม่" ทำ (เพื่อกัน drift)

- ไม่ใส่ laurel SVG / award badges (ไม่ใช่ภาษา ØRIONS)
- ไม่เปลี่ยน palette / fonts / radius
- ไม่ทำ video bg / heavy motion
- ไม่ rework หน้าอื่นนอกจาก `/`

---

ถ้า OK กดอนุมัติเพื่อ implement หรือบอกได้ว่าอยากปรับส่วนไหน เช่น อยากให้ section "Featured" ใต้ hero ใช้รูปอื่น, อยากเก็บ metrics row ไว้ใน hero, หรืออยากให้ขยายไปหน้า `/work` ด้วย
