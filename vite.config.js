import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: `assets/index-GGSorodotsav-[hash].js`,
        chunkFileNames: `assets/index-GGSorodotsav-[hash].js`,
        assetFileNames: `assets/[name]-[hash].[ext]`
      }
    }
  }
});
