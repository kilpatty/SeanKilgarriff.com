FROM alpine:latest

MAINTAINER Sean Kilgarriff <seanpkilgarriff@gmail.com>

#Install Nginx and remove the cache because we won't be installing it twice.
RUN apk add --update --no-cache nginx

#Add custom nginx config file.
COPY ./nginx.conf /etc/nginx/nginx.conf

USER nobody

CMD ["nginx", "-g", "daemon off;"]
