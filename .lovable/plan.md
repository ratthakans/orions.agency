## Goal
ปรับ Services / Work / About / Contact ให้เป็น tone เดียวกับหน้าแรกใหม่ — editorial newsprint, **Instrument Serif** + `text-orion italic` accent, `PageMark NN / NN`, hairline grids, ไม่มี `text-gradient` เหลืออยู่ทั้งโปรเจกต์

## Shared building blocks
1. แยก `PageMark` จาก `Index.tsx` → `src/components/PageMark.tsx` (props: `index`, `total`) reuse ทุกหน้า
2. Refactor `ClosingCTA` → headline serif + `<em className="text-orion italic">` แทน `text-gradient`
3. `Nav.tsx`: เปลี่ยน announcement bar + scroll progress จาก `bg-gradient-accent` → `bg-orion`

## Page: Services (`/services`) — rhythm `01–06 / 06`
- ลบ `accent = "text-gradient"` ทั้งหมด, headline เป็น `font-serif` + `text-orion italic`
- **01 · Hero**: light cream, PageMark, `Social · Content · Brand.` (Brand. = orion italic)
- **02 · Approach** (เดิม About): serif headline italic accent
- **03 · Process 6 ขั้น**: hairline grid 6 คอลัมน์เหมือน stats หน้า Index, ตัวเลข serif ใหญ่ + label mono
- **04 · 3 Packages**: light section (ลบ dark bg), การ์ด hairline ink, ราคา serif `text-orion`, ribbon ใช้ ink/orion
- **05 · Comparison table**: hairline rows, Pro column highlight `text-orion`
- **06 · Add-ons + Commitments + FAQ**: serif sub-headlines, accordion hairline
- ปิดด้วย `ClosingCTA` ใหม่

## Page: Work (`/work`) — rhythm `01–04 / 04`
- ลบ `accent`, headline serif italic + orion
- **01 · Hero**: light, PageMark, `Real brands. Real results.` (results = orion italic)
- **02 · Selected projects grid**: serif italic h2, การ์ด 4/5 grayscale→color คงไว้ แต่ overlay drawer เป็น ink/cream + impact stat serif `text-orion` tabular
- **03 · Testimonials carousel**: stat ใหญ่ `font-serif text-orion`
- **04 · Trusted by**: เปลี่ยนจาก dark → light hairline grid (ลบ `bg-foreground`, ลบ `invert` บน logo), headline serif italic accent
- ClosingCTA

## Page: About (`/about`) — rhythm `01–02 / 02`
- **เอา section Team ออกทั้งหมด** (ลบ groups data, PersonCard, FlipNumber, รูป team, import ทั้งหมดที่เกี่ยวข้อง)
- **01 · Hero**: light, PageMark, `A boutique creative agency.` (boutique = orion italic serif), sub thai
- **02 · Manifesto / Approach**: section ใหม่แทน team — serif italic headline ใหญ่ (เช่น "From idea to final cut — *one team, no handoff.*") + paragraph thai สั้นๆ อธิบาย philosophy + in-house production (ดึง copy จาก mem://features/about-page) จัด layout 12-col แบบ Index section 02/04 ของหน้าแรก
- ClosingCTA

## Page: Contact — touch-up เท่านั้น
- ตรวจ headline ใดที่ยังเป็น `text-gradient` หรือ `font-display` ใหญ่ → เปลี่ยนเป็น serif + orion italic
- โครงสร้างฟอร์ม/ช่องทางติดต่อคงเดิม

## Global cleanup
- `rg "text-gradient" src` → แทน/ลบทุกจุด
- `rg "bg-gradient-accent" src` → แทนด้วย `bg-orion` หรือเอาออก
- คง tokens ใน `index.css` เดิม (มี `--orion-orange`, `.font-serif`, `.text-orion` ครบแล้ว)

## Out of scope
- ไม่แตะ schema / routing / business logic
- ไม่เพิ่ม assets ใหม่
- ไม่แตะหน้า Style / NotFound

## Files
- **new**: `src/components/PageMark.tsx`
- **edit**: `src/pages/Index.tsx` (ใช้ shared PageMark), `src/pages/Services.tsx`, `src/pages/Work.tsx`, `src/pages/About.tsx` (ลบ team + เพิ่ม manifesto), `src/pages/Contact.tsx` (touch-up), `src/components/ClosingCTA.tsx`, `src/components/Nav.tsx`
