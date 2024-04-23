// ./fs/readfile-00.js
const fs = require('fs');

const file = fs.readFile('readme.txt', {
   encoding: 'utf8'
})

console.log(file) // ?