import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { imagetools } from "vite-imagetools";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ isSsrBuild, command }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
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
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "esnext",
    minify: "esbuild",
    rollupOptions: {
      output: {
        // Split rarely-changing vendor libs into their own long-cached chunks
        // (client build only — vite-react-ssg externalizes these in the SSR pass).
        manualChunks: isSsrBuild
          ? undefined
          : {
              react: ["react", "react-dom", "react-router-dom"],
              motion: ["framer-motion"],
            },
      },
    },
  },
}));
