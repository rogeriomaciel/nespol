# ⚡ DIRETRIZES DO PROJETO & AMBIENTE DE EXECUÇÃO (CORE BARE-METAL BASE)

## 🚀 1. RUNTIME & GERENCIADOR DE PACOTES OBRIGATÓRIO: BUN
> **REGRA CRÍTICA & PRIORIDADE MÁXIMA:**  
> Use SEMPRE e EXCLUSIVAMENTE o **`bun`** como runtime JavaScript/TypeScript e gerenciador de pacotes/scripts prioritário neste projeto.  
> **NÃO utilize `node`, `npm`, `npx` ou `yarn`** a menos que haja impossibilidade técnica comprovada ou comando externo estritamente incompatível.

### Padrões de Comandos:
* ✅ **Executar scripts:** `bun run <script>` ou `bun <arquivo>`
* ✅ **Compilar projeto:** `bun run build`
* ✅ **Instalar dependências:** `bun add <pacote>` / `bun install`
* ✅ **Instalar dependências de dev:** `bun add -d <pacote>`
* ❌ **EVITAR:** `node <arquivo>`, `npm install`, `npm run`, `npx <comando>`

---

## 🏛️ 2. FILOSOFIA DE DESENVOLVIMENTO
* **Bare-Metal & Velocidade Extrema:** Latência sub-segundo (< 0.5s LCP), zero overhead e performance pura.
* **Modernidade & Simplicidade:** Preferência por ESM nativo, TypeScript/JavaScript moderno e APIs nativas do Bun.
* **Multi-Páginas Direto no Código:** Cada LP é um componente em `src/pages/` com seu respectivo HTML de entrada, sem intermediários.
