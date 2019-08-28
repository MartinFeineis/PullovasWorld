#!/bin/bash

rm app.zip
zip -r app.zip projectpullova/* uwsgi.ini 
sudo docker build --iidfile=image.id .
rm -f cont.id
sudo docker run -d -i -p 80:80 --cidfile=cont.id -t $(cat image.id)
#sudo docker run -i --cidfile=cont.id  -p 80:80 -t $(cat image.id) /bin/sh
