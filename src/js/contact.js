import { siteConfig } from "./config.js";

function buildWhatsAppUrl(number, message) {
  const digits = String(number).replace(/\D/g, "");
  if (!/^55\d{10,11}$/.test(digits)) return "";
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export function initContact() {
  const { whatsapp, email, instagram, address } = siteConfig.contact;
  const link = document.querySelector("[data-contact-link]");
  const placeholder = document.querySelector("[data-contact-placeholder]");
  const message = "Olá! Gostaria de conhecer as possibilidades de atendimento da Auréa.";

  if (whatsapp) {
    const url = buildWhatsAppUrl(whatsapp, message);
    if (url && link) {
      link.href = url;
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
      placeholder?.setAttribute("hidden", "");
    }
  } else if (email) {
    if (link) link.href = `mailto:${encodeURIComponent(email)}`;
  }

  const setText = (selector, value, fallback) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = value || fallback;
  };
  setText("[data-email]", email, "E-mail a confirmar");
  setText("[data-instagram]", instagram ? `@${instagram.replace(/^@/, "")}` : "", "Instagram a confirmar");
  setText("[data-address]", address, "Endereço a confirmar");
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());
}
