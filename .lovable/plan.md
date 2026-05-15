## Goal
Redesign **Services** ให้ขายของชัดขึ้น — เป็น **creative agency ที่ขับ growth ให้ลูกค้า** ไม่ใช่ studio โชว์ craft อย่างเดียว

## Insight
ตอนนี้หน้านี้เหมือน pricing page. ขาด 3 อย่างที่ทำให้ลูกค้ากดติดต่อ:
1. **Outcome** — ทำแล้วได้อะไร (ยอดขาย/ engagement/ leads)
2. **Proof** — ใครเชื่อเราแล้วได้ผล (logos + ตัวเลขจริง)
3. **Clarity** — เลือก package ไหน ใน 5 วิ

## โครงใหม่ 6 sections

```
01  HERO          Promise + outcome ชัดบรรทัดเดียว
02  OUTCOMES      3 ตัวเลขที่ลูกค้าได้ (proof bar)
03  WHAT WE DO    3 services × outcome (Brand→trust, Film→reach, Social→sales)
04  PROCESS       6 steps + timeline "live in 4–6 weeks"
05  PACKAGES      3 tier — Pro เด่นกลาง + accordion details (เอา comparison ออก)
06  FAQ + CTA     เดิม
```

## รายละเอียด

### 01 · HERO
- Eyebrow: `— SERVICES · 2026`
- Headline serif (3 บรรทัด): `Creative that *sells.*` / `Content that *scales.*` / `Brands people *remember.*`
- Sub 1 บรรทัด: "Full-service creative agency — strategy, film, social. ทีมเดียวจบ."
- 2 CTA: `See packages →` (anchor 05) · `Book a free audit` (→ /contact)

### 02 · OUTCOMES — proof bar (ใหม่)
Strip เต็มความกว้าง bg cream, hairline บนล่าง, 3 คอลัมน์:
- `+3.2×` — Average reach lift in 90 days
- `40+` — Brands launched since 2019
- `4–6 wk` — From kickoff to live
ตัวเลข font-serif ใหญ่ orion · ใต้ตัวเลข caption mono

### 03 · WHAT WE DO — outcome-led
Zigzag 3 บล็อก ภาพจริง + outcome นำหน้า deliverables:
- **Brand** — img `work-atlas.jpg` · *"Identity ที่ลูกค้าจำได้ใน 3 วินาที."* · Naming · Logo · System · Guideline · Launch kit · _Selected: Hongmove · Atlas · Sera_
- **Film & Photo** — img `concert-hero.jpg` · *"คอนเทนต์ที่ดูจบแล้วอยากแชร์."* · Director · DOP · Studio · Edit · Color · Sound · _Selected: RTAF · Heavy_
- **Social & Paid** — img `work-koha.jpg` · *"โพสต์ที่ขายของได้จริง — วัดผลทุกบาท."* · Strategy · Calendar · Daily · Community · Meta + TikTok ads · _Selected: MyHotel · GCOO · Khaoyai_

### 04 · PROCESS — schedule of work
Headline: `From hello, *live in 4–6 weeks.*`
6 rows hairline เต็มกว้าง: `01` mono · `Strategy.` serif italic · คำอธิบายไทยสั้น · `Week 1` mono ขวา
(แทน grid 6 col ตัวเลขเปล่า)

### 05 · PACKAGES — "Pick yours in 30 seconds"
- Helper บนสุด: `→ ไม่แน่ใจ? เริ่มที่ Pro. คุ้มที่สุดใน 3 เดือน.`
- 3 tier เดิม (Starter / Pro / Elite) — ราคา/รายละเอียดเดิม
- Pro การ์ดกลาง: ribbon `★ MOST POPULAR` orion + เน้นราคาใหญ่ขึ้น (font-serif text-orion ใหญ่กว่าเดิม)
- แต่ละการ์ด: มี 1 บรรทัด **"Best for:"** ก่อน highlights (เช่น Starter = "ธุรกิจเริ่ม IG/TikTok", Pro = "แบรนด์โต wantvolume + ads", Elite = "Launch / rebrand เต็มรูปแบบ")
- **เอา comparison table ออก** — ใช้ accordion details เดิมแทน
- ใต้การ์ด: 1 บรรทัด `All packages include — Strategy · In-house production · Monthly report`

### 06 · FAQ + CTA
- เพิ่ม 1 FAQ ใหม่บนสุด: *"ผลลัพธ์เห็นเมื่อไหร่?"* — "30 วันแรกเห็น traction · 90 วันเห็นยอด"
- ClosingCTA เดิม

### Marquee strip (ก่อน CTA)
SimpleMarquee: `BRANDING ✦ FILM ✦ SOCIAL ✦ PAID ADS ✦ STRATEGY ✦ PHOTOGRAPHY` — สอดคล้อง Index

## Out of scope
- ไม่แตะหน้าอื่น · ไม่เปลี่ยนราคา/รายการใน package · ไม่เพิ่ม assets ใหม่

## Files
- edit: `src/pages/Services.tsx` (full rewrite)

ตัวเลขใน OUTCOMES (3.2× / 40+ / 4–6wk) เป็น placeholder — ขอตัวเลขจริงจากคุณ หรือให้ใช้ที่เสนอไป?
