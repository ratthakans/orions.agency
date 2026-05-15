# แผนปรับหน้าแรก (`src/pages/Index.tsx`) ให้เรียบแบบ Klar

แก้เฉพาะ `src/pages/Index.tsx` ไม่แตะไฟล์อื่น

## หลักการภาษา (สำคัญ — แก้ปัญหาที่บอกว่า "มั่ว")

ตัดสินใจชัดต่อ element แทนที่จะ "ไทย·อังกฤษ" ในประโยคเดียว:

- **Eyebrows / labels / nav-style** → English เท่านั้น (`SELECTED WORK`, `WHAT WE DO`, `TRUSTED BY`)
- **Headlines (h1/h2)** → English เท่านั้น (Klar-style: สั้น คม)
- **Body / sub-copy / button** → ไทยเท่านั้น
- ห้ามผสมกลางประโยคแบบ "ดูบริการของเรา · See services"

## 1) HERO (Cover)

- **ตัดออก**: TypingLoop, ประโยค `Boutique creative agency · เล่าแบรนด์ให้คนจำ`, scroll cue (`SCROLL` + เส้น)
- **เก็บ**: eyebrow `BANGKOK · EST. 2026`, wordmark `ØRIONS`, marquee ล่าง
- **เพิ่ม sub สั้นๆใต้ wordmark**: `Boutique creative agency` (บรรทัดเดียว ไม่มี typing)
- **ปุ่ม**: เปลี่ยนเป็น `ดูบริการของเรา` (ไทยล้วน, ไม่มี · See services)

## 2) SERVICES — เหลือ 4 ตัว

ลบ Strategy ออก เหลือ:

```
01  BRANDING            วางตัวตนแบรนด์ให้คมและจำง่าย
02  CONTENT PRODUCTION  ถ่ายทำ ตัดต่อ ครบจบในทีมเดียว
03  SOCIAL MEDIA        ดูแลคอนเทนต์ครบทุกแพลตฟอร์ม
04  PAID ADS            ยิงแอดให้คุ้ม ทุกบาทมีเหตุผล
```

- Grid: `lg:grid-cols-4` (เดิม 5)
- Eyebrow: `— WHAT WE DO` (ตัด "บริการของเรา" ทิ้ง)
- Headline: `One team. From idea to final cut.` (English ล้วน, ตัด accent gradient ตรงกลางที่ทำให้ดูรก)
- Link มุมขวา: `View all` (English สั้น)

## 3) SELECTED WORK — 6 cards

- **เพิ่ม 2 cards**: Heavy Organizer (มี asset `heavy-organizer.jpg` แล้ว), พลวัต (Phalang — ใช้ `democrat.jpg` เป็น placeholder ก่อนเพราะยังไม่มี asset เฉพาะ — **ขอ confirm ภาพที่จะใช้**)
- **Eyebrow ใช้ตามที่สั่ง**: `— แบรนด์จริง ผลลัพธ์จริง` (เป็น eyebrow ภาษาไทยล้วน แทน `SELECTED WORK · งานที่ผ่านมา`)
- **ตัดออก**: headline `แบรนด์จริง ผลลัพธ์จริง.` (เพราะย้ายขึ้นไปเป็น eyebrow แล้ว) → headline เปลี่ยนเป็น `Selected work.` (English สั้น)
- **ตัด label มุมขวา** `6 CASES · SLIDE →` ทิ้ง (รก)
- Card overlay: เก็บ scope/impact/title ตามเดิม, **ตัด body ไทยใน overlay ออก** (ทำให้ card สะอาดขึ้นแบบ Klar)
- Footer carousel: ลบลิงก์ "ดูงานทั้งหมด" — เหลือแค่ปุ่ม prev/next

ลำดับ 6 cards:
```
01 Hongmove        PROPTECH      +312% sign-ups
02 Democrat Party  POLITICS      12M+ impressions
03 RTAF            GOVERNMENT    2.1M views
04 GCOO            MOBILITY      +540% downloads
05 Heavy Organizer EVENTS        +88% conversion
06 พลวัต           POLITICS      [ขอ stat ที่จะใส่]
```

## 4) TRUSTED BY — เรียบสุด

- **ตัด headline ยาว** `40+ แบรนด์ไว้ใจเรา ทั่ว F&B...` ทิ้งทั้งหมด
- **ตัด label** `[ Selected · Q2 2026 ]` ทิ้ง
- เหลือแค่: eyebrow เล็กๆ `— TRUSTED BY` + grid logos
- Logos 18 ตัวเหมือนเดิม

## 5) CTA ปิดท้าย

- Eyebrow: `— LET'S TALK` (สั้นกว่า `READY WHEN YOU ARE`)
- Headline: `From idea to final cut.` (English, ตรงกับ brand line)
- Sub ไทย: `ทีมเดียว ไม่ต้องส่งต่อ คุยฟรี 30 นาที`
- ปุ่มเดียว (ตัดปุ่มที่สอง `Services` ออก เพราะรก): `เริ่มคุยกับเรา` → `/contact`

## สรุปการตัดทอน (Klar-ness)

| ตัด                              | เหตุผล             |
|----------------------------------|--------------------|
| TypingLoop                       | รบกวนสายตา         |
| Scroll cue                       | ไม่จำเป็น          |
| Strategy service                 | เหลือ 4 ตามสั่ง    |
| Body ไทยใน work card overlay     | sparse แบบ Klar    |
| Headline trusted by ยาว 2 บรรทัด | ตามที่สั่ง         |
| ปุ่มที่สองใน CTA                 | single CTA = Klar  |
| ทุก `EN · TH` slash mix          | แยกภาษาตาม element |

## คำถามก่อนลงมือ

1. **พลวัต** — ใช้ภาพไหน? (ตอนนี้ไม่มี asset เฉพาะ จะใช้ democrat.jpg เป็น placeholder ได้ไหม หรือมีรูปจะส่งให้?)
2. **stat ของพลวัต** จะใส่อะไร (เช่น `8M+ impressions`)?
