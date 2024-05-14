const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send("HOME!!!!!");
});

// 새 연락처 추가하기
app.post("/contacts", (req, res) => {
res.status(201).send("Create Contacts");
});

// 연락처 상세보기
app.get("/contacts/:id", (req, res) => {
res.status(200).send(`View Contact for ID: ${req.params.id}`);
});

// 연락처 수정하기
app.put("/contacts/:id", (req, res) => {
res.status(200).send(`Update Contact for ID: ${req.params.id}`);
});

// 연락처 삭제하기
app.delete("/contacts/:id", (req, res) => {
res.status(200).send(`Delete Contact for ID: ${req.params.id}`);
});

app.listen(3000, () => {
    console.log(`3000번 포트에서 서버 실행중`);
});