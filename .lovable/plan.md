## Plan — Add-ons + Rate Card alignment for `/services`

อ้างอิงจาก `ORIONS_RateCard.pdf` (issue 2026 · 01/01). เพิ่ม **Add-on services menu** ลงในหน้า `/services` แบบ editorial table และอัปเดตรายละเอียด package ให้ตรงกับ rate card ฉบับล่าสุด

---

### 1) Add-on section (ใหม่) — `09 — Add-ons`

แทรกใน `src/pages/Services.tsx` ระหว่าง "Find Your Tier" กับ Footer

Layout: **editorial table** (ตามที่เลือกไว้) — 3 category blocks เรียงต่อกัน, แต่ละ block มี hairline rule + 3 rows

```
09 — Add-ons
Beyond the *package.*
Standalone services — no upgrades required.
All prices exclude VAT 7% · one-time fees unless marked monthly.

─────────────────────────────────────────────────────────
BRANDING
─────────────────────────────────────────────────────────
Brand Identity Package      Logo + Brand Book + Color + Typography + Visual System     From ฿80,000
Signature Campaign Concept  Big Idea across 6:3:1 Loop + Creative Direction            From ฿35,000
Brand Deep Dive Session     Half-day workshop · focused area + Summary deck            ฿20,000

─────────────────────────────────────────────────────────
SOCIAL MEDIA
─────────────────────────────────────────────────────────
Community Management Plus   Extended hours 8:00–23:00 + Outreach + Auto-reply          ฿8,000 / mo
Influencer / KOL Management Selection + briefing + campaign management + reporting     10% (min ฿10,000)
Paid Ads Audit & Analyze    Performance review + Recommendations + Optimization        ฿15,000

─────────────────────────────────────────────────────────
CREATIVE PRODUCTION
─────────────────────────────────────────────────────────
Brand Film (3–5 min)        Cinematic short film with director + plot + full crew     From ฿80,000
Commercial Video Production Script + cast + full crew · script-led brand video         From ฿50,000
Professional Photoshoot     Dedicated shoot + retouching 20–40 images                  ฿15,000 / day
```

**Style spec:**
- Category labels: `font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar` + leading `w-6 h-px bg-cinnabar`
- Rows: 3-column grid `grid-cols-[1fr_2fr_auto]` (name · desc · price), hairline borders top/bottom, `py-6 md:py-7`
- Name: `font-serif text-[20px] md:text-[22px] tracking-[-0.01em]` (italic = signature/featured items per PDF)
- Desc: `font-thai text-[14px] leading-[1.6] text-muted-foreground`
- Price: `font-mono text-[12px] tracking-[0.15em] text-foreground whitespace-nowrap`
- Hover row: bg `bg-surface` transition

**Bundle Discount strip** (full-width cinnabar band, matches existing Founder's Deal pattern):
```
BUNDLE DISCOUNT
Buy 3 add-ons or more — get 15% off, instantly.
Mix and match — package + add-ons tailored to your needs.    [Get a Quote →]
```

---

### 2) Package details — sync with rate card

อัปเดต `packages` array ใน `Services.tsx` ให้ตรง PDF rate card:

- **Starter** — features ตรงอยู่แล้ว ✓
- **Pro** — เปลี่ยน "12 Reels / 6 Static / 2 Horizontal" → "12 Reels / 6 Static / **2 Hero Video** / 12 Photos" และ "Stories 12/mo"
- **Elite** — เปลี่ยน "24 Reels / 12 Static / 3 Signature Stories" → "24 Reels / 12 Static / **3 Signature Stories** / 16 Stories / 24 Photos / 3 Production Days"
- เพิ่ม "**Annual plan — save 17%**" หมายเหตุใต้ราคาแต่ละ tier (e.g. `Annual ฿350k / ฿690k / ฿1.39M`)

### 3) Out of scope

- ไม่สร้าง comparison table แบบ Page 3 ของ PDF (info-dense เกินไป — เก็บไว้สำหรับ rate card PDF download ทีหลัง)
- ไม่แตะ Process / Method sections — มีอยู่หน้าอื่นแล้ว
- ไม่ทำ "Strategy Call booking" page (Page 8) — ใช้ `/contact` ที่มีอยู่
- ไม่เพิ่ม route ใหม่

### Files

- `src/pages/Services.tsx` — เพิ่ม `addOns` data + Add-on section JSX + Bundle Discount strip; ปรับ `packages` features ให้ตรง PDF
