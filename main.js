const {MongoClient} = require('mongodb');
async function main() {
	/** 
    * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
    * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
    */
   const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.h2xlv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

   const client = new MongoClient(uri);

   try{
       //connect to the mongodb cluster
    await client.connect();

    // make the appropriate db calls
    await listDatabases(client);

} catch (e) {
    console.error(e);
} finally {
    await client.close();
}

}

main().catch(console.error);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};