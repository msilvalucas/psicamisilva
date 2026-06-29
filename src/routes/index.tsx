import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";
import { Section } from "@/components/site/Section";
import { SITE, whatsappUrl } from "@/lib/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Camila Saraiva Lima — PSICÓLOGA em Passo Fundo" },
      {
        name: "description",
        content:
          "Um espaço para escuta, reflexão e descoberta de si. Psicanálise para adultos — atendimento online e presencial em Passo Fundo · RS.",
      },
      { property: "og:title", content: "Camila Saraiva Lima — PSICÓLOGA em Passo Fundo" },
      {
        property: "og:description",
        content: "Um espaço para escuta, reflexão e descoberta de si.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const areas = [
  { n: "I",   t: "Ansiedade",            d: "Compreender o que se repete, dar nome ao que aperta, encontrar pausas possíveis." },
  { n: "II",  t: "Autoestima",           d: "Reconhecer a própria voz para além das exigências herdadas e dos olhares de fora." },
  { n: "III", t: "Relacionamentos",      d: "Investigar os laços que se constroem — com o outro, consigo e com a própria história." },
  { n: "IV",  t: "Luto",                 d: "Atravessar perdas no próprio tempo, sem pressa de superar aquilo que merece ser vivido." },
  { n: "V",   t: "Conflitos emocionais", d: "Aproximar-se de sentimentos contraditórios sem precisar de respostas imediatas." },
  { n: "VI",  t: "Autoconhecimento",     d: "Reencontrar-se aos poucos, escutando o que ainda não havia tido espaço para ser dito." },
];

const steps = [
  { n: "01", t: "Contato inicial",        d: "Um primeiro e-mail ou mensagem para apresentarmos, com tranquilidade, o que você procura." },
  { n: "02", t: "Primeira sessão",        d: "Um encontro de escuta, sem compromisso de continuidade. Um espaço para sentir se há ressonância." },
  { n: "03", t: "Processo terapêutico",   d: "Encontros regulares, semanais, em um ritmo construído a dois — com tempo para a palavra e para o silêncio." },
  { n: "04", t: "Acompanhamento contínuo",d: "Um percurso que se desdobra. Não há roteiro: há presença, escuta e o trabalho paciente da elaboração." },
];

const reflections = [
  { date: "Outono · 2025",  t: "O silêncio também cura",                  d: "Há aquilo que se diz e aquilo que aparece justamente quando se permite não dizer." },
  { date: "Inverno · 2025", t: "Por que repetimos os mesmos padrões?",    d: "Sobre a compulsão à repetição e o modo como o inconsciente insiste em ser ouvido." },
  { date: "Primavera · 2024", t: "O que a ansiedade tenta comunicar?",    d: "Antes de silenciar o sintoma, escutar o que ele tenta nomear sobre nossa vida." },
  { date: "Verão · 2024",   t: "A importância da escuta emocional",       d: "Escutar não é responder. É deixar que o outro encontre, em si, aquilo que precisa ser encontrado." },
];

const testimonials = [
  { quote: "Encontrei um espaço em que pude, talvez pela primeira vez, escutar a mim mesma sem pressa.", who: "M., 38 anos" },
  { quote: "A escuta da Camila tem uma qualidade rara: sustenta o silêncio sem desconforto, e devolve sentido às palavras.", who: "R., 31 anos" },
  { quote: "Não é sobre receber respostas, é sobre poder formular as próprias perguntas com mais coragem.", who: "A., 44 anos" },
];

const faqs = [
  { q: "Como funciona o atendimento online?", a: "As sessões online acontecem por videochamada, em ambiente seguro e privado. Mantemos o mesmo cuidado, ética e regularidade dos encontros presenciais — basta um espaço tranquilo e uma boa conexão." },
  { q: "Qual a duração de uma sessão?",       a: "Cada sessão tem 50 minutos. A regularidade habitual é semanal, e o horário é reservado para você ao longo do processo." },
  { q: "Como é a primeira sessão?",           a: "É um encontro inicial para que possamos nos conhecer, conversar sobre o que te trouxe até a terapia e perceber se há ressonância para começarmos um processo. Não há compromisso de continuidade." },
  { q: "O que é psicanálise?",                a: "É uma escuta que considera o inconsciente — aquilo que diz de nós sem que saibamos. Trabalha com a palavra, com o tempo de cada um, e propõe um espaço onde é possível elaborar, e não apenas resolver." },
  { q: "Como agendar?",                       a: "Você pode escrever pelo WhatsApp ou pelo formulário de contato. Respondo pessoalmente, em até dois dias úteis, para combinarmos um primeiro horário." },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-10 md:pt-20">
        <div className="container-editorial grid items-center gap-14 pb-24 md:grid-cols-12 md:gap-10 md:pb-32">
          <div className="md:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
              <span className="mr-3 inline-block h-px w-8 -translate-y-1 bg-current align-middle" />
              PSICANÁLISE · PASSO FUNDO&nbsp;· RS
            </p>
            <h1 className="mt-8 font-serif text-[clamp(2.5rem,6.5vw,5.25rem)] leading-[1.02] tracking-[-0.02em] text-primary-deep text-balance">
              Um espaço para <em className="font-medium italic text-accent">escuta</em>, reflexão e descoberta de si.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/80 text-pretty">
              Pela psicanálise, exploramos suas experiências, emoções e relações — buscando, no
              próprio tempo, encontrar novos sentidos dentro da sua história.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-primary-deep px-7 py-4 text-[11px] uppercase tracking-[0.3em] text-primary-foreground transition-colors hover:bg-primary"
              >
                Agendar uma sessão
              </a>
              <a
                href="#filosofia"
                className="inline-flex items-center px-2 py-4 text-[11px] uppercase tracking-[0.3em] text-primary-deep link-underline"
              >
                Saber mais →
              </a>
            </div>
          </div>

          <div className="md:col-span-5">
            <figure className="relative">
              <div className="absolute -inset-3 -z-10 bg-surface" />
              <img
                src={portrait}
                alt="Retrato de Camila Saraiva Lima, psicóloga, olhando serenamente para a luz da janela."
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full object-cover grayscale-[0.05]"
              />
              <figcaption className="mt-4 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                {SITE.name} · {SITE.crp}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <Section id="filosofia" eyebrow="Filosofia" className="bg-surface/60">
        <div className="grid gap-16 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <h2 className="font-serif text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] text-primary-deep text-balance">
              O silêncio <em className="italic text-accent">também</em> tem algo a dizer.
            </h2>
            <div className="mt-10 flex items-center gap-4 text-muted-foreground">
              <span className="h-px w-16 bg-current" />
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              <span className="h-px w-24 bg-current" />
            </div>
          </div>
          <div className="md:col-span-5 space-y-6 text-foreground/85">
            <p>
              A terapia não acontece apenas pela palavra. Ela se faz também nas pausas,
              nos retornos, naquilo que demora a ser dito — e que, justamente por isso,
              pede um espaço seguro para aparecer.
            </p>
            <p>
              A escuta psicanalítica acolhe o tempo do sujeito. Não há pressa em concluir,
              corrigir ou resolver. Há, antes, o cuidado de sustentar o que ainda procura
              uma forma de se nomear.
            </p>
            <p className="font-serif text-2xl italic leading-snug text-primary-deep">
              “Curar é, muitas vezes, encontrar coragem para escutar o que sempre esteve
              ali — apenas aguardando ser ouvido.”
            </p>
          </div>
        </div>
      </Section>

      {/* ABOUT (resumo) */}
      <Section eyebrow="Sobre">
        <div className="grid gap-16 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <figure>
              <img
                src={portrait}
                alt="Camila Saraiva Lima, psicóloga."
                loading="lazy"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full object-cover"
              />
            </figure>
          </div>
          <div className="md:col-span-7">
            <h2 className="font-serif text-4xl md:text-5xl text-primary-deep text-balance">
              Sou Camila Saraiva Lima — e a escuta é, antes de tudo, um cuidado.
            </h2>
            <div className="mt-8 space-y-5 text-foreground/85">
              <p>
                Atendo adultos em processos de psicanálise, online e presencialmente em
                Pinheiros, São Paulo. Acredito que cada percurso é singular e que a clínica
                se constrói no encontro — entre o que se diz, o que se cala e o que vai,
                aos poucos, ganhando forma.
              </p>
              <p>
                Meu trabalho parte de uma escuta ética e atenta, sem julgamentos, sem pressa
                e sem promessas. Acredito que o sofrimento merece um espaço onde possa ser
                pensado, e não apenas amenizado.
              </p>
              <p>
                Mais do que credenciais, ofereço presença. Mais do que respostas, ofereço
                companhia para que você encontre as suas.
              </p>
            </div>
            <Link
              to="/sobre"
              className="mt-10 inline-flex items-center text-[11px] uppercase tracking-[0.3em] text-primary-deep link-underline"
            >
              Conhecer um pouco mais →
            </Link>
          </div>
        </div>
      </Section>

      {/* AREAS */}
      <Section eyebrow="Áreas de cuidado" className="bg-surface/60">
        <h2 className="max-w-3xl font-serif text-4xl md:text-5xl text-primary-deep text-balance">
          Possíveis pontos de partida para uma escuta.
        </h2>
        <p className="mt-6 max-w-2xl text-foreground/75">
          Estes são alguns dos temas frequentemente trazidos para a análise. Não são
          categorias fechadas — apenas portas pelas quais um percurso pode começar.
        </p>

        <div className="mt-16 grid gap-px bg-border/70 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((a) => (
            <article key={a.t} className="group bg-background p-8 transition-colors hover:bg-paper md:p-10">
              <p className="font-serif text-sm tracking-widest text-accent">{a.n}</p>
              <h3 className="mt-5 font-serif text-2xl text-primary-deep">{a.t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-foreground/75">{a.d}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section eyebrow="Como funciona a terapia">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="font-serif text-4xl md:text-5xl text-primary-deep text-balance">
              Um percurso construído no seu tempo.
            </h2>
            <p className="mt-6 text-foreground/75">
              Cada etapa respeita a singularidade do encontro. Não há fórmulas: há
              acolhimento, ética e a constância da escuta.
            </p>
          </div>
          <ol className="md:col-span-8 space-y-px bg-border/70">
            {steps.map((s) => (
              <li key={s.n} className="grid grid-cols-12 gap-6 bg-background p-8 md:p-10">
                <p className="col-span-12 font-serif text-sm tracking-[0.3em] text-accent md:col-span-2">
                  {s.n}
                </p>
                <div className="col-span-12 md:col-span-10">
                  <h3 className="font-serif text-2xl text-primary-deep">{s.t}</h3>
                  <p className="mt-3 text-foreground/75">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* REFLECTIONS */}
      <Section eyebrow="Reflexões" className="bg-surface/60">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-2xl font-serif text-4xl md:text-5xl text-primary-deep text-balance">
            Pensamentos sobre escuta, tempo e travessias.
          </h2>
          <Link to="/reflexoes" className="text-[11px] uppercase tracking-[0.3em] text-primary-deep link-underline">
            Ver todas →
          </Link>
        </div>

        <div className="mt-14 grid gap-px bg-border/70 md:grid-cols-2">
          {reflections.map((r) => (
            <article key={r.t} className="group bg-background p-10 transition-colors hover:bg-paper">
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">{r.date}</p>
              <h3 className="mt-6 font-serif text-3xl text-primary-deep">{r.t}</h3>
              <p className="mt-4 text-foreground/75">{r.d}</p>
              <p className="mt-8 text-[11px] uppercase tracking-[0.3em] text-accent">
                Ler reflexão →
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section eyebrow="Quem caminhou comigo">
        <div className="grid gap-12 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure key={i} className="border-t border-border pt-8">
              <blockquote className="font-serif text-2xl italic leading-snug text-primary-deep">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-8 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                — {t.who}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-12 max-w-2xl text-xs text-muted-foreground">
          Depoimentos compartilhados com autorização e mantidos em forma anônima, em
          respeito ao sigilo profissional.
        </p>
      </Section>

      {/* FAQ */}
      <Section eyebrow="Perguntas frequentes" className="bg-surface/60">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="font-serif text-4xl md:text-5xl text-primary-deep text-balance">
              Antes de começar, talvez você queira saber.
            </h2>
          </div>
          <div className="md:col-span-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-border/70">
                  <AccordionTrigger className="py-6 text-left font-serif text-xl text-primary-deep hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-8 text-base leading-relaxed text-foreground/80">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Section>

      {/* FINAL CTA */}
      <section className="bg-primary-deep text-primary-foreground">
        <div className="container-editorial py-28 md:py-40">
          <p className="text-[11px] uppercase tracking-[0.35em] text-primary-foreground/60">
            <span className="mr-3 inline-block h-px w-8 -translate-y-1 bg-current align-middle" />
            Convite
          </p>
          <h2 className="mt-10 max-w-4xl font-serif text-[clamp(2rem,5vw,3.75rem)] leading-[1.15] text-primary-foreground text-balance">
            Talvez as respostas que você procura não estejam fora, mas na possibilidade
            de se <em className="italic">escutar mais profundamente</em>.
          </h2>
          <div className="mt-14">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-primary-foreground/70 px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary-deep"
            >
              Agendar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
