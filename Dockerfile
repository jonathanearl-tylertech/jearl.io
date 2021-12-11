FROM node:16-alpine as builder
WORKDIR /app
COPY package*.json ./
ENV NODE_ENV="production"
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 8080
CMD [ "npm", "start" ]
