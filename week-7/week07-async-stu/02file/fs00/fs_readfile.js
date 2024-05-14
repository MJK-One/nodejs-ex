// ./02file/fs00/fs_readfile.js
const fs = require('fs');

console.log('A');

fs.readFile('sample.txt', 'utf8', (err, result) => {
    console.log(result);
});

console.log('C');
