const WA_NUMBER = '6285177111104';

export function waLink(message: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_GENERAL =
  waLink('Halo TENTA! Saya ingin konsultasi gratis 30 menit untuk bisnis saya. Bisa diatur jadwalnya?');

export const WA_WHATSAPP =
  waLink('Halo TENTA! Saya ingin bertanya mengenai layanan kalian.');

export const WA_BOOKING =
  waLink('Halo TENTA! Saya ingin booking sesi konsultasi gratis. Kapan bisa?');
