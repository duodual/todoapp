#!/bin/sh

until cd /var/www/todo
do
    echo 'Starting composer install'
done

composer install

cp .env.example .env
php artisan key:generate

php-fpm
