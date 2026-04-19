

## UI / Design System Audit — สรุปทั้งระบบ

### 1. Design System ที่ตั้งใจไว้ (จาก index.css + tailwind)

**Color tokens** (light editorial newsprint):
- `background` cream #F5F2EC, `foreground` near-black #0F0F0F
- `surface` / `surface-2` paper tones
- `muted-foreground` #5F5F5F
- Accent gradient: `--accent-from` vermilion → `--accent-to` amber (Sunset Ink) — ใช้น้อย เฉพาะ highlight word

**Typography:**
- `font-brand` / `font-display` = Unbounded (ENG headlines, uppercase, tracking -0.02em)
- `font-thai` = IBM Plex Sans Thai (Thai body, normal-case)
- `font-mono` = JetBrains Mono (numbers, tags)
- Utility classes: `index-badge` / `label-mono` / `label-soft` (11px tracking 0.04em)

**Layout:**
- Padding: `px-6 md:px-10` ทุก section
- Section spacing: `py-24 md:py-32` (สำหรับ section ใหญ่), `py-16 md:py-20` (สำหรับ row)
- Border: `border-t border-foreground` (hairline หนา) หรือ `border-soft` (เบา)
- Radius: 0 ทุกที่ (`--radius: 0px`)

**Components ที่เป็น single source of truth:**
- `PageHero` — hero ทุกหน้าย่อย
- `SectionHeader` — divider บนหัว section
- `CTA` — ปุ่ม primary/ghost
- `Reveal` — animation
- `SelectedWorkReel`, `VideoReel`, `ShowRow` — content blocks

---

### 2. ปัญหาที่หลุด tone (รวม 9 จุด)

| # | หน้า / ที่ตั้ง | ปัญหา | ระดับ |
|---|---|---|---|
| **A** | **Index hero** | ใช้ `font-brand` + size 220px แต่ PageHero หน้าอื่นใช้ size 132px → home แตกออกจาก family ของหน้าอื่นมากเกินไป | กลาง |
| **B** | **Index** ทุก section heading | ใช้ขนาดต่างกันหลายค่า: `clamp(40px,6vw,72px)`, `clamp(36px,6vw,88px)`, `clamp(24px,3vw,40px)`, `text-[36px] md:text-[64px]` (vicious cycle) — ไม่มี scale ชัดเจน | **สูง** |
| **C** | **Index — Vicious Cycle** | heading ใช้ `font-thai` แต่ heading หน้าอื่นใช้ `font-display` → outlier เดียวในเว็บที่ headline เป็น Thai sans | **สูง** |
| **D** | **Index — Closing CTA** | ทำ corner marks เอง (4 spans) ทั้งที่มี `<CornerMarks/>` component อยู่แล้ว → duplicate pattern | กลาง |
| **E** | **Index, Work, Services** | section dividers ใช้ 3 รูปแบบ: `<SectionHeader>`, manual `border-t` + h2, raw h2 ลอย → ไม่ consistent | **สูง** |
| **F** | **About — The 6 Methods** | สร้าง section header เองด้วย `border-background/40` แทนการสร้าง `<SectionHeader variant="dark">` → รูปแบบเดียวกันแต่เขียนซ้ำ | กลาง |
| **G** | **Contact + Index CTA + Footer link** | ปุ่มมี 4 รูปแบบ: `<CTA primary>`, custom Link "Request the Audit" (border + hover invert), Nav "Let's Talk" pill, Contact "Request your audit" anchor → CTA primitive ไม่ได้ถูกใช้ครบทุกที่ | **สูง** |
| **H** | **Index** | ใช้ `tracking-[-0.04em]` / `-0.05em` / `-0.03em` / `-0.02em` ปนกันโดยไม่มี rule | กลาง |
| **I** | **Index marquee + Vicious Cycle** | ✦ symbol และ "วงจรอุบาท" — memory บอก "no ✦ symbols" และ design ปัจจุบันเป็น light theme (ไม่ใช่ dark editorial ตาม memory เก่า) → memory ล้าสมัย | ข้อสังเกต |
| **J** | **About PersonCard / SelectedWorkReel** | มี `group-hover:scale-[1.02]` / `scale-[1.04]` — memory เคยห้าม scale-on-hover แต่ปัจจุบันใช้แล้ว → ขัดกับ core rule เก่า | ข้อสังเกต |

---

### 3. แผนปรับให้ tone เดียวกันทั้งระบบ

**Step 1 — กำหนด Type Scale อย่างเป็นทางการ** (เพิ่มใน `index.css` เป็น utility)
```
.h-display-xl  → clamp(72px, 14vw, 180px)   // Home hero ØRIONS เท่านั้น
.h-display-lg  → clamp(56px, 10vw, 132px)   // PageHero (ทุกหน้าย่อย)
.h-display-md  → clamp(40px, 6vw, 88px)     // Section headline (CTA, manifesto)
.h-display-sm  → clamp(28px, 3.5vw, 48px)   // Sub-section (Social & Commercials, Music...)
.h-display-xs  → clamp(20px, 2vw, 28px)     // Card title
```
แล้วแทนที่ inline `style={{fontSize:...}}` ทุกตัวด้วย class เหล่านี้

**Step 2 — ขยาย `<SectionHeader>` ให้มี variant**
- เพิ่ม prop `variant?: "light" | "dark"` (dark สำหรับ section bg-foreground)
- บังคับใช้ทุก section หัวข้อ (Index, About, Services, Work) — ลบ heading ลอยๆ

**Step 3 — บังคับใช้ `<CTA>` ทุก primary action**
- แทน "Request the Audit" custom (Index), "Request your audit" (Contact), "Let's Talk" (Nav) ด้วย `<CTA>` ที่ extend variant: `primary | ghost | invert` (invert สำหรับบน bg-foreground)
- ลบ duplicate corner marks ใน Index closing → ใช้ `<CornerMarks/>` component

**Step 4 — แก้ heading "วงจรอุบาท" (Index)**
- เปลี่ยนจาก `font-thai` เป็น `font-display` ภาษาอังกฤษ + Thai supporting line ด้านล่าง (เช่น "The Vicious Cycle" + sub "วงจรอุบาทของหลายธุรกิจ") เพื่อ match pattern PageHero

**Step 5 — Tracking scale**
- กำหนด: display-xl/lg = `-0.04em`, display-md = `-0.03em`, display-sm/xs = `-0.02em` (เลิกใช้ -0.05em)

**Step 6 — Spacing scale**
- Section ใหญ่: `py-24 md:py-32`
- Section รอง: `py-16 md:py-20`
- Card inner: `p-6 md:p-8`
- ลบค่า py-28, py-40 ที่หลุด scale

**Step 7 — Memory cleanup**
- อัปเดต `mem://style/aesthetic` จาก dark theme → light editorial newsprint (memory ปัจจุบันยังบอก #0A0A0A bg ซึ่งไม่ตรงกับ code)
- ลบกฎ "no scale-on-hover" ออก (ใช้แล้วจริง) หรือลบ `scale` ออกจาก code

---

### 4. ลำดับการลงมือ (แนะนำเป็น 3 PR ย่อย)

**PR1 — Tokens & Type Scale** (impact สูงสุด, risk ต่ำ)
- เพิ่ม `.h-display-*` ใน `index.css`
- แทนที่ทุก `style={{fontSize: clamp(...)}}` ในทั้ง 5 หน้า

**PR2 — Components consolidation**
- ขยาย `SectionHeader` (dark variant), `CTA` (invert variant)
- แทน manual heading + custom buttons ทั้งหมด

**PR3 — Polish**
- Vicious Cycle heading rework
- Index closing CTA → ใช้ `<CornerMarks>`
- Memory update

---

### 5. ผลที่ได้

- **เร็วขึ้น** เวลาสร้าง section ใหม่ — copy pattern เดียว
- **Visual rhythm คงที่** ทั้ง 5 หน้า (hero → header → content → CTA)
- **Brand voice ชัด** Unbounded เป็น display, Plex Thai เป็น body — ไม่มีกรณี exception
- **Maintainability** — เปลี่ยน accent gradient ที่เดียวมีผลทุกที่ (ตอนนี้ก็เป็นอยู่แล้ว แต่ heading sizes กระจาย)

