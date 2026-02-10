FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Prepare static files
RUN mkdir -p /app/public \
 && cp -r dist/* /app/public/

# Minimal HTTP server for Coolify Caddy to proxy to
EXPOSE 80
CMD ["busybox", "httpd", "-f", "-p", "3000", "-h", "/app/public"]