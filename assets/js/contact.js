import { whatsappUrl } from "./config.js";

export function initContactForm() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const name = String(data.get("nome") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("mensagem") ?? "");
    const text = `Olá, Camila. Meu nome é ${name} (${email}).\n\n${message}`;
    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
  });
}
