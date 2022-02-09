const express = require("express");
var cors = require("cors");
const pool = require("./db");

const PORT = process.env.PORT;
const app = express();

//middleware
app.use(cors());
app.use(express.json());

// app.post("/addkeywords", async (req, res) => {
//     try{
//         const{}
//     }
// })
