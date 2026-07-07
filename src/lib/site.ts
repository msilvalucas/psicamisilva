export const SITE = {
  name: "Camila Saraiva Lima",
  role: "PSICÓLOGA",
  crp: "CRP 07/43338",
  city: "Passo Fundo · RS",
  email: "contato@psicamilalima.com.br",
  instagram: "@psi_camilaslima",
  instagramUrl: "https://instagram.com/psi_camilaslima",
  whatsappNumber: "5554991976608",
  whatsappMessage:
    "Olá, Camila. Encontrei seu site e gostaria de conversar sobre uma primeira sessão.",
};

export const whatsappUrl = (msg: string = SITE.whatsappMessage) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(msg)}`;

export const NAV = [
  { to: "/", label: "Início" },
  { to: "/#sobre", label: "Sobre" },
  { to: "/#abordagem", label: "Abordagem" },
  { to: "/#areas", label: "Áreas de cuidado" },
  { to: "/#reflexoes", label: "Reflexões" },
  { to: "/#contato", label: "Contato" },
] as const;
