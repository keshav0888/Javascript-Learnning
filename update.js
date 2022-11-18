const dbConnect = require("./mongodb");
const insert = async () => {
  const db = await dbConnect();
  const result = db.updateOne(
    { name: "note 5" },
    { $set: { name: "max pro 5" } }
  );
  result
    .then(() => {
      console.log("data updated");
    })
    .catch(() => {
      console.log("data update error");
    });
  //console.log("insert function");
};
module.exports = insert;
