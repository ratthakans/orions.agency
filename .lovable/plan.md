## เป้าหมาย
Re-align เว็บกับ **ØRIONS Master Deck V6.6** — เลิกทดลอง Gemini/Plus Jakarta แล้วกลับสู่ identity ของแบรนด์จริง: **Dark editorial · Unbounded + IBM Plex · ไม่มี gradient สี** ให้เว็บรู้สึกเป็นตัวเองและพรีเมียมเหมือน pitch deck

หลักการจาก deck:
- Dark canvas (ดำสนิท) + paper-grain texture บางๆ
- Type duo: **Unbounded** (display, ตัวหนา compressed) + **IBM Plex Sans / Plex Sans Thai** (body)
- Mono labels ใช้ IBM Plex Mono (eyebrow, meta)
- **ไม่มีสี accent** — ใช้ขาว/ดำ/เทาเท่านั้น เน้นข้อความด้วย **bold weight** และ **italic** แทนการใช้สี
- Hairlines, zero radius, generous whitespace, ภาพ 1:1 / 16:9 ขอบคม

---

## ระบบใหม่

### Palette (เลิก Gemini ทั้งหมด)
| Token | ใหม่ |
|---|---|
| `--background` | `#0A0A0A` (ดำสนิท ตามดีค) |
| `--foreground` | `#FAFAFA` |
| `--surface` | `#141414` |
| `--muted-foreground` | `#A3A3A3` |
| `--border` | `#FFFFFF` 12% (hairline บนดำ) |
| `--border-soft` | `#FFFFFF` 6% |
| **Accent** | **ไม่มี** — ใช้ `bold` weight + `italic` แทน |

ลบทุก: `--gemini-*`, `--accent-from/mid/to`, `--orion-orange`, `.text-gemini`, `.bg-orion`, gradient utilities

### Fonts (กลับเข้า deck spec)
| Use | ใหม่ |
|---|---|
| Display H1/H2 | **Unbounded** 700/800 — `letter-spacing: -0.04em` |
| Body Eng | **IBM Plex Sans** 400/500/600 |
| Body Thai | **IBM Plex Sans Thai** 400/500/700 |
| Mono labels | **IBM Plex Mono** 400/500 (เปลี่ยนจาก JetBrains Mono) |
| Italic accent | IBM Plex Sans **italic 600** (ไม่ใช่ gradient text) |

ลบ: Plus Jakarta Sans, JetBrains Mono, Instrument Serif

### Shape & motion
- Zero radius **คงเดิม**
- Hairlines ทุกตัวเปลี่ยนเป็น `white/12%` แทนดำ
- Paper-grain noise overlay 3% (มีอยู่แล้ว แค่ปรับ blend → `screen` บนดำ)
- ไม่มี shadow / glow / gradient bg / pill button

---

## ไฟล์ที่แก้

### 1) `index.html`
- Font link → `Unbounded:wght@600;700;800;900&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,500;1,600&family=IBM+Plex+Sans+Thai:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap`
- ลบ `Plus Jakarta Sans`, `JetBrains Mono`

### 2) `src/index.css`
- เปลี่ยน `:root` → dark tokens (default dark, ลบ light variant)
- `body { background: #0A0A0A; color: #FAFAFA; font-family: 'IBM Plex Sans', 'IBM Plex Sans Thai' }`
- `h1,h2 { font-family: 'Unbounded'; font-weight: 800 }`
- `.font-display` → Unbounded 800
- `.font-mono` → IBM Plex Mono
- `.font-thai` → IBM Plex Sans Thai
- `.font-serif` → ลบ (deck ไม่มี serif)
- `.text-orion` / `.bg-orion` / `.text-gemini` / `.bg-gemini` / `.text-gradient` / `.bg-gradient-accent` → **ลบทั้งหมด**
- `.label-mono` / `.index-badge` → IBM Plex Mono uppercase tracking 0.08em
- Paper grain `mix-blend-mode: screen` opacity 4%
- Selection สีกลับด้าน

### 3) `tailwind.config.ts`
- ลบ `colors.orion`, `colors.gemini`
- Default dark theme (ไม่ต้องมี light)
- Border default → `hsl(0 0% 100% / 0.12)`

### 4) Component sweep (find/replace)
- `text-gemini italic` → `italic font-semibold` (ทุกหน้า — Index, Services, About, Work, Pricing, Contact, ClosingCTA)
- `text-orion` → ลบ (เป็น white โดย default)
- `bg-orion` → `bg-foreground` (status bar เป็นขาวบนดำ หรือแถบดำ + text ขาว)
- `font-serif` → ลบ class นี้ออกทุกที่ (เพราะลบจาก CSS แล้ว — H1/H2 จะใช้ Unbounded อัตโนมัติ)

### 5) สไตล์ตาม deck (เพิ่ม polish)
- **ØRIONS wordmark** ทุกที่ → ใช้ Unbounded 800 ตัวใหญ่ เช่นใน hero และ footer (เหมือนหน้าแรก deck)
- **Italic emphasis pattern** ใน body text: คำสำคัญใช้ `italic font-semibold` (เลียนแบบ deck "**Creative Agency**", "**social vicious cycle**", "**ทุกอย่างก็จบ**")
- **Stat block** style จาก deck p.8: ตัวเลข Unbounded 800 ใหญ่ + label IBM Plex Mono เล็ก uppercase — apply กับ stats sections
- **Eyebrow + arrow** pattern (`IMPACT SNAPSHOT ↗`) — ใช้กับ section header ทุกที่

### 6) Memory
- `mem://index.md` Core: rewrite → Dark editorial, Unbounded + IBM Plex Sans/Thai/Mono, no accent color, italic+bold for emphasis
- `mem://style/aesthetic` + `mem://style/typography`: rewrite ตาม deck V6.6
- ลบ refs ทั้งหมดเรื่อง Gemini, Plus Jakarta, vermilion, Sunset Ink, cream paper

---

## สิ่งที่ **ไม่** เปลี่ยน
- Layout/grid, hairline structure, zero-radius
- Type scale utilities (`.h-display-xl/lg/md/sm/xs`)
- Components, routing, copy, backend
- Reveal animations, page transitions

---

## ผลลัพธ์
- เว็บ = ส่วนต่อขยายของ deck (Brand consistency 100%)
- ตัด noise สี ออกจน identity เด่น = **typographic confidence**
- Unbounded หนาๆ + Plex italic = signature ที่ไม่เหมือนใคร
- ทุกอย่าง breathe + minimal เหมือนเดิม แต่ feels more *ØRIONS*

ลุยได้เลยถ้า OK
