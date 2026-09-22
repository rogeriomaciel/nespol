import React from 'react';
import { renderToString } from 'react-dom/server';
import * as fs from 'node:fs';
import * as path from 'node:path';

// Páginas para pré-renderizar
import Home from '../src/pages/Home';
import Lp1 from '../src/pages/Lp1';
import Lp2 from '../src/pages/Lp2';
import Lp3 from '../src/pages/Lp3';

const distDir = path.resolve(import.meta.dir, '../dist');
const assetsDir = path.join(distDir, 'assets');

const pages = [
  { name: 'Home (/)', htmlPath: path.join(distDir, 'index.html'), component: Home, chunkPrefix: 'main' },
  { name: 'LP 1 (/lp1)', htmlPath: path.join(distDir, 'lp1/index.html'), component: Lp1, chunkPrefix: 'lp1' },
  { name: 'LP 2 (/lp2)', htmlPath: path.join(distDir, 'lp2/index.html'), component: Lp2, chunkPrefix: 'lp2' },
  { name: 'LP 3 (/lp3)', htmlPath: path.join(distDir, 'lp3/index.html'), component: Lp3, chunkPrefix: 'lp3' },
];

console.log('⚡ [SSG Prerender] Iniciando pré-renderização multi-páginas Core-Bare-Metal...');

// 1. Ler todos os arquivos CSS gerados pelo Vite
let combinedCss = '';
if (fs.existsSync(assetsDir)) {
  const assetFiles = fs.readdirSync(assetsDir);
  const cssFiles = assetFiles.filter((f: string) => f.endsWith('.css'));
  for (const cssFile of cssFiles) {
    const cssPath = path.join(assetsDir, cssFile);
    combinedCss += fs.readFileSync(cssPath, 'utf-8') + '\n';
  }
}

for (const page of pages) {
  if (!fs.existsSync(page.htmlPath)) {
    console.warn(`⚠️ [SSG Prerender] ${page.htmlPath} não encontrado, pulando...`);
    continue;
  }

  let html = fs.readFileSync(page.htmlPath, 'utf-8');

  // 1. Renderizar React to String dentro do #root
  const appHtml = renderToString(React.createElement(page.component));
  html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  // 2. Injetar Critical CSS inline (elimina CSS render-blocking no PageSpeed)
  if (combinedCss) {
    html = html.replace(/<link[^>]*rel=["']stylesheet["'][^>]*>/gi, '');
    html = html.replace('</head>', `<style id="critical-css">\n${combinedCss}\n</style>\n</head>`);
  }

  // 3. Localizar o arquivo JS correspondente à página
  if (fs.existsSync(assetsDir)) {
    const assetFiles = fs.readdirSync(assetsDir);
    const jsFile = assetFiles.find((f: string) => f.startsWith(page.chunkPrefix) && f.endsWith('.js'))
                || assetFiles.find((f: string) => f.endsWith('.js'));

    if (jsFile) {
      const relPath = page.chunkPrefix === 'main' ? `./assets/${jsFile}` : `../assets/${jsFile}`;

      const loaderScript = `<script>
(function() {
  var loaded = false;
  function loadBundle() {
    if (loaded) return;
    loaded = true;
    ['touchstart', 'scroll', 'mousemove', 'keydown', 'click'].forEach(function(evt) {
      window.removeEventListener(evt, loadBundle, { passive: true });
    });
    var s = document.createElement('script');
    s.type = 'module';
    s.src = '${relPath}';
    document.body.appendChild(s);
  }
  ['touchstart', 'scroll', 'mousemove', 'keydown', 'click'].forEach(function(evt) {
    window.addEventListener(evt, loadBundle, { once: true, passive: true });
  });
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(loadBundle, { timeout: 6000 });
  } else {
    setTimeout(loadBundle, 6000);
  }
})();
</script>`;

      // Remove script de módulo padrão para evitar bloqueio inicial
      html = html.replace(/<script\s+type="module"[^>]*src=["'][^"']*assets\/[^"']*\.js["'][^>]*><\/script>/gi, '');
      html = html.replace('</body>', `${loaderScript}\n</body>`);
    }
  }

  fs.writeFileSync(page.htmlPath, html);
  console.log(`✅ [SSG Prerender] ${page.name} (${page.htmlPath}) pré-renderizado com sucesso!`);
}

console.log('⚡ [SSG Prerender] Concluído com êxito! Todas as páginas estáticas estão em dist/');
