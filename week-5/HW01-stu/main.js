// ./HW01-stu/main.js
const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 3000;

app.get('/users/:id', (req, res, next) => {
  res.send('사용자 정보 가져오기')
});

app.post('/users', (req, res, next) => {
  res.send('회원가입')
});

app.put('/users/:id', (req, res, next) => {
  res.send('사용자 정보 수정')
});

app.delete('/users/:id', (req, res, next) => {
  res.send('회원탈퇴')
});

app.get('/boards', (req, res, next) => {
  res.send('게시글 가져오기')
});

app.post('/boards', (req, res, next) => {
  res.send('게시글 쓰기')
});

app.put('/boards/:id', (req, res, next) => {
  res.send('게시글 수정')
});

app.delete('/boards/:id', (req, res, next) => {
  res.send('게시글 삭제')
});

app.listen(port, () => {
  console.log(`Express is running on http://${hostname}:${port}/`);
} );
