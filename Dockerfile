FROM node:12

ARG SHELL=/bin/bash

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 6006

# CMD [ "node", "app.js" ]
ENTRYPOINT /bin/bash