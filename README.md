![](https://raw.githubusercontent.com/CliffCrerar/bohemian-rhapsody/master/src/assets/img/bhpic.jpeg)

# A full stack demo application

About this application

## To run this app

### Prerequisites

1. Nodejs
2. Docker desktop
3. Docker hub account
4. Azure CLI

npm i mysql

docker run --privileged -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=<>' -p 1433:1433 --name=MSSQL -d mcr.microsoft.com/mssql/server:2019-latest

cmd connect mongo "mongodb+srv://google-mongo-2pvom.mongodb.net/test"  --username <username>

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://<username>:<password>@google-mongo-2pvom.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

mongodb+srv://<username>:<password>@google-mongo-2pvom.mongodb.net/test?retryWrites=true&w=majority
