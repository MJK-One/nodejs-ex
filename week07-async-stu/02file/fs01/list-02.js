// ./02file/fs01/list-01.js
const fs = require("fs");
fs.readdir("./", (err, files) => {
  if (err) {
    console.error(err);
    return;     
  }
  console.log(files);
});
