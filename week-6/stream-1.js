const fs = require("fs");
const readStream = fs.createReadStream("./readMe.txt");

readStream.on("data",(chunk) => {
    console.log
})