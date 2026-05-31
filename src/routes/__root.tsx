import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <p className="font-sans text-xs uppercase tracking-[0.3em] text-muted-foreground">Página</p>
        <h1 className="mt-4 font-serif text-6xl text-primary-deep">Não encontrada</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          A página que você procura pode ter sido movida — ou talvez ainda esteja por vir.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center border border-primary-deep px-6 py-3 text-xs uppercase tracking-[0.25em] text-primary-deep transition-colors hover:bg-primary-deep hover:text-primary-foreground"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-3xl text-primary-deep">Algo não carregou</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Tente novamente em um instante. Se persistir, escreva para contato@psicamilalima.com.br.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center border border-primary-deep px-6 py-3 text-xs uppercase tracking-[0.25em] text-primary-deep transition-colors hover:bg-primary-deep hover:text-primary-foreground"
          >
            Tentar de novo
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-primary-deep"
          >
            Ir para o início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#164024" },
      { title: "Camila Lima — Psicanalista | Escuta, reflexão e autoconhecimento" },
      {
        name: "description",
        content:
          "Camila Lima, psicanalista em São Paulo. Um espaço de escuta cuidadosa para quem busca compreender suas experiências, emoções e relações. Atendimento online e presencial.",
      },
      { name: "author", content: "Camila Lima" },
      { property: "og:site_name", content: "Camila Lima — Psicanalista" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:title", content: "Camila Lima — Psicanalista" },
      {
        property: "og:description",
        content:
          "Um espaço para escuta, reflexão e descoberta de si. Psicanálise em São Paulo, online e presencial.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Camila Lima",
          jobTitle: "Psicanalista",
          description:
            "Psicanalista em São Paulo. Atendimento clínico online e presencial.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "São Paulo",
            addressRegion: "SP",
            addressCountry: "BR",
          },
          telephone: "+55 11 91234-5678",
          email: "contato@psicamilalima.com.br",
          sameAs: ["https://instagram.com/psi_camilaslima"],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-dvh flex-col bg-background">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
        <WhatsAppFloat />
      </div>
    </QueryClientProvider>
  );
}
