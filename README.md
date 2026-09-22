# ⚡ Core-Bare-Metal-Base

> **Repositório Template Oficial da Arquitetura Core-Bare-Metal™**  
> Engenharia de software de alta performance para criação, replicação e hospedagem de Landing Pages e sites ultrarrápidos para clientes.  
> **Score 99/100 no Google PageSpeed Mobile • LCP < 0.5s • TBT 0ms • Multi-Páginas TSX Nativo • SEO & GEO para IA • Deploy Automatizado para VPS.**

---

## 📑 Sumário

1. [Filosofia & Vantagem Competitiva](#-filosofia--vantagem-competitiva)
2. [Estrutura da Arquitetura Multi-Páginas](#-estrutura-da-arquitetura-multi-páginas)
3. [Design System & Componentes Modulares](#-design-system--componentes-modulares)
4. [Configuração Central do Cliente (`site.config.ts`)](#-configuração-central-do-cliente)
5. [Como Provisionar um Novo Cliente (Passo a Passo)](#-como-provisionar-um-novo-cliente)
6. [Como Criar uma Nova Landing Page (1 Comando)](#-como-criar-uma-nova-landing-page-1-comando-automático)
7. [Deploy Contínuo (CI/CD) para VPS via GitHub Actions](#-deploy-contínuo-cicd-para-vps)
8. [Configuração Recomendada do Nginx na VPS](#-configuração-recomendada-do-nginx-na-vps)
9. [Como Sincronizar Melhorias da Base (`sync-base.sh`)](#-como-sincronizar-melhorias-da-base)
10. [Otimização de SEO, GEO e LLMs (IA Search)](#-otimização-de-seo-geo-e-llms-ia-search)
11. [Auditoria Automatizada Google PageSpeed](#-auditoria-automatizada-google-pagespeed)
12. [Comandos Rápidos (Exclusivo Bun)](#-comandos-rápidos-exclusivo-bun)

---

## 🏛️ Filosofia & Vantagem Competitiva

A esmagadora maioria dos sites desenvolvidos por agências tradicionais utiliza WordPress, Elementor e dezenas de plugins de terceiros. Isso resulta em:
- **8 a 14 segundos de espera no 4G/5G móvel**.
- **Perda de 53% a 78% do tráfego pago** antes que a página sequer seja renderizada (fuga na tela branca).
- **Custo por Lead (CPL) duplicado ou triplicado**.

A **Arquitetura Core-Bare-Metal™** elimina completamente o WordPress, bancos de dados pesados e plugins lentos. O site é compilado em **código puro pré-renderizado (SSG)** com:
- **Critical CSS Inlined:** Zero recursos que bloqueiam a renderização.
- **On-Demand JS Loader:** O bundle JavaScript interativo é carregado sob demanda (no primeiro toque ou em tempo ocioso), zerando o *Total Blocking Time* (TBT = 0ms).
- **Conversão Magnética:** Todos os fluxos conduzem o lead qualificado diretamente para o WhatsApp da empresa.

---

## 📂 Estrutura da Arquitetura Multi-Páginas

Diferente de modelos restritos a uma única página ou arquivos Markdown que precisam ser convertidos em JSON, o **Core-Bare-Metal-Base** utiliza **Vite Multi-Entry** com componentes **TSX puros**. Cada página tem seu próprio ciclo, layout e proposta comercial independente:

```
/
├── index.html                    # HTML de entrada da Home Flagship (com SEO, GEO e Schema.org)
├── lp1/index.html                # HTML de entrada da LP 1 (Dor & Urgência)
├── lp2/index.html                # HTML de entrada da LP 2 (Oferta & Perícia)
├── lp3/index.html                # HTML de entrada da LP 3 (Garantia Blindada)
├── public/
│   ├── .well-known/              # ai-catalog.json e ard.json (Agentic Resource Discovery)
│   ├── llms.txt                  # Resumo executivo para LLMs e IAs
│   ├── llms-full.txt             # Base profunda de conhecimento para LLMs
│   ├── robots.txt                # Regras para bots convencionais e crawlers de IA
│   ├── sitemap.xml               # Mapeamento canônico
│   ├── favicon.svg               # Ícone SVG de alta nitidez
│   └── og-image.jpg              # Imagem para preview no WhatsApp e redes
├── src/
│   ├── config/
│   │   └── site.config.ts        # Dados globais (Nome, WhatsApp, GTM, etc.)
│   ├── components/               # Design system compartilhado
│   ├── entries/                  # Entry points de hidratação (main, lp1, lp2, lp3)
│   ├── pages/                    # Componentes das páginas (Home, Lp1, Lp2, Lp3)
│   └── index.css                 # Tailwind + Glassmorphism + Efeitos Glow
└── scripts/
    ├── prerender.ts              # Engine SSG multi-páginas
    └── audit-pagespeed.ts        # Auditor PageSpeed mobile
```

### 🎯 Páginas Prontas Inclusas no Template

| Rota | Arquivo TSX | Foco Estratégico |
| :--- | :--- | :--- |
| **`/`** | `src/pages/Home.tsx` | **Flagship Institucional:** Apresentação de autoridade, comparativo, simulador de perda financeira, depoimentos e FAQ. |
| **`/lp1`** | `src/pages/Lp1.tsx` | **Dor Aguda & Urgência:** Focado na queima de verba em tráfego pago por lentidão de sites no celular. |
| **`/lp2`** | `src/pages/Lp2.tsx` | **Oferta Irresistível:** Perícia Técnica de Engenharia 100% Gratuita em 10 minutos via WhatsApp. |
| **`/lp3`** | `src/pages/Lp3.tsx` | **Garantia Blindada:** Risco técnico zero com cláusula formal de nota 95+ no Google PageSpeed ou 100% de devolução. |

---

## 🎨 Design System & Componentes Modulares

Todos os componentes em `src/components/` são modulares, responsivos, acessíveis e suportam **Dark/Light Mode**:

- **`Navbar.tsx`**: Cabeçalho fixo com efeito de vidro (*glassmorphism*), links dinâmicos, alternador de tema e botão CTA.
- **`Hero.tsx`**: Seção principal com badges de autoridade, H1 de alto impacto com gradiente, prova social rápida e cards de métricas.
- **`WhatsAppCTA.tsx`**: Botão magnético com efeito glow pulsante. Suporta variantes:
  - `variant="primary"` (Botão grande para Hero/Seções)
  - `variant="floating"` (Botão flutuante no canto inferior da tela)
  - `variant="card"` (Card de fechamento com chamada persuasiva)
  - `variant="compact"` (Botão inline compacto)
- **`ValueSimulator.tsx`**: O famoso **Simulador de Perda Financeira de Rogério Maciel**. Permite ao empresário ajustar investimento em anúncios, CPC, taxa de conversão e ticket médio, calculando instantaneamente o faturamento anual que está deixando na mesa.
- **`ComparisonTable.tsx`**: Tabela comparativa direta entre Sites Comuns (WordPress/Elementor) e a Arquitetura Core-Bare-Metal™.
- **`MetricsGrid.tsx`**: Grid de 4 pilares de engenharia (FCP < 0.4s, PageSpeed 99/100, TBT 0ms, Eficiência +65%).
- **`SocialProof.tsx`**: Cards de depoimentos com métricas comprovadas e selos de garantia técnica.
- **`FaqAccordion.tsx`**: Perguntas frequentes interativas com animação fluida sem dependências externas.
- **`Footer.tsx`**: Rodapé corporativo com direitos autorais, links rápidos e créditos da arquitetura.
- **`ThemeToggle.tsx`**: Alternador de modo escuro/claro com script anti-FOUC (sem piscar tema errado).
- **`Icons.tsx`**: Coleção completa de ícones SVG inline (`WhatsAppIcon`, `ZapIcon`, `ShieldCheckIcon`, `GaugeIcon`, `StarIcon`, `CalculatorIcon`, etc.), garantindo zero requisições adicionais.

---

## ⚙️ Configuração Central do Cliente

Para personalizar os dados básicos de um cliente, edite o arquivo [`src/config/site.config.ts`](src/config/site.config.ts):

```typescript
export const siteConfig: SiteConfig = {
  name: 'Oficina Kadosh Motorsport',
  tagline: 'Especialistas em Motores e Câmbios Automáticos',
  shortDescription: 'Diagnóstico computadorizado de precisão em Goiânia.',
  whatsappNumber: '5562999999999', // Apenas números com DDI + DDD
  defaultWhatsAppMessage: 'Olá! Vi o site e gostaria de agendar um diagnóstico para o meu carro.',
  cityState: 'Goiânia - GO',
  email: 'contato@oficinakadosh.com.br',
  gtmId: 'GTM-XXXXXXX', // Opcional (deixe vazio se não usar)
};
```

Qualquer componente que use `getWhatsAppUrl()` pegará o número e a mensagem automaticamente, ou você pode passar uma mensagem customizada por página/botão.

---

## 🚀 Como Provisionar um Novo Cliente

### Método 1: Via Script Automatizado (Recomendado)

Na raiz do seu ambiente, execute:

```bash
cd /rogerio/core/core-bare-metal-base
./novo-cliente.sh cliente-nome-da-empresa
```

O script executa automaticamente:
1. Clona o `core-bare-metal-base` para `../cliente-nome-da-empresa`.
2. Renomeia o remote original para `upstream` (para receber melhorias futuras).
3. Cria um novo repositório **privado** no GitHub do cliente via `gh repo create`.
4. Instala todas as dependências com **`bun install`**.

### Método 2: Pelo GitHub ("Use this template")

1. Acesse o repositório no GitHub: `https://github.com/rogeriomaciel/core-bare-metal-base`
2. Clique no botão verde **"Use this template"** > **"Create a new repository"**.
3. Defina o nome do repositório do cliente (ex: `cliente-megaplub`) e marque como **Private**.
4. Clone o novo repositório na sua máquina:
   ```bash
   git clone git@github.com:rogeriomaciel/cliente-megaplub.git
   cd cliente-megaplub
   git remote add upstream https://github.com/rogeriomaciel/core-bare-metal-base.git
   bun install
   ```

---

## ⚡ Como Criar uma Nova Landing Page (1 Comando Automático)

O template possui um gerador de páginas Bare-Metal integrado via linha de comando:

```bash
bun run criar-pagina <slug> [titulo] [descricao]
```

### Exemplos de Uso:
```bash
# Criar uma nova LP sequencial padrão
bun run criar-pagina lp4

# Criar uma LP para campanha de alta autoridade
bun run criar-pagina consultoria "Consultoria de Engenharia de Tráfego" "Acelere seu site e recupere leads perdidos na tela branca"

# Criar uma LP temática sazonal
bun run criar-pagina black-friday "Black Friday Bare-Metal" "Oferta exclusiva por tempo limitado com garantia contratual"
```

### 🤖 O que este comando faz automaticamente em 1 segundo:
1. **Cria a pasta e HTML:** `/<slug>/index.html` com metatags OpenGraph, preconnect de fontes e container root.
2. **Cria o Entry de Hidratação React 19:** `src/entries/<slug>.tsx` com hidratação ultraveloz.
3. **Cria o Componente Completo da Página:** `src/pages/<PascalCase>.tsx` já totalmente montado com os componentes do design system (Hero, Simulador Financeiro de Perda por Lentidão, Tabela Comparativa, Métricas de Autoridade, Prova Social, FAQ e Botões de WhatsApp com rastreamento).
4. **Atualiza o Sitemap:** Adiciona a nova URL ao `public/sitemap.xml`.
5. **Zero Edição Manual de Configuração:** Tanto o `vite.config.ts` quanto o `scripts/prerender.ts` possuem **descoberta dinâmica de páginas** — ao criar a pasta, o Vite já compila e o SSG Prerender já gera o HTML estático automaticamente com CSS crítico inline e JS on-demand!

### 🧪 Testando a Nova Página Imediatamente:
```bash
# 1. Iniciar servidor local
bun run dev

# 2. Acesse no navegador:
# http://localhost:3000/<slug>/
```

---

## 🌐 Deploy Contínuo (CI/CD) para VPS

Cada push na branch `main` do cliente aciona automaticamente o workflow `.github/workflows/deploy.yml`:
1. Executa `bun install`.
2. Executa `bun run build` gerando todas as páginas estáticas em `dist/`.
3. Conecta à sua VPS via SSH e atualiza os arquivos via SCP.
4. Ajusta permissões de leitura web (`chmod -R 755`).

### Configurando as Secrets no GitHub do Cliente:
Acesse o repositório do cliente no GitHub:  
`Settings` > `Secrets and variables` > `Actions` > `New repository secret`

| Secret | Descrição | Exemplo |
| :--- | :--- | :--- |
| `VPS_HOST` | IP público ou hostname da VPS | `15.228.123.45` |
| `VPS_USERNAME` | Usuário de acesso SSH | `ubuntu` ou `root` |
| `VPS_SSH_KEY` | Chave privada SSH completa | Conteúdo do arquivo `.pem` ou `id_rsa` |
| `DEPLOY_PATH` | Caminho absoluto da pasta na VPS | `/var/www/cliente.com.br` |

---

## 🖥️ Configuração Recomendada do Nginx na VPS

Para que o Nginx sirva tanto a Home quanto as sub-rotas `/lp1`, `/lp2`, `/lp3` com compressão e cache ideais, utilize a seguinte configuração:

```nginx
server {
    listen 80;
    server_name cliente.com.br www.cliente.com.br;
    root /var/www/cliente.com.br;
    index index.html;

    # Compressão Gzip de Alta Eficiência
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;

    # Suporte para subpastas multi-páginas (/lp1, /lp2, /lp3)
    location / {
        try_files $uri $uri/ $uri/index.html =404;
    }

    # Cache de longa duração para assets com hash
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, no-transform, immutable";
    }

    # Segurança & Headers
    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";
    add_header Referrer-Policy "strict-origin-when-cross-origin";
}
```

---

## 🔄 Como Sincronizar Melhorias da Base (`sync-base.sh`)

Sempre que a equipe CoreAuto fizer atualizações de performance, melhorias no script de prerender ou novos componentes na base, você pode atualizar os repositórios dos clientes com segurança:

Na pasta do cliente:
```bash
bun run sync-base
```

O script:
1. Conecta ao repositório `upstream` (`core-bare-metal-base`).
2. Faz o download das novidades (`git fetch upstream`).
3. Realiza o merge seguro na branch `main`. Caso haja conflitos nas páginas customizadas do cliente, o Git permite preservar a copy do cliente mantendo os scripts e componentes atualizados.

---

## 🤖 Otimização de SEO, GEO e LLMs (IA Search)

O template vem de fábrica com o ecossistema completo de **GEO (Generative Engine Optimization)** e **SEO Técnico de Elite**, garantindo indexação máxima tanto no Google tradicional quanto nos novos buscadores baseados em Inteligência Artificial (ChatGPT Search, Perplexity AI, Claude, Google Gemini e Apple Intelligence):

### 1. Arquivos de Descoberta por IA (`public/`)
- **`public/llms.txt`**: Resumo em Markdown enxuto e semântico estruturado para consumo rápido por agentes e robôs de IA que precisam citar a empresa.
- **`public/llms-full.txt`**: Base de conhecimento profunda contendo a metodologia, diferenciais técnicos, cases, métricas e FAQs completas.
- **`public/.well-known/ai-catalog.json`**: Catálogo estruturado de endpoints e serviços disponíveis no site para LLMs.
- **`public/.well-known/ard.json`**: Especificação oficial de *Agentic Resource Discovery* (ARD).

### 2. Diretrizes Cirúrgicas de Crawlers (`public/robots.txt`)
O arquivo `robots.txt` autoriza explicitamente e direciona os crawlers de inteligência artificial mais relevantes:
- `GPTBot` e `ChatGPT-User` (OpenAI / ChatGPT)
- `PerplexityBot` (Perplexity AI)
- `ClaudeBot` e `Claude-Web` (Anthropic / Claude)
- `Google-Extended` (Google Gemini e Google AI Overviews)
- `Applebot-Extended` (Apple Intelligence / Siri)
- `Amazonbot` (Amazon AI)
- `meta-externalagent` (Meta AI)
- Apontamento automático para `sitemap.xml`.

### 3. Dados Estruturados Schema.org JSON-LD (Rich Snippets)
O `index.html` injeta no `<head>` um grafo Schema.org completo contendo:
- **`WebSite`**: Configuração canônica do site e idioma oficial (`pt-BR`).
- **`Person` / `Organization`**: Identificação da autoridade responsável (com formação, experiência e links sociais oficiais como LinkedIn e Instagram).
- **`ProfessionalService`**: Dados comerciais (telefone direto de atendimento, país, moeda e faixa de preço).
- **`FAQPage`**: Mapeamento oficial de perguntas e respostas, permitindo que o Google exiba o bloco expansível de FAQ diretamente na página de resultados de busca orgânica.

### 4. Metatags OpenGraph & Twitter Cards Enriquecidos
- Preview profissional com imagem em alta resolução (`og:image.jpg`), títulos persuasivos e descrições otimizadas para compartilhamentos no WhatsApp, Telegram, LinkedIn e Facebook.
- Diretivas de indexação avançada: `robots: max-snippet:-1, max-image-preview:large, max-video-preview:-1`.

### 🛠️ Como Customizar o SEO/GEO para um Novo Cliente:
1. Abra `public/llms.txt` e `public/llms-full.txt` e substitua os dados pelo resumo do negócio do cliente.
2. No `index.html`, atualize as entidades do script `application/ld+json` (`ProfessionalService`, nome da empresa, telefone e FAQs do nicho do cliente).
3. No `public/sitemap.xml`, altere o domínio para a URL de produção do cliente.

---

## 🔍 Auditoria Automatizada Google PageSpeed

Para auditar oficialmente a performance no Google Lighthouse Mobile via API oficial:

```bash
# Auditar a URL padrão
bun run audit

# Ou auditar a URL de produção de um cliente específico
AUDIT_URL="https://cliente.com.br" bun run audit
```

O relatório exibirá:
- Nota de Performance (0 a 100)
- Métricas Core Web Vitals (FCP, LCP, TBT, CLS, Speed Index)
- Diagnóstico de aprovação oficial do Google

---

## �� Comandos Rápidos (Exclusivo Bun)

| Comando | Descrição |
| :--- | :--- |
| `bun install` | Instala todas as dependências com velocidade extrema |
| `bun run dev` | Inicia o servidor local de desenvolvimento na porta 3000 |
| `bun run build` | Compila TypeScript, roda o Vite e executa o SSG Prerender em todas as LPs |
| `bun run preview` | Testa a pasta de produção `dist/` localmente |
| `bun run criar-pagina <slug>` | Cria uma nova LP completa com pasta, HTML, entry e componente |
| `bun run audit` | Executa a auditoria oficial Google PageSpeed Mobile |
| `bun run sync-base` | Sincroniza o projeto com as últimas melhorias da base |
| `./novo-cliente.sh <nome>` | Provisiona um novo projeto de cliente a partir do template |

---

> **Desenvolvido por Rogério Maciel • Core-Bare-Metal™ Architecture**  
> *Engenharia de precisão para negócios que não podem perder clientes na tela branca.*
