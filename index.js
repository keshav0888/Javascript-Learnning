/* const app = require("./app");
const fs = require("fs");
//console.log(app.y);
const arr = [2, 4, 5, 6];
const result = arr.filter((item) => {
  return item >= 4;
}); */
/* fs.writeFileSync("hellokeshav.txt", "keshav");
console.log(result); */
/* const dataControl = (req, resp) => {
  resp.write("<h1>hello this is keshav</h1>");
  resp.end();
};
const http = require("http");
http.createServer(dataControl).listen(4500);
 */
/* const http = require("http");
const data = require("./data1");
http
  .createServer((req, resp) => {
    resp.writeHead(404, { "content-Type": "application/json" });
    resp.write(JSON.stringify(data));
    resp.end();
  })
  .listen(4500); */
/* const fs = require("fs");
const input = process.argv;
fs.writeFileSync(input[2], input[3]); */
/* const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "files"); */
/* console.log(dirPath);
for (let i = 0; i < 5; i++) {
  fs.writeFileSync(dirPath + `apple${i}.txt`, "a simple text file");
}
   */
/* fs.readdir(dirPath, (err, files) => {
  files.forEach((item) => {
    console.log("file name is", item);
  });
}); */

/* console.log("starting up");
setTimeout(() => {
  console.log("2 second log");
}, 2000);
setTimeout(() => {
  console.log("0 second log");
}, 0);
console.log("finishing up"); */

/* const express = require("express");
const app = express();
app.get("", (req, res) => {
  console.log("dta set by browser", req.query);
  res.send("Hello this is home page");
});

app.get("/about", (req, res) => {
  res.send("Hello this is about page");
});
app.get("/help", (req, res) => {
  res.send("Hello this is about page");
});

app.listen(3000); */
/* const express = require("express");
const app = express();
const reqFilter = (req, resp, next) => {
  console.log("reqFilter");
  if (!req.query.age) {
    resp.send("please provide age");
  } else {
    next();
  }
};
app.use(reqFilter);
app.get("", (req, resp) => {
  resp.send("Welcome to home page");
});
app.get("/users", (req, resp) => {
  resp.send("Welcome to users page");
});
app.listen(3000); */
/* const { MongoClient, Db } = require("mongodb");
const url = "mongodb://0.0.0.0:27017/";
const databasename = "e-comm";
const client = new MongoClient(url);
async function getData() {
  let result = await client.connect();
  console.log("db collected");
  db = result.db(databasename);
  collection = db.collection("products");
  let data = await collection.find({ name: "Oppo" }).toArray();
  console.log(data);
}
getData();
 */
/* dbConnect().then((resp) => {
  resp
    .find()
    .toArray()
    .then((data) => {
      console.warn(data);
    });
  console.warn();
});
 */
const insert = require("./insert");
const update = require("./update");
const dbConnect = require("./delete");
const Delete = require("./update");
const main = async () => {
  let data = await dbConnect();
  //await insert();
  //data = await data.find().toArray();
  // console.warn(data);
  await Delete;
};
main();
