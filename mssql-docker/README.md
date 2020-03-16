> To build this container

create a file named `.secret` in this directory and place the following in the file.

PASSWORD=<strong password>
ACCEPTULA=Y

Save the file and close. Run the following

docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=<>' -e 'MSSQL_PID=Express' -p 1433:1433 -d mcr.microsoft.com/mssql/server:2017-latest-ubuntu 

ln -s /opt/mssql-tools/bin/sqlcmd /bin/sqlcmd

apt-get update

apt-get install curl

curl https://packages.microsoft.com/keys/microsoft.asc | apt-key add -

curl https://packages.microsoft.com/config/ubuntu/16.04/prod.list | tee /etc/apt/sources.list.d/msprod.list

apt-get update

apt-get install mssql-tools unixodbc-dev


----------------------------


;sudo docker run -e 'ACCEPT_EULA=Y' -e 'MSSQL_SA_PASSWORD=b0h3m1an5a7so8y' \
   --name 'sql1' -e 'MSSQL_PID=Developer' -p 1433:1433 \
   -v sql1data:/var/opt/mssql -d mcr.microsoft.com/mssql/server:2019-CU3-ubuntu-18.04

sudo docker build . -t cliffenator/mssql-server --secret .secret


https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-ubuntu?view=sql-server-ver15

https://github.com/Microsoft/mssql-docker

https://hub.docker.com/_/microsoft-mssql-tools

https://hub.docker.com/_/microsoft-mssql-server?tab=resources


https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-ubuntu?view=sql-server-2017
