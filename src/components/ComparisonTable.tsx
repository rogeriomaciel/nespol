import { CheckCircle2Icon, XIcon, ZapIcon } from './Icons';

interface ComparisonRow {
  feature: string;
  traditional: string;
  bareMetal: string;
  isBareMetalBetter?: boolean;
}

interface ComparisonTableProps {
  title?: string;
  subtitle?: string;
  rows?: ComparisonRow[];
}

export function ComparisonTable({
  title = 'A Diferença Entre Perder Clientes e Bater Recordes de Vendas',
  subtitle = 'Veja o contraste real entre um site convencional de agência e a nossa engenharia Bare-Metal compilada.',
  rows = [
    {
      feature: 'Tempo de Carregamento no 4G',
      traditional: '8 a 14 segundos (lento)',
      bareMetal: '< 0.5 segundo (instantâneo)',
      isBareMetalBetter: true,
    },
    {
      feature: 'Nota Google PageSpeed Mobile',
      traditional: '25 a 45 / 100 (vermelho)',
      bareMetal: '95 a 100 / 100 (verde máximo)',
      isBareMetalBetter: true,
    },
    {
      feature: 'Fuga de Visitantes na Tela Branca',
      traditional: 'Até 65% de cliques perdidos',
      bareMetal: 'Quase ZERO de perda por lentidão',
      isBareMetalBetter: true,
    },
    {
      feature: 'Dependência de Plugins & WordPress',
      traditional: '20+ plugins pesados e inseguros',
      bareMetal: 'Zero plugins. Código puro compilado',
      isBareMetalBetter: true,
    },
    {
      feature: 'Custo por Lead no Google/Meta Ads',
      traditional: 'Alto (paga por cliques que fogem)',
      bareMetal: 'Otimizado ao extremo (aproveita 100%)',
      isBareMetalBetter: true,
    },
    {
      feature: 'Garantia Técnica em Contrato',
      traditional: 'Nenhuma (se ficar lento, o problema é seu)',
      bareMetal: 'Contrato com meta de PageSpeed 95+',
      isBareMetalBetter: true,
    },
  ],
}: ComparisonTableProps) {
  return (
    <section id="comparativo" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {subtitle}
          </p>
        </div>

        <div className="glass-card rounded-3xl overflow-hidden border-slate-200 dark:border-slate-800 shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-900/90 text-sm">
                  <th className="py-4 px-6 font-bold text-slate-700 dark:text-slate-300">Critério de Engenharia</th>
                  <th className="py-4 px-6 font-bold text-red-600 dark:text-red-400 bg-red-50/40 dark:bg-red-950/20">Site Comum (WordPress/Elementor)</th>
                  <th className="py-4 px-6 font-bold text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-950/30">
                    <span className="flex items-center gap-1.5">
                      <ZapIcon className="w-4 h-4 text-blue-500" />
                      Arquitetura Core-Bare-Metal™
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-sm sm:text-base">
                {rows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-900 dark:text-slate-100">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-slate-600 dark:text-slate-400 bg-red-50/20 dark:bg-red-950/10">
                      <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400">
                        <XIcon className="w-4 h-4 shrink-0" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 font-semibold text-slate-900 dark:text-white bg-blue-50/30 dark:bg-blue-950/20">
                      <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                        <CheckCircle2Icon className="w-4 h-4 shrink-0 text-emerald-500" />
                        <span>{row.bareMetal}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
