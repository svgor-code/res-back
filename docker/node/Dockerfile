FROM node:hydrogen

WORKDIR /app

COPY package*.json ./

COPY ./prisma ./prisma

RUN npm i -g @nestjs/cli

RUN npm install

RUN npm i -g prisma

RUN npm i -g @prisma/client

EXPOSE 8080

CMD ["npm", "run", "start:migrate:debug"]
