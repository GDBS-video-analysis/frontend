FROM node:alpine AS builder
RUN apk --no-cache --update --virtual build-dependencies add \
	python3 \
	make \
	g++
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build --prod

FROM nginx:alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/frontend/browser /usr/share/nginx/html