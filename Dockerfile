FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Coolify Caddy serves files from here
RUN mkdir -p /app/public \
 && cp -r dist/* /app/public/

# Keep container alive for Coolify
CMD ["sleep", "infinity"]

