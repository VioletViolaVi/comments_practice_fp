const fs = require("fs");
const path = require("path");

// 'utf8' makes .txt content in string
// < (path.join(__dirname, "text_files", "greeting.txt") > same as "./text_files/greeting.txt"
fs.readFile(
  path.join(__dirname, "text_files", "greeting.txt"),
  "utf8",
  (err, data) => {
    if (err) throw err;
    console.log("1st: ", data);
  }
);

console.log("2nd: ", "hello there!");

fs.writeFile(
  path.join(__dirname, "text_files", "written_file.txt"),
  "The Written File!",
  (err) => {
    if (err) throw err;
    console.log("3rd: ", "been written!");
  }
);

fs.appendFile(
  path.join(__dirname, "text_files", "appended_file.txt"),
  "The Appended File!",
  (err) => {
    if (err) throw err;
    console.log("4th: ", "been appended!");
  }
);

// catches uncaught errors
process.on("uncaughtException", (err) => {
  console.log(`There was an uncaught error => [[[${err}]]]`);
  process.exit();
});
