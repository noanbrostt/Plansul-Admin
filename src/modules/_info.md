# modules/

Aqui ficam os **módulos funcionais do sistema**, ou seja, cada conjunto de páginas, lógica e componentes relacionados a uma funcionalidade específica (ex: usuários, relatórios, agendamentos).

## Estrutura comum de um módulo:

users/
├── UsersPage.jsx
├── components/
├──── UserTable.jsx
└──── UserForm.jsx


## Regras de uso:
- Cada módulo deve conter suas **próprias páginas e componentes específicos**.
- Os componentes internos devem ficar dentro da pasta `components/` do próprio módulo.
- Evite importar diretamente componentes de um módulo em outro (em vez disso, extraia para `components/` se for genérico).
