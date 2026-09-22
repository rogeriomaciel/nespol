import { WhatsAppIcon, ArrowRightIcon, ShieldCheckIcon } from './Icons';
import { siteConfig, getWhatsAppUrl } from '../config/site.config';

interface WhatsAppCTAProps {
  message?: string;
  buttonText?: string;
  subtext?: string;
  variant?: 'primary' | 'floating' | 'card' | 'compact';
  className?: string;
}

export function WhatsAppCTA({
  message = siteConfig.defaultWhatsAppMessage,
  buttonText = 'Chamar no WhatsApp Agora',
  subtext = 'Atendimento em tempo real • Sem espera',
  variant = 'primary',
  className = '',
}: WhatsAppCTAProps) {
  const waUrl = getWhatsAppUrl(message);

  if (variant === 'floating') {
    return (
      <aside aria-label="Contato rápido" className="fixed bottom-6 right-6 z-50 animate-bounce">
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl shadow-emerald-600/40 glow-emerald transition-all duration-300 hover:scale-105"
          aria-label="Falar pelo WhatsApp"
        >
          <WhatsAppIcon className="w-5 h-5 text-white" />
          <span className="hidden sm:inline">{buttonText}</span>
        </a>
      </aside>
    );
  }

  if (variant === 'compact') {
    return (
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-600/30 transition-all duration-200 hover:-translate-y-0.5 ${className}`}
      >
        <WhatsAppIcon className="w-5 h-5" />
        <span>{buttonText}</span>
        <ArrowRightIcon className="w-4 h-4 opacity-80" />
      </a>
    );
  }

  if (variant === 'card') {
    return (
      <div className={`glass-card p-6 sm:p-8 rounded-2xl text-center border-emerald-500/30 ${className}`}>
        <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shadow-inner">
          <WhatsAppIcon className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
          {buttonText}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 max-w-md mx-auto">
          {subtext}
        </p>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/30 transition-all duration-200 hover:-translate-y-0.5"
        >
          <WhatsAppIcon className="w-5 h-5" />
          <span>Iniciar Conversa Agora</span>
          <ArrowRightIcon className="w-4 h-4" />
        </a>
      </div>
    );
  }

  // Primary (Hero / Section Anchor)
  return (
    <div className={`flex flex-col items-center sm:items-start gap-3 ${className}`}>
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-base sm:text-lg text-white bg-emerald-600 hover:bg-emerald-500 shadow-xl shadow-emerald-600/30 glow-emerald transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
      >
        <WhatsAppIcon className="w-6 h-6" />
        <span>{buttonText}</span>
        <ArrowRightIcon className="w-5 h-5 opacity-90" />
      </a>
      {subtext && (
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <ShieldCheckIcon className="w-4 h-4 text-emerald-500" />
          <span>{subtext}</span>
        </div>
      )}
    </div>
  );
}
