import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
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
    // Recompress bundled images at build time (sharp/mozjpeg). Source files
    // untouched; only the emitted dist assets are optimised.
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
