

# เพิ่ม accent-blue เข้าไปใน UI ให้ CI ครบ 4 สี

ตอนนี้เว็บใช้แทบจะแค่ **ดำ ขาว เหลือง** — สีน้ำเงิน (accent-blue) ยังไม่ถูกใช้เลย จะกระจายสีน้ำเงินเข้าไปในจุดที่เหมาะสมโดยไม่ over-use:

---

## จุดที่จะเพิ่ม accent-blue

### 1. Navbar — active link underline สีน้ำเงิน
- Active nav link เปลี่ยนจากแค่ `text-foreground` เป็นมี **bottom border สีน้ำเงิน** (`border-b-2 border-accent-blue`) เพื่อ differentiate จาก hover state

### 2. Navbar — scroll progress bar เปลี่ยนเป็นน้ำเงิน
- Progress bar ที่ bottom ของ navbar เปลี่ยนจาก `bg-accent-warm` → `bg-accent-blue` เพราะเหลืองซ้ำกับ accent text แล้ว ใช้น้ำเงินจะ balance สี CI ได้ดีกว่า

### 3. Index.tsx — service number สีน้ำเงิน
- เลข "01", "02", "03", "04" ข้าง service titles เปลี่ยนจาก `text-muted-foreground/40` → `text-accent-blue` ให้เป็น accent point

### 4. Index.tsx — "View Work" link arrow hover สีน้ำเงิน
- Secondary links ("View Work →", "All Services →", "Contact →") เปลี่ยน hover color จาก `hover:text-accent-warm` → `hover:text-accent-blue` เพื่อแยก secondary action ออกจาก primary (เหลือง)

### 5. Footer — social links hover สีน้ำเงิน
- Social links (Facebook, Instagram, YouTube) เปลี่ยน hover เป็น `hover:text-accent-blue` แทน `hover:text-foreground`

### 6. Marquee — สลับสี hover ระหว่างเหลืองกับน้ำเงิน
- Marquee ตัวที่ 2 (slow) เปลี่ยน hover text จาก `text-accent-warm/20` → `text-accent-blue/20` เพื่อให้ 2 marquee bars มีสีต่างกัน

### 7. HeroSection — "View Work" link hover สีน้ำเงิน
- Link "View Work →" ใน hero เปลี่ยน hover เป็น `hover:text-accent-blue`

### 8. Service tags hover สีน้ำเงิน
- Tag pills ใน expanded service (Content Strategy, Social Content, etc.) เปลี่ยน hover border จาก `hover:border-accent-warm/30` → `hover:border-accent-blue/40`

---

## สรุปหลักการใช้สี
- **เหลือง (accent-warm)** = Primary accent — headlines, CTA buttons, main highlights
- **น้ำเงิน (accent-blue)** = Secondary accent — links, navigation indicators, interactive states
- **ขาว** = Text, primary buttons
- **ดำ** = Background

## Files to Edit
| File | Changes |
|------|---------|
| `src/components/Navbar.tsx` | Active link style + progress bar color |
| `src/components/HeroSection.tsx` | "View Work" hover color |
| `src/pages/Index.tsx` | Service numbers, secondary link hovers, service tag hovers |
| `src/components/Footer.tsx` | Social link hovers |
| `src/components/Marquee.tsx` | Accept color prop, second marquee uses blue |

