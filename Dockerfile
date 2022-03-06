FROM node:16 as installer
WORKDIR /app
COPY ./client/package*.json /app/
RUN npm ci
COPY ./client/ /app/

FROM node:16 as linter
WORKDIR /app
COPY --from=installer /app/ /app/
RUN npm run lint --if-present

FROM node:16 as tester
WORKDIR /app
COPY --from=installer /app/ /app/
RUN npm run test --if-present

FROM  node:16 as builder
WORKDIR /app
COPY --from=installer /app/ /app/
COPY ./data /data/
RUN npm run build
EXPOSE 8080
CMD ["npm", "start"]

FROM node:16 as releaser
WORKDIR /app
ARG GITHUB_TOKEN
ENV GITHUB_TOKEN=${GITHUB_TOKEN}
RUN git config --global user.name "github action"
RUN git config --global user.email action@github.com
RUN git clone https://${GITHUB_TOKEN}@github.com/whattheearl/jearl.io .
RUN git fetch --tags https://${GITHUB_TOKEN}@github.com/whattheearl/jearl.io
WORKDIR /app/client
RUN npm ci
RUN npm run release