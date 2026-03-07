

## Analysis

The font configuration is already correct:
- `index.css` line 1: imports `IBM+Plex+Sans` and `IBM+Plex+Mono` from Google Fonts
- `index.css` line 73: `body { font-family: 'IBM Plex Sans', sans-serif; }`
- `tailwind.config.ts` line 76-77: `body: ["IBM Plex Sans"]`, `mono: ["IBM Plex Mono"]`

The fonts **have been changed**. If they appear unchanged in the preview, it's a browser cache issue.

However, there's a real bug to fix: **the `AnimatedSection` component is causing React ref warnings** across multiple pages (ServicesSection, Footer). This should be addressed.

## Plan

1. **Fix AnimatedSection ref forwarding** — Wrap the component with `React.forwardRef` to eliminate the console warnings that appear on Services and other pages.

2. **Force font refresh** — Add a cache-busting query parameter to the Google Fonts import URL (e.g., `&v=2`) to ensure the updated fonts load in the preview.

No visual or UX changes — just fixing the ref warning bug and ensuring fonts load correctly.

