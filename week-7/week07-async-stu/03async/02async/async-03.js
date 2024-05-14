// ./03async/02async/async-03.js
const fs = require("fs");

let files = fs.readdir("./", (err, files) => {
  if (err) {
    console.error(err);
  }
  console.log(files);
});

console.log("Code is done.");
