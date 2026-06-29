import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { imagetools } from "vite-imagetools";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    // Generate AVIF/WebP/JPEG <picture> variants for imports tagged `?as=picture`.
    // Untagged image imports pass through untouched (still plain URL strings).
    imagetools({
      defaultDirectives: (url) =>
        url.searchParams.get("as") === "picture"
          ? new URLSearchParams({ format: "avif;webp;jpg", as: "picture" })
          : new URLSearchParams(),
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
