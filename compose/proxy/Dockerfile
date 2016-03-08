FROM alpine:latest

MAINTAINER Sean Kilgarriff <seanpkilgarriff@gmail.com>

#Install Nginx and remove the cache because we won't be installing it twice.
RUN apk add --update --no-cache nginx

#Add custom nginx config file.
COPY ./nginx.conf /etc/nginx/nginx.conf

#Add SSL parameters.
COPY ./ssl_params /etc/nginx/ssl_params

#ADD DHParams
COPY ./dhparam4096.pem /etc/nginx/dhparam4096.pem

CMD ["nginx", "-g", "daemon off;"]
