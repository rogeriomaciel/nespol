import { siteConfig } from '../config/site.config';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-900 bg-[#04060A] text-slate-400 py-10 md:py-14 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Links originais do rodapé */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm font-bold uppercase tracking-wider mb-8 text-slate-300">
          <a href="#" className="hover:text-[#F6DB17] transition-colors">
            CRIAR VÍDEOS ANIMADOS COM IA
          </a>
          <a href="https://nespol.com.br/sobre" target="_blank" rel="noopener noreferrer" className="hover:text-[#F6DB17] transition-colors">
            SOBRE NÓS
          </a>
          <a href="https://nespol.com.br/politica-de-privacidade" target="_blank" rel="noopener noreferrer" className="hover:text-[#F6DB17] transition-colors">
            POLÍTICA DE PRIVACIDADE
          </a>
          <a href="https://nespol.com.br/contato" target="_blank" rel="noopener noreferrer" className="hover:text-[#F6DB17] transition-colors">
            CONTATO
          </a>
        </div>

        {/* Copyright literal */}
        <div className="text-xs text-slate-400 pt-4 border-t border-slate-900">
          <p>© Copyright {currentYear}, Nespol LTDA. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
