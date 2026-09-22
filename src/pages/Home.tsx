import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { ComparisonTable } from '../components/ComparisonTable';
import { ValueSimulator } from '../components/ValueSimulator';
import { MetricsGrid } from '../components/MetricsGrid';
import { SocialProof } from '../components/SocialProof';
import { FaqAccordion } from '../components/FaqAccordion';
import { Footer } from '../components/Footer';
import { WhatsAppCTA } from '../components/WhatsAppCTA';

export function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ComparisonTable />
        <ValueSimulator />
        <MetricsGrid />
        <SocialProof />
        <FaqAccordion />

        {/* Closing Final CTA Card */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <WhatsAppCTA
              variant="card"
              buttonText="Solicitar Perícia Gratuita no WhatsApp"
              subtext="Receba em menos de 10 minutos uma análise detalhada da perda de tráfego do seu site atual. Sem compromisso e com resposta direta de engenheiro."
              message="Olá! Quero solicitar uma Perícia Técnica Gratuita do meu site atual para entender o ganho de conversão na Arquitetura Bare-Metal."
            />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppCTA variant="floating" />
    </div>
  );
}
export default Home;
