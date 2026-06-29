import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Section } from "@/components/site/Section";
import { SITE, whatsappUrl } from "@/lib/site";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Camila Saraiva Lima, PSICÓLOGA" },
      { name: "description", content: "Entre em contato com Camila Saraiva Lima para agendar uma primeira sessão. Atendimento online e presencial em Passo Fundo." },
      { property: "og:title", content: "Contato — Camila Saraiva Lima" },
      { property: "og:description", content: "Agendar uma primeira conversa." },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: Contato,
});

function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", msg: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá, Camila. Meu nome é ${form.nome} (${form.email}).\n\n${form.msg}`;
    window.open(whatsappUrl(msg), "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <section className="pt-24 md:pt-32">
        <div className="container-editorial">
          <p className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
            <span className="mr-3 inline-block h-px w-8 -translate-y-1 bg-current align-middle" />
            Contato
          </p>
          <h1 className="mt-8 max-w-4xl font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] text-primary-deep text-balance">
            Uma primeira conversa começa por uma <em className="italic text-accent">mensagem</em>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-foreground/80">
            Escreva sem formalidade. Respondo pessoalmente, em até dois dias úteis, para
            combinarmos um horário possível para uma primeira escuta.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-16 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5 space-y-10">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">WhatsApp</p>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block font-serif text-2xl text-primary-deep link-underline">
                +55 11 91234-5678
              </a>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">E-mail</p>
              <a href={`mailto:${SITE.email}`} className="mt-3 inline-block font-serif text-2xl text-primary-deep link-underline">
                {SITE.email}
              </a>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Instagram</p>
              <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block font-serif text-2xl text-primary-deep link-underline">
                {SITE.instagram}
              </a>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Atendimento</p>
              <p className="mt-3 font-serif text-2xl text-primary-deep">
                Online · Presencial em Pinheiros, São Paulo
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="md:col-span-7 space-y-8">
            <Field label="Nome" required>
              <input
                required
                type="text"
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                className="w-full border-b border-border bg-transparent pb-3 pt-1 font-serif text-2xl text-primary-deep placeholder:text-muted-foreground/50 focus:border-primary-deep focus:outline-none"
                placeholder="Como você se chama?"
              />
            </Field>
            <Field label="E-mail" required>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border-b border-border bg-transparent pb-3 pt-1 font-serif text-2xl text-primary-deep placeholder:text-muted-foreground/50 focus:border-primary-deep focus:outline-none"
                placeholder="seu@email.com"
              />
            </Field>
            <Field label="Mensagem">
              <textarea
                rows={5}
                value={form.msg}
                onChange={(e) => setForm({ ...form, msg: e.target.value })}
                className="w-full resize-none border-b border-border bg-transparent pb-3 pt-1 font-sans text-base leading-relaxed text-foreground placeholder:text-muted-foreground/60 focus:border-primary-deep focus:outline-none"
                placeholder="Escreva o que sentir necessário compartilhar — pode ser breve."
              />
            </Field>
            <button
              type="submit"
              className="mt-6 inline-flex items-center bg-primary-deep px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-primary-foreground transition-colors hover:bg-primary"
            >
              Enviar pelo WhatsApp
            </button>
            <p className="text-xs text-muted-foreground">
              Suas informações são utilizadas apenas para retorno e respeitam total sigilo.
            </p>
          </form>
        </div>
      </Section>
    </>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
        {label}{required ? " *" : ""}
      </span>
      <div className="mt-3">{children}</div>
    </label>
  );
}
