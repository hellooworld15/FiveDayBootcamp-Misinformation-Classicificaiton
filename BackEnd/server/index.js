require("dotenv").config();
const { pool } = require("./db");

const express = require("express");
var cors = require("cors");

const PORT = process.env.PORT || 3001;
const app = express();

// See all the tables!
// pool.query("SELECT * FROM pg_class WHERE relkind = 'r';", (err, res) => {
//   // console.log(err, res);
//   pool.end();
// });{
app.use(cors());
app.get("/getKeywords", async (req, res) => {
  try {
    const keyword = "checking";
    const keywordCheck = await pool.query(
      "SELECT * FROM keywords WHERE keyword = $1",
      [keyword]
    );
    res.json(keywordCheck.rows);
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`sever listening on ${PORT}`);
});
