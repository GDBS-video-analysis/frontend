FROM node:alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/ /usr/share/nginx/html