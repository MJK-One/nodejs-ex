// ./fs/readfile-01.js
const fs = require('fs');

const file = fs.readFileSync('readme.txt', {
   encoding: 'utf8'
})

console.log(file)  // '파일내용을 읽어주세요'