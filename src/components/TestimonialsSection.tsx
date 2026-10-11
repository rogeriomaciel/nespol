export function TestimonialsSection() {
  const testimonials = [
    {
      image: '/images/nespol/DEPOIMENTO-NESPOL-ALUNO-min-1-1.webp',
      alt: 'Depoimento de aluno da Área de Membros Nespol',
    },
    {
      image: '/images/nespol/DEPOIMENTO-AREA-DE-MEMBROS-NESPOL-2025-ALUNOS-SATISFEITOS-1-min-1-1.webp',
      alt: 'Depoimento Aluno Nespol Criar Vídeos com IA',
    },
    {
      image: '/images/nespol/DEPOIMENTO-AREA-DE-MEMBROS-NESPOL-2025-ALUNOS-SATISFEITOS-2-min-1-1.webp',
      alt: 'Avaliação de aluno satisfeito Nespol',
    },
    {
      image: '/images/nespol/DEPOIMENTO-AREA-DE-MEMBROS-NESPOL-2025-ALUNOS-SATISFEITOS-3-min-1-1.webp',
      alt: 'Feedback da comunidade Nespol',
    },
    {
      image: '/images/nespol/DEPOIMENTO-AREA-DE-MEMBROS-NESPOL-2025-ALUNOS-SATISFEITOS-4-min-1-1.webp',
      alt: 'Resultado de aluno criando vídeos com IA',
    },
    {
      image: '/images/nespol/DEPOIMENTO-AREA-DE-MEMBROS-NESPOL-2025-ALUNOS-SATISFEITOS-5-min-1-1.webp',
      alt: 'Aluno elogiando suporte e aulas da Nespol',
    },
    {
      image: '/images/nespol/DEPOIMENTO-AREA-DE-MEMBROS-NESPOL-2025-ALUNOS-SATISFEITOS-6-min-1-1.webp',
      alt: 'Depoimento de canal no YouTube criado com IA',
    },
    {
      image: '/images/nespol/DEPOIMENTO-AREA-DE-MEMBROS-NESPOL-2025-ALUNOS-SATISFEITOS-7-min-1-1.webp',
      alt: 'Aluno faturando com vídeos animados',
    },
  ];

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-[#080C14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Literal do Original */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase mb-4">
            Avaliação <span className="text-[#F6DB17]">de alunos</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Obrigado pela confiança e carinho dos <strong className="text-white">mais de 5 Mil alunos</strong> que estão comigo na Área de Membros Nespol.
          </p>
        </div>

        {/* Testimonials Prints Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl overflow-hidden border border-slate-800/80 hover:border-[#F6DB17]/40 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center p-3 bg-slate-900/60"
            >
              <img
                src={item.image}
                alt={item.alt}
                width={360}
                height={200}
                className="w-full h-auto object-contain rounded-xl"
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
