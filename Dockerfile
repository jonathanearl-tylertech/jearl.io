FROM --platform=linux/amd64 node:16-alpine as tester
WORKDIR /app
COPY ./jearl.io/package*.json /app/
RUN npm ci
COPY ./jearl.io/ /app/
RUN npm run lint --if-present
RUN npm run test --if-present

FROM --platform=linux/amd64 node:16-alpine as builder
WORKDIR /app
COPY --from=tester /app/ /app/
RUN npm run build

FROM --platform=linux/amd64 node:16-alpine as releaser
WORKDIR /app
COPY --from=tester /app/ /app/
RUN npm run release

FROM nginx:1.20-alpine as server
EXPOSE 80
COPY --from=builder /app/out/ /usr/share/nginx/html
