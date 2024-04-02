const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("HOME!!!!!");
});

// 모든 연락처 가져오기
app.get("/contacts", (req, res) => {
    res.status(200).send("Contacts Page");
  });

app.listen(3000, () => {
    console.log(`3000번 포트에서 서버 실행중`);
});