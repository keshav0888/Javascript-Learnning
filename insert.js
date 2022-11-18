const dbConnect = require("./mongodb");
const insert = async () => {
  const db = await dbConnect();
  const result = db.insert({
    name: "note 5",
    brand: "vivo",
    price: 320,
    category: "mobile",
  });
  result
    .then(() => {
      console.log("data inserted");
    })
    .catch(() => {
      console.log("data insert error");
    });
  //console.log("insert function");
};
module.exports = insert;
