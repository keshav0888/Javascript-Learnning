const dbConnect = require("./mongodb");
const Delete = async () => {
  const db = await dbConnect();
  const result = db.deleteOne({ name: "note 5" });
  result
    .then(() => {
      console.log("data deleted");
    })
    .catch(() => {
      console.log("data delete error");
    });
  //console.log("insert function");
};
module.exports = Delete;
