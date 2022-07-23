const fsPromises = require("fs").promises;
const path = require("path");

const fileOperation = async () => {
  try {
    // fsPromises.readFile(
    //   path.join(__dirname, "text_files", "conversation.txt"),
    //   "utf8"
    // );

    await fsPromises.writeFile(
      path.join(__dirname, "text_files", "conversation.txt"),
      "A: Hi. Welcome to Chucky Cheese. Can I take your order?"
    );

    await fsPromises.appendFile(
      path.join(__dirname, "text_files", "conversation.txt"),
      "\n\nB: Hi. I would like a cheesy pizza please."
    );

    await fsPromises.appendFile(
      path.join(__dirname, "text_files", "conversation.txt"),
      "\n\nA: No problem. That's £34.90 please."
    );

    await fsPromises.appendFile(
      path.join(__dirname, "text_files", "conversation.txt"),
      "\n\nB: Here you are. Thanks."
    );

    await fsPromises.appendFile(
      path.join(__dirname, "text_files", "conversation.txt"),
      "\n\nB: You're welcome. Thank you for choosing chucky cheese!"
    );

    await fsPromises.unlink(
      path.join(__dirname, "text_files", "testRemoveThis.txt")
    );
  } catch (error) {
    console.log(`Something went wrong => [[[${error}]]]`);
  }
};

fileOperation();

/* 

// 'utf8' makes .txt content in string
// < (path.join(__dirname, "text_files", "greeting.txt") > same as "./text_files/greeting.txt"
fs.readFile(
  path.join(__dirname, "text_files", "new_conversation.txt"),
  "utf8",
  (err, data) => {
    if (err) throw err;
    console.log("1st: ", data);
  }
);

console.log("2nd: ", "isolated log statement");

// writes file to write_file.txt
fs.writeFile(
  path.join(__dirname, "text_files", "new_conversation.txt"), "Hi Jon. How are you today?", (err) => {
    if (err) throw err;
    console.log("3rd: ", "been written!");

    // adds text to write_file.txt
    fs.appendFile(path.join(__dirname, "text_files", "new_conversation.txt"), "\n\nI'm good thanks! How are you today Steve?", (err) => {
        if (err) throw err;
        console.log("4th: ", "been appended!");

        fs.rename(path.join(__dirname, "text_files", "new_conversation.txt"), path.join(__dirname, "text_files", "new_conversation.txt"), (err) => {
          if (err) throw err;
          console.log("5th: ", "been renamed!");
        });
      });
  });
*/

// catches uncaught errors
process.on("uncaughtException", (err) => {
  console.log(`There was an uncaught error => [[[${err}]]]`);
  process.exit();
});
