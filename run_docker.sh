set +x
docker_name=proxy
docker rm -f ${docker_name}
docker run --rm --name ${docker_name} -d -p 8080:8080 -p 8081:8081 -v `pwd`/proxypass.conf:/etc/nginx/conf.d/proxypass.conf -v `pwd`:/var/www/html  nginx
