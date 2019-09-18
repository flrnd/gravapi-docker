FROM node:10-alpine

WORKDIR /app

COPY package*.json rollup.config.js /app/

RUN npm ci --only=production && \
    npm run build

CMD [ "node", "build/app.js"]