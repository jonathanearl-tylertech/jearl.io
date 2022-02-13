FROM node:16-alpine as builder
WORKDIR /app
COPY ./jearl.io/package*.json /app/
ENV NODE_ENV="production"
RUN npm ci
COPY ./jearl.io/ /app/
RUN npm run build

FROM nginx:1.20-alpine
EXPOSE 80
COPY --from=builder /app/out/ /usr/share/nginx/html
