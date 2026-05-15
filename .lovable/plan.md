## เป้าหมาย
ปรับ narrative กลับมาเป็น **boutique creative agency** ที่พูดทั้ง craft + result — ไม่ใช่ pure-numbers agency แต่ก็ไม่ใช่แค่ studio สวย เอาแบบ "งานที่ตอบโจทย์ ตรงเป้าหมาย และสวยด้วย"

---

## การแก้

### 1) `src/pages/Index.tsx`

**Hero (คงไว้)**
- H1: `Creative that moves numbers.` ✓ คงเดิม
- Subtitle: เปลี่ยนเป็น `A boutique creative agency — work that hits the brief, the numbers, and the eye.`
- CTA: คงไว้

**Proof Bar — ลบทั้ง section (lines 178-198)** และลบ `proof` array (lines 112-117)

**Section "Why brands stall" → ปรับ tone นิดเดียว**
- คงเดิม

**Services section "How we grow brands." → เปลี่ยนเป็น "Three things, properly."**
- Title: `Three things, <em>properly.</em>`
- Service tagline ปรับให้พูด craft + outcome ไม่ใช่แค่ outcome:
  - 01 `Brand that converts` → `Brand.` tagline: `Identity ที่จำได้ และเลือกซื้อ — สวย ขายได้ ทั้งสองอย่าง`
  - 02 `Content that performs` → `Content.` tagline: `คอนเทนต์ที่ทั้งสวย และดันยอด — craft + performance`
  - 03 `Ads that scale` → `Ads.` tagline: `ยิงแอดด้วย creative ที่ทำมาเพื่อ paid — ไม่ใช่ asset โชว์`

**Selected Work section**
- เปลี่ยน metric chip จากตัวเลข hard-sell เป็น context ที่ผสม craft + result:
  - Hongmove: `BRAND · CAMPAIGN`
  - Democrat: `CAMPAIGN · DIGITAL`
  - RTAF: `FILM · IDENTITY`
  - GCOO: `LAUNCH · CONTENT`
  - Heavy: `EVENT · IDENTITY`
- (เก็บตัวเลข result ไว้ใน testimonial ที่ยังคงอยู่)

**Section "Results, not likes." → "What clients say."**
- Title: `What clients <em>say.</em>` (เลิก hard-sell เลข ดันให้กลับมาเป็น quote-led)
- Layout เดิม: stat ยังอยู่แต่เล็กลง quote ใหญ่ขึ้น (สลับ hierarchy)

**Section "Why us?"** — ปรับ pillar 03 ให้ tone craft+number balance:
- 03 `Numbers we report on.` → `We measure what we make.` th: `วัดผลทุกชิ้น — ROAS, CAC, retention เพื่อให้ creative ดีขึ้นเรื่อยๆ ไม่ใช่ขาย report`

**Closing CTA (dark)**
- Eyebrow: `✦ FREE 30-MIN GROWTH AUDIT` → `✦ NOW BOOKING — 2026`
- H2: `Let's grow your numbers.` → `Let's make something <em>that works.</em>`
- Sub: `30-min audit. Free. We reply within 24h with a growth diagnosis.` → `30-min discovery call. Free. We reply within 24 hours.`
- Button: `Get a free growth audit` → `Start a project`

### 2) `src/pages/Services.tsx`

**Hero**
- H1: `Built to grow brands.` → `A boutique creative <em>agency.</em>`
- Subtitle: `Brand · Content · Paid media — one in-house team, measured in ROAS, CAC, and retention.` → `Brand · Content · Paid media — one in-house team. Crafted to hit the brief, the numbers, and the eye.`

**Capabilities — service tagline ปรับให้ balance craft+result**
- 01 Brand: `แบรนด์ที่ลูกค้าเลือกซื้อ ไม่ใช่แค่จำได้.` → `Identity ที่จำได้ — และเลือกซื้อ.`
- 02 Content: `คอนเทนต์ที่ดันยอด ไม่ใช่แค่ยอดวิว.` → `คอนเทนต์ที่ทั้งสวย — และดันยอด.`
- 03 Ads: `ยิงแอดที่ลด CAC จริง — รายงานทุกบาท.` → คงเดิม (balance อยู่แล้ว)

### 3) `src/pages/About.tsx`
- ตรวจ tagline หลัก ถ้ามี `built for growth` ปรับเป็น `boutique creative agency` ทำนอง craft+result

### 4) Memory
- อัปเดต `mem://brand/narrative-strategy` กลับมา position เป็น **boutique creative agency** ที่พูดทั้ง craft และ result balance — ไม่ใช่ pure growth agency, ไม่ใช่ pure craft studio

---

## สิ่งที่ **ไม่** เปลี่ยน
- Design tokens, fonts, hairline aesthetic, layout structure
- Routing, backend, components
- Stats section "Why brands stall" (ยังพูด market reality ได้)
- Process 4 steps
- Trusted by, testimonials data

---

ตอบว่า "ลุย" แล้วจะ implement รอบเดียว
