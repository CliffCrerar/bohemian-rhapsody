> To build this container

create a file named `.secret` in this directory and place the following in the file.

PASSWORD=<strong password>
ACCEPTULA=Y

Save the file and close. Run the following


sudo docker run -e 'ACCEPT_EULA=Y' -e 'MSSQL_SA_PASSWORD=<YourStrong!Passw0rd>' \
   --name 'sql2' -e 'MSSQL_PID=Developer' -p 1401:1433 \
   -v sql1data:/var/opt/mssql -d mcr.microsoft.com/mssql/server:2019-CU3-ubuntu-18.04