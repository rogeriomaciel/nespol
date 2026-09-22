import { ZapIcon, WhatsAppIcon } from './Icons';
import { siteConfig, getWhatsAppUrl } from '../config/site.config';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const waUrl = getWhatsAppUrl();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-950/70 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <ZapIcon className="w-4 h-4" />
            </div>
            <div>
              <span className="font-extrabold text-base text-slate-900 dark:text-white">
                {siteConfig.name}
              </span>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {siteConfig.cityState} • Engenharia Core-Bare-Metal™
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-slate-600 dark:text-slate-400">
            <a href="#beneficios" className="hover:text-blue-500">Benefícios</a>
            <a href="#comparativo" className="hover:text-blue-500">Comparativo</a>
            <a href="#simulador" className="hover:text-blue-500">Simulador</a>
            <a href="#faq" className="hover:text-blue-500">FAQ</a>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} {siteConfig.name}. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            <span>Powered by</span>
            <strong className="text-slate-700 dark:text-slate-300">Core-Bare-Metal™ Architecture</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
