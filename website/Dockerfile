FROM node:14 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

RUN yarn install --production=false

COPY . . /usr/src/app/

RUN yarn build 

CMD ["node", "server.js"]