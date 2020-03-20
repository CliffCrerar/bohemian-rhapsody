

# "Build from node:12-slim image"
FROM node:12-slim

# Set working directory
WORKDIR /usr/src/app
# Copy package file
COPY package*.json ./
# Install Angular cli
RUN npm install @angular/cli

RUN npm install --only=production

COPY . ./

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]
