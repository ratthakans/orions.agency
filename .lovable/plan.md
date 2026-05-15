## Issues found

1. **Navbar links** — ใช้ `index-badge` (Unbounded uppercase 11px tracking 0.04em). Unbounded เป็น display หนา ใช้กับเมนูเล็กๆ อ่านยาก + ไม่ flow กับ headline serif/CTA serif
2. **`hello@orions.agency`** ที่ hero footer — ใช้ `font-mono uppercase tracking-[0.3em]` กลายเป็น `H E L L O @ O R I O N S . A G E N C Y` อ่านไม่ออก (อีเมลไม่ควร uppercase + ห่าง)
3. **ทั่วทั้งไซต์** — `tracking-[0.25em]` และ `tracking-[0.3em]` ใช้พร่ำเพรื่อกับ JetBrains Mono ทำให้ตัวอักษรห่างเกินไป โดยเฉพาะตอนรวมกับ Thai หรือ email/URL

---

## Fixes

### A · Nav menu typography
- เปลี่ยน nav links จาก `index-badge` → **Instrument Serif italic 16px ไม่ uppercase** (= class `btn-label` ที่มีอยู่แล้ว) เพื่อ flow กับ CTA และ headline
- Mobile menu links ก็เปลี่ยนเหมือนกัน
- Logo `ØRIONS` คงเป็น Unbounded (ตามที่ user บอก)
- Announcement bar คง mono ไว้ แต่ลด tracking 0.25em → 0.15em

### B · Hero footer email
- `hello@orions.agency` → เปลี่ยนเป็น **Instrument Serif italic ตัวพิมพ์เล็กตามจริง ไม่มี tracking พิเศษ** ให้อ่านได้ลื่น
- `01 / 07` คง mono แต่ลด tracking 0.3em → 0.18em

### C · Global tracking audit (ลดความห่าง)
ปรับ token ให้พอดี — ทุกแห่งที่ใช้กับ `font-mono uppercase`:
- `tracking-[0.3em]` → `tracking-[0.18em]`  
- `tracking-[0.25em]` → `tracking-[0.14em]`
- `tracking-[0.22em]` → `tracking-[0.14em]`
- `tracking-[0.2em]`  → `tracking-[0.12em]`

ขอบเขตไฟล์:
- `src/index.css` (`.index-badge`, `.label-mono`, `.label-soft` ลด tracking 0.04em ยังโอเค — แต่ถ้าใช้ uppercase ขนาดเล็กให้เพิ่มเป็น 0.06em เพื่อ legibility)
- `src/pages/Index.tsx`
- `src/pages/Services.tsx`
- `src/pages/Contact.tsx`
- `src/pages/About.tsx`, `src/pages/Work.tsx`
- `src/components/PageMark.tsx`
- `src/components/SectionHeader.tsx`, `PageHero.tsx`, `ClosingCTA.tsx`

### D · ขนาด+contrast เล็กน้อย
- `text-[9px]` ที่มี uppercase ขยับเป็น `text-[10px]` ทุกที่ (อ่านไม่ออกบน retina)
- `text-background/55` ใน hero footer → `text-background/70` เพิ่ม contrast

---

## Out of scope
- ไม่เปลี่ยน layout, สี, content, headline
- ไม่แตะ Unbounded (logo) และ Instrument Serif (headline)
- ไม่ refactor token system ใหญ่
