## Navbar redesign — inline mono links

อ้างอิงจาก https://qa5uxsm7zp73k.kimi.page — navbar เรียบง่ายมาก: wordmark ซ้าย + text links ขวา ไม่มี hamburger overlay บน desktop

### Layout

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ ØRIONS         MANIFESTO  APPROACH  SERVICES  WORK  HEALTH CHECK   CONTACT → │
└──────────────────────────────────────────────────────────────────────────────┘
```

- Fixed top, h-[72px], px-6 md:px-10
- `mix-blend-difference` คงไว้ — อ่านได้ทั้งบน Snow และ section dark
- ซ้าย: `ØRIONS` wordmark (Inter, tracked +0.16em uppercase, 14–15px) → `/`
- ขวา (desktop ≥md): inline links
  - `font-mono text-[11px] tracking-[0.18em] uppercase`
  - gap-7 ระหว่างลิงก์
  - opacity 60 default → 100 hover/active, transition 200ms
  - Active route: Cinnabar 1px underline ใต้ตัวอักษร
- **`Contact`** เป็นลิงก์สุดท้าย + ไอคอน arrow `→` เป็น CTA เน้นเล็กน้อย (ยังคงเป็น text, hairline เท่านั้น — ไม่มี button fill)
- **`Health Check`** อยู่ใน top bar ด้วย (เป็น 2 คำ ใช้ non-breaking space)

### Mobile (<md)

เก็บ hamburger + full-screen overlay เดิมไว้ (จอเล็กรับ 6 ลิงก์ inline ไม่ไหว)

### Files

- `src/components/Nav.tsx` — only file changed
