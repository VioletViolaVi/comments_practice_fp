const commentsArr = require("./commentsData");
const express = require("express");
const cors = require("cors");

const app = express();

// find out about these...
app.use(express.json());
app.use(cors());
//

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
