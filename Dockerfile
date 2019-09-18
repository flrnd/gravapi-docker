FROM node:10-alpine AS builder

COPY . .

RUN npm install && \
    npm run build

FROM node:10-alpine

COPY --from=builder build/app.js .

CMD [ "node", "app.js"]