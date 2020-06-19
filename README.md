This code provides english translations for TP Link WDR 7500 v6.
It does so by sending all the requests for the router via a local proxy.
The local proxy forwards all but two requests to upstream router.
The two requests it serves from local files have the strings used in various labels.
This covers most of the top most level usecases in the router.
However some second level translations are still not in place.
 ( for example the list of apps in App Managemet).
 This is because those are part of inline code rather than standalone files.


To use this, update 10.10.10.107 with the IP of your local laptop/desktop where
you want to run the proxy/ docker file.

The docker is used to serve nginx. This can be done without docker as well.

After updating the IP, run the run_docker.sh script and configure your browser to use
the proxy pac file from localhost:8080/proxy.pac. After this, visit tplogin.cn
should show English translations for your chinese firmware WDR7500 v6.
