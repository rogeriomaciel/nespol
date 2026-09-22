import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { MetricsGrid } from '../components/MetricsGrid';
import { SocialProof } from '../components/SocialProof';
import { FaqAccordion } from '../components/FaqAccordion';
import { Footer } from '../components/Footer';
import { WhatsAppCTA } from '../components/WhatsAppCTA';
import { ShieldCheckIcon, CheckCircle2Icon, AwardIcon } from '../components/Icons';

export function Lp2() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar
        ctaText="Agendar Perícia Gratuita"
        whatsappMessage="Olá! Quero agendar a Perícia Técnica Gratuita do meu site para descobrir como torná-lo mais rápido e converter mais."
      />
      <main>
        <Hero
          badgeText="🎁 OFERTA ESPECIAL • PERÍCIA TÉCNICA DE ENGENHARIA 100% GRATUITA"
          title="Descubra Exatamente O Que Trava as Vendas do Seu"
          highlightedText="Site Atual"
          subtitle="Auditamos seu site com os mesmos instrumentos usados pelo Google. Receba um raio-x completo apontando scripts lentos, fuga de clientes e estimativa de faturamento recuperável."
          ctaText="Receber Minha Perícia Técnica Gratuita"
          whatsappMessage="Olá! Gostaria de receber a Perícia Técnica Gratuita para o meu site."
          stats={[
            { label: 'Custo da Análise', value: 'R$ 0,00' },
            { label: 'Tempo de Resposta', value: '10 min' },
            { label: 'Relatório Oficial', value: 'PDF / Vídeo' },
          ]}
        />

        {/* Como funciona a perícia */}
        <section className="py-16 bg-blue-50/40 dark:bg-blue-950/20 border-y border-blue-200/60 dark:border-blue-900/40">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-3">
                Como Funciona a Sua Perícia Gratuita?
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Processo direto, transparente e sem empurroterapia comercial.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-6 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-black text-lg flex items-center justify-center mb-4">1</div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">Envie o Link do Site</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Você só precisa mandar o link atual do seu site ou da sua página de vendas no WhatsApp.</p>
              </div>

              <div className="glass-card p-6 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-black text-lg flex items-center justify-center mb-4">2</div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">Engenheiro Audita em 10 Min</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Medimos LCP, FCP, TTFB, vazamento de memória e número de requisições no celular.</p>
              </div>

              <div className="glass-card p-6 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-black text-lg flex items-center justify-center mb-4">3</div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">Plano de Ação Pronto</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Você recebe o diagnóstico e a proposta exata para ter um site Bare-Metal com garantia 95+.</p>
              </div>
            </div>
          </div>
        </section>

        <MetricsGrid />
        <SocialProof />
        <FaqAccordion />

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <WhatsAppCTA
              variant="card"
              buttonText="Quero Minha Perícia Técnica Gratuita Agora"
              subtext="Fale diretamente com Rogério Maciel e sua equipe de engenharia pelo WhatsApp."
              message="Olá! Quero enviar meu link para a Perícia Gratuita agora."
            />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppCTA variant="floating" />
    </div>
  );
}
export default Lp2;
