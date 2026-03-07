

## ปัญหาปัจจุบัน

โลโก้ ØRIONS ใน Navbar มีปัญหา:
1. ใช้ทั้ง `tracking-[0.22em]` ใน className **และ** `letterSpacing: '0.22em'` ใน inline style — ทำให้ spacing ซ้ำซ้อน ห่างเกินไป
2. `wordSpacing: '-0.15em'` ถูกใส่มาเพื่อแก้ช่องว่าง แต่ไม่จำเป็นเพราะ ØRIONS เป็นคำเดียว
3. Footer ใช้ `tracking-[0.22em]` + `wordSpacing` เหมือนกัน — ห่างเกินไปเช่นกัน

## แผนแก้ไข

### 1. Navbar logo (line 28)
- ลบ inline style `letterSpacing` ออก (ซ้ำกับ `tracking-[0.22em]`)
- เปลี่ยน `tracking-[0.22em]` เป็น `tracking-[0.08em]` — ห่างเล็กน้อยแบบ hi-tech brand
- ลบ `wordSpacing` ออก
- ลบ `gap-2.5` ระหว่าง dot กับ text ให้เป็น `gap-2`

### 2. Footer logo (line 12)
- เปลี่ยน `tracking-[0.22em]` เป็น `tracking-[0.08em]`
- ลบ `wordSpacing` ออก

### ไฟล์ที่แก้ไข
- `src/components/Navbar.tsx` — line 28
- `src/components/Footer.tsx` — line 12

