## เป้าหมาย
ปรับ ØRIONS → **Collins-style** — editorial classic, **clean ที่สุด**, ทิ้ง Gemini gradient ทั้งหมด, เปลี่ยน feel จาก "tech product" → "design studio ที่นิ่งและมั่นใจ"

หลักการที่ Collins ใช้และเราจะยืม:
1. **Serif classic ตัวใหญ่มาก** กลางจอ บนพื้น off-white — ไม่มีอะไรอย่างอื่นในเฟรมแรกเลย
2. **เฟรมแรกว่างมาก** — headline อยู่กลาง/ค่อนล่าง พื้นที่ว่างด้านบนเยอะ (breathing space สุดขั้ว)
3. **Chrome แทบไม่มี** — logo ซ้ายบน, hamburger ขวาบน, จบ. ไม่มี nav links, ไม่มี announcement bar, ไม่มี CTA
4. **สี mono เกือบทั้งหมด** — off-white bg + ink black text. สีจะมาจาก *ภาพงาน* ไม่ใช่จาก UI
5. **Awards row** เล็กๆ ใต้ headline — mono labels, ไม่ตะโกน
6. **Zero gradient, zero glow, zero accent color บน UI**

---

## ระบบใหม่

### สี (lock down)
| Token | ใหม่ |
|---|---|
| `--background` | `#F5F2EC` (คงเดิม cream) **หรือ** `#F2EFE9` Collins-warmer-white |
| `--foreground` | `#0F0F0F` ดำสนิท คงเดิม |
| `--orion` (solo accent) | **ลบทิ้ง** — UI ไม่มีสี accent เลย ใช้ ink black ทุกที่ |
| `--gemini-*` gradient tokens | **ลบทิ้งทั้งหมด** |
| `.text-gemini` utility | **ลบทิ้ง** |

→ italic accent ใน headline จะเป็น **ดำ italic เฉยๆ** (ไม่มีสี ไม่มี gradient) — Collins ทำแบบนี้ ความ elegance มาจาก *typeface* ไม่ใช่สี

### Font (กลับสู่ serif แต่ระบบ Collins)
| Use | ใหม่ |
|---|---|
| H1/H2 display | **Cormorant Garamond** (700/600) — ใกล้เคียง Collins มากที่สุด, ฟรี Google Font, มี contrast สวย หรือ **EB Garamond** (สง่ากว่า) |
| Italic accent | Cormorant Garamond italic 500 — ดำเหมือน body |
| Body Eng | **Inter** หรือ **Söhne-like = Inter Tight** น้ำหนัก 400 — clean sans เรียบ |
| Body Thai | IBM Plex Sans Thai (คงเดิม) |
| Mono labels | JetBrains Mono (คงเดิม) |
| Brand logo "ØRIONS" | คง **Unbounded** หรือเปลี่ยนเป็น **letterspaced Inter 600 uppercase** แบบ COLLINS — แนะนำใช้ Inter 600 tracked +0.18em เพื่อให้ minimal สุด |

→ ทิ้ง Plus Jakarta Sans (มัน tech เกินไป), กลับไป serif สำหรับ display เพราะ Collins ใช้

### Layout / chrome
- **Nav**: เหลือแค่ logo ซ้าย + hamburger ขวา. ลบ Services/Pricing/Work/About inline links ออกจาก top bar — ย้ายไป overlay menu ตอนกด hamburger
- **Announcement bar (Q3 2026 BOOKING)**: **ลบทิ้ง** — Collins ไม่มี
- **Status bar (StudioStatusBar)**: **ลบทิ้ง** จาก top — ย้ายไปท้ายหน้าเป็น mono row เล็กๆ
- **Hero**: headline serif ใหญ่มาก กลาง/ค่อนล่าง, เหนือ headline ว่าง 30vh+, ใต้ headline = subtitle 1 บรรทัดเล็ก + awards row mono
- **Sections**: เพิ่ม top/bottom padding เป็น `py-32 md:py-48` (เดิมน่าจะ py-20-24)
- **Buttons**: คง zero-radius แต่เปลี่ยน label เป็น Inter 500 normal case (ไม่ uppercase) — Collins-feel
- **Gradient bars / accent dots / orion ✦**: ลบทุกที่ → แทนด้วย hairline หรือไม่มีเลย

### Radius / shape
- คง zero-radius
- ไม่มี shadow, glass, blur
- Hairlines บางลง (ใช้ `border-soft` มากกว่า `border` ดำเข้ม)

---

## ไฟล์ที่แก้

### 1) `index.html`
- เพิ่ม `Cormorant Garamond:wght@400;500;600;700;ital@0;1` + `Inter:wght@300;400;500;600`
- ลบ `Plus Jakarta Sans` และ `Unbounded` (ถ้าจะให้ logo ใช้ Inter tracked)
- คง IBM Plex Sans Thai + JetBrains Mono

### 2) `src/index.css`
- ลบ tokens: `--gemini-blue`, `--gemini-purple`, `--gemini-pink`, `--accent-from/mid/to`, `--orion-orange`
- ลบ utility: `.text-gemini`, `.bg-gradient-accent`, `.text-gradient`, `.accent-dot`
- เปลี่ยน `.text-orion` / `.bg-orion` → ใช้ `hsl(var(--foreground))` (= ink ดำ) เพื่อไม่ break แต่ลบสีออก
- `body` font → `Inter, IBM Plex Sans Thai`
- `h1-h6` font → `Cormorant Garamond, IBM Plex Sans Thai` weight 600
- `.font-serif` → `Cormorant Garamond` weight 500 italic-ready
- `.font-display` → `Cormorant Garamond` weight 700
- `.font-brand` → `Inter` weight 600 letter-spacing 0.18em uppercase (Collins logo style)
- `.btn-label` → `Inter` weight 500, normal case, no uppercase

### 3) `tailwind.config.ts`
- ลบ `colors.orion`, `colors.gemini`
- คง mono palette เดิม
- ลบ aurora keyframes (ไม่ใช้แล้ว)

### 4) `src/components/Nav.tsx`
- ลบ announcement bar (Q3 2026 BOOKING) ออกทั้ง block
- ลบ inline nav links ใน desktop bar — เหลือ logo ซ้าย + hamburger ขวา (ใช้ icon เส้นบาง)
- เปิด overlay menu (full-screen หรือ side panel) เมื่อกด hamburger — แสดง Services/Pricing/Work/About/Contact ตัวใหญ่ serif
- ลบ scroll progress hairline สี orion (หรือเปลี่ยนเป็น ink)
- ลบปุ่ม "Get a free proposal" ออกจาก top bar — ย้ายไปใน overlay menu

### 5) `src/components/PageHero.tsx` + `src/pages/Index.tsx` hero
- ลด pre-headline content (eyebrow, status) ให้น้อยที่สุดหรือไม่มีเลย
- Headline serif ใหญ่มาก ตำแหน่งกลาง/ค่อนล่างของ viewport
- ใต้ headline: subtitle 1 บรรทัด + awards/credentials row mono เล็ก
- เพิ่ม top spacing `pt-[40vh]` แบบ Collins

### 6) Headline accents — ทุกหน้า
- `<em className="text-gemini italic">...</em>` → `<em className="italic">...</em>` (ดำ italic เฉยๆ)
- ทุก `text-orion` solid → ลบ class ทิ้ง (กลายเป็น text-foreground default)
- ทุก `bg-orion` → เปลี่ยนเป็น `bg-foreground` หรือลบทิ้ง

ไฟล์: `Index.tsx`, `Services.tsx`, `About.tsx`, `Work.tsx`, `Pricing.tsx`, `Contact.tsx`, `ClosingCTA.tsx`, `PageMark.tsx`, `Nav.tsx`, `StudioStatusBar.tsx`

### 7) `src/components/PageMark.tsx`
- เปลี่ยน `<span className="text-orion">✦</span>` → ลบ ✦ ออกหรือเป็นสีดำ

### 8) `src/components/StudioStatusBar.tsx`
- ถ้ายังใช้ ลบสี accent ใดๆ ให้เป็น mono ล้วน

### 9) Section padding ทั่วทั้งไซต์
- เพิ่ม vertical breathing room: ทุก section หลัก `py-32 md:py-48`

### 10) Memory update
- `mem://index.md` Core: rewrite — "Collins-style editorial. Off-white #F5F2EC, ink #0F0F0F. Cormorant Garamond display, Inter body. **No accent color, no gradient.** Italic accents = black italic only."
- `mem://style/aesthetic` + `mem://style/typography`: rewrite

---

## สิ่งที่ **ไม่** เปลี่ยน
- โครงสร้างหน้าและ routing
- Backend, components functionality
- Copy ทุกตัว (ยังคง brand voice)
- Hairline grid, zero-radius
- ไม่เพิ่ม shadow / glass / pill / blur

---

## ผลลัพธ์ที่คาดหวัง
- Hero แรกของไซต์: เปิดมาเจอแค่ logo + hamburger + headline serif ใหญ่กลางจอ บน off-white — เงียบ, มั่นใจ, classic
- Awards/credentials row mono เล็กๆ ใต้ headline (ตามแบบ Collins "8x Agency of the Year")
- ไม่มีสี accent ใดๆ บน UI — สีจะมาจาก thumbnail งานข้างใต้เท่านั้น
- รู้สึก clean, ง่าย, ชัดเจน, มี breathing space เต็มที่

ลุยได้เลยถ้า OK — หรือบอกถ้าอยากปรับจุดไหน (เช่น เก็บ accent color ไว้บ้าง, หรือใช้ EB Garamond แทน Cormorant)
