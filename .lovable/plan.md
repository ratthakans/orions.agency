## Plan

### 1) Homepage — "Index" → mini-manifesto section
ใน `src/pages/Index.tsx` แทนที่ section `01 — Index` (รายการ 4 ลิงก์ใหญ่) ด้วย **Mini-Manifesto** แบบย่อ:
- mono label `01 — Manifesto`
- headline editorial สั้น (serif) + ประโยคย่อย Thai
- 3 ข้อย่อย (สอดคล้องกับ About): **ตัดส่วนเกิน · สกัดเนื้อแท้ · กลั่นกรองเรื่องราว** — แต่ละข้อมีคำอธิบายสั้น 1-2 บรรทัด
- ปิดด้วย CTA inline: "Read the full manifesto →" → `/about`
- (รายการ index pages 4 ลิงก์เดิม **ตัดออก** — Nav มีครบอยู่แล้ว)

### 2) Homepage — Selected Work เปลี่ยนเป็น card grid เรียงกัน
แทน layout 1 large + 3 stack ปัจจุบัน → **uniform card grid 4 ใบเรียงกัน**:
- Desktop: `grid-cols-4`, Tablet: `grid-cols-2`, Mobile: `grid-cols-1`
- ทุกการ์ดขนาดเท่ากัน (aspect ratio เดียวกัน, เช่น 4/5 หรือ 3/4) — รูป + meta (n + niche), title, impact
- คงสไตล์ hairline border, hover scale, zero-radius
- ปุ่ม "See all work →" คงไว้

### 3) เพิ่มหน้าใหม่ `/projects` (ØRIONS Startup Projects)
หน้าใหม่เพื่อโชว์ในเครือ/startup projects:
- ไฟล์: `src/pages/Projects.tsx`
- Route ใหม่ใน `src/App.tsx`: `/projects` → `Projects`
- เพิ่มลิงก์ใน `src/components/Nav.tsx` (และ Footer ถ้ามี) — label `"Projects"` หรือ `"Ventures"` (จะใช้ **Ventures** เพื่อสื่อ startup arm ชัดกว่า)
- เพิ่มใน `public/sitemap.xml`
- Content:
  - Hero: mono `00 — Ventures`, headline editorial เช่น *"Studios build for clients. <em>We build for ourselves, too.</em>"* + ย่อย Thai
  - 2 การ์ดใหญ่ (ขนาดเท่ากัน, asymmetric editorial หรือ 2-col grid):
    1. **Routte** — `https://routte.to/` — tagline + 2-3 บรรทัด, tag (เช่น Travel · Itinerary), CTA "Visit →" เปิด tab ใหม่
    2. **First Draft Pro** — `https://firstdraftpro.co/` — tagline + body, tag (Writing · AI), CTA "Visit →"
  - Closing block: "More coming. Built in Bangkok by ØRIONS." + CTA contact
- ใช้ design tokens เดิม (snow bg, cinnabar accent, hairlines, zero radius)
- **หมายเหตุ:** content ของแต่ละ venture จะเขียน placeholder copy ที่เหมาะกับ domain (Routte = travel routing/itinerary, First Draft Pro = AI writing assistant) — ถ้าไม่ตรงกับจริง ผู้ใช้แก้ทีหลังได้

### 4) About — เพิ่ม section "Our Team"
ใน `src/pages/About.tsx` เพิ่ม section ใหม่ก่อน CTA สุดท้าย (หรือก่อน Beyond Content):
- mono label `07 — Our Team`
- headline: e.g. *"15 people. <em>One studio.</em>"*
- ย่อยสั้นๆ
- **Grid 15 ใบ** (responsive 2/3/5 cols) — แต่ละใบมี:
  - Role label (mono, uppercase) เช่น "CEO", "Founder", "Creative Director"
  - ชื่อ: **placeholder "—"** หรือ comment `{/* TODO: name */}` (ตามที่ user บอก "ยังไม่ต้องใส่ชื่อ เขียนเอาไว้กันลืม")
- รายชื่อ roles ที่เก็บไว้ใน array (comment พี่ชื่อจริงไว้ในโค้ดสำหรับอ้างอิงภายหลัง):
  1. CEO — พี่น้ำ
  2. Founder — พี่เตอร์
  3. Creative Director — พี่แมน
  4. Marketing Director — พี่เรย์
  5. Director — พี่โจ
  6. Creative — พี่รมมี่
  7. Ads Specialist — พี่เต้
  8. Art Director — พี่โซนี่
  9. Post Supervisor — พี่ชุ
  10. Editor — พี่สตั้น
  11. Project Coordinator — พี่ทีม
  12. Social Media Manager — พี่เปอร์
  13. DOP — พี่เต
  14. Project Manager — พี่น้ำฝน
  15. Admin — พี่เอธ

### Files
- edit `src/pages/Index.tsx` — แทน Index section ด้วย mini-manifesto + เปลี่ยน Selected Work เป็น 4-card grid
- create `src/pages/Projects.tsx` — หน้าใหม่ Ventures
- edit `src/App.tsx` — เพิ่ม route `/projects`
- edit `src/components/Nav.tsx` — เพิ่มลิงก์ Ventures
- edit `src/components/Footer.tsx` — เพิ่มลิงก์ (ถ้ามี nav list)
- edit `public/sitemap.xml` — เพิ่ม `/projects`
- edit `src/pages/About.tsx` — เพิ่ม section `07 — Our Team`

ไม่แตะ DB / backend / auth
