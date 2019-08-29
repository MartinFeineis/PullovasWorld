#!/bin/bash
BYellow='\033[1;33m'
Color_Off='\033[0m'

rm app.zip
echo -e " ${BYellow} deleted app.zip and building now ${Color_Off}"
zip -r app.zip projectpullova/* notesapp/* uwsgi.ini test.py
echo -e " ${BYellow} zipped everything up ${Color_Off}"
sudo docker build --iidfile=image.id .
cat image.id
echo -e " ${BYellow}  build Dockerfile and cating imagid ${Color_Off}"
rm -f cont.id
echo -e " ${BYellow}  deleting cont.id File and running container ${Color_Off}"
sudo docker run -d -i -p 8080:8080 --cidfile=cont.id -t $(cat image.id) 
#sudo docker run -i --cidfile=cont.id  -p 80:80 -t $(cat image.id) /bin/sh
