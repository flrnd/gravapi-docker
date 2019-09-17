FROM node:10-alpine as builder

WORKDIR /app

COPY . /app

RUN npm install && \
    npm run build

# second stage
FROM node:10-alpine

COPY --from=builder /app .

ARG port=1234

ENV PORT=${port}

CMD [ "node", "build/app.js"]