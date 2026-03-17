

# Performance Review — ทำไมเว็บช้า

## ปัญหาที่พบ

จาก Performance Profile พบว่า:
- **First Contentful Paint (FCP): 5,376ms** — ช้ามาก (ควรต่ำกว่า 1,800ms)
- **DOM Content Loaded: 4,636ms**
- **Full Page Load: 5,008ms**

## สาเหตุหลัก

### 1. Google Fonts blocking render (ตัวการใหญ่สุด)
`index.css` บรรทัดแรกโหลด **5 font families** ผ่าน `@import` แบบ render-blocking:
- Bebas Neue, IBM Plex Sans, IBM Plex Mono, IBM Plex Sans Thai, Unbounded
- `@import` ใน CSS เป็น render-blocking — browser ต้องรอโหลด fonts ก่อนแสดงผล

**Fix:** เปลี่ยนจาก CSS `@import` เป็น `<link rel="preconnect">` + `<link rel="stylesheet">` ใน `index.html` พร้อม `display=swap`

### 2. Grain overlay ใช้ SVG filter บน fixed element
`.grain-overlay::before` สร้าง pseudo-element ขนาด 200% ของ viewport ด้วย SVG noise filter อยู่บน `z-index: 9999` — ทำให้ browser ต้อง composite layer พิเศษตลอดเวลา

**Fix:** ลด opacity ลงหรือใช้ static PNG noise แทน SVG filter ซึ่งเบากว่ามาก

### 3. Multiple scroll listeners (6 ตัวพร้อมกัน)
- Navbar: `useScroll()` สำหรับ progress bar
- HorizontalScroll: `useScroll()` สำหรับ horizontal movement
- ParallaxImage × 4: `useScroll()` ต่อรูปแต่ละรูป

รวม 6 scroll listeners ที่ fire ทุก frame — ใช้ CPU เยอะเกินจำเป็น

**Fix:** ลด ParallaxImage ให้ใช้ CSS-only parallax (`transform: translateZ`) แทน JS scroll listener

### 4. Page Transition delay
`PageTransition` มี `delay: 0.3` ก่อนแสดง content — เพิ่ม perceived slowness 300ms ทุกครั้งที่เปลี่ยนหน้า

**Fix:** ลด delay เหลือ 0.15s หรือใช้ `will-change: transform` บน wipe elements

### 5. Hero typewriter effect re-renders
`HeroSection` มี typewriter effect ที่ set state ทุก 30-60ms — ทำให้ component re-render ถี่มาก

**Fix:** ย้าย typewriter logic เข้า dedicated component ที่ memo แล้ว หรือใช้ CSS animation แทน

---

## Plan แก้ไข

| File | Change |
|------|--------|
| `index.html` | ย้าย Google Fonts จาก CSS @import เป็น `<link preconnect>` + `<link stylesheet>` |
| `src/index.css` | ลบ `@import` fonts บรรทัดแรก, เปลี่ยน grain overlay จาก SVG filter เป็น static PNG noise |
| `src/pages/Index.tsx` | เปลี่ยน ParallaxImage จาก JS `useScroll` เป็น CSS `will-change: transform` + simpler approach |
| `src/components/PageTransition.tsx` | ลด delay, เพิ่ม `will-change: transform` |
| `src/components/HeroSection.tsx` | แยก typewriter เป็น isolated component ลด re-render scope |

การแก้เรื่อง **Google Fonts** อย่างเดียวน่าจะลด FCP ลงได้ 2-3 วินาที

