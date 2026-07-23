// Self-hosted fonts via Fontsource — bundled at build time, no third-party
// render-blocking request. Only the subsets the site actually uses.
// (Unbounded — the logo/numeral face — is self-hosted separately in index.css.)
import "@fontsource/newsreader/latin-400.css";
import "@fontsource/newsreader/latin-500.css";
import "@fontsource/newsreader/latin-600.css";
import "@fontsource/newsreader/latin-700.css";

import "@fontsource/ibm-plex-mono/latin-400.css";
import "@fontsource/ibm-plex-mono/latin-500.css";
import "@fontsource/ibm-plex-mono/latin-600.css";

import "@fontsource/ibm-plex-sans-thai/latin-400.css";
import "@fontsource/ibm-plex-sans-thai/latin-500.css";
import "@fontsource/ibm-plex-sans-thai/latin-600.css";
import "@fontsource/ibm-plex-sans-thai/latin-700.css";
import "@fontsource/ibm-plex-sans-thai/thai-400.css";
import "@fontsource/ibm-plex-sans-thai/thai-500.css";
import "@fontsource/ibm-plex-sans-thai/thai-600.css";
import "@fontsource/ibm-plex-sans-thai/thai-700.css";

// Trirong — the Thai display serif. Newsreader carries no Thai glyphs, so
// before this every Thai headline silently fell back to the body sans and the
// brand's editorial serif voice existed only in English. Thai subset only:
// Latin headlines stay on Newsreader (Trirong sits after it in the stack).
import "@fontsource/trirong/thai-400.css";
import "@fontsource/trirong/thai-500.css";
import "@fontsource/trirong/thai-600.css";
