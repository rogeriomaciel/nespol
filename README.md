# ⚡ Core-Bare-Metal-Base

Repositório **template Bare-Metal** de engenharia de alta performance para criação e replicação de Landing Pages e sites ultrarrápidos para clientes.

Projetado para atingir **Score 99/100 no Google PageSpeed Mobile**, tempo de abertura **< 0.5s (LCP)**, **0ms Total Blocking Time** e conversão agressiva direto no WhatsApp.

---

## 🚀 Diferenciais da Arquitetura

1. **Multi-Page Nativo em TSX (Sem Markdown intermediário):**
   - Cada LP é um componente TSX puro em `src/pages/` editável no código ou via chat com IA.
   - Suporte pronto para campanhas A/B com múltiplas páginas:
     - `/` — Página Principal Flagship (`Home.tsx`)
     - `/lp1/` — Foco em Dor Aguda & Urgência de Tráfego (`Lp1.tsx`)
     - `/lp2/` — Foco em Oferta Irresistível & Perícia Gratuita (`Lp2.tsx`)
     - `/lp3/` — Foco em Comparativo Direto & Garantia Blindada (`Lp3.tsx`)
2. **SSG Prerender Multi-Página (`scripts/prerender.ts`):**
   - Pré-renderiza cada página em HTML estático completo (zero tela branca).
   - Injeta o CSS crítico diretamente em `<style id="critical-css">` eliminando recursos que bloqueiam renderização.
   - Injeta o bundle interativo JS sob demanda (primeira interação ou idle) para garantir TBT de 0ms.
3. **Design System Modular:**
   - Componentes prontos em `src/components/`: `Hero`, `WhatsAppCTA`, `ComparisonTable`, `ValueSimulator` (calculadora de perda financeira de Rogério Maciel), `SocialProof`, `FaqAccordion`, `MetricsGrid`, `Navbar`, `Footer`, `ThemeToggle`, `Icons` inline zero-deps.
4. **CI/CD Automatizado para VPS:**
   - Push na branch `main` dispara o GitHub Actions com Bun.
   - Compila a pasta `dist/` e envia via SCP/SSH para a pasta configurada nas Secrets (`DEPLOY_PATH`, `VPS_HOST`, etc.).
5. **Estrutura Pronta para Clientes (Forks / Instâncias):**
   - A base é o template imutável.
   - Cada cliente tem seu próprio repositório privado forkado da base, com suas próprias credenciais de VPS.

---

## 🛠️ Comandos do Projeto (Sempre usando Bun)

```bash
# Instalar dependências
bun install

# Iniciar servidor de desenvolvimento local
bun run dev

# Compilar todas as páginas estáticas com SSG Prerender
bun run build

# Pré-visualizar a pasta dist/ localmente
bun run preview

# Executar auditoria oficial Google PageSpeed Mobile
bun run audit

# Sincronizar atualizações da base no repositório do cliente
bun run sync-base

# Provisionar novo site de cliente
./novo-cliente.sh nome-do-cliente
```

---

## 🔑 Configuração de Secrets no Repositório do Cliente

Para que o deploy automático funcione na VPS, adicione as seguintes Secrets no GitHub do cliente (`Settings > Secrets and variables > Actions`):

- `VPS_HOST`: IP ou hostname da VPS
- `VPS_USERNAME`: Usuário SSH da VPS (ex: `ubuntu` ou `root`)
- `VPS_SSH_KEY`: Chave privada SSH (conteúdo da `.pem` ou `id_rsa`)
- `DEPLOY_PATH`: Caminho absoluto da pasta na VPS (ex: `/var/www/cliente.com.br`)

---

## 📂 Estrutura de Diretórios

```
├── .github/workflows/deploy.yml   # CI/CD automatizado via secrets
├── public/                        # Favicon, robots.txt, sitemap
├── scripts/
│   ├── prerender.ts               # SSG Prerender de todas as LPs + CSS inline
│   └── audit-pagespeed.ts         # Auditor Google PageSpeed Insights
├── src/
│   ├── components/                # Design system compartilhado
│   ├── config/site.config.ts      # Dados globais do cliente
│   ├── entries/                   # Entry points de hidratação (main, lp1, lp2, lp3)
│   ├── hooks/useTheme.ts          # Dark / light theme
│   ├── pages/                     # LPs em TSX (Home, Lp1, Lp2, Lp3)
│   └── index.css                  # Tailwind + Glassmorphism + Glows
├── index.html                     # HTML da página principal
├── lp1/index.html                 # HTML da LP1
├── lp2/index.html                 # HTML da LP2
├── lp3/index.html                 # HTML da LP3
├── novo-cliente.sh                # Script para provisionar novo site
└── sync-base.sh                   # Script para atualizar a partir do upstream
```

© Rogério Maciel • Core-Bare-Metal™ Architecture
