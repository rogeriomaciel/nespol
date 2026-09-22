/**
 * Script de Auditoria Automatizada via Google PageSpeed Insights API (Mobile)
 * Uso: bun run audit ou bun scripts/audit-pagespeed.ts
 */

const targetUrl = process.env.AUDIT_URL || 'https://rogeriomaciel.com.br';
const apiKey = process.env.PAGESPEED_API_KEY || process.env.GOOGLE_API_KEY || '';

const apiUrl = new URL('https://www.googleapis.com/pagespeedonline/v5/runPagespeed');
apiUrl.searchParams.set('url', targetUrl);
apiUrl.searchParams.set('strategy', 'mobile');
apiUrl.searchParams.append('category', 'PERFORMANCE');
apiUrl.searchParams.append('category', 'ACCESSIBILITY');
apiUrl.searchParams.append('category', 'BEST_PRACTICES');
apiUrl.searchParams.append('category', 'SEO');

if (apiKey) {
  apiUrl.searchParams.set('key', apiKey);
}

// Cores ANSI para o terminal
const reset = '\x1b[0m';
const bold = '\x1b[1m';
const green = '\x1b[32m';
const yellow = '\x1b[33m';
const red = '\x1b[31m';
const cyan = '\x1b[36m';
const blue = '\x1b[34m';

function getScoreColor(score: number): string {
  if (score >= 90) return `${green}${bold}${score}${reset}`;
  if (score >= 50) return `${yellow}${bold}${score}${reset}`;
  return `${red}${bold}${score}${reset}`;
}

async function runAudit() {
  console.log(`\n${cyan}${bold}🔍 Executando auditoria do Google PageSpeed Insights (Mobile)...${reset}`);
  console.log(`${blue}Alvo:${reset} ${targetUrl}\n`);

  try {
    const startTime = Date.now();
    const response = await fetch(apiUrl.toString(), {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
      },
    });

    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error(`${red}${bold}❌ Erro na requisição (${response.status}):${reset}`, errorData.error?.message || response.statusText);
      if (response.status === 429) {
        console.log(`\n${yellow}💡 Dica:${reset} Para consultar ilimitadamente sem limite de IP de servidor, defina a variável:`);
        console.log(`${cyan}export PAGESPEED_API_KEY="sua-chave-aqui"${reset} e rode ${bold}bun run audit${reset} novamente.\n`);
      }
      process.exit(1);
    }

    const data = await response.json();
    const { lighthouseResult } = data;

    if (!lighthouseResult) {
      console.error(`${red}❌ Nenhum resultado retornado pelo Lighthouse.${reset}`);
      process.exit(1);
    }

    const categories = lighthouseResult.categories;
    const audits = lighthouseResult.audits;

    console.log(`${green}${bold}====================================================${reset}`);
    console.log(`${green}${bold}   RELATÓRIO OFICIAL GOOGLE PAGESPEED (MOBILE)     ${reset}`);
    console.log(`${green}${bold}====================================================${reset}`);
    console.log(`⏱️  Tempo de análise: ${elapsed}s\n`);

    // Pontuações Gerais
    console.log(`${bold}📊 PONTUAÇÕES GERAIS (0 a 100):${reset}`);
    if (categories.performance) {
      const perfScore = Math.round(categories.performance.score * 100);
      console.log(`  • Desempenho (Performance):    ${getScoreColor(perfScore)} / 100`);
    }
    if (categories.accessibility) {
      const a11yScore = Math.round(categories.accessibility.score * 100);
      console.log(`  • Acessibilidade:              ${getScoreColor(a11yScore)} / 100`);
    }
    if (categories['best-practices']) {
      const bpScore = Math.round(categories['best-practices'].score * 100);
      console.log(`  • Práticas Recomendadas:       ${getScoreColor(bpScore)} / 100`);
    }
    if (categories.seo) {
      const seoScore = Math.round(categories.seo.score * 100);
      console.log(`  • SEO:                         ${getScoreColor(seoScore)} / 100`);
    }

    // Métricas Core Web Vitals
    console.log(`\n${bold}⚡ MÉTRICAS CORE WEB VITALS:${reset}`);

    const fcp = audits['first-contentful-paint'];
    const lcp = audits['largest-contentful-paint'];
    const tbt = audits['total-blocking-time'];
    const cls = audits['cumulative-layout-shift'];
    const si = audits['speed-index'];

    if (fcp) console.log(`  • FCP (First Contentful Paint):      ${fcp.score >= 0.9 ? green : yellow}${fcp.displayValue}${reset}`);
    if (lcp) console.log(`  • LCP (Largest Contentful Paint):    ${lcp.score >= 0.9 ? green : yellow}${lcp.displayValue}${reset}`);
    if (tbt) console.log(`  • TBT (Total Blocking Time):         ${tbt.score >= 0.9 ? green : yellow}${tbt.displayValue}${reset}`);
    if (cls) console.log(`  • CLS (Cumulative Layout Shift):     ${cls.score >= 0.9 ? green : yellow}${cls.displayValue}${reset}`);
    if (si)  console.log(`  • Speed Index (Índice de Vel.):      ${si.score >= 0.9 ? green : yellow}${si.displayValue}${reset}`);

    // Status Geral de Aprovação dos Core Web Vitals
    const cwPassed = (fcp?.score ?? 0) >= 0.75 && (lcp?.score ?? 0) >= 0.75 && (cls?.score ?? 0) >= 0.75;
    console.log(`\n${bold}🎯 Status dos Core Web Vitals:${reset} ${cwPassed ? `${green}${bold}✅ APROVADO${reset}` : `${red}${bold}⚠️ REQUER ATENÇÃO${reset}`}`);

    // Oportunidades de Otimização (se houver alguma)
    const opportunities = Object.values(audits).filter(
      (a: any) => a.details && a.details.type === 'opportunity' && a.score !== null && a.score < 0.9
    );

    if (opportunities.length > 0) {
      console.log(`\n${yellow}${bold}⚠️ OPORTUNIDADES DE MELHORIA:${reset}`);
      for (const opp of opportunities as any[]) {
        console.log(`  - ${opp.title} (${opp.displayValue || ''})`);
      }
    } else {
      console.log(`\n${green}🎉 Nenhuma oportunidade de bloqueio pendente!${reset}`);
    }

    console.log(`\n${green}${bold}====================================================${reset}\n`);
  } catch (error: any) {
    console.error(`\n${red}Erro inesperado ao rodar o teste:${reset}`, error.message);
    process.exit(1);
  }
}

runAudit();
