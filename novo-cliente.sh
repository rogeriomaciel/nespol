#!/usr/bin/env bash

# ==============================================================================
# Provisionador Automático de Novo Site de Cliente (core-bare-metal-base)
# ==============================================================================

set -e

GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

BASE_REPO_URL="https://github.com/rogeriomaciel/core-bare-metal-base.git"

echo -e "${BLUE}======================================================${NC}"
echo -e "${BLUE}🚀 Provisionador de Site de Cliente — Core-Bare-Metal™${NC}"
echo -e "${BLUE}======================================================${NC}"

PROJECT_NAME="$1"
if [ -z "$PROJECT_NAME" ]; then
  echo -e "${YELLOW}Digite o nome da pasta / repositório para o novo cliente:${NC}"
  read -r -p "Nome (ex: cliente-auto-express): " PROJECT_NAME
fi

if [ -z "$PROJECT_NAME" ]; then
  echo -e "${RED}❌ O nome do projeto não pode ser vazio.${NC}"
  exit 1
fi

DEST_DIR="../${PROJECT_NAME}"
echo -e "\n${YELLOW}📦 1/4 Clonando template base para '${DEST_DIR}'...${NC}"
git clone "$BASE_REPO_URL" "$DEST_DIR"

cd "$DEST_DIR"

echo -e "\n${YELLOW}🔧 2/4 Configurando remotes do Git...${NC}"
git remote rename origin upstream || git remote add upstream "$BASE_REPO_URL"

if command -v gh &> /dev/null && gh auth status &> /dev/null; then
  echo -e "\n${YELLOW}🐙 3/4 Criando novo repositório privado no GitHub via gh CLI...${NC}"
  gh repo create "$PROJECT_NAME" --private --source=. --remote=origin --push || {
    echo -e "${YELLOW}⚠️ Não foi possível criar automaticamente via gh CLI. Você pode criar manualmente no GitHub e adicionar o remote origin.${NC}"
  }
fi

if [ -f "package.json" ]; then
  echo -e "\n${YELLOW}⚡ 4/4 Instalando dependências estritamente com Bun...${NC}"
  bun install
fi

echo -e "\n${GREEN}======================================================${NC}"
echo -e "${GREEN}🎉 Novo projeto '${PROJECT_NAME}' configurado com sucesso!${NC}"
echo -e "${GREEN}======================================================${NC}"
echo -e "\nPróximos passos:"
echo -e "  1. Acesse o diretório: cd ${DEST_DIR}"
echo -e "  2. Configure as Secrets na VPS no GitHub:"
echo -e "     - DEPLOY_VPS_IP, DEPLOY_VPS_USER, DEPLOY_SSH_KEY, DEPLOY_REMOTE_DIR"
echo -e "  3. Edite as páginas em 'src/pages/' diretamente ou via chat do Antigravity"
echo -e "  4. Execute 'bun run build' e dê 'git push' para publicar na VPS automaticamente!\n"
