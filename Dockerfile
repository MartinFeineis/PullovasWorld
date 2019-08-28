FROM alpine:latest
WORKDIR /var/www/
COPY requirements.txt ./
COPY entrypoint.sh ./
RUN chmod +x entrypoint.sh
RUN ./entrypoint.sh
COPY app.zip ./
RUN unzip app.zip

# Install debug tools 
# RUN apk add curl vim

EXPOSE 8080
#RUN ls -lah
ENTRYPOINT ["/usr/bin/uwsgi", "--ini", "/var/www/uwsgi.ini"]
