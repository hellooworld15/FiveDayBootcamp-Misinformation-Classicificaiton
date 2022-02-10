require("dotenv").config();
const { pool } = require("./db");

const express = require("express");
var cors = require("cors");

const PORT = process.env.PORT || 3002;
const app = express();

// See all the tables!
// pool.query("SELECT * FROM pg_class WHERE relkind = 'r';", (err, res) => {
//   // console.log(err, res);
//   pool.end();
// });{
app.use(cors());

// Just for testing setup
app.get("/getKeywords", async (req, res) => {
  try {
    const website = "www.testing.com";
    const websiteCheck = await pool.query(
      "SELECT * FROM criteria WHERE website = $1",
      [website]
    );
    res.json(websiteCheck.rows);
  } catch (err) {
    console.log(err.message);
  }
});

app.get("/websiteData/:website", async (req, res) => {
  try {
    const { website } = req.body;
    const addWebsite = await pool.query(
      "SELECT * FROM criteria WHERE website = $1",
      [website]
    );
    res.json(addWebsite.rows);
    console.log(req.params);
    res.send("OK");
  } catch (err) {
    console.log(err);
  }
});

app.post("/addWebsite", async (req, res) => {
  console.log(req);
  try {
    const { description, pass, website } = req.body;
    console.log(req.body);
    const newWebsite = await pool.query(
      "INSERT INTO criteria (description, pass, website) VALUES($1 , $2, $3) RETURNING *",
      [description, pass, website]
    );
    res.json(newWebsite.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(400);
    res.end();
  }
});

app.listen(PORT, () => {
  console.log(`sever listening on ${PORT}`);
});
