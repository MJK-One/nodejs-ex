// ./02file/fs01/read-02.js
const fs = require("fs");

const data = fs.readFileSync("example.txt", "utf8");
console.log(data);
