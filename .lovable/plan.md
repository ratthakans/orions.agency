

## Make ØRIONS Feel Alive — Motion & Dynamic Polish

ตอนนี้เว็บเป็น "static editorial" สวยแบบนิตยสาร แต่ขาด movement ที่บอกว่าเป็น **Creative Agency** จริงๆ ผมแนะนำ 6 layer ของ motion โดย**ไม่ทำลาย newsprint aesthetic** — ทุกอย่าง subtle, intentional, performant.

---

### 1. Hero — Kinetic Wordmark (impact สูงสุด)

**ตอนนี้**: ØRIONS โผล่ขึ้นมาเฉยๆ
**เปลี่ยนเป็น**:
- ตัวอักษร `Ø R I O N S` แยกเป็น 6 ตัว → stagger reveal (mask-up wipe จากล่างขึ้นบน, delay 60ms ต่อตัว)
- หลัง mount: `Ø` (ตัวแรก) มี **subtle rotation loop** 20s — บอกว่ามันคือ "orbit"
- Mouse move บน hero → wordmark **parallax tilt** ±3deg (perspective)
- Cursor บน hero → custom **circular dot cursor** (ขนาด 8px) ที่ scale-up เป็น 40px เมื่อ hover ปุ่ม

### 2. Scroll-driven Section Reveals

**ตอนนี้**: ใช้ `<Reveal>` แบบ fade+slide เหมือนกันหมด
**เปลี่ยนเป็น**:
- **Section dividers** (`border-t border-foreground`) → animate `scaleX 0 → 1` จากซ้าย→ขวา เมื่อ scroll เข้าจอ (400ms)
- **Section numbers** (`01`, `02`, `03`) → count-up effect (จาก `00` → number จริง)
- **Headlines** ทุกอัน → split words → stagger fade-up 40ms/word (แทน reveal ทั้งบล็อก)
- เพิ่ม `useScroll` + `useTransform` ทำ **horizontal parallax** ให้ภาพใน SelectedWorkReel เลื่อนสวนทาง scroll นิดๆ (±20px)

### 3. Marquee — Smarter Motion

**ตอนนี้**: marquee เลื่อนเร็วคงที่
**เปลี่ยนเป็น**:
- **Scroll-velocity coupling**: ตอน scroll ลง → marquee เร็วขึ้น, scroll ขึ้น → กลับทาง (เหมือนเว็บ Studio Lumio, Locomotive)
- Hover marquee → slow down to 30%

### 4. CTA & Link Magnetism

**ตอนนี้**: ปุ่ม CTA hover แค่ invert
**เปลี่ยนเป็น**:
- **Magnetic hover**: ปุ่ม "Request the Audit" + Nav links → element ขยับตาม cursor ±8px (limit) เมื่อ cursor ใกล้ — feel เหมือน agency เก๋ๆ (Active Theory, Locomotive)
- Arrow `↗` ใน CTA → on hover เคลื่อน diagonal-out + arrow ใหม่ slide-in (เหมือน Vercel)
- Underline links → wipe จากซ้าย→ขวา (มี `.story-link` อยู่แล้ว — apply ให้ครบ)

### 5. Page Transitions — Editorial Wipe

**ตอนนี้**: PageTransition มีแค่ scale-y wipe
**เปลี่ยนเป็น**:
- เปลี่ยนเป็น **diagonal wipe** ดำพาดเฉียง 15° (slash transition) + แสดง route name (เช่น "→ WORK") กลางจอตอน wipe peak
- Duration 800ms, ease custom `[0.76, 0, 0.24, 1]`

### 6. Micro-interactions เสริม "Creative Agency feel"

- **Image reveal**: รูปใน SelectedWorkReel → mask-clip reveal (clip-path inset 0 100% 0 0 → 0) แทน fade ธรรมดา
- **Number tickers**: stat numbers ใน Vicious Cycle → flip-digit animation (เหมือน airport board) แทน count-up ธรรมดา
- **Status bar**: เพิ่ม blinking caret หลัง time `13:42|`
- **Cursor follower**: dot เล็กๆ ตาม cursor ทั้งเว็บ (8px) + ring ที่ lag 200ms (Active Theory style)
- **Footer reveal**: footer เลื่อนขึ้นจากใต้ viewport (parallax fixed) เหมือนซ่อนอยู่ใต้ content

---

### สิ่งที่ **จะไม่ทำ** (รักษา tone)

- ❌ ไม่ใช้ glow / blur / 3D rotation รุนแรง
- ❌ ไม่ใส่ video background ใน hero (ทำลาย newsprint)
- ❌ ไม่ใช้ scroll-jacking แบบ Locomotive lock (ทำให้ accessibility แย่)
- ❌ ไม่ใส่ confetti / cute particles
- ❌ Motion ทุกอันต้อง respect `prefers-reduced-motion`

---

### Implementation plan (ทำเป็น phase)

**Phase A — Quick wins** (1 round, low risk, high impact)
1. Hero kinetic wordmark + Ø rotation
2. Section divider scaleX reveal
3. Headline word-split stagger
4. CTA arrow swap-out + magnetic links (Nav + CTA)

**Phase B — Cursor & scroll layer**
5. Custom cursor (dot + ring) ทั้งเว็บ
6. Scroll-velocity marquee
7. Image clip-path reveal ใน SelectedWorkReel

**Phase C — Polish**
8. Page transition diagonal wipe + route name
9. Flip-digit stat numbers
10. Status bar caret + Footer parallax

---

### Tech notes

- ใช้ `framer-motion` (มีอยู่แล้ว) — `useScroll`, `useTransform`, `useMotionValue`, `useSpring`
- Custom cursor: 1 component mount ที่ Layout, ใช้ `pointer-events-none fixed` + `transform3d` (GPU)
- Word split: helper `splitWords(text)` → return array → map ใน `<motion.span>`
- Magnetic: `useRef` + `mousemove` listener + `transform translate`
- Reduced motion: `useReducedMotion()` hook → bypass effects

---

### คำถาม

อยากให้เริ่มที่ phase ไหน? แนะนำ **Phase A ก่อน** (4 effects, เห็นผลทันที, ไม่กระทบ structure) แล้วค่อยขยับไป B/C

