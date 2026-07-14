import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/camila-hero-v2.png.asset.json";
import camilaImg from "@/assets/camila-sobre-v2.png.asset.json";
import { Section } from "@/components/site/Section";
import { SITE, whatsappUrl } from "@/lib/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

const pilares = [
  { t: "Escuta", d: "A escuta psicanalítica não se limita ao que é dito de forma consciente. Ela se orienta também pelos lapsos, repetições, silêncios, contradições e por aquilo que insiste em retornar, revelando algo da singularidade de cada sujeito." },
  { t: "Tempo",  d: "Não se trata de acelerar processos ou alcançar resultados imediatos, mas de permitir que cada elaboração aconteça no tempo necessário para que algo possa, de fato, produzir transformação." },
  { t: "Palavra",d: "A palavra ocupa um lugar central no trabalho analítico. Ao falar livremente, o sujeito pode construir novos sentidos para sua história, reconhecer repetições e encontrar outras formas de se relacionar com aquilo que o faz sofrer." },
  { t: "Ética",  d: "Sigilo, respeito e a recusa em prescrever modos de viver. A análise convida o sujeito a se responsabilizar pelo próprio desejo." },
];

const steps = [
  { n: "01", t: "Contato inicial",        d: "Um primeiro e-mail ou mensagem para apresentarmos, com tranquilidade, o que você procura." },
  { n: "02", t: "Primeira sessão",        d: "Um encontro de escuta, sem compromisso de continuidade. Um espaço para sentir se há ressonância." },
  { n: "03", t: "Processo terapêutico",   d: "Encontros regulares, semanais, em um ritmo construído a dois com tempo para a palavra e para o silêncio." },
  { n: "04", t: "Acompanhamento contínuo",d: "Um percurso que se desdobra. Não há roteiro: há presença, escuta e o trabalho paciente da elaboração." },
];

const testimonials = [
  { quote: "Excelente profissional! Muito atenciosa, acolhedora e ética. Me senti confortável desde a primeira sessão. Recomendo muito!", who: "E. C.", when: "4 meses atrás" },
  { quote: "Ótima profissional, indico mesmo!", who: "D. R.", when: "9 meses atrás" },
  { quote: "Excelente profissional, recomendo muito!", who: "F. F.", when: "9 meses atrás" },
  { quote: "Ótima profissional, recomendo!", who: "R. B.", when: "9 meses atrás" },
  { quote: "Ótima profissional!", who: "C. L. C. T.", when: "9 meses atrás" },
  { quote: "Profissional incrível, super indico.", who: "P. A.", when: "9 meses atrás" },
  { quote: "Excelente profissional.", who: "A. G.", when: "9 meses atrás" },
  { quote: "Ótima profissional.", who: "A. V.", when: "9 meses atrás" },
];

const faqs = [
  { q: "Como funciona o atendimento online?", a: "As sessões online acontecem por videochamada, em ambiente seguro e privado. Mantemos o mesmo cuidado, ética e regularidade dos encontros presenciais — basta um espaço tranquilo e uma boa conexão." },
  { q: "Qual a duração de uma sessão?",       a: "Cada sessão tem 50 minutos. A regularidade habitual é semanal, e o horário é reservado para você ao longo do processo." },
  { q: "Como é a primeira sessão?",           a: "É um encontro inicial para que possamos nos conhecer, conversar sobre o que te trouxe até a terapia e perceber se há ressonância para começarmos um processo. Não há compromisso de continuidade." },
  { q: "O que é psicanálise?",                a: "É uma escuta que considera o inconsciente — aquilo que diz de nós sem que saibamos. Trabalha com a palavra, com o tempo de cada um, e propõe um espaço onde é possível elaborar, e não apenas resolver." },
  { q: "Como agendar?",                       a: "Você pode escrever pelo WhatsApp ou pelo formulário de contato. Respondo pessoalmente, em até dois dias úteis, para combinarmos um primeiro horário." },
];

function Index() {
  const [form, setForm] = useState({ nome: "", email: "", msg: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá, Camila. Meu nome é ${form.nome} (${form.email}).\n\n${form.msg}`;
    window.open(whatsappUrl(msg), "_blank", "noopener,noreferrer");
  };

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
              Pela psicanálise, exploramos suas experiências, emoções e relações buscando, no
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
                src={heroImg.url}
                alt="Retrato de Camila Saraiva Lima, psicóloga."
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
              nos retornos, naquilo que demora a ser dito e que, justamente por isso,
              pede um espaço seguro para aparecer.
            </p>
            <p>
              A escuta psicanalítica acolhe o tempo do sujeito. Não há pressa em concluir,
              corrigir ou resolver. Há, antes, o cuidado de sustentar o que ainda procura
              uma forma de se nomear.
            </p>
            <p className="font-serif text-2xl italic leading-snug text-primary-deep">
              “Curar é, muitas vezes, encontrar coragem para escutar o que sempre esteve
              ali apenas aguardando ser ouvido.”
            </p>
          </div>
        </div>
      </Section>

      {/* ABOUT — versão completa */}
      <Section id="sobre" eyebrow="Sobre">
        <div className="grid gap-16 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <figure>
              <img
                src={camilaImg.url}
                alt="Camila Saraiva Lima, psicóloga."
                loading="lazy"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full object-cover"
              />
              <p className="mt-5 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                {SITE.name} · {SITE.crp}
              </p>
            </figure>
          </div>
          <div className="md:col-span-7">
            <h2 className="font-serif text-4xl md:text-5xl text-primary-deep text-balance">
              Uma escuta que se faz <em className="italic text-accent">tempo</em>, presença e cuidado.
            </h2>
            <div className="mt-8 space-y-5 text-foreground/85">
              <p>
                Sou Camila Saraiva Lima, psicóloga. Vivo e atendo em Passo Fundo · RS, e me
                dedico há mais de uma década à clínica de adultos. Cheguei à psicanálise como
                quem reconhece, em outra língua, algo que já se intuía: que escutar é também
                uma forma de cuidar, e que existem perguntas que pedem mais tempo do que
                respostas.
              </p>
              <p>
                Minha formação reúne a graduação em Psicologia pela USP e a formação
                psicanalítica pelo Instituto Sedes Sapientiae, com supervisão clínica
                contínua e participação em grupos de estudo orientados pela leitura de
                Freud, Winnicott e Lacan. Estes são caminhos — não destinos.
              </p>
              <p>
                Acredito em uma clínica ética, discreta e atenta. Não trabalho com promessas
                de resultado, técnicas de aceleração emocional, nem com qualquer linguagem
                que reduza a vida a desempenho. Acredito, antes, no valor da palavra dita no
                tempo certo, e do silêncio quando ele se faz necessário.
              </p>
            </div>

            <h3 className="mt-10 font-serif text-2xl text-primary-deep">Valores</h3>
            <ul className="mt-4 list-none space-y-3 pl-0 text-foreground/85">
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
          </div>
        </div>
      </Section>

      {/* ABORDAGEM */}
      <Section id="abordagem" eyebrow="Abordagem" className="bg-surface/60">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="font-serif text-4xl md:text-5xl text-primary-deep text-balance">
              Psicanálise — uma escuta que <em className="italic text-accent">sustenta</em> o tempo do sujeito.
            </h2>
            <p className="mt-6 text-foreground/75">
              A psicanálise não é um método para corrigir o que se vive. É uma forma de
              escutar o que ainda não foi possível dizer, e de acompanhar quem deseja
              compreender, em outra chave, a própria história.
            </p>
          </div>
          <div className="md:col-span-7 grid gap-px bg-border/70 sm:grid-cols-2">
            {pilares.map((p, i) => (
              <article key={p.t} className="bg-background p-8 md:p-10">
                <p className="font-serif text-sm tracking-[0.3em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 font-serif text-2xl text-primary-deep">{p.t}</h3>
                <p className="mt-4 text-sm text-foreground/80">{p.d}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* AREAS */}
      <Section id="areas" eyebrow="Áreas de cuidado">
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
      <Section eyebrow="Como funciona a terapia" className="bg-surface/60">
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

      {/* TESTIMONIALS */}
      <Section eyebrow="Quem caminhou comigo">
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-6">
            {testimonials.map((t, i) => (
              <CarouselItem
                key={i}
                className="pl-6 md:basis-1/2 lg:basis-1/3"
              >
                <figure className="flex h-full flex-col border-t border-border pt-8">
                  <blockquote className="font-serif text-2xl italic leading-snug text-primary-deep">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-8 flex items-baseline gap-4 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                    <span>— {t.who}</span>
                    <span className="h-px flex-1 bg-border" />
                    <span>{t.when}</span>
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-10 flex items-center justify-end gap-3">
            <CarouselPrevious className="static translate-y-0 border-primary-deep/40 text-primary-deep hover:bg-primary-deep hover:text-primary-foreground" />
            <CarouselNext className="static translate-y-0 border-primary-deep/40 text-primary-deep hover:bg-primary-deep hover:text-primary-foreground" />
          </div>
        </Carousel>
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

      {/* CONTATO */}
      <Section id="contato" eyebrow="Contato">
        <h2 className="max-w-3xl font-serif text-4xl md:text-5xl text-primary-deep text-balance">
          Uma primeira conversa começa por uma <em className="italic text-accent">mensagem</em>.
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-foreground/80">
          Escreva sem formalidade. Respondo pessoalmente, em até dois dias úteis, para
          combinarmos um horário possível para uma primeira escuta.
        </p>

        <div className="mt-16 grid gap-16 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5 space-y-10">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">WhatsApp</p>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block font-serif text-2xl text-primary-deep link-underline">
                +55 54 99197-6608
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
                Online · Presencial em Passo Fundo · RS
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="md:col-span-7 space-y-8">
            <label className="block">
              <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Nome *</span>
              <div className="mt-3">
                <input
                  required
                  type="text"
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className="w-full border-b border-border bg-transparent pb-3 pt-1 font-serif text-2xl text-primary-deep placeholder:text-muted-foreground/50 focus:border-primary-deep focus:outline-none"
                  placeholder="Como você se chama?"
                />
              </div>
            </label>
            <label className="block">
              <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">E-mail *</span>
              <div className="mt-3">
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border-b border-border bg-transparent pb-3 pt-1 font-serif text-2xl text-primary-deep placeholder:text-muted-foreground/50 focus:border-primary-deep focus:outline-none"
                  placeholder="seu@email.com"
                />
              </div>
            </label>
            <label className="block">
              <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Mensagem</span>
              <div className="mt-3">
                <textarea
                  rows={5}
                  value={form.msg}
                  onChange={(e) => setForm({ ...form, msg: e.target.value })}
                  className="w-full resize-none border-b border-border bg-transparent pb-3 pt-1 font-sans text-base leading-relaxed text-foreground placeholder:text-muted-foreground/60 focus:border-primary-deep focus:outline-none"
                  placeholder="Escreva o que sentir necessário compartilhar — pode ser breve."
                />
              </div>
            </label>
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
