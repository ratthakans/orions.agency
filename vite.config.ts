import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { imagetools } from "vite-imagetools";
import { readFileSync } from "node:fs";

/** Slugs read from the data files as text: importing them here would pull in
 *  their `?as=picture` image imports before any plugin exists to resolve them. */
const slugsIn = (file: string) =>
  Array.from(readFileSync(new URL(file, import.meta.url), "utf8").matchAll(/^    slug: "([a-z0-9-]+)",$/gm), (m) => m[1]);

/** Every public URL, listed rather than only crawled: a page nothing links to
 *  (404, privacy) would otherwise be skipped silently. crawlLinks still runs,
 *  so a link to a page missing from this list is found too. */
const pages = [
  "/",
  "/work",
  "/services",
  "/about",
  "/archive",
  "/contact",
  "/privacy",
  "/404",
  ...slugsIn("./src/data/caseStudies.ts").map((slug) => `/work/${slug}`),
  ...slugsIn("./src/data/archive.ts").map((slug) => `/archive/${slug}`),
].map((path) => ({ path }));

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: { overlay: false },
  },
  plugins: [
    tsConfigPaths({ projects: ["./tsconfig.app.json"] }),
    // The whole site is static content, so every page is prerendered to HTML at
    // build time and served from the CDN — no server runs in production.
    // autoSubfolderIndex:false keeps the old file shape (about.html, 404.html),
    // which vercel.json's cleanUrls and the 404 fallback rely on.
    tanstackStart({
      pages,
      prerender: {
        enabled: true,
        crawlLinks: true,
        autoSubfolderIndex: false,
        failOnError: true,
        // The page list above is complete. Auto-discovery would add the index
        // routes again as "/work/" and "/archive/" — duplicate files — and the
        // crawler must not render ?pkg= or #section variants of a page that
        // already exists: they would race to write the same file.
        autoStaticPathsDiscovery: false,
        filter: (page) => !/[?#]/.test(page.path),
      },
    }),
    viteReact(),
    // `?as=picture` → AVIF/WebP/JPEG <picture> variants. Untagged image imports
    // pass through untouched. In dev (`serve`) we emit the ORIGINAL format only
    // (no avif/webp encoding) so the dev server stays fast — sharp would
    // otherwise re-encode every image on first request (avif is very slow).
    // The full set is generated only in the production build.
    imagetools({
      defaultDirectives: (url) => {
        if (url.searchParams.get("as") !== "picture") return new URLSearchParams();
        return command === "build"
          ? new URLSearchParams({ format: "avif;webp;jpg", as: "picture" })
          : new URLSearchParams({ as: "picture" });
      },
    }),
    // Recompress remaining bundled images at build time (sharp/mozjpeg). Source
    // files untouched; only the emitted dist assets are optimised.
    ViteImageOptimizer({
      jpg: { quality: 72 },
      jpeg: { quality: 72 },
      png: { quality: 80 },
    }),
  ],
  build: {
    target: "esnext",
    minify: "esbuild",
  },
}));
