# Design unification pass

เป้าหมาย: ให้ทุกหน้าใช้ design system เดียวกัน (Snow / Black Russian / Cinnabar · Inter / Newsreader / IBM Plex Mono), แก้ marquee ที่กระตุก, ตัดสัญลักษณ์วงกลมแบ่งครึ่ง (◐ ◑ ◒) ออกทั้งหมด, และลดแอนิเมชั่นให้สงบขึ้นเพื่อความเป็น editorial boutique.

---

## 1. แก้ marquee bug (หน้าแรก)

ปัญหา: `src/pages/Index.tsx` ใช้ track ที่ duplicate items **4 รอบ** แต่ keyframe `marquee` เลื่อนแค่ `-50%` → ทำให้ loop กระโดด/ค้าง

แก้:
- ใช้คอมโพเนนต์ `SimpleMarquee` ที่มีอยู่แล้ว (มี logic seamless ถูกต้อง) แทน inline marquee
- หรือ inline แต่ duplicate items แค่ 2 รอบให้แมตช์กับ `-50%`
- ลบสัญลักษณ์ `◐` ที่คั่นระหว่างคำในแถบ marquee, เปลี่ยนเป็น hairline dot `·` หรือเส้น vertical hairline แทน

## 2. ลบสัญลักษณ์วงกลมแบ่งครึ่ง (◐ ◑ ◒) ออกทุกที่

ใช้อยู่ใน:
- `src/pages/Index.tsx` — marquee, services preview tier, "Live preview" badge
- `src/pages/Services.tsx` — tier labels (`◐ Starter`, `◑ Pro`, `◒ Elite`)
- `src/pages/About.tsx`
- `src/pages/HealthCheck.tsx`

แทนที่ด้วยระบบที่นิ่งและสอดคล้องกัน:
- Tier marker = **เลขโรมัน italic Cinnabar** (`i.` `ii.` `iii.`) ที่ใช้อยู่แล้วใน Manifesto/Diagnostic — ทำให้ทั้งไซต์มีภาษาสัญลักษณ์เดียว
- แทน "Live preview ◐" → "Live preview" เฉยๆ หรือ hairline dot `·`
- Marquee separator → hairline vertical `|` ใน opacity ต่ำ หรือไม่ใส่อะไรเลย ใช้ gap เป็นตัวคั่น

## 3. ลดแอนิเมชั่น (calmer boutique register)

ตัด/ลด:
- `KineticWordmark` — ตัด 3D parallax tilt บน mouse move และตัด Ø orbit rotation ทิ้ง เหลือเพียง **staggered mask-up reveal ครั้งเดียว** ตอนโหลด (ทำงานครั้งเดียว ไม่มี loop)
- `StudioStatusBar` — เอา `animate-pulse` ที่จุด status และ caret `|` ออก เหลือ static dot
- `Magnetic` wrapper รอบ CTA buttons — เอาออก, ใช้ hover color transition แทน
- `PageTransition` — ลด duration จาก 900ms → 500ms, ตัด skew, ใช้ simple fade/slide แบบสงบ
- `Reveal` — ลด `y` จาก 24 → 12, duration 0.7s → 0.5s, ตัด delay chains ที่ซ้อนเกิน 0.2s
- ลบ `RotatingHeadline`, `TypingLoop`, `ScrollMarquee`, `FlipNumber`, `KineticWordmark` ออกจาก imports ของหน้าที่ใช้อยู่ ถ้าไม่ได้ใช้แล้ว (เก็บไฟล์ไว้แต่ไม่ import)
- หน้าแรก: แทน `KineticWordmark` ด้วย **static wordmark** "ØRIONS" ขนาดใหญ่ที่เปิดด้วย mask-up reveal ครั้งเดียว
- ตัด `hover:scale-[1.04]` บน work cards → เหลือแค่ `grayscale → grayscale-0` (subtler)
- ตัด `mix-blend-difference`, gradient overlay, progress bar slide ใน `MusicMarquee` ให้เหลือ image + ขอบ hairline + play icon นิ่งๆ

## 4. Design token / typography sweep

- Audit ทุกหน้า: ตรวจให้ทุก heading ใช้ `font-serif` (Newsreader), ทุก label/meta ใช้ `font-mono text-[10px] tracking-[0.22em] uppercase`, ทุก body ใช้ `font-thai` หรือ Inter ตามภาษา
- ตรวจ tier card ใน Services ให้ใช้ **layout เดียวกับ services preview ในหน้าแรก** (border hairline, padding เท่ากัน, ไม่มีสัญลักษณ์)
- รวม section label pattern เดียว: `<span className="w-6 h-px bg-cinnabar" /> NN — Title` ทุกที่
- ตรวจ button: primary = `bg-cinnabar text-background`, secondary = underline hairline `border-b border-foreground`
- ลบ `bg-gradient-*`, shadow, rounded ที่หลงเหลือ (ถ้ามี)
- เช็คว่า `text-orion` / `text-gemini` (legacy) ที่ map → cinnabar ถูก replace เป็น `text-cinnabar` ตรงๆ ในไฟล์หลัก เพื่อความชัด

## 5. QA flow

- เปิดทุก route (`/`, `/manifesto`, `/approach`, `/services`, `/health-check`, `/work`, `/work/:slug`, `/contact`) ตรวจ console + visual
- ตรวจว่า marquee ลื่นต่อเนื่องไม่กระตุก
- ตรวจว่าทุกหน้าใช้ section label / heading / button pattern เดียวกัน
- ตรวจ link ทั้งหมดยังพาไปถูกที่

---

## Files ที่จะแก้

- `src/pages/Index.tsx` — marquee fix, ลบ symbols, แทน KineticWordmark
- `src/pages/Services.tsx` — ลบ ◐◑◒ tier symbols
- `src/pages/About.tsx`, `src/pages/HealthCheck.tsx` — ลบ symbols
- `src/components/StudioStatusBar.tsx` — ลด pulse
- `src/components/PageTransition.tsx` — ลด motion
- `src/components/Reveal.tsx` — ลด y/duration
- `src/components/MusicMarquee.tsx` — ตัด effects ที่เกิน
- `src/components/ClosingCTA.tsx` — ลบ Magnetic wrapper
- (เก็บไฟล์ `KineticWordmark`, `RotatingHeadline`, `TypingLoop`, `Magnetic`, `ScrollMarquee`, `FlipNumber` ไว้ ไม่ลบ — แค่ไม่ใช้)

ผลลัพธ์: ไซต์นิ่งขึ้น, สัญลักษณ์เป็นภาษาเดียว (เลขโรมัน + hairline + Cinnabar accent), marquee ลื่น, design system เข้มงวดแบบ editorial boutique จริงๆ.
