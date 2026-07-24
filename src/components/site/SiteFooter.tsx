import { SITE, NAV } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/70 bg-background">
      <div className="container-editorial grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-serif text-2xl text-primary-deep">{SITE.name}</p>
          <p className="mt-1 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            {SITE.role} · {SITE.crp}
          </p>
          <p className="mt-6 max-w-sm text-sm text-muted-foreground">
            Um espaço de escuta para quem deseja se aproximar de si com cuidado, ética e
            tempo. Atendimento online e presencial em Passo Fundo · RS.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Navegar</p>
          <ul className="mt-5 space-y-2.5">
            {NAV.map((item) => (
              <li key={item.to}>
                <a href={item.to} className="text-sm text-foreground/80 link-underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Contato</p>
          <ul className="mt-5 space-y-2.5 text-sm">
            <li>
              <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" className="link-underline">
                Instagram {SITE.instagram}
              </a>
            </li>
            <li className="text-muted-foreground">Passo Fundo · RS</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="container-editorial flex flex-col gap-2 py-6 text-[11px] uppercase tracking-[0.25em] text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© 2026 CAMILA SARAIVA LIMA. TODOS OS DIREITOS RESERVADOS.</p>
          <p>Sigilo profissional preservado · Conteúdo informativo, não substitui consulta.</p>
        </div>
      </div>
    </footer>
  );
}
