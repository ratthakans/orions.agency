
ย้าย Mastery in Storytelling video (21:9 full-bleed) ขึ้นมาก่อน Selected Work เพื่อให้ scroll experience มี movement เร็วขึ้น

## ลำดับใหม่ของหน้า Index

```
1. HERO
2. MARQUEE
3. THE VICIOUS CYCLE
4. APPLIED SOLUTIONS (dark)
5. ⭐ MASTERY VIDEO (21:9) ← ย้ายขึ้นมา
6. SELECTED WORK
7. SOCIAL & COMMERCIALS (reel)
8. CLOSING CTA
```

**เหตุผล**: หลัง dark section "Applied Solutions" → ตัด cut เข้า cinematic video ทันที = energy spike + transition contrast (ดำ→วิดีโอ→กลับ paper) ก่อนที่ user จะเข้า Selected Work ที่ต้อง scroll นาน

## การเปลี่ยนแปลง

**ไฟล์เดียว**: `src/pages/Index.tsx`
- ย้าย block "MASTERY IN STORYTELLING" (section 21:9 video) จากตำแหน่งหลัง Selected Work → ขึ้นไปวางก่อน Selected Work (หลัง Applied Solutions)
- ไม่ต้องแก้ markup, styling, หรือ component อื่น — แค่ reorder JSX block

## Trade-off ที่พิจารณา

- ✅ Movement เร็วขึ้น (video ปรากฏที่ ~40% scroll แทน ~60%)
- ✅ Dark→video→paper transition แข็งแรงขึ้น
- ⚠️ Selected Work จะอยู่หลัง video — แต่ video เป็น ambient loop เลยไม่แย่งความสนใจกับ work cards
