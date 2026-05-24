
## เปลี่ยน 3 จุด

**1) Unbounded → Bold**
- `src/index.css`: เพิ่ม weight 700 ใน Google Fonts import (`Unbounded:wght@300;400;700`)
- เปลี่ยน `.font-brand` จาก `font-weight: 400` → `font-weight: 700`
- มีผลทั้ง hero wordmark "ØRIONS" และ logo บน Navbar (ทั้งคู่ใช้ `.font-brand`)

**2) คำว่า "refined" ใช้ typing effect**
- มี `TypingLoop` component อยู่แล้วใน `src/components/` — จะตรวจ API ก่อนใช้
- ถ้าไม่เหมาะ (เพราะเป็น loop) จะใช้ approach แบบ one-shot typing: animate width จาก 0 → auto ด้วย CSS `steps()` + caret กระพริบ (matches editorial aesthetic ไม่กระโดดเป็น loop)
- ใน `src/pages/Index.tsx` hero: เปลี่ยน `<em className="italic text-cinnabar">refined.</em>` เป็น `<TypeOnce text="refined." />` (component ใหม่เล็กๆ inline หรือใช้ที่มีอยู่)
- คงสี cinnabar + italic serif เหมือนเดิม + caret `|` สี cinnabar กระพริบ
- Trigger เมื่อ section เข้า viewport (ผ่าน `Reveal` ที่ครอบอยู่แล้ว) — typing วิ่งครั้งเดียว ไม่ loop

**3) Marquee เล็กลง + เป็นสีดำ**
- ใน `Index.tsx` hero marquee:
  - ลดขนาดจาก `text-[22px] md:text-[34px]` → `text-[14px] md:text-[18px]`
  - ลด padding จาก `py-6` → `py-3`
  - ลด gap จาก `gap-16` → `gap-10`
  - เปลี่ยนพื้นจาก default (snow) → `bg-foreground text-background` (พื้นดำ ตัวอักษรขาว Snow)
  - เปลี่ยนสัญลักษณ์ `◐` จาก `text-cinnabar` → `text-cinnabar` คงเดิม (จะ pop บนพื้นดำ)
  - ลบ `border-y` (เพราะพื้นดำตัดกับ snow ด้านบน/ล่างชัดอยู่แล้ว)

## ไฟล์ที่จะแก้
- `src/index.css` — Unbounded weights + `.font-brand` bold
- `src/pages/Index.tsx` — typing effect บน "refined.", marquee เล็กลง + พื้นดำ
- อาจสร้าง `src/components/TypeOnce.tsx` ถ้า TypingLoop ไม่ fit
