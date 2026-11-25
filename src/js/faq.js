export function initFaq() {
  document.querySelectorAll("[data-faq] .faq-item button").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const answer = item?.querySelector(".faq-answer");
      const open = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!open));
      item?.classList.toggle("is-open", !open);
      if (answer) answer.hidden = open;
    });
  });
}
