# build stage
FROM node:lts-alpine as build-stage

# Create app directory
WORKDIR /app

ARG APP_PORT

COPY .env.example .
COPY deploy/nginx/nginx.conf.template nginx/
RUN apk add --update --no-cache gettext && \
    /bin/sh -c "envsubst '\$APP_PORT' < nginx/nginx.conf.template > nginx/nginx.conf" && \
    apk del gettext

RUN cat nginx/nginx.conf


COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage

RUN rm /etc/nginx/conf.d/default.conf

# Configure nginx
## copy our custom nginx config into conf.d folder
COPY ./nginx.conf /etc/nginx/nginx.conf

# Add application
COPY --from=build-stage /app/dist /usr/share/nginx/html


EXPOSE 80


# Nginx to serve 'static' dist directory
CMD ["nginx","-g","daemon off;"]

