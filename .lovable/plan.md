

# Typography & Copy Review — ØRIONS

## A. ปัญหาขนาดตัวอักษร (Type Scale Issues)

**1. Hero (Index)**
- `text-[22vw]` บน mobile + `text-[20vw]` บน desktop → บน 1252px = ~250px สูงเกินไป กิน vertical space เกือบทั้งจอ ทำให้ tagline + paragraph ดู "หลุด" จาก composition
- **แนะนำ**: desktop ลดเหลือ `text-[16vw]` (≈200px) เพื่อให้ tagline หายใจได้ / mobile คง `22vw`
- Tagline `text-[42px]` กับ wordmark 250px → contrast ห่างเกินไป ควรขยับ tagline เป็น `text-[48px]`

**2. หัวข้อ Section ซ้ำขนาดเดิมเกือบทุกที่**
- ทั้ง `02 — THE PRESSURE`, `07 — HOW WE WORK`, About `03 — PRINCIPLES` ใช้ `text-[56px]` เหมือนกัน → ไม่มี hierarchy
- **แนะนำ**: ใช้ scale ที่ต่างกัน
  - H2 หลัก (hero ของ section) = `text-[56px]`
  - H2 รอง = `text-[44px]`
  - H2 supporting = `text-[36px]`

**3. CTA สุดท้าย "Sharper ideas. Clearer direction. Done." `text-[88px]`**
- ใหญ่กว่า hero wordmark (~200px) เล็กน้อย แต่ visual weight แข่งกันเอง → ลดเหลือ `text-[72px]`

**4. Pressure Numbers `text-[72px]`**
- เล็กไปสำหรับ "ดารา" ของ section นี้ → ขยายเป็น `text-[96px]` พร้อม `tracking-[-0.05em]` เพื่อให้ตัวเลขเป็น hero จริงๆ

**5. Quote marks `"` text-[120px]**
- ลอยเดี่ยวๆ ไม่ align กับอะไร → ปรับเป็น `text-[160px]` แต่ position absolute ซ้อน blockquote เพื่อให้กลายเป็น decorative element

**6. Services page: `text-[120px]` หมายเลข 01-04**
- ใหญ่เกินกว่า `text-[36px]` ของ title → แทนที่จะเด่น กลับทำให้ title หายไป
- **แนะนำ**: ลดหมายเลขเหลือ `text-[88px]` และเพิ่ม title เป็น `text-[44px]`

**7. Body Thai font-size ไม่สม่ำเสมอ**
- ใช้สลับ `text-[14px]`, `text-[15px]`, `text-[16px]`, `text-[17px]`, `text-[18px]` → 5 ขนาดในเว็บเดียว
- **แนะนำ**: ตั้ง scale แค่ 3 ระดับ — `text-[13px]` (caption), `text-[15px]` (body), `text-[17px]` (lead)

---

## B. ปัญหาการแบ่งวรรค (Line-break / Phrasing)

**1. Hero paragraph (Index 51)**
> "ØRIONS เป็น Creative Agency สำหรับธุรกิจที่ไม่อยากติดอยู่ใน social vicious cycle เราช่วยให้สิ่งที่คุณทำชัดขึ้น คมขึ้น และทำงานได้จริงขึ้น"

- ประโยคยาวต่อกัน 2 ประโยคไม่มีจุดคั่น → ควรแยก
- **แก้**: "ØRIONS คือ Creative Agency สำหรับธุรกิจที่ไม่อยากติดอยู่ใน social vicious cycle / เราช่วยให้สิ่งที่คุณทำ — ชัดขึ้น คมขึ้น และทำงานได้จริง"

**2. Vicious Cycle Quote (line 142-144)** — มีปัญหามาก
> "The Vicious Cycle — หลายธุรกิจกำลังติดอยู่ในวงจรอุบาท ทำมากขึ้น จ่ายมากขึ้น งบไหลออกแต่ผลลัพธ์เท่าเดิม เมื่อถูกปิดกั้นการมองเห็น **ทุกอย่างก็จบ**"

- "วงจรอุบาท" → ควรเป็น "วงจรอุบาทว์" (สะกดผิด)
- ประโยคยาวเป็น run-on sentence ไม่มีจังหวะหยุด
- **แก้** (แบ่งบรรทัดให้เป็น quote สวยๆ):
  > "หลายธุรกิจกำลังติดอยู่ในวงจรอุบาทว์ —  
  > ทำมากขึ้น จ่ายมากขึ้น  
  > งบไหลออก แต่ผลลัพธ์เท่าเดิม  
  > เมื่อถูกปิดกั้นการมองเห็น **ทุกอย่างก็จบ**"

**3. The Pressure heading (line 107)**
> "ธุรกิจไม่ได้สู้แค่<br/>คู่แข่งอย่างเดียว"

- การ break "แค่ / คู่แข่ง" ทำให้ "แค่" ลอย → ควร break "ธุรกิจไม่ได้สู้ / แค่คู่แข่งอย่างเดียว"

**4. Pressure label (line 16)**
> "ADHD SPAN" + "attention สั้นลงกว่าเดิมมาก"
- "ADHD" ใช้กับ medical condition — sensitive และไม่ premium
- **แก้**: เปลี่ยนเป็น `"ATTENTION SPAN"` + body "เวลาที่คนยอมหยุดดูคอนเทนต์"

**5. POV section (line 169-180)** — เปิดด้วย `<strong>` ทุกย่อหน้า
- ทำให้ rhythm ซ้ำเกินไป → ควรสลับ: ย่อหน้า 1 เปิดด้วย bold, ย่อหน้า 2 เปิดด้วยตัวเลข ¹ ² ³

**6. About Manifesto (line 28-30)**
> "ไอเดียที่ชัด คอนเทนต์ที่มีคุณภาพ และการสื่อสารที่มีกลยุทธ์ ไม่ใช่แค่ทางเลือก **แต่คือทางรอด**"
- โอเค แต่ break เป็นบรรทัดจะ powerful กว่า:
  > "ไอเดียที่ชัด  
  > คอนเทนต์ที่มีคุณภาพ  
  > การสื่อสารที่มีกลยุทธ์  
  > — ไม่ใช่ทางเลือก **แต่คือทางรอด**"

**7. CTA สุดท้าย "Done." opacity-50**
- การทำให้ "Done." จาง = ขัดกับ brand promise "Done"
- **แก้**: ลบ `opacity-50` ให้ "Done." เด่นที่สุด (มันคือ punchline)

---

## C. ปัญหาคำพูด (Wording)

| ตำแหน่ง | ปัญหา | แก้เป็น |
|---|---|---|
| Index L18 | "AI FLOOD" | "AI FLOOD" (ok) แต่ body "content มากขึ้นจนความแตกต่างถูกกลบ" → "เนื้อหาท่วมจนแบรนด์ถูกกลบ" |
| Index L23 | "เปลี่ยนการสื่อสาร / ให้น่าสนใจ พอที่จะถูกเห็นและถูกจำ" | "ออกแบบการสื่อสารให้คมพอจะถูกเห็น และคุ้มพอจะถูกจำ" |
| Index L24 | "ให้ทุกจุดสัมผัสลูกค้า / แปลเป็นผลลัพธ์ของธุรกิจ" | "เปลี่ยนทุกจุดสัมผัสลูกค้า ให้กลายเป็นผลลัพธ์ทางธุรกิจ" |
| Index L143 | "วงจรอุบาท" | "วงจรอุบาทว์" |
| Index L75 | "— THE WORLD MOVES FASTER THAN BUSINESS" | ไม่จริงทั้งหมด ภาพคือ cyclist บนถนน → "BANGKOK ON THE MOVE" |
| Services L12 | "วาง narrative และ positioning ที่ชัด..." | "วาง narrative และ positioning ให้ชัด เพื่อให้แบรนด์ยืนตรงจุด สื่อสารต่อเนื่อง" (ตัด "และ" ซ้ำ) |
| About L83 | "ช่วยคิดได้" / "แต่ไม่ได้พาไอเดียไปสู่ execution เสมอไป" | สั้นลง: "คิดเก่ง / แต่มักจบที่ slide" |
| About L85 | "เชื่อมการคิดเข้ากับการทำ" | "ทั้งคิดและทำในทีมเดียว" |
| Work L9 | "อยากทำการเมืองสร้างสรรค์ ผ่านกิจกรรมที่ไม่ใช่การหาเสียง" | OK แต่ "อยากทำ" → "ต้องการสร้างการเมืองเชิงสร้างสรรค์ ผ่านกิจกรรมนอกการหาเสียง" |
| Work L11 | "ต้องการวางตัวเป็น first smart hotel OTA ของไทย" | "วางตำแหน่งเป็น Smart Hotel OTA รายแรกของไทย" |
| Work L19 | "พรรคใหม่ที่ต้องนำเสนอมุมมองทางการเมืองภายใต้เวลาจำกัด" | "พรรคใหม่ที่ต้องสื่อสารจุดยืนภายใต้เวลาจำกัด" |
| Work L32 | "เพลงลำคำเขื่อนแก้ว" | สะกดถูกไหม? ควรเช็ก — น่าจะเป็น "เพลงลำคำ เขื่อนแก้ว" หรือ "ลำคำ" ผิด |

---

## D. คำแนะนำเพิ่มเติม (Recommendations)

1. **ใช้ "soft hyphen" หรือ `<wbr>`** ในประโยค Thai ยาวๆ แทน `<br/>` แข็ง — ป้องกัน break ผิดที่บน mobile
2. **ลบ `text-transform: uppercase` ออกจาก h3 ที่เป็นภาษาไทย** — ตอนนี้ class `font-display` บังคับ uppercase ทำให้ Thai heading (เช่น line 199) อาจดู awkward (Thai ไม่มี case แต่ CSS อาจส่งผลกับตัวเลข/วงเล็บ)
3. **ตั้ง max-width ทุก paragraph** ที่ 60-70 character (~`max-w-[58ch]`) แทนการกำหนด px — อ่านง่ายกว่า ทุกอุปกรณ์
4. **Italic-like emphasis** — ตอนนี้ใช้ `<strong className="font-display normal-case font-bold">` ผสมในย่อหน้า Thai → font-family เปลี่ยนกลางประโยคทำให้ขรุขระ → ใช้แค่ `font-bold` พอ
5. **Number formatting**: "1.7s", "+41%", "4.6×" — ควรใช้ Tabular figures (`font-feature-settings: "tnum"`) เพื่อให้ตัวเลขเรียงสวย
6. **Quote mark `"` เดี่ยวๆ** — ดู orphan; ใช้คู่ open/close `"` `"` หรือทำเป็น decorative ตำแหน่ง absolute หลัง blockquote

---

## ไฟล์ที่จะแก้

- `src/index.css` — เพิ่ม tabular-nums, refine font-display ไม่ uppercase Thai
- `src/pages/Index.tsx` — type scale, phrasing, line breaks (vicious cycle, pressure, hero, CTA)
- `src/pages/Services.tsx` — ลด numeral, scale title up, tweak body
- `src/pages/About.tsx` — manifesto line breaks, vs-table copy
- `src/pages/Work.tsx` — copy edits, spell checks

