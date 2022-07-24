const commentsArr = require("./commentsData");
const express = require("express");
const fs = require("fs");
const path = require("path");

// to create express app
const app = express();

/*
const cors = require("cors");
const http = require("http");
app.use(express.json());
app.use(cors());
*/

app.get("/", (req, res) => {
  res.send("Welcome to the blog");
});

app.get("/comments", (req, res) => {
  res.send(commentsArr);
});

app.get("/comments/:id", (req, res) => {
  console.log("req.params.id :", req.params.id);
  res.send(commentsArr[req.params.id - 1]);
});

app.get("/html_page", (req, res) => {
  const html = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script src="./client/js/scripts.js" defer></script>
      <link rel="stylesheet" href="./client/css/styles.css" />
      <title>Comments</title>
    </head>
    <body>
      <section>
        <h3>comments to appear & stay below:</h3>
        <div>
          <ul id="displayComments" style="
          border: solid black 0.2rem;
          height: 15rem;
          width: 30.5rem;
          overflow: hidden;
          margin: 2rem 0;
      "></ul>
        </div>
      </section>
  
      <form id="wholeForm">
        <textarea
          name="commentTextarea"
          id="commentTextarea"
          cols="70"
          rows="10"
          maxlength="30"
          placeholder="put comments here"
        ></textarea>
        <br />
        <input type="submit" value="post" />
      </form>
    </body>
  </html>
  `;
  res.send(html);
});

/*
fs.readFile(path.join(__dirname, "commentsData.js"), "utf8", (err, data) => {
  if (err) throw err;
  console.log("1st: ", data);
});

// continuous w/ nodemon :(
fs.unlink(path.join(__dirname, "draft.js"), (err) => {
  if (err) throw err;
  console.log("1st: ", err);
});

// continuous w/ nodemon :(
fs.appendFile(path.join(__dirname, "draft.js"), 'console.log("this is a draft");', (err) => {
  if (err) throw err;
  console.log("2nd: ", "been written!");
});
*/

// for testing practice
const getLargest = (a, b, c) => {
  return Math.max(a, b, c);
};
console.log(getLargest(1, 2, 3));

const port = 4000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
// should local storage be used?
