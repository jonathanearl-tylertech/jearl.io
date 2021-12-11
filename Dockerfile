FROM node:lts as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 8080