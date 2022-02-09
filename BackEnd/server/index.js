require("dotenv").config();
const { pool } = require("./db");

// const express = require("express");
// var cors = require("cors");

// const PORT = process.env.PORT;
// const app = express();

// See all the tables!
pool.query("SELECT * FROM pg_class WHERE relkind = 'r';", (err, res) => {
  console.log(err, res);
  pool.end();
});
