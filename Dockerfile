FROM node:current

WORKDIR /app
COPY . .

RUN npm ci
RUN npm run build:prod

FROM nginx:mainline-alpine

LABEL Name="ACME Incorporated"
LABEL Author="Fabio Tea <iam@f4b.io>"
LABEL Version="1.0.13"

#COPY nginx_default.conf /etc/nginx/sites-enabled/default
COPY --from=0  /app/dist /usr/share/nginx/html

EXPOSE 80

RUN /bin/chown -R nginx:nginx /usr/share/nginx/html
