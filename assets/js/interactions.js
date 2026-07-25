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

export function initCarousel() {
  const carousel = document.querySelector("[data-carousel]");
  const track = carousel?.querySelector("[data-carousel-track]");
  const previous = carousel?.querySelector("[data-carousel-prev]");
  const next = carousel?.querySelector("[data-carousel-next]");
  if (!carousel || !track || !previous || !next) return;

  const slides = [...track.children];
  let index = 0;
  let dragStart = null;

  carousel.tabIndex = 0;
  slides.forEach((slide, slideIndex) => {
    slide.setAttribute("role", "group");
    slide.setAttribute("aria-roledescription", "slide");
    slide.setAttribute("aria-label", `${slideIndex + 1} de ${slides.length}`);
  });

  const visibleSlides = () =>
    window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
  const maxIndex = () => Math.max(0, slides.length - visibleSlides());

  const render = () => {
    if (index > maxIndex()) index = maxIndex();
    track.style.transform = `translate3d(-${index * (100 / visibleSlides())}%, 0, 0)`;
    slides.forEach((slide, slideIndex) => {
      slide.setAttribute(
        "aria-hidden",
        String(slideIndex < index || slideIndex >= index + visibleSlides()),
      );
    });
  };

  const move = (direction) => {
    index += direction;
    if (index > maxIndex()) index = 0;
    if (index < 0) index = maxIndex();
    render();
  };

  previous.addEventListener("click", () => move(-1));
  next.addEventListener("click", () => move(1));
  carousel.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      move(-1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      move(1);
    }
  });
  track.addEventListener("pointerdown", (event) => {
    dragStart = event.clientX;
    track.setPointerCapture?.(event.pointerId);
  });
  track.addEventListener("pointerup", (event) => {
    if (dragStart === null) return;
    const distance = event.clientX - dragStart;
    dragStart = null;
    if (Math.abs(distance) > 45) move(distance > 0 ? -1 : 1);
  });
  track.addEventListener("pointercancel", () => {
    dragStart = null;
  });
  window.addEventListener("resize", render);
  render();
}
