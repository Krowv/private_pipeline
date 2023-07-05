#On pars d'une image php:8.1-apache
FROM php:8.1-apache
#On copies le contenu dans le dossier actuel dans le dossier /var/www/html du container
COPY . /var/www/html
# Installation de l'extension MySQLi
RUN docker-php-ext-install mysqli

#On expose le port 80
EXPOSE 80
#On lance le serveur apache
CMD ["apache2-foreground"]
