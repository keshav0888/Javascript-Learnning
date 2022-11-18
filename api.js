const express = require("express");
const dbConnect = require("./mongodb");
const app = express();
app.use(express.json());
app.get("/", async (req, resp) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  resp.send(data);
});
app.post("/home", async (req, resp) => {
  let data = await dbConnect();
  data = await data.find(req.body).toArray();
  resp.send(data);
});
app.listen(3000);
