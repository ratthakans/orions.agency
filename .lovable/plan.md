# Landscape Section — Animated Counter + Ticker Tape

ยกระดับ section "What you're up against." ให้มีจังหวะแบบ editorial newsroom โดย:
- ตัวเลข 71/20/8 นับขึ้นจาก 0 เมื่อ scroll เข้า viewport (ทีละตัวตามลำดับ)
- เพิ่ม ticker tape วิ่งแนวนอนคร่อมหัวและท้าย section ทำให้รู้สึกเหมือน live news feed
- Hover ที่แต่ละ row จะมี hairline ลากจากซ้าย→ขวา + accent vermilion แตะที่เลข

## Layout (ASCII)

```
┌──────────────────────────────────────────────────────────┐
│ ▸ NOISE ▸ AI 71% ▸ CPM ↑20% ▸ 8s ▸ NOISE ▸ ...           │ ← top ticker (วิ่งซ้าย)
├──────────────────────────────────────────────────────────┤
│                                                          │
│  What you're up      ┌──────────────────────────────┐   │
│  against.            │  71  ⟶ count up from 0       │   │
│                      │  OF SOCIAL IMAGES            │   │
│  [sticky]            │  AI-generated. ...           │   │
│                      ├──────────────────────────────┤   │
│                      │  20  ⟶                       │   │
│                      │  ...                         │   │
│                      ├──────────────────────────────┤   │
│                      │  8s ⟶                        │   │
│                      └──────────────────────────────┘   │
│                                                          │
├──────────────────────────────────────────────────────────┤
│ ▸ 71% AI ▸ +20% CPM ▸ 8 SECONDS ▸ NOISE ▸ ...            │ ← bottom ticker (วิ่งขวา)
└──────────────────────────────────────────────────────────┘
```

## Changes

**`src/pages/Index.tsx` — Landscape section เท่านั้น**

1. **Top + bottom ticker tapes**
   - ใช้ `ScrollMarquee` ที่มีอยู่ ใส่ items แบบสั้นๆ คมๆ:
     `["NOISE", "AI 71% OF IMAGES", "CPM ↑ 20% YoY", "8 SECOND ATTENTION", "ADS COST MORE", "REAL CONTENT WINS"]`
   - Top ticker: `border-b border-foreground py-3` baseSpeed บวก (ซ้าย→ขวา)
   - Bottom ticker: `border-t border-foreground py-3` baseSpeed ติดลบ (ขวา→ซ้าย) — เพิ่ม prop ถ้าจำเป็น หรือ reverse items
   - ทำให้รู้สึก "ข่าวสองทาง" แบบ Bloomberg/news ticker

2. **Counter behavior**
   - `FlipNumber` ปัจจุบันใช้ `motion useInView` แล้ว — ตรวจให้ใช้ `useInView({ once: true, amount: 0.5 })` เพื่อ trigger เด่นชัดเมื่อตัวเลขโผล่กลางจอ
   - เพิ่ม stagger delay ระหว่างแต่ละ row (0ms / 200ms / 400ms) ผ่าน prop `delay` ใหม่ใน FlipNumber หรือผ่าน Reveal wrapper เดิม
   - ตัวเลขใช้ accent vermilion `hsl(var(--accent-from))` เฉพาะเมื่อ row นั้น hover

3. **Row interaction polish**
   - Hairline ใต้ number ตอน hover ขยายจาก w-8 → w-full (transition 600ms)
   - Number `group-hover:text-[accent-from]` แบบ subtle
   - Label badge เลื่อนขวาเล็กน้อย `group-hover:translate-x-1`

## Technical

- ไม่แก้ `FlipNumber` core ถ้าไม่จำเป็น — ใช้ Reveal delay ที่มีอยู่
- `ScrollMarquee` รับ `baseSpeed` อยู่แล้ว (default 60) — ใส่ค่าลบเพื่อกลับทิศ ถ้าไม่ support จะสลับลำดับ items แทน
- ทุกอย่างอยู่ในไฟล์เดียว `src/pages/Index.tsx` (อาจต้องแตะ `ScrollMarquee.tsx` เล็กน้อยถ้าต้องรองรับ negative speed)
- ใช้ semantic tokens เท่านั้น (foreground / background / muted / accent-from) — ไม่มี color literal
- Zero radius, hairlines only — ไม่ใส่ shadow/glow

## Out of scope

- ไม่แตะ section อื่น (Hero, Three things, Steps, Testimonials)
- ไม่เพิ่ม scroll-pin / scrub (ตามที่ผู้ใช้เลือก option counter+ticker ไม่ใช่ pin)
- ไม่เปลี่ยน copy ของ pressures
