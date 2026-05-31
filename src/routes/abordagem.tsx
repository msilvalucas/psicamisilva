import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { whatsappUrl } from "@/lib/site";

export const Route = createFileRoute("/abordagem")({
  head: () => ({
    meta: [
      { title: "Abordagem — Psicanálise | Camila Lima" },
      { name: "description", content: "Como entendo o trabalho psicanalítico: uma escuta orientada pelo inconsciente, atenta ao tempo de cada pessoa." },
      { property: "og:title", content: "Abordagem — Camila Lima" },
      { property: "og:description", content: "Uma escuta orientada pela psicanálise." },
      { property: "og:url", content: "/abordagem" },
    ],
    links: [{ rel: "canonical", href: "/abordagem" }],
  }),
  component: Abordagem,
});

function Abordagem() {
  const pilares = [
    { t: "Escuta", d: "Não toda escuta é a mesma. A escuta psicanalítica acolhe o que se diz e o que escapa àquilo que se quis dizer." },
    { t: "Tempo",  d: "Há um tempo lógico em cada processo. A clínica respeita esse tempo, mesmo quando ele difere do tempo do mundo." },
    { t: "Palavra",d: "É pela palavra — dita, repetida, esquecida, recuperada — que algo se elabora. A linguagem é o instrumento e a matéria." },
    { t: "Ética",  d: "Sigilo, respeito e a recusa em prescrever modos de viver. A análise convida o sujeito a se responsabilizar pelo próprio desejo." },
  ];

  return (
    <>
      <section className="pt-24 md:pt-32">
        <div className="container-editorial">
          <p className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
            <span className="mr-3 inline-block h-px w-8 -translate-y-1 bg-current align-middle" />
            Abordagem
          </p>
          <h1 className="mt-8 max-w-4xl font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] text-primary-deep text-balance">
            Psicanálise — uma escuta que <em className="italic text-accent">sustenta</em> o tempo do sujeito.
          </h1>
          <p className="mt-10 max-w-2xl text-lg text-foreground/80">
            A psicanálise não é um método para corrigir o que se vive. É uma forma de
            escutar o que ainda não foi possível dizer, e de acompanhar quem deseja
            compreender, em outra chave, a própria história.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-px bg-border/70 md:grid-cols-2">
          {pilares.map((p, i) => (
            <article key={p.t} className="bg-background p-10 md:p-14">
              <p className="font-serif text-sm tracking-[0.3em] text-accent">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-5 font-serif text-3xl text-primary-deep">{p.t}</h2>
              <p className="mt-4 text-foreground/80">{p.d}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Para quem" className="bg-surface/60">
        <div className="grid gap-12 md:grid-cols-12">
          <h2 className="md:col-span-5 font-serif text-4xl md:text-5xl text-primary-deep text-balance">
            Para quem deseja se aproximar de si com tempo e cuidado.
          </h2>
          <div className="md:col-span-7 space-y-5 text-foreground/85">
            <p>
              O trabalho é dirigido a adultos que buscam um espaço para pensar sua vida
              afetiva, suas relações, suas escolhas — sem a urgência de resolver e sem o
              peso de precisar performar bem-estar.
            </p>
            <p>
              Pode interessar a quem atravessa momentos de transição, sente angústias
              difíceis de nomear, percebe a repetição de padrões, ou simplesmente sente o
              desejo legítimo de se conhecer melhor.
            </p>
            <p>
              Não é necessário ter um motivo claro para começar. A análise costuma
              começar exatamente onde a clareza falta.
            </p>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center text-[11px] uppercase tracking-[0.3em] text-primary-deep link-underline"
            >
              Conversar pelo WhatsApp →
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
