import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { readdirSync, statSync, existsSync } from 'node:fs';

// Plugin para redirecionar automaticamente rotas sem barra (/cambio -> /cambio/)
function trailingSlashRedirectPlugin(): Plugin {
  return {
    name: 'trailing-slash-redirect',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url || '';
        const [pathname, search] = url.split('?');
        if (pathname && !pathname.endsWith('/') && !pathname.includes('.')) {
          const dirPath = resolve(__dirname, pathname.slice(1));
          if (existsSync(resolve(dirPath, 'index.html'))) {
            const redirectUrl = pathname + '/' + (search ? '?' + search : '');
            res.writeHead(301, { Location: redirectUrl });
            return res.end();
          }
        }
        next();
      });
    },
  };
}

// Descoberta dinâmica de todas as páginas com index.html
function getHtmlInputs() {
  const inputs: Record<string, string> = {
    main: resolve(__dirname, 'index.html'),
  };
  
  const entries = readdirSync(__dirname);
  const ignoredDirs = new Set(['node_modules', 'dist', 'src', 'scripts', 'public', '.git', '.github', 'expert']);
  
  for (const entry of entries) {
    if (ignoredDirs.has(entry) || entry.startsWith('.')) continue;
    const fullPath = resolve(__dirname, entry);
    if (statSync(fullPath).isDirectory() && existsSync(resolve(fullPath, 'index.html'))) {
      inputs[entry] = resolve(fullPath, 'index.html');
    }
  }
  return inputs;
}

export default defineConfig({
  plugins: [react(), trailingSlashRedirectPlugin()],
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
      input: getHtmlInputs(),
    },
  },
  server: {
    host: true,
    port: 3000,
  }
});
