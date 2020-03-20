

# "Build from node:12-slim image"
FROM node:12-slim

# Set working directory
WORKDIR /usr/src/app
# Copy package file
COPY package*.json ./
# Install node modules
RUN npm install
# Install Angular cli
RUN npm install @angular/cli
# Install Chrome binary for testing
RUN npm install --save chromium-binary
# Copy files
COPY . ./
# Run tests in headless mode
RUN npm run test-headless
# Build prod application
RUN npm run build
# Remove angular CLI
RUN npm remove @angular/cli
# Remove Headless tests
RUN npm install --save chromium-binary
# Expose port
EXPOSE 3000
# Start application
CMD [ "npm", "start" ]
