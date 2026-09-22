import { WhatsAppCTA } from './WhatsAppCTA';
import { ZapIcon, StarIcon, CheckCircle2Icon, ShieldCheckIcon } from './Icons';

interface HeroProps {
  badgeText?: string;
  title?: string;
  highlightedText?: string;
  subtitle?: string;
  whatsappMessage?: string;
  ctaText?: string;
  ctaSubtext?: string;
  stats?: Array<{ label: string; value: string }>;
}

export function Hero({
  badgeText = '⚡ ARQUITETURA CORE-BARE-METAL™ • SCORE 99/100 NO GOOGLE',
  title = 'Seu Site Abre em',
  highlightedText = 'Menos de 1 Segundo',
  subtitle = 'Elimine a lentidão do WordPress e recupere até 65% dos leads perdidos na tela branca. Código compilado sob medida com taxa recorde de conversão no WhatsApp.',
  whatsappMessage,
  ctaText = 'Quero Uma Perícia Gratuita no WhatsApp',
  ctaSubtext = 'Resposta imediata de um engenheiro • Sem compromisso',
  stats = [
    { label: 'Velocidade LCP', value: '< 0.5s' },
    { label: 'PageSpeed Mobile', value: '99/100' },
    { label: 'Retenção de Tráfego', value: '+78%' },
  ],
}: HeroProps) {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[250px] bg-teal-500/10 dark:bg-emerald-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-800/60 mb-6 shadow-sm">
            <ZapIcon className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>{badgeText}</span>
          </div>

          {/* H1 Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6">
            {title}{' '}
            <span className="gradient-text block sm:inline">
              {highlightedText}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
            {subtitle}
          </p>

          {/* CTA Action */}
          <div className="w-full flex justify-center mb-10">
            <WhatsAppCTA
              message={whatsappMessage}
              buttonText={ctaText}
              subtext={ctaSubtext}
              variant="primary"
            />
          </div>

          {/* Micro Social Proof / Ratings */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-600 dark:text-slate-400 pt-4 border-t border-slate-200 dark:border-slate-800/80">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-4 h-4 fill-current" />
              ))}
              <span className="font-bold ml-1.5 text-slate-800 dark:text-slate-200">5.0</span>
              <span className="text-slate-500">em avaliações de clientes</span>
            </div>
            <div className="hidden sm:block text-slate-300 dark:text-slate-700">•</div>
            <div className="flex items-center gap-1.5">
              <ShieldCheckIcon className="w-4 h-4 text-emerald-500" />
              <span>Garantia de Performance em Contrato</span>
            </div>
            <div className="hidden sm:block text-slate-300 dark:text-slate-700">•</div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2Icon className="w-4 h-4 text-blue-500" />
              <span>Zero WordPress / Zero Plugins Lentos</span>
            </div>
          </div>
        </div>

        {/* Floating Metrics Bar */}
        {stats && stats.length > 0 && (
          <div className="mt-14 max-w-3xl mx-auto grid grid-cols-3 gap-3 sm:gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-card p-4 sm:p-5 rounded-2xl text-center border-slate-200/80 dark:border-slate-800/80"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
