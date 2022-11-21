FROM node:hydrogen

WORKDIR /app

COPY package*.json ./

RUN npm i -g @nestjs/cli

RUN npm install

EXPOSE 8080

CMD ["npm", "run", "start:dev"]