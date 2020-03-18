FROM node:12-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install @angular/cli

RUN npm install --only=production

COPY . ./

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]
