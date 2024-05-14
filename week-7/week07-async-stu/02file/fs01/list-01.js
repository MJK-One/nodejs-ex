// ./02file/fs01/list-01.js
const fs = require("fs");

let files = fs.readdirSync("./");
console.log(files);
