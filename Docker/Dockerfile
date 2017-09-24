From debian:jessie
MAINTAINER Ares Yang <yyh.fanatic@gmail.com>

# Label
# LABEL Description: XXX

# Set up debian apt-get list
COPY . test/
RUN mv test/sources.list /etc/apt/sources.list
RUN apt-get update
RUN apt-get upgrade -y --force-yes
#
# install nginx and php-fpm
RUN apt-get install -y --force-yes\
        nginx \
        zip \
        unzip \
        php7.0-zip \
        php7.0-fpm \
        php7.0-mbstring \
        php7.0-common \
        php7.0-xml \
        curl \
        git

# nginx and php 7 config
RUN mv test/php.ini /etc/php/7.0/fpm/php.ini &&
RUN mv test/default /etc/nginx/sites-available/default && service nginx reload

# install composer
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
    && php -r "if (hash_file('SHA384', 'composer-setup.php') === '544e09ee996cdf60ece3804abc52599c22b1f40f4323403c44d44fdfdd586475ca9813a858088ffbc1f233e9b180f061') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;" \
    && php composer-setup.php \
    && php -r "unlink('composer-setup.php');"

RUN mv composer.phar /usr/bin/composer

# install nodejs
RUN curl -sL https://deb.nodesource.com/setup_6.x -o nodesource_setup.sh && bash nodesource_setup.sh
RUN apt-get install -y nodejs build-essential


CMD service php7.0-fpm start && nging -g "daemon off;"
