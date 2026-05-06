# รีวิว UX/UI หน้าแรก (Index)

## ภาพรวม — สอดคล้องไหม?

โดยรวม **โทนสอดคล้องดี** กับ design system: light newsprint + dark sections สลับกัน, hairlines, zero-radius, accent ใช้น้อย, type scale ใช้ utilities ถูก. แต่เจอจุดไม่สม่ำเสมอ 7 จุดที่ควรเก็บงาน:

---

## จุดที่ไม่สอดคล้อง / ควรปรับ

### 1. Eyebrow numbering ไม่เป็นระบบเดียวกัน
- **Three Things** ใช้ `— 01` (text-background/50)
- **Process** ใช้ `— 01` เหมือนกันแล้ว ✓
- **Pressures (What you're up against)** ไม่มี eyebrow numbering เลย — แต่ใช้ `index-badge` เป็น label แทน
- **List items ใน Three Things** ใช้ `·01, ·02` ซึ่งเป็นรูปแบบที่สามที่ขัดกับสองแบบบน

→ เลือกระบบเดียว: ใช้ `— 01` กับ section ที่มีลำดับ (Three Things, Process), ตัด `·01` ใน list items ออก เหลือแค่ bullet หรือ dash ธรรมดา

### 2. Hierarchy ของหัวเรื่องการ์ดไม่ตรงกัน
- Three Things h3: `text-[24px] md:text-[28px]` (text-background ขาว)
- Process h3: `text-[22px] md:text-[26px]` (text-background ขาว)
- Pressures: ไม่มี h3 — ใช้ตัวเลข CountUp เป็น focal point

→ ปรับ Three Things กับ Process ให้ขนาดเดียวกัน (`text-[22px] md:text-[26px]`) เพราะอยู่ใน dark section เหมือนกัน

### 3. Body text ในการ์ดไม่ตรงกัน
- Three Things lead: `text-background/65 max-w-[300px]`
- Process body: `text-background/65` (ไม่มี max-width → บรรทัดยาวบนจอใหญ่)
- Pressures body: `text-foreground/70 max-w-[300px]`

→ ตั้ง opacity เดียวกัน (`/70`) และใส่ `max-w-[300px]` ใน Process ด้วย

### 4. Border weight ไม่สม่ำเสมอ
- Section dividers สลับระหว่าง `border-foreground` (เข้ม), `border-background/30`, `border-background/20`, `border-background/15`, `border-soft`
- ภายใน Three Things การ์ดใช้ `border-background/20` แต่ list separator ใช้ `border-background/15`

→ ลดเหลือ 2 ระดับชัดเจน: section divider = full opacity, internal hairlines = `/20` (dark) หรือ `border-soft` (light)

### 5. Section rhythm — top spacing
- ทุก section ใช้ `py-24 md:py-32` ✓ (ดี)
- แต่ Mastery video section ไม่มี padding เลย ทำให้ไหลติดกับ Three Things ด้านบนและ Process ด้านล่าง — ดูเหมือน "ตัด" ไม่ใช่ "หายใจ" 
- สามารถจงใจเพื่อ cinematic feel ได้, แต่ปัจจุบัน section ก่อนหน้า (Three Things) จบด้วย border ขาว/30 แล้วชนวิดีโอเลย

→ ตัดสินใจ: ถ้าอยากให้วิดีโอ "เต็มจอ" ปล่อยไว้แต่เพิ่ม divider ขาวบาง ๆ คั่น; หรือเพิ่ม padding ขาวด้านบน-ล่าง 1 หน่วย

### 6. Hover behavior ไม่สอดคล้องกัน
- Three Things: dim siblings (group hover opacity)
- Trusted by: dim siblings + change text color
- Pressures: ไม่มี hover เลย

→ Pressures เป็น stat (ไม่ใช่ link) — ไม่ควรมี hover ✓ ของเดิมถูกแล้ว
→ แต่ Three Things กับ Trusted by ที่ไม่ได้ link จริง ๆ การ dim siblings ทำให้ผู้ใช้คิดว่ากดได้ ควรพิจารณา **ลบ hover** ออกจาก Three Things (เพราะไม่ได้คลิกได้) เหลือ hover แค่ Trusted by ที่จริง ๆ ก็ไม่ได้คลิกได้เหมือนกัน → **ลบ hover ทั้งสอง** เพื่อความ honest

### 7. `text-background` ซ้ำใน h3 (cleanup เล็กน้อย)
- Three Things h3 ใส่ `text-background` ทั้งที่ parent section มี `text-background` แล้ว → ลบทิ้งได้

---

## สิ่งที่ดีอยู่แล้ว (ไม่ต้องแตะ)
- Hero มินิมอลและทรงพลัง
- Marquee bottom hero เชื่อมกับ services ดี
- Accent (Sunset Ink) ใช้น้อยมาก — ถูกต้องตาม core rule
- Light/Dark alternation มี rhythm ที่ดี
- Type scale ใช้ utilities ครบ ไม่มี inline clamp

---

## แผนการแก้

1. **Numbering system** — ลบ `·01..04` ใน list ของ Three Things ออก เหลือแค่ bullet `·` หรือ dash
2. **การ์ด typography** — ปรับ Three Things h3 เป็น `text-[22px] md:text-[26px]` ให้เท่า Process; ลบ `text-background` ที่ซ้ำซ้อน
3. **Body opacity + width** — ใช้ `/70` consistent; ใส่ `max-w-[300px]` ใน Process
4. **Hairlines** — รวมเป็นมาตรฐานเดียว: `border-background/20` ภายใน dark, `border-soft` ภายใน light
5. **Hover** — ลบ hover dim/color change ออกจาก Three Things และ Trusted by (cards ไม่ใช่ link)
6. **Mastery video transition** — ตัดสินใจ: เพิ่ม hairline divider บาง ๆ (`border-t border-background/15`) คั่นบน-ล่างของวิดีโอเพื่อ frame ให้ชัด

ทั้งหมดเป็นการปรับ presentation อย่างเดียว — ไม่แตะ logic หรือ data
