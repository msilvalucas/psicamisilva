import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/areas")({
  head: () => ({
    meta: [
      { title: "Áreas de cuidado — Camila Saraiva Lima" },
      { name: "description", content: "Possíveis pontos de partida para uma análise: ansiedade, autoestima, relacionamentos, luto, conflitos emocionais e autoconhecimento." },
      { property: "og:title", content: "Áreas de cuidado — Camila Saraiva Lima" },
      { property: "og:description", content: "Temas frequentes na clínica psicanalítica." },
      { property: "og:url", content: "/areas" },
    ],
    links: [{ rel: "canonical", href: "/areas" }],
  }),
  component: Areas,
});

const areas = [
  { n: "I",   t: "Ansiedade",            d: "Quando a urgência interna fala mais alto do que se pode escutar. A análise oferece um espaço para que a angústia encontre nome — e, com ele, novos modos de se organizar." },
  { n: "II",  t: "Autoestima",           d: "Há vozes herdadas que insistem em dizer quem somos. O trabalho clínico permite distinguir essas vozes e reencontrar a própria — com mais firmeza e menos ruído." },
  { n: "III", t: "Relacionamentos",      d: "Investigamos os modos de amar, de se vincular e de se afastar; o que repetimos, o que evitamos e o que ainda não soubemos pedir ou oferecer." },
  { n: "IV",  t: "Luto",                 d: "Toda perda merece tempo. A clínica sustenta o luto sem pressa de superar, sem reduzir o que se perdeu a uma etapa a ser vencida." },
  { n: "V",   t: "Conflitos emocionais", d: "Sentir muitas coisas ao mesmo tempo é humano. Aqui, sentimentos contraditórios podem coexistir, sem precisar de resolução imediata." },
  { n: "VI",  t: "Autoconhecimento",     d: "Para quem deseja se conhecer melhor — sem motivo urgente, apenas com o desejo legítimo de habitar a própria vida com mais consciência." },
];

function Areas() {
  return (
    <>
      <section className="pt-24 md:pt-32">
        <div className="container-editorial">
          <p className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
            <span className="mr-3 inline-block h-px w-8 -translate-y-1 bg-current align-middle" />
            Áreas de cuidado
          </p>
          <h1 className="mt-8 max-w-4xl font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] text-primary-deep text-balance">
            Pontos de partida — não destinos.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-foreground/80">
            Estes são alguns dos temas mais frequentes na clínica. Servem como referência,
            não como categoria. Cada percurso é único e merece ser escutado em sua
            singularidade.
          </p>
        </div>
      </section>

      <Section>
        <div className="space-y-px bg-border/70">
          {areas.map((a) => (
            <article key={a.t} className="grid grid-cols-12 gap-6 bg-background p-10 md:p-14">
              <p className="col-span-12 font-serif text-sm tracking-[0.3em] text-accent md:col-span-2">
                {a.n}
              </p>
              <div className="col-span-12 md:col-span-10">
                <h2 className="font-serif text-3xl md:text-4xl text-primary-deep">{a.t}</h2>
                <p className="mt-4 max-w-2xl text-foreground/80">{a.d}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
