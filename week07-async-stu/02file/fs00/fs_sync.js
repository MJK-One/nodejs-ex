// ./02file/fs00/fs_sync.js
const fs = require('fs');

console.log('A');

const result = fs.readFileSync('sample.txt', 'utf8');

console.log(result);
console.log('C');
