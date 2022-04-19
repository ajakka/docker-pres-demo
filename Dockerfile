FROM node:16

WORKDIR /server

COPY package*.json ./

RUN npm i

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD ["npm", "start"]