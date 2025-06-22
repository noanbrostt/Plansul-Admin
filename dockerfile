# Usa a imagem oficial do Node.js para buildar a aplicação
FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Usa a imagem oficial do Nginx para servir a aplicação
FROM nginx:alpine

# Copia a configuração personalizada do Nginx para o container
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia os arquivos de build da aplicação para o diretório de serviço do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expõe a porta 80 do container
EXPOSE 80

# Comando para iniciar o Nginx quando o container for executado
CMD ["nginx", "-g", "daemon off;"]