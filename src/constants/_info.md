# constants/

Pasta destinada a armazenar **valores fixos** usados na aplicação, como textos padrão, enums, rotas, nomes de status, tipos, etc.

## Exemplos:
- `routes.js`: mapeamento de nomes de rotas
- `statusCodes.js`: lista de status ou códigos da API
- `roles.js`: tipos de usuários ou permissões

## Regras de uso:
- Usar esta pasta para centralizar qualquer valor que se repete muito ou possa mudar futuramente.
- Evita "strings mágicas" espalhadas pelo código.
- Ideal para manter o código mais legível e fácil de manter.
