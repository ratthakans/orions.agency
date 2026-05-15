## ปัญหาตอนนี้
- หัวข้อใช้ Unbounded **800 (Black) + tracking ติดลบเยอะ** → อ่านยาก ตัวอักษรชนกัน โดยเฉพาะภาษาไทยที่ผสมกับอังกฤษ
- ใช้ **italic** ทุกที่เพื่อเน้นคำ (`text-gemini italic`, `font-serif`, `italic font-semibold`) → ดูรก ไม่เป็น identity
- ทุก section พื้นหลังเดียวกัน (`#0A0A0A`) → ไม่มีจังหวะ แยกไม่ออกว่าเปลี่ยน section
- Paper grain opacity 5% screen blend → แทบมองไม่เห็นบนดำ ไม่รู้สึกว่าเป็นกระดาษ

---

## สิ่งที่จะแก้

### 1) Typography — Unbounded Normal + UPPERCASE
ใน `src/index.css`:
- `h1, h2, h3...` → `font-weight: 400` (เปลี่ยนจาก 800), `text-transform: uppercase`, `letter-spacing: 0.02em` (จากลบเป็นบวก เพื่อให้ตัวอักษรหายใจ)
- `.font-display` → `font-weight: 400`, `uppercase`, `letter-spacing: 0.01em`
- `.font-brand` (wordmark ØRIONS) → คงน้ำหนักหนักไว้ที่ 700 เพราะเป็น logo
- Type scale `.h-display-*` → `line-height` เพิ่มเป็น `0.95–1.1` (จาก 0.85) เพื่อให้อ่านง่าย
- Body Thai (`.font-thai`) → คงเดิม IBM Plex Sans Thai 400 (อ่านง่ายแล้ว)

### 2) ลบ Italic ทั้งหมด
Find/replace ทุกหน้า + components:
- `italic font-semibold` → `font-semibold` (เน้นด้วย bold weight อย่างเดียว)
- `text-gemini italic` → `font-semibold`
- `font-serif` → ลบ class
- `.font-serif` ใน CSS → เปลี่ยนเป็น non-italic medium weight
- `.text-gemini` → ลบ italic

ไฟล์ที่กระทบ: `Index.tsx`, `Services.tsx`, `About.tsx`, `Work.tsx`, `Pricing.tsx`, `Contact.tsx`, `ClosingCTA.tsx`, `index.css`

### 3) สลับ Section พื้นหลัง — ให้มีจังหวะ
สร้าง pattern แบ่ง section ชัดเจนใน `Index.tsx` (และหน้าอื่นที่ยาว):
```
Hero        → bg-background     (#0A0A0A ดำ)
Services    → bg-surface        (#141414 เทาเข้ม)
Work        → bg-background     (#0A0A0A)
Stats       → bg-surface-2      (#1C1C1C อ่อนกว่า)
Process     → bg-background
ClosingCTA  → bg-foreground text-background  (กลับขั้ว ขาว)
```
แต่ละ section คั่นด้วย hairline `white/12%` + `SectionHeader` index number

### 4) Paper Grain — ให้รู้สึกชัดขึ้น
ใน `.grain::before`:
- Opacity `0.05 → 0.12`
- Blend mode `screen → overlay` (จะเห็น texture ชัดขึ้นบนพื้นดำ)
- Background-size `180px → 140px` (ลายละเอียดขึ้น)
- ใช้ noise SVG ที่ละเอียดกว่า (เพิ่ม fractal noise inline SVG แทน base64 PNG เดิม)
- เพิ่ม `.grain-strong` utility สำหรับ section ที่อยากเน้น texture (opacity 0.18)

### 5) Section Header ปรับเล็กน้อย
- Index number (`01`, `02`...) ใช้ Unbounded 400 uppercase ให้สอดคล้อง
- เพิ่มระยะห่าง padding-top ของแต่ละ section เป็น `py-24 md:py-32` (จาก py-20) เพื่อให้หายใจ

### 6) Memory update
- `mem://style/typography` → Unbounded **400 UPPERCASE**, ไม่มี italic, tracking +0.01em
- `mem://style/aesthetic` → ระบุ section alternation pattern (background ↔ surface ↔ surface-2)
- Core: ลบ italic emphasis rule, เพิ่ม uppercase rule

---

## สิ่งที่ไม่เปลี่ยน
- Layout grid, hairlines, zero radius, color palette (ดำ/ขาว/เทา)
- Components, routing, copy, backend, animations
- Font family (Unbounded + IBM Plex Sans/Thai/Mono)

---

## ผลลัพธ์
- หัวข้อ Unbounded Normal UPPERCASE + tracking โปร่ง = อ่านง่าย ดูเป็นแบรนด์ editorial / fashion house
- ไม่มี italic = สะอาด เด็ดขาด
- Section สลับสี + grain ชัด = มีจังหวะ ไม่งง รู้ว่าจบ section ไหน
- Paper texture เห็นได้ = รู้สึกเป็นสิ่งพิมพ์จริง ไม่ใช่ flat dark

OK ลุยได้
