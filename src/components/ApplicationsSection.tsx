import { VideoIcon, SparklesIcon, TrendingUpIcon, CoinsIcon, UsersIcon, ZapIcon } from './Icons';

export function ApplicationsSection() {
  const items = [
    {
      text: 'Crie Vídeos Animados de Vários Estilos com Inteligência Artificial e outras Ferramentas.',
      icon: SparklesIcon,
      color: 'text-amber-400',
    },
    {
      text: 'Crie Animações incríveis para o seu canal no YouTube e ganhe mais inscritos para o seu Canal Dark.',
      icon: VideoIcon,
      color: 'text-red-400',
    },
    {
      text: 'Faça Vídeos e Imagens para empresas e divulgue seus produtos ou serviços de forma clara.',
      icon: UsersIcon,
      color: 'text-blue-400',
    },
    {
      text: 'Crie Animações para Marketing Digital, Infoprodutos, trabalho como Afiliado e Vendas Online.',
      icon: CoinsIcon,
      color: 'text-emerald-400',
    },
    {
      text: 'Crie Vídeos Animados Virais para redes sociais (YouTube, Instagram, Facebook, Google, TikTok e etc).',
      icon: TrendingUpIcon,
      color: 'text-purple-400',
    },
    {
      text: 'Crie Animações para seu projeto online, mesmo sem saber desenhar, usando as Ferramentas e IAs automáticas.',
      icon: ZapIcon,
      color: 'text-[#F6DB17]',
    },
  ];

  return (
    <section id="beneficios" className="py-16 md:py-24 bg-[#05080E] border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Original */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase leading-tight">
            TRANSFORME IDEIAS EM CONTEÚDOS <br className="hidden sm:inline" />
            <span className="text-[#F6DB17]">E GERE RESULTADOS ONLINE</span>
          </h2>
        </div>

        {/* 6 Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="glass-card p-6 sm:p-7 rounded-2xl border border-slate-800/80 hover:border-[#F6DB17]/50 transition-all duration-300 hover:-translate-y-1 group flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-800/90 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <IconComponent className={`w-6 h-6 ${item.color}`} />
                </div>

                <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
