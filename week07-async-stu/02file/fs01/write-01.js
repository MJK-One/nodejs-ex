// ./02file/fs01/write-01.js
const fs = require("fs");

const data = fs.readFileSync("example.txt", "utf8");
writeFileSync("text-1.txt", data);
