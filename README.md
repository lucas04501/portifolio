<div align="center">

<img src="https://readme-typing-svg.herokuapp.com?font=DM+Sans&size=32&duration=3000&pause=1000&color=D4F564&center=true&vCenter=true&width=500&lines=Lucas+Pereira;Fullstack+Developer" alt="Typing SVG" />

<p align="center">
  <a href="https://www.linkedin.com/in/lucaspds9/" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>
  <a href="https://github.com/lucas04501" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-161b22?style=for-the-badge&logo=github&logoColor=white" />
  </a>
  <a href="mailto:lucaspds9@hotmail.com">
    <img src="https://img.shields.io/badge/Email-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white" />
  </a>
</p>

</div>

---

![Portfolio Preview](https://raw.githubusercontent.com/lucas04501/portifolio/main/preview.png)

> **Note:** Para adicionar a imagem de preview, tire um screenshot do portfólio rodando em `localhost:3000`, salve como `preview.png` na raiz do projeto e faça commit. A imagem aparecerá automaticamente aqui.

---

## ✨ Funcionalidades

- 🌙 **Dark mode elegante** — inspirado em Vercel, Linear e Apple
- 📦 **Projetos do GitHub** — carregados automaticamente via GitHub API
- 📊 **Estatísticas em tempo real** — repos, stars e linguagens mais usadas
- 🎞️ **Animações suaves** — Framer Motion com física natural
- 📱 **100% responsivo** — mobile, tablet e desktop
- ⚡ **SSR + cache** — sem loading no cliente, dados frescos a cada hora
- 🔎 **SEO otimizado** — metadata, Open Graph e Twitter Cards

---

## 🛠️ Stack

| Camada | Tecnologias |
|---|---|
| **Frontend** | Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion |
| **Backend** | Python, Flask, Supabase, PostgreSQL, REST API |
| **IA & Automação** | Gemini AI, OpenAI, Claude AI |
| **Infra & DevOps** | Vercel, Git, GitHub, Linux |
| **Pagamentos** | Stripe, Resend |

---

## 🚀 Como rodar localmente

**Pré-requisitos:** Node.js 18+

```bash
# 1. Clone o repositório
git clone https://github.com/lucas04501/portifolio.git
cd portifolio

# 2. Instale as dependências
npm install

# 3. Rode em desenvolvimento
npm run dev
```

Acesse **http://localhost:3000** 🎉

```bash
# Build de produção
npm run build && npm start
```

---

## 📁 Estrutura

```
portifolio/
├── app/
│   ├── layout.tsx          # Fontes, metadata e estrutura base
│   ├── page.tsx            # Página principal (Server Component)
│   └── globals.css         # Design tokens e estilos globais
├── components/
│   ├── Nav.tsx             # Navbar fixa com blur ao scroll
│   ├── Hero.tsx            # Seção principal com stats do GitHub
│   ├── About.tsx           # Sobre mim + cards de diferenciais
│   ├── Tech.tsx            # Stack técnica com ícones SVG
│   ├── Projects.tsx        # Projetos do GitHub com filtros
│   ├── GitHubSection.tsx   # Perfil GitHub + barras de linguagem
│   ├── Contact.tsx         # Formulário + links de contato
│   └── Footer.tsx          # Rodapé
├── lib/
│   ├── github.ts           # Fetch da GitHub API com cache
│   └── config.ts           # ✏️ Seus dados pessoais
└── types/
    └── github.ts           # Tipos TypeScript para a API
```

---

<div align="center">
  <sub>Feito com 💚 por <a href="https://github.com/lucas04501">Lucas Pereira</a></sub>
</div>
