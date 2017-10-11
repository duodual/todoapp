FROM nginx:mainline

COPY nginx.conf /etc/nginx/
COPY ./sites/default.conf /etc/nginx/sites-available/default.conf

RUN adduser -D -H -u 1000 -s /bin/bash www-data

EXPOSE 80 443

CMD ["nginx"]
