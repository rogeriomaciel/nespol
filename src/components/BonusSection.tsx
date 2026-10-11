import { GiftIcon, CheckCircle2Icon } from './Icons';

export function BonusSection() {
  const bonuses = [
    {
      title: 'Animação com Canva',
      tag: 'Bônus Especial 01',
      image: '/images/nespol/CURSO-DE-ANIMACAO-COM-CANVA-min-1-1.webp',
      description: 'Use o Canva de forma avançada para criar vídeos animados modernos e impactantes. Ideal para conteúdos em redes sociais, marketing digital e vídeos explicativos. Vamos fazer coisas incríveis com o Canva que você nem imaginava que era possível.',
      value: 'R$ 147,00',
    },
    {
      title: 'Animação Animaker',
      tag: 'Bônus Especial 02',
      image: '/images/nespol/CURSO-DE-ANIMACAO-ANIMAKER-min-1-1.webp',
      description: 'Esse módulo é pra quem curte vídeos mais dinâmicos, com infográficos, personagens, ícones e textos animados. O Animaker é ótimo pra criar vídeos com visual profissional, seja pra empresas, conteúdos educativos ou redes sociais.',
      value: 'R$ 147,00',
    },
    {
      title: 'Animação Plotagon 3D',
      tag: 'Bônus Especial 03',
      image: '/images/nespol/CURSO-DE-ANIMACAO-PLOTAGON-3D-min-1-1.webp',
      description: 'Nesse módulo, você vai aprender a usar o Plotagon, uma ferramenta que permite criar personagens em 3D, fazer eles falarem, se mexerem e até atuarem em uma história que você mesmo cria. Perfeito pra quem quer fazer vídeos com "pegada de animação".',
      value: 'R$ 197,00',
    },
    {
      title: 'Animação Toonly',
      tag: 'Bônus Especial 04',
      image: '/images/nespol/CURSO-DE-ANIMACAO-TOONLY-min-1-1.webp',
      description: 'Sabe aqueles vídeos com personagens animados explicando alguma coisa? Então, é isso que você vai aprender aqui. O Toonly é super intuitivo e ótimo pra fazer vídeos pra vender produtos, explicar ideias ou criar conteúdo divertido.',
      value: 'R$ 127,00',
    },
    {
      title: 'Animação Doodly',
      tag: 'Bônus Especial 05',
      image: '/images/nespol/CURSO-DE-ANIMACAO-DOODLY-min-1-1.webp',
      description: 'Você já deve ter visto aqueles vídeos em que uma mão vai desenhando enquanto alguém narra, super envolventes, né? Aqui você vai aprender a criar esse tipo de animação com o Doodly. É ótimo pra contar histórias, fazer vídeos educativos e manter a atenção de quem assiste.',
      value: 'R$ 127,00',
    },
  ];

  return (
    <section id="bonus" className="py-16 md:py-24 bg-[#05080E] border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm font-bold text-emerald-400 mb-3">
            <GiftIcon className="w-4 h-4 text-emerald-400" />
            <span>DISPONÍVEIS IMEDIATAMENTE APÓS A INSCRIÇÃO!</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            + Conteúdos Bônus
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Além de todos os módulos de IA, você ganha acesso completo a esses 5 treinamentos adicionais:
          </p>
        </div>

        {/* Smartphone Style Bonus Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-6">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="flex flex-col items-center group transition-all duration-300 hover:-translate-y-2"
            >
              {/* Phone Frame */}
              <div className="w-full max-w-[260px] sm:max-w-none rounded-[2rem] p-2.5 bg-gradient-to-b from-slate-700/80 via-slate-800/90 to-slate-900 border border-slate-700/70 shadow-2xl group-hover:border-emerald-500/70 group-hover:shadow-[0_0_35px_rgba(16,185,129,0.25)] transition-all duration-300 relative">
                
                {/* Phone Speaker Notch */}
                <div className="absolute top-3.5 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center gap-1.5 pointer-events-none">
                  <div className="w-10 h-1 bg-slate-950/80 rounded-full border border-slate-700/40" />
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-950 border border-slate-700/40" />
                </div>

                {/* Screen with exact aspect ratio 2:3 */}
                <div className="relative w-full aspect-[2/3] rounded-[1.4rem] overflow-hidden bg-black border border-slate-900 shadow-inner">
                  <img
                    src={bonus.image}
                    alt={bonus.title}
                    width={320}
                    height={480}
                    className="w-full h-full object-contain block transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Top tags */}
                  <div className="absolute top-2.5 left-2.5 z-10">
                    <span className="text-[10px] font-black px-2 py-0.5 rounded bg-emerald-500 text-black shadow-md">
                      GRÁTIS
                    </span>
                  </div>
                </div>

                {/* Home Indicator */}
                <div className="w-12 h-1 bg-slate-600/40 rounded-full mx-auto mt-2" />
              </div>

              {/* Bonus Info */}
              <div className="w-full mt-3.5 text-center px-1 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors leading-snug">
                    {bonus.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed text-center">
                    {bonus.description}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-center gap-1.5 text-[11px] font-bold text-emerald-400">
                  <CheckCircle2Icon className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Bônus 100% Grátis</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
