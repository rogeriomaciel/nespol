import { StarIcon, ShieldCheckIcon, AwardIcon } from './Icons';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  metric: string;
}

interface SocialProofProps {
  title?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
}

export function SocialProof({
  title = 'Resultados Comprovados em Produção',
  subtitle = 'Quem migrou para a Arquitetura Bare-Metal nunca mais voltou para plataformas lentas.',
  testimonials = [
    {
      quote: 'Nosso site antigo demorava 9 segundos para abrir. Depois da reconstrução Bare-Metal, o custo por lead no Google Ads caiu 42% na primeira semana e as mensagens no WhatsApp triplicaram.',
      author: 'Eduardo M.',
      role: 'Diretor de Operações',
      metric: '3x mais contatos no WhatsApp',
    },
    {
      quote: 'A garantia de contrato nos deu total segurança. O site foi entregue com nota 99 no Google PageSpeed e carregamento em 0.4s. O tráfego pago agora se paga com folga.',
      author: 'Carla S.',
      role: 'Sócia-Fundadora',
      metric: '-42% no Custo por Lead',
    },
    {
      quote: 'Achávamos que o problema eram os anúncios, mas era a tela branca do WordPress. Foi só colocar a LP Bare-Metal no ar que as conversões explodiram.',
      author: 'Rodrigo P.',
      role: 'Head de Tráfego',
      metric: 'Nota 99/100 no PageSpeed Mobile',
    },
  ],
}: SocialProofProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 mb-4">
            <AwardIcon className="w-3.5 h-3.5" />
            <span>ENGENHARIA QUE GERA RESULTADO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item, idx) => (
            <div key={idx} className="glass-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-slate-900 dark:text-white">{item.author}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{item.role}</div>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-1 rounded-lg border border-emerald-200 dark:border-emerald-800">
                  {item.metric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
