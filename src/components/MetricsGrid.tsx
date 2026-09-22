import { ZapIcon, GaugeIcon, ActivityIcon, CoinsIcon } from './Icons';

export function MetricsGrid() {
  const metrics = [
    {
      title: 'First Contentful Paint',
      value: '< 0.4s',
      description: 'O conteúdo principal surge imediatamente no celular do usuário.',
      icon: <ZapIcon className="w-6 h-6 text-blue-500" />,
    },
    {
      title: 'Google PageSpeed Mobile',
      value: '99/100',
      description: 'Índice de qualidade máxima avaliado pelo algoritmo oficial do Google.',
      icon: <GaugeIcon className="w-6 h-6 text-emerald-500" />,
    },
    {
      title: 'Total Blocking Time',
      value: '0 ms',
      description: 'Zero travamentos. O usuário clica e a página responde no mesmo milissegundo.',
      icon: <ActivityIcon className="w-6 h-6 text-indigo-500" />,
    },
    {
      title: 'Eficiência de Tráfego',
      value: '+65%',
      description: 'Aproveitamento total dos cliques pagos sem abandono por lentidão.',
      icon: <CoinsIcon className="w-6 h-6 text-amber-500" />,
    },
  ];

  return (
    <section id="metricas" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Métricas de Engenharia Rigorosa
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Não entregamos promessas subjetivas. Entregamos números auditáveis pelas ferramentas do Google.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl border-slate-200 dark:border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
                {m.icon}
              </div>
              <div className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-1">
                {m.value}
              </div>
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-2">
                {m.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {m.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
