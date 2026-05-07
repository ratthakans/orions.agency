## รีวิวหน้าแรก ปัจจุบัน

โทนรวม light editorial + dark hero ดูสะอาดและ intentional ดี แต่ยังมี friction หลายจุดทั้งฝั่ง UX/UI และฝั่ง "creative agency feel" ที่ทำให้ดูเหมือน studio/consultancy มากกว่า agency ที่ทำงาน creative จริง

---

## A. สิ่งที่ดีอยู่แล้ว (เก็บไว้)

- Hero dark + wordmark ใหญ่ + marquee SERVICES ด้านล่าง = identity ชัด
- Section rhythm: light → dark → video 21:9 → dark → light → CTA สลับโทนได้ดี
- Selected Work แบบ horizontal scroll + hover panel จากขวา concept ใช้ได้
- Hairlines, zero-radius, type system สม่ำเสมอตาม design memory

---

## B. ปัญหาที่เจอ (เรียงตามความสำคัญ)

### 1. Hero subline พัง (UX bug, สำคัญสุด)
ตอน TypingLoop ลบคำว่า "creative agency" ออก จะเหลือ
`A BOUTIQUE  | FOR F&B, FASHION & HOSPITALITY.`
มี space แปลกๆ + วรรคขาดความหมาย ดูเหมือน bug ไม่ใช่ effect

### 2. Hero ดู "consultancy" ไม่ใช่ "creative agency"
- Hero มีแค่ wordmark + ตัวหนังสือ ไม่มี visual proof ว่าเราทำงาน creative
- ภาพรวม first-fold = ตัวอักษรล้วน → ไม่เห็น craft, ไม่เห็น taste
- คู่แข่ง creative agencies (เช่น Pentagram, COLLINS, Resn) จะมี work/visual ใน hero เลย

### 3. Selected Work ยังอ่านยาก
- Card 3:4 ขนาด 240–280px แคบไป รูปดู thumbnail
- Hover panel "บัง" รูปทั้งหมด → user ดูทั้ง impact หรือดู image ไม่ได้พร้อมกัน
- Hint "[ Drag · scroll → ]" เล็กและอยู่ผิดที่ ไม่มี progress / counter / arrow control
- ไม่มี scroll indicator → user ไม่รู้ว่ามีของกี่ชิ้น เลื่อนได้แค่ไหน
- ไม่มี filter ตาม industry (Hospitality / F&B / Mobility ฯลฯ) ทั้งที่มี 7 ชิ้นแล้ว

### 4. Section ซ้ำซ้อน: Three Things ↔ Process
- ทั้ง 2 section เป็น dark + 3-4 column + เลขนำหน้า "01–04" + heading style เดียวกัน
- อยู่ใกล้กัน (คั่นแค่ video) → รู้สึกซ้ำ + ทำให้หน้ายาวเกินจำเป็น
- "From hello, live in 4 weeks" เป็น message สำคัญ ควรมีน้ำหนักของตัวเอง

### 5. Trusted By ดู outdated
- Grid 6 ช่อง × text ล้วน (ยกเว้น RTAF) → อ่อน, ดูเหมือน B2B SaaS
- Mix ระหว่าง logo จริง 1 ชิ้น + text 11 ชิ้น = inconsistent
- ใช้ชื่อ mock เช่น "MAISON LUMIÈRE", "SAINT MANOR" ซ้ำกับ Work page ที่เคยเห็น → ลด credibility

### 6. CTA ปลายหน้า redundant
- "Tell us about the brand" ซ้ำกับหน้า /contact 100%
- ไม่มี hook พิเศษ (ไม่ใช่ teaser, ไม่ใช่ contrarian message)

### 7. Micro UX
- LET'S TALK button บน nav ดี แต่ไม่มี hover state ที่ชัด
- Marquee "BRANDING · CONTENT · SOCIAL MEDIA" ซ้ำกับ Three Things → information ไม่ใหม่
- ไม่มี scroll indicator/cue ที่บอก user ว่ายังมีต่อใต้ hero

---

## C. แผนแก้ไข

### Priority 1 — Quick fixes (ทำได้เลย)
1. **แก้ Hero subline**
   - เลิกใช้ TypingLoop ทับคำเดียว → เปลี่ยนเป็น static line: `A boutique creative agency for F&B, fashion & hospitality.`
   - หรือถ้าอยากเก็บ typing effect ให้สลับทั้ง vertical แทน เช่น `…for [F&B / fashion / hospitality / lifestyle].`
2. **เปลี่ยน hint scroll** ของ Selected Work เป็น progress bar + counter (`01 / 07 →→→`) อยู่มุมขวาบนของ section
3. **ลบ Trusted By แบบ text grid ทิ้ง** → แทนด้วย logo strip ขาวดำเรียงเดียว 1 แถว (auto-scroll marquee แบบเดียวกับ services bar) ใช้ชื่อจริงตาม Selected Work เท่านั้น (Hongmove, RTAF, Khaoyai CC, MyHotel, Democrat, Heavy, GCOO)

### Priority 2 — Creative agency feel
4. **เพิ่ม visual hook ใน Hero**
   - ตัวเลือก A: ใส่ ambient looping reel (autoplay, muted) full-bleed บนพื้น dark ลด opacity 40%
   - ตัวเลือก B: เพิ่ม "Now playing" ticker เล็กๆ มุมล่างซ้าย เช่น `NOW SHOWING — RTAF · OFFICIAL FILM 2026`
   - ตัวเลือก C: เพิ่ม corner marks / crop marks (มี component `CornerMarks` แล้ว)
5. **ปรับ Selected Work ให้ work เป็น "พระเอก" จริง**
   - Card กว้างขึ้น (320–360px) aspect 4:5
   - Hover: panel เลื่อนจากล่างขึ้นแค่ 50% (ไม่บังรูปหมด)
   - เพิ่ม scroll arrow control + progress bar + counter
   - เพิ่ม filter chips ด้านบน (ALL / HOSPITALITY / F&B / EVENTS / MOBILITY / GOVERNMENT)

### Priority 3 — Structure
6. **รวม Three Things + Process** ให้สั้นลงและไม่ซ้ำ visual
   - Three Things → คงไว้ dark, แต่บีบเหลือ headline + 3 ชื่อ service เป็น list ใหญ่ (ไม่มี bullet ย่อย)
   - Process → เปลี่ยนเป็น light bg + แนวนอน timeline (01—02—03—04 พร้อมเส้นเชื่อม) ไม่ใช่ 4 column ซ้ำเดิม
   - คั่นด้วย mastery video แบบเดิมได้
7. **Closing CTA ใหม่**
   - เปลี่ยน headline เป็น manifesto แทน duplicate contact: เช่น `One team. From idea to final cut.` + sub: `30-min discovery call. We reply within 24 hours.`
   - เก็บ 2 ปุ่มเดิมไว้

### Priority 4 — Polish
8. เพิ่ม scroll cue ใต้ hero (เส้นเล็กๆ + "SCROLL ↓" mono 10px)
9. LET'S TALK nav button: hover invert (bg→fg)
10. Marquee bottom hero เปลี่ยนเป็น proof จริง: `7 PROJECTS LIVE · 5 INDUSTRIES · BANGKOK · EST. 2026`

---

## D. สิ่งที่ไม่ทำ (เพื่อรักษา design system)
- ไม่เพิ่มสี/gradient ใหม่ (คุม Sunset Ink สำหรับ accent อย่างเดียว)
- ไม่เพิ่ม radius / shadow / card style
- ไม่เปลี่ยน font
- ไม่ใส่ animation หนัก (เก็บ wipe + fade ตาม motion memory)

---

## E. ลำดับ implement ที่เสนอ

1. แก้ hero subline + scroll cue + LET'S TALK hover (5 นาที)
2. ปรับ Selected Work: card ใหญ่ขึ้น + hover panel ครึ่งล่าง + progress bar (15 นาที)
3. แทน Trusted By เป็น logo marquee จริง (10 นาที)
4. รวม/redesign Three Things + Process (20 นาที)
5. Closing CTA ใหม่ (5 นาที)
6. เพิ่ม visual hook ใน hero (ambient video / corner marks) (15 นาที)

ถ้า approve plan นี้ จะเริ่มจาก Priority 1 + 2 ก่อนแล้วให้ดู ก่อนทำ structure refactor
