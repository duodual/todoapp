FROM nginx:mainline

RUN apt-get update && apt-get install -y curl vim
COPY nginx.conf /etc/nginx/
RUN rm -rf /etc/nginx/conf.d/*
COPY services/* /etc/nginx/conf.d/

RUN adduser -D -H -u 1000 -s /bin/bash www-data

EXPOSE 80 443

CMD ["nginx"]
