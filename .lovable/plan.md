

# Page Transition Performance Fix

## Problem

The transition feels slow because of two compounding issues:

1. **`AnimatePresence mode="wait"`** — waits for the **exit** animation to fully complete before mounting the new page. The exit wipe takes 0.4s + 0.08s delay = ~0.48s of black screen before anything new appears.

2. **Content fade delay** — after exit finishes, the new page's content has an additional 0.15s delay before fading in. Total perceived delay: ~0.6s+ of "nothing visible."

3. **Two wipe overlays** with staggered timing add visual complexity but also add duration.

4. **Lazy-loaded pages with `Suspense fallback={null}`** — on first visit, the chunk must download before anything renders, adding to the black screen time.

## Solution — Make transitions feel instant

### 1. Speed up PageTransition durations
- Wipe overlay: 0.4s → **0.25s**
- Second overlay delay: 0.08s → **0.05s**
- Content fade delay: 0.15s → **0.08s**
- Content fade duration: 0.3s → **0.2s**

### 2. Remove exit animation from wipe overlays
- Remove `exit={{ scaleY: 1 }}` — this is the main culprit. With `mode="wait"`, the old page's exit animation plays fully before the new page mounts, causing a long black-screen gap.
- Instead, only animate **entrance** (wipe reveals the new page). The old page simply unmounts instantly.

### 3. Optionally switch to `mode="popLayout"` or remove `mode="wait"`
- Without `mode="wait"`, old and new pages can crossfade, eliminating the sequential delay.
- Since we have wipe overlays, removing `mode="wait"` and keeping only entrance wipes will feel snappier.

## Files to modify

- **`src/components/PageTransition.tsx`** — reduce durations, remove exit animation
- **`src/App.tsx`** — consider removing `mode="wait"` from AnimatePresence

## Technical details

```tsx
// PageTransition.tsx — faster, no exit blocking
const PageTransition = ({ children }) => (
  <>
    <motion.div
      className="fixed inset-0 z-[9998] bg-background"
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      transition={{ duration: 0.25, ease: [0.76, 0, 0.24, 1] }}
      style={{ transformOrigin: "top" }}
    />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.08 }}
    >
      {children}
    </motion.div>
  </>
);
```

Remove the second wipe overlay entirely — one is enough and saves ~80ms.

