## Scope
ปรับ design ทั้งไซต์ตามคำสั่ง 5 ข้อ — typography hygiene, brand wordmark, headline swap, 60/30/10 ดำ/ขาว/ส้ม, และเลิกใช้ layout "3 blocks เท่ากัน" ซ้ำซาก ไม่แตะ business logic, route, หรือ copy ภาษาไทยอื่นนอกจุดที่ระบุ

---

## 1. Brand wordmark "ØRIONS" → Unbounded Semi-Bold
- เพิ่ม `Unbounded:wght@600` ใน `@import` ของ `src/index.css`
- แก้ utility `.font-brand` ให้ใช้ `'Unbounded', sans-serif`, `font-weight: 600`, `letter-spacing: 0.08em` (ลดจาก 0.16em เพราะ Unbounded กว้างกว่า Inter)
- ไม่แตะ Nav/Footer markup — เพราะใช้ `.font-brand` อยู่แล้ว เปลี่ยน utility ที่เดียวพอ
- อัปเดต `mem://index.md` core rule

## 2. Hero headline swap
- `src/pages/Index.tsx` HERO: `No Guesswork. Just Craft.` → **`Stories, Refined.`** (มี italic cinnabar accent ที่ `Refined`)
- ปรับ SEO title หน้า `/` ให้สอดคล้อง (`ØRIONS — Stories, Refined.`)
- `src/pages/Services.tsx` section Ø Boutique: เปลี่ยน H2 จาก `Stories, refined.` → **`No Guesswork. Just Craft.`** (italic cinnabar ที่ `Just Craft.`) — ย้าย tagline เดิมมาเป็น headline ของ Boutique ตามที่ user สั่ง
- เก็บ supporting copy ใต้ headline ทั้งสองหน้าเดิมไว้

## 3. Thai font hygiene → IBM Plex Sans Thai
- ตรวจให้ทุก Thai paragraph ใช้ `font-thai` (utility มีอยู่แล้ว map ไป IBM Plex Sans Thai)
- ปัจจุบันใช้แล้วเป็นส่วนใหญ่ — sweep หาจุดตกหล่นที่ยังเป็น `font-serif italic` + ภาษาไทย (เช่น italic Thai pull-quotes ใน Index `แบรนด์ดีๆ ส่วนใหญ่ติดอยู่ตรงนี้`, About `ฟัง...`) แล้วเปลี่ยนเป็น `font-thai`
- เพิ่ม base rule ใน `src/index.css`: `:lang(th) { font-family: 'IBM Plex Sans Thai', 'Inter', sans-serif; }` เป็น safety net
- กฎ word-break: เพิ่ม utility `.thai-wrap { word-break: keep-all; line-break: strict; overflow-wrap: anywhere; text-wrap: pretty; }` apply กับ Thai paragraphs ยาว เพื่อแก้การตัดคำกลางคำ

## 4. 60/30/10 contrast pass — สลับ section ขาว/ดำ
ปัจจุบันทุก section เป็น snow (ขาว 95%) — ผิดสัดส่วน. Target: ดำ ~60% / ขาว ~30% / cinnabar ~10% โดยสลับ band ให้มีจังหวะ

### Index.tsx ลำดับใหม่
| # | Section | bg | text |
|---|---|---|---|
| 01 Hero | snow | ink |
| 02 The Problem | **ink** | snow |
| 03 The Insight | snow | ink (เก็บ band cinnabar hairline) |
| 04 Divisions | **ink** | snow |
| 05 Why ØRIONS | snow | ink |
| 06 Selected Work | **ink** | snow |
| 07 Closing CTA | snow | ink |

### About.tsx ลำดับใหม่
01 Manifesto snow → 02 Promise **ink** → 03 How We Refine snow → 04 Beyond **ink** → 05 Divisions snow → 06 Team **ink** → 07 CTA snow

### Services.tsx
01 Hero snow → 02 Boutique **ink** → 03 Digital snow → 04 Production **ink** → 05 Ladder snow → 06 Fine print **ink**

### Consulting / Diagnostic / Work / Studio / Contact
sweep เดียวกัน — สลับ band ทุก section, ไม่ให้ snow ติดกัน 2 section. cinnabar ใช้เฉพาะ accent line, hairline band, eyebrow, italic — ไม่ทำ full-bleed cinnabar section

### Mechanics
- ใช้ `bg-foreground text-background` สำหรับ ink section + ปรับ child colors: `text-muted-foreground` → `text-background/60`, `border-foreground/20` → `border-background/20`, `text-cinnabar` คงเดิม (อ่านออกบนทั้ง 2 bg)
- เพิ่ม helper class `.section-ink { background:hsl(var(--foreground)); color:hsl(var(--background)); }` + auto-scope `--muted-foreground` override ใน scope นั้น เพื่อไม่ต้องแก้ทุก child

## 5. แก้ design ซ้ำ — เลิก layout "3 blocks เท่ากัน"
ปัจจุบัน Index มี 3 grids แบบ 3-คอลัมน์เท่ากัน ติดกัน (Problem, Divisions, Why) About มี 4 grids แบบเดียวกันติดกัน (Pains, Promises, Pillars, Data, Beyond) — ทำให้หน้าเดียวกันดูซ้ำมาก

### Index — variation pass
- **02 Problem**: เปลี่ยนเป็น **stacked editorial list** (number ซ้าย ใหญ่ + EN headline + Thai body แนวนอน, hairline คั่น) ขึ้น ink bg — ใช้ pattern `<ProcessRow>` ที่มีอยู่
- **04 Divisions**: คง 3-col grid (signature pattern เดียวที่ใช้ 3 blocks) แต่บน ink bg + column กลาง (Digital) highlight ด้วย cinnabar accent
- **05 Why ØRIONS**: เปลี่ยนเป็น **giant numeral layout** — ใช้ `<MethodStep>` (เลข Newsreader cinnabar ใหญ่ + sans title) บน snow, 2-col asymmetric (60/40)

### About — variation pass
- **01 Pains**: stacked rows (ProcessRow style) บน snow
- **02 Promises**: 3-col grid บน ink
- **03 Pillars**: editorial 2-col (sticky H2 ซ้าย + items ขวา) บน snow
- **03 Data**: MethodStep numerals บน snow (ต่อจาก Pillars แต่คนละ rhythm)
- **04 Beyond**: หนึ่ง `<PrincipleBlock>` ใหญ่ + 3 supporting bullets แนวนอน (เลิก 3-col card ซ้ำ) บน ink
- ทำให้ทุก section มี layout signature ต่าง — eye ไม่เบื่อ

### Tier matrices ที่ Services
- ใช้ `<TierMatrix>` component ที่มีอยู่แล้วแทน 3-card grid ของ Digital tiers
- Production days เก็บ 3-card grid ได้ (คนละ context จาก Digital) แต่บน ink

---

## Technical section

**Files edited:**
- `src/index.css` — เพิ่ม Unbounded import; แก้ `.font-brand`; เพิ่ม `:lang(th)` rule, `.thai-wrap`, `.section-ink` (+ nested overrides)
- `src/pages/Index.tsx` — swap H1, สลับ bg per section, refactor Problem→stacked, Why→MethodStep
- `src/pages/About.tsx` — สลับ bg per section, refactor Pillars→2-col asymmetric, Beyond→PrincipleBlock+bullets, Thai font sweep
- `src/pages/Services.tsx` — swap Boutique H2, สลับ bg, Digital tiers→TierMatrix
- `src/pages/Consulting.tsx`, `src/pages/HealthCheck.tsx`, `src/pages/Work.tsx`, `src/pages/Projects.tsx`, `src/pages/Contact.tsx`, `src/pages/CaseStudy.tsx` — สลับ bg pass + Thai font sweep
- `src/components/ClosingCTA.tsx`, `src/components/Footer.tsx` — รับ ink mode ถ้า preceding section เป็น ink (ปรับ border-top)
- `mem://index.md` — update core: Unbounded brand, Stories Refined tagline, 60/30/10 ink-snow rhythm rule

**Not touching:**
- copy ภาษาไทย (นอกเหนือจุด swap headline)
- routes / data / backend
- imagery
- Nav structure
- `src/integrations/supabase/*`

---

## Out of scope
- responsive overhaul beyond ที่จำเป็นกับ ink sections
- เพิ่ม route / page ใหม่
- เปลี่ยน palette เกินกว่าที่กำหนด
- redesign hero illustrations / video reels
