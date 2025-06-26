# 🧩 Projeto Base React + Vite + DaisyUI

Este projeto é uma base inicial para aplicações React com foco em portais administrativos, dashboards e sistemas web escaláveis. Ele foi pensado para oferecer uma estrutura sólida, padronizada e fácil de manter, com foco na organização por módulos e layout reaproveitável.

---

## 🚀 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/) — build tool leve e rápido
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/) — componentes prontos e responsivos
- [React Router DOM](https://reactrouter.com/en/main) — rotas SPA
- [Docker + Nginx] 

---

## 📁 Estrutura de Pastas

```bash
src/
├── layout/            # Layouts reaproveitáveis (Sidebar, Topbar, etc.)
│   ├── DashboardLayout.jsx
│   ├── Sidebar.jsx
│   └── Topbar.jsx
├── modules/           # Módulos separados por área
│   └── home/
│       └── HomePage.jsx
├── router/            # Arquivos de rotas (opcional, se separar depois)
├── services/          # Lógica de API e serviços externos (opcional)
├── components/        # Componentes reutilizáveis (botões, inputs, etc.)
├── utils/             # Funções auxiliares, helpers
├── constants/         # Constantes globais e enums
├── App.jsx            # Definição das rotas principais
├── main.jsx           # Ponto de entrada da aplicação
└── index.css          # Estilos globais com Tailwind
```
💡 Todas as pastas principais possuem um arquivo _info.md com explicação do propósito e uso da pasta

## 🎨 Tema & Dark Mode
O projeto já vem com suporte a tema claro e escuro. A troca de tema é automática com base na preferência do usuário ou pode ser feita manualmente através do botão na Topbar.


## 📦 Instalação
⚠️ Requer Node.js v22.14.0 e npm v10.8.2 (ou versões compatíveis)

1. Clone o repositório

2. Instale as dependências:
```npm install```

3. Rode o projeto em modo de desenvolvimento:
```npm run dev```

## 🏗️ Build para produção

```
npm run build
```
Os arquivos gerados ficarão em dist/, prontos para serem servidos por um servidor como o Nginx.

## ✍️ Autor
Desenvolvido por Gerake e Noan, como base reutilizável para portais internos e painéis administrativos.
