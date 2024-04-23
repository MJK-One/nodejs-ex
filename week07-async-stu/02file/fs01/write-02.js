// ./02file/fs01/write-02.js
const fs = require("fs");

const data = fs.readFileSync("example.txt", "utf8");
if (fs.existsSync("text-1.txt")) {
  console.log("file already exist");
} else {
  writeFileSync("text-1.txt", data);
}

