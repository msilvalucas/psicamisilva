export const SITE = {
  name: "Camila Lima",
  role: "Psicanalista",
  crp: "CRP 06/123456",
  city: "São Paulo · Pinheiros",
  email: "contato@psicamilalima.com.br",
  instagram: "@psi_camilaslima",
  instagramUrl: "https://instagram.com/psi_camilaslima",
  whatsappNumber: "5511912345678",
  whatsappMessage:
    "Olá, Camila. Encontrei seu site e gostaria de conversar sobre uma primeira sessão.",
};

export const whatsappUrl = (msg: string = SITE.whatsappMessage) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(msg)}`;

export const NAV = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/abordagem", label: "Abordagem" },
  { to: "/areas", label: "Áreas de cuidado" },
  { to: "/reflexoes", label: "Reflexões" },
  { to: "/contato", label: "Contato" },
] as const;
