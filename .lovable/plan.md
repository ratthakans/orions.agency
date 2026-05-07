## /services — แผนปรับ

### 1. ย่อ QUESTIONS (FAQ) ให้เล็กลง
ปัจจุบัน: H2 ใหญ่ (`h-display-sm` ~64–80px), padding section 24/32, แต่ละ row 20–24px + plus icon 16px.

ปรับเป็น:
- ลดความกว้าง wrapper จาก `max-w-[1100px]` → `max-w-[860px]`
- ลด padding section: `py-24 md:py-32` → `py-16 md:py-20`
- ลด heading: เปลี่ยนจาก `h-display-sm` ใหญ่ ๆ → `text-[22px] md:text-[28px]` พร้อม eyebrow `— QUESTIONS` เล็ก ๆ ด้านบน (รวมเป็น header เดียว ไม่ใช่ 2 ชั้น)
- ลดขนาด question rows: `text-[16px] md:text-[19px]` → `text-[14px] md:text-[15px]`, padding `py-5 md:py-6` → `py-4`
- ลด plus icon `w-4 h-4` → `w-3 h-3`
- ลดขนาดคำตอบ: `text-[14px]` → `text-[13px]`, `pb-6` → `pb-5`
- เอา label `8 ANSWERS` ออก (noise)
- ตัด margin `mt-14` ระหว่าง heading กับ accordion → `mt-8`

ผลลัพธ์: FAQ จะดูเป็น utility block เล็ก ๆ ท้ายหน้า ไม่แย่งความสำคัญจาก Pricing

### 2. คำแนะนำ design อื่น ๆ ของหน้า services

A. **Service Overview (index 01/02/03)** — ตอนนี้ตัวเลขใหญ่ `text-[88px]` กับ title `text-[52px]` ซ้อนกัน ชนกันหนัก
   - ลด number → `text-[64px] md:text-[72px]` และให้สีเป็น `foreground/10` เพื่อเป็นพื้นหลัง
   - title คงไว้ แต่ขยับ lead ขึ้นมาเป็น sub-title ใต้ title (md:col-span-5 + col-span-12 ของ lead) เพื่อให้ scan ง่าย

B. **Pricing cards** — 3 sections ติดกัน (light → dark → light) ดูยาวเกินไป + การ์ด highlight ใช้พื้น `bg-foreground/[0.04]` เบาจนแทบไม่เห็น
   - เพิ่ม contrast ของ highlight: ใช้ hairline บน + ขวา-ซ้าย หรือใส่ `· popular` chip ที่มี border ชัดขึ้น
   - แนะนำให้ pricing 3 sections ใช้พื้นเดียวกันทั้งหมด (light) แล้วแยกด้วย eyebrow + section number ใหญ่ ๆ แทน — จะทำให้ scroll สบายตาขึ้น และสีดำไปเก็บไว้แค่ Hero / Audit / Why เพื่อ rhythm สลับ light-dark-light-dark-light ที่ชัด
   - หรือถ้าจะเก็บ alternating ให้ pricing 02 (dark) เพิ่ม top padding ตัดด้วย hairline 2 เส้นบน-ล่างเพื่อแยกจาก section อื่น

C. **Audit section (dark)** — ตัวเลข `15K` ใหญ่ดี แต่ตอนนี้ลอย ๆ ข้าง list
   - แนะนำใส่ `· THB / 7 DAYS · CREDIT 100%` เป็น meta strip ใต้ราคาเป็น hairline เพื่อให้กลายเป็น "ticket" ชัดขึ้น

D. **Why + Process (combined dark)** — section นี้ยาวมาก (`py-24 md:py-32` + space-y-3 ใน list + process strip อีก `mt-24`)
   - ลด `mt-24 md:mt-32` ระหว่าง Why กับ Process → `mt-16 md:mt-20`
   - Why list ตอนนี้เป็น 5 bullet ที่อ่านเหมือนคำสัญญา — ลองทำเป็น 5 บรรทัดคู่ (label + value) เช่น `PRICING · Honest, on the website` เพื่อให้รู้สึกเป็น manifest ไม่ใช่ checklist

E. **Spacing rhythm รวม** — ตอนนี้เกือบทุก section ใช้ `py-24 md:py-32` ทำให้รู้สึก flat
   - แนะนำใช้ scale 3 ระดับ: hero/feature `py-28 md:py-36`, content `py-20 md:py-28`, utility (FAQ, audit summary) `py-16 md:py-20`

F. **Service overview → pricing jump** — ปัจจุบันคลิก `01` กระโดดข้าม Audit ไป Pricing โดยตรง อาจสับสน
   - เพิ่ม anchor link "↓ See pricing" หรือ scroll ที่ smooth + sticky mini-nav บน mobile (eyebrow `01 BRANDING / 02 CONTENT / 03 SOCIAL`) ตอน scroll อยู่ในช่วง pricing — ช่วย orientate มาก

### 3. ขอบเขตการแก้ในรอบนี้
- FAQ ย่อขนาด (จุดที่ user ขอ) — implement แน่นอน
- ข้ออื่น ๆ (A–F) เป็นคำแนะนำ — รอเลือกข้อที่อยากให้ทำ

### Technical
- ไฟล์เดียว: `src/pages/Services.tsx`
- ไม่แตะ data, schema, route, components อื่น
- ใช้ tokens เดิม (semantic colors, font utilities)
