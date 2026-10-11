# ⚡ Nespol — Área de Membros (Core-Bare-Metal™)

> **Landing Page de Alta Conversão & Performance Extrema para a Área de Membros Nespol**  
> Engenharia bare-metal pré-renderizada (SSG) com React 19, Vite, Tailwind CSS e Bun.  
> **Score 99/100 no Google PageSpeed Mobile • LCP 1.7s • TBT 0ms • Acessibilidade 100/100 • SEO 100/100 • Deploy Automatizado para VPS.**

🌐 **URL de Produção:** [https://nespol.rogeriomaciel.com.br](https://nespol.rogeriomaciel.com.br)  
🎯 **Site Original de Referência:** [https://nespol.com.br](https://nespol.com.br)

---

## 📊 Benchmarks Oficiais Google PageSpeed Insights (Mobile)

A página foi reconstruída para superar os gargalos do WordPress/Thrive original, atingindo notas máximas de auditoria móvel no Google:

| Categoria | Pontuação | Status |
| :--- | :---: | :---: |
| **Desempenho (Performance)** | **99 / 100** | 🟢 Elite Mundial |
| **Acessibilidade** | **100 / 100** | 🟢 Conformidade Total WCAG AAA |
| **Práticas Recomendadas** | **100 / 100** | 🟢 Nota Máxima |
| **SEO** | **100 / 100** | 🟢 Rich Snippets & Dados Estruturados |

### ⚡ Métricas Core Web Vitals (Mobile 4G Emulado)
- **LCP (Largest Contentful Paint):** `1.7 s` *(reduzido de 11.6s após migração para WebP responsivo de 34KB e preloads prioritários)*
- **TBT (Total Blocking Time):** `0 ms` *(zero travamento da thread principal)*
- **CLS (Cumulative Layout Shift):** `0.006` *(estabilidade visual absoluta)*
- **FCP (First Contentful Paint):** `1.7 s`
- **Speed Index:** `1.8 s`
- **Status Geral:** **✅ APROVADO nos Core Web Vitals**

---

## 🏛️ Sobre o Projeto & Metodologia

A **Nespol** é uma das maiores referências do Brasil em criação de vídeos com Inteligência Artificial e ferramentas de animação, liderada pelo **Instrutor Cris** (+320 mil inscritos no YouTube e mais de 5.000 alunos ativos).

Esta versão substitui o stack pesado anterior (WordPress + Thrive Architect + dezenas de scripts bloatware) por uma arquitetura **Core-Bare-Metal**:
1. **Pré-renderização SSG Estática:** HTML 100% renderizado no build via `scripts/prerender.ts`.
2. **Critical CSS Inlined:** Folha de estilos crítica injetada inline no `<head>`, eliminando bloqueios de renderização.
3. **Imagens Responsivas WebP:** Formato WebP otimizado com picture tags e preloads de prioridade alta para o hero banner.
4. **On-Demand Hydration:** O bundle JavaScript do React 19 é carregado sob demanda no primeiro toque/scroll do visitante, garantindo TBT de 0ms.
5. **SEO & Dados Estruturados Schema.org:** Schemas nativos `Course` e `FAQPage` para garantir exibição de rich snippets diretamente na SERP do Google.

---

## 📂 Estrutura do Projeto

```
/
├── index.html                    # HTML canônico pré-renderizado com Schema.org e preloads
├── public/
│   ├── images/nespol/            # Assets de mídia convertidos e otimizados em WebP
│   ├── .well-known/              # Catálogos de descoberta por IA (ai-catalog.json e ard.json)
│   ├── llms.txt                  # Resumo estruturado do curso para robôs e IAs
│   ├── llms-full.txt             # Conhecimento completo para ChatGPT, Perplexity e Gemini
│   ├── robots.txt                # Regras de crawlers tradicionais e IA
│   └── sitemap.xml               # Mapeamento canônico do site
├── src/
│   ├── config/
│   │   └── site.config.ts        # Dados globais da Nespol (preços, links Kiwify, YouTube)
│   ├── components/               # Componentes modulares de alta conversão
│   │   ├── Navbar.tsx            # Cabeçalho fixo com badge +320k e CTA
│   │   ├── Hero.tsx              # H1 de impacto, banner responsivo WebP e badge de alunos
│   │   ├── ApplicationsSection.tsx # O que você aprende (Vídeos com IA, Voz, TikTok Shop, etc.)
│   │   ├── ModulesSection.tsx    # Grade curricular com módulos das ferramentas
│   │   ├── BonusSection.tsx      # Cursos bônus exclusivos inclusos
│   │   ├── AdvantagesSection.tsx # Benefícios da Área de Membros
│   │   ├── PricingSection.tsx    # Card oficial de oferta Kiwify (R$ 147 à vista ou 12x)
│   │   ├── TestimonialsSection.tsx # Galeria de avaliações e depoimentos reais de alunos
│   │   ├── GuaranteeSection.tsx  # Selo de garantia blindada de 7 dias
│   │   ├── InstructorSection.tsx # História do Instrutor Cris e Canal Nespol
│   │   ├── FaqAccordion.tsx      # FAQ interativo com 8 perguntas frequentes
│   │   ├── Footer.tsx            # Links institucionais e copyright acessível (WCAG AAA)
│   │   ├── StickyBottomBar.tsx   # Barra flutuante de conversão ativada após rolagem
│   │   └── Icons.tsx             # Ícones SVG otimizados inline (zero requests)
│   ├── entries/
│   │   └── main.tsx              # Ponto de hidratação React 19
│   ├── pages/
│   │   └── Home.tsx              # Composição principal da página
│   └── index.css                 # Tailwind CSS + tokens visuais Dark Mode
├── scripts/
│   ├── prerender.ts              # Engine SSG bare-metal para inlining de CSS e deferred JS
│   └── audit-pagespeed.ts        # Script de auditoria oficial da Google PageSpeed API
├── deploy.sh                     # Deploy automatizado via SSH/rsync para VPS
└── sync-base.sh                  # Sincronização com o repositório base upstream
```

---

## ⚙️ Configuração Central (`site.config.ts`)

Todos os links de checkout, valores promocionais e metadados estão centralizados em [`src/config/site.config.ts`](src/config/site.config.ts):

```typescript
export const siteConfig = {
  name: 'Nespol — Área de Membros',
  tagline: 'Aprenda a Criar Vídeos com Inteligência Artificial',
  checkoutUrl: 'https://pay.kiwify.com.br/vMKpyAL',
  priceCurrent: 'R$ 147,00',
  priceOriginal: 'R$ 297,00',
  installmentValue: 'R$ 15,20',
  installments: 12,
  youtubeUrl: 'https://youtube.com/nespol',
  subscribersYoutube: '+320k',
  studentsCount: '+5.000',
};
```

---

## 🚀 Como Executar o Projeto Localmente

> **REGRA DO AMBIENTE:** Utilize exclusivamente o **`bun`** como runtime e gerenciador de pacotes.

### 1. Instalar dependências
```bash
bun install
```

### 2. Iniciar servidor de desenvolvimento
```bash
bun run dev
```
Acesse: `http://localhost:3000`

### 3. Compilar para produção (Build + SSG Prerender)
```bash
bun run build
```
O comando executa:
1. `bunx tsc` (Verificação de tipagem TypeScript)
2. `vite build` (Compilação e minificação com esbuild)
3. `bun scripts/prerender.ts` (Geração do HTML estático com Critical CSS e JS sob demanda em `dist/`)

### 4. Testar build local
```bash
bun run preview
```

---

## 🔍 Como Executar a Auditoria Google PageSpeed (Mobile)

Para auditar o site em produção utilizando a API oficial do Google Lighthouse:

```bash
# Audita o site publicado da Nespol
AUDIT_URL="https://nespol.rogeriomaciel.com.br" bun run audit
```

O script retornará em tempo real:
- Pontuação de Desempenho, Acessibilidade, Práticas Recomendadas e SEO (0 a 100);
- Métricas exatas de FCP, LCP, TBT, CLS e Speed Index;
- Validação oficial de aprovação dos Core Web Vitals.

---

## 🌐 Deploy para VPS de Produção

O script [`deploy.sh`](deploy.sh) compila o projeto localmente e sincroniza os arquivos estáticos diretamente com a VPS via `rsync` sobre SSH:

```bash
bun run deploy
```

O Nginx remoto está configurado com cache imutável (`Cache-Control: public, max-age=31536000, immutable`) para todas as mídias `.webp`, garantindo resposta imediata na borda do Cloudflare.

---

## 🔄 Sincronização com o Repositório Base

Para puxar novidades de performance da arquitetura upstream (`core-bare-metal-base`):

```bash
bun run sync-base
```

---

> **Desenvolvido por Rogério Maciel • Core-Bare-Metal™ Architecture**  
> *Alta performance, latência sub-segundo e conversão máxima.*
