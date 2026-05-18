import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          three: ["three"],
          fiber: ["@react-three/fiber", "@react-three/drei"],
          motion: ["framer-motion"],
          react: ["react", "react-dom"],
        },
      },
    },
    chunkSizeWarningLimit: 800,
  },
});
