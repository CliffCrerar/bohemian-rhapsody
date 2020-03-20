cmd connect mongo "mongodb+srv://google-mongo-2pvom.mongodb.net/test"  --username <username>

const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://<username>:<password>@google-mongo-2pvom.mongodb.net/boraps";

const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
