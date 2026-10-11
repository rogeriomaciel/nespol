import { ZapIcon } from './Icons';
import { siteConfig } from '../config/site.config';

export function InstructorSection() {
  return (
    <section className="py-16 md:py-24 bg-[#080C14]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card Cris e Luma - Fundo Branco */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 text-center flex flex-col items-center shadow-2xl">
          
          {/* Imagem Cris e Luma - Sem Cortes */}
          <div className="mb-6 max-w-[320px] w-full flex items-center justify-center">
            <img
              src="/images/nespol/CRIS-E-LUMA-CANAL-NESPOL-min-1-1.webp"
              alt="Cris e Luma Canal Nespol"
              width={312}
              height={163}
              className="w-full h-auto object-contain block"
              loading="lazy"
            />
          </div>

          {/* Nome e Título Original */}
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6">
            <strong>Cris</strong> e <strong>Luma</strong> da <strong>Nespol Ltda</strong>
          </h2>

          {/* Texto Exato do Site Original */}
          <div className="text-slate-700 text-base sm:text-lg leading-relaxed space-y-5 max-w-2xl mx-auto text-center">
            <p>
              Somos apaixonados por tecnologia e criação digital. Acreditamos que qualquer pessoa pode transformar ideias em vídeos, imagens e apresentações de forma simples e criativa.
            </p>

            <p>
              Por isso, através dos nossos tutoriais gratuitos no{' '}
              <a
                href={siteConfig.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-900 font-bold underline hover:text-black transition-colors"
              >
                YouTube
              </a>
              , já ajudamos milhões de pessoas a usar as melhores ferramentas e inteligências artificiais com praticidade e resultados reais.
            </p>

            <p>
              Além disso, criamos uma{' '}
              <a
                href="#oferta"
                className="text-slate-900 font-bold underline hover:text-black transition-colors"
              >
                Área de Membros
              </a>{' '}
              exclusiva, com mais de 5 mil alunos, para quem quer aprender ainda mais. Nosso propósito é claro: ajudar você a criar conteúdo incrível e alcançar seus objetivos.
            </p>

            <p className="text-xl font-bold text-slate-900 pt-2">
              Vem com a gente!
            </p>
          </div>

          {/* Logo Nespol Centralizado */}
          <div className="mt-8 pt-8 border-t border-slate-200 w-full flex justify-center">
            <img
              src="/images/nespol/LOGO-NESPOL-P-TRANSPARENTE.webp"
              alt="Logo Nespol"
              width={200}
              height={35}
              className="h-8 sm:h-9 w-auto object-contain"
              loading="lazy"
            />
          </div>

        </div>

        {/* Bloco de Inscrição Final Original */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wide mb-3">
            faça sua inscrição e acesse sua área do Aluno criar vídeos animados agora mesmo!
          </p>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
            Após adquirir o acesso a sua ÁREA DE MEMBROS, você receberá imediatamente os dados em seu Email através da Kiwify. Depois, é só acessar e começar a assistir as Aulas no seu ritmo.
          </p>

          <a
            href={siteConfig.checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pulse-cta inline-flex flex-col items-center justify-center px-10 sm:px-14 py-4 sm:py-5 rounded-2xl bg-[#F6DB17] hover:bg-[#E5CB0D] text-black shadow-2xl shadow-[#F6DB17]/30 transition-all hover:scale-105"
          >
            <div className="flex items-center gap-2 font-black text-lg sm:text-xl">
              <ZapIcon className="w-5 h-5 fill-black text-black" />
              <span>Inscrição com desconto</span>
            </div>
            <span className="text-[11px] sm:text-xs font-bold text-black/80 uppercase tracking-widest mt-0.5">
              APROVEITE ESTA OFERTA PROMOCIONAL!
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}
