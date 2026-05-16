# Thai Font A/B Page

สร้างหน้าเดียว `/type-thai` (ไม่ลิงก์จาก nav) เพื่อเทียบฟอนต์ไทย 3 ตัวเคียงข้างกันบน layout จริงของ ØRIONS

## เพิ่ม fonts
แก้ `index.html` เพิ่ม Google Fonts:
- Sarabun (400, 500, 600)
- Taviraj (400, 500, 600 + italic)
- Bai Jamjuree (400, 500, 600)

## เพิ่ม utility classes ใน `src/index.css`
- `.font-th-sarabun`, `.font-th-taviraj`, `.font-th-baijam` (font-family override เฉพาะ block)

## หน้าใหม่ `src/pages/TypeThai.tsx`
Layout: 3 คอลัมน์ (stack บน mobile) บน cream bg, hairline แบ่งคอลัมน์

แต่ละคอลัมน์มี:
1. **Label มono** ด้านบน — ชื่อฟอนต์ + คู่กับ (serif/sans) + license
2. **Headline ผสม** — `Cormorant Garamond` คำอังกฤษ + คำไทยด้วยฟอนต์นั้น เช่น *"From idea to <em>ภาพสุดท้าย</em> — one team"*
3. **Sub copy** 1–2 บรรทัด ไทยล้วน
4. **Body paragraph** ~4 บรรทัด (Tone Block ภาษาไทย)
5. **Bullet list** บริการ
6. **Numerals + mono row** (1234567890 / ๑๒๓๔๕๖๗๘๙๐)
7. **CTA button** สไตล์ปัจจุบัน

ด้านบนหน้า: PageHero สั้น ๆ "Thai Type Test" + บรรทัดอธิบายว่าให้สังเกตอะไร (น้ำหนัก, ความสูง x-height, การคู่กับ Cormorant/Inter)

ด้านล่าง: ตารางสรุปสั้น ๆ (character | feel | best for) + ช่องว่างให้เลือก

## Routing
เพิ่ม route `/type-thai` ใน `src/App.tsx` (lazy import ถ้าใช้ pattern เดิม)

## ไม่แตะ
- Nav, หน้าอื่น, design tokens, memory, ฟอนต์หลัก
- ไม่เปลี่ยน font ไทยจริงของไซต์จนกว่าคุณจะเลือก
