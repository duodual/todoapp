FROM nginx:mainline

ADD nginx.conf /etc/nginx/
ADD ./sites/default /etc/nginx/sites-available/default.conf

RUN adduser -D -H -u 1000 -s /bin/bash www-data

EXPOSE 80 443

CMD ["nginx"]
