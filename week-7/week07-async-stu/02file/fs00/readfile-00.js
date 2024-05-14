// ./fs/readfile-00.js
const fs = require('fs');

const file = fs.readFile('readme.txt', {
   encoding: 'utf8'}, (err,data)=> {
      if(err){
         console.error(err);
      }
      console.log(data);
   })

console.log(file) // ?