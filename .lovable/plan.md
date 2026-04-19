

## Fix: THE MEANING OF THE LINE — layout เพี้ยน

### ปัญหา
`<Reveal>` (motion.div) ห่อแต่ละ column → ตัว Reveal กลายเป็น grid item โดยตรง แต่ `md:col-span-4` ถูกใส่ไว้บน **inner div** ภายใน Reveal → class ไม่มีผลต่อ grid → ทุก column กินแค่ 1/12 → 3 columns เบียดซ้ายสุด, ขวาว่าง 9/12 ของ grid.

### แก้
เปลี่ยน manifesto grid จาก `grid-cols-12` เป็น `grid-cols-1 md:grid-cols-3` (เรียบง่าย ตรงไปตรงมา) และลบ `md:col-span-4` ออกจาก inner div. Reveal จะกลายเป็น grid item ที่กิน 1/3 ตรงๆ — ไม่ต้องพึ่ง col-span.

```tsx
<div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
  {[...].map((c, i) => (
    <Reveal key={c.n} delay={0.1 + i * 0.08} className="h-full">
      <div className="border-t border-foreground pt-6 h-full flex flex-col">
        ...
      </div>
    </Reveal>
  ))}
</div>
```

### Cleanup เพิ่ม
- ลบ `import aboutHero` ที่ไม่ได้ใช้ (บรรทัด 6)
- ลด decorative `―` ขนาดลง (`clamp(160px, 28vw, 420px)`) + opacity `0.03` ให้ subtle ขึ้น ไม่บังเนื้อหา
- เพิ่ม `className` prop รองรับใน `Reveal` (ถ้ายังไม่มี — มีแล้ว ตรวจสอบ)

### ไฟล์ที่แก้
- `src/pages/About.tsx` — manifesto grid + cleanup import + decorative line size

