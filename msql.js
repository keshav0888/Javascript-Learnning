const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "student_manage",
  password: "Keshav@888",
});
connection.connect((err) => {
  if (err) {
    console.log("error");
  } else {
    console.log("connected succuss");
  }
});
