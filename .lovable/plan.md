

## เส้นแบ่ง Section — ให้อยู่ในขอบ ไม่เต็มหน้าจอ

ตอนนี้ section dividers (`border-t border-foreground`) ใช้กับ `<section>` ที่มี `px-6 md:px-10` → เส้นจึงลากเต็มความกว้าง viewport (เพราะ border อยู่บน element ที่กิน full-width แล้ว padding แค่ดัน content ข้างใน)

### แก้

ย้าย `border-t` จาก `<section>` ไปอยู่บน **inner wrapper** ที่อยู่ภายใน padding → เส้นจะเริ่ม/จบที่ขอบเดียวกับ content (`px-6 md:px-10`)

**Pattern เดิม:**
```tsx
<section className="px-6 md:px-10 py-16 md:py-24 border-t border-foreground">
  <div>...</div>
</section>
```

**Pattern ใหม่:**
```tsx
<section className="px-6 md:px-10 py-16 md:py-24">
  <div className="border-t border-foreground pt-16 md:pt-24 -mt-16 md:-mt-24">
    ...
  </div>
</section>
```

หรือทางที่สะอาดกว่า — ย้าย border ไป wrap content แบบ natural:
```tsx
<section className="px-6 md:px-10">
  <div className="border-t border-foreground py-16 md:py-24">
    ...
  </div>
</section>
```

→ เส้นจะหยุดที่ `24px` (mobile) / `40px` (desktop) จากขอบจอ แทนที่จะลากสุด

### ไฟล์ที่จะแก้

ทุกหน้าที่มี section divider เต็มจอ:

| ไฟล์ | section ที่ต้องแก้ |
|---|---|
| `src/pages/Index.tsx` | section dividers ทุกตัวที่ใช้ `border-t` |
| `src/pages/Services.tsx` | service list `<section>` + CTA `<section>` |
| `src/pages/Work.tsx` | grid section + CTA section |
| `src/pages/About.tsx` | meaning, methods, team, CTA sections |
| `src/pages/Contact.tsx` | section dividers |
| `src/components/PageHero.tsx` | hero divider (ใช้อยู่แล้วแบบ inner — ตรวจซ้ำ) |
| `src/components/SectionHeader.tsx` | ใช้ inner อยู่แล้ว ✓ ไม่ต้องแตะ |
| `src/components/Footer.tsx` | top border ของ footer (ถ้าเต็มจอ → ขยับเข้าใน) |

### ข้อยกเว้น

- **Footer top border** — ถ้า user ต้องการ visual anchor สุดท้าย เต็มจอก็ ok (ขอ confirm)
- **Hero top border** ใน `PageHero` ใช้ inner อยู่แล้ว ✓

### หลักการ
- Section dividers ทั้งหมด → จำกัดอยู่ในกรอบ `px-6 md:px-10` เดียวกับ content
- ไม่มีเส้นไหนลากเต็ม viewport อีก (ยกเว้น Footer ถ้า user ต้องการ)

