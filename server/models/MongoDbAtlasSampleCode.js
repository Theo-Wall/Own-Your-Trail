
const { MongoClient } = require('mongodb');

const credentials = './X509-cert-610308615197644496.pem'
const uri = 'mongodb+srv://cluster0.vmoqm.mongodb.net/myFirstDatabase?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority'

const client = new MongoClient(uri, {
  sslKey: credentials,
  sslCert: credentials
});

async function run() {
  try {
    await client.connect();
    const database = client.db("sample_mflix");
    const collection = database.collection("movies");
    const docCount = await collection.countDocuments({});
    console.log('document count:',docCount);
    // perform actions using client

    const query = { title: 'Back to the Future' };
    const movie = await collection.findOne(query);
    console.log(movie);

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);
