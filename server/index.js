const commentsArr = require("./commentsData");
const express = require("express");
const fs = require("fs");
// const cors = require("cors");
// const http = require("http");
// app.use(express.json());
// app.use(cors());

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the blog");
});

app.get("/comments", (req, res) => {
  res.send(commentsArr);
});

fs.readFile("./commentsData.js", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

const port = 4000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
