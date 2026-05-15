## เป้าหมาย
ปรับ ØRIONS ให้ position เป็น **creative agency ที่เน้น marketing/growth** มากขึ้น — ไม่ใช่แค่ studio สวยๆ แต่เป็นทีมที่ทำให้แบรนด์โต วัดผลได้ ขายของได้

ตอนนี้ทั้งเว็บพูด "boutique / craft / one team" เป็นหลัก ผลลัพธ์ทาง marketing โดนกลบด้วย narrative เชิง craftsmanship จะปรับ copy + โครงสร้าง section ให้ผลลัพธ์ทาง marketing นำหน้า craft ตามไปข้างหลัง

---

## หลักการปรับ
1. **Lead with outcomes, not craft.** หัวเรื่อง/subhead พูดถึงผลลัพธ์ (growth, leads, sales, ROAS) ก่อนพูดถึงวิธีทำ
2. **Numbers ขึ้นหน้า.** เพิ่ม proof bar ที่เห็นทันที: avg ROAS, leads/mo, brands grown, retention
3. **Service framing ใหม่.** เลิกเรียก "Branding / Content / Social" แบบ menu เปลี่ยนเป็น marketing outcomes: *Brand that converts · Content that performs · Ads that scale*
4. **เพิ่ม Growth/Strategy เป็น 4th pillar.** ให้รู้สึกว่ามี marketing brain ไม่ใช่แค่ production house
5. **Testimonial โชว์ตัวเลขก่อนคำชม** (มีอยู่แล้ว — ดันให้เด่นขึ้น)
6. **Tagline เปลี่ยน.** จาก "boutique creative agency" → คำที่บอก marketing intent ชัดกว่า เช่น *"A creative agency built for growth."* หรือ *"Creative that moves numbers."*

---

## ขอบเขตการแก้ (frontend copy + layout เท่านั้น)

### 1) `src/pages/Index.tsx` — Hero & narrative pivot
- **H1:** `A boutique creative agency.` → `Creative that moves numbers.` (หรือ `A creative agency built for growth.`) คง `<em>` accent
- **Sub:** `Branding, content, and paid ads — for brands that care.` → `Brand, content, and paid media — engineered to grow boutique brands.`
- **CTA secondary:** `See pricing →` → `See results →` (ไปที่ /work หรือ section testimonials)
- **เพิ่ม Proof Bar** ใต้ hero (ก่อน section "The reality") — strip บางๆ แสดง 4 ตัวเลข:
  - `4.2× avg ROAS` · `+62% bookings` · `−41% CAC` · `28 brands shipped`
  - ใช้ font-serif italic + mono label, hairline borders เหมือน stats เดิม
- **Section "The reality" (stats):** เปลี่ยน framing จาก "ตลาดยาก" → "ทำไมแบรนด์ถึงไม่โต" subline แต่ละตัวเชื่อมกับ marketing pain
- **Section "Three things" → "Four things":**
  - 01 **Strategy** — Positioning, audience, funnel, KPI
  - 02 **Brand** — Identity ที่ขายได้ ไม่ใช่แค่สวย
  - 03 **Content** — Production ที่ออกแบบมาเพื่อ performance
  - 04 **Paid Media** — Meta · TikTok · Google ads + reporting
  - หรือคงไว้ 3 columns แต่ rename เป็น *Brand that converts / Content that performs / Ads that scale*  (จะเลือก 3-pillar เพื่อรักษา layout grid)
- **Process "Live in 4 weeks"** — เพิ่ม outcome ต่อ step เช่น "Listen → ได้ growth diagnosis" / "Run → KPI report ทุกเดือน"
- **Selected work** — เพิ่ม metric chip ใต้ชื่อ project (e.g. `+180% reach`, `2.4M views`, `−38% CPL`)
- **Testimonial** — ดัน stat (62% / 11d / −41%) ให้ใหญ่ขึ้น quote เล็กลงนิดหน่อย เพื่อให้ผลลัพธ์เด่น
- **Why us** — เพิ่ม pillar ที่ 4: `Numbers we report on.` `รายงาน ROAS, CAC, retention ทุกเดือน — ไม่ใช่แค่ likes`
- **Closing CTA eyebrow** — เพิ่มข้อความ "Free 30-min growth audit" แทน generic "NOW BOOKING"

### 2) `src/pages/About.tsx` — เพิ่ม "marketing brain"
- เพิ่ม principle ที่ 5 (หรือแทนที่หนึ่งตัว): **"We measure what we make."** `วัดทุกชิ้นที่ปล่อย — ROAS, CTR, CAC, retention`
- Sub-paragraph เพิ่มประโยค: "เป้าหมายไม่ใช่แค่งานสวย แต่คือทำให้แบรนด์โต"

### 3) `src/pages/Services.tsx` — Service taglines มี outcome
- 01 Branding: `Identity ที่ลูกค้าจำได้ใน 3 วินาที` → `Brand ที่ลูกค้าเลือกซื้อ ไม่ใช่แค่จำได้`
- 02 Content: `คอนเทนต์ที่ดูจบแล้วอยากแชร์` → `คอนเทนต์ที่ดันยอด ไม่ใช่แค่ยอดวิว`
- 03 Social: คงเดิม (พูดถึงผลลัพธ์อยู่แล้ว)
- เพิ่ม section ใหม่ก่อน Process: **"What growth looks like"** — 3 mini case stat cards (F&B +62% bookings · Fashion sold out 11d · Hotel −41% CAC) link ไป /work

### 4) `src/components/Nav.tsx` (ตรวจ — ถ้ามี tagline ใต้โลโก้ให้ปรับให้ตรง)

### 5) Memory update
- อัปเดต `mem://brand/narrative-strategy` ให้สะท้อน positioning ใหม่ (growth-oriented creative agency) แทน boutique-craft narrative

---

## สิ่งที่ **ไม่** เปลี่ยน
- Design tokens, fonts, palette, hairline aesthetic
- โครงสร้าง routing
- Backend/forms/Supabase
- Component primitives (PageMark, Reveal, ClosingCTA, SectionHeader)

---

## คำถามก่อนลงมือ
ก่อนเริ่มเขียน อยากเช็ค 2 จุด:
1. **Tagline หลักเลือกแบบไหน?**
   - A. `Creative that moves numbers.`
   - B. `A creative agency built for growth.`
   - C. `Brand-led growth for boutique brands.`
2. **ตัวเลข proof bar** — ตัวเลขที่เสนอ (4.2× ROAS, +62% bookings, −41% CAC, 28 brands) เป็น *ตัวเลขจริง* หรือใช้เป็น placeholder ก่อนแล้วค่อยเปลี่ยน?

ตอบมาแล้วจะ implement ทันทีในรอบเดียว
