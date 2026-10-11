export interface SiteConfig {
  name: string;
  tagline: string;
  shortDescription: string;
  checkoutUrl: string;
  youtubeUrl: string;
  subscribersYoutube: string;
  totalStudents: string;
  priceOriginal: string;
  priceCurrent: string;
  installments: string;
  installmentValue: string;
  guaranteeDays: number;
  instructor: string;
  email: string;
  gtmId?: string;
}

export const siteConfig: SiteConfig = {
  name: 'Nespol',
  tagline: 'Aprenda a Criar Vídeos com IA que Geram Resultados',
  shortDescription: 'Domine as melhores ferramentas e IAs para criar vídeos, animações e lucrar na internet. Área de membros completa com acesso vitalício.',
  checkoutUrl: 'https://pay.kiwify.com.br/vMKpyAL',
  youtubeUrl: 'https://youtube.com/nespol',
  subscribersYoutube: '+ 320K',
  totalStudents: '+ 5.000',
  priceOriginal: 'R$ 750,00',
  priceCurrent: 'R$ 147,00',
  installments: '12x',
  installmentValue: 'R$ 15,20',
  guaranteeDays: 7,
  instructor: 'Cris (Canal Nespol)',
  email: 'contato@nespol.com.br',
  gtmId: '',
};

export function getCheckoutUrl(): string {
  return siteConfig.checkoutUrl;
}
