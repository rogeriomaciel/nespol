import { useState } from 'react';
import { ChevronDownIcon, HelpCircleIcon } from './Icons';

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  title?: string;
  subtitle?: string;
  items?: FaqItem[];
}

export function FaqAccordion({
  title = 'Perguntas Frequentes',
  subtitle = 'Tudo o que você precisa saber sobre a entrega, hospedagem e garantia.',
  items = [
    {
      question: 'Eu preciso mudar a identidade visual ou design do meu site atual?',
      answer: 'Não! Podemos manter exatamente a identidade visual, cores e layout da sua marca se você preferir. Nós substituímos a infraestrutura interna: trocamos WordPress e dezenas de plugins por código puro Bare-Metal compilado.',
    },
    {
      question: 'Como funciona a Garantia de Performance em Contrato?',
      answer: 'Garantimos em contrato que a página atingirá Nota 95+ no Google PageSpeed Mobile oficial e abrirá em menos de 1 segundo. Se não atingir esse padrão de engenharia, ajustamos sem custo adicional ou devolvemos 100% do valor.',
    },
    {
      question: 'Como o site é hospedado e atualizado?',
      answer: 'O site roda em infraestrutura Bare-Metal otimizada com CDN global de borda e deploy automatizado via CI/CD. Qualquer alteração ou nova página é atualizada instantaneamente sem risco de queda.',
    },
    {
      question: 'Posso ter mais de uma Landing Page para testar públicos diferentes?',
      answer: 'Sim! A arquitetura Bare-Metal suporta múltiplas LPs independentes (ex: /lp1, /lp2, /lp3), cada uma customizada para uma campanha ou oferta específica, todas compartilhando o mesmo padrão de velocidade sub-segundo.',
    },
    {
      question: 'Quanto tempo leva para colocar minha LP no ar?',
      answer: 'O prazo padrão para entrega completa, otimização e homologação é de 3 a 7 dias úteis.',
    },
  ],
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 mb-4">
            <HelpCircleIcon className="w-3.5 h-3.5" />
            <span>TRANSPARÊNCIA TOTAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl overflow-hidden border-slate-200 dark:border-slate-800 transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 text-left font-bold text-base sm:text-lg text-slate-900 dark:text-white flex items-center justify-between gap-4"
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <ChevronDownIcon
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-500' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
