#!/usr/bin/env bash

# ==============================================================================
# Sincronização com o Repositório Base Upstream (core-bare-metal-base)
# ==============================================================================

set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

BASE_REPO="https://github.com/rogeriomaciel/core-bare-metal-base.git"

echo -e "${YELLOW}🔄 Verificando atualizações do repositório base (upstream)...${NC}"

if ! git remote | grep -q "upstream"; then
  echo -e "${YELLOW}⚠️ Remote 'upstream' não encontrado. Adicionando ${BASE_REPO}...${NC}"
  git remote add upstream "$BASE_REPO"
fi

echo -e "${YELLOW}📥 Baixando novidades do upstream...${NC}"
git fetch upstream

CURRENT_BRANCH=$(git branch --show-current || echo "main")

echo -e "${YELLOW}🔀 Mesclando melhorias da base na branch '${CURRENT_BRANCH}'...${NC}"
git merge upstream/main -m "chore: sincronizacao com core-bare-metal-base (upstream)" --no-edit || {
  echo -e "${RED}⚠️ Ocorreu um conflito. Resolva os arquivos conflitantes preservando as customizações do cliente.${NC}"
  exit 1
}

echo -e "${GREEN}🎉 Projeto atualizado com sucesso com as últimas melhorias da base Core-Bare-Metal!${NC}"
