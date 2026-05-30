## Goal

ลดความซ้ำซ้อนของเนื้อหาทั้งเว็บ. หลายหน้ามี section ที่พูดเรื่องเดิม (Divisions ซ้ำใน Index/About/Services, "Why ØRIONS" / strengths ซ้ำ, process 4-step ซ้ำ 3 ครั้ง, KPI/Add-ons/Fine print หลายชั้นใน Pricing). เป้าหมาย: แต่ละหน้า **1 หน้าที่ชัดเจน**, ไม่ทับกัน, อ่านจบใน 90 วินาที.

## หลักการตัด

แต่ละ concept ควรอยู่ **บ้านเดียว**:
- Manifesto/ทำไม → About เท่านั้น
- Divisions ละเอียด → Services เท่านั้น
- ราคา/tier/add-on/fine print → Pricing เท่านั้น
- Process 4-step → ที่เดียว (Services)
- ติดต่อ/FAQ ติดต่อ → Contact

## การเปลี่ยนแปลงต่อหน้า

### `Index.tsx` — เหลือ 5 sections (จาก 7)
ตัด: **03 The Insight**, **05 Core Strengths** (ซ้ำกับ About)
ย่อ: **02 The Problem** เหลือ 3 บรรทัดแบบ list สั้น ไม่ใช่ grid 3 column + quote block
ย่อ: **04 Divisions** เหลือ 3 ชื่อ + 1 บรรทัด คลิกไป /services
เก็บ: Hero, Trust strip, Problem (slim), Divisions (slim), Selected Work, CTA

### `About.tsx` — เหลือ 4 sections (จาก 6+)
ตัด: **04 Beyond Content** (พูดเรื่องเดียวกับ How We Refine), **05 Divisions** (ซ้ำกับ Services), Team grid ถ้ามี
รวม: Pillars + Data เหลือ block เดียว 3 cards (ไม่ใช่ 6)
เก็บ: Manifesto, Promise, How We Refine (3 cards), CTA

### `Services.tsx` — เหลือ 5 sections (จาก 9)
ตัด: **04 Deliverables** (ซ้ำกับ Capabilities), **05 Industries**, **06 Why** (ซ้ำกับ About), **07 Selected Work** (มีในหน้าแรก/หน้า Work), **08 FAQ** (ย้ายให้เหลือเฉพาะใน Contact)
เก็บ: Hero+Blueprint, Capabilities (3 cards), Process (4-step) — **process อยู่ที่นี่ที่เดียว**, CTA

### `Pricing.tsx` — เหลือ 6 sections (จาก ~8)
ตัด: **Boutique Standard KPIs** (ซ้ำกับ promise การวัดผล), **Annual Legacy callout** (รวมเป็นบรรทัดเดียวใน fine print), **Boutique Phases** (process อยู่ใน Services แล้ว)
ย่อ: Add-ons เหลือ top 4 แทน 7 (Boutique), Production a-la-carte 4 กลุ่ม → 2 กลุ่ม (Crew, Post) เก็บ Equipment/Travel ใน fine print
เก็บ: Hero+subnav, Boutique tiers, Digital tiers, Production days, Ladder, Fine print

### `Consulting.tsx` — เหลือ 4 sections (จาก 5)
ตัด: **04 Who it's for** (Fit/Not for) — รวมเป็น 2 บรรทัดท้าย hero
เก็บ: Hero, Three units, Engagement model, CTA

### `Contact.tsx` — เหลือ 4 sections (จาก 5)
ตัด: **05 Diagnostic fallback** (มี link ใน footer แล้ว), Trust strip (ซ้ำกับ Index)
ย่อ: 02 What happens next เหลือ inline timeline ใต้ hero (ไม่ใช่ section เต็ม)
เก็บ: Hero (พร้อม badges + dual CTA), Brief form, FAQ, CTA สั้น

## ผลลัพธ์

- หน้า Index: 7 → 5 sections
- หน้า About: 6 → 4
- หน้า Services: 9 → 5  
- หน้า Pricing: ~8 → 6
- หน้า Consulting: 5 → 4
- หน้า Contact: 5 → 4

รวม ~16 sections หาย, ไม่มี content ซ้ำข้ามหน้า, อ่านเร็วขึ้น ~40%.

## ไม่แตะ

- Design tokens, fonts, color, layout DNA (hairline, 60/30/10) — คงเดิม
- Nav, Footer, routing
- Database / form submission logic
- /work, /studio, /diagnostic — อยู่นอก scope รอบนี้ (บอกได้ถ้าอยากให้รวม)

## คำถามก่อนเริ่ม

ตามนี้ OK ไหม? หรืออยากเก็บ section ไหนที่ผมจะตัด (เช่น Industries, Why ØRIONS, Beyond Content)?
