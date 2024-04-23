// ./03async/02async/async-01.js
const fs = require("fs");

const data = fs.readFileSync("example.txt", "utf8"); // 블로킹
console.log(data);          // 파일 읽기가 끝날 때까지 대기
console.log("코드 끝!");     // 파일을 읽고 내용을 표시할 때까지 대기
