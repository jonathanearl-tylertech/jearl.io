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
ARG TEST
ARG TEST2
WORKDIR /app/jearl.io
COPY ./ /app/
RUN apk add git
RUN git fetch --unshallow --tags
RUN npm ci
RUN echo ${TEST}
RUN echo "$MY_VAR"
RUN echo `$GITHUB-TOKEN $GH_TOKEN`
RUN GH_TOKEN=${TEST2} npx auto shipit

FROM nginx:1.20-alpine as server
EXPOSE 80
COPY --from=builder /app/out/ /usr/share/nginx/html
