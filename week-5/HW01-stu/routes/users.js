const express = require('express');
const router = express.router();

router.get('/:id', (req, res, next) => {
    res.send('사용자 정보 가져오기')
});

router.get('/', (req, res, next) => {
    res.send('회원가입')
});

router.put('/:id', (req, res, next) => {
    res.send('사용자 정보 수정')
});

router.delete('/:id', (req, res, next) => {
    res.send('회원탈퇴')
});

module.exports = router;