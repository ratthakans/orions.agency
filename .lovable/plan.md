# Dark redesign + Bento Work + Inline Nav + Approach prose

## 1. Design tokens → flip to dark (`src/index.css`)

Swap the base palette so the whole site inherits dark mode without touching individual components.

```
--background: 0 0% 5%;       /* Black Russian #0e0e0e */
--foreground: 60 33% 98%;    /* Snow #fdfdf9 */
--surface:    0 0% 8%;       /* slightly lifted panel */
--surface-2:  0 0% 11%;
--card / popover: 0 0% 5%
--primary: snow / primary-fg: ink
--muted: 0 0% 10%; --muted-foreground: 60 10% 70%
--border: 60 33% 98% (snow) — hairlines now snow at low opacity
--accent: 11 81% 57% (Cinnabar — unchanged)
```

Also: scrollbar track → ink, thumb → cinnabar; grain blend-mode → `screen` with opacity 0.04 so it reads on dark.

Hairline opacity convention: use `border-foreground/12` and `/20` consistently (already used). On dark, snow at 12–20% reads as a soft hairline. No need to rewrite component borders.

## 2. Nav (`src/components/Nav.tsx`) — inline links, no hamburger

Replace the hamburger + full-screen overlay with a single horizontal bar:

```
[ ØRIONS ]                    About  Services  Work  Diagnostic  · [Contact →]
```

- Height 72px, `px-6 md:px-10`, transparent bg (sits on dark), no blur.
- Logo left: `font-brand text-[13px]` snow.
- Links right: `font-mono text-[11px] tracking-[0.22em] uppercase`, gap-8, `text-foreground/70 hover:text-foreground`, active = `text-cinnabar`.
- Final item is a Cinnabar pill `Contact →` (`bg-cinnabar text-background px-4 py-2`).
- Mobile (<md): show logo + Contact pill only; hide the link row. (No hamburger.)
- Delete the overlay menu + body-scroll-lock effects.

## 3. Index page (`src/pages/Index.tsx`)

### 3a. Selected Work → bento mixed grid

Replace the 3 stacked 21:9 blocks with a 12-col / 8-row CSS grid (desktop) where tiles have varied sizes. Mobile collapses to single column.

```text
+------------------+----------+
|        01        |    02    |
|     Hongmove     |   RTAF   |
|   col-span 8     |  col 4   |
|   row-span 5     |  row 5   |
+--------+---------+----------+
|   03   |        meta/CTA    |
| Demo   |    "Index of work" |
|  col 5 |       col 7        |
|  row 3 |       row 3        |
+--------+--------------------+
```

- `grid grid-cols-12 grid-rows-[repeat(8,minmax(120px,1fr))] gap-3 md:gap-4`
- Each tile: `<Link>` wrapping `<img>` (object-cover, full size) + bottom overlay strip `01 — Hongmove · PropTech / 2025` in mono 10px snow.
- No grayscale flip. Just subtle `opacity-90 hover:opacity-100` + a `border border-foreground/10` hairline.
- The 4th cell is not an image — it's an editorial CTA card: ink-on-snow inverted (bg-cinnabar text-background), serif italic "See all 12 case studies →".

### 3b. Process 6:3:1 → Approach prose

Remove the entire `processSteps` block (the 3 huge numbers grid). Replace with a single-column editorial passage:

```
01 — Approach
Less, but considered.

We don't sell packages of posts. We run one refined loop every month —
a short essay across formats. Three movements: listen, refine, release.
[Read the full approach →]
```

- `SectionLabel index="03" label="Approach"`
- `h2` with `h-display-md`, italic Cinnabar accent on one phrase.
- Two `<p>` paragraphs at `max-w-[640px]` font-thai/serif body.
- One inline link to `/approach` (or `/manifesto` if no approach route — keep existing route).
- Remove the `processSteps` array entirely.

### 3c. Section index renumbering
After removing Process: Manifesto 01 → Selected Work 02 → Approach 03 → Trusted 04 → Packages 05 → Diagnostic 06. (Same numbers stay; only the Process block content swaps to Approach.)

## 4. Other pages
No structural changes — they inherit the dark token flip automatically. Spot checks afterward:
- `Services.tsx`: the `bg-foreground text-background` "featured" card now becomes snow-on-ink (i.e. the inverted one becomes light on dark page) — that still works as visual emphasis.
- `Footer.tsx`: status ribbon already uses tokens; will read white-on-black.
- Any `bg-surface` panels lift slightly (good, intended).

No copy/data/routing/image changes.

## Files touched
- `src/index.css` — palette flip, scrollbar, grain
- `src/components/Nav.tsx` — full rewrite to inline links
- `src/pages/Index.tsx` — bento Selected Work, remove process, add Approach prose

## Not in scope
- No motion changes beyond what's already in the project
- No new routes, no copy rewrite, no font changes
- Memory will be updated after build to reflect new dark palette + nav style
