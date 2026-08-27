# 🌐 Devictor — Portfólio de Desenvolvedor Front-End

![HTML5](https://img.shields.io/badge/HTML5-Semântico-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-Modular_4px-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Acessibilidade](https://img.shields.io/badge/WCAG_2.2-AA_Compliant-005A9C?style=for-the-badge)
![Deploy](https://img.shields.io/badge/Vercel-Produção-000000?style=for-the-badge&logo=vercel&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

Portfólio pessoal e institucional desenvolvido com foco em alta performance visual, acessibilidade nativa (WCAG 2.2 AA) e design system sóbrio voltado para o ecossistema corporativo B2B.

---

## 🛠️ Tecnologias & Decisões Arquiteturais

| Camada | Tecnologia | Propósito Arquitetural |
| :--- | :--- | :--- |
| **Estrutura** | HTML5 Semântico | Hierarquia de tags semânticas (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`) para SEO e leitores de tela. |
| **Estilização** | SCSS / Sass Modular | Arquitetura modular (`_variables`, `_mixins`, `_reset`, `partials/`) baseada em grade estrita de múltiplos de 4px/8px e design tokens de alto contraste. |
| **Interatividade** | JavaScript Vanilla (ES6+) | Micro-interações otimizadas, animação de contadores de métricas via `IntersectionObserver` e controle de background dinâmico. |
| **Hospedagem** | Vercel | Deploy contínuo integrado à branch principal com tempo de resposta ultrarrápido (Edge Network). |

---

## 🚀 Projetos Flagship em Exibição

O portfólio destaca aplicações complexas com foco em engenharia front-end corporativa:

1. **[Talent Metrics AI](https://talent-metrics-landing.vercel.app/)**
   - *SaaS B2B & Playground de Triagem com IA*
   - Stack: Next.js 16 (App Router), TypeScript, Tailwind CSS, Groq AI (Llama 3.3 70B), Vercel AI SDK, Zod, Vitest.
   - [Repositório no GitHub](https://github.com/soudevictor/talent-metrics-landing)

2. **[Axiom ERP](https://axiomerp.vercel.app/)**
   - *Suíte Corporativa de Supply Chain & Tesouraria*
   - Stack: Angular v22+, TypeScript, Tailwind CSS & SCSS, @ngrx/signals, Dexie.js (IndexedDB), CDK Virtual Scroll, Vitest.
   - [Repositório no GitHub](https://github.com/soudevictor/axiom-erp)

---

## ⚡ Performance & Acessibilidade

- ♿ **WCAG 2.2 Level AA:** Estados de foco visíveis (`focus-visible`), contraste mínimo de 15.8:1 entre texto e fundo, e atributos `aria-label` em todos os links e botões.
- 🎯 **Zero Layout Shift (CLS = 0):** Dimensões reservadas para imagens, ícones SVG e containers de texto.
- 📱 **Mobile-First & Responsividade:** Layout fluido adaptado para qualquer resolução (320px até 4K).

---

## 🏗️ Estrutura de Diretórios

```text
devictor-portfolio/
├── assets/
│   ├── docs/                   # Currículo em PDF atualizado
│   ├── images/
│   │   ├── logos/              # Logotipos do portfólio
│   │   └── thumbnails/         # Logotipos e previews dos projetos
│   ├── javascript/
│   │   └── index.js            # Lógica dos contadores, eventos e animações
│   └── styles/
│       ├── css/
│       │   └── style.css       # CSS compilado e otimizado
│       └── sass/               # Código-fonte SCSS modular
├── index.html                  # Documento principal da aplicação
├── agent.md                    # Especificações de arquitetura do projeto
└── package.json                # Metadados e scripts de build
