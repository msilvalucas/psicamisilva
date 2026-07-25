const focusableSelector =
  'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function initNavigation() {
  const header = document.querySelector("[data-header]");
  const toggle = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-mobile-menu]");
  if (!header || !toggle || !menu) return;

  let lastFocused = null;

  const updateHeader = () =>
    header.classList.toggle("is-scrolled", window.scrollY > 8);

  const setMenu = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    menu.setAttribute("aria-hidden", String(!open));
    menu.classList.toggle("is-open", open);
    header.classList.toggle("menu-active", open);
    document.body.classList.toggle("menu-open", open);

    if (open) {
      lastFocused = document.activeElement;
      menu.querySelector(focusableSelector)?.focus();
    } else if (
      lastFocused instanceof HTMLElement &&
      document.contains(lastFocused)
    ) {
      lastFocused.focus();
    }
  };

  toggle.addEventListener("click", () =>
    setMenu(toggle.getAttribute("aria-expanded") !== "true"),
  );
  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenu(false);
  });

  document.addEventListener("keydown", (event) => {
    if (toggle.getAttribute("aria-expanded") !== "true") return;
    if (event.key === "Escape") {
      event.preventDefault();
      setMenu(false);
      return;
    }
    if (event.key !== "Tab") return;

    const focusable = [...menu.querySelectorAll(focusableSelector)];
    const first = focusable[0];
    const last = focusable.at(-1);
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (
      window.innerWidth >= 1024 &&
      toggle.getAttribute("aria-expanded") === "true"
    )
      setMenu(false);
  });
  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();
}
