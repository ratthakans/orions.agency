## 1 · Remove Marquee on Home

`src/pages/Index.tsx`
- Remove the "marquee bridge" block (the `<SimpleMarquee>` strip with BRANDING · CONTENT PRODUCTION · SOCIAL MEDIA · PAID ADVERTISING) between Hero and section 02.
- Remove the now-unused `import SimpleMarquee from "@/components/SimpleMarquee"`.

## 2 · Redesign Contact to match the rest of the site

Today Contact uses its own inline hero (`font-serif` italic + `PageMark` + custom paddings). Other inner pages (`About`, `Services`, `Work`, `Pricing`) use the unified `PageHero` (Unbounded display + asymmetric grid + vertical label + crop marks). The fix is to align Contact with that system.

`src/pages/Contact.tsx`
- Replace the manual hero block with `<PageHero>`:
  - `eyebrow="— 01 / CONTACT"`, `verticalLabel="/ 06 CONTACT"`, `titleSize="lg"`
  - `title`: `Tell us about <em class="text-orion italic font-serif">the brand.</em>` (Unbounded base, single italic accent — same pattern as About/Services).
  - `subtitle`: short Thai+EN body in `font-thai` (no italic serif).
- Wrap form section with `SectionHeader` (light variant) using `index="02"`, `kicker="— INQUIRY"`, `title="Send us a brief."` so it matches the section markers used on Services/Pricing.
- Form heading: switch from `font-serif italic` to `font-display` `h-display-md` (consistent with other section titles).
- Direct-contact column: keep structure but change labels to the standard `index-badge` style; email/phone use `font-display` (not Instrument Serif italic).
- Submit button: replace ad-hoc styled `<button>` with the shared `<CTA variant="primary">` component for visual parity with other pages.

## 3 · Improve overall legibility

Memory mandates the existing palette/fonts — we only adjust **weights and contrast**, no font swaps.

`src/index.css`
- `body`: `font-weight: 400 → 450` (via `font-feature-settings` + `font-weight: 450` for variable weight; keeps Thai script legible).
- `.font-thai`: `font-weight: 400 → 500`, add `letter-spacing: 0.005em` and `line-height: 1.7` baseline so Thai body copy reads heavier.
- New utility `.body-muted` = `text-foreground/85` (replaces ad-hoc `text-foreground/70` and `text-muted-foreground` for paragraph copy where contrast is currently too low).
- `.label-soft` / `index-badge`: bump muted color from `text-muted-foreground` → custom `hsl(var(--foreground) / 0.7)` for stronger small-caps.
- Adjust `--muted-foreground` token: raise lightness contrast against the cream bg (e.g. from very light grey to mid-ink ~ `0 0% 30%`) so all `text-muted-foreground` paragraphs become readable in one shot.

Component-level cleanup (only where small italic serif body copy hurts legibility):
- `Index.tsx` hero email line: replace `font-serif italic` small text with `font-mono` index-badge style (matches the marker row).
- Contact "30-min discovery call…" paragraph: drop `font-serif italic`, use `font-thai` + `body-muted`.

## Out of scope

Brand fonts, color palette, page structure on Index/Services/Work/Pricing, Footer, Nav.
