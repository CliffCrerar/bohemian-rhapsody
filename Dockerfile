

# "Build from node:12-slim image"
FROM node:12-slim

ENV MONGOUSER=$MONGOUSER
ENV MONGOPW=$MONGOPW
ENV MONGOHOST=$MONGOHOST
# Set working directory
WORKDIR /usr/src/app
# Copy package file
COPY package*.json ./
# Install node modules
RUN npm ci

# Copy files
COPY . ./

RUN npm run build

# Expose port
EXPOSE 3000

# Start application
CMD [ "npm", "start" ]
