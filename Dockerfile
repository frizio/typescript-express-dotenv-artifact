FROM node:16

ENV PORT=5000

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 5000

CMD ["npm", "start"]
