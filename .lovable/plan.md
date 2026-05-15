## Goal
Make Contact match Services exactly — same hero style, same section rhythm, same typographic system. The previous pass aligned Contact to PageHero (Unbounded), but Services uses serif-italic display + PageMark + hairline-bordered sections. Bring Contact into that exact pattern.

## Edits — `src/pages/Contact.tsx`

**1 · Hero (mirror Services hero)**
- Drop `<PageHero>`. Restore the inline hero pattern:
  - `<section className="px-6 md:px-10">` + `max-w-[1280px] mx-auto pt-32 md:pt-40 pb-16 md:pb-24`
  - `<PageMark index="01" total="02" />`
  - `<h1 className="font-serif text-[44px] md:text-[80px] lg:text-[104px] leading-[1.0] tracking-[-0.03em] max-w-[14ch]">Tell us about <em className="text-orion italic">the brand.</em></h1>`
  - Subtitle: `font-serif italic text-[18px] md:text-[22px] text-muted-foreground max-w-[640px] leading-[1.5]` — "30-min discovery call. Free. We reply within 24 hours — with an honest fit-check."
  - Quick chip row (replaces hero CTAs from Services): 3 ghost links — Email · Call · LINE — using `btn-label border-b border-foreground` pattern.

**2 · Section 02 — Send a brief (form) — mirror "What we do"**
- `<section className="px-6 md:px-10 border-t border-foreground">` + `py-20 md:py-28`
- `<PageMark index="02" total="02" />`
- Title: `<h2 className="font-serif text-[40px] md:text-[72px] lg:text-[96px] leading-[1.0] tracking-[-0.03em] max-w-[14ch]">Send a <em className="text-orion italic">brief.</em></h2>`
- Below: 12-col grid hairline border-top wrapper (`mt-16 md:mt-24 border-t border-foreground`) with two columns separated by a vertical hairline (`md:border-l border-foreground`), matching the 3-up capability row pattern but as 7/5 split:
  - **Left (col-span-7)** — Form. Tag `— FORM` (mono 10px), then form fields. Inputs: transparent + `border-b border-foreground/40`, `font-thai text-[15px]`. Labels in mono 10px uppercase. Submit button styled like Services hero CTA: `bg-foreground text-background px-7 py-4 btn-label hover:bg-orion transition-colors` with `ArrowUpRight`.
  - **Right (col-span-5)** — Direct contact card with same internal rhythm as a Services capability:
    - Mono tag `— DIRECT`
    - Serif italic title `Direct.` (`font-serif italic text-[40px] md:text-[48px]`)
    - Pull-quote line `font-serif italic text-orion` — "ตอบกลับใน 24 ชั่วโมง — Mon–Fri."
    - Thai body desc
    - Hairline-dashed list: Email / Phone / LINE / WhatsApp / Studio (each row mono label + value).

**3 · Closing**
- Append `<ClosingCTA>` (same component used at the bottom of Services) with title "Prefer a quick call?" → CTAs: "Call now" (tel:), "Email us" (mailto:, ghost). This closes the page in the Services rhythm.

**4 · Cleanup**
- Remove `PageHero` and `SectionHeader` imports.
- Keep `PageMark`, add `ClosingCTA` import.
- Keep zod/supabase logic and toast behavior unchanged.

## Out of scope
Form fields, validation, submission logic, design tokens, fonts, other pages.
