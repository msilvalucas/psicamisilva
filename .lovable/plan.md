# Plano — Site da psicanalista Camila Lima

Site institucional em português (Brasil), estética editorial silenciosa, paleta verde profunda, tipografia serifa (Cormorant Garamond) + sans (Inter). Mock realista de identidade profissional.

## Identidade fictícia (mock)
- Nome: **Camila Lima**
- Registro: **CRP 06/123456**
- Formação: Psicanalista, formação pelo Instituto Sedes Sapientiae; graduação USP
- Cidade: São Paulo — atendimento online e presencial (Pinheiros)
- WhatsApp: +55 11 91234-5678
- E-mail: contato@psicamilalima.com.br
- Instagram: @psi_camilaslima

## Estrutura de rotas (TanStack Start, arquivos em `src/routes/`)
- `/` — Hero + Filosofia + Sobre (resumo) + Áreas + Como funciona + Reflexões + Depoimentos + FAQ + CTA final
- `/sobre` — Biografia humana extensa, abordagem, valores, escuta ética
- `/abordagem` — Psicanálise, processo, ética
- `/areas` — Cards de áreas de apoio em detalhe
- `/reflexoes` — Lista de cards (sem páginas individuais — links âncora `#`)
- `/contato` — Formulário + WhatsApp + informações

Header sticky com navegação suave; footer minimalista com CRP, Instagram, e-mail, aviso de sigilo.

## Design system (`src/styles.css`)
Tokens OKLCH derivados da paleta:
- `--primary` #164024 (verde profundo)
- `--primary-deep` #112612
- `--accent` #537351
- `--sage` #748C70
- `--sage-light` #8AA686
- `--background` off-white quente #FBFAF6
- `--surface` sage washed #EEF0E9
- `--foreground` #112612

Tipografia via Google Fonts (`Cormorant Garamond` 400/500/600 + `Inter` 300/400/500). Headings em serif com tracking levemente negativo; corpo em sans 17px, leading generoso (1.7).

Componentes shadcn reestilizados com variantes editoriais (botão `ghost-serif`, `solid-deep`). Sem glassmorphism, sem gradientes neon. Hover suaves (opacidade, underline reveal). Scroll suave nativo.

## Seções da home
1. **Hero** — fundo off-white, retrato editorial à direita, título serif grande "Um espaço para escuta, reflexão e descoberta de si." + subtítulo + CTAs ("Agendar uma sessão" abre WhatsApp, "Saber mais" rola para Filosofia).
2. **Filosofia** — "O silêncio também tem algo a dizer." Layout em duas colunas com tipografia grande à esquerda e parágrafo contemplativo à direita; pequeno ornamento (linha + ponto) como pausa visual.
3. **Sobre** — retrato + bio centrada na escuta ética, não em credenciais.
4. **Áreas de cuidado** — grid 2×3 de cards minimalistas (Ansiedade, Autoestima, Relacionamentos, Luto, Conflitos emocionais, Autoconhecimento) com número romano + título serif + breve texto.
5. **Como funciona a terapia** — 4 passos numerados em linha vertical (Contato inicial → Primeira sessão → Processo terapêutico → Acompanhamento contínuo).
6. **Reflexões** — 4 cards editoriais com data, título serif, resumo.
7. **Depoimentos** — 2–3 depoimentos curtos, anônimos ("A., 34 anos"), em tipografia serif itálica, separadores discretos.
8. **FAQ** — accordion shadcn discreto.
9. **CTA final** — banner verde profundo #164024, frase "Talvez as respostas que você procura não estejam fora, mas na possibilidade de se escutar mais profundamente." + botão "Agendar pelo WhatsApp".

## Imagens
- **Retrato editorial** gerado via `imagegen` (mulher brasileira de ~35 anos, expressão serena, luz natural suave, fundo verde sálvia desbotado, estilo retrato editorial; salvo em `src/assets/portrait.jpg`, premium).
- **Ornamento de silêncio** — pequena ilustração SVG inline (linha + ponto) na seção Filosofia. Sem reproduzir a imagem de referência enviada (uso apenas como inspiração de mood).

## SEO & meta
`head()` por rota com title, description, og:title, og:description em PT-BR. `lang="pt-BR"` no `__root.tsx`. JSON-LD `Person` + `MedicalBusiness` na home.

## UX & acessibilidade
- Mobile-first, navegação hamburger em mobile (sheet shadcn).
- Botão flutuante de WhatsApp no canto inferior direito.
- Foco visível, alt em todas as imagens, contraste AA verificado.
- Formulário de contato (`/contato`) — apenas frontend por enquanto (envia via `mailto:` ou WhatsApp); sem backend nesta entrega.

## Detalhes técnicos
- Sem Lovable Cloud nesta etapa (sem auth, sem DB, sem envio real de e-mail).
- Fontes via `<link>` no `__root.tsx` head.
- Animações sutis com classes Tailwind (`transition-opacity`, `animate-in fade-in`) — sem framer-motion para manter leveza.
- WhatsApp link: `https://wa.me/5511912345678?text=...` com mensagem pré-preenchida em PT.

## Fora do escopo
- Páginas individuais para cada Reflexão (apenas previews).
- Sistema de agendamento real / integração de calendário.
- Backend, autenticação, banco de dados.
- Tradução EN.
