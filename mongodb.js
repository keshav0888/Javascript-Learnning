const { MongoClient, Db } = require("mongodb");
const url = "mongodb://0.0.0.0:27017/";
const databasename = "e-comm";
const client = new MongoClient(url);
async function dbConnect() {
  let result = await client.connect();
  console.log("db collected");
  db = result.db(databasename);
  return db.collection("products");
}
module.exports = dbConnect;
