export function GuaranteeSection() {
  return (
    <section id="garantia" className="py-16 md:py-24 bg-[#05080E] border-y border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-card rounded-3xl p-6 sm:p-10 md:p-12 border border-slate-800 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          
          {/* Guarantee Badge Image */}
          <div className="shrink-0 max-w-[220px] sm:max-w-[260px]">
            <img
              src="/images/nespol/AREA-DE-MEMBROS-CRIAR-VIDEOS-ANIMADOS-GARANTIA-min-1-1.webp"
              alt="Garantia de 7 dias Nespol"
              width={260}
              height={260}
              className="w-full h-auto object-contain drop-shadow-2xl"
              loading="lazy"
            />
          </div>

          {/* Guarantee Copy Literal */}
          <div className="text-center md:text-left flex-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 uppercase">
              Garantia <span className="text-[#F6DB17]">de 7 dias</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Se por algum motivo não ficar satisfeito com nossas aulas, é só mandar um email que devolvemos o seu investimento. Você pode acessar por 7 dias, testar e ver se o conteúdo serve para você ou não. Nós assumimos o risco para você.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
