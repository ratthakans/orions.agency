

# ปรับ Design ตาม PDF Master V6 — IBM Plex Sans Thai + Warm Palette + Grain

## สรุปสิ่งที่จะเปลี่ยน (จาก deck)

ดู deck แล้ว direction ชัดมาก: **editorial photo-led, body type หลักเป็น IBM Plex Sans Thai, มี grain texture, palette warm earthy** (off-white #F2EFE8 พื้นหลัง / น้ำตาลเข้ม / amber accent) — ต่างจาก dark mode ปัจจุบันโดยสิ้นเชิง

### A. Color System ใหม่ (Light/Warm Editorial)
```
BACKGROUND       #F2EFE8   (warm off-white / paper)
SURFACE          #E8E3D8   (cream card)
INK PRIMARY      #1A1815   (warm black for text)
INK MUTED        #6B6660   
ACCENT           #C2641E   (burnt amber — จาก deck cover)
ACCENT SOFT      #E0B36A   (warm amber)
HAIRLINE         #1A1815 / 12%
```
ทั้งเว็บกลับเป็น **light mode** ตาม deck (PDF เกือบทุกหน้าพื้นขาวครีม) — dark mode ปัจจุบันไม่ตรง brand

### B. Typography Hierarchy ใหม่
```
HEADLINE (EN)    Unbounded 600, UPPERCASE, tracking -0.03em
HEADLINE (TH)    IBM Plex Sans Thai 600, leading 1.15
BODY (TH/EN)     IBM Plex Sans Thai 400/500, 16-18px, leading 1.7
EYEBROW          IBM Plex Mono / JetBrains Mono 11px, tracking 0.22em
KEY NUMBERS      Unbounded 700, ขนาดใหญ่ (1.7s, +41%, 4.6×)
```
- ลบ font Inter ออก → ใช้ IBM Plex Sans Thai เป็น body หลักทั้ง EN และ TH (Plex รองรับทั้งคู่ ดูเป็น editorial)
- Heading คงไว้ Unbounded เฉพาะคำสำคัญ + EN, ส่วน heading TH ใช้ IBM Plex Sans Thai bold

### C. Grain & Texture
- Grain overlay เพิ่ม opacity จาก 0.035 → 0.08 (เห็นชัดเจนเหมือน printed paper)
- เพิ่ม **paper noise** ที่ surface cards (subtle beige fiber)
- ลบ `liquid-blob` animation ทิ้ง — ไม่ตรงกับ editorial print mood

### D. Content Sync ตาม Deck V6

ปรับ copy ให้ตรง deck (เว็บปัจจุบันยังใช้คำเก่าหลายจุด):

1. **Tagline ใหม่**: "Sharper ideas. Clearer direction." (แทน "Practical. Bold. Done.")
2. **Positioning**: "IDEA-LED CREATIVE AGENCY" (แทน "Applied Creative Agency")
3. **The Pressure (3 ตัว)**: ADHD SPAN 1.7s / DIGITAL INFLATION +41% / AI FLOOD 4.6×
4. **Vicious Cycle section** (ใหม่ — page 4)
5. **What We Do** 3 ขั้น: วิเคราะห์ธุรกิจ → เปลี่ยนการสื่อสาร → แปลเป็นผลลัพธ์
6. **Service stacks**: BRAND DIRECTION / CREATIVE DIRECTION / DIGITAL EXPERIENCE (แทน 4 services เดิม)
7. **Signature Approaches**: 01 CREATIVE UNLOCK / 02 DEMAND GRAVITY (พร้อม metrics)
8. **ORIONS Process** (acronym): Observe / Reframe / Imagine / Orchestrate / Nurture / Scale
9. **Hero Projects**: ประชาธิปัตย์, GCOO, MY HOTEL, HONG MOVE
10. **More Projects**: HEAVY ORGANIZER, เขาใหญ่ คันทรีคลับ, RTAF, พรรคพลวัต
11. **Social & Commercials**: Leicester City, Buriram Esport, Audi, Siriraj
12. **Entertainment**: เถื่อน TRAVEL, THE UPGRADE, Finding the Last Note
13. **Why Agency**: Consultant vs Studio vs Agency comparison
14. **Contact**: 246/8 Soi Yothinphatthana, +66 92 390 5464

### E. Layout Patterns จาก Deck
- **Photo-driven**: ทุก section หลักมีภาพประกอบ full-bleed หรือ 50/50 split
- **Typographic posters**: section title ตัวใหญ่ชิดบน-ซ้าย, content วาง grid ด้านล่าง
- **Numbered lists**: 01 / 02 / 03 ใหญ่ๆ เป็น index (ไม่ใช่ index-badge เล็ก)
- **Asymmetric image+text**: ตามแบบ page 5, 6, 8

### F. ไฟล์ที่จะแก้
- `src/index.css` — invert color tokens (light mode), update grain opacity, ลบ blob animation, fonts
- `tailwind.config.ts` — fontFamily order (Plex Thai เป็น body หลัก)
- `src/pages/Index.tsx` — sync copy + เพิ่ม Vicious Cycle, Signature Approaches, ORIONS process
- `src/pages/Services.tsx` — restructure เป็น 3 stacks (Brand/Creative/Digital) ตาม deck
- `src/pages/Work.tsx` — เพิ่ม Hero Projects + More Projects + Social Commercials + Entertainment 4 บล็อก
- `src/pages/About.tsx` — sync POV + Why Agency comparison
- `src/pages/Contact.tsx` — update address + tagline
- `src/components/Nav.tsx`, `Footer.tsx`, `PageHero.tsx` — ปรับสีเป็น light mode
- `src/components/SEO.tsx`, `index.html` — update tagline

### G. Asset Plan
จาก PDF มีรูป 146 รูป — copy ใช้รูปสำคัญ ~12-15 รูปเข้า `src/assets/deck/`:
- Hero/POV images (page 5, 6, 7)
- Project thumbnails (4 hero + 4 selected + 4 commercials + 3 entertainment)

---

## คำถาม confirm 2 ข้อก่อนเริ่ม

**Q1 — Light mode ทั้งเว็บ จริงๆ ใช่ไหม?**
Deck เป็นพื้น cream/off-white เกือบทุกหน้า แต่เว็บปัจจุบันเป็น dark mode ครบ — ต้อง flip ทั้งระบบ

**Q2 — Tagline หลัก**
ใช้ "Sharper ideas. Clearer direction." (deck) หรือคงไว้ "Practical. Bold. Done." (เว็บปัจจุบัน)?

**Q3 — Copy migration**
sync copy + structure ตาม deck V6 ทั้งหมด (vicious cycle, signature approaches, ORIONS process) หรือเอาแค่เปลี่ยน design system (สี/ฟอนต์/grain) แต่คง content เว็บเดิม?

