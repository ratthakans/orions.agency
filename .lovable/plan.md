## Goal

Remove duplicate numbering on the Index page in **Three things, properly.** and **From hello, live in 4 weeks.** sections.

## Issue

Each card / step shows two mono labels that mean the same thing:

- Three things: `— 01` (left) + `01/03` (right) → both index the same item
- Process: `— 01` (left) + `01/04` (right) → same redundancy

## Change

Keep one number per item — drop the `0X/0N` counter on the right.

| Section       | Before                  | After    |
|---------------|-------------------------|----------|
| Three things  | `— 01`  …  `01/03`      | `— 01`   |
| Process       | `— 01`  …  `01/04`      | `— 01`   |

The `flex items-baseline justify-between` wrapper becomes a single mono label. Gradient hairline above stays. Title and body unchanged.

## Files

- `src/pages/Index.tsx` — two small edits (lines ~123–126 and ~164–167).
