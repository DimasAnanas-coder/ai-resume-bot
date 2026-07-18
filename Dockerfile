FROM node:22-alpine

WORKDIR /app

RUN apk add --no-cache openssl

COPY package.json ./
RUN npm install

COPY . .

RUN chmod +x scripts/docker-entrypoint.sh
RUN chmod +x scripts/redis-init.sh

CMD ["sh", "scripts/docker-entrypoint.sh"]
