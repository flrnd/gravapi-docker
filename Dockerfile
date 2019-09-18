FROM node:10-alpine

COPY . /app

WORKDIR /app

RUN npm i -g rollup && \
    npm ci --only=production && \
    npm run build && \
    npm uninstall -g rollup

CMD [ "node", "build/app.js"]