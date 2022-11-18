/* const express = require("express");
require("./config");
const Product = require("./product");
const app = express();
app.use(express.json());
app.post("/create", async (req, resp) => {
  let data = new Product(req.body);
  let result = await data.save();
  // console.log(req.body);
  resp.send(result);
});

app.get("/list", async (req, resp) => {
  let data = await Product.find();
  // console.log(req.body);
  resp.send(data);
});
app.listen(3000);
 */

/* const express = require("express");
require("./config");
const Product = require("./product");
const app = express();
//app.use(express.json());
app.get("/search/:key", async (req, resp) => {
  console.log(req.params.key);
  let data = await Product.find({
    $or: [
      {
        name: { $regex: req.params.key },
      },
    ],
  });
  resp.send(data);
});
app.listen(3000); */
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "student_manage",
  password: "Keshav@888",
});
connection.connect((err) => {
  if (err) {
    console.log("error", err);
  } else {
    console.log("connected succuss");
  }
});
