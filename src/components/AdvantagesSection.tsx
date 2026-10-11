import { VideoIcon, InfinityIcon, LaptopIcon, ShieldCheckIcon, MessageSquareIcon, SparklesIcon } from './Icons';

export function AdvantagesSection() {
  const advantages = [
    {
      title: 'Videoaulas Práticas',
      description: 'Disponibilizamos aulas práticas mostrando o passo a passo direto na tela do computador sem enrolação. Você pode assistir as aulas quantas vezes quiser no seu ritmo.',
      icon: VideoIcon,
      accent: 'text-[#F6DB17]',
    },
    {
      title: 'Acesso Vitalício ao conteúdo online',
      description: 'Você terá atualizações futuras disponíveis. Sempre que os programas ensinados no curso passarem por atualização, nós também atualizamos as aulas ou adicionamos novos vídeos em nossa área do aluno.',
      icon: InfinityIcon,
      accent: 'text-emerald-400',
    },
    {
      title: 'Área do Aluno Rápida e Fácil de Acessar',
      description: 'O Aluno terá acesso a uma área do aluno organizada, separada por módulos, fácil de mexer e com todo o conteúdo disponível imediatamente. O curso é 100% online e a área do aluno fica em nosso site nespol.com.br',
      icon: LaptopIcon,
      accent: 'text-blue-400',
    },
    {
      title: 'Garantia incondicional de 7 dias',
      description: 'Se por qualquer motivo não gostar das nossas aulas até 7 dias após sua compra, pode enviar um email solicitando o cancelamento da sua compra que devolvemos todo seu investimento.',
      icon: ShieldCheckIcon,
      accent: 'text-purple-400',
    },
    {
      title: 'Suporte Vip com o instrutor',
      description: 'Qualquer dúvida que surgir durante as aulas, você pode enviar uma mensagem direto para o instrutor e tirar suas dúvidas sobre o conteúdo do curso.',
      icon: MessageSquareIcon,
      accent: 'text-amber-400',
    },
    {
      title: 'vários cursos dentro da área de membros',
      description: 'Dentro da área de membros, você encontrará vários cursos com diferentes temas sobre criação de vídeos e imagens com Inteligência Artificial e outras ferramentas criativas. (Cursos Livres com base no Decreto Presidencial N° 5.154.)',
      icon: SparklesIcon,
      accent: 'text-red-400',
    },
  ];

  return (
    <section id="vantagens" className="py-16 md:py-24 bg-[#080C14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Original */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#F6DB17] mb-2 block">
            vantagens da área de membros
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
            Aprenda Passo a Passo Direto na Tela do Computador
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
            Todas as nossas aulas são <strong className="text-white">em português do Brasil</strong>, mostrando o <strong className="text-[#F6DB17]">passo a passo direto na tela do computador, sem enrolação</strong>. Você vai aprender com as Videoaulas dentro da nossa área de Membros: Como usar as Melhores Ferramentas e Inteligências Artificiais e programas para Criar Vídeos, Imagens, Edição e Dicas incríveis.
          </p>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            Respeitamos o seu tempo e estamos <strong className="text-white">focados em te ajudar</strong> a aprender o mais rápido possível, mesmo que você não saiba nada sobre edição de vídeos animados, ou nunca tenha feito nenhum vídeo animado antes na sua vida.
          </p>
        </div>

        {/* 6 Advantages Cards com Textos Literais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, index) => {
            const IconComponent = adv.icon;
            return (
              <div
                key={index}
                className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800/80 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 flex items-center justify-center mb-5">
                  <IconComponent className={`w-6 h-6 ${adv.accent}`} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5">
                  {adv.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {adv.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
