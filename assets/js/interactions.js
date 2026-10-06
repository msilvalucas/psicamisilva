export function initAccordion() {
  const accordion = document.querySelector("[data-accordion]");
  if (!accordion) return;

  accordion.addEventListener(
    "toggle",
    (event) => {
      const opened = event.target;
      if (!(opened instanceof HTMLDetailsElement) || !opened.open) return;
      accordion.querySelectorAll("details[open]").forEach((item) => {
        if (item !== opened) item.removeAttribute("open");
      });
    },
    true,
  );
}
