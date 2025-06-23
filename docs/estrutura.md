# Estrutura de pastas em árvore (tree view)

```
src/
├── components/                   # Componentes reutilizáveis e genéricos (botões, inputs, tabelas, etc)
│   ├── Button.jsx
│   ├── Input.jsx
│   ├── Card.jsx
│   ├── DataTable.jsx
│   ├── Modal.jsx
│   └── _info.md

├── layout/                       # Layout padrão da aplicação (sidebar, navbar, etc)
│   ├── DashboardLayout.jsx
│   ├── Sidebar.jsx
│   ├── Topbar.jsx
│   └── _info.md

├── modules/                      # Módulos funcionais (cada pasta representa uma área do sistema)
│   ├── home/
│   │   ├── HomePage.jsx
│   │   └── components/
│   │       └── HomeCard.jsx
│   ├── users/
│   │   ├── UsersPage.jsx
│   │   └── components/
│   │       ├── UserTable.jsx
│   │       └── UserForm.jsx
│   ├── reports/
│   │   ├── ReportsPage.jsx
│   │   └── components/
│   │       └── ReportChart.jsx
│   └── _info.md

├── router/                       # Definição das rotas da aplicação
│   ├── AppRoutes.jsx
│   └── _info.md

├── services/                     # Comunicação com APIs
│   ├── api.js
│   ├── usersService.js
│   ├── reportsService.js
│   └── _info.md

├── constants/                    # Constantes globais (rotas, enums, status, etc)
│   ├── routes.js
│   └── _info.md

├── utils/                        # Funções utilitárias
│   ├── formatDate.js
│   ├── validateEmail.js
│   └── _info.md

├── App.jsx                       # Componente raiz
├── main.jsx                      # Ponto de entrada do app (ReactDOM)
└── index.css                     # Estilos globais
```