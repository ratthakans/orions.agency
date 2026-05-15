# Plan — Simplify to Klar level + Services per PDF

## Goal
ลด noise ของเว็บให้เรียบเหมือน klarstudiobkk.com (1–2 sections ต่อหน้า, hero ใหญ่, copy สั้น, CTA เดียว, marquee เป็น accent) และจัดเนื้อหา Services/Pricing ตาม `ORIONS_Final_Master.pdf` ตรงๆ

## โครงสร้างหน้า (หลังปรับ)

```
Home        Services        Work        About        Contact
  └ hero      └ 3 packages    └ grid      └ 1 hero      └ form
  └ marquee   └ add-ons       └ marquee   └ marquee     └ details
              └ commitments
              └ FAQ
```

ลบ `/pricing` และ `/style` ออกจาก nav (Pricing รวมไปอยู่ใน Services, Style เก็บไว้แต่ไม่ลิงก์)

## 1) Global — Klar-style chrome

- **Announcement bar** (บนสุด): `NOW BOOKING FOR Q3 2026 — 30-min discovery call, free`
- **Nav** เหลือ: `Home · Services · Work · About` + ปุ่ม `WORK WITH US` (→ /contact)  
  ตัด Pricing ออกจาก nav
- **Bottom marquee** บนทุกหน้า (เหมือน Klar): `SOCIAL MEDIA — BRANDING — CONTENT — PAID ADS —`

## 2) Home (`/`) — เหลือแค่ 3 sections

ตัดทิ้ง: Selected Work rail, Three Things accordion, Mastery video, Process timeline, Trusted-by grid, ClosingCTA

เก็บ/ปรับเป็น:
1. **Hero** — เต็มจอ, eyebrow `BANGKOK · EST. 2026`, headline `From idea to final cut.`, sub 1 บรรทัด, ปุ่ม `SEE OUR SERVICES`
2. **Marquee** services tags
3. **Closing strip** — บรรทัดเดียว + ปุ่ม `Work with us`

## 3) Services (`/services`) — จาก PDF

โครง section ตามเอกสาร (เรียบ แต่ครบ):
1. **Hero** — `Service Proposal — Social · Content · Brand`
2. **About ØRIONS** (Page 2) — paragraph เดียว + 6-step process strip (Strategy → Planning → Approval → Production → Publish → Optimize)
3. **3 Packages** (Page 3) — 3 การ์ดเรียงแนวนอน: Starter 29k / Pro 59k ★ / Elite 119k ♛ พร้อม tagline สั้น
4. **Comparison table** (Page 3-4) — ตารางเปรียบเทียบครบทุกแถวจาก PDF
5. **Package details** (Page 5-11) — accordion 3 อัน เปิดเพื่อดู deliverables, strategy, reporting, terms
6. **Add-ons** (Page 12-15) — grid: SEO 18k, AEO 22k, Bundle 35k (SAVE 10k), Production rates, Crisis PR, Email setup
7. **Commitments** (Page 16) — 4 บรรทัดสั้น
8. **FAQ** (Page 17) — accordion
9. **Terms** (Page 18) — bullet list สั้น
10. **Next steps + CTA** (Page 19-20) — `LET'S START` + email `hello@orions.agency`

ลบ Process / Questions sections (ตามที่เคยขอไว้)  
หน้านี้แทนที่ทั้ง `Services.tsx` เดิม **และ** `Pricing.tsx` (ลบไฟล์ Pricing + route)

## 4) Work (`/work`) — เก็บโครงปัจจุบัน

- ตัด Selected Projects 4-column grid และ Testimonials carousel ที่เพิ่งทำไว้แล้ว — เก็บไว้
- ลบ section ที่ไม่จำเป็น (intro ยาว, stats) ให้เหลือ: Hero → Cards grid → Testimonials → Trusted-by dark → CTA

## 5) About (`/about`)

ลดเหลือ: Hero (philosophy 1 ย่อหน้า) → Team grid 1 row → Marquee → CTA

## 6) Contact (`/contact`)

ลดเหลือ: Hero สั้น → Form (name/email/budget/message) → Email + LINE + ที่อยู่ + tax ID

## ไฟล์ที่จะแตะ

- `src/App.tsx` — ลบ route `/pricing`
- `src/components/Nav.tsx` — เพิ่ม announcement bar, เปลี่ยน CTA เป็น "WORK WITH US"
- `src/components/Footer.tsx` — เรียบขึ้น (ตรวจอีกที)
- `src/pages/Index.tsx` — เขียนใหม่สั้นๆ
- `src/pages/Services.tsx` — เขียนใหม่ตาม PDF
- `src/pages/Work.tsx` — ตัด section ส่วนเกิน
- `src/pages/About.tsx` — ตัดให้สั้น
- `src/pages/Contact.tsx` — ตัดให้สั้น
- ลบ `src/pages/Pricing.tsx`

## หมายเหตุ design

- Light cream `#F5F2EC` + ink `#0F0F0F` + Sunset Ink accent ตามเดิม
- Hairlines, zero radius, ไม่มีเงา/glow
- ใช้ `PageHero`, `SectionHeader`, `CTA`, `Reveal`, `SimpleMarquee` เดิมทุก section — ไม่สร้าง component ใหม่

## คำถามก่อนเริ่ม

1. ราคา **add-ons** ใน PDF บางอันไม่ครบ (Production, Crisis PR เป็น "Quote ตามเคส") — ใส่ตาม PDF ตรงๆ ใช่ไหม?
2. ตัวเลขใน announcement bar (`NOW BOOKING FOR Q3 2026`) อยากให้เขียนว่าอะไร?
3. หน้า **Work** อยากให้ตัด section ไหนบ้าง หรือเก็บโครงปัจจุบันทั้งหมด?
