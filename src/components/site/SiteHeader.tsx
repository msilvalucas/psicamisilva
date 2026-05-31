import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV, SITE, whatsappUrl } from "@/lib/site";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-sm border-b border-border/60"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-editorial flex items-center justify-between py-5">
        <Link to="/" className="group flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-serif text-xl tracking-tight text-primary-deep">
            {SITE.name}
          </span>
          <span className="hidden sm:inline text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            {SITE.role}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.slice(1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[13px] tracking-wide text-foreground/80 hover:text-primary-deep link-underline"
              activeProps={{ className: "text-primary-deep" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center border border-primary-deep px-5 py-2.5 text-[11px] uppercase tracking-[0.25em] text-primary-deep transition-colors hover:bg-primary-deep hover:text-primary-foreground"
          >
            Agendar
          </a>
        </nav>

        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center text-primary-deep"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[64px] bottom-0 bg-background transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="container-editorial flex flex-col gap-2 pt-10">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="border-b border-border/60 py-5 font-serif text-2xl text-primary-deep"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center bg-primary-deep px-6 py-4 text-xs uppercase tracking-[0.3em] text-primary-foreground"
          >
            Agendar pelo WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
