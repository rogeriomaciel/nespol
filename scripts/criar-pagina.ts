import * as fs from 'node:fs';
import * as path from 'node:path';

// Obter argumentos da linha de comando
const args = process.argv.slice(2);

if (args.length === 0 || args[0] === '--help' || args[0] === '-h') {
  console.log(`
⚡ [Core-Bare-Metal] Gerador Automático de Landing Pages (com suporte a Markdown)

Uso Básico:
  bun run criar-pagina <slug> [titulo] [descricao]

Uso com Arquivo Markdown de Referência:
  bun run criar-pagina <slug> --from-md <caminho/arquivo.md>
  bun run criar-pagina <slug> -m <caminho/arquivo.md>

Exemplos:
  bun run criar-pagina cambio --from-md ../expert/roteiros/01-cambio-automatico.md
  bun run criar-pagina premium --from-md ../expert/roteiros/02-oficina-premium-porsche-bmw.md
  bun run criar-pagina blindados --from-md ../expert/roteiros/03-blindagem-e-vidros-delaminados.md
  bun run criar-pagina lp4 "Garantia Total" "Landing page de altíssima conversão com garantia contratual"

O que este comando faz automaticamente:
  1. Lê o Markdown e extrai Headlines, Dores, Serviços, FAQs e CTAs
  2. Cria a pasta /<slug>/index.html configurada para o Vite
  3. Cria o arquivo de hidratação React 19 em src/entries/<slug>.tsx
  4. Cria a página completa de alta conversão em src/pages/<PascalCase>.tsx
  5. Adiciona a rota ao public/sitemap.xml
  6. Habilita compilação e SSG Prerender automáticos sem mexer em nenhuma config!
`);
  process.exit(0);
}

const rawSlug = args[0];
const slug = rawSlug.toLowerCase().trim().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');

if (!slug) {
  console.error('❌ Erro: O slug informado é inválido. Use letras, números e traços (ex: lp4, cambio, blindados).');
  process.exit(1);
}

const reservedWords = new Set(['src', 'dist', 'public', 'scripts', 'assets', 'node_modules', 'api', 'expert']);
if (reservedWords.has(slug)) {
  console.error(`❌ Erro: O slug "${slug}" é uma palavra reservada do sistema.`);
  process.exit(1);
}

// Verificar se foi passado --from-md ou -m
let mdPath: string | null = null;
const fromMdIdx = args.findIndex(a => a === '--from-md' || a === '-m');
if (fromMdIdx !== -1 && args[fromMdIdx + 1]) {
  mdPath = path.resolve(process.cwd(), args[fromMdIdx + 1]);
  if (!fs.existsSync(mdPath)) {
    console.error(`❌ Erro: Arquivo Markdown não encontrado em: ${mdPath}`);
    process.exit(1);
  }
}

// Converter slug para PascalCase (ex: lp4 -> Lp4, cambio-automatico -> CambioAutomatico)
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

// Valores padrão
let pageBadge = 'OPERAÇÃO ESPECIAL BARE-METAL • SUB-SEGUNDO';
let pageTitle = args[1] && !args[1].startsWith('-') ? args[1] : `${pascalCase} • Arquitetura Bare-Metal`;
let pageHighlight = 'Sem Gargalos ou Desperdício';
let pageSubtitle = args[2] && !args[2].startsWith('-') ? args[2] : 'Landing page de altíssima conversão com nota 99/100 no Google PageSpeed e carregamento sub-segundo (<0.5s).';
let pageWhatsAppMessage = `Olá! Estou na página /${slug} e gostaria de solicitar um atendimento técnico.`;

interface ItemPair {
  title: string;
  desc: string;
}

let painPoints: ItemPair[] = [];
let services: ItemPair[] = [];
let faqs: { question: string; answer: string }[] = [];

// Se tiver arquivo Markdown, fazer o parse inteligente
if (mdPath) {
  console.log(`📖 Lendo dados do roteiro Markdown: ${mdPath}`);
  const mdContent = fs.readFileSync(mdPath, 'utf-8');

  const badgeMatch = mdContent.match(/\*\*Badge:\*\*\s*(.+)/i);
  if (badgeMatch) pageBadge = badgeMatch[1].trim();

  const headlineMatch = mdContent.match(/\*\*Headline:\*\*\s*(.+)/i) || mdContent.match(/^#\s+(.+)$/m);
  if (headlineMatch) pageTitle = headlineMatch[1].trim();

  const highlightMatch = mdContent.match(/\*\*Destaque:\*\*\s*(.+)/i);
  if (highlightMatch) pageHighlight = highlightMatch[1].trim();

  const subMatch = mdContent.match(/\*\*Subheadline:\*\*\s*(.+)/i);
  if (subMatch) pageSubtitle = subMatch[1].trim();

  const waMatch = mdContent.match(/\*\*Mensagem WhatsApp:\*\*\s*(.+)/i);
  if (waMatch) pageWhatsAppMessage = waMatch[1].trim();

  // Dores
  const doresSec = mdContent.split(/## 2\.\s+Dores/i)[1]?.split(/## 3\./)[0] || '';
  for (const m of doresSec.matchAll(/\d+\.\s+\*\*(.+?):\*\*\s*([^\n]+)/g)) {
    painPoints.push({ title: m[1].trim(), desc: m[2].trim() });
  }

  // Serviços
  const servSec = mdContent.split(/## 3\.\s+Nossos Serviços/i)[1]?.split(/## 4\./)[0] || '';
  for (const m of servSec.matchAll(/\d+\.\s+\*\*(.+?):\*\*\s*([^\n]+)/g)) {
    services.push({ title: m[1].trim(), desc: m[2].trim() });
  }

  // FAQs
  const faqSec = mdContent.split(/## 5\.\s+Perguntas/i)[1]?.split(/## 6\./)[0] || '';
  for (const m of faqSec.matchAll(/-\s+\*\*(.+?)\*\*\s*\n\s*([^\n]+)/g)) {
    faqs.push({ question: m[1].trim(), answer: m[2].trim() });
  }
}

console.log(`\n🚀 [Core-Bare-Metal] Criando nova página: /${slug}`);

// 1. Criar pasta da página e index.html
fs.mkdirSync(pageDir, { recursive: true });

const htmlTemplate = `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${pageTitle.replace(/"/g, '&quot;')}</title>
    <meta name="description" content="${pageSubtitle.replace(/"/g, '&quot;')}" />
    <meta name="theme-color" content="#090a0f" />
    
    <!-- OpenGraph & Twitter Cards -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${pageTitle.replace(/"/g, '&quot;')}" />
    <meta property="og:description" content="${pageSubtitle.replace(/"/g, '&quot;')}" />
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

const container = document.getElementById('root')!;

const hydrate = () => {
  if (container.hasChildNodes()) {
    ReactDOM.hydrateRoot(container, <${pascalCase} />);
  } else {
    ReactDOM.createRoot(container).render(<${pascalCase} />);
  }
};

if (typeof window !== 'undefined') {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(hydrate);
  } else {
    setTimeout(hydrate, 50);
  }
}
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

// 3. Montar código do Componente
const painPointsCode = painPoints.length > 0 ? `
        {/* SINTOMAS & DORES IDENTIFICADAS */}
        <section className="py-16 bg-surface-alt/20 border-y border-border">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-rose-400 text-xs font-mono font-bold uppercase tracking-widest bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">
                Sintomas de Atenção Imediata
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-content mt-3">
                Seu veículo está apresentando algum destes sinais?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              ${painPoints.map(p => `
              <div className="p-6 rounded-2xl bg-surface border border-border shadow-sm">
                <h3 className="font-bold text-lg text-content text-rose-400 mb-2">⚠️ ${p.title}</h3>
                <p className="text-content-muted text-sm leading-relaxed">${p.desc}</p>
              </div>`).join('')}
            </div>
          </div>
        </section>
` : '';

const servicesCode = services.length > 0 ? `
        {/* SERVIÇOS ESPECIALIZADOS */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-brand-primary text-xs font-mono font-bold uppercase tracking-widest bg-brand-primary/10 px-3 py-1 rounded-full border border-brand-primary/20">
                Engenharia & Soluções
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-content mt-4 tracking-tight">
                Nossos Serviços de Alta Precisão
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              ${services.map(s => `
              <div className="p-8 rounded-2xl bg-surface-alt/40 border border-border hover:border-brand-primary/40 transition-colors">
                <h3 className="text-xl font-bold text-content mb-3">${s.title}</h3>
                <p className="text-content-muted text-base leading-relaxed">${s.desc}</p>
              </div>`).join('')}
            </div>
          </div>
        </section>
` : '';

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
          badgeText="${pageBadge.replace(/"/g, '\\"')}"
          title="${pageTitle.replace(/"/g, '\\"')}"
          highlightedText="${pageHighlight.replace(/"/g, '\\"')}"
          subtitle="${pageSubtitle.replace(/"/g, '\\"')}"
          ctaText="Agendar Avaliação no WhatsApp"
          whatsappMessage="${pageWhatsAppMessage.replace(/"/g, '\\"')}"
        />

        {/* MÉTRICAS DE AUTORIDADE */}
        <MetricsGrid />
        ${painPointsCode}
        ${servicesCode}

        {/* SIMULADOR FINANCEIRO */}
        <section className="py-20 bg-surface-alt/40 border-y border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-brand-primary text-xs font-mono font-bold uppercase tracking-widest bg-brand-primary/10 px-3 py-1 rounded-full border border-brand-primary/20">
                Simulador de Diagnóstico
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-content mt-4 tracking-tight">
                Simule o Custo da Lentidão no Atendimento
              </h2>
            </div>
            <ValueSimulator />
          </div>
        </section>

        {/* TABELA COMPARATIVA */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-brand-secondary text-xs font-mono font-bold uppercase tracking-widest bg-brand-secondary/10 px-3 py-1 rounded-full border border-brand-secondary/20">
                Padrão de Precisão
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-content mt-4 tracking-tight">
                Engenharia Dedicada vs Soluções Amadoras
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
              Garantia e Segurança
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-content mt-6 tracking-tight">
              Fale com um Especialista Agora Mesmo
            </h2>
            <p className="text-content-muted text-lg mt-4 max-w-2xl mx-auto">
              Receba um diagnóstico prévio e tire todas as suas dúvidas diretamente pelo WhatsApp em menos de 10 minutos.
            </p>
            <div className="mt-8 flex justify-center">
              <WhatsAppCTA
                buttonText="Chamar Especialista no WhatsApp"
                message="${pageWhatsAppMessage.replace(/"/g, '\\"')}"
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
        message="${pageWhatsAppMessage.replace(/"/g, '\\"')}"
      />
    </div>
  );
}
`;

const pagesDir = path.join(rootDir, 'src/pages');
fs.mkdirSync(pagesDir, { recursive: true });
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
