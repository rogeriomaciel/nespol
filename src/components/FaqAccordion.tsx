import { useState } from 'react';
import { ChevronDownIcon } from './Icons';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: 'Como Comprar o Acesso a Área de Membros?',
    answer: 'Para comprar o Acesso a Área de Membros Vitalícia, basta acessar o botão acima escrito: FAÇA SUA INSCRIÇÃO AGORA. Depois é só preencher seus dados de pagamento e concluir a compra. Os dados de acesso serão enviados imediatamente em seu email logo após a confirmação da compra, e você poderá começar a assistir suas aulas agora mesmo!',
  },
  {
    question: 'Como fazer o pagamento da Área de Membros?',
    answer: 'Ao clicar no botão: FAÇA SUA INSCRIÇÃO AGORA, você poderá escolher entre os meios de pagamento disponíveis: Cartão, Boleto ou Pix. Para realizar o pagamento, basta preencher seus dados corretamente. Ao comprar por Cartão ou Pix o acesso será enviado imediatamente ao seu email. Em caso de pagamento por boleto, pode demorar até 2 dias úteis para compensação.',
  },
  {
    question: 'Quantas vezes posso assistir as aulas?',
    answer: 'Pode assistir as aulas quantas vezes precisar com acesso vitalício. As aulas são bem explicadas, mas caso surgir dúvidas, pode voltar e assistir novamente.',
  },
  {
    question: 'O Pagamento é seguro?',
    answer: 'Sim, o pagamento é seguro! Usamos a plataforma Kiwify para gerenciar e administrar os pagamentos. Todas as transações são criptografadas e protegidas.',
  },
  {
    question: 'Como vou receber as aulas?',
    answer: 'A área de membros é 100% online. Você receberá os dados de acesso por email para acessar agora mesmo (logo após a sua inscrição). Enviaremos o login e senha para você entrar na plataforma, onde encontrará todas as aulas listadas e organizadas por módulos e temas.',
  },
  {
    question: 'É online ou presencial?',
    answer: 'As aulas da Área de Membros são 100% online. Todo acesso é feito através da internet pelo nossa plataforma. Pode assistir as aulas em seu computador, notebook ou tablet. Você não receberá nada em sua casa.',
  },
  {
    question: 'Se tiver outras dúvidas ao assistir as aulas?',
    answer: 'O Instrutor está sempre disponível no suporte ao aluno tirando dúvidas. Procuramos fazer as aulas da forma mais clara possível, mas se surgir dúvidas, é só mandar uma mensagem para o instrutor, que ele mesmo vai responder.',
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#05080E]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Literal */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-black text-white mb-3 uppercase">
            Dúvidas <span className="text-[#F6DB17]">frequentes</span>
          </h2>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="glass-card rounded-2xl border border-slate-800/80 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-bold text-white text-base sm:text-lg hover:text-[#F6DB17] transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDownIcon
                    className={`w-5 h-5 text-[#F6DB17] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/60 pt-4 animate-fadeIn">
                    <p>{faq.answer}</p>
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
