# Use a imagem base do Node.js LTS mais recente
FROM node:18

# Crie o diretório de trabalho
WORKDIR /app

# Copie os arquivos de configuração
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante dos arquivos do projeto
COPY . .

# Exponha a porta da aplicação
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "start:dev"]
