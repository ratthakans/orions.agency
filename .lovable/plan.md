## เป้าหมาย

ทำให้ ØRIONS รู้สึกเหมือน "editorial studio" สเกล Collins — หน้าโล่งมาก, headline เซริฟใหญ่อยู่กลางจอ, chrome เกือบหาย, สีจัด (Cinnabar) ปรากฏน้อยมากใน UI แต่ไประเบิดในรูป/ปกงาน. ไม่เพิ่ม animation, ไม่เพิ่ม component ใหม่เยอะ — เป็นการ "เอาออก" มากกว่าใส่เพิ่ม

อ้างอิง Collins ที่จะหยิบมา:
- Nav: logo เล็กซ้าย + hamburger ขวา, ที่เหลือว่างหมด
- Hero: headline เซริฟ italic ขนาดมหาศาล อยู่กลางจอ ไม่มี subhead ใกล้ ๆ, มี whitespace เหนือ-ใต้ 40-50vh
- Awards strip: แถวเล็ก ๆ มี laurel ขนาบ ตัวหนังสือจิ๋ว
- Section จัดเป็น "ผลงาน 1 ชิ้น = 1 หน้าจอ" ภาพเต็ม-กว้าง, caption เล็กมาก
- ไม่มี card, ไม่มี border, ไม่มี mono label เยอะ — เปลี่ยน hairline เป็น "เว้นวรรค"

---

## เปลี่ยน 7 จุดหลัก

### 1) Nav: ลดให้เบาแบบ Collins
- ลบ StudioStatusBar ออกจาก nav (ย้ายลง Footer อย่างเดียว)
- Logo `ØRIONS` ฝั่งซ้ายตัวเล็กลง (ความสูง ~14px tracked), hamburger ฝั่งขวา
- ไม่มี backdrop blur, ไม่มี border ใต้ nav — โปร่งทั้งแถบ
- Overlay menu: พื้น Snow (ไม่ใช่ ink) + ลิงก์ Newsreader italic ขนาด `h-display-lg`, จัดชิดซ้ายแทน center

### 2) Hero (`/`): ให้ headline หายใจ
- ลบ chip 6:3:1, ลบ scroll indicator, ลบทุกอย่างรอบ headline
- เหลือเฉพาะ:
  - Headline เซริฟ italic 1 บรรทัด (เช่น *"Stories, refined."*) ขนาด `clamp(80px, 14vw, 220px)`, จัดกลางจอแนวตั้ง
  - บรรทัดเล็กใต้ headline 1 บรรทัด: *"Independent editorial studio. Bangkok."*
- ด้านบน headline ~45vh ว่าง, ด้านล่าง ~30vh ว่าง ก่อนถึง section ถัดไป

### 3) Awards / Credentials row (ใหม่ แทน marquee)
- ใต้ hero: แถวเดียวจัดกลาง `"6 years · 40+ clients · Bangkok-based"` ขนาด `text-xs`
- ขนาบด้วย laurel SVG ฝั่งซ้าย-ขวา (เหมือน Collins มี 〔 …〕)
- **ลบ MusicMarquee/Marquee** ออกจาก Index ทั้งหมด — ทดแทนด้วย strip เงียบ ๆ นี้

### 4) Work showcase: "1 ชิ้น = 1 หน้าจอ"
- ใน Index ส่วน Selected work: เปลี่ยนจาก grid → แสดง 3 ชิ้นแบบ vertical stack, แต่ละชิ้น `min-h-screen`
  - ภาพ 21:9 เต็มความกว้าง container
  - caption ใต้ภาพ: เลขที่ + ชื่อโครงการ + ปี (mono เล็กมาก) จัด 3 คอลัมน์
- ไม่มี hover scale, ไม่มี gradient overlay — แค่ภาพล้วน ๆ

### 5) Services / Approach / Manifesto: editorial column
- ทุกหน้าใน inner page ใช้ pattern เดียว:
  - SectionLabel เล็ก ๆ ด้านบน
  - H1 เซริฟ italic ขนาด `h-display-xl` จัดชิดซ้าย, กินไม่เกิน 9/12 cols
  - บอดี้ Newsreader ขนาด ~22px จัด column กว้างไม่เกิน 56ch
  - **เอา card / hairline border ออกเกือบหมด** — ใช้ระยะห่างแนวตั้ง (space-y-32) แทน
- Services: ลบ 6:3:1 visualizer (ตอนนี้ยังเป็น UI หนัก) → เขียนเป็นย่อหน้าเล่าใน prose แทน, อาจคงเป็น inline figure เล็ก ๆ ตอนท้าย

### 6) Color discipline แบบ Collins
- Cinnabar **ห้าม** ใช้ใน hairline / underline / dot / divider อีกต่อไป
- Cinnabar เหลือใช้แค่ 3 ที่:
  1. คำ italic เน้นใน headline (`<em className="italic text-cinnabar">`)
  2. Link hover (เปลี่ยนจาก ink → cinnabar)
  3. ปกงาน / illustration ที่เป็นรูปจริง
- Hairline ทั้งหมดเปลี่ยนเป็น `border-foreground/12` (เบาลง) — เลิก `border-foreground` แบบเต็ม

### 7) Typography rhythm
- ขยาย `.h-display-xl` ให้ใหญ่ขึ้น: `clamp(72px, 11vw, 180px)` (เดิมน่าจะ ~120)
- บอดี้ default page (Newsreader) ขยับเป็น 19px / line-height 1.55 — อ่านสบายแบบ editorial
- Mono label: ลดความถี่ — ใช้เฉพาะหัว section ใหญ่ ไม่ใช้ใน card/figure caption เล็ก

---

## ไฟล์ที่จะแตะ

- `src/components/Nav.tsx` — ลด chrome, เอา StatusBar ออก, ปรับ overlay menu
- `src/index.css` — ปรับ scale `.h-display-xl`, body size, opacity ของ hairline tokens
- `src/components/SectionLabel.tsx` — ลด opacity ของ rule (Cinnabar → foreground/30)
- `src/pages/Index.tsx` — เขียน hero ใหม่, ลบ marquee, เปลี่ยน work เป็น 1-per-screen, เพิ่ม credentials strip
- `src/pages/Services.tsx` — ลบ 6:3:1 visualizer block, เขียนเป็น prose
- `src/pages/About.tsx`, `src/pages/HealthCheck.tsx`, `src/pages/Work.tsx`, `src/pages/Manifesto.tsx`, `src/pages/Contact.tsx` — ใช้ editorial column pattern เดียวกัน, เอา card/border ส่วนเกินออก
- `src/components/MusicMarquee.tsx` — ลบทิ้ง (ไม่ใช้แล้ว)
- `src/components/Footer.tsx` — ใส่ StudioStatusBar ลงในนี้แทน

---

## สิ่งที่ "ไม่ทำ"

- ไม่เพิ่ม motion ใหม่ (Collins มี hover image reveal แต่เราเลือกอยู่ฝั่ง quiet)
- ไม่เปลี่ยน palette / typography stack
- ไม่แตะ schema / data / routing
- ไม่ทำ illustration เลียนแบบ Collins — ใช้รูปลูกค้าจริงที่มีอยู่
