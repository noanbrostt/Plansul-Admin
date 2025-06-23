# services/

Contém os arquivos responsáveis pela **comunicação com APIs** externas ou internas. Aqui ficam as funções que fazem requisições HTTP, como `GET`, `POST`, etc.

## Exemplos:
- `api.js`: configuração geral do Axios ou Fetch
- `usersService.js`: funções para lidar com a API de usuários
- `reportsService.js`: funções para relatórios

## Regras de uso:
- Cada serviço deve ser modularizado conforme o domínio da funcionalidade.
- Nunca fazer requisições diretamente dentro de componentes — use sempre um service.
- Pode conter lógica de transformação ou tratamento de dados da API antes de retornar para o frontend.
