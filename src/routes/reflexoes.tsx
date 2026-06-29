import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/reflexoes")({
  head: () => ({
    meta: [
      { title: "Reflexões — Camila Saraiva Lima, PSICÓLOGA" },
      { name: "description", content: "Textos e reflexões sobre escuta, psicanálise, silêncio e a travessia dos afetos." },
      { property: "og:title", content: "Reflexões — Camila Saraiva Lima" },
      { property: "og:description", content: "Pensamentos sobre escuta, tempo e travessias." },
      { property: "og:url", content: "/reflexoes" },
    ],
    links: [{ rel: "canonical", href: "/reflexoes" }],
  }),
  component: Reflexoes,
});

const list = [
  { date: "Outono · 2025",   t: "O silêncio também cura",                d: "Há aquilo que se diz e aquilo que aparece justamente quando se permite não dizer. Sobre o lugar do silêncio na clínica psicanalítica." },
  { date: "Inverno · 2025",  t: "Por que repetimos os mesmos padrões?",  d: "Sobre a compulsão à repetição, o inconsciente e o modo como nossas histórias insistem em retornar — pedindo, talvez, outra escuta." },
  { date: "Primavera · 2024",t: "O que a ansiedade tenta comunicar?",    d: "Antes de silenciar o sintoma, escutar o que ele tenta nomear sobre nossa vida, nossas relações e nossos desejos." },
  { date: "Verão · 2024",    t: "A importância da escuta emocional",     d: "Escutar não é responder. É deixar que o outro encontre, em si, aquilo que precisa ser encontrado." },
  { date: "Outono · 2024",   t: "O tempo da análise",                    d: "Sobre como o tempo da clínica difere do tempo do mundo — e por que essa diferença é, ela mesma, terapêutica." },
  { date: "Inverno · 2024",  t: "Quando começar uma análise?",           d: "Não é preciso um motivo claro. A análise costuma começar exatamente onde a clareza falta." },
];

function Reflexoes() {
  return (
    <>
      <section className="pt-24 md:pt-32">
        <div className="container-editorial">
          <p className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
            <span className="mr-3 inline-block h-px w-8 -translate-y-1 bg-current align-middle" />
            Reflexões
          </p>
          <h1 className="mt-8 max-w-4xl font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] text-primary-deep text-balance">
            Pensamentos sobre escuta, tempo e travessias.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-foreground/80">
            Pequenos textos compartilhados em ritmo lento, no compasso das estações.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-px bg-border/70 md:grid-cols-2">
          {list.map((r) => (
            <article key={r.t} className="bg-background p-10 md:p-12">
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">{r.date}</p>
              <h2 className="mt-6 font-serif text-3xl text-primary-deep">{r.t}</h2>
              <p className="mt-4 text-foreground/75">{r.d}</p>
              <a href="#" className="mt-8 inline-block text-[11px] uppercase tracking-[0.3em] text-accent link-underline">
                Ler reflexão →
              </a>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
