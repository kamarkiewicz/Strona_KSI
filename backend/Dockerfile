# Cockpit-CMS image
FROM kamarkiewicz/cockpitcms:latest

# Locally-built base image
# FROM cockpitcms

ADD --chown=www-data:www-data defines.php /var/www/html/
ADD --chown=www-data:www-data config /var/www/html/config/
ADD --chown=www-data:www-data addons /var/www/html/addons/

RUN mv /var/www/html /var/www/cms && mkdir /var/www/html && mv /var/www/cms /var/www/html/cms
