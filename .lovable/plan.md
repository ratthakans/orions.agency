

## Master Audit — เพิ่มการตรวจ Font, Italic, สี

ขยายแผนเดิมด้วย 3 มิติใหม่ + คงงาน Tier 1-4 เดิมไว้ทั้งหมด

---

### 🆕 Tier A — Font Family Audit

**กฎจาก memory:**
- `Unbounded` → display/brand/heading เท่านั้น
- `IBM Plex Sans Thai` → body, ภาษาไทย
- `JetBrains Mono` → ตัวเลข, code, label-mono
- `Cutive` → ?? (โหลดอยู่ใน index.css แต่ยังไม่ confirm ใช้ที่ไหน)

**ที่หลุด:**
- `Cutive` ถูก import แต่ค้นไม่เจอที่ใช้ → **ลบออกจาก @import** (ลด font payload ~30KB)
- `index-badge` มี `font-display` (Unbounded) — บางจุดถูกใช้กับข้อความไทย (เช่น "READY WHEN YOU ARE" ปนกับ "พร้อมเมื่อคุณพร้อม") → ตรวจให้ Thai ใช้ `font-thai`
- ตัวเลขใหญ่ (FlipNumber, CountUp, stats) บางจุดใช้ `font-display` (Unbounded) บางจุดใช้ `font-mono` → **กำหนด:** ตัวเลข display ใหญ่ = `font-display`, ตัวเลขเล็ก/index/label = `font-mono`
- `font-thai` ทับ `font-display` ในบางการ์ด → ลบ class ซ้ำ

---

### 🆕 Tier B — Italic Usage Audit

**กฎ:** italic ใช้ "เน้นคำ" สั้นๆ เท่านั้น ไม่ใช่ทั้งประโยค

**ที่หลุด:**
- Index L267 `<span className="italic">Start applying</span>` ✓ ok
- Index L246 `<span className="italic opacity-70">Commercials</span>` — italic + opacity ซ้อน → เลือกอย่างเดียว
- About signature L257 italic ทั้งบรรทัด → ok (signature pattern)
- Services L?? italic ใน package names → ตรวจ
- Work hero italic ใน "Selected" → ok
- **ปัญหา:** Unbounded italic จริงๆ ไม่มี (font-style: italic จะ fake-italic = oblique) → ดูแข็ง → **เปลี่ยน:** italic ใน heading ใหญ่ → ใช้ `text-muted-foreground` หรือ accent gradient แทน

→ **กฎใหม่:** italic ใช้กับ body (IBM Plex มี italic จริง) เท่านั้น, heading ใช้ color shift แทน

---

### 🆕 Tier C — Color Audit

**Palette ที่อนุญาต (จาก index.css):**
- `foreground` (ink #0F0F0F)
- `background` (cream #F5F2EC)
- `muted-foreground` (#5F5F5F)
- `surface`, `surface-2`
- Accent gradient: vermilion → amber (ใช้ sparingly)

**ที่หลุด:**
- Index L120, L150, L192 ใช้ `text-muted-foreground` กับจุด `.` ท้ายประโยค → ok pattern
- บาง section ใช้ `opacity-60`, `opacity-70`, `opacity-75`, `opacity-30`, `opacity-40` ปนกัน → **กำหนด scale:** `opacity-40 / 60 / 80` 3-step
- `text-foreground/80`, `text-foreground/60`, `text-background/40` ปนกัน → unify เป็น token ที่มี (`muted-foreground`) แทนการใช้ slash opacity
- Accent gradient (`text-gradient`, `bg-gradient-accent`) — ตรวจว่าใช้ ≤2 จุด/หน้า (sparingly rule)
  - Index: "Solutions" + closing "Start applying"? — ถ้าเกิน 2 → ตัด
  - About: ตรวจ
  - Services: ตรวจ
- `accent-dot` (vermilion) — ใช้ที่ไหน? ตรวจไม่เกิน 1-2 จุด/หน้า
- Dark sections (Applied Solutions, etc.) — ใช้ `bg-foreground text-background` ✓ ok แต่ inner border ใช้ `border-background/30` กับ `border-background/40` → unify

---

### 🆕 Tier D — Heading Color Hierarchy

**กฎใหม่:**
- H1/H2 หลัก = `text-foreground` solid
- "เน้นคำ" ใน H = `text-muted-foreground` (สำหรับ punctuation/secondary) หรือ `text-gradient` (max 1 ครั้ง/หน้า)
- ไม่ใช้ `italic` ใน Unbounded heading → ใช้ color shift แทน

---

### ไฟล์เพิ่มเติมที่จะแก้ (รวมกับแผนเดิม)

| ไฟล์ | งานเพิ่ม |
|---|---|
| `src/index.css` | ลบ Cutive จาก @import |
| ทุก page | ตรวจ italic → swap เป็น color shift ใน heading, รวม opacity scale |
| ทุก page | จำกัด `text-gradient` ≤1 ต่อหน้า, `accent-dot` ≤2 ต่อหน้า |
| ทุก page | unify `text-foreground/X` → ใช้ `muted-foreground` token |

### กฎสรุปเพิ่ม
- **Font:** Unbounded=display only, Plex Thai=body+Thai, Mono=numbers/labels, ลบ Cutive
- **Italic:** เฉพาะ body (Plex มี true italic), heading ห้าม → ใช้สีแทน
- **Color:** opacity scale 40/60/80, accent gradient ≤1/หน้า, accent-dot ≤2/หน้า
- **Slash opacity (`text-foreground/60`):** แทนด้วย token (`muted-foreground`) ทุกที่ที่ทำได้

### คำถามเดิมยังค้างอยู่
1. Index closing CTA: 2-col หรือ centered?
2. Address: "Yothinphatthana" หรือ "Yothinpattana"?
3. PNG → WebP: ทำเลยไหม?

