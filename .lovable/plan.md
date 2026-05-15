
## A · ตารางเปรียบเทียบ (Pricing page)

แทรก section ใหม่ **"Compare."** ระหว่าง `02 · Packages` กับ `03 · Add-ons` → กลายเป็น section 03, Add-ons → 04, FAQ → 05 (อัปเดต `PageMark total="05"`).

### Layout

ตารางเส้น hairline 4 คอลัมน์: `Feature | Starter | Pro | Elite` — sticky header, mobile = horizontal scroll, ไม่มีพื้นหลัง/เงา/มุมโค้ง (ตามดีไซน์ system).

### แถวเปรียบเทียบ (อิงจาก `details` เดิมในประวัติ)

```text
Feature                          Starter        Pro              Elite
───────────────────────────────────────────────────────────────────────────────
Price (THB / mo)                 29,000         59,000           119,000
Minimum contract                 1 mo           3 mo             6 mo
─── Content ──────────────────────────────────────────────────────────────────
Static posts                     10             15               20
Stories (IG / FB)                —              15               Daily (30)
Reels / TikTok (9:16)            15             30               30 (3 Hero)
Horizontal video (16:9)          —              —                1 / mo
Photography                      —              10               20–30
─── Production ───────────────────────────────────────────────────────────────
Production days                  1              2                3 (full crew)
Platforms covered                1              2                up to 4
─── Strategy ─────────────────────────────────────────────────────────────────
Strategy meetup                  1× / mo        2× / mo          4× / mo
Trend report                     Monthly        Bi-weekly        2× / mo + alerts
Content calendar                 —              Monthly          Monthly + QBR
Brand manual                     —              —                ✓
─── Ads & Community ─────────────────────────────────────────────────────────
Ads management                   Add-on (3,500) Free ≤ 50k       Free ≤ 100k
Community mgmt response          ≤ 6 hr         ≤ 3 hr           ≤ 1 hr
Dedicated account mgr            —              Shared           ✓
─── Delivery ─────────────────────────────────────────────────────────────────
Revisions                        1 / piece      2 / piece        3 major + ∞ minor
Performance bonus                —              —                ROAS > 5× → 5%
```

**Visual cues:**
- `—` = ไม่มี (muted)
- ตัวเลข + `✓` ใช้ `tabular-nums`
- Column header Pro มี `bg-foreground/[0.03]` เบา ๆ + ribbon `★ MOST POPULAR`
- Row group dividers (Content / Production / Strategy / Ads / Delivery) = หัว group เล็ก ๆ uppercase mono
- ไม่มี border ทุกเส้น — แค่ horizontal hairlines ระหว่างแถว

### Add-ons: คงตารางเดิมไว้

เพิ่มหมายเหตุใต้ตาราง compare: *"Need more? See Add-ons below."* เพื่อเชื่อม section.

## B · Footer cleanup (ยังไม่ apply ของรอบก่อน)

ตอนนี้ `Footer.tsx` ยังเป็น:
- email = `font-display` (Unbounded uppercase look)
- "— ØRIONS · BANGKOK" = `tracking-[0.4em]`
- nav/socials = `font-mono uppercase`
- ไม่มี link `Pricing`

### แก้

- `tracking-[0.4em]` → `tracking-[0.14em]`
- email → `font-serif italic` (Instrument Serif), ลด size เป็น `text-[24px] md:text-[34px]`, lowercase
- nav links + socials → ใช้ class `btn-label` (Instrument Serif italic, no uppercase, 16px)
- เพิ่ม `{ to: "/pricing", label: "Pricing" }` ใน `navLinks` (วางก่อน Work หรือหลัง Services)
- Legal row: `tracking-[0.14em]` (ไม่ใช่ 0.4em อยู่แล้วใน 0.14 — ok)
- คั่น socials กับ nav ด้วยจุด · เพื่อความสอดคล้อง

ผลลัพธ์: footer จะเข้ากับ hero footer (`hello@orions.agency` แบบ italic serif) และปุ่มทั่วเว็บที่ใช้ `btn-label` แล้ว.

## Files

- **Edit** `src/pages/Pricing.tsx` — เพิ่ม section Compare, อัปเดต `PageMark total="05"` ทุกที่
- **Edit** `src/components/Footer.tsx` — refactor typography + เพิ่ม Pricing link

## Out of scope

- ไม่แก้ราคา/แพ็กเกจจริง
- ไม่แตะ design system / palette
- ไม่แตะหน้าอื่น
