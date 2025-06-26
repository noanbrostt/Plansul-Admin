# Informações e Uso dos Componentes da Sidebar

Este diretório contém os componentes modulares que compõem a `Sidebar` principal da aplicação. Eles foram desenvolvidos para facilitar a manutenção e a clareza do código.

## Estrutura do Diretório:

Sidebar.jsx # O componente principal da Sidebar (container)
Sidebar/
├── SidebarContext.jsx # Contexto React para compartilhar o estado da Sidebar (collapsed, hovering, etc..)
├── SidebarHeader.jsx # Componente para o cabeçalho (logo)
├── SidebarSectionTitle.jsx # Componente para os títulos de seção (ex: "Menu", "Devs")
├── SidebarLink.jsx # Componente para um item de navegação simples
└── SidebarDropdown.jsx # Componente para um item de navegação com sub-menus

## Componentes Individuais

{/_ 1. Exemplo de SidebarSectionTitle _/}
<SidebarSectionTitle title="MÓDULOS" />

- **Props:** `title` (string)
- **Função:** Exibe um título de seção.

{/_ 2. Exemplo de SidebarLink _/}
<SidebarLink
  label="Dashboard"
  to="/dashboard"
  icon={<MdDashboardCustomize />}
/>

- **Props:**
  - `label` (string)
  - `to` (string)
  - `icon` (elemento React)
- **Função:** Cria um link simples para uma rota.

{/_ 3. Exemplo de SidebarDropdown _/}
<SidebarDropdown
  label="Configurações"
  icon={<FiSettings />}
  subItems={[
    { label: "Meu Perfil", to: "/settings/profile", icon={<FiUser />} },
    { label: "Usuários", to: "/settings/users", icon={<FiUsers />} },
  ]}
/>

- **Props:**
  - `label` (string)
  - `icon` (elemento React)
  - `subItems` (array de objetos)
- **Função:** Cria um item com um sub-menu expansível. Cada objeto em `subItems` tem `label`, `to` e `icon`, como um `SidebarLink`.
