# Site-wide Consistency Review — ØRIONS

ตรวจทุกหน้า/คอมโพเนนต์เทียบกับ spec ใน `mem://index.md` (2026 Rate Card). พบ 8 จุดที่ไม่ตรง spec — เรียงตามผลกระทบ.

---

## A. สิ่งที่ออกนอก spec (ต้องแก้)

### 1. 60/30/10 — Ink ยังไม่ dominant
Spec: **INK 60% · SNOW 30% · CINNABAR 10%**. ปัจจุบัน Snow dominant:

| Page | Pattern (top → bottom) | ปัญหา |
|---|---|---|
| `/` Index | snow→ink→snow→ink→snow→ink→snow→ink | สลับ 50/50 ไม่ใช่ 60 ink |
| `/about` | snow→ink→snow→ink→snow→ink→snow→ink→snow | ปิดท้าย snow |
| `/consulting` | snow→ink→snow→ink→snow | snow ครอบ |
| `/services` | snow→**ink→snow→ink→ink** | 2 ink ติดกัน (production + closing) |
| `/diagnostic` | snow ทั้งหน้า — **0 ink** | ผิด 60/30/10 เต็มๆ |
| `/contact` | snow ทั้งหน้า — **0 ink** | ผิด 60/30/10 |
| `/work` | mixed | ok |
| `/studio` | 1 ink section | snow ครอบ |

**Fix:** เริ่ม hero แต่ละหน้าด้วย ink (หรือมี ink band บน hero), เพิ่ม ink ที่ Diagnostic (intro + closing CTA) และ Contact (form panel หรือ contact details), ตัดให้ /services ปิดด้วย snow.

### 2. Thai typography — `lang="th"` + `thai-wrap` ไม่ถูกใช้
- `index.html` ตั้ง `lang="en"` → `:lang(th)` safety net **ไม่ทำงาน**.
- ใช้ `font-thai` 50+ ที่ แต่มีแค่ **1 บรรทัด** (Services.tsx:275) ที่ใส่ `lang="th"` + `thai-wrap`.
- ผลคือ Thai ถูกตัดกลางคำ (line-break ผิด).

**Fix:** สร้าง `<ThaiText>` wrapper (`<p lang="th" className="font-thai thai-wrap …">`) แทนทุก `<p className="font-thai">` ปัจจุบัน. ทำเป็น utility component เพื่อบังคับ 3 attr พร้อมกัน.

### 3. `font-serif` บน headings — ผิดกฎ
Spec: *"NEVER apply font-serif to a heading"* (italic accent ใช้ `<em>` แทน).

พบใน:
- `CaseStudy.tsx:69, 105, 130` — `<h3 className="… font-serif italic …">`
- `CaseStudy.tsx:185` — giant serif numeral (อันนี้ใช้เป็น stat, ควรเปลี่ยนเป็น `.num-display` หรือ `.method-num`)

**Fix:** เปลี่ยน headings เป็น `h-display-*` ปกติ, ย้าย italic accent ไป `<em>` ภายใน.

### 4. CTA buttons hand-rolled — ไม่ใช้ `.btn-*`
มี `.btn-primary` / `.btn-accent` / `.btn-ghost` แล้ว แต่ pages ยังเขียนเอง:
- `Index.tsx:383`, `About.tsx:438`, `HealthCheck.tsx:457, 496`, `Contact.tsx:169`, `Consulting.tsx:198, 205`

**Fix:** swap → `className="btn-accent"` / `btn-ghost`. ลบ duplicated styling.

### 5. Footer wordmark ไม่ใช้ `.font-brand`
`Footer.tsx:45` ใช้ `font-mono` สำหรับ "ØRIONS · BANGKOK". Spec กำหนด instance ของ wordmark = Unbounded SemiBold.

**Fix:** `.font-brand` แทน `.font-mono` (เก็บ tracking/uppercase).

### 6. Hero treatment ไม่สอดคล้องกัน
- `PageHero` component มีอยู่ แต่ใช้แค่บางหน้า; Index/About/Consulting เขียน hero มือ.
- Index hero มี chrome bar (`ØRIONS · The Creative Company · Bangkok · 2026`), หน้าอื่นไม่มี → inconsistent brand chrome.

**Fix:** ทุกหน้าต้องมี `<PageChrome>` แถบบน (ØRIONS · BOUTIQUE CREATIVE STUDIO ‖ CATEGORY) ใต้ Nav — แล้ว hero ต่อท้าย.

### 7. SectionLabel index numbering ไม่สม่ำเสมอ
- Index: 02–08 (ข้าม 01 ที่ hero)
- About: 01–07
- Consulting: ไม่มี index
- Services: ไม่มี index

**Fix:** เลือก rule เดียว — ทุกหน้าที่มี ≥3 sections ใช้ `01 / 02 / 03 …` ตั้งแต่ section แรกหลัง hero.

### 8. Thai paragraph font-size scale ไม่มี
มี `text-[13px]` → `text-[18px]` กระจาย 8 ขนาด ใน `font-thai`. ไม่มี scale กลาง.

**Fix:** เพิ่ม utility 3 ขนาด: `.body-th-sm` (13/1.65), `.body-th` (15/1.7), `.body-th-lg` (17/1.7). Replace ทุก ad-hoc.

---

## B. สิ่งที่ตรง spec แล้ว (ไม่แตะ)

- Nav (`font-brand`, hamburger+mix-blend-difference) ✓
- `.section-ink` token inversion ✓
- TierMatrix / MethodStep / ProcessRow / PrincipleBlock / StackedCTA primitives ✓
- Color tokens (Snow / Black Russian / Cinnabar) ✓
- Routes + redirects ✓
- SEO centralization ✓

---

## C. ลำดับการแก้ (Implementation order)

1. **Foundations** — `index.html` lang, สร้าง `<ThaiText>`, เพิ่ม `.body-th*` utilities, swap Footer wordmark → `font-brand`.
2. **60/30/10 pass** — แก้ alternation 7 หน้า (Index, About, Consulting, Services, Diagnostic, Contact, Studio). Diagnostic + Contact ต้องเพิ่ม ink section ใหม่.
3. **Heading cleanup** — ลบ `font-serif` จาก CaseStudy headings, แทนด้วย `h-display-*` + `<em>`.
4. **CTA refactor** — swap hand-rolled buttons → `.btn-accent` / `.btn-ghost`.
5. **Hero/Chrome unification** — เพิ่ม `<PageChrome>` ทุกหน้า, ปรับให้ใช้ `<PageHero>` หรือ pattern เดียว.
6. **SectionLabel numbering** — ใส่ index ใน Consulting + Services; sync Index ให้เริ่มที่ `01`.
7. **Thai paragraph sweep** — แทน `<p className="font-thai text-[...]">` ทั้งหมดด้วย `<ThaiText size="sm|md|lg">`.

## D. Out of scope
- Copy rewrite (เก็บข้อความเดิม)
- รูปภาพ / video assets
- Routing / data / backend
- Animation timing

## E. Files touched (estimate)
`index.html`, `src/index.css`, `mem/index.md`, `src/components/{Footer,Nav,PageHero,ClosingCTA}.tsx`, สร้างใหม่ `src/components/ThaiText.tsx`, ทุก `src/pages/*.tsx` (ยกเว้น `NotFound.tsx`).
