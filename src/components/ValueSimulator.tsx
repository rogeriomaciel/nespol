import { useState } from 'react';
import { CalculatorIcon, FlameIcon, TrendingUpIcon, WhatsAppIcon } from './Icons';
import { getWhatsAppUrl } from '../config/site.config';

export function ValueSimulator() {
  const [monthlyAdSpend, setMonthlyAdSpend] = useState<number>(3000);
  const [costPerClick, setCostPerClick] = useState<number>(5.0);
  const [leadToSaleRate, setLeadToSaleRate] = useState<number>(10.0);
  const [averageTicket, setAverageTicket] = useState<number>(1500);

  // Cálculos de Perda e Recuperação
  const totalClicks = Math.round(monthlyAdSpend / (costPerClick || 1));
  const lostRate = 0.65; // 65% abandono em sites lentos (>3s)
  const wastedAdSpendMonthly = Math.round(monthlyAdSpend * lostRate);
  const lostClicksMonthly = Math.round(totalClicks * lostRate);
  const validClicksMonthly = Math.max(0, totalClicks - lostClicksMonthly);

  const leadCaptureRate = 0.15; // 15% taxa clique -> lead
  const lostLeadsMonthly = Math.max(1, Math.round(lostClicksMonthly * leadCaptureRate));
  const validLeadsMonthly = Math.max(1, Math.round(validClicksMonthly * leadCaptureRate));

  const currentSalesMonthly = Math.max(1, Math.round(validLeadsMonthly * (leadToSaleRate / 100)));
  const recoveredSalesMonthly = Math.max(1, Math.round(lostLeadsMonthly * (leadToSaleRate / 100)));
  const recoveredRevenueMonthly = Math.round(recoveredSalesMonthly * averageTicket);
  const recoveredRevenueYearly = recoveredRevenueMonthly * 12;

  const simWhatsAppMsg = `Olá! Fiz a simulação no site: invisto R$ ${monthlyAdSpend.toLocaleString('pt-BR')} em anúncios e descobri que posso estar deixando R$ ${recoveredRevenueYearly.toLocaleString('pt-BR')} por ano na mesa por lentidão. Quero a perícia gratuita!`;
  const waUrl = getWhatsAppUrl(simWhatsAppMsg);

  return (
    <section id="simulador" className="py-16 md:py-24 bg-slate-100/50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 mb-4">
            <CalculatorIcon className="w-3.5 h-3.5" />
            <span>CALCULADORA DE DESPERDÍCIO DE TRÁFEGO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Quanto Dinheiro Seu Site Lento Está Queimando?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Ajuste os valores abaixo para calcular o volume de leads e faturamento que sua empresa está deixando na mesa todo mês.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sliders Input */}
          <div className="lg:col-span-6 glass-card p-6 sm:p-8 rounded-3xl space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Investimento Mensal em Anúncios
                </label>
                <span className="text-base font-extrabold text-blue-600 dark:text-blue-400">
                  R$ {monthlyAdSpend.toLocaleString('pt-BR')}
                </span>
              </div>
              <input
                type="range"
                min={1000}
                max={50000}
                step={500}
                value={monthlyAdSpend}
                onChange={(e) => setMonthlyAdSpend(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-1">
                <span>R$ 1.000</span>
                <span>R$ 50.000+</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Custo por Clique Médio (CPC)
                </label>
                <span className="text-base font-extrabold text-blue-600 dark:text-blue-400">
                  R$ {costPerClick.toFixed(2)}
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={30}
                step={0.5}
                value={costPerClick}
                onChange={(e) => setCostPerClick(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Taxa de Conversão de Leads em Vendas
                </label>
                <span className="text-base font-extrabold text-blue-600 dark:text-blue-400">
                  {leadToSaleRate.toFixed(0)}%
                </span>
              </div>
              <input
                type="range"
                min={2}
                max={40}
                step={1}
                value={leadToSaleRate}
                onChange={(e) => setLeadToSaleRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Ticket Médio da Sua Venda / Serviço
                </label>
                <span className="text-base font-extrabold text-blue-600 dark:text-blue-400">
                  R$ {averageTicket.toLocaleString('pt-BR')}
                </span>
              </div>
              <input
                type="range"
                min={200}
                max={20000}
                step={100}
                value={averageTicket}
                onChange={(e) => setAverageTicket(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>
          </div>

          {/* Diagnosis Result Card */}
          <div className="lg:col-span-6 glass-card p-6 sm:p-8 rounded-3xl border-rose-500/30 bg-rose-50/10 dark:bg-rose-950/10 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center">
                <FlameIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Diagnóstico da Perda de Tráfego
                </h3>
                <p className="text-xs text-slate-500">Estimativa baseada em dados oficiais do Google Web Vitals</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                <span className="text-xs font-semibold text-slate-500 block mb-1">Verba Queimada na Tela Branca</span>
                <span className="text-xl sm:text-2xl font-black text-rose-600 dark:text-rose-400">
                  R$ {wastedAdSpendMonthly.toLocaleString('pt-BR')}<span className="text-xs font-normal">/mês</span>
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                <span className="text-xs font-semibold text-slate-500 block mb-1">Leads Perdidos por Lentidão</span>
                <span className="text-xl sm:text-2xl font-black text-rose-600 dark:text-rose-400">
                  {lostLeadsMonthly}<span className="text-xs font-normal"> contatos/mês</span>
                </span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 block mb-1">
                Faturamento Recuperável Anual
              </span>
              <div className="text-3xl sm:text-4xl font-black text-emerald-600 dark:text-emerald-400 tracking-tight">
                + R$ {recoveredRevenueYearly.toLocaleString('pt-BR')}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-2">
                Recuperando os {recoveredSalesMonthly} clientes/mês perdidos pelo site lento.
              </p>
            </div>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-xl shadow-emerald-600/30 glow-emerald transition-all duration-200 hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>Recuperar Esses Leads no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
