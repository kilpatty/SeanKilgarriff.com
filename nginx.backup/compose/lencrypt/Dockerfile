FROM alpine:latest

MAINTAINER Sean Kilgarriff <seanpkilgarriff@gmail.com>

#Install the dependencies for let's encrypt.
RUN apk add --update --no-cache letsencrypt

COPY ./root /var/spool/cron/crontabs/root

COPY ./entrypoint.sh ./entrypoint.sh

RUN chmod +x ./entrypoint.sh

ENTRYPOINT ["./entrypoint.sh"]
