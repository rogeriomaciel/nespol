import { useState } from 'react';
import { MenuIcon, XIcon, YouTubeIcon, ZapIcon } from './Icons';
import { siteConfig } from '../config/site.config';

interface NavbarProps {
  ctaText?: string;
}

export function Navbar({ ctaText = 'FAZER INSCRIÇÃO' }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass-nav transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Nespol */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/images/nespol/LOGO-NESPOL-P-TRANSPARENTE.webp"
              alt="Nespol Logo"
              width={140}
              height={42}
              className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Nav Links Desktop */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#beneficios" className="hover:text-[#F6DB17] transition-colors">O que Você Aprende</a>
            <a href="#modulos" className="hover:text-[#F6DB17] transition-colors">Módulos</a>
            <a href="#bonus" className="hover:text-[#F6DB17] transition-colors flex items-center gap-1.5">
              <span>Bônus</span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#F6DB17]/20 text-[#F6DB17]">GRÁTIS</span>
            </a>
            <a href="#vantagens" className="hover:text-[#F6DB17] transition-colors">Vantagens</a>
            <a href="#depoimentos" className="hover:text-[#F6DB17] transition-colors">Alunos</a>
            <a href="#faq" className="hover:text-[#F6DB17] transition-colors">Dúvidas</a>
          </nav>

          {/* Social Proof + CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={siteConfig.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white hover:border-red-500/40 transition-colors"
            >
              <YouTubeIcon className="w-4 h-4 text-red-500" />
              <span>{siteConfig.subscribersYoutube} Inscritos</span>
            </a>

            <a
              href="#oferta"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm bg-[#F6DB17] hover:bg-[#E5CB0D] text-black shadow-lg shadow-[#F6DB17]/20 transition-all hover:scale-105"
            >
              <ZapIcon className="w-4 h-4 fill-black text-black" />
              <span>{ctaText}</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="#oferta"
              className="px-3.5 py-2 rounded-lg text-xs font-bold bg-[#F6DB17] text-black shadow-sm"
            >
              INSCREVER
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white bg-slate-900 border border-slate-800"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-[#0B0F17]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <a
            href="#beneficios"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:bg-slate-900 hover:text-[#F6DB17]"
          >
            O que Você Aprende
          </a>
          <a
            href="#modulos"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:bg-slate-900 hover:text-[#F6DB17]"
          >
            Módulos da Área de Membros
          </a>
          <a
            href="#bonus"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:bg-slate-900 hover:text-[#F6DB17]"
          >
            Bônus Exclusivos
          </a>
          <a
            href="#vantagens"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:bg-slate-900 hover:text-[#F6DB17]"
          >
            Vantagens & Acesso Vitalício
          </a>
          <a
            href="#depoimentos"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:bg-slate-900 hover:text-[#F6DB17]"
          >
            Avaliações dos Alunos
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:bg-slate-900 hover:text-[#F6DB17]"
          >
            Dúvidas Frequentes
          </a>

          <div className="pt-2">
            <a
              href="#oferta"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold bg-[#F6DB17] text-black text-center shadow-lg"
            >
              <ZapIcon className="w-5 h-5 fill-black text-black" />
              <span>GARANTIR ACESSO VITALÍCIO</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
