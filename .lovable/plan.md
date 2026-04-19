

## Master Audit — Mobile Responsive + UI Consistency + Art Direction

ตรวจครบทุกหน้าและทุก component แล้ว — แบ่งเป็น **bugs** (ต้องแก้), **inconsistencies** (ควรแก้), และ **art direction polish** (เก็บความสะอาดให้สม่ำเสมอ)

---

### 🔴 BUGS — Mobile responsive & layout

| # | ที่ | ปัญหา | แก้ |
|---|---|---|---|
| 1 | `Nav.tsx` L42 + `StudioStatusBar` | StatusBar `h-7`, Nav `top-7` ✓ — แต่ `Layout.tsx` `pt-7` แสดงว่า main เริ่มทับ Nav (Nav fixed) → ไม่มี offset เพิ่มเติมสำหรับ Nav `h-[64px]` → **Index hero ใช้ min-h-screen แล้ว flex center → OK**, แต่หน้าอื่น `PageHero` ใช้ `pt-28 md:pt-32` = 112/128px คำนวณรวม StatusBar(28)+Nav(64)=92px → เหลือ 20–36px เท่านั้น **บน mobile แน่นเกินไป** | เพิ่ม `pt-32 md:pt-36` |
| 2 | `Index.tsx` L66 hero | Mobile (`375px`): `h-display-xl` clamp(56→180px) = 56px พอ แต่ `RotatingHeadline` ใช้ `h-display-xs` = clamp(20→32px) absolute positioning + whitespace-nowrap → **บน 375px ข้อความยาว "PRACTICAL · BOLD · DONE" / "FROM IDEA → FINAL CUT" overflow hero** | ลด `h-display-xs` → `text-[16px] md:text-[22px]` ในบริบทนี้, หรือ wrap container `max-w-full overflow-hidden` |
| 3 | `Index.tsx` L132 | Vicious Cycle row mobile: number `text-[56px]` ใน col-span-10 อยู่ติดกับ index ขวา → **bottom body col-span-12 ตกไปบรรทัดใหม่ดีอยู่ แต่ FlipNumber suffix `text-[24px]` ใน col-span-10 แน่น** | ลดเหลือ `text-[44px] md:text-[88px]` |
| 4 | `Footer` Layout — sticky reveal | `Layout.tsx` ใช้ `clipPath` + `sticky bottom-0` → **บน mobile / iOS Safari** sticky reveal แตก เพราะ main มี `bg-background` solid ด้านบน + footer สูงกว่า viewport → user ไม่เห็น footer reveal | เพิ่ม `style={{ minHeight: footer height }}` เป็น spacer หรือเปลี่ยนเป็น standard footer (no sticky) |
| 5 | `PageHero.tsx` L29 + L34 | `verticalLabel` มี `hidden md:flex` ✓ แต่ `meta` (`hidden sm:inline`) — บน 375–639px **eyebrow โดดเดี่ยว ฝั่งขวาว่าง** → ดูตัด | เพิ่ม `meta` แสดงบน mobile หรือซ่อน eyebrow row spacing |
| 6 | `Contact.tsx` L99 audit list | บน mobile (`grid-cols-1`) padding `p-8` → ขอบบีบ + `lg:border-r` หาย → **ดี** แต่ Live availability marquee `border-b-0` ติดกับ audit card (border-foreground) → mobile จะเห็น 1px gap จากการต่อ border 2 ชั้น | unify ใช้ shared border |
| 7 | `Contact.tsx` L140 button | `mt-8 md:col-span-2 px-7 py-5` → **mobile `py-5` สูง 60px กว้างเต็ม OK** แต่ใช้ `hover:opacity-90` ไม่มี `transition-colors` → แตกต่างจาก CTA component | unify ผ่าน `<CTA>` |
| 8 | `Work.tsx` L209 | `"18 films · music · culture"` — แต่จริงๆ row1=6, row2=6, row3=5 = **17** ไม่ใช่ 18 | แก้เป็น `17 films` |
| 9 | `About.tsx` L155 stats `border-l border-soft pl-3` | mobile 3 คอลัมน์ `grid-cols-3 gap-3` + FlipNumber `text-[28px]` + label index-badge → **บน 375px label "YEARS CRAFT" / "IDEAS APPLIED" แตก wrap ไม่สวย** | เพิ่ม `min-w-0` หรือลด tracking |
| 10 | `Services.tsx` L149 | `num-display text-[72px] md:text-[120px]` mobile = 72px + group-hover translate → ที่ mobile **ไม่มี hover** → number ลอยอยู่เฉยๆ ดูแน่น | สำหรับ mobile ลดเหลือ `text-[56px]` |

---

### 🟡 INCONSISTENCIES — ควรแก้ให้สอดคล้อง

| ที่ | ปัญหา | แก้ |
|---|---|---|
| **Section padding** | Index ใช้ `py-16 md:py-24` (Vicious, Applied, Selected Work), `py-16 md:py-20` (Social, Closing) ปนกัน — Work, About เหมือนกัน | กฎใหม่: **major section** = `py-20 md:py-28`, **closing/CTA** = `py-16 md:py-20` |
| **`text-gradient` 1/site rule** | ใช้แล้ว Index L249 "applying" ✓ — แต่ยังมี: About L268 "ลากเส้น", About L392 "applying", SelectedWorkReel L164 stat (ทุก card!) → **5+ จุด** ไม่ใช่ 1 | เก็บแค่ Index L249 และ About L392 (closing สอดคล้อง) — ลบจาก SelectedWorkReel stats (เปลี่ยนเป็น solid foreground) และ About L268 |
| **Hairline width scale** | กฎ `w-8 / w-16 / w-24` แต่ยังพบ: Index L94 `h-10` (scroll dash, OK), About L294 inline width OK, **Index L155 `w-8`** ✓, **Index L125 `w-16`** ✓ — หลายที่เริ่ม OK แล้ว | (Already consistent — เลย) |
| **Section heading size** | "Applied Solutions" `h-display-md`, "Vicious Cycle" `h-display-md` ✓, "Social & Commercials" `h-display-sm`, "Music & Creative" `h-display-sm`, "Entertainment & Long-form" `h-display-sm` → **ไม่มี hierarchy ที่ชัด** | กฎ: page-level (1 ต่อหน้า, marquee/anchor) = `md`, sub-section = `sm` — review แต่ละหน้า |
| **CTA button hover** | CTA primary ใช้ `hover:opacity-95`, secondary ghost `hover:opacity-70`, Contact submit `hover:opacity-90`, Footer social `hover:bg-background` | unify CTA primary → `hover:bg-foreground/90` ภายใน, audit button (Contact L95) → `hover:opacity-95` |
| **VideoReel L160 mix-blend-difference** | Tag/index บน thumbnail ใช้ `mix-blend-difference` text-background → **บน thumbnail สว่างมาก = ขาว, บน thumbnail มืด = ขาวเช่นกัน** → OK แต่บางครั้งอ่านยาก | เพิ่ม subtle gradient overlay top |
| **ShowRow L88** `from-background/85` | Background = cream, gradient ขึ้นจาก background สว่าง 85% → **ทำให้ตัวหนังสือ mono dark อ่านได้** OK แต่ contrast ขัด art direction (overlay สว่างบนรูปมืด) | เปลี่ยนเป็น `from-foreground/80 to-transparent` + text-background |
| **Nav scroll progress L85** | ยังใช้ `bg-gradient-accent` → ขัดกับกฎ "1 gradient/site" | เปลี่ยนเป็น `bg-foreground` |
| **PageHero meta** | "ØRIONS · BANGKOK" แต่ Index hero ไม่มี meta แบบเดียวกัน → page hero pattern ไม่ unified | (ตั้งใจ — Index = cover, page heroes = inner — OK ไม่แก้) |
| **Footer L37 social icons hover** | เปลี่ยนจาก gradient เป็น `hover:bg-background hover:text-foreground` ✓ unified แล้ว | OK |

---

### 🟢 ART DIRECTION POLISH (Amsterdam clean)

1. **Vicious Cycle ฝั่งขวา** — ตอนนี้ใช้ index `font-mono 0X` + FlipNumber + label. **ลบ index ซ้ำ** (เพราะ section header ฝั่งซ้าย "WHY BUDGETS KEEP LEAKING" ไม่มี index แล้ว → ฝั่งขวายังมี 01/02/03 จะดูซ้ำ) — เอาออก, เหลือ FlipNumber พอ
2. **Index hero rotating headline** — บน mobile ตัวอักษรชนขอบ → ลด `h-display-xs` เหลือ `text-[15px] md:text-[22px]`
3. **Closing CTA pattern** — Index, Work, About มี closing CTA ซ้ำกัน (READY WHEN YOU ARE + email/phone) → **DRY** เป็น `<ClosingCTA />` component → unify visual + lower maintenance
4. **CornerMarks (global)** — fixed top-9 → **บน mobile ทับ StatusBar (h-7=28px) + Nav (h-16=64px) = 92px** แต่ mark อยู่ที่ `top-9` (36px) → **ทับ Nav** | ย้าย `top-28` (ใต้ Nav) หรือ hide บน mobile
5. **About Method letter "O O R I O N S" — บน mobile** `grid-cols-2 md:grid-cols-6` → 2 col × 3 row → letter `text-[48px]` ใน 6 rows อ่านได้ แต่ **process arrow `hidden md:block` → mobile ไม่เห็น flow** | เพิ่ม mobile vertical arrow ระหว่าง row หรือเอาออกแล้วใช้ number bullets
6. **Services stats grid L190** `border border-foreground` + `gap-px bg-foreground` — บน mobile `sm:grid-cols-3` → 375px เหลือ 1 col → **stack แนวตั้ง dividers ทำงาน OK**, แต่บน 414–768px (sm break) เริ่ม 3 col แน่น | ปรับ `md:grid-cols-3` (768+)
7. **Services article hover translate-x ของ number** — mobile no hover → ใช้ scroll-triggered animation แทน หรือลบ
8. **Footer pt** — `pt-12 md:pt-14` → mobile บีบ | เพิ่ม `pt-14 md:pt-16`
9. **Contact form input** L18 — `border-b` + transparent → **iOS autofill ทำให้ background ขาว** | เพิ่ม `autoComplete` + `-webkit-text-fill-color`
10. **VideoReel + SelectedWorkReel** — duplicate code (95% เหมือนกัน) → ควร merge เป็น `<MediaReel>` 1 component (ลดความเสี่ยง drift)
11. **Letter spacing index-badge** = 0.04em แต่ mono captions = 0.18–0.22em — ตั้ง **2 token เดียว**: badge=`0.18em`, caption=`0.22em` → ลด visual noise
12. **Music & Creative Content** — 3 rows, ไม่มี auto-marquee animation จริง (ใช้ VideoReel เดียวกัน scroll manual) — ตอนนี้ feel เหมือน 3 reels ทั่วไป → คอมเมนต์โค้ด `auto-scrolling marquees` misleading | เพิ่ม auto-scroll หรือเปลี่ยน comment

---

### 📋 แผนทำ (1 commit, จัด priority)

**Phase A — Bug fixes (mobile critical)**
- PageHero `pt-32 md:pt-36`
- Index hero rotating headline mobile size
- CornerMarks ย้าย `top-28` หรือ hide mobile
- Vicious Cycle: ลด FlipNumber mobile size + ลบ index ซ้ำฝั่งขวา
- Footer pt + sticky reveal fix (iOS)
- Work.tsx: "17 films" (ไม่ใช่ 18)
- About stats `min-w-0`
- Services number mobile size

**Phase B — Consistency**
- Section padding tokens unify (py-20 md:py-28 / py-16 md:py-20)
- ลบ `text-gradient` ส่วนเกิน (SelectedWorkReel stats, About L268)
- Nav scroll progress `bg-foreground`
- ShowRow gradient direction fix
- CTA hover unify
- Index marquee inner border (ตรวจอีกครั้ง)

**Phase C — Polish**
- สร้าง `<ClosingCTA />` shared component → ใช้ใน Index, Work, About, Services
- About Method mobile flow
- Services stats grid responsive
- Music section comment cleanup + label "17 films"
- Contact form autofill fix

**Phase D — QA**
- Test desktop 1399 + mobile 375 ทุกหน้า
- Screenshot report ทั้ง 5 หน้า

---

### ไฟล์ที่จะแก้

| ไฟล์ | งาน |
|---|---|
| `src/components/PageHero.tsx` | pt fix |
| `src/components/CornerMarks.tsx` | top offset, hide mobile |
| `src/components/Nav.tsx` | scroll bar color |
| `src/components/Footer.tsx` | pt, ensure no sticky bug |
| `src/components/Layout.tsx` | sticky reveal review |
| `src/components/SelectedWorkReel.tsx` | ลบ `text-gradient` stats |
| `src/components/ShowRow.tsx` | gradient direction |
| **NEW** `src/components/ClosingCTA.tsx` | shared closing block |
| `src/pages/Index.tsx` | hero rotating size, vicious cycle row, padding tokens, closing→ClosingCTA |
| `src/pages/Work.tsx` | "17 films", padding tokens, closing→ClosingCTA |
| `src/pages/About.tsx` | stats min-w-0, ลบ gradient L268, padding tokens, closing→ClosingCTA |
| `src/pages/Services.tsx` | number mobile size, padding, stats grid, closing→ClosingCTA |
| `src/pages/Contact.tsx` | form autofill, button via CTA |

---

### กฎที่จะ enforce (อัพเดต)

- Section padding: major=`py-20 md:py-28`, closing=`py-16 md:py-20` (เคร่งครัด)
- `text-gradient`: 2 จุดสูงสุด/site — Index closing "applying" + About closing "applying" (mirror) เท่านั้น
- ทุก closing CTA = `<ClosingCTA />` (DRY)
- CornerMarks: hide mobile (< md)
- Nav progress: solid foreground (no accent gradient)
- Mobile-first: text overflow check ทุก display heading + grid label

