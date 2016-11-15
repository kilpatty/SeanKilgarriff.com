FROM node:6.7

ENV APP_ENV=staging

RUN mkdir -p /app

WORKDIR /app

COPY . /app

RUN apt-get update && apt-get install ocaml libelf-dev -y

RUN npm install -g yarn

RUN yarn install
