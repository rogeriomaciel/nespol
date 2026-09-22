import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    emptyOutDir: true,
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: 'esbuild',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        lp1: resolve(__dirname, 'lp1/index.html'),
        lp2: resolve(__dirname, 'lp2/index.html'),
        lp3: resolve(__dirname, 'lp3/index.html'),
      },
    },
  },
  server: {
    host: true,
    port: 3000,
  }
});
