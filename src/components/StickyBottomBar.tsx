import { useState, useEffect } from 'react';
import { ZapIcon, InfinityIcon } from './Icons';
import { siteConfig } from '../config/site.config';

export function StickyBottomBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past 500px
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#080C14]/95 backdrop-blur-xl border-t border-[#F6DB17]/30 p-3 sm:py-3.5 shadow-2xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        
        {/* Left teaser */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#F6DB17]/20 flex items-center justify-center shrink-0">
            <ZapIcon className="w-4 h-4 text-[#F6DB17]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-white">Área de Membros Nespol</span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 flex items-center gap-1">
                <InfinityIcon className="w-3 h-3" /> Acesso Vitalício
              </span>
            </div>
            <p className="text-xs text-slate-400">
              De <span className="line-through">{siteConfig.priceOriginal}</span> por apenas <strong className="text-[#F6DB17] font-bold">12x de {siteConfig.installmentValue}</strong> ou {siteConfig.priceCurrent}
            </p>
          </div>
        </div>

        {/* Mobile quick price */}
        <div className="flex sm:hidden flex-col">
          <span className="text-[11px] text-slate-400">Acesso Vitalício</span>
          <span className="text-sm font-black text-[#F6DB17]">12x de {siteConfig.installmentValue}</span>
        </div>

        {/* Right CTA */}
        <a
          href={siteConfig.checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl font-black text-xs sm:text-sm bg-[#F6DB17] hover:bg-[#E5CB0D] text-black shadow-lg shadow-[#F6DB17]/20 transition-all hover:scale-105 shrink-0"
        >
          <ZapIcon className="w-4 h-4 fill-black text-black" />
          <span>INSCREVER COM DESCONTO</span>
        </a>

      </div>
    </div>
  );
}
