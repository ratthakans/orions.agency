

# Creative Agency Dynamic Enhancements

ปรับ 6 ลูกเล่น (ไม่รวม Custom Cursor) เพื่อทำให้เว็บดู modern และ dynamic ขึ้น:

---

## 1. Magnetic Buttons — `src/components/MagneticButton.tsx` (New)
Wrapper component ที่ทำให้ปุ่มขยับตามเมาส์เล็กน้อยเมื่อ hover ใกล้ ใช้ `onMouseMove` คำนวณ offset → `motion.div` translate ด้วย spring. ครอบปุ่ม "Start a Project", "Inquiry", และ CTA buttons ทั่วเว็บ.

## 2. Text Reveal Animation — `src/components/TextReveal.tsx` (New)
Split text เป็นคำ แล้ว stagger reveal ทีละคำด้วย `whileInView`. ใช้กับ headline หลักของทุกหน้า เช่น "STORIES, CAMPAIGNS, AND FILMS." และ "START A PROJECT."

## 3. Horizontal Scroll Work Gallery — `src/components/HorizontalScroll.tsx` (New)
Wrap "Selected Work" section บน Home page ด้วย scroll-triggered horizontal movement: `useScroll` ฟัง vertical scroll → `useTransform` แปลงเป็น `translateX` ทำให้ work cards เลื่อนในแนวนอนเมื่อ scroll ลง.

## 4. Parallax Images
เพิ่ม subtle parallax บน work card images ใน `Index.tsx` — ใช้ `useScroll` + `useTransform` ให้รูปเลื่อน `translateY` ช้ากว่า container.

## 5. Smart Navbar (Hide-on-scroll) — `src/components/Navbar.tsx` (Edit)
ใช้ `useMotionValueEvent` หรือ `useScroll` ฟัง scroll direction:
- Scroll down → navbar slides up ซ่อน (`translateY: -100%`)
- Scroll up → navbar slides back down
- ที่ top of page → navbar แสดงตลอด

## 6. Page Transition Upgrade — `src/components/PageTransition.tsx` (Edit)
เปลี่ยนจาก simple opacity fade เป็น **wipe reveal**: แถบสีดำ (`position: fixed, inset: 0`) slide เข้าจากล่าง → ปิดเต็มจอ → slide ออกด้านบน พร้อม reveal content ใหม่.

---

## Integration Points

| File | Changes |
|------|---------|
| `src/components/MagneticButton.tsx` | Create — magnetic hover wrapper |
| `src/components/TextReveal.tsx` | Create — staggered word reveal |
| `src/components/HorizontalScroll.tsx` | Create — scroll-triggered horizontal section |
| `src/components/PageTransition.tsx` | Edit — wipe animation |
| `src/components/Navbar.tsx` | Edit — hide-on-scroll |
| `src/components/HeroSection.tsx` | Edit — wrap CTA in MagneticButton, use TextReveal for h1 |
| `src/pages/Index.tsx` | Edit — use TextReveal on headlines, HorizontalScroll for work, parallax on images, MagneticButton on CTAs |

ไม่ต้องติดตั้ง dependency เพิ่ม — ใช้ `framer-motion` ที่มีอยู่แล้วทั้งหมด.

