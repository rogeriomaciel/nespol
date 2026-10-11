import { CheckIcon, ZapIcon, ShieldCheckIcon, LockIcon } from './Icons';
import { siteConfig } from '../config/site.config';

export function PricingSection() {
  const inclusions = [
    'Conteúdos Completos',
    '+ de 100 Videoaulas',
    'Suporte Vip',
    'Acesso Vitalício',
    'Conteúdo Atualizado',
    'Plataforma Estilo Netflix',
    'Assista de onde quiser',
  ];

  return (
    <section id="oferta" className="py-20 md:py-28 bg-[#05080E] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#F6DB17]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pricing Card */}
        <div className="relative rounded-3xl p-6 sm:p-10 md:p-12 bg-gradient-to-b from-[#131B2A] to-[#0A101C] border-2 border-[#F6DB17]/50 shadow-2xl glow-yellow">
          
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2 leading-tight">
              Pague só o valor da matrícula e tenha acesso{' '}
              <span className="text-[#F6DB17]">Vitalício!</span>
            </h2>
          </div>

          {/* Pricing Box */}
          <div className="bg-black/60 border border-slate-800 rounded-2xl p-6 sm:p-8 text-center mb-8">
            <div className="text-slate-400 line-through text-base mb-1">
              De {siteConfig.priceOriginal}
            </div>

            <p className="text-sm font-semibold text-white uppercase tracking-wider mb-2">
              Por Apenas
            </p>

            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-white">12 x</span>
              <span className="text-4xl sm:text-6xl font-black text-[#F6DB17] tracking-tight">
                {siteConfig.installmentValue}
              </span>
            </div>

            <p className="text-sm sm:text-base text-slate-300 font-medium">
              ou <strong className="text-white text-lg">R$ 147,00</strong> à vista
            </p>
          </div>

          {/* Checklist dos itens originais */}
          <div className="space-y-3 mb-10 max-w-md mx-auto">
            {inclusions.map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-slate-200 text-base sm:text-lg">
                <div className="w-5 h-5 rounded-full bg-[#F6DB17]/20 text-[#F6DB17] flex items-center justify-center shrink-0">
                  <CheckIcon className="w-4 h-4 text-[#F6DB17]" />
                </div>
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>

          {/* Checkout CTA Original */}
          <div className="text-center space-y-4">
            <a
              href={siteConfig.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pulse-cta w-full inline-flex flex-col items-center justify-center py-5 sm:py-6 px-6 sm:px-10 rounded-2xl bg-[#F6DB17] hover:bg-[#E5CB0D] text-black shadow-2xl shadow-[#F6DB17]/40 transition-all hover:scale-[1.02]"
            >
              <div className="flex items-center gap-2 font-black text-xl sm:text-2xl uppercase">
                <ZapIcon className="w-6 h-6 fill-black text-black" />
                <span>inscrição com desconto!</span>
              </div>
              <span className="text-xs sm:text-sm font-bold text-black/80 mt-1">
                E comece a Criar Vídeos com IA agora mesmo!
              </span>
            </a>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 pt-2">
              <span className="flex items-center gap-1">
                <LockIcon className="w-4 h-4 text-emerald-400" /> Pagamento Seguro via Kiwify
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <ShieldCheckIcon className="w-4 h-4 text-emerald-400" /> Garantia incondicional de 7 dias
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
