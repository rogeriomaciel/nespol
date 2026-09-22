import * as fs from 'node:fs';
import * as path from 'node:path';

// Obter argumentos da linha de comando
const args = process.argv.slice(2);

if (args.length === 0 || args[0] === '--help' || args[0] === '-h') {
  console.log(`
⚡ [Core-Bare-Metal] Gerador Automático de Landing Pages

Uso:
  bun run criar-pagina <slug> [titulo] [descricao]

Exemplos:
  bun run criar-pagina lp4
  bun run criar-pagina consultoria "Consultoria de Engenharia de Tráfego" "Acelere seu site e pare de queimar verba de anúncios"
  bun run criar-pagina black-friday "Black Friday Bare-Metal" "Oferta exclusiva por tempo limitado com garantia contratual"

O que este comando faz automaticamente:
  1. Cria a pasta /<slug>/index.html configurada para o Vite
  2. Cria o arquivo de hidratação React 19 em src/entries/<slug>.tsx
  3. Cria a página completa de alta conversão em src/pages/<PascalCase>.tsx
  4. Adiciona a rota ao public/sitemap.xml
  5. Habilita compilação e SSG Prerender automáticos sem mexer em nenhuma config!
`);
  process.exit(0);
}

const rawSlug = args[0];
const slug = rawSlug.toLowerCase().trim().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');

if (!slug) {
  console.error('❌ Erro: O slug informado é inválido. Use letras, números e traços (ex: lp4, black-friday, consultoria).');
  process.exit(1);
}

const reservedWords = new Set(['src', 'dist', 'public', 'scripts', 'assets', 'node_modules', 'api', 'expert']);
if (reservedWords.has(slug)) {
  console.error(`❌ Erro: O slug "${slug}" é uma palavra reservada do sistema.`);
  process.exit(1);
}

// Converter slug para PascalCase (ex: lp4 -> Lp4, black-friday -> BlackFriday)
const pascalCase = slug
  .split('-')
  .map(part => part.charAt(0).toUpperCase() + part.slice(1))
  .join('');

const rootDir = path.resolve(import.meta.dir, '..');
const pageDir = path.join(rootDir, slug);
const htmlPath = path.join(pageDir, 'index.html');
const entryPath = path.join(rootDir, 'src/entries', `${slug}.tsx`);
const componentPath = path.join(rootDir, 'src/pages', `${pascalCase}.tsx`);

// Verificar se a pasta ou componente já existem
if (fs.existsSync(pageDir) || fs.existsSync(componentPath)) {
  console.error(`❌ Erro: A página "${slug}" já existe!`);
  if (fs.existsSync(pageDir)) console.error(`  - Pasta existente: ${pageDir}`);
  if (fs.existsSync(componentPath)) console.error(`  - Componente existente: ${componentPath}`);
  process.exit(1);
}

const pageTitle = args[1] || `${pascalCase} • Arquitetura Bare-Metal`;
const pageDescription = args[2] || `Landing page de altíssima conversão com nota 99/100 no Google PageSpeed e carregamento sub-segundo (<0.5s).`;

console.log(`\n🚀 [Core-Bare-Metal] Criando nova página: /${slug}`);

// 1. Criar pasta da página e index.html
fs.mkdirSync(pageDir, { recursive: true });

const htmlTemplate = `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${pageTitle}</title>
    <meta name="description" content="${pageDescription}" />
    <meta name="theme-color" content="#090a0f" />
    
    <!-- OpenGraph & Twitter Cards -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${pageTitle}" />
    <meta property="og:description" content="${pageDescription}" />
    <meta property="og:image" content="/assets/og-image.jpg" />
    <meta name="twitter:card" content="summary_large_image" />
    
    <!-- Font Preconnect & Loading -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
  </head>
  <body class="bg-surface text-content font-sans antialiased selection:bg-brand-primary selection:text-white">
    <div id="root"></div>
    <script type="module" src="/src/entries/${slug}.tsx"></script>
  </body>
</html>
`;

fs.writeFileSync(htmlPath, htmlTemplate);
console.log(`  ✅ HTML criado: /${slug}/index.html`);

// 2. Criar Entry de Hidratação React 19 (src/entries/<slug>.tsx)
const entriesDir = path.join(rootDir, 'src/entries');
fs.mkdirSync(entriesDir, { recursive: true });

const entryTemplate = `import React from 'react';
import ReactDOM from 'react-dom/client';
import ${pascalCase} from '../pages/${pascalCase}';
import '../index.css';

const root = document.getElementById('root');
if (root) {
  ReactDOM.hydrateRoot(
    root,
    <React.StrictMode>
      <${pascalCase} />
    </React.StrictMode>
  );
}
`;

fs.writeFileSync(entryPath, entryTemplate);
console.log(`  ✅ Entry criado: src/entries/${slug}.tsx`);

// 3. Criar Componente React 19 (src/pages/<PascalCase>.tsx)
const pagesDir = path.join(rootDir, 'src/pages');
fs.mkdirSync(pagesDir, { recursive: true });

const componentTemplate = `import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { ValueSimulator } from '../components/ValueSimulator';
import { MetricsGrid } from '../components/MetricsGrid';
import { ComparisonTable } from '../components/ComparisonTable';
import { SocialProof } from '../components/SocialProof';
import { FaqAccordion } from '../components/FaqAccordion';
import { WhatsAppCTA } from '../components/WhatsAppCTA';
import { Footer } from '../components/Footer';

export default function ${pascalCase}() {
  return (
    <div className="min-h-screen bg-surface text-content flex flex-col selection:bg-brand-primary selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION DE ALTO IMPACTO */}
        <Hero
          badgeText="OPERAÇÃO ESPECIAL BARE-METAL • SUB-SEGUNDO"
          title="${pageTitle}"
          highlightedText="Sem Gargalos ou Desperdício"
          subtitle="${pageDescription}"
          ctaText="Falar com Engenheiro no WhatsApp"
          whatsappMessage="Olá Rogério! Estou na página /${slug} e gostaria de entender como aplicar a infraestrutura Bare-Metal no meu projeto."
        />

        {/* MÉTRICAS DE AUTORIDADE */}
        <MetricsGrid />

        {/* SIMULADOR DE PERDA FINANCEIRA POR LENTIDÃO */}
        <section className="py-20 bg-surface-alt/40 border-y border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-brand-primary text-xs font-mono font-bold uppercase tracking-widest bg-brand-primary/10 px-3 py-1 rounded-full border border-brand-primary/20">
                Diagnóstico em Tempo Real
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-content mt-4 tracking-tight">
                Quanto a lentidão está drenando do seu faturamento?
              </h2>
              <p className="text-content-muted mt-3 text-lg">
                Se o seu site demora mais de 1.5s no 4G/5G, até 53% dos seus cliques pagos são perdidos antes mesmo da primeira dobra carregar.
              </p>
            </div>

            <ValueSimulator />
          </div>
        </section>

        {/* TABELA COMPARATIVA BARE-METAL VS MONOLITOS LENTOS */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-brand-secondary text-xs font-mono font-bold uppercase tracking-widest bg-brand-secondary/10 px-3 py-1 rounded-full border border-brand-secondary/20">
                Engenharia vs Gambiarras
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-content mt-4 tracking-tight">
                A Diferença Brutal de Infraestrutura
              </h2>
            </div>

            <ComparisonTable />
          </div>
        </section>

        {/* PROVA SOCIAL & DEPOIMENTOS */}
        <SocialProof />

        {/* FAQ PERGUNTAS FREQUENTES */}
        <section className="py-20 bg-surface-alt/30 border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-brand-primary text-xs font-mono font-bold uppercase tracking-widest bg-brand-primary/10 px-3 py-1 rounded-full border border-brand-primary/20">
                Transparência Absoluta
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-content mt-4 tracking-tight">
                Dúvidas Frequentes
              </h2>
            </div>

            <FaqAccordion />
          </div>
        </section>

        {/* BANNER CTA FINAL DE CONVERSÃO */}
        <section className="py-24 relative overflow-hidden bg-gradient-to-b from-surface to-surface-alt border-t border-border">
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <span className="text-emerald-400 text-xs font-mono font-bold uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Garantia Contratual de 95+ no PageSpeed
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-content mt-6 tracking-tight">
              Pronto para transformar tráfego em receita imediata?
            </h2>
            <p className="text-content-muted text-lg mt-4 max-w-2xl mx-auto">
              Receba um diagnóstico gratuito da velocidade e gargalos técnicos da sua página atual em menos de 10 minutos.
            </p>
            <div className="mt-8 flex justify-center">
              <WhatsAppCTA
                buttonText="Falar Diretamente com Rogério no WhatsApp"
                message="Olá Rogério! Quero o diagnóstico gratuito da minha página atual na rota /${slug}."
                className="w-full sm:w-auto text-lg px-8 py-4 shadow-xl shadow-brand-primary/20"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* BOTÃO FLUTUANTE DE WHATSAPP */}
      <WhatsAppCTA
        variant="floating"
        buttonText="Conversar no WhatsApp"
        message="Olá Rogério! Estou na página /${slug} e tenho uma dúvida rápida."
      />
    </div>
  );
}
`;

fs.writeFileSync(componentPath, componentTemplate);
console.log(`  ✅ Componente criado: src/pages/${pascalCase}.tsx`);

// 4. Atualizar sitemap.xml se existir
const sitemapPath = path.join(rootDir, 'public/sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  let sitemap = fs.readFileSync(sitemapPath, 'utf-8');
  if (!sitemap.includes(`/${slug}`)) {
    const today = new Date().toISOString().split('T')[0];
    const newUrlEntry = `  <url>\n    <loc>https://rogeriomaciel.com.br/${slug}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n</urlset>`;
    sitemap = sitemap.replace('</urlset>', newUrlEntry);
    fs.writeFileSync(sitemapPath, sitemap);
    console.log(`  ✅ URL adicionada ao public/sitemap.xml`);
  }
}

console.log(`
🎉 Página /${slug} gerada com sucesso!
-----------------------------------------------------------
📁 Arquivo HTML:      /${slug}/index.html
🚀 React Entry:       src/entries/${slug}.tsx
⚛️ Componente Página: src/pages/${pascalCase}.tsx
🌐 Rota local:        http://localhost:3000/${slug}/
-----------------------------------------------------------

Para testar agora mesmo:
  1. bun run dev
  2. Acesse no navegador: http://localhost:3000/${slug}/

Para compilar para produção com SSG:
  bun run build
`);
