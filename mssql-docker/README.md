> To build this container

create a file named `.secret` in this directory and place the following in the file.


Save the file and close. Run the following

docker run --env-file .secret -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=$PASSWORD' -e 'MSSQL_PID=Express' -p 1433:1433 -d mcr.microsoft.com/mssql/server:2017-latest-ubuntu 

docker run --env-file .secret -p 1433:1433 -d mcr.microsoft.com/mssql/server:2017-latest-ubuntu 

gcloud run deploy express --image cliffenator/sql-express-dev-server:latest --allow-unauthenticated

----------------------------

https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-ubuntu?view=sql-server-ver15

https://github.com/Microsoft/mssql-docker

https://hub.docker.com/_/microsoft-mssql-tools

https://hub.docker.com/_/microsoft-mssql-server?tab=resources


https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-ubuntu?view=sql-server-2017
