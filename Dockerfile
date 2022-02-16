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
WORKDIR /app
ARG GITHUB_TOKEN
ENV GITHUB_TOKEN=${GITHUB_TOKEN}
RUN git config --global user.name "Jonathan Earl"
RUN git config --global user.email jonathan.earl@tylertech.com
RUN git clone https://${GITHUB_TOKEN}@github.com/whattheearl/jearl.io
RUN ls
WORKDIR /app/jearl.io
RUN ls
RUN git fetch --tags https://${GITHUB_TOKEN}@github.com/whattheearl/jearl.io
WORKDIR /app/jearl.io/jearl.io
RUN ls
RUN npm ci
RUN npx auto shipit

FROM nginx:1.20-alpine as server
EXPOSE 80
COPY --from=builder /app/out/ /usr/share/nginx/html
