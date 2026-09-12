// Self-hosted fonts via Fontsource — bundled at build time, no third-party
// render-blocking request. Only the subsets and weights the site uses.
//
// Two families, and that is the whole type system:
//   Unbounded      — Latin display, labels, numerals. Wide, geometric, Swiss.
//   Noto Sans Thai — every Thai glyph, and all running body text.
//
// Unbounded ships no Thai subset (latin · latin-ext · cyrillic · vietnamese —
// checked against the package itself), so a Thai heading always falls through
// to Noto Sans Thai. That is by design, not a bug: see --font-display in
// index.css, which lists Noto Sans Thai second for exactly this reason.
import "@fontsource/unbounded/latin-300.css";
import "@fontsource/unbounded/latin-400.css";
import "@fontsource/unbounded/latin-500.css";

import "@fontsource/noto-sans-thai/latin-400.css";
import "@fontsource/noto-sans-thai/latin-500.css";
import "@fontsource/noto-sans-thai/latin-600.css";
import "@fontsource/noto-sans-thai/thai-400.css";
import "@fontsource/noto-sans-thai/thai-500.css";
import "@fontsource/noto-sans-thai/thai-600.css";
