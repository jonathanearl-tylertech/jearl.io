FROM --platform=linux/amd64 node:16 as tester
WORKDIR /app
COPY ./jearl.io/package*.json /app/
RUN npm ci
COPY ./jearl.io/ /app/
RUN npm run lint --if-present
RUN npm run test --if-present

FROM --platform=linux/amd64 node:16 as builder
WORKDIR /app
COPY --from=tester /app/ /app/
RUN npm run build

FROM --platform=linux/amd64 node:16 as releaser
ARG TOKEN
ENV GH_TOKEN=$TOKEN
WORKDIR /app/jearl.io
COPY ./ /app/
RUN git fetch --unshallow --tags
RUN git config --global user.email github-actions[bot]@users.noreply.github.com
RUN git config --global user.name github-actions[bot]
RUN npm ci
RUN npx auto shipit

FROM nginx:1.20-alpine as server
EXPOSE 80
COPY --from=builder /app/out/ /usr/share/nginx/html
