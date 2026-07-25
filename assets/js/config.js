export const SITE = Object.freeze({
  whatsappNumber: "5554991976608",
  whatsappMessage:
    "Olá, Camila. Encontrei seu site e gostaria de conversar sobre uma primeira sessão.",
});

export function whatsappUrl(message = SITE.whatsappMessage) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
