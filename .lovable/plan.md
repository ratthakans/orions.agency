

# ใช้ Design จาก PDF V6.4 — Photography-Led Editorial (คง content เดิม)

## เป้าหมาย
ยก **visual language** จาก PDF มาใช้ (ภาพถ่าย cinematic, layout magazine, typography ใหญ่ชิดซ้าย) — แต่ **content ทุกหน้าคงเดิม 100%**

## สิ่งที่จะทำ

### 1. Import 8 ภาพจาก PDF → `src/assets/`
- `hero-bicycle.jpg` — sunset street, cinematic
- `pov-crosswalk.jpg` — crowd motion blur
- `unlock-running.jpg` — figures running, golden hour
- `gravity-taxi.jpg` — yellow taxi motion
- `portrait-1.jpg`, `portrait-2.jpg`, `portrait-3.jpg` — 3 portraits
- `about-bw.jpg` — B&W editorial

### 2. Design changes per page (content **ไม่แตะ**)

**Home (`Index.tsx`)**
- Hero: ทิ้ง gradient blob → full-bleed `hero-bicycle.jpg` + dark warm overlay + ØRIONS wordmark + tagline เดิม "Practical. Bold. Done."
- Stagnation: split 50/50 — `pov-crosswalk.jpg` ซ้าย + quote เดิมขวา
- 3 Pressures: คง labels เดิม (ATTENTION SPAN / DIGITAL INFLATION / DIGITAL WASTE) — ขยายตัวเลขเป็น 96-128px
- Featured Work: คง 3 projects เดิม แต่เปลี่ยน gradient placeholder → ภาพ warm-tinted

**Services (`Services.tsx`)**
- คง 4 services เดิม — เพิ่ม portrait images กับแต่ละ service
- Hero ใช้ภาพ overlay style

**Work (`Work.tsx`)**
- คง project list เดิม — เปลี่ยน thumbnail gradient → ภาพ warm

**About (`About.tsx`)**
- คง content เดิม — เพิ่ม `about-bw.jpg` ในส่วน formula/principles

**Contact**: ไม่แตะ

### 3. CSS additions (`src/index.css`)
```css
.image-warm { filter: sepia(0.08) saturate(1.1) contrast(1.05); }
.image-overlay::after {
  content:''; position:absolute; inset:0;
  background: linear-gradient(180deg, rgba(11,11,13,0.2), rgba(11,11,13,0.85));
}
```
- ขยาย metric numbers → 96-128px
- ภาพ bleed full-width / column-bleed (ไม่ครอบเป็น card)

## ไม่เปลี่ยน
- **ทุกตัวอักษร / copy / heading text** ในทุกหน้า
- Color tokens (warm bone/amber)
- Routing, Nav, Footer, PageHero structure
- Section index badges, hairline dividers

## ไฟล์ที่จะแก้
- `src/assets/` — เพิ่ม 8 รูป
- `src/index.css` — image filter utilities
- `src/pages/Index.tsx` — สลับ visual element (content เดิม)
- `src/pages/Services.tsx` — เพิ่มรูป (content เดิม)
- `src/pages/Work.tsx` — เพิ่มรูป (content เดิม)
- `src/pages/About.tsx` — เพิ่มรูป (content เดิม)

