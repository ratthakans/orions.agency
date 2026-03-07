

## Astronomy / Constellation Concept for ØRIONS

ØRIONS = กลุ่มดาวนายพราน (Orion the Hunter) — concept ที่สามารถทอเข้าไปในทุก touchpoint ของเว็บไซต์ได้อย่างลึกซึ้ง ทำให้แบรนด์มีเอกลักษณ์ จดจำง่าย และแตกต่างจาก agency อื่น

---

### 1. Hero Section — Constellation Background

- เพิ่ม **interactive star field** บน Hero ด้วย canvas หรือ SVG dots ที่กระจายเป็น pattern ของกลุ่มดาว Orion
- ดาวแต่ละดวงเป็นจุดเล็กๆ สีขาว opacity ต่ำ มี **subtle twinkle animation** (scale + opacity pulse)
- **Orion constellation lines** จะค่อยๆ draw เข้ามาเมื่อ page load ด้วย framer-motion path animation
- เปลี่ยน tagline จาก "AI-Native Creative Agency · Bangkok" เป็น **"Navigating brands by the stars · Bangkok"** หรือคงไว้แต่เพิ่ม constellation visual

### 2. Process Section — "Four Stars of Orion"

- Rebrand 4 steps (01-04) เป็น **ดาว 4 ดวงหลักของ Orion**: Betelgeuse, Rigel, Bellatrix, Saiph
- แต่ละดวงมี **star icon** แทนตัวเลข พร้อม constellation line เชื่อมระหว่าง steps
- เปลี่ยน section heading: "A framework that compounds" → **"Four stars. One constellation."**

```text
  ★ Betelgeuse          ★ Bellatrix
  [Discovery]           [Strategy]
       \                /
        \——— BELT ———/
       /                \
  ★ Saiph              ★ Rigel
  [Creation]           [Launch & Scale]
```

### 3. Services Section — "Star Map" Metaphor

- Project services = **"Navigational Stars"** (one-time projects ที่กำหนดทิศทาง)
- Retainer services = **"Orbital Systems"** (ongoing services ที่โคจรรอบแบรนด์)
- เพิ่ม subtle constellation line connecting services ที่เกี่ยวข้อง

### 4. About Section — Origin Story

- เพิ่ม paragraph ที่เล่า **ทำไมชื่อ ØRIONS**: "Named after the hunter constellation — the brightest, most recognizable pattern in the night sky. We help brands become just as unmistakable."
- ทีม members แสดงเป็น **"star positions"** ในกลุ่มดาว

### 5. Visual & Micro-interactions

- **Star cursor trail**: เมื่อ hover บน dark sections มี subtle star particles ตามเมาส์
- **Section dividers**: แทน `<hr>` ด้วย thin constellation line pattern
- **✦ symbols** ที่มีอยู่แล้วใน ticker → เปลี่ยนเป็น ★ หรือ ✧ ให้ชัดว่าเป็น star
- **Loading/transition**: ดาวค่อยๆ connect เป็น constellation

### 6. Copy & Language Updates

- "Cut through the noise" → **"Navigate through the noise"**
- "Human Thinking. AI Speed." → คงไว้ แต่เพิ่ม subtitle: **"Like Orion — visible, precise, unforgettable."**
- CTA section: เปลี่ยน background watermark "ØRIONS" ให้เป็น **Orion constellation SVG** แทน
- FAQ or About: เพิ่ม **"Why Orion?"** section อธิบาย brand name

### 7. Footer Enhancement

- เพิ่ม **minimal Orion constellation SVG** ข้าง logo
- Tagline: "AI-Native Creative Agency" → **"Guiding brands through the noise. ✧"**

---

### Technical Approach

| Element | Implementation |
|---|---|
| Star field background | SVG dots + CSS twinkle animation (no canvas for performance) |
| Constellation lines | SVG `<path>` with framer-motion `pathLength` animation |
| Star particles on hover | CSS `::after` pseudo-elements or lightweight framer-motion |
| Orion constellation SVG | Hand-crafted SVG matching real Orion star positions |
| Process section lines | SVG connectors between the 4 step cards |

### Files to modify
- `src/components/HeroSection.tsx` — star field + constellation SVG
- `src/components/ProcessSection.tsx` — rename steps, add star icons + connecting lines
- `src/components/ServicesSection.tsx` — rename categories, add star metaphor
- `src/pages/AboutPage.tsx` — origin story section
- `src/components/Footer.tsx` — constellation icon + updated tagline
- `src/pages/Index.tsx` — CTA section constellation background
- `src/index.css` — twinkle animation keyframes, star utilities
- New: `src/components/OrionConstellation.tsx` — reusable constellation SVG component

