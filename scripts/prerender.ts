import React from 'react';
import { renderToString } from 'react-dom/server';
import * as fs from 'node:fs';
import * as path from 'node:path';

const distDir = path.resolve(import.meta.dir, '../dist');
const rootDir = path.resolve(import.meta.dir, '..');
const assetsDir = path.join(distDir, 'assets');
const pagesDir = path.join(rootDir, 'src/pages');

function slugToPascalCase(slug: string): string {
  return slug
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

interface PageConfig {
  name: string;
  htmlPath: string;
  componentPath: string;
  chunkPrefix: string;
}

function getPagesToPrerender(): PageConfig[] {
  const pages: PageConfig[] = [
    {
      name: 'Home (/)',
      htmlPath: path.join(distDir, 'index.html'),
      componentPath: path.join(pagesDir, 'Home.tsx'),
      chunkPrefix: 'main'
    }
  ];

  const entries = fs.readdirSync(rootDir);
  const ignored = new Set(['node_modules', 'dist', 'src', 'scripts', 'public', '.git', '.github', 'expert']);

  for (const entry of entries) {
    if (ignored.has(entry) || entry.startsWith('.')) continue;
    const dirPath = path.join(rootDir, entry);
    const htmlFile = path.join(dirPath, 'index.html');

    if (fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory() && fs.existsSync(htmlFile)) {
      const pascal = slugToPascalCase(entry);
      let compPath = path.join(pagesDir, `${pascal}.tsx`);
      if (!fs.existsSync(compPath)) {
        compPath = path.join(pagesDir, `${entry}.tsx`);
      }

      pages.push({
        name: `Página /${entry}`,
        htmlPath: path.join(distDir, entry, 'index.html'),
        componentPath: compPath,
        chunkPrefix: entry
      });
    }
  }

  return pages;
}

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

const pages = getPagesToPrerender();

for (const page of pages) {
  if (!fs.existsSync(page.htmlPath)) {
    console.warn(`⚠️ [SSG Prerender] ${page.htmlPath} não encontrado, pulando...`);
    continue;
  }

  if (!fs.existsSync(page.componentPath)) {
    console.warn(`⚠️ [SSG Prerender] Componente ${page.componentPath} não encontrado, mantendo HTML gerado pelo Vite...`);
    continue;
  }

  try {
    const compModule = await import(page.componentPath);
    const Component = compModule.default || compModule[Object.keys(compModule)[0]];
    
    let html = fs.readFileSync(page.htmlPath, 'utf-8');

    // 1. Renderizar React to String dentro do #root
    const appHtml = renderToString(React.createElement(Component));
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
    window.requestIdleCallback(loadBundle, { timeout: 12000 });
  } else {
    setTimeout(loadBundle, 12000);
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
  } catch (err) {
    console.error(`❌ [SSG Prerender] Erro ao pré-renderizar ${page.name}:`, err);
  }
}

console.log('⚡ [SSG Prerender] Concluído com êxito! Todas as páginas estáticas estão em dist/');
