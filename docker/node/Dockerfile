FROM node:hydrogen

WORKDIR /app

COPY package*.json ./

RUN npm i -g @nestjs/cli

RUN npm install

RUN npx prisma generate

# COPY ./ ./

EXPOSE 8080

CMD ["npm", "run", "start:dev"]