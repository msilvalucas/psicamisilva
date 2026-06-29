import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";
import { Section } from "@/components/site/Section";
import { SITE, whatsappUrl } from "@/lib/site";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Camila Saraiva Lima, PSICÓLOGA" },
      { name: "description", content: "Conheça Camila Saraiva Lima, psicóloga em Passo Fundo. Sua formação, valores e o modo como entende a clínica como um espaço de escuta cuidadosa." },
      { property: "og:title", content: "Sobre — Camila Saraiva Lima" },
      { property: "og:description", content: "Uma biografia humana de Camila Saraiva Lima, psicóloga." },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <>
      <section className="pt-24 md:pt-32">
        <div className="container-editorial grid items-end gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
              <span className="mr-3 inline-block h-px w-8 -translate-y-1 bg-current align-middle" />
              Sobre
            </p>
            <h1 className="mt-8 font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] text-primary-deep text-balance">
              Uma escuta que se faz <em className="italic text-accent">tempo</em>, presença e cuidado.
            </h1>
          </div>
        </div>
      </section>

      <Section className="pt-16">
        <div className="grid gap-16 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <img
              src={portrait}
              alt="Retrato de Camila Saraiva Lima."
              loading="lazy"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full object-cover"
            />
            <p className="mt-5 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              {SITE.name} · {SITE.crp}
            </p>
          </div>

          <div className="md:col-span-7 space-y-6 text-lg text-foreground/85">
            <p>
              Sou Camila Saraiva Lima, psicóloga. Vivo e atendo em Passo Fundo · RS, e me
              dedico há mais de uma década à clínica de adultos. Cheguei à psicanálise como quem reconhece,
              em outra língua, algo que já se intuía: que escutar é também uma forma de
              cuidar, e que existem perguntas que pedem mais tempo do que respostas.
            </p>
            <p>
              Minha formação reúne a graduação em Psicologia pela USP e a formação
              psicanalítica pelo Instituto Sedes Sapientiae, com supervisão clínica contínua
              e participação em grupos de estudo orientados pela leitura de Freud, Winnicott
              e Lacan. Estes são caminhos — não destinos.
            </p>
            <p>
              Acredito em uma clínica ética, discreta e atenta. Não trabalho com promessas
              de resultado, técnicas de aceleração emocional, nem com qualquer linguagem
              que reduza a vida a desempenho. Acredito, antes, no valor da palavra dita no
              tempo certo, e do silêncio quando ele se faz necessário.
            </p>

            <div className="hairline my-12" />

            <h2 className="font-serif text-3xl text-primary-deep">Abordagem</h2>
            <p>
              Trabalho com psicanálise — uma escuta orientada pelo inconsciente, atenta às
              repetições, aos sintomas e aos modos como cada pessoa constrói sentido para
              aquilo que vive. As sessões acontecem semanalmente, com 50 minutos, online ou
              presencialmente em Passo Fundo · RS.
            </p>

            <h2 className="font-serif text-3xl text-primary-deep">Valores</h2>
            <ul className="list-none space-y-3 pl-0">
              {[
                "Escuta ética, sem julgamento",
                "Sigilo absoluto",
                "Respeito ao tempo de cada processo",
                "Linguagem cuidadosa, longe de jargões",
                "Estudo e supervisão contínuos",
              ].map((v) => (
                <li key={v} className="flex items-baseline gap-4">
                  <span className="mt-2 h-px w-6 bg-accent" />
                  <span>{v}</span>
                </li>
              ))}
            </ul>

            <div className="hairline my-12" />

            <p className="font-serif text-2xl italic leading-snug text-primary-deep">
              “A clínica não é um lugar de conserto. É um lugar onde a vida pode, enfim,
              ser pensada.”
            </p>

            <div className="pt-6">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-primary-deep px-7 py-4 text-[11px] uppercase tracking-[0.3em] text-primary-foreground transition-colors hover:bg-primary"
              >
                Agendar uma primeira conversa
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
