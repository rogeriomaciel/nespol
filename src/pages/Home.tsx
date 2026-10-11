import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { ApplicationsSection } from '../components/ApplicationsSection';
import { ModulesSection } from '../components/ModulesSection';
import { BonusSection } from '../components/BonusSection';
import { AdvantagesSection } from '../components/AdvantagesSection';
import { PricingSection } from '../components/PricingSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { GuaranteeSection } from '../components/GuaranteeSection';
import { InstructorSection } from '../components/InstructorSection';
import { FaqAccordion } from '../components/FaqAccordion';
import { Footer } from '../components/Footer';
import { StickyBottomBar } from '../components/StickyBottomBar';

export function Home() {
  return (
    <div className="min-h-screen bg-[#080C14] text-slate-100 selection:bg-[#F6DB17] selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <ApplicationsSection />
        <ModulesSection />
        <BonusSection />
        <AdvantagesSection />
        <PricingSection />
        <TestimonialsSection />
        <GuaranteeSection />
        <InstructorSection />
        <FaqAccordion />
      </main>
      <Footer />
      <StickyBottomBar />
    </div>
  );
}

export default Home;
