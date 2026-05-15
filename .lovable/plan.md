## เป้าหมาย
ปรับ ØRIONS → **Quiet Gemini** — เอา Gemini palette + Plus Jakarta Sans มาใช้บน foundation **minimal · clean · breathing space** ที่มีอยู่

หลักการ: Gemini *เป็นจิตวิญญาณ* ไม่ใช่ skin — gradient ใช้เฉพาะจุด, ไม่มี glow/blur orb, ไม่มี gradient เต็มแถบ, เก็บ whitespace เดิมไว้ทั้งหมด

---

## ระบบใหม่ (restrained)

### สี
| Token | เดิม | ใหม่ |
|---|---|---|
| `--background` dark | `#0F0F0F` | คงเดิม |
| `--background` light | `#F5F2EC` cream | `#FAFAFA` (ลด warmth นิด) |
| `--accent / orion` | `#E94B2A` vermilion solid | `#4285F4` Gemini Blue solid (ใช้แทน vermilion ในที่ที่ต้อง solid) |
| Gradient accent | — | `linear-gradient(110deg, #4285F4, #9B72CB, #D96570)` — **ใช้เฉพาะ italic word ใน H1 และ moments สำคัญ** |

**กฎเข้ม:**
- Gradient = ใช้กับ italic accent word ใน headline เท่านั้น (ไม่ใช้กับ background, button, border)
- Solid Gemini Blue = แทนตำแหน่งที่ vermilion เคยอยู่ทุกที่ (label, mono eyebrow, hover state)
- ไม่มี glow / blur orb / aurora background
- ไม่มี gradient bar กว้างๆ — top status bar ใช้สี solid ดำ/น้ำเงินเรียบ

### Font
| Use | เดิม | ใหม่ |
|---|---|---|
| H1/H2 base | Instrument Serif (regular) | **Plus Jakarta Sans 600** (clean, geometric humanist) |
| Italic accent ใน headline | Instrument Serif italic + vermilion | **Plus Jakarta Sans italic 500** + Gemini gradient text |
| Body Eng | IBM Plex Sans / Plex Thai | **Plus Jakarta Sans** |
| Body Thai | IBM Plex Sans Thai | คงเดิม |
| Mono labels | JetBrains Mono | คงเดิม |

→ ทิ้ง serif romantic ออก เพราะ Gemini มี soul แบบ humanist sans ที่อ่านสบาย ไม่ดราม่า

### Radius / shape / shadows
- Hairline borders **คงเดิมทั้งหมด**
- Buttons: **คง zero-radius เดิม** (ไม่ใช้ pill — pill จะดูเหมือน Google product มากเกินจน lose ØRIONS DNA)
- ไม่มี shadow / glass / blur ทุกที่
- Whitespace ทุก section คงเดิม (เพิ่ง standardize type scale ไป)

---

## ไฟล์ที่แก้

### 1) `index.html`
- เพิ่ม Google Font `Plus Jakarta Sans:wght@400;500;600;700;800;ital`
- ลบ `Instrument Serif`
- คง IBM Plex Sans Thai + JetBrains Mono

### 2) `src/index.css`
- `:root` — เปลี่ยน `--orion` HSL จาก vermilion → Gemini Blue (`hsl(217 89% 61%)`)
- เพิ่ม `--gemini-blue / --gemini-purple / --gemini-pink` HSL tokens
- `.font-serif` → map ไป `Plus Jakarta Sans` (italic ก็ใช้ตัวนี้ + italic)
- `body` font-family → Plus Jakarta Sans + IBM Plex Sans Thai fallback
- เพิ่ม utility:
  ```
  .text-gemini { background: linear-gradient(110deg, #4285F4, #9B72CB, #D96570);
                 -webkit-background-clip: text; background-clip: text; color: transparent; }
  ```

### 3) `tailwind.config.ts`
- `colors.orion` → คงชื่อไว้ (เพื่อไม่ break) แต่ map HSL ไป Gemini Blue
- เพิ่ม `colors.gemini.{blue, purple, pink}`

### 4) Headline accents — เปลี่ยน pattern
ทุกที่ที่เป็น `<em className="text-orion italic">...</em>` → `<em className="text-gemini italic">...</em>`

ไฟล์ที่กระทบ:
- `src/pages/Index.tsx` — H1 + H2 ทุก section
- `src/pages/Services.tsx`, `About.tsx`, `Work.tsx`, `Pricing.tsx`, `Contact.tsx`
- `src/components/ClosingCTA.tsx`

→ font-serif italic จะ render เป็น Plus Jakarta italic + Gemini gradient text

### 5) Status bar (top, ทุกหน้า)
- เดิม: `bg-orion` vermilion solid → ใหม่: คง solid แต่เป็น `bg-foreground` (ดำ) + text Gemini Blue **หรือ** ใช้ Gemini Blue solid
- **ไม่ใช้** gradient เพื่อรักษา minimal

### 6) ตำแหน่งที่ใช้ vermilion เป็น solid (mono labels, eyebrows, hover)
- หาแทบทุก `text-orion` ที่ไม่ใช่ italic accent → เปลี่ยนเป็น `text-[#4285F4]` (Gemini Blue solid)
- ตัวอย่าง: process step `<span className="text-orion">✦</span>`, eyebrow `text-orion`, sector tag

### 7) Memory update
- `mem://index.md` Core: ปรับ palette + font ตามใหม่ — เน้นย้ำว่า **Gemini quiet, not Gemini product**
- `mem://style/aesthetic` + `mem://style/typography`: rewrite

---

## สิ่งที่ **ไม่** เปลี่ยน
- Layout, grid, hairline borders, zero-radius
- Whitespace ทุก section
- Type scale (เพิ่ง standardize)
- Copy ทุกตัว
- Components, routing, backend
- ไม่มี orb / glow / shadow / pill / glassmorphism

---

## ผลลัพธ์
- รู้สึก clean modern เหมือน Google AI product page **แต่** ยังคง breathing space และ editorial discipline
- Gemini gradient เห็นแค่ตอน *italic moment* — เด่นเพราะใช้น้อย
- ทุกอย่างยังหายใจได้ ไม่อึดอัด

ลุยได้เลยถ้า OK
