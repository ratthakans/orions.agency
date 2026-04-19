

## ปรับ Home page ให้ clean ขึ้น

### 1. APPLIED SOLUTIONS (section 05) — 4 column แถวเดียว
- เปลี่ยนจาก horizontal expanding rows → **4 column grid แถวเดียว**
- แต่ละ card minimal: number เล็ก + title + description สั้น
- `grid-cols-1 md:grid-cols-2 lg:grid-cols-4` คั่นด้วย hairline แนวตั้ง
- ลบ hover expand animation

### 2. THE BLUEPRINT (section 06) — แถวเดียว 6 column
- เปลี่ยนจาก vertical stack → **horizontal single row** (O-R-I-O-N-S)
- แต่ละ column: ตัวอักษรใหญ่ด้านบน + stage name + คำอธิบายสั้นใต้
- Desktop: `grid-cols-6` / Tablet: `grid-cols-3` / Mobile: `grid-cols-2`
- คั่นด้วย hairline แนวตั้งบาง

### 3. WHO IS ØRIONS (section 04) — รูปเล็กลง
- ลด col span รูป: 7 → 5 cols, text: 5 → 6 cols (ขยับให้สมดุล)
- เปลี่ยน aspect ratio รูป: 4/5 → 3/4 (เตี้ยลง)
- ลบ vertical "BANGKOK / 2024" oversized anchor (รก)
- คงรูปเดิม `who-orions-team.jpg` ไปก่อน — ถ้าต้องการเปลี่ยนรูป upload มาทีหลังได้

### 4. Cleanup รวม
- ลด vertical padding ของ section จาก `py-32` → `py-20-24` ในจุดที่ใหญ่เกิน
- ลบ decorative oversized background numbers/letters (เช่น "01–03" ที่ Vicious Cycle, ghosted ØRIONS wordmark ที่ CTA) เพื่อให้ clean
- คง hairline divider, typography hierarchy เดิมแต่เรียบขึ้น

### ไฟล์ที่จะแก้
- `src/pages/Index.tsx` (sections 03–10)

