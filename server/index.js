const commentsArr = require("./commentsData");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the blog");
});

app.get("/comments", (req, res) => {
  res.send(commentsArr);
});

const port = 4000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
