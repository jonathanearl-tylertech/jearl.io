FROM --platform=linux/amd64 node:16 as installer
WORKDIR /app
COPY ./jearl.io/package*.json /app/
RUN npm ci
COPY ./jearl.io/ /app/

FROM --platform=linux/amd64 node:16 as linter
WORKDIR /app
COPY --from=installer /app/ /app/
RUN npm run lint --if-present

FROM --platform=linux/amd64 node:16 as tester
WORKDIR /app
COPY --from=installer /app/ /app/
RUN npm run test --if-present

FROM --platform=linux/amd64 node:16 as builder
WORKDIR /app
COPY --from=installer /app/ /app/
RUN npm run build

FROM --platform=linux/amd64 node:16 as releaser
ARG GITHUB_TOKEN
ENV GITHUB_TOKEN=$GITHUB_TOKEN
WORKDIR /app/jearl.io
COPY ./ /app/
COPY --from=installer /app/ /app/jearl.io/
RUN git fetch --tags --unshallow https://${GITHUB_TOKEN}@github.com/whattheearl/jearl.io :origin/main
RUN npx auto shipit --name whattheearl --email earl.jonathan@gmail.com

FROM nginx:1.20-alpine as server
EXPOSE 80
COPY --from=builder /app/out/ /usr/share/nginx/html
