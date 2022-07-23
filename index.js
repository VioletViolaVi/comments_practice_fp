const fs = require("fs");

// 'utf8' makes .txt content in string
fs.readFile("./files/greeting.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// catches uncaught errors
process.on("uncaughtException", (err) => {
  console.log(`There was an uncaught error => [[[${err}]]]`);
  process.exit();
});
