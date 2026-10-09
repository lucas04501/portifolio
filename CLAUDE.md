# Portfolio Lucas

Portfólio pessoal de Lucas Pereira (estudante de Engenharia de Software, full stack em formação, buscando estágio). Next.js 15 (App Router) + React 19 + TypeScript + Tailwind 3, deploy na Vercel. Em redesenho na branch `feat/redesign`.

## Comandos
- `npm run dev`: desenvolvimento em localhost:3000
- `npm run build` / `npm start`: build e execução de produção
- `npm run lint`: ESLint 9 (flat config em `eslint.config.mjs`, regras `next/core-web-vitals` e `next/typescript`)
- Não há testes.
- `GITHUB_TOKEN` e `NEXT_PUBLIC_SITE_URL` são opcionais (ver `.env.example`); sem token o site usa a API do GitHub de forma anônima, e sem URL vale o endereço atual na Vercel.

## Onde fica o quê
- `content/`: **todo o texto e os dados exibidos** (site, projetos, tecnologias, trajetória). Cada item tem `source` obrigatório no tipo. Para mudar o que o site diz, edite aqui, não os componentes.
- `components/`: apresentação (Server Components; só `Nav`, `HeroSphere` e `PlusSphere` são de cliente). Entradas animadas em CSS (`.reveal`, `.rise`, `.scroll-reveal` em `app/globals.css`), nunca `opacity: 0` vindo de JavaScript.
- `lib/github.ts` (`getRepos`) e `lib/projects.ts`: o GitHub só complementa os projetos curados.
- `app/`: layout com metadados (SEO), `sitemap.ts`, `robots.ts`, `opengraph-image.tsx`, `apple-icon.tsx`, `icon.svg`.

## Regras do projeto
- **Nada sem fonte.** Todo dado exibido (formação, projetos, tecnologias, contato) precisa vir de currículo, repositório ou confirmação do Lucas. Sem anos de experiência, cargos, receita, usuários ou métricas inventadas.
- **Repositório público.** Nunca versionar `.env*`, tokens, telefone, CPF, endereço, documentos nem o currículo. O inventário e as decisões ficam no vault Obsidian (área `04 - Projetos/Portfolio Lucas`), fora do repo.
- **Sem commit, push, merge ou deploy sem autorização explícita.** Push em `main` publica o site na Vercel. Trabalhar só em `feat/redesign`.
- **Sem dependências novas** sem justificar o problema que resolvem. Manter Tailwind 3.
- `GITHUB_TOKEN` (usado em `lib/github.ts`) é segredo: só em variável de ambiente, nunca no código.
- Texto do site em PT-BR. Acessibilidade e `prefers-reduced-motion` são requisitos, não extras.

## Documentação
- Direção visual e arquitetura: `docs/design.md`.
- Contexto, inventário, decisões, plano e progresso: vault Obsidian, nota `PF 00 - Home`.
