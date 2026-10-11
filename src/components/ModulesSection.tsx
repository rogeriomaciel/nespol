import { SparklesIcon, CheckCircle2Icon } from './Icons';

export function ModulesSection() {
  const modules = [
    {
      title: 'Aula de Boas Vindas',
      tag: 'Módulo 01',
      image: '/images/nespol/Aula-Introdutoria-Membros-Nespol-Videos-com-IA.webp',
      description: 'Saiba como Funciona a Área de Membros da Nespol - Criar Vídeos com IA. Depois conheça um pouco sobre o Instrutor Cris. Veja também como funciona a plataforma para assistir suas aulas pelo Computador ou Celular. Explico também sobre os Bônus, Suporte e Atualizações dos Cursos.',
    },
    {
      title: 'Gerar Imagens com IA',
      tag: 'Módulo 02',
      image: '/images/nespol/Gerar-Imagens-com-IA-Membros-Nespol-Videos-com-IA.webp',
      description: 'Neste módulo, você vai aprender passo a passo como criar imagens incríveis usando ferramentas de IA. Vamos explorar diferentes plataformas, ajustar prompts para obter resultados profissionais e descobrir truques para gerar estilos Realistas, 3D, Desenhos e efeitos. Você estará pronto para criar imagens personalizadas.',
    },
    {
      title: 'Voz e Música com IA',
      tag: 'Módulo 03',
      image: '/images/nespol/Voz-e-Musica-com-IA-Membros-Nespol-Videos-com-IA.webp',
      description: 'Neste módulo, você vai aprender a gerar voz realista com IA e também produzir músicas com Inteligência Artificial, desde a melodia até a letra. Vai descobrir como gerar vários estilos de vozes e narrações batidas, vocais e trilhas sonoras originais para vídeos e projetos online.',
    },
    {
      title: 'TikTok Shop Afiliados',
      tag: 'Novidade 🔥',
      image: '/images/nespol/Metodo-TikTok-Shop-Afiliados-com-IA-Membros-Nespol-Videos-com-IA.webp',
      description: 'Novo Módulo Adicionado (Novidade). Aprenda como Vender no TikTok Shop passo a passo do Zero. Mesmo que você não queira aparecer, é possível vender através de vídeos feitos com Inteligência Artificial. Te mostro tudo na prática.',
      isNew: true,
    },
    {
      title: 'Trends Virais com IA',
      tag: 'Módulo 05',
      image: '/images/nespol/Trends-Virais-com-IA-Membros-Nespol-Videos-com-IA.webp',
      description: 'Aprenda a fazer os vídeos das Trends mais Virais da Internet usando inteligências artificiais fáceis de usar. Trends de Imagens, de Animação, de Vídeo Realista, para redes sociais e viralize seus vídeos de forma criativa e divertida.',
    },
    {
      title: 'Criar Vídeos com IA',
      tag: 'Módulo 06',
      image: '/images/nespol/Criar-Videos-Animados-com-IA-Membros-Nespol-Videos-com-IA.webp',
      description: 'Você vai dominar o uso de plataformas que criam animações com inteligência artificial, trazendo vida a textos, vozes e personagens em minutos, sem precisar saber desenhar ou ter qualquer experiência em Edição. Te ensino as minhas ferramentas favoritas de IA para criar Vídeos Animados e Vídeos Realistas.',
    },
    {
      title: 'Influencer UGC com IA',
      tag: 'Módulo 07',
      image: '/images/nespol/VIDEOS-UGC-INFLUENCER-TIKTOKER-COM-IA-NESPOL1.webp',
      description: 'Passo a passo para Criar sua própria Influencer Tiktoker Realista com IA. Movimentos reais para vender no TikTok Shop ou em outras plataformas. Prompts disponíveis junto com as aulas para ajudar na geração dos seus Vídeos Estilo UGC.',
    },
    {
      title: 'Vídeos Realistas com IA',
      tag: 'Módulo 08',
      image: '/images/nespol/Fazer-Videos-Realistas-com-IA-Membros-Nespol-Videos-com-IA.webp',
      description: 'Aprenda como Criar Vídeos Realistas Cinematográficos de vários estilos. Ensino a fazer personagens realistas, cenários cinematográficos, guia de ângulos e câmeras para posicionar suas cenas e muito mais.',
    },
    {
      title: 'Animação Videoscribe',
      tag: 'Módulo 09',
      image: '/images/nespol/CURSO-DE-ANIMACAO-VIDEOSCRIBE-min-1-1.webp',
      description: 'Aprenda a usar o Videoscribe para fazer vídeos com o estilo de "mão desenhando" whiteboard, muito usado em vídeos educativos e publicitários. Simples, direto e com grande poder de comunicação visual. Estilo Whiteboard é o queridinho de muitos canais no YouTube.',
    },
    {
      title: 'Gravadores de Tela',
      tag: 'Módulo 10',
      image: '/images/nespol/CURSO-GRAVADORES-DE-TELA-min-1-1.webp',
      description: 'Aqui você vai aprender a gravar o que aparece no seu computador, ideal pra tutoriais, aulas, demonstrações e vídeos explicativos. Vou te mostrar ferramentas fáceis para Screencasts, além de dicas pra capturar áudio e imagem com qualidade, mesmo sem microfone profissional.',
    },
    {
      title: 'Editor Clipchamp',
      tag: 'Módulo 11',
      image: '/images/nespol/CURSO-DE-CLIPCHAMP-min-1-1.webp',
      description: 'Agora que você já tem animações e gravações, chegou a hora de editar! O Clipchamp é um editor gratuito da Microsoft, muito fácil de usar. Você vai aprender a cortar, adicionar músicas, colocar texto, transições e deixar seu vídeo com cara de profissional, sem precisar baixar programas complicados.',
    },
    {
      title: 'Editar Vídeo no Celular',
      tag: 'Módulo 12',
      image: '/images/nespol/CURSO-DE-EDITOR-CAPCUT-CELULAR-min-1-1.webp',
      description: 'Neste módulo, você vai aprender a editar vídeos diretamente pelo celular usando o CapCut. Vai descobrir como cortar, ajustar ritmo, adicionar legendas automáticas, trilhas sonoras, efeitos e transições que deixam seus vídeos com aparência de estúdio, mesmo para quem está começando.',
    },
  ];

  return (
    <section id="modulos" className="py-16 md:py-24 bg-[#080C14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F6DB17]/10 border border-[#F6DB17]/30 text-xs sm:text-sm font-semibold text-[#F6DB17] mb-3">
            <SparklesIcon className="w-4 h-4 text-[#F6DB17]" />
            <span>MATERIAIS NOVOS SEMPRE ATUALIZANDO</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Conteúdo da Área de Membros
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Todas as aulas mostram o passo a passo direto na prática. Confira cada módulo disponível imediatamente na plataforma:
          </p>
        </div>

        {/* Vertical Smartphone Style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {modules.map((mod, index) => (
            <div
              key={index}
              className="flex flex-col items-center group transition-all duration-300 hover:-translate-y-2"
            >
              {/* Smartphone Frame Container */}
              <div className="w-full max-w-[280px] sm:max-w-none rounded-[2.2rem] p-2.5 sm:p-3 bg-gradient-to-b from-slate-700/80 via-slate-800/90 to-slate-900 border border-slate-700/70 shadow-2xl group-hover:border-[#F6DB17]/70 group-hover:shadow-[0_0_35px_rgba(246,219,23,0.25)] transition-all duration-300 relative">
                
                {/* Smartphone Speaker / Camera Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center gap-1.5 pointer-events-none">
                  <div className="w-12 h-1 bg-slate-950/80 rounded-full border border-slate-700/40" />
                  <div className="w-2 h-2 rounded-full bg-slate-950 border border-slate-700/40" />
                </div>

                {/* Smartphone Screen (Aspect 2:3 vertical matching exact 320x480 resolution) */}
                <div className="relative w-full aspect-[2/3] rounded-[1.6rem] overflow-hidden bg-black border border-slate-900 shadow-inner">
                  <img
                    src={mod.image}
                    alt={mod.title}
                    width={320}
                    height={480}
                    className="w-full h-full object-contain block transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Badge floating on screen */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-md shadow-md uppercase tracking-wider ${
                      mod.isNew
                        ? 'bg-red-500 text-white animate-pulse'
                        : 'bg-black/85 backdrop-blur-md text-[#F6DB17] border border-[#F6DB17]/40'
                    }`}>
                      {mod.tag}
                    </span>
                  </div>
                </div>

                {/* Smartphone Home Indicator bar at bottom */}
                <div className="w-16 h-1 bg-slate-600/40 rounded-full mx-auto mt-2" />
              </div>

              {/* Module Text Info under Phone */}
              <div className="w-full mt-4 text-center px-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-[#F6DB17] transition-colors leading-snug">
                    {mod.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed text-center">
                    {mod.description}
                  </p>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-center gap-1.5 text-[11px] font-semibold text-emerald-400">
                  <CheckCircle2Icon className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Acesso Imediato</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA within modules */}
        <div className="mt-16 text-center">
          <a
            href="#oferta"
            className="pulse-cta inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-black text-base sm:text-lg bg-[#F6DB17] hover:bg-[#E5CB0D] text-black shadow-2xl shadow-[#F6DB17]/30 transition-all hover:scale-105"
          >
            <span>QUERO ACESSAR TODOS OS MÓDULOS AGORA</span>
          </a>
        </div>

      </div>
    </section>
  );
}
