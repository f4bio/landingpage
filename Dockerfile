FROM node:current

WORKDIR /app
COPY . .

RUN npm ci
RUN npm run build:prod

FROM nginx:mainline-alpine

ARG BUILD_VERSION
ARG BUILD_DATE
ARG APPLICATION_NAME=landingpage
ARG DEBIAN_FRONTEND=noninteractive

LABEL vendor="Fabio Tea <iam@f4b.io>"
LABEL name=f4bio/$APPLICATION_NAME
LABEL description="Personal Landing Page"
LABEL url="https://github.com/f4bio/landingpage"
LABEL application="landingpage"
LABEL build-date=$BUILD_DATE
LABEL version=$BUILD_VERSION
LABEL vcs-url="https://github.com/f4bio/landingpage"

#COPY nginx_default.conf /etc/nginx/sites-enabled/default
COPY --from=0 /app/dist /usr/share/nginx/html

RUN /bin/chown -R nginx:nginx /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
