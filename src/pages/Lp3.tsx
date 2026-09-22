import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { ComparisonTable } from '../components/ComparisonTable';
import { FaqAccordion } from '../components/FaqAccordion';
import { Footer } from '../components/Footer';
import { WhatsAppCTA } from '../components/WhatsAppCTA';
import { ShieldCheckIcon, AwardIcon, CheckCircle2Icon } from '../components/Icons';

export function Lp3() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar
        ctaText="Contratar com Garantia"
        whatsappMessage="Olá! Quero saber mais sobre a Garantia Blindada de Engenharia para recriar meu site na arquitetura Bare-Metal."
      />
      <main>
        <Hero
          badgeText="🛡️ GARANTIA BLINDADA EM CONTRATO • RISCO TÉCNICO ZERO"
          title="Seu Site Abre em < 1s ou"
          highlightedText="Devolvemos 100% do Valor"
          subtitle="Garantimos por escrito que a sua página atingirá Nota 95+ no Google PageSpeed Mobile oficial e carregará em menos de 1 segundo. Se não bater a meta, você não paga nada."
          ctaText="Exigir Garantia Blindada no WhatsApp"
          whatsappMessage="Olá! Vi a LP3 sobre a Garantia Blindada de Engenharia. Quero entender como funciona o contrato."
          stats={[
            { label: 'Meta Contratual', value: 'Nota 95+' },
            { label: 'Tempo Máximo', value: '< 1.0s' },
            { label: 'Risco Para Você', value: 'ZERO' },
          ]}
        />

        {/* Section Cláusula de Garantia */}
        <section className="py-16 bg-emerald-50/30 dark:bg-emerald-950/20 border-y border-emerald-200/60 dark:border-emerald-900/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-16 h-16 rounded-3xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-6 shadow-inner">
              <ShieldCheckIcon className="w-9 h-9" />
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4">
              Por Que Nenhuma Agência Tradicional Dá Essa Garantia?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
              Porque elas usam WordPress, Elementor e dezenas de plugins montados por amadores. Elas não têm controle do código. Nós construímos arquitetura de engenharia Bare-Metal compilada sob medida. Nós sabemos exatamente quantos milissegundos o seu site vai gastar.
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-emerald-500/30 text-sm font-bold text-emerald-700 dark:text-emerald-300 shadow-sm">
              <CheckCircle2Icon className="w-5 h-5 text-emerald-500" />
              <span>Cláusula registrada em contrato formal de prestação de serviços.</span>
            </div>
          </div>
        </section>

        <ComparisonTable />
        <FaqAccordion />

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <WhatsAppCTA
              variant="card"
              buttonText="Garantir Minha Vaga com Garantia Blindada"
              subtext="Atendimento rápido e exclusivo diretamente com nossa equipe técnica."
              message="Olá! Quero contratar o desenvolvimento Bare-Metal com a Garantia Blindada de Engenharia."
            />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppCTA variant="floating" />
    </div>
  );
}
export default Lp3;
