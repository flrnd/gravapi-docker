FROM node:10-alpine as builder

COPY . /home/node/app

WORKDIR /home/node/app

RUN chown -R node:node /home/node/app

RUN npm install && npm run build

# second stage
FROM node:10-alpine

COPY --from=builder /home/node/app/node_modules node_modules

COPY --from=builder /home/node/app/build/app.js app.js

ARG port=1234

ARG NODE_ENV=production

ENV NODE_ENV=${NODE_ENV} PORT=${port}

EXPOSE ${port}

CMD [ "node", "app.js"]