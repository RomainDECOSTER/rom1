FROM node:10-alpine

LABEL author="romain.decoster@pm.me"

WORKDIR /usr/src/app

COPY bin/ .
COPY package.json/ .

RUN npm install --production

CMD node server.js