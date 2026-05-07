# Review: หน้า Services

## โทนโดยรวม — ผ่าน ไม่หลุด แต่ยัง "ไม่คม" เท่าหน้าแรก

**สิ่งที่ทำได้ดีแล้ว**
- Dark hero + marquee → ต่อเนื่องกับ Index ดี
- Hairlines, zero-radius, tabular-nums, mono labels → on-brand
- Anchor jumps จาก What We Do → Packages เป็น UX ที่ฉลาด
- รายละเอียดแต่ละ tier ครบมาก (timeline / delivers / includes / best for)

**จุดที่หลุดโทน / ยังไม่สวยพอ**

1. **Pricing cards แน่นเกินไป** — แต่ละการ์ดมี 5 บล็อกซ้อนกัน (header → price → meta → includes → best for) คั่นด้วย `border-t border-background/15` ทุกบล็อก ทำให้รู้สึกเหมือน spec sheet ไม่ใช่ editorial. หน้าแรกใช้ negative space เยอะกว่ามาก
2. **"Most chosen" badge** — กล่อง `border px-2 py-1` ดูเหมือน UI component ทั่วไป ไม่ใช่ ØRIONS อย่างอื่นในเว็บไม่มี badge แบบนี้เลย
3. **Lucide `Check` icon** — ของอื่นทั้งเว็บใช้ `·` หรือ `—` เป็น bullet (mono) การมี check ✓ ทำให้รู้สึกเหมือน SaaS pricing page
4. **Highlight bar (gradient line บนสุดของ tier)** — เป็น visual ที่ไม่มีที่อื่น และ gradient accent ใช้เยอะไปนิด (memory บอก "used sparingly")
5. **Hero สั้นมาก** — ตอนนี้แค่ eyebrow + h1 + 1 บรรทัด ดูบางเกินสำหรับหน้าหลัก service ขาด anchor visual / number block ที่หน้าแรกมี
6. **What We Do กับ Pricing ซ้ำซ้อน** — บล็อก What We Do แสดง 4 bullets ของแต่ละบริการ, แล้ว Pricing ก็เปิดด้วย intro paragraph อีกที. รู้สึก redundant
7. **Section rhythm** — ตอนนี้ Dark → Light → Dark → Light → CTA สลับดี แต่ Pricing dark block ยาวมาก (มี 7 cards รวม) ทำให้ scroll fatigue

## แผนปรับ

### A. Hero — ให้มี "น้ำหนัก" มากขึ้น (ไม่ใช่ใหญ่ขึ้น)
- คงขนาด `h-display-md` เดิม
- เพิ่ม row ตัวเลขด้านล่าง subline แบบ editorial:
  ```
  03 PRACTICES   ·   01 STUDIO   ·   THB 50K — START
  ```
- ใช้ font-mono tabular-nums, hairline บน-ล่าง

### B. What We Do — ทำให้เป็น index จริง ๆ
- ลด bullets list ออก (ย้ายไปอยู่ใน Pricing เท่านั้น)
- แสดงแค่: number, title, lead, "Jump →"
- เพิ่ม large number `01 / 02 / 03` แบบ display เพื่อให้ scan ง่าย เหมือน chapter index

### C. Pricing cards — ลด structure, เพิ่ม breathing room
- ลบ "Most chosen" badge → ใช้แค่ background tint อ่อน ๆ บนการ์ด highlight
- ลบ gradient hairline บน highlight tier
- เปลี่ยน `Check` icon → `—` (mono dash) ให้ตรงกับที่อื่นในเว็บ
- ยุบ "Timeline / Delivers" จาก dl table → inline meta line ใต้ราคา (`3–4 weeks · 1 round revision`)
- ลบ border-t ทุกบล็อก — ใช้แค่ spacing แยก (negative space)
- ย้าย "Best for" เป็น footer line เล็ก ๆ italic font-thai

### D. Section transitions — break Pricing dark block
- หลัง service "01 Branding" ใส่ thin divider strip (light line) เพื่อ pause visually
- หรือ: ทำ Pricing เป็น 3 sections สลับ dark/light/dark (แต่อาจจะมากไป — แนะนำ option แรก)

### E. Audit strip
- เพิ่ม CTA button จริง ๆ (ตอนนี้แค่ตัวเลข 30K + bullets, ไม่มี action)
- "Book the audit →" link ไป /contact

### F. เสริม "creative agency" feel
- ใส่ vertical label ด้านซ้ายของ Pricing section (`/ 02 PACKAGES`) เหมือน PageHero pattern
- หรือ CornerMarks รอบ Pricing block

## ขอ confirm 2 เรื่องก่อนลงมือ

1. **Pricing card refactor** — ยอมให้ลด "Check icon", "Most chosen badge", และยุบ Timeline/Delivers เป็น inline ไหม?
2. **What We Do** — ตัด 4-bullets list ออกจริงไหม (ย้ายไปอยู่ใน Pricing เต็ม ๆ ที่เดียว)?
