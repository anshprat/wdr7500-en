set +x
docker_name=proxy
docker rm -f ${docker_name}
mac_interface=${1:en0}
mac_local_ip=`ifconfig ${mac_interface} inet|grep inet|awk '{print $2}'`
#mac sed
sed -e "s/LOCAL_IP/${mac_local_ip}/g" proxypass.conf.template >proxypass.conf
#docker run --rm --name ${docker_name} -d -p 8080:8080 -p 8081:8081 -v `pwd`/proxypass.conf:/etc/nginx/conf.d/proxypass.conf -v `pwd`:/var/www/html  nginx
docker run  --name ${docker_name} -d -p 8080:8080 -p 8081:8081 -v `pwd`/hosts:/etc/hosts -v `pwd`/proxypass.conf:/etc/nginx/conf.d/proxypass.conf -v `pwd`:/var/www/html  nginx
