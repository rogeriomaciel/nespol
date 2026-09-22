import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { ValueSimulator } from '../components/ValueSimulator';
import { FaqAccordion } from '../components/FaqAccordion';
import { Footer } from '../components/Footer';
import { WhatsAppCTA } from '../components/WhatsAppCTA';
import { FlameIcon, ClockIcon, ZapIcon } from '../components/Icons';

export function Lp1() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar
        ctaText="Parar de Perder Leads"
        whatsappMessage="Olá! Quero parar de perder leads na tela branca do meu site. Preciso de uma LP Bare-Metal urgente."
      />
      <main>
        <Hero
          badgeText="🚨 ALERTA DE TRÁFEGO • 65% DOS SEUS CLIQUES FOGEM ANTES DE ABRIR"
          title="Pare de Queimar Dinheiro em Anúncios com"
          highlightedText="Site Lento"
          subtitle="Se o seu site demora mais de 3 segundos para carregar no celular, mais da metade dos visitantes desiste antes de ver sua oferta. Nós recriamos seu site para carregar em 0.4s."
          ctaText="Quero Parar de Queimar Verba no WhatsApp"
          whatsappMessage="Olá! Vi a LP1 sobre queima de verba em anúncios. Gostaria de uma análise do tempo de abertura do meu site."
          stats={[
            { label: 'Tempo Médio de Fuga', value: '3.2s' },
            { label: 'Abandono por Lentidão', value: '65%' },
            { label: 'Velocidade Bare-Metal', value: '0.4s' },
          ]}
        />

        {/* Section Dor Aguda */}
        <section className="py-16 bg-rose-50/40 dark:bg-rose-950/20 border-y border-rose-200/60 dark:border-rose-900/40">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-500 flex items-center justify-center mx-auto mb-3">
                <FlameIcon className="w-7 h-7" />
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-3">
                O Problema Não é o Seu Gestor de Tráfego
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Você investe R$ 3.000, R$ 5.000 ou R$ 10.000 em anúncios todo mês. O clique é pago, mas o visitante dá de cara com uma tela branca carregando scripts pesados de WordPress e desiste.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-6 rounded-2xl border-rose-500/30">
                <ClockIcon className="w-6 h-6 text-rose-500 mb-3" />
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">53% dos Usuários</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Desistem de qualquer site móvel que demore mais de 3 segundos para renderizar (Google Web Vitals).</p>
              </div>
              <div className="glass-card p-6 rounded-2xl border-rose-500/30">
                <FlameIcon className="w-6 h-6 text-rose-500 mb-3" />
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">CPC Dobrado</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Você paga o dobro ou triplo por cada lead efetivo porque perde dois terços dos cliques pelo caminho.</p>
              </div>
              <div className="glass-card p-6 rounded-2xl border-emerald-500/30">
                <ZapIcon className="w-6 h-6 text-emerald-500 mb-3" />
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">A Solução Bare-Metal</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Compilamos tudo em HTML estático ultrarrápido. O anúncio é clicado e o site abre instantaneamente.</p>
              </div>
            </div>
          </div>
        </section>

        <ValueSimulator />
        <FaqAccordion />

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <WhatsAppCTA
              variant="card"
              buttonText="Fazer o Teste de Velocidade do Meu Site"
              subtext="Envie o link do seu site no WhatsApp e nosso engenheiro enviará o relatório exato de perda em minutos."
              message="Olá! Quero enviar o link do meu site atual para vocês medirem a velocidade no WhatsApp."
            />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppCTA variant="floating" />
    </div>
  );
}
export default Lp1;
