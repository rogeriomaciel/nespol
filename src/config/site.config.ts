export interface SiteConfig {
  name: string;
  tagline: string;
  shortDescription: string;
  whatsappNumber: string;
  defaultWhatsAppMessage: string;
  cityState: string;
  email: string;
  gtmId?: string;
}

export const siteConfig: SiteConfig = {
  name: 'Sua Marca Bare-Metal',
  tagline: 'Alta Performance, Carregamento Sub-Segundo & Conversão Extrema',
  shortDescription: 'Substitua sites lentos e pesados por páginas em código puro compilado que abrem em menos de 1s e multiplicam seu ROI.',
  whatsappNumber: '5562996232227',
  defaultWhatsAppMessage: 'Olá! Gostaria de entender como ter uma Landing Page Bare-Metal com velocidade extrema e alta conversão.',
  cityState: 'Goiânia - GO',
  email: 'contato@seusite.com.br',
  gtmId: '',
};

export function getWhatsAppUrl(message?: string, number: string = siteConfig.whatsappNumber): string {
  const msg = encodeURIComponent(message || siteConfig.defaultWhatsAppMessage);
  return `https://wa.me/${number}?text=${msg}`;
}
