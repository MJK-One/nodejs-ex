// ./03async/02async/sync-03.js
const fs = require("fs");

let files = fs.readdirSync("./");
console.log(files);

console.log("Code is done.");
