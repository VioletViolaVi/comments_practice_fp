const fs = require("fs");
const path = require("path");

// 'utf8' makes .txt content in string
// < (path.join(__dirname, "text_files", "greeting.txt") > same as "./text_files/greeting.txt"
fs.readFile(
  path.join(__dirname, "text_files", "greeting.txt"),
  "utf8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);

console.log("hello there!");

fs.writeFile(
  path.join(__dirname, "text_files", "greeting_reply.txt"),
  "Hi and good day to you too!",
  (err) => {
    if (err) throw err;
    console.log("Da file has been written!");
  }
);

// catches uncaught errors
process.on("uncaughtException", (err) => {
  console.log(`There was an uncaught error => [[[${err}]]]`);
  process.exit();
});
