#!/bin/bash

echo "conectando al servidor remoto..."

apt update

apt install npm nodejs certbot python3-certbot-nginx -y

npm install

#generar certificados ssl usando certbot
certbot certonly --standalone -d dev9.cyberbunny.online --non-interactive --agree-tos -m danicantonescav@gmail.com

#copiar los certificados generados a la ubicación essperada por tu apllicación
cp /etc/letsencrypt/live/dev9.cyberbunny.online/fullchain.pem
cp /etc/letsencrypt/live/dev9.cyberbunny.online/privkey.pem


echo "proceso completado"