import { ZapIcon, YouTubeIcon, ShieldCheckIcon, InfinityIcon } from './Icons';
import { siteConfig } from '../config/site.config';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F6DB17]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Titles - Textos Exatos do Site Original */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.15] mb-4 uppercase">
            APRENDA A CRIAR VÍDEOS QUE GERAM RESULTADOS <br />
            <span className="text-[#F6DB17]">
              É MAIS FÁCIL DO QUE VOCÊ IMAGINA!
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 font-medium max-w-3xl mx-auto leading-relaxed">
            Domine as Melhores Ferramentas e <strong className="text-white">IAs</strong> para <strong className="text-[#F6DB17]">Criar Vídeos e Lucrar</strong>. Bora começar hoje mesmo!
          </p>
        </div>

        {/* Botão Conheça Nosso Trabalho + Badge +320K */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#beneficios"
            className="pulse-cta inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-black text-base sm:text-lg bg-[#F6DB17] hover:bg-[#E5CB0D] text-black shadow-2xl shadow-[#F6DB17]/30 transition-all hover:scale-105 uppercase tracking-wide"
          >
            <ZapIcon className="w-5 h-5 fill-black text-black" />
            <span>CONHEÇA NOSSO TRABALHO</span>
          </a>

          <a
            href={siteConfig.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-4 rounded-2xl bg-red-950/40 border border-red-500/40 text-red-200 hover:bg-red-900/50 transition-colors font-bold text-sm sm:text-base"
          >
            <YouTubeIcon className="w-5 h-5 text-red-500" />
            <span>+ 320K YOUTUBE</span>
          </a>
        </div>

        {/* Hero Banner / Mockup Oficial */}
        <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden p-2 sm:p-4 bg-gradient-to-b from-slate-800/60 to-slate-900/60 border border-slate-700/60 shadow-2xl glow-yellow">
          <div className="relative rounded-2xl overflow-hidden bg-slate-950">
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet="/images/nespol/Criar-Videos-Animados-IA-Banner-Kiwify-1-mobile.webp"
                type="image/webp"
              />
              <img
                src="/images/nespol/Criar-Videos-Animados-IA-Banner-Kiwify-1.webp"
                alt="Criar Vídeos Animados com IA - Área de Membros Nespol"
                width={1200}
                height={675}
                className="w-full h-auto object-cover rounded-2xl"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </picture>
          </div>

          {/* Badge flutuante dos alunos */}
          <div className="absolute -bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 sm:left-10 sm:translate-x-0 glass-card px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl border-[#F6DB17]/40 flex items-center gap-3 shadow-2xl">
            <img
              src="/images/nespol/alunos-criar-videos-animados-ia.webp"
              alt="Alunos Satisfeitos Nespol"
              width={120}
              height={36}
              className="h-8 w-auto object-contain"
            />
            <div className="text-left">
              <p className="text-xs sm:text-sm font-black text-white">+ 5 Mil Alunos</p>
              <p className="text-[10px] sm:text-xs text-slate-400">Na Área de Membros Nespol</p>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-12 text-xs sm:text-sm text-slate-400">
          <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
            <InfinityIcon className="w-4 h-4 text-emerald-400" /> Acesso Vitalício
          </span>
          <span>•</span>
          <span className="text-white font-bold">
            12 x R$ 15,20 ou R$ 147,00 à vista
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
            <ShieldCheckIcon className="w-4 h-4 text-emerald-400" /> Garantia incondicional de 7 dias
          </span>
        </div>

      </div>
    </section>
  );
}
