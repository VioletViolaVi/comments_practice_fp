const commentsArr = require("./commentsData");
const express = require("express");
const fs = require("fs");
const path = require("path");
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

fs.readFile(path.join(__dirname, "commentsData.js"), "utf8", (err, data) => {
  if (err) throw err;
  console.log("1st: ", data);
});

fs.unlink(path.join(__dirname, "draft.js"), (err) => {
  if (err) throw err;
  console.log("1st: ", err);
});

// // continuous w/ nodemon :(
// fs.appendFile(path.join(__dirname, "draft.js"), 'console.log("this is a draft");', (err) => {
//   if (err) throw err;
//   console.log("2nd: ", "been written!");
// });

const port = 4000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
