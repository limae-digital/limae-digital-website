# ---------- Build stage ----------
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---------- Runtime stage ----------
FROM lipanski/docker-static-website:latest

# docker-static-website serves files from /usr/share/caddy
COPY --from=builder /app/dist /usr/share/caddy
